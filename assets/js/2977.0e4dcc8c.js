(window.webpackJsonp=window.webpackJsonp||[]).push([[2977],{3385:function(t,a,s){"use strict";s.r(a);var e=s(31),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-texreg-to-export-models-in-a-paper-ready-way"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-texreg-to-export-models-in-a-paper-ready-way"}},[t._v("#")]),t._v(" Using texreg to export models in a paper-ready way")]),t._v(" "),s("p",[t._v("The texreg package helps to export a model (or several models) in a neat paper-ready way. The result may be exported as HTML or .doc (MS Office Word).")]),t._v(" "),s("h2",{attrs:{id:"printing-linear-regression-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#printing-linear-regression-results"}},[t._v("#")]),t._v(" Printing linear regression results")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# models")]),t._v("\nfit1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" lm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" wt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mtcars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfit2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" lm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" wt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("hp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mtcars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfit3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" lm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" wt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("hp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("cyl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mtcars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# export to html")]),t._v("\ntexreg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("htmlreg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fit1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fit2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fit3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'models.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# export to doc")]),t._v("\ntexreg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("htmlreg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fit1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fit2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fit3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'models.doc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("The result looks like a table in a paper.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/M8GyJ.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/M8GyJ.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("There are several additional handy parameters in "),s("code",[t._v("texreg::htmlreg()")]),t._v(" function. Here is a use case for the most helpful parameters.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# export to html")]),t._v("\ntexreg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("htmlreg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fit1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fit2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fit3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'models.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                single.row "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                custom.model.names "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LETTERS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                leading.zero "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                digits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Which result in a table like this")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/wMN7q.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/wMN7q.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("h3",{attrs:{id:"links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cran.r-project.org/package=texreg",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRAN page"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);