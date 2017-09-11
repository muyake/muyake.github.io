/* author: rihao.li 
 * description： generate renrenLive interact party
 * contact-way: rihao.li@renren-inc.com  mobile: 18301007730
 */


var path = require('path');
var readline = require('readline');
var fs = require('fs');
var generateProject = require('./generateproject');


var questionArr = [
        {question: "(请输入项目类型, 输入'list'获取类型列表): ", checkAnser: checkProjectType},
        {question: "(请输入项目名称): ", checkAnser: checkProjectName},
        {question: "(请输入SVN仓库的绝对路径): ", checkAnser: checkSvnPath}
    ]

var typeList = ['activity', 'h5', 'wechat'];

var questionIndex = 0;

var projectInfo = {};

var cnReg = /[^\u4e00-\u9fa5]/;

var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");

function projectInit(){
    this.init();
}

projectInit.prototype.init = function(){
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(questionArr[questionIndex].question, function(answer){questionArr[questionIndex].checkAnser(answer, rl)});
}

function checkProjectName(answer, rl){
    if(fs.existsSync(_srcPath + "src/project/" + projectInfo.type + "/" + answer))
    {
        console.log("\n项目已存在!\n");
        reNewQuestion(rl);
        return;
    }

    if (answer.length && cnReg.test(answer)){
        questionIndex ++;
        projectInfo.name = answer.toLowerCase();
        projectInfo.tmp = [answer.toLowerCase()];
        reNewQuestion(rl);
        return;
    }

    if (!answer.length){
        console.log("\n项目名称不能为空!\n");
        reNewQuestion(rl);
        return;
    }

    if(!cnReg.test(answer))
    {
        console.log("\n项目名称不能包含中文字符!\n");
        reNewQuestion(rl);
        return;
    }

    reNewQuestion(rl);
}

function checkProjectType(answer, rl){
    switch(answer){
        case 'list':
            for (var i=0; i < typeList.length; i++){
                console.log(typeList[i] + "\t")
            }
            reNewQuestion(rl);
        break;

        case '':
            console.log("\n项目类型不能为空\n!")
            reNewQuestion(rl);
        break;

        default:
            if (typeList.indexOf(answer) >= 0){
                questionIndex ++;
                projectInfo.type = answer;
                reNewQuestion(rl);
            }
            else{
                console.log("\n项目类型输入有误， 请尝试输入list获取类型列表， 或重新输入正确的项目类型!\n");
                reNewQuestion(rl);
            }
    }
}

function checkSvnPath(answer, rl){
    answer = fixPath(answer);
    fs.exists(answer, function(result){
        if (!result){
            console.log("\n找不到: " + answer + ", 请确认路径是否输入正确\n");
            reNewQuestion(rl);
        }
        else{
            projectInfo.svnPath = answer;

            //  interact end   begain construct project
            generateProject(projectInfo);
        }
    })
}


function reNewQuestion(rl){
    rl.close();
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(questionArr[questionIndex].question, function(answer){questionArr[questionIndex].checkAnser(answer, rl)});
}

function fixPath(p){
    p = p.replace(/\\/g, "/");
    return p.replace(/[\/]$|[\\]$/, "");
}

module.exports = projectInit;