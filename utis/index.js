const path = require('path');
const fs = require('fs');

const clearDir = (dirPath) => (
  fs.readdir(dirPath, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(dirPath, file), err => {
        if (err) throw err;
      });
    }
  })
);

module.exports = { clearDir };