/*
* @Author: Just be free
* @Date:   2020-07-10 14:04:39
* @Last Modified by:   Just be free
* @Last Modified time: 2021-10-18 14:54:11
* @E-mail: justbefree@126.com
*/
module.exports = {
  nav: [
    { text: "Home", link: "/" },
    { text: "行程配置解读", link: "/trip/" },
    // {
    //   text: "components",
    //   items: [
    //     {
    //       text: "@dullar/earth",
    //       link: "/earth/"
    //     },
    //     {
    //       text: "@dullar/mercury",
    //       link: "/mercury/"
    //     }
    //   ]
    // },
    // { text: "BEM", link: "/bem/" },
    // { text: "cli", link: "/cli/" }
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
    ]
    // "/earth/": [
    //   ["install.md", "Installation"],
    //   {
    //     title: "Basic components",
    //     collapsable: true,
    //     children: [
    //       ["toast.md", "toast"],
    //       ["indicator.md", "indicator"],
    //       ["spin.md", "spin"],
    //       ["iconfont.md", "iconfont"],
    //       ["checkbox.md", "checkbox"],
    //       ["radiobox.md", "radiobox"],
    //       ["calendar.md", "calendar"],
    //       ["popup.md", "popup"],
    //       ["button.md", "button"],
    //       ["flex.md", "flex"],
    //       ["action-sheet.md", "action-sheet"],
    //       ["field.md", "field"],
    //       ["layout.md", "layout"],
    //       ["city-picker.md", "city-picker"],
    //       ["sticky.md", "sticky"],
    //       ["dialog.md", "dialog"],
    //       ["picky-stepper.md", "picky-stepper"],
    //       ["dropdown.md", "dropdown"],
    //       ["dropdown-menu.md", "dropdown-menu"],
    //       ["picker.md", "picker"],
    //       ["swipe.md", "swipe"],
    //       ["tabs.md", "tabs"],
    //       ["slider.md", "slider"],
    //       ["submit-action.md", "submit-action"],
    //       ["pull-refresh.md", "pull-refresh"],
    //       ["date-picker.md", "date-picker"],
    //       ["counter.md", "counter"],
    //       ["skeleton.md", "skeleton"],
    //       ["animation-list.md", "animation-list"],
    //     ]
    //   }
    // ],
    // "/mercury/": [
    //   ["install.md", "Installation"],
    //   {
    //     title: "Basic components",
    //     collapsable: true,
    //     children: [
    //       ["toast.md", "toast"],
    //       ["indicator.md", "indicator"],
    //       ["spin.md", "spin"],
    //       ["iconfont.md", "iconfont"],
    //       ["checkbox.md", "checkbox"],
    //       ["radiobox.md", "radiobox"],
    //       ["calendar.md", "calendar"],
    //       ["popup.md", "popup"],
    //       ["button.md", "button"],
    //       ["flex.md", "flex"],
    //       ["field.md", "field"],
    //       ["layout.md", "layout"],
    //       ["sticky.md", "sticky"],
    //       ["dialog.md", "dialog"],
    //       ["swipe.md", "swipe"],
    //       ["tabs.md", "tabs"],
    //       ["pull-refresh.md", "pull-refresh"],
    //       ["counter.md", "counter"],
    //       ["skeleton.md", "skeleton"],
    //       ["animation-list.md", "animation-list"],
    //       ["category.md", "category"],
    //       ["magnifier.md", "magnifier"],
    //       ["modal.md", "modal"],
    //       ["cascader.md", "cascader"],
    //       ["table.md", "table"],
    //       ["shipping-address.md", "shipping-address"],
    //       ["elastic-serach.md", "elastic-serach"],
    //       ["category-mobile.md", "category-mobile"],
    //       ["address.md", "address"],
    //       ["badge.md", "badge"],
    //       ["tooltip.md", "tooltip"],
    //       ["input.md", "input"],
    //       ["tree.md", "tree"],
    //       ["slide.md", "slide"],
    //       ["image.md", "image"],
    //       ["form.md", "form"],
    //     ]
    //   }
    // ],
    // "/bem/": [],
    // "/cli/": [
    //   ["structure.md", "Directory structure"],
    //   {
    //     title: "Design principle",
    //     collapsable: true,
    //     children: [
    //       ["before-start.md", "Before start"],
    //       ["component.md", "Component"],
    //       ["router.md", "Router"],
    //       ["i18n.md", "I18n"],
    //       ["store.md", "Store"],
    //       ["export-application.md", "Application"],
    //       ["vue-class-component.md", "Vue class component"]
    //     ]
    //   },
    //   ["vue-property-decorator.md", "Vue property decorator"]
    // ]
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