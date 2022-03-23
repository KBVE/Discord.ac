const upath = require('upath');
const fse = require('fs-extra');

const sourcePath = upath.resolve(upath.dirname(__filename), '../dist');
const destPath =upath.resolve(upath.dirname(__filename), '../../docs');

fse.copySync(sourcePath, destPath, { overwrite: true }, function (err) {
    if (err) {  console.error(err);  }  else {  console.log("Yay"); }
  });

