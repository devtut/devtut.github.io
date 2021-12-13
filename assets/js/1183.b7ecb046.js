(window.webpackJsonp=window.webpackJsonp||[]).push([[1183],{1591:function(e,t,a){"use strict";a.r(t);var s=a(31),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fixity-declarations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixity-declarations"}},[e._v("#")]),e._v(" Fixity declarations")]),e._v(" "),a("h2",{attrs:{id:"associativity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#associativity"}},[e._v("#")]),e._v(" Associativity")]),e._v(" "),a("p",[a("code",[e._v("infixl")]),e._v(" vs "),a("code",[e._v("infixr")]),e._v(" vs "),a("code",[e._v("infix")]),e._v(" describe on which sides the parens will be grouped. For example, consider the following fixity declarations (in base)")]),e._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("infixl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("infixr")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[e._v("infix")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v("\n\n")])])]),a("p",[e._v("The "),a("code",[e._v("infixl")]),e._v(" tells us that "),a("code",[e._v("-")]),e._v(" has left associativity, which means that "),a("code",[e._v("1 - 2 - 3 - 4")]),e._v(" gets parsed as")]),e._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\n\n")])])]),a("p",[e._v("The "),a("code",[e._v("infixr")]),e._v(" tells us that "),a("code",[e._v(":")]),e._v(" has right associativity, which means that "),a("code",[e._v("1 : 2 : 3 : []")]),e._v(" gets parsed as")]),e._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),a("p",[e._v("The "),a("code",[e._v("infix")]),e._v(" tells us that "),a("code",[e._v("==")]),e._v(" cannot be used without us including parenthesis, which means that "),a("code",[e._v("True == False == True")]),e._v(" is a syntax error. On the other hand, "),a("code",[e._v("True == (False == True)")]),e._v(" or "),a("code",[e._v("(True == False) == True")]),e._v(" are fine.")]),e._v(" "),a("p",[e._v("Operators without an explicit fixity declaration are "),a("code",[e._v("infixl 9")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"binding-precedence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-precedence"}},[e._v("#")]),e._v(" Binding precedence")]),e._v(" "),a("p",[e._v("The number that follows the associativity information describes in what order the operators are applied. It must always be between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("9")]),e._v(" inclusive. This is commonly referred to as how tightly the operator binds. For example, consider the following fixity declarations (in base)")]),e._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("infixl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("infixl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n\n")])])]),a("p",[e._v("Since "),a("code",[e._v("*")]),e._v(" has a higher binding precedence than "),a("code",[e._v("+")]),e._v(" we read "),a("code",[e._v("1 * 2 + 3")]),e._v(" as")]),e._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n\n")])])]),a("p",[e._v('In short, the higher the number, the closer the operator will "pull" the parens on either side of it.')]),e._v(" "),a("h3",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("li",[e._v("\nFunction application **always** binds higher than operators, so `f x `op` g y` must be interpreted as `(f x)`op`(g y)` no matter what the operator ``op`` and its fixity declaration are.\n")]),e._v(" "),a("li",[e._v("\nIf the binding precedence is omitted in a fixity declaration (for example we have `infixl *!?`) the default is `9`.\n")]),e._v(" "),a("h2",{attrs:{id:"example-declarations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-declarations"}},[e._v("#")]),e._v(" Example declarations")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("infixr 5 ++")])]),e._v(" "),a("li",[a("code",[e._v("infixl 4 <*>, <*, *>, <**>")])]),e._v(" "),a("li",[a("code",[e._v("infixl 8")]),e._v("shift"),a("code",[e._v(",")]),e._v("rotate"),a("code",[e._v(",")]),e._v("shiftL"),a("code",[e._v(",")]),e._v("shiftR"),a("code",[e._v(",")]),e._v("rotateL"),a("code",[e._v(",")]),e._v("rotateR``")]),e._v(" "),a("li",[a("code",[e._v("infix 4 ==, /=, <, <=, >=, >")])]),e._v(" "),a("li",[a("code",[e._v("infix ??")])])]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ol",[a("li",[e._v("infix [integer] ops")]),e._v(" "),a("li",[e._v("infixl [integer] ops")]),e._v(" "),a("li",[e._v("infixr [integer] ops")])]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Declaration component")]),e._v(" "),a("th",[e._v("Meaning")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("infixr")])]),e._v(" "),a("td",[e._v("the operator is right-associative")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("infixl")])]),e._v(" "),a("td",[e._v("the operator is left-associative")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("infix")])]),e._v(" "),a("td",[e._v("the operator is non-associative")])]),e._v(" "),a("tr",[a("td",[e._v("optional digit")]),e._v(" "),a("td",[e._v("binding precedence of the operator (range 0...9, default 9)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("op1, ... , opn")])]),e._v(" "),a("td",[e._v("operators")])])])]),e._v(" "),a("h4",{attrs:{id:"remarks-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks-2"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("To parse expressions involving operators and functions, Haskell uses fixity declarations to figure out where parenthesis go. In order, it")]),e._v(" "),a("ol",[a("li",[e._v("wraps function applications in parens")]),e._v(" "),a("li",[e._v("uses binding precendence to wrap groups of terms all seperated by operators of the same precedence")]),e._v(" "),a("li",[e._v("uses the associativity of those operators to figure out how to add parens to these groups")])]),e._v(" "),a("p",[e._v("Notice that we assume here that the operators in any given group from step 2 must all have the same associativity. In fact, Haskell will reject any program where this condition is not met.")]),e._v(" "),a("p",[e._v("As an example of the above algorithm, we can step though the process of adding parenthesis to "),a("code",[e._v("1 + negate 5 * 2 - 3 * 4 ^ 2 ^ 1")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("infixl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("infixl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("infixl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("infixr")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),e._v("\n\n")])])]),a("ol",[a("li",[a("code",[e._v("1 + (negate 5) * 2 - 3 * 4 ^ 2 ^ 1")])]),e._v(" "),a("li",[a("code",[e._v("1 + ((negate 5) * 2) - (3 * (4 ^ 2 ^ 1))")])]),e._v(" "),a("li",[a("code",[e._v("(1 + ((negate 5) * 2)) - (3 * (4 ^ (2 ^ 1)))")])])]),e._v(" "),a("p",[e._v("More details in section "),a("a",{attrs:{href:"https://www.haskell.org/onlinereport/decls.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("4.4.2 of the Haskell 98 report"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);