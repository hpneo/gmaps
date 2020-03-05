const Liquid = require('liquidjs');
const marked = require('marked');
const frontMatter = require('front-matter');
const hljs = require('highlight.js');
const sass = require('node-sass');
const path = require('path');
const fs = require('fs');

const highlight = (code, lang) =>
  hljs.highlightAuto(code, [lang]).value;

const site = {
  build_revision: Date.now(),
};

const engine = new Liquid();

engine.registerTag('seo', {
  render() {
    return '';
  },
});

engine.registerTag('highlight', {
  parse(token) {
    const args = token.args.split(' ');
    this.language = args[0];
    this.value = args[1];
  },
  render(context) {
    return `<pre><code class="language-${this.language}">${hljs.highlightAuto(context.environments[this.value], [this.language]).value}</code></pre>`;
  },
});

const siteRoot = path.resolve(__dirname, './site');
const outputRoot = path.resolve(__dirname, './docs');
const assetsOutputPath = path.join(outputRoot, 'assets');
const layoutRoot = path.resolve(siteRoot, '_layouts');
const assetsRoot = path.resolve(siteRoot, 'assets');

const renderPage = (file, dirOutputPath = '') => {
  const destFilename = file.name.split('.').slice(0, -1).join('.');
  const filePath = path.resolve(siteRoot, dirOutputPath, file.name);
  const fileOutputPath = path.resolve(outputRoot, dirOutputPath);
  const destPath = `${path.resolve(fileOutputPath, destFilename)}.html`;

  const rawContent = fs.readFileSync(filePath, { encoding: 'utf8', });

  const data = frontMatter(rawContent);
  const content = data.body;// marked(data.body, { highlight, });
  const layoutFilePath = data.attributes.layout || 'default';
  const layout = fs.readFileSync(path.join(layoutRoot, `${layoutFilePath}.html`), { encoding: 'utf8', });

  fs.mkdirSync(fileOutputPath, { recursive: true, });

  engine.parseAndRender(content, { ...data.attributes, site, }).then((output) => {
    engine.parseAndRender(layout, { site, ...data.attributes, content: marked(output, { highlight, }), }).then(pageOutput =>
      fs.writeFileSync(destPath, pageOutput, { encoding: 'utf8', })
    );
  });
};

const copyAssets = () => {
  const stylePath = path.join(assetsRoot, 'css', 'style.scss');
  const styleOutputPath = path.join(assetsOutputPath, 'css', 'style.css');

  fs.mkdirSync(path.join(assetsOutputPath, 'css'), { recursive: true, });
  fs.mkdirSync(path.join(assetsOutputPath, 'js'), { recursive: true, });

  if (fs.existsSync(stylePath)) {
    const styleOutput = sass.renderSync({ file: stylePath, outFile: styleOutputPath, }).css;

    fs.writeFileSync(styleOutputPath, styleOutput);
  }

  fs.readdirSync(path.join(assetsRoot, 'js')).forEach(fileName =>
    fs.copyFileSync(path.join(assetsRoot, 'js', fileName), path.join(assetsOutputPath, 'js', fileName))
  );
};

const buildSite = (dirPath = '') => {
  copyAssets();

  fs.readdir(path.resolve(siteRoot, dirPath), { encoding: 'utf8', withFileTypes: true, }, (error, files) => {
    if (error) {
      throw error;
    }

    files.filter(file => file.isFile()).forEach(file => renderPage(file, dirPath));
    files.filter(file => (file.isDirectory() && !file.name.match(/_layouts|assets/))).forEach((directory) => {
      buildSite(directory.name);
    });
  });
};

buildSite();

module.exports = {
  siteRoot,
  buildSite,
};
