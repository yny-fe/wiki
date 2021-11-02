/*
* @Author: Just be free
* @Date:   2020-07-10 14:04:39
* @Last Modified by:   Just be free
* @Last Modified time: 2021-11-02 09:56:25
* @E-mail: justbefree@126.com
*/
module.exports = {
  nav: [
    { text: "Home", link: "/" },
    { text: "行程配置解读", link: "/trip/" },
    {
      text: "前端设计方案",
      link: "/fe-design/"
    },
  ],
  sidebar: {
    "/trip/": [
      {
        title: "行程",
        collapsable: true,
        children: [
          ["trip.md", "行程配置"]
        ]
      }
    ],
    "/fe-design/": [
      {
        title: "云商旅前端设计方案",
        collapsable: true,
        children: [
          ["ai.md", "AI语音交互操作商旅"],
          ["interaction.md", "云商旅和ECS、共享交互设计"],
          ["sensors.md", "神策数据埋点设计方案"]
        ]
      }
    ]
  },
  lastUpdated: "Last Updated",
  // Assumes GitHub. Can also be a full GitLab url.
  repo: "yny-fe/wiki",
  // Customising the header label
  // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
  repoLabel: 'Contribute!',

  // Optional options for generating "Edit this page" link

  // if your docs are in a different repo from your main project:
  docsRepo: "yny-fe/wiki",
  // if your docs are not at the root of the repo:
  docsDir: "docs",
  docsBranch: "main",
  // defaults to false, set to true to enable
  editLinks: true,
  // custom text for edit link. Defaults to "Edit this page"
  editLinkText: "Help us improve this page!"
};