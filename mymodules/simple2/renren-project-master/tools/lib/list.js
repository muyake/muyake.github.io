var path = require('path'),
    Pms  = require('./core/pms.js'),
    fs   = require('fs');


function showList(){
    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");
    var pms = new Pms(false , _srcPath);
    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");

    for (var key in pms._projectList){
        if (pms._projectList[key].status == "active"){
            console.log("\n\x1b[1m \x1b[32m" + key + "      " + "*active");
        }
        else{
            console.log("\n \x1b[0m" + key);
        }
    }

    console.log("\n" + "\x1b[0m");
}

module.exports = showList;