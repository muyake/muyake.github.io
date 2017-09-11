/* author: rihao.li 
 * description： renrenlive project manage system coreModule
 * contact-way: rihao.li@renren-inc.com  mobile: 18301007730
 */


/*
    Pms params:
    
    @projectInfo | object | [svnPath][name][type] 

    @srcPath     | string | pms-rootPath

    @mode        | string | 'g' - generate project 'sw' - switch project 'st' startProject
*/

var fs   = require('fs');
var path = require('path');

function Pms(projectInfo, srcPath, mode){
    this._srcPath = srcPath;
    this._projectList = this.getProjectList();

    if (projectInfo){
        this._projectInfo = projectInfo;
        this._projectSrcPath = path.join("src/project/", this._projectInfo.type, "/", this._projectInfo.name, "/");
        this._activityProject = projectInfo;
    }
    else{
        for (var key in this._projectList){
            if (this._projectList[key].status == 'active'){
                this._projectInfo = this._projectList[key];
                }
            }
        }
    }

/* mode G to make a new project */

Pms.prototype.gennerateWebpackConfig = function (){
    var webpackConfigtext = fs.readFileSync(this._srcPath + '/tools/lib/core/webpack.config.template.txt');
    var entryTmp = "";

    for (var i=0; i < this._projectInfo.tmp.length; i++){
        entryTmp += this._projectInfo.tmp[i] + ':["./src/project/' + this._projectInfo.type + '/' + this._projectInfo.name +'/js/' + this._projectInfo.tmp[i] + '.js"],\n\t\t';
    }

    webpackConfigtext = webpackConfigtext.toString();
    webpackConfigtext = webpackConfigtext.replace(/{{entry}}/g,       entryTmp);
    webpackConfigtext = webpackConfigtext.replace(/{{type}}/g,        this._projectInfo.type);
    webpackConfigtext = webpackConfigtext.replace(/{{projectName}}/g, this._projectInfo.name);
    webpackConfigtext = webpackConfigtext.replace(/{{svnPath}}/g,     this._projectInfo.svnPath);

    var fd = fs.openSync(this._srcPath + "/webpack.config.js", "w", 0755);
    fs.writeSync(fd, webpackConfigtext);
}

Pms.prototype.gennerateProjectDirConstruct = function(){
    fs.mkdirSync(this._projectSrcPath, 0755);
    fs.mkdirSync(this._projectSrcPath + "img", 0755);
    fs.mkdirSync(this._projectSrcPath + "fonts", 0755);
    fs.mkdirSync(this._projectSrcPath + "scss", 0755);
    fs.mkdirSync(this._projectSrcPath + "js", 0755);
    fs.mkdirSync(this._projectSrcPath + "template", 0755);
    fs.mkdirSync(this._projectSrcPath + "js/libs", 0755);
}

Pms.prototype.registerProject = function(){
    var key = this._projectInfo.type + this._projectInfo.name, pkey;

    for(pkey in this._projectList){
        this._projectList[pkey].status = 'unactive';
    }

    Object.defineProperty(this._projectList, key, {value: this._projectInfo, writable: true, enumerable: true, configurable: true});
    Object.defineProperty(this._projectList[key], 'status', {value: 'active', writable: true, enumerable: true, configurable: true});

    this.writeProjectsInfoJson();
}

Pms.prototype.getProjectList = function(){

    var projectListJSON;

    if (!fs.existsSync(this._srcPath + '/tools/lib/core/projectList.json')){
        return {};
    }
    else{
        projectListJSON = fs.readFileSync(this._srcPath + '/tools/lib/core/projectList.json', 'utf8');
        if (!projectListJSON.length){
            return {}
        }
        else{
            return JSON.parse(projectListJSON);
        }
    }
}

Pms.prototype.generateTemplate = function(tmpname){

    tmpname = tmpname ? tmpname : this._projectInfo.name;

    var htmlTemplate = fs.readFileSync(this._srcPath + '/tools/lib/core/htmlTemplateforMobileterminal.txt');
    htmlTemplate = htmlTemplate.toString();

    htmlTemplate = htmlTemplate.replace(/{{type}}/g, this._projectInfo.type);
    htmlTemplate = htmlTemplate.replace(/{{name}}/g, this._projectInfo.name);
    htmlTemplate = htmlTemplate.replace(/{{tmpname}}/g, tmpname);

    var sassTemplate = fs.readFileSync(this._srcPath + '/tools/lib/core/scssTemplateforMobileterminal.txt');
    sassTemplate = sassTemplate.toString();
    // html
    var fd = fs.openSync(this._srcPath + "src/project/" + this._projectInfo.type + '/' + this._projectInfo.name +"/template/" + tmpname +'.jsp', "w", 0755);
    fs.writeSync(fd, htmlTemplate)

    //libs

    this.writeLibs();

    // scss
    fd = fs.openSync(this._srcPath + "src/project/" + this._projectInfo.type + '/' + this._projectInfo.name +"/scss/" +  tmpname + '.scss', "w", 0755);
    fs.writeSync(fd, sassTemplate);

    fd = fs.openSync(this._srcPath + "src/project/" + this._projectInfo.type + '/' + this._projectInfo.name +"/js/" + tmpname + ".js", "w", 0755);
    fs.writeSync(fd, "require('../scss/" + tmpname + ".scss')     //gennerate by pms , don't delete");
}

Pms.prototype.writeProjectsInfoJson = function(){
    var projectListJSON = JSON.stringify(this._projectList);

    var fd = fs.openSync(this._srcPath + "/tools/lib/core/projectList.json", "w", 0755);
        fs.writeSync(fd, projectListJSON);
}

Pms.prototype.writeLibs = function(){

    var libsTemplate = '';
    var fd = fs.openSync(this._srcPath + "src/project/" + this._projectInfo.type + '/' + this._projectInfo.name +"/js/libs/libs.js", "w", 0755);
    
    if (this._projectInfo.libs){
        for (var i = 0; i < this._projectInfo.libs.length; i++)
        {
            libsTemplate += 'require("' + this._projectInfo.libs[i] + '");\n';
        }
        fs.writeSync(fd, libsTemplate);
    }
    else{
        fs.writeSync(fd, libsTemplate);
    }
}

module.exports = Pms;