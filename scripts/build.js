const fs = require('fs');
const HTMLParser = require('node-html-parser');
const copydir = require('copy-dir');
const ajShared = require('../src/js/shared.js');
const rimraf = require("rimraf");

rimraf('dist', {}, (e) => {
console.log('deleter dist')
fs.mkdir('dist', { recursive: true }, (err) => {
  if (err) throw err;


    fs.readFile('src/template/index.html', 'utf8', function (err, data) {
        
      if (err) {
        return console.log(err);
      }
      console.log('read index');

      const page = HTMLParser.parse(data);
      const body = page.querySelector('body');
      const headerContainer = page.querySelector('#pageContent');
      headerContainer.appendChild(ajShared.indexContent());

      fs.writeFile('dist/index.html', page, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log('write index');
      });
    })

    copydir.sync('src/template/tool.html', 'dist/tool.html')
    copydir.sync('src/template/admin.html', 'dist/admin.html')
    });
});

