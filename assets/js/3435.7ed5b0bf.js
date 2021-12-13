(window.webpackJsonp=window.webpackJsonp||[]).push([[3435],{3843:function(e,t,a){"use strict";a.r(t);var s=a(31),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"procedure-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure-calls"}},[e._v("#")]),e._v(" Procedure Calls")]),e._v(" "),a("h2",{attrs:{id:"this-is-confusing-why-not-just-always-use-parentheses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-is-confusing-why-not-just-always-use-parentheses"}},[e._v("#")]),e._v(" This is confusing. Why not just always use parentheses?")]),e._v(" "),a("p",[e._v("Parentheses are used to enclose the arguments of "),a("strong",[e._v("function calls")]),e._v(". Using them for "),a("strong",[e._v("procedure calls")]),e._v(" can cause unexpected problems.")]),e._v(" "),a("p",[e._v("Because they can introduce bugs, both at run-time by passing a possibly unintended value to the procedure, and at compile-time by simply being invalid syntax.")]),e._v(" "),a("h3",{attrs:{id:"run-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-time"}},[e._v("#")]),e._v(" Run-time")]),e._v(" "),a("p",[e._v("Redundant parentheses can introduce bugs. Given a procedure that takes an object reference as a parameter...")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v(" DoSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ByRef")]),e._v(" target "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" Range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n\n")])])]),a("p",[e._v("...and called with parentheses:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[e._v("DoSomething "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ActiveCell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'raises an error at runtime")]),e._v("\n\n")])])]),a("p",[e._v('This will raise an "Object Required" runtime error #424. Other errors are possible in other circumstances: here the '),a("code",[e._v("Application.ActiveCell")]),e._v(" "),a("code",[e._v("Range")]),e._v(" object reference is being "),a("strong",[e._v("evaluated")]),e._v(" and passed by value "),a("strong",[e._v("regardless")]),e._v(" of the procedure's signature specifying that "),a("code",[e._v("target")]),e._v(" would be passed "),a("code",[e._v("ByRef")]),e._v(". The actual value passed "),a("code",[e._v("ByVal")]),e._v(" to "),a("code",[e._v("DoSomething")]),e._v(" in the above snippet, is "),a("code",[e._v("Application.ActiveCell.Value")]),e._v(".")]),e._v(" "),a("p",[e._v("Parentheses force VBA to evaluate the value of the bracketed expression, and pass the result "),a("code",[e._v("ByVal")]),e._v(" to the called procedure. When the type of the evaluated result mismatches the procedure's expected type and cannot be implicitly converted, a runtime error is raised.")]),e._v(" "),a("h3",{attrs:{id:"compile-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-time"}},[e._v("#")]),e._v(" Compile-time")]),e._v(" "),a("p",[e._v("This code will fail to compile:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[e._v("MsgBox "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Invalid Code!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" vbCritical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),a("p",[e._v("Because the expression "),a("code",[e._v('("Invalid Code!", vbCritical)')]),e._v(" cannot be "),a("strong",[e._v("evaluated")]),e._v(" to a value.")]),e._v(" "),a("p",[e._v("This would compile and work:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[e._v("MsgBox "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Invalid Code!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("vbCritical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),a("p",[e._v("But would definitely look silly. Avoid redundant parentheses.")]),e._v(" "),a("h2",{attrs:{id:"implicit-call-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implicit-call-syntax"}},[e._v("#")]),e._v(" Implicit Call Syntax")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[e._v("ProcedureName\nProcedureName argument1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" argument2\n\n")])])]),a("p",[e._v("Call a procedure by its name without any parentheses.")]),e._v(" "),a("h3",{attrs:{id:"edge-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edge-case"}},[e._v("#")]),e._v(" Edge case")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Call")]),e._v(" keyword is only required in one edge case:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Call")]),e._v(" DoSomething "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" DoSomethingElse\n\n")])])]),a("p",[a("code",[e._v("DoSomething")]),e._v(" and "),a("code",[e._v("DoSomethingElse")]),e._v(" are procedures being called. If the "),a("code",[e._v("Call")]),e._v(" keyword was removed, then "),a("code",[e._v("DoSomething")]),e._v(" would be parsed as a "),a("strong",[e._v("line label")]),e._v(" rather than a procedure call, which would break the code:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[e._v("DoSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" DoSomethingElse "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'only DoSomethingElse will run")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"explicit-call-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explicit-call-syntax"}},[e._v("#")]),e._v(" Explicit Call Syntax")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Call")]),e._v(" ProcedureName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Call")]),e._v(" ProcedureName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("argument1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" argument2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),a("p",[e._v("The explicit call syntax requires the "),a("code",[e._v("Call")]),e._v(" keyword and parentheses around the argument list; parentheses are redundant if there are no parameters. This syntax was made obsolete when the more modern implicit call syntax was added to VB.")]),e._v(" "),a("h2",{attrs:{id:"optional-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-arguments"}},[e._v("#")]),e._v(" Optional Arguments")]),e._v(" "),a("p",[e._v("Some procedures have optional arguments. Optional arguments always come after required arguments, but the procedure can be called without them.")]),e._v(" "),a("p",[e._v("For example, if the function, "),a("code",[e._v("ProcedureName")]),e._v(" were to have two required arguments ("),a("code",[e._v("argument1")]),e._v(", "),a("code",[e._v("argument2")]),e._v("), and one optional argument, "),a("code",[e._v("optArgument3")]),e._v(", it could be called at least four ways:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("' Without optional argument")]),e._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ProcedureName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("' With optional argument")]),e._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ProcedureName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("' Using named arguments (allows a different order)")]),e._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ProcedureName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("optArgument3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" argument1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" argument2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("' Mixing named and unnamed arguments ")]),e._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ProcedureName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" optArgument3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),a("p",[e._v("The structure of the function header being called here would look something like this:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Function")]),e._v(" ProcedureName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("argument1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" argument2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Optional")]),e._v(" optArgument3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v("\n\n")])])]),a("p",[e._v("The "),a("code",[e._v("Optional")]),e._v(" keyword indicates that this argument can be omitted. As mentioned before - any optional arguments introduced in the header "),a("strong",[e._v("must")]),e._v(" appear at the end, after any required arguments.")]),e._v(" "),a("p",[e._v("You can also provide a "),a("strong",[e._v("default")]),e._v(" value for the argument in the case that a value isn't passed to the function:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Function")]),e._v(" ProcedureName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("argument1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" argument2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Optional")]),e._v(" optArgument3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v("\n\n")])])]),a("p",[e._v("In this function, if the argument for "),a("code",[e._v("c")]),e._v(" isn't supplied it's value will default to "),a("code",[e._v('"C"')]),e._v(". If a value "),a("strong",[e._v("is")]),e._v(" supplied then this will override the default value.")]),e._v(" "),a("h2",{attrs:{id:"return-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-values"}},[e._v("#")]),e._v(" Return Values")]),e._v(" "),a("p",[e._v("To retrieve the result of a procedure call (e.g. "),a("code",[e._v("Function")]),e._v(" or "),a("code",[e._v("Property Get")]),e._v(" procedures), put the call on the right-hand side of an assignment:")]),e._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[e._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ProcedureName\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ProcedureName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("argument1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" argument2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),a("p",[e._v("Parentheses must be present if there are parameters. If the procedure has no parameters, the parentheses are redundant.")]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ul",[a("li",[e._v("IdentifierName ["),a("strong",[e._v("arguments")]),e._v("]")]),e._v(" "),a("li",[e._v("Call IdentifierName["),a("strong",[e._v("(arguments)")]),e._v("]")]),e._v(" "),a("li",[e._v("[Let|Set] "),a("strong",[e._v("expression")]),e._v(" = IdentifierName["),a("strong",[e._v("(arguments)")]),e._v("]")]),e._v(" "),a("li",[e._v("[Let|Set] IdentifierName["),a("strong",[e._v("(arguments)")]),e._v("] = "),a("strong",[e._v("expression")])])]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Info")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("IdentifierName")]),e._v(" "),a("td",[e._v("The name of the procedure to call.")])]),e._v(" "),a("tr",[a("td",[e._v("arguments")]),e._v(" "),a("td",[e._v("A comma-separated list of arguments to be passed to the procedure.")])])])]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("The first two syntaxes are for calling "),a("code",[e._v("Sub")]),e._v(" procedures; notice the first syntax involves no parentheses.")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/vba/1179/procedure-calls/3818/this-is-confusing-why-not-just-always-use-parentheses",target:"_blank",rel:"noopener noreferrer"}},[e._v("This is confusing. Why not just always use parentheses?"),a("OutboundLink")],1),e._v(" for a thorough explanation of the differences between the first two syntaxes.")]),e._v(" "),a("p",[e._v("The third syntax is for calling "),a("code",[e._v("Function")]),e._v(" and "),a("code",[e._v("Property Get")]),e._v(" procedures; when there are parameters, the parentheses are always mandatory. The "),a("code",[e._v("Let")]),e._v(" keyword is optional when assigning a "),a("strong",[e._v("value")]),e._v(", but the "),a("code",[e._v("Set")]),e._v(" keyword is "),a("strong",[e._v("required")]),e._v(" when assigning a "),a("strong",[e._v("reference")]),e._v(".")]),e._v(" "),a("p",[e._v("Fourth syntax is for calling "),a("code",[e._v("Property Let")]),e._v(" and "),a("code",[e._v("Property Set")]),e._v(" procedures; the "),a("strong",[a("code",[e._v("expression")])]),e._v(" on the right-hand side of the assignment is passed to the property's value parameter.")])])}),[],!1,null,null,null);t.default=r.exports}}]);