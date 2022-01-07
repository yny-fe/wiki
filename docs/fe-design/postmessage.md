# postMessage实现类
## 背景
- 商旅页面嵌套在ecs的iframe中，商旅的差旅标准需要跟ecs前端交互来获取
- 一个页面需要多处监听message，怎么区分调不同的回调

## 使用postMessage来跟ecs前端交互
  postMessage交互三步走:
 - 1,使用postMessage往指定的window发消息
 - 2,监听别的window发来的message
 - 3,注销message监听
```typescript
  // 向父窗口发消息 
  window.parent.postMessage(JSON.stringify(option), "*");

  // 监听别的窗口发来的message
  window.addEventListener("message", this.messageCb.bind(this));
```
## 一个页面需要多处监听message，怎么区分调不同的回调
- msgId发给ecs，需要ecs交互的时候带回来作为区分标识
- 注册msgId对应的回调
- 组件销毁时，注销msgId对应的回调
```typescript
  // msgId 发给ecs，如果ecs 跟商旅还有后续的交互需要把msgId 再返回给商旅这边
  this.$pm.send({
    msgId: "robotData",
    data: {
      path
    }
  });
  // 注册 robotData回调,当收到的message数据中有msgId值为robotData则调该回调
  this.$pm.registAction(
    { action: "robotData" },
    this.ivInsMessageBody
  );
  // 当组件销毁时需要 注销改回调
  this.$pm.clearAction({ action: "robotData" });
```