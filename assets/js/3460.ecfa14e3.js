(window.webpackJsonp=window.webpackJsonp||[]).push([[3460],{3868:function(t,s,n){"use strict";n.r(s);var a=n(31),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"debugging-your-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debugging-your-application"}},[t._v("#")]),t._v(" Debugging your application")]),t._v(" "),n("p",[t._v("Whenever you have a problem in your code, it is always a good idea to know what is going on inside. The class "),n("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/system.diagnostics.debug(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("System.Diagnostics.Debug"),n("OutboundLink")],1),t._v(" in .Net Framework will help you a lot in this task.")]),t._v(" "),n("p",[t._v("The first advantage of the Debug class is that it produces code only if you build your application in Debug mode. When you build your application in Release mode, no code will be generated from the Debug calls.")]),t._v(" "),n("h2",{attrs:{id:"debug-in-the-console"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debug-in-the-console"}},[t._v("#")]),t._v(" Debug in the console")]),t._v(" "),n("div",{staticClass:"language-vb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vb"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Module")]),t._v(" Module1\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" Main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This line will be shown in the Visual Studio output console"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Press a key to exit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReadKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"End of application"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Module")]),t._v("\n\n")])])]),n("p",[t._v("will produce:")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://i.stack.imgur.com/CSZAI.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://i.stack.imgur.com/CSZAI.png",alt:"Debug output window in Visual Studio"}}),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"indenting-your-debug-output"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#indenting-your-debug-output"}},[t._v("#")]),t._v(" Indenting your debug output")]),t._v(" "),n("div",{staticClass:"language-vb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vb"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Module")]),t._v(" Module1\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" Main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Starting aplication"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Indent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        LoopAndDoStuff"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Unindent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Press a key to exit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReadKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"End of application"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" LoopAndDoStuff"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Iterations "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Starting loop"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Indent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" Iterations "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iteration "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" of "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Iterations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('": Value of X: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v("\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Unindent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Loop is over"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Module")]),t._v("\n\n")])])]),n("p",[t._v("will produce:\n"),n("a",{attrs:{href:"https://i.stack.imgur.com/wHFLT.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://i.stack.imgur.com/wHFLT.png",alt:"Output when indenting"}}),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"debug-in-a-text-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debug-in-a-text-file"}},[t._v("#")]),t._v(" Debug in a text file")]),t._v(" "),n("p",[t._v("At the beginning of your application, your must add a "),n("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/system.diagnostics.textwritertracelistener(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("TextWriterTraceListener"),n("OutboundLink")],1),t._v(" to the Listeners list of the Debug class.")]),t._v(" "),n("div",{staticClass:"language-vb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vb"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Module")]),t._v(" Module1\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" Main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Listeners"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" TextWriterTraceListener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Debug of "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" DateTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Starting aplication"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Press a key to exit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReadKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"End of application"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Module")]),t._v("\n\n")])])]),n("p",[t._v("All the Debug code produced will be outputed in the Visual Studio console AND in the text file you chose.")]),t._v(" "),n("p",[t._v("If the file is always the same:")]),t._v(" "),n("div",{staticClass:"language-vb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vb"}},[n("code",[t._v("Debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Listeners"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" TextWriterTraceListener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Debug.txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("The output will be appended to the file every time AND a new file starting with a GUID then your filename will be generated.")])])}),[],!1,null,null,null);s.default=e.exports}}]);