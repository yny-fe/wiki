(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{410:function(t,a,s){"use strict";s.r(a);var r=s(51),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前端渲染速度优化方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端渲染速度优化方案"}},[t._v("#")]),t._v(" 前端渲染速度优化方案")]),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("ul",[s("li",[t._v("行程首页首屏渲染速度慢，用户看到页面第一个元素等待时间过长")]),t._v(" "),s("li",[t._v("行程首页页签切换速度慢，用户点击完页签按钮之后，页面长时间处于假死状态，移动端和ie浏览器尤为突出。")])]),t._v(" "),s("p",[t._v("#为了解决上边的问题，我们分两部走，组件懒执行和组件懒加载")]),t._v(" "),s("h2",{attrs:{id:"组件懒执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件懒执行"}},[t._v("#")]),t._v(" 组件懒执行")]),t._v(" "),s("ul",[s("li",[t._v("将一部分不需要在首屏立刻展示的页面子组件先不初始化，等用户主动通过点击滑动等操作来触发初始化，这样就可以缩短页面首屏的渲染时间。比如行程首页的 人员选择组件，时间选择组件，城市选择组件等都可以用组件懒执行方案来优化")])]),t._v(" "),s("p",[s("em",[s("strong",[t._v("示例代码")])])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("component "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("lazyInit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lazyConfig.initExceedApply"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("exceed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("apply"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("exceed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("apply"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"组件懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件懒加载"}},[t._v("#")]),t._v(" 组件懒加载")]),t._v(" "),s("ul",[s("li",[t._v("这一部分主要用到了js事件循环相关的知识。未优化之前，我们点击了页签切换，浏览器并不会立即执行点击事件对应的回调代码，而是将该回调推入到队列中，且等浏览器堆栈中的的js和微任务全部执行完（页面组件和所有子组件渲染完成），浏览器主栈空闲了，才会将该回调从队列中push出来执行。如果页面组件比较多，导致渲染页面花费很长时间，就会使点击之后等待较长时间才能切换页签。")]),t._v(" "),s("li",[t._v("优化思路： 将所有组件一起渲染的任务拆分成很多个小任务，且不能同时推入到浏览器的任务队列中。基于此考虑我们自建了一个队列用来搜集小任务，当页面组件渲染完成会从自建队列中取出第一个小任务推入到浏览器的任务队列中，第一次小任务执行完成后，会将自建队列的第二个小任务推入到浏览器任务队列中，以此类推。当点击页签，点击事件触发时，将点击事件的回调推入浏览器任务队列排队，同时清空自建队列中的小任务，这样页签点击的回调最多只需要等一个小任务的执行时间，如果这个小任务拆分的够细，那么等待的时间就会很短，优化效果就达到了。\n"),s("em",[s("strong",[t._v("示例代码")])])])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("component "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("lazyLoad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"代码架构-主要是lazycomponent组件和lazycontrol类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码架构-主要是lazycomponent组件和lazycontrol类"}},[t._v("#")]),t._v(" 代码架构，主要是lazyComponent组件和lazyControl类")]),t._v(" "),s("ul",[s("li",[t._v("lazyControl封装了所有的针对自建队列的行为，如：开启自建队列中的任务，往自建队列添加任务，清空自建队列的任务。")]),t._v(" "),s("li",[t._v("lazyComponent组件主要用来包裹需要优化的组件或者代码，这里会将包裹的组件封装成一个个任务放入自建队列中，同时，根据不同的lazyInit和lazyLoad参数， 将包裹的组件封装成懒加载组件或者懒执行组件。")])]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("ul",[s("li",[t._v("自建队列中的小任务是自启动的，不需要额外操作。")]),t._v(" "),s("li",[t._v("页面切换时，清空当前页面自建队列中所有的任务,代码如下")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lazyControl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTask")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://note.youdao.com/noteshare?id=89adbd8e922c742a672a9980bffdc940&sub=64C7AB7383684E1BBC41489ABA1F1A7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("lazyComponent.vue"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://note.youdao.com/noteshare?id=840e915f6c8f0d2bf5eaa5aee6922faa&sub=18524E9AC8E44D5C8FF420915137F989",target:"_blank",rel:"noopener noreferrer"}},[t._v("lazyControl.js"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);