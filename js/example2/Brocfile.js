// 引入babel插件
var babel = require('broccoli-babel-transpiler');

// 获取源代码，执行转译指令（仅需1步）
fruits = babel('src'); // src/*.js

module.exports = fruits;