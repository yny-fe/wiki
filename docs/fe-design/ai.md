# 商旅对接AI语音前端技术方案

## 背景
- ecs通过语音机器人收集用户的意图后转换成指令和参数发送给商旅，商旅完成后续的操作。

## 难点
- ecs和商旅数据如何传输
- 如何利用现有的组件和方法完成用户的意图
- 如何同步操作和异步操作按顺序执行
- 有资源没有指令或者有指令资源还没加载完成怎么办

## ecs和商旅页面通过postMessage来传输数据
  - 当ecs平台解析完用户的语音之后，会通过postMessage将指令和参数发给商旅，商旅监听message,当收到消息时就执行指令对应的操作
  - robotData 是ecs传过来的数据，ivInstruction是指令，ivIns 是约定好的指令集和每个指令对应的操作，isCurInsCanExec判断当前指令是否可以执行。
```typescript
  startViIns(robotData: AnyObject) {
    this.robotData = robotData;
    const { ivInstruction } = robotData;
    let insArr: AnyObject[] = [];
    insArr = ivIns[ivInstruction];
    if (!insArr) {
      console.log(`无语音${ivInstruction}指令对应的操作`);
      return;
    }
    this.needExecInsArr = insArr;
    if (this.isCurInsCanExec()) {
      this.curExecInsIndex = 0;
      this.execAct();
    }
  }
```
## 如何利用现有的组件和方法完成用户的意图
- 现有的组件代码不动，语音的方法重新写一个.ts文件，在该ts文件中调原组件中的方法，然后用mixins混入到对应的组件中，这样实现了目的。
```typescript
  // ts文件中 调用原组件中的方法getTravelStandard
  cmdGetTravelStandard() {
    this.getTravelStandard();
    return new Promise(resolve => {
      this.$on("standardPostmessageSuc", (res: AnyObject) => {
        resolve(res);
      });
    });
  }
```
## 有资源没有指令或者有指令资源还没加载完成怎么办
- 新创建.ts文件要做的事情就是实现某个指令对应的小操作，然后将这些小操作收集起来，以便接收到指令时执行指令对应的操作。小操作收集完成还需要通知 调度中心，该资源加载完成，随时可以执行。
```typescript
 // 收集小操作 
  addCmdAndAct() {
    const componentName = this.$options.name;
    const acts = {
      actGoOrderFlight: {
        componentName,
        fn: this.actGoOrderFlight
      }
    };
    this.$iv.addAct(componentName, acts);
  }
  // 收集小操作，并通知调度中心资源已加载完成
  mounted() {
    const componentName = this.$options.name;
    this.addCmdAndAct();
    this.$iv.actLoadedNotify(componentName);
  }
```
## 如何同步操作和异步操作按顺序执行
- 这里通过yield函数 和 promise来实现
```typescript
  // 某个指令下的操作所包含的小操作
  *actGoOrderFlight() {
    const persons = [this.currentUserInfo];
    const {
      travelBeginDate: startDate,
      endDate = "",
      originCity: startCityName,
      destinationCity: endCityName,
      travelType: businessType
    } = this.$iv.robotData;
    this.fiterIv = "1";
    const startCity: AnyObject = yield this.cmdGetCityInfo({
      searchValue: startCityName,
      businessType
    });
    yield this.cmdSetCityFrom({ city: startCity });
    const endCity: AnyObject = yield this.cmdGetCityInfo({
      searchValue: endCityName,
      businessType
    });
    yield this.cmdSetCityTo({ city: endCity });
    yield this.cmdSetCheckInOut({ startDate, endDate });
    yield this.cmdSetSelectedPersons({ persons });
    yield this.cmdGetTravelStandard();
    yield this.cmdOnGoOrder();
    this.fiterIv = "2";
  }
 // 执行收集的小操作
  execAct() {
    const curIns = this.needExecInsArr[this.curExecInsIndex];
    const { exec, componentName, key } = curIns;
    if (exec === "0" && this.actionPoor[componentName]) {
      // 未执行，且对应的action已加载好
      curIns.exec = "1";
      const curAct = this.actionPoor[componentName][key];
      const { fn: Fun } = curAct;
      const gen = Fun();
      this.flow(gen, {});
    }
  }
  // 让同步和异步执行
  flow(gen: AnyObject, res: AnyObject) {
    const item = gen.next(res);
    const { value, done } = item;
    if (done) {
      this.doneAndNext();
      return { value, done };
    }
    if (value instanceof Promise) {
      value.then(e => this.flow(gen, e));
    } else {
      this.flow(gen, {});
    }
  }
```
## 语音指令及对应的商旅页面路由，当下面的路由页面被加载了就通知ecs，然后ecs就知道当前哪些指令可以被执行
| 语音指令 | 页面路由(path) |
| :--- | :---: |
| jumpHotel | /trip/create/triphotel | 
| jumpTrain | /trip/create/triptrain | 
| jumpFlight | /trip/create/tripflight | 
| flightListFilter | /flight/list , /flight/roundtrip | 
| trainListFilter | /train/trainlist, /train/backtrainlist | 
| hotelListFilter | /hotel/list | 