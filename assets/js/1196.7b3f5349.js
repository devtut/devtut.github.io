(window.webpackJsonp=window.webpackJsonp||[]).push([[1196],{1604:function(a,t,s){"use strict";s.r(t);var n=s(31),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"higher-order-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#higher-order-functions"}},[a._v("#")]),a._v(" Higher-order functions")]),a._v(" "),s("h2",{attrs:{id:"basics-of-higher-order-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics-of-higher-order-functions"}},[a._v("#")]),a._v(" Basics of Higher Order Functions")]),a._v(" "),s("p",[a._v("Review "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/haskell/1954/partial-application#t=201607290030340619796",target:"_blank",rel:"noopener noreferrer"}},[a._v("Partial Application"),s("OutboundLink")],1),a._v(" before proceeding.")]),a._v(" "),s("p",[a._v("In Haskell, a function that can take other functions as arguments or return functions is called a "),s("strong",[a._v("higher-order function")]),a._v(".")]),a._v(" "),s("p",[a._v("The following are all "),s("strong",[a._v("higher-order functions")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("filter")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("takeWhile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("dropWhile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("iterate")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("zipWith")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("scanr")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("scanl")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("p",[a._v("These are particularly useful in that they allow us to create new functions on top of the ones we already have, by passing functions as arguments to other functions. Hence the name, "),s("strong",[a._v("higher-order functions")]),a._v(".")]),a._v(" "),s("p",[a._v("Consider:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Num")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token char string"}},[a._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token char string"}},[a._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("zipWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("zipWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("p",[a._v("This ability to easily create functions (like e.g. by partial application as used here) is one of the features that makes functional programming particularly powerful and allows us to derive short, elegant solutions that would otherwise take dozens of lines in other languages. For example, the following function gives us the number of aligned elements in two lists.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("aligned")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("aligned")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ys")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("length")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("filter")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("id")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("zipWith")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"lambda-expressions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lambda-expressions"}},[a._v("#")]),a._v(" Lambda Expressions")]),a._v(" "),s("p",[s("strong",[a._v("Lambda expressions")]),a._v(" are similar to "),s("strong",[a._v("anonymous functions")]),a._v(" in other languages.")]),a._v(" "),s("p",[a._v("Lambda expressions are "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Open_formula",target:"_blank",rel:"noopener noreferrer"}},[a._v("open formulas"),s("OutboundLink")],1),a._v(" which also specify variables which are to be bound. Evaluation (finding the value of a function call) is then achieved by "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Lambda_calculus#Substitution",target:"_blank",rel:"noopener noreferrer"}},[a._v("substituting"),s("OutboundLink")],1),a._v(" the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bound_variable",target:"_blank",rel:"noopener noreferrer"}},[a._v("bound variables"),s("OutboundLink")],1),a._v(" in the lambda expression's body, with the user supplied arguments. Put simply, lambda expressions allow us to express functions by way of variable binding and "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Substitution_(logic)",target:"_blank",rel:"noopener noreferrer"}},[a._v("substitution"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("Lambda expressions look like")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),a._v("\n\n")])])]),s("p",[a._v("Within a lambda expression, the variables on the left-hand side of the arrow are considered bound in the right-hand side, i.e. the function's body.")]),a._v(" "),s("p",[a._v("Consider the mathematical function")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n")])])]),s("p",[a._v("As a Haskell definition it is")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("f")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n")])])]),s("p",[a._v("which means that the function "),s("code",[a._v("f")]),a._v(" is equivalent to the lambda expression "),s("code",[a._v("\\x -> x^2")]),a._v(".")]),a._v(" "),s("p",[a._v("Consider the parameter of the higher-order function "),s("code",[a._v("map")]),a._v(", that is a function of type "),s("code",[a._v("a -> b")]),a._v(". In case it is used only once in a call to "),s("code",[a._v("map")]),a._v(" and nowhere else in the program, it is convenient to specify it as a lambda expression instead of naming such a throwaway function. Written as a lambda expression,")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),a._v("\n\n")])])]),s("p",[s("code",[a._v("x")]),a._v(" holds a value of type "),s("code",[a._v("a")]),a._v(", "),s("code",[a._v("...x...")]),a._v(" is a Haskell expression that refers to the variable "),s("code",[a._v("x")]),a._v(", and "),s("code",[a._v("y")]),a._v(" holds a value of type "),s("code",[a._v("b")]),a._v(". So, for example, we could write the following")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token char string"}},[a._v("'c'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"apples"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"oranges"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mangos"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("zipWith")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"currying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#currying"}},[a._v("#")]),a._v(" Currying")]),a._v(" "),s("p",[a._v("In Haskell, all functions are considered curried: that is, all functions in Haskell take just "),s("strong",[a._v("one")]),a._v(" argument.")]),a._v(" "),s("p",[a._v("Let's take the function "),s("code",[a._v("div")]),a._v(":")]),a._v(" "),s("p",[a._v("If we call this function with 6 and 2 we unsurprisingly get 3:")]),a._v(" "),s("p",[a._v("However, this doesn't quite behave in the way we might think. First "),s("code",[a._v("div 6")]),a._v(" is evaluated and "),s("strong",[a._v("returns a function")]),a._v(" of type "),s("code",[a._v("Int -> Int")]),a._v(". This resulting function is then applied to the value 2 which yields 3.")]),a._v(" "),s("p",[a._v('When we look at the type signature of a function, we can shift our thinking from "takes two arguments of type '),s("code",[a._v("Int")]),a._v('" to "takes one '),s("code",[a._v("Int")]),a._v(" and returns a function that takes an "),s("code",[a._v("Int")]),a._v('". This is reaffirmed if we consider that arrows in the type notation associate '),s("strong",[a._v("to the right")]),a._v(", so "),s("code",[a._v("div")]),a._v(" can in fact be read thus:")]),a._v(" "),s("p",[a._v("In general, most programmers can ignore this behaviour at least while they're learning the language. From a "),s("a",{attrs:{href:"https://wiki.haskell.org/Currying",target:"_blank",rel:"noopener noreferrer"}},[a._v("theoretical point of view"),s("OutboundLink")],1),a._v(', "formal proofs are easier when all functions are treated uniformly (one argument in, one result out)."')]),a._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v("Higher Order Functions are functions that take functions as parameters and/or return functions as their return values.")])])}),[],!1,null,null,null);t.default=e.exports}}]);