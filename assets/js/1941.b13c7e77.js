(window.webpackJsonp=window.webpackJsonp||[]).push([[1941],{2349:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-functions-with-logical-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-functions-with-logical-output"}},[t._v("#")]),t._v(" Using functions with logical output")]),t._v(" "),s("h2",{attrs:{id:"all-and-any-with-empty-arrays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-and-any-with-empty-arrays"}},[t._v("#")]),t._v(" All and Any with empty arrays")]),t._v(" "),s("p",[t._v("Special care needs to be taken when there is a possibility that an array become an empty array when it comes to logical operators. It is often expected that if "),s("code",[t._v("all(A)")]),t._v(" is true then "),s("code",[t._v("any(A)")]),t._v(" must be true and if "),s("code",[t._v("any(A)")]),t._v(" is false, "),s("code",[t._v("all(A)")]),t._v(" must also be false. That is not the case in MATLAB with empty arrays.")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),s("p",[t._v("So if for example you are comparing all elements of an array with a certain threshold, you need to be aware of the case where the array is empty:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),s("p",[t._v("Use the built-in function "),s("code",[t._v("isempty")]),t._v(" to check for empty arrays:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isempty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);