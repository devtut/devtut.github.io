(window.webpackJsonp=window.webpackJsonp||[]).push([[1834],{2242:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"conditional-statements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditional-statements"}},[t._v("#")]),t._v(" Conditional Statements")]),t._v(" "),a("h2",{attrs:{id:"when-statement-argument-matching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-statement-argument-matching"}},[t._v("#")]),t._v(" When-statement argument matching")]),t._v(" "),a("p",[t._v("When given an argument, the "),a("code",[t._v("when")]),t._v("-statement matches the argument against the branches in sequence. The matching is done using the "),a("code",[t._v("==")]),t._v(" operator which performs null checks and compares the operands using the "),a("code",[t._v("equals")]),t._v(" function. The first matching one will be executed.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"English"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"How are you?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"German"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wie geht es dir?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I don\'t know that language yet :("')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("The when statement also knows some more advanced matching options:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" names "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sarah"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tim"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Maggie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" names "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I know that name!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Argument was not in the range from 1 to 10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Due to smart casting, you can use String-functions here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"when-statement-as-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-statement-as-expression"}},[t._v("#")]),t._v(" When-statement as expression")]),t._v(" "),a("p",[t._v("Like if, when can also be used as an expression:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"English"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"How are you?"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"German"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wie geht es dir?"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I don\'t know that language yet :("')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("To be used as an expression, the when-statement must be exhaustive, i.e. either have an else branch or cover all possibilities with the branches in another way.")]),t._v(" "),a("h2",{attrs:{id:"standard-if-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-if-statement"}},[t._v("#")]),t._v(" Standard if-statement")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is empty!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is short!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is long!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("The else-branches are optional in normal if-statements.")]),t._v(" "),a("h2",{attrs:{id:"if-statement-as-an-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-statement-as-an-expression"}},[t._v("#")]),t._v(" If-statement as an expression")]),t._v(" "),a("p",[t._v("If-statements can be expressions:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Condition met!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Condition not met!"')]),t._v("\n\n")])])]),a("p",[t._v("Note that the "),a("code",[t._v("else")]),t._v("-branch is not optional if the "),a("code",[t._v("if")]),t._v("-statement is used as an expression.")]),t._v(" "),a("p",[t._v("This can also been done with a multi-line variant with curly brackets and multiple "),a("code",[t._v("else if")]),t._v(" statements.")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Condition1 met!"')]),t._v(" \n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Condition2 met!"')]),t._v(" \n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Conditions not met!"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("blockquote"),t._v(" "),a("p",[t._v("TIP: Kotlin can infer the type of the variable for you but if you want to be sure of the type just annotate it on the variable like: "),a("code",[t._v("val str: String =")]),t._v(" this will enforce the type and will make it easier to read.")]),t._v(" "),a("h2",{attrs:{id:"when-statement-instead-of-if-else-if-chains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-statement-instead-of-if-else-if-chains"}},[t._v("#")]),t._v(" When-statement instead of if-else-if chains")]),t._v(" "),a("p",[t._v("The when-statement is an alternative to an if-statement with multiple else-if-branches:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is empty!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is short!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is long!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Same code written using an "),a("strong",[t._v("if-else-if")]),t._v(" chain:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is empty!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is short!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is long!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Just like with the if-statement, the else-branch is optional, and you can add as many or as few branches as you like.\nYou can also have multiline-branches:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    condition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomeMore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"when-statement-with-enums"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-statement-with-enums"}},[t._v("#")]),t._v(" When-statement with enums")]),t._v(" "),a("p",[a("code",[t._v("when")]),t._v(" can be used to match "),a("code",[t._v("enum")]),t._v(" values:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Day "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Sunday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Monday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Tuesday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Wednesday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Thursday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Friday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Saturday\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doOnDay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("day"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sunday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Monday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tuesday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do other thing")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wednesday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thursday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Friday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Saturday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("As you can see in second case line ("),a("code",[t._v("Monday")]),t._v(" and "),a("code",[t._v("Tuedsay")]),t._v(") it is also possible to combine two or more "),a("code",[t._v("enum")]),t._v(" values.")]),t._v(" "),a("p",[t._v("If your cases are not exhaustive the compile will show an error. You can use "),a("code",[t._v("else")]),t._v(" to handle default cases:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doOnDay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("day"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Monday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Work")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tuesday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Work hard")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wednesday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thursday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n        Day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Friday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Party on weekend")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n")])])]),a("p",[t._v("Though the same can be done using "),a("code",[t._v("if-then-else")]),t._v(" construct, "),a("code",[t._v("when")]),t._v(" takes care of missing "),a("code",[t._v("enum")]),t._v(" values and makes it more natural.")]),t._v(" "),a("p",[t._v("Check "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/kotlin/2286/enum",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" for more information about kotlin "),a("code",[t._v("enum")])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("In contrast to Java's "),a("code",[t._v("switch")]),t._v(", the "),a("code",[t._v("when")]),t._v(" statement has no fall-through behavior. This means, that if a branch is matched, the control flow returns after its execution and no "),a("code",[t._v("break")]),t._v(" statement is required. If you want to combine the bahaviors for multiple arguments, you can write multiple arguments separated by commas:")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"either foo or bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"didn\'t match anything"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);