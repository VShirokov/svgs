const fs = require('fs');
const { componentTemplate, exportTemplate } = require('./templates/');
const { pascalCase } = require('case-anything');

function getFiles(dirPath, callback) {
  fs.readdir(dirPath, function (err, files) {
    if (err) return callback(err);

    for (const file of files) {
      const cutFileName = pascalCase(file.split('.').slice(0, -1).join('.'));
      const formatFileName = `${pascalCase(file.split('.').slice(0, -1).join('.'))}Icon`;

      fs.writeFile(
        `components/${formatFileName}.tsx`,
        componentTemplate(file, cutFileName, formatFileName),
        err => {
          if (err) {
            console.error(err)
            return
          }
        }
      );
      fs.appendFile(`./index.ts`, exportTemplate(formatFileName), err => {
        if (err) {
          console.error(err)
          return
        }
      });
    }
  })
};

getFiles('./src', (err, files) => console.error(err || files));
