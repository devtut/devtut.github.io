(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{884:function(a,t,s){"use strict";s.r(t);var e=s(31),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"bash-arithmetic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bash-arithmetic"}},[a._v("#")]),a._v(" Bash Arithmetic")]),a._v(" "),s("h2",{attrs:{id:"simple-arithmetic-with"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-arithmetic-with"}},[a._v("#")]),a._v(" Simple arithmetic with (( ))")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n\n")])])]),s("p",[a._v("Output: 3")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Using variables")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("var1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("var2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("((")]),a._v("output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("$var1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" $var2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("))")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%d'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$output")]),a._v('"')]),a._v("\n\n")])])]),s("p",[a._v("Output: 20")]),a._v(" "),s("h2",{attrs:{id:"arithmetic-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-command"}},[a._v("#")]),a._v(" Arithmetic command")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("let")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\n   let num=1+2\n    let num=\"1+2\"\n    let 'num= 1 + 2'\n    let num=1 num+=2\n\n")])])]),s("p",[a._v("You need quotes if there are spaces or globbing characters. So those will get error:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\n  let num = 1 + 2    #wrong\n   let 'num = 1 + 2'  #right\n   let a[1] = 1 + 1   #wrong\n   let 'a[1] = 1 + 1' #right\n\n")])])]),s("ul",[s("li",[s("code",[a._v("(( ))")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\n ((a=$a+1))     #add 1 to a\n  ((a = a + 1))  #like above\n  ((a += 1))     #like above\n\n")])])]),s("p",[a._v("We can use "),s("code",[a._v("(())")]),a._v(" in "),s("code",[a._v("if")]),a._v(". Some Example:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("((")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("))")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a is greater than 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n\n")])])]),s("p",[a._v("The output of "),s("code",[a._v("(())")]),a._v(" can be assigned to a variable:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("result")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n\n")])])]),s("p",[a._v("Or used directly in output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The result of a + 1 is '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v('"')]),a._v("\n\n")])])]),s("h2",{attrs:{id:"simple-arithmetic-with-expr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-arithmetic-with-expr"}},[a._v("#")]),a._v(" Simple arithmetic with expr")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("expr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" + "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n")])])]),s("p",[a._v("Output: 3")]),a._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("li",[a._v("\n$(( EXPRESSION )) - Evaluates expression and returns its result.\n")]),a._v(" "),s("li",[a._v("\nexpr EXPRESSION - Prints result of EXPRESSION to stdout.\n")]),a._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Parameter")]),a._v(" "),s("th",[a._v("Details")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("EXPRESSION")]),a._v(" "),s("td",[a._v("Expression to evaluate")])])])]),a._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v('A space (" ") is required between each term (or sign) of the expression. "1+2" won\'t work, but "1 + 2" will work.')])])}),[],!1,null,null,null);t.default=r.exports}}]);