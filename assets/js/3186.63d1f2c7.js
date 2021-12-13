(window.webpackJsonp=window.webpackJsonp||[]).push([[3186],{3595:function(s,e,t){"use strict";t.r(e);var a=t(31),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"shallow-routing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shallow-routing"}},[s._v("#")]),s._v(" Shallow Routing")]),s._v(" "),t("h2",{attrs:{id:"_1-use-of-shallow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-use-of-shallow"}},[s._v("#")]),s._v(" 1. Use of shallow")]),s._v(" "),t("p",[s._v("One way to avoid deep nesting (as recommended above) is to generate the collection actions scoped under the parent, so as to get a sense of the hierarchy, but to not nest the member actions. In other words, to only build routes with the minimal amount of information to uniquely identify the resource, like this:")]),s._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[s._v("resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":articles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" shallow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":comments")]),s._v("\n  resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":quotes")]),s._v("\n  resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":drafts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])]),t("p",[s._v("The shallow method of the DSL creates a scope inside of which every nesting is shallow. This generates the same routes as the previous example:")]),s._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[s._v("shallow "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":articles")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":comments")]),s._v("\n    resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":quotes")]),s._v("\n    resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":drafts")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])]),t("p",[s._v("There exist two options for scope to customize shallow routes. :shallow_path prefixes member paths with the specified parameter:")]),s._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[s._v("scope shallow_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sekret"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":articles")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    resources "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":comments")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" shallow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])]),t("p",[s._v("Use Rake Command for get generated routes as define below:")]),s._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[s._v("rake routes\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);