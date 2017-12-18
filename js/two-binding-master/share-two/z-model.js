// 发布/订阅 （代码来自 《javascript设计模式》一书）
var Observer = (function() {
    var _messages = {};
    return {
        //注册信息接口
        //prams 消息类型以及相应的处理动作
        regist: function(type, fn) {
            //如果此消息不存在则应该创建一个该消息类型
            if (typeof _messages[type] === 'undefined') {

                _messages[type] = [fn];
                //如果存在
            } else {

                _messages[type].push(fn);

            }
        },
        //发布信息接口 
        fire: function(type, args) {
            //如果该消息没有被注册，则返回
            if (!_messages[type]) return;
            //定义消息信息
            var events = {
                    type: type,
                    args: args || {}
                },
                i = 0,
                len = _messages[type].length;
            //遍历消息动作
            for (; i < len; i++) {

                _messages[type][i].call(this, events);

            }
        },
        //移除信息接口
        remove: function(type, fn) {
            //如果消息动作队列存在
            if (_messages[type] instanceof Array) {

                var i = _messages[type].length - 1;

                for (; i >= 0; i--) {

                    _messages[type][i] === fn && _messages[type].splice(i, 1);

                }
            }
        }
    }
})();

// 处理中文输入时的“锁”,为true时说明打开了中文输入法
var cpLock = false;

// 处理被劫持的dom
function compile(node, zm) {
    // 获取{{...}}
    var reg = /\{\{(.*)\}\}/;
    //节点类型为输入框
    if (node.nodeName === 'INPUT'||node.nodeName === 'TEXTAREA') {
        var attr = node.attributes;  //NamedNodeMap {0: type, 1: id, 2: z-model, length: 3}
        //解析属性
        for (var i = 0; i < attr.length; i++) {

            if (attr[i].nodeName == 'z-model') {

                var name = attr[i].nodeValue;

                node.addEventListener('compositionstart',function() {
                    cpLock = true;
                })

                node.addEventListener('compositionend',function(e) {
                    cpLock = false;
                    zm.data[name] = e.target.value;
                   
                })

                node.addEventListener('input', function(e) {

                    if (!cpLock) {
                        zm.data[name] = e.target.value;
                    }

                })

                node.value = zm.data[name];

                node.removeAttribute('z-model');

            }
        };

        Observer.regist("changed",function () {

            node.value = zm.data[name];
        })
    }else{

        if (reg.test(node.textContent)) {

            var name = RegExp.$1;

            name = name.trim();

            console.log(node.textContent);

            var oldtext = node.textContent;

            // 将 {{...}} 替换
            node.textContent=oldtext.replace(reg,zm.data[name]);

            // 订阅changed事件，当changed事件被通知时，触发fn
            Observer.regist("changed",function () {

                node.textContent=oldtext.replace(reg,zm.data[name]);

            })

        }
    }

}

// 劫持欲处理的DOM
function nodeToFragment(node, zm) {

    var flag = document.createDocumentFragment();

    var child;

    while (child = node.firstChild) {

        compile(child, zm);

        console.log("child:", child, zm);

        flag.appendChild(child);

    }

    return flag;
}

// 劫持数据
function defineReactive(obj, key, val) {

    observe(val); //监控子属性

    Object.defineProperty(obj, key, {

        enumberable: true,

        configurable: false,

        get: function() {

            return val;
        },
        set: function(newVal) {

            if (val === newVal) { return; }

            val = newVal;
            // 发布changed消息，val已经改变
            Observer.fire("changed");
        }
    })
}

// 监控/劫持数据入口
function observe(data) {

    if (!data || typeof data !== 'object') { return; }

    Object.keys(data).forEach(function(key) {

        defineReactive(data, key, data[key]);

    })
}

// Zue主函数
function Zue(options) {

    this.data = options.data;

    observe(this.data);

    var el = options.el;

    var dom = nodeToFragment(document.querySelector(el), this);
    //处理完成后，将dom返回到app中
    document.querySelector(el).appendChild(dom);
}
