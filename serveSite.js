const StaticServer = require('node-static').Server;
const path = require('path');
const fs = require('fs');
const { siteRoot, buildSite, } = require('./generateSite');

fs.watch(siteRoot, { recursive: true, }, (event, filename) => {
  console.log(filename, event);
  buildSite();
});

const server = new StaticServer(path.resolve(__dirname, './docs'), { cache: false, });

require('http').createServer((request, response) => {
  request.addListener('end', () => {
    server.serve(request, response);
  }).resume();

  console.log(request.method, request.url);
}).listen(1234);
