var path = require('path'),
    Pms  = require('./core/pms.js'),
    fs   = require('fs');


function addtmp(tmpname){

    if(!tmpname){
        console.log("template name is must be enter! e.x : pms addtmp [tmpname] ");
        process.exit();
    }

    tmpname = tmpname.toLowerCase();

    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");
    var pms = new Pms(false, _srcPath);
    for (var i = 0; i < pms._projectInfo.tmp.length; i++){

        if(tmpname == pms._projectInfo.tmp[i]){
            console.log("template name is allready exsist!");
            process.exit();
        }
    }

    pms._projectInfo.tmp.push(tmpname);

    for (var key in this._projectList){
    if (this._projectList[key].status = 'active'){
        this._projectList[key] = this._projectInfo;
        }
    }

    pms.gennerateWebpackConfig();
    pms.generateTemplate(tmpname);
    pms.writeProjectsInfoJson();
}

module.exports = addtmp;