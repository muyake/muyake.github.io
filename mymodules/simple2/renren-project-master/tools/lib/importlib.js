var path = require('path'),
    Pms  = require('./core/pms.js'),
    fs   = require('fs');
var libs = {zepto:true, flexible:true}

function importlib(libName){
    if (!libName){
        console.log('libName must be not empty,  use as  "pms import [libName]"');
        process.exit();
        return;
    }

    if (libName== "--show"){
        for( var key in libs){
            console.log("\x1b[1m \x1b[32m" + key + "\t");
        }
        console.log("\x1b[0m");
        process.exit();
        return;
    }

    if (!libs[libName]){
        console.log('we not have this libe, please check spell or contact rihao.li@renren-inc.com');
        process.exit();
        return;
    }


    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");

    var pms = new Pms(false, _srcPath);

    if (!pms._projectInfo.libs){
        pms._projectInfo.libs = [];
        pms._projectInfo.libs.push(libName);
    }
    else{
        for(var i =0; i<pms._projectInfo.libs.length ;i++)
        {
            if (pms._projectInfo.libs[i] == libName){
                console.log("lib is allready import!")
                process.exit();
            }
        }
        pms._projectInfo.libs.push(libName);
    }

    for (var key in pms._projectLsit){
        if (pms._projectLsit[key] == 'activity'){
            pms._projectLsit[key] = pms._projectInfo;
        }
    }

    pms.writeLibs();
    pms.writeProjectsInfoJson();

    console.log("lib import done");
    process.exit();
}


module.exports = importlib;