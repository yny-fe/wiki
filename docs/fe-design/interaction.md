# 云商旅和共享交互设计


背景：共享系统跟云商旅之间是通过iframe交互，也就是说共享一方会用iframe内嵌入云商旅的页面。为了满足不同客户本身网络策略影响，我们有到目前实现了三种交互的方案。①postMessage ②form表单提交 ③ 服务端接口转发，下面一一说明这三种方式的实现。

## postMessage

postMessage的主要产生原因是因为共享系统都是本地化部署给客户使用的，而部分金融类或银行类企业对网略策略管理较为严格，所以在共享和云交互的时候会受到各种限制。而postMessage是前端与前端之间安全的跨域通信的方案，所以通过这种方式能避免云商旅和共享系统之间的http请求。

 - postMessage的优点
    - 使用简单
    - 传输比较安全，不会像http协议传输那样被拦截
    - 可以解决iframe之间跨域通信
 - postMessage的缺点
    - 出现bug不利于排查
    - 没法像后台接口那样记录操作日志
    - 没法把一系列的请求链用promise连接起来，不利于代码逻辑管理

## form

form表单作为最早跟E7对接时候所约定的标准，那时候的客户还没有遇到类似银行类或金融类企业有严格的内网策略，所以通过form表单的方式是可以实现云商旅和共享之间的数据交互的。

  - 实现原理
    - 共享系统在进入云商旅页面的时候会被要求传一个callbackURL的参数，这个参数的作用很简单，就是用来接收云商旅这边推送过去的数据，这个callbackURL是标准的后台api接口，在进行到最后一步的时候云商旅前端会模拟form表单提交，把云商旅的数据通过from表单推送到callbackURL这个地址，共享拿到数据后再渲染页面，到此云商旅的界面操作流程结束。

## server-proxy

顾名思义，server-proxy就是服务端代理，相比于form表单云商旅前端直接通过调用共享的接口来进行数据通信，服务端代理的做法是通过云商旅的服务端去做调用接口这个事情。