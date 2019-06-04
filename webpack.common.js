const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'gmaps.js',
    library: 'GMaps',
    libraryTarget: 'window',
    libraryExport: 'default',
  },
  externals: {
    jQuery: {
      commonjs: '$',
      commonjs2: '$',
      amd: '$',
      root: '$',
      var: '$',
    },
    google: {
      commonjs: 'google',
      commonjs2: 'google',
      amd: 'google',
      root: 'google',
      var: 'google',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env'
              ]
            ],
          },
        },
      }
    ],
  },
};
