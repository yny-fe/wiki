/*
* @Author: Just be free
* @Date:   2020-07-10 09:56:25
* @Last Modified by:   Just be free
* @Last Modified time: 2021-10-18 14:15:38
* @E-mail: justbefree@126.com
*/
const themeConfig = require("./themeConfig");
const base = process.env.NODE_ENV === 'production' ? "/" : "/";
module.exports = {
  // title: "yn-components 组件案例文档",
  // description: "前端基础组件技术文档",
  base, // 基础路径
  markdown: {
    lineNumbers: true
  },
  themeConfig,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: '商旅wiki',
      description: 'docs'
    }
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: 'yn-components 组件案例文档',
    //   description: '前端基础组件技术文档'
    // }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'path/to/some/dir'
      }
    }
  }
};
