
## 本地mock数据

> **目的：** 在后台接口未交付的时候，可以在项目本地模拟数据。

**1.mockjs的用途** 

模拟数据的方式：

- 定义变量，写死数据。
- 定义json文件，导入使用。
- 在一些mock平台模拟接口定义数据，如：yapi(服务端基于mockjs)
- 在项目中mock数据且可以拦截接口请求，如：mockjs
- ...

`mockjs`可以模拟可更快的得到较为真实的数据，且可以拦截axios的接口调用，让我们的代码实现了调用接口的逻辑且得到模拟的数据，保存业务完整度。当然模拟数据有一定的规则请参考： http://mockjs.com/ 




**2.mockjs拦截请求**

- 安装mockjs

```bash
npm i mockjs
```

- 新建mock文件夹，`index.js`  

```js
import Mock from 'mockjs'

// mock的配置
Mock.setup({
  // 随机延时500-1000毫秒
  timeout: '500-1000'
})

// 拦截请求，
// 第一个参数：url，使用正则去匹配
// 第二个参数：请求方式
// 第三个参数： 生成数据的函数
Mock.mock(/\/home\/category\/head/, 'get', () => {
  return { msg: '请求头部分类成功', result: [1, 2, 3] }
})
```

- 在`main.js`去导入mock/index.js

```diff
import 'normalize.css'
import '@/assets/styles/common.less'
+ import './mock'
```



**3.mockjs模拟数据**



`src/mock/category.js`  来模拟分类相关数据。

```js
// 用来生成分类相关模拟数据的
// import { topCategory } from '@/api/constants'
import Mock from 'mockjs'

const images = [
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(1).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(2).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(3).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(4).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(5).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(6).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(7).png',
  'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(8).png'
]

const getHeadCategroy = () => {
  // 得到模拟数据，并且返回出去
  // 1. 导入常量：顶级分类
  // 2. 生成和后台数据一致的顶级分类数据
  // 3. 在每一个顶级分类下生成10二级分类
  // 注意：生成的数据要随机，例如，id保持唯一，图片随机的给 ...

    // Mock.mock() 传入一个对象，对象的值可以使用mockjs的规则语法

    // 生成10条二级分类数据
    const children = []
    for (let i = 0; i < 10; i++) {
      children.push(Mock.mock({
        id: '@id',
        name: '@ctitle(2,4)',
        // 预备几张图，随机取出即可
        picture: images[Mock.mock('@integer(0,7)')]
      }))
    }

  return {
    msg: '获取头部分类成功',
    result: children
  }
}

export default {
  // key ===> 生成数据的函数
  headCategory: getHeadCategroy()
}
```



===>1. @id 生成随机ID

===>2. @ctitle(2,3)  生成中文2-3个字

===>3. @integer(1,10)  生成整数1-10之间



`src/mock/index.js`   使用这个生成数据的函数

```js
import category from './category'
```

```js
// 拦截请求，
// 第一个参数：url，使用正则去匹配
// 第二个参数：请求方式
// 第三个参数： 生成数据的函数
Mock.mock(/\/home\/category\/head/, 'get', category.headCategory)
```
