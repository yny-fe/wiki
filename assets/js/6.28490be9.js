(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(l,r,t){},398:function(l,r,t){"use strict";t(352)},408:function(l,r,t){"use strict";t.r(r);var a=t(49),o=(t(12),t(394),t(14),t(18),t(52),t(329),t(397)),n=t.n(o),c={name:"ColorCard",props:{color:String,desc:String,name:String,allColor:{type:String,default:function(){}}},data:function(){return{handleAllColorArr:[]}},methods:{handleAllColor:function(){this.handleAllColorArr=Object(a.a)(new Set(this.allColor.split(" ")))},clickColorCard:function(l){new n.a(".".concat(l))}},created:function(){this.allColor&&(this.handleAllColor(),console.log("arr",this.handleAllColorArr))}},e=(t(398),t(51)),i=Object(e.a)(c,(function(){var l=this,r=l.$createElement,t=l._self._c||r;return t("div",{staticStyle:{display:"inline-block"}},[l.allColor?l._l(l.handleAllColorArr,(function(r,a){return t("div",{key:a,staticClass:"color-card"},[r?t("div",[t("a",{attrs:{href:"javascript:;",title:"点击复制"+r}},[t("span",{style:{backgroundColor:r}})]),l._v(" "),t("small",[l._v(l._s("allColor-"+r))]),l._v(" "),t("small",[l._v(l._s(l.name))])]):l._e()])})):[t("div",{staticClass:"color-card"},[t("a",{attrs:{href:"javascript:;",title:"点击复制"+l.color}},[t("span",{staticClass:"color-card-container",style:{backgroundColor:l.color},attrs:{"data-clipboard-text":l.color},on:{click:function(r){return l.clickColorCard("color-card-container")}}})]),l._v(" "),t("a",{attrs:{href:"javascript:;",title:"点击复制变量"},on:{click:function(r){return l.clickColorCard("variable")}}},[t("small",[l._v(l._s(l.desc))]),l._v(" "),t("small",{staticClass:"variable",attrs:{"data-clipboard-text":l.name}},[l._v(l._s(l.name))])])])]],2)}),[],!1,null,"664f5640",null);r.default=i.exports}}]);