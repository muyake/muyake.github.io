# 图片预加载（异步编程）

------
我们做网站（特别是网页游戏时），都需要资源预加载，通过资源个数来显示加载进度，当所有资源加载完成时，执行回调函数。我们通过原生js来实现初级效果，又为了练习jquery的Deferred对象升级为jquery版，为了练习promise升级为promise版。

> * native.html原生实现
> * jquery.html为jquery实现，jquery2.html为jquery优化版
> * promise.html为promise实现，es6文件夹下是promise优化版
