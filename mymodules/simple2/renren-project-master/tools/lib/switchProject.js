
var path = require('path'),
    Pms  = require('./core/pms.js'),
    fs   = require('fs');

function switchProject(projectName){
    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");

    var pms = new Pms(false, _srcPath);
    if (!pms._projectList[projectName]){
        console.log("Project isn't exist");
        process.exit();
    }
    else{
        for (var key in pms._projectList){
            pms._projectList[key].status = 'unactive';
        }

        pms._projectList[projectName].status = 'active';
        pms._projectInfo = pms._projectList[projectName];
        pms.gennerateWebpackConfig();
        pms.writeProjectsInfoJson();
        console.log('ckeckout\t' + pms._projectInfo.type + "/" + pms._projectInfo.name);
    }
}

module.exports = switchProject;