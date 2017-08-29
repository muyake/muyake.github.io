const greeter = require('./Greeter.js');
// import './main.css'; //使用require导入css文件
 require('./main.css');
document.querySelector("#root").appendChild(greeter());
document.querySelector("#root").addEventListener('click', function() {
	let test = '11';
	console.log(test);
})