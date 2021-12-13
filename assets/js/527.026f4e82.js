(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{935:function(n,s,t){"use strict";t.r(s);var a=t(31),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"scoping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoping"}},[n._v("#")]),n._v(" Scoping")]),n._v(" "),t("h2",{attrs:{id:"dynamic-scoping-in-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-scoping-in-action"}},[n._v("#")]),n._v(" Dynamic scoping in action")]),n._v(" "),t("p",[n._v("Dynamic scoping means that variable lookups occur in the scope where a function is "),t("strong",[n._v("called")]),n._v(", not where it is "),t("strong",[n._v("defined")]),n._v(".")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[n._v("func1")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("echo")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"in func1: '),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$x")]),n._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[n._v("func2")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("local")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" func1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n$ func2\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("in")]),n._v(" func1: "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("9")]),n._v("\n$ func1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("in")]),n._v(" func1: "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("\n\n")])])]),t("p",[n._v("In a lexically scoped language, "),t("code",[n._v("func1")]),n._v(" would "),t("strong",[n._v("always")]),n._v(" look in the global scope for the value of "),t("code",[n._v("x")]),n._v(", because "),t("code",[n._v("func1")]),n._v(" is "),t("strong",[n._v("defined")]),n._v(" in the local scope.")]),n._v(" "),t("p",[n._v("In a dynamically scoped language, "),t("code",[n._v("func1")]),n._v(" looks in the scope where it is "),t("strong",[n._v("called")]),n._v(". When it is called from within "),t("code",[n._v("func2")]),n._v(", it first looks in the body of "),t("code",[n._v("func2")]),n._v(" for a value of "),t("code",[n._v("x")]),n._v(". If it weren't defined there, it would look in the global scope, where "),t("code",[n._v("func2")]),n._v(" was called from.")])])}),[],!1,null,null,null);s.default=e.exports}}]);