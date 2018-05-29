a simple jsonp with promise

实现：
1.将jsonp转换为promise方式，可以用then()来处理结果，也可以用promise.all()并发请求
2.代码是umd模式，无论在客户端还是node.js环境都可以使用

API
promiseJsonp(url, data)