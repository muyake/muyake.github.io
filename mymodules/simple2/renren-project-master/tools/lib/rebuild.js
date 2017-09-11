var path = require('path'),
    Pms  = require('./core/pms.js'),
    fs   = require('fs');

function rebuild(){
    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");
    var pms = new Pms(false , _srcPath);
    pms.gennerateWebpackConfig();

    console.log("\x1b[32m" + "rebuild success" + "\x1b[0m");
}

module.exports = rebuild;