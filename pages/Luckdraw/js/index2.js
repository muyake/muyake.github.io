 function ajax(opt) {
 	opt = opt || {};
 	opt.method = opt.method.toUpperCase() || 'POST';
 	opt.url = opt.url || '';
 	opt.async = opt.async || true;
 	opt.data = opt.data || null;
 	opt.success = opt.success || function() {};
 	opt.error = opt.error || function() {};
 	var xmlHttp = null;
 	if (XMLHttpRequest) {
 		xmlHttp = new XMLHttpRequest();
 	} else {
 		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
 	}
 	var params = [];
 	for (var key in opt.data) {
 		params.push(key + '=' + opt.data[key]);
 	}
 	var postData = params.join('&');
 	if (opt.method.toUpperCase() === 'POST') {
 		xmlHttp.open(opt.method, opt.url, opt.async);
 		xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
 		xmlHttp.send(postData);
 	} else if (opt.method.toUpperCase() === 'GET') {
 		xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
 		xmlHttp.send(null);
 	}
 	xmlHttp.onreadystatechange = function() {
 		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
 			opt.success(xmlHttp.responseText);
 		}
 		if (xmlHttp.status == 500 || xmlHttp.status == 502 || xmlHttp.status == 404) {
 			opt.error(xmlHttp.responseText);
 		}
 	};
 }

 function getRadioBoxValue(radioName) {
 	var obj = document.getElementsByName(radioName); //这个是以标签的name来取控件
 	for (i = 0; i < obj.length; i++) {

 		if (obj[i].checked) {
 			return obj[i].value;
 		}
 	}
 	return "undefined";
 }

 var contain = document.querySelector('.result');
 var zongjie = document.querySelector('.zongjie');
 var persent = document.querySelector('.persent');
 var failCount = 0;
 var count = 1;
 var result = [];
 for (var i = 0; i < 12; i++) {
 	result[i] = 0;
 }
 var totalcount = 0;
 var getDataStatus = 0;

 function getData() {
 	ajax({
 		method: 'POST',
 		url: 'http://huodong.renren.com/common/nebulae/open/luckybag',
 		data: {
 			uid: userid,
 			type: getDataStatus,
 		},
 		success: function(response) {
 			if (count <= totalcount) {
 				//console.log(response);
 				var createDiv = document.createElement('DIV');
 				var data = JSON.parse(response);
 				var str22 = getDataStatus == 1 ? "普通抽奖" : "高级抽奖";
 				var str1 = str22 + '总次数为' + count + "次，其中：";
 				if (data.code == 0) {
 					var dataResult = data.data.giftIndex;
 					result[dataResult - 1]++;

 				} else {
 					failCount++;
 				}
 				result.forEach(function(item, index, arr) {
 					str1 += "礼物" + (index + 1) + ":" + item + ",";
 				});
 				str1 += "求取失败数为：" + failCount;
 				zongjie.innerHTML = str1;
 				createDiv.innerHTML = count + response;
 				contain.appendChild(createDiv);
 				count++;
 				getData();
 			}
 		},
 		error: function(response) {
 			if (count <= totalcount) {
 				var createDiv = document.createElement('DIV');
 				createDiv.innerHTML = "服务器错误" + count + response;
 				contain.appendChild(createDiv);
 				var str22 = getDataStatus == 1 ? "普通抽奖" : "高级抽奖";
 				var str1 = str22 + '总次数为' + count + "次，其中：";
 				result.forEach(function(item, index, arr) {
 					str1 += "礼物" + (index + 1) + ":" + item + ",";
 				});
 				failCount++;
 				str1 += "求取失败数为：" + failCount;
 				zongjie.innerHTML = str1;
 				count++;
 				//var data = JSON.parse(response);
 				getData();
 			}
 		}
 	});
 }


 document.querySelector('#start').addEventListener('click', function() {
 	var r = confirm("是否要重新开始？")
 	if (r == true) {
 		zongjie.innerHTML = "";
 		contain.innerHTML = "";
 		failCount = 0;
 		totalcount = 0;
 		getDataStatus = 0;
 		count = 1;
 		for (var i = 0; i < 12; i++) {
 			result[i] = 0;
 		}
 		var status = getRadioBoxValue("status");
 		var num = parseInt(document.querySelector("#count").value);
 		if (isNaN(num)) {
 			alert("请输入正确数字");
 			return;
 		} else {
 			getDataStatus = status;
 			totalcount = num;
 			getData(status);
 		}


 	} else {

 	}
 })