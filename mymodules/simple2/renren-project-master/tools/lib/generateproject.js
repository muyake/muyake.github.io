/* author: rihao.li 
 * description： generate renrenLive
 * contact-way: rihao.li@renren-inc.com  mobile: 18301007730
 */

var path = require('path');
var fs   = require('fs');
var Pms  = require('./core/pms.js');

function generateProject(projectInfo){
    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");

    var pms = new Pms(projectInfo, _srcPath, 'g');

    pms.gennerateProjectDirConstruct();

    pms.gennerateWebpackConfig();

    pms.registerProject();

    pms.generateTemplate();

    console.log("project init done");

    process.exit();
}

module.exports = generateProject;