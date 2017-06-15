1.定义对象可以把配置参数放到对象里，
例如：var mario={
	top:12,
	myConfig:{
	imgTop:23,
	imgLeft:23,
}
}
2.js私有变量的实现，主要应用闭包来实现的。闭包主要用于保存私有变量。
例如：
 var testModule=(function () {
    var counter=0;
    return {
      incrementCounter:function(){
        return ++counter;
      },
      readCounter:function(){

      },
      resetCounter:function(){

        console.log('重置counter');
      },
    }
  })()
   testModule.incrementCounter();
   testModule.readCounter();
   //其中counter保持操作不变，不会每次都为0，存储为私有变量。
 3.为jquery改名
var myModlue=(function ($) {  
  return $
})(jquery);
这样凡是可以用jquery的地方都可以用myModlue.并且还可以为jquery进行扩展
var myModlue=(function ($) {  
$.sayhello=function(){
    console.log('nihao')
  }
  return $
})(jquery);
4.单例模式也是通过闭包来实现的，如果实例不存在，则创建一个实例，如果实例存在则返回一个实例。
    var getPersonSingle = function() {
        function Person(name) {
            this.name = name;
        }
        var person;
        return function() {
            if (!person) {
                person = new Person('小明');
               
            }
             return person;
        }
    }();

    var p1 = getPersonSingle();
    var p2 = getPersonSingle();
    console.log(p1.name);
    console.log(p2.name);
    p2.name = '小红';
    console.log(p1.name);
    console.log(p2.name);
5.观察者模式：马里奥中各种元素可以用这个模式，游戏中每个元素都是一个Observer，每次循环都执行Observer。update.
 function ObserverList() {
        this.observerList = [];
    }
    ObserverList.prototype.Add = function(obj) {
        return this.observerList.push(obj);
    }
    ObserverList.prototype.Empty = function() {
        this.observerList = [];
    }
    ObserverList.prototype.Count = function() {
        return this.observerList.length;
    }
    ObserverList.prototype.Get = function() {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }
    ObserverList.prototype.Insert = function(obj, index) {

        this.observerList.splice(index, 0, obj);
        return index;
    }
    ObserverList.prototype.IndexOf = function(obj, startIndex) {
        var i = startIndex,
            pointer = -1;
        while (i < this.observerList.length) {
            if (this.observerList[i] === obj) {
                pointer = i;
            }
            i++;
        }
        return pointer;
    }
    ObserverList.prototype.RemoveIndexAt()=function(index){
      this.observerList.splice(index,1);
    }
    function extend(obj,extension){
      for(var key in obj){
        extension[key]=obj[key];
      }
    }

    function Subject(){
      this.observers=new ObserverList();      
    }
    Subject.prototype.AddObserver=function(observer){
      this.observers.Add(observer);
    }
    Subject.prototype.RemoveObserver=function(observer){
      this.observers.RemoveIndexAt(this.observers.IndexOf(observer,0));
    }
    Subject.prototype.Notify=function(context){
      var observerCount=this.observers.Count();
      for(var i=0;i<observerCount;i++){
        this.observerList.Get(i).Update(context);
      }
    }
    function Observer(){
      this.Update=function(){
        
      }
    }
6.事件的控制，可以用订阅者模式（注意）
例如按键如果是S,w等添加不同的事件。
  var pubsub={};
    (function (q) {
      var topics={},
      subUid=-1;
      q.publish=function(topic,args){
        if(!topics[topic]){
          return false;
        }
        var subscribers=topics[topic],
        len=subscribers?subscribers.length:0;
        while(len--){
          subscribers[len].func(topic,args);
        }
        return this;
      };
      q.subscribe=function(topic,func){
        if(!topics[topic]){
          topics[topic]=[];
        }
        var token=(++subUid).toString();
        topics[topic].push({token:token,func:func});
        return token;
      };
      q.unsubscribe=function(token){
        for(var m in topics){
          if(topics[m]){
            for(var i=0,j=topics[m].length;i<j;i++){
              if(topics[m][i].token===token){
                topics[m].splice(i,1);
                return token;
              }
            }
          }
        }
        return this;
      };
    })(pubsub);

    var messageLogger=function(topics,data){
      console.log("Logging:"+topics+":"+data);
    }
    var messageLogger2=function(topics,data){
      console.log("Logging2:"+topics+":"+data);
    }
    var subscription=pubsub.subscribe("inbox/newMessage",messageLogger);
    var subscription2=pubsub.subscribe("inbox/newMessage2",messageLogger);
    pubsub.publish('inbox/newMessage',"hello world!");
    pubsub.publish('inbox/newMessage',[1,2,3]);
    pubsub.publish('inbox/newMessage2',{sender:"12@qq.com",body:"hey agin!"});
    pubsub.unsubscribe(subscription);
    console.log('取消了inbox/newMessage')
  pubsub.publish('inbox/newMessage',"hello world!");
    pubsub.publish('inbox/newMessage',[1,2,3]);
    pubsub.publish('inbox/newMessage2',{sender:"12@qq.com",body:"hey agin!"});
    
