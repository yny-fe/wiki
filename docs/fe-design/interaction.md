# 云商旅和共享交互设计


背景：共享系统跟云商旅之间是通过iframe交互，也就是说共享一方会用iframe内嵌入云商旅的页面。站在云商旅的角度来看，跟共享系统交互有两类，<Badge text="一、把数据从云商旅推送给共享系统" /><Badge text="二、把数据从共享拉到云商旅" />。简单的说就是一个<Badge text="推送" />，一个<Badge text="拉取" />针对两类我们需要分别讨论：


## 推送


为了满足不同客户本身网络策略影响，我们有到目前实现了三种推送的方案。<text-yellow txt="①postMessage"></text-yellow> <text-yellow txt="②form表单提交"></text-yellow>  <text-yellow txt="③ 服务端接口转发"></text-yellow>，下面一一说明这三种方式的实现。

### postMessage

postMessage的主要产生原因是因为共享系统都是本地化部署给客户使用的，而部分金融类或银行类企业对网略策略管理较为严格，所以在共享和云交互的时候会受到各种限制。而postMessage是前端与前端之间安全的跨域通信的方案，所以通过这种方式能避免云商旅和共享系统之间的http请求。

 - postMessage的优点
    - 使用简单
    - 传输比较安全，不会像http协议传输那样被拦截
    - 可以解决iframe之间跨域通信
 - postMessage的缺点
    - 出现bug不利于排查
    - 没法像后台接口那样记录操作日志
    - 没法把一系列的请求链用promise连接起来，不利于代码逻辑管理

### form

form表单作为最早跟E7对接时候所约定的标准，那时候的客户还没有遇到类似银行类或金融类企业有严格的内网策略，所以通过form表单的方式是可以实现云商旅和共享之间的数据交互的。

  - 实现原理
    - 共享系统在进入云商旅页面的时候会被要求传一个callbackURL的参数，这个参数的作用很简单，就是用来接收云商旅这边推送过去的数据，这个callbackURL是标准的后台api接口，在进行到最后一步的时候云商旅前端会模拟form表单提交，把云商旅的数据通过from表单推送到callbackURL这个地址，共享拿到数据后再渲染页面，到此云商旅的界面操作流程结束。

### server-proxy

顾名思义，server-proxy就是服务端代理，相比于form表单云商旅前端直接通过调用共享的接口来进行数据通信，服务端代理的做法是通过云商旅的服务端去做调用接口这个事情。


## 拉取

同理，拉取有时候也会遇到客户那边网络策略的原因，所以我们有时候并不能使用标准的api接口，目前拉取有两种方案：<text-yellow txt="①postMessage"></text-yellow> <text-yellow txt="②后台标准API【接口】"></text-yellow>

### postMessage

相较于推送时候使用postMessage，拉取使用postMessage更麻烦一点。举个栗子：
假设现在某个业务逻辑有三个异步请求，分别为A【获取当前人员信息】,B【获取差旅标准】,C【判断这个人是否超标】，这三个异步请求要依次调用A -> B -> C，也就是说A调完后才能调用B，B调完后才能调C

#### 标准后台API对接的情况下，我们的逻辑是这样的
```js
const main = () => {
  Promise(A).then((a) => {
    // 获取到人员为a
    Promise(B).then((b) => {
      // 获取到人员a的差旅标准为b
      Promise(C).then((c) => {
        // 得到人员a是否超标为c
      })
    })
  })
}
main()

```
可以看到上面的逻辑非常清楚，可以看到整个操作是链式的，依次递进

#### 采用postMessage的方式，逻辑是这样的

```js{7,13,14,15}
const monitor = (eventName) => {
  window.addEventListener("messages", eventName);
}
const getA = () => {
  Promise(A).then((a) => {
    // 获取到当前登录人信息，然后通过postMessage把a推给共享，获取a的标准
    postMessage(a)
  })
}
getA();
monitor(function(e) => {
  // 监听到共享有推送消息给云商旅，值为e，e里面包含了差旅标准b，也即，e.b
  // 得到a的差旅标准为e.b，然后调用接口判断是否超标
  Promise(C(e.b)).then((c) => {
    // 得到结果
  })
});
```
注意上面的代码，第7行是我们发送postMessage获取差旅标准，而处理差旅标准需要跳到13,14,15行去处理，也就是说发送跟处理结果被两个函数隔开了，这点对于处理业务逻辑来说相当不方便


 - 优点
    - 可以解决跨iframe跨域的问题
    - 可以解决客户因网络严格限制无法对外暴露接口的情况
 - 缺点
    - 云商旅开发严重依赖共享的iframe，脱离iframe云商旅好多逻辑走不下去
    - 联调开发阶段比较痛苦，效率低下


### API

采用API的方式通过接口获取数据是最为方便的一种方式，例如获取人员信息，E7时代获取差旅标准接口等。

 - 优点
    - 能记录log日志，方便追查定位问题
    - 标准对接，云商旅一方不依赖iframe
    - 对接简单，方便快捷


