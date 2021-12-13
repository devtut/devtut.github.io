(window.webpackJsonp=window.webpackJsonp||[]).push([[3343],{3750:function(t,s,n){"use strict";n.r(s);var a=n(31),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"method-swizzling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#method-swizzling"}},[t._v("#")]),t._v(" Method Swizzling")]),t._v(" "),n("h2",{attrs:{id:"extending-uiviewcontroller-and-swizzling-viewdidload"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extending-uiviewcontroller-and-swizzling-viewdidload"}},[t._v("#")]),t._v(" Extending UIViewController and Swizzling viewDidLoad")]),t._v(" "),n("p",[t._v("In Objective-C, method swizzling is the process of changing the implementation of an existing selector.  This is possible due to the way Selectors are mapped on a dispatch table, or a table of pointers to functions or methods.")]),t._v(" "),n("p",[t._v("Pure Swift methods are not dynamically dispatched by the Objective-C runtime, but we can still take advantage of these tricks on any class that inherits from "),n("code",[t._v("NSObject")]),t._v(".")]),t._v(" "),n("p",[t._v("Here, we will extend "),n("code",[t._v("UIViewController")]),t._v(" and swizzle "),n("code",[t._v("viewDidLoad")]),t._v(" to add some custom logging:")]),t._v(" "),n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extension")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We cannot override load like we could in Objective-C, so override initialize instead")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("initialize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Make a static struct for our dispatch token so only one exists in memory")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dispatch_once_t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wrap this in a dispatch_once block so it is only run once")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_once")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Static")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the original selectors and method implementations, and swap them with our new method")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" originalSelector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewDidLoad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" swizzledSelector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myViewDidLoad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" originalMethod "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_getInstanceMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originalSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" swizzledMethod "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_getInstanceMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" swizzledSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" didAddMethod "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_addMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originalSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_getImplementation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("swizzledMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_getTypeEncoding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("swizzledMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// class_addMethod can fail if used incorrectly or with invalid pointers, so check to make sure we were able to add the method to the lookup table successfully")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" didAddMethod "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_replaceMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" swizzledSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_getImplementation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_getTypeEncoding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_exchangeImplementations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" swizzledMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Our new viewDidLoad function")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// In this example, we are just logging the name of the function, but this can be used to run any custom code")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("myViewDidLoad")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is not recursive since we swapped the Selectors in initialize().")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We cannot call super in an extension.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myViewDidLoad")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token literal constant"}},[t._v("#function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// logs myViewDidLoad()")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"basics-of-swift-swizzling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basics-of-swift-swizzling"}},[t._v("#")]),t._v(" Basics of Swift Swizzling")]),t._v(" "),n("p",[t._v("Let's swap the implementation of "),n("code",[t._v("methodOne()")]),t._v(" and "),n("code",[t._v("methodTwo()")]),t._v(" in our "),n("code",[t._v("TestSwizzling")]),t._v(" class:")]),t._v(" "),n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSwizzling")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dynamic")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("methodOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extension")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSwizzling")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//In Objective-C you'd perform the swizzling in load(), ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//but this method is not permitted in Swift")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("initialize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Inner")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" originalSelector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSwizzling")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("methodOne"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" swizzledSelector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSwizzling")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("methodTwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                 \n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" originalMethod "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_getInstanceMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSwizzling")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originalSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" swizzledMethod "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_getInstanceMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSwizzling")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" swizzledSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                \n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_exchangeImplementations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" swizzledMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Inner")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("methodTwo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It will not be a recursive call anymore after the swizzling")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodTwo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSwizzling")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodTwo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"basics-of-swizzling-objective-c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basics-of-swizzling-objective-c"}},[t._v("#")]),t._v(" Basics of Swizzling - Objective-C")]),t._v(" "),n("p",[t._v("Objective-C example of swizzling UIView's "),n("code",[t._v("initWithFrame:")]),t._v(" method")]),t._v(" "),n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IMP")]),t._v(" original_initWithFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("swizzleMethods "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOOL")]),t._v(" swizzled "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("swizzled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        swizzled "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" initWithFrameMethod "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_getInstanceMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIView")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initWithFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        original_initWithFrame "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_setImplementation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            initWithFrameMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IMP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("replacement_initWithFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" id "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replacement_initWithFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SEL")]),t._v(" _cmd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CGRect")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This will be called instead of the original initWithFrame method on UIView")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do here whatever you need... ")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bonus: This is how you would call the original initWithFrame method")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIView")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("view "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SEL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CGRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("original_initWithFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _cmd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h4",{attrs:{id:"remarks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),n("p",[t._v("When using method swizzling in Swift there are two requirements that your classes/methods must comply with:")]),t._v(" "),n("ul",[n("li",[t._v("Your class must extend "),n("code",[t._v("NSObject")])]),t._v(" "),n("li",[t._v("The functions you want to swizzle must have the "),n("code",[t._v("dynamic")]),t._v(" attribute")])]),t._v(" "),n("p",[t._v("For a complete explanation of why this is required, check out "),n("a",{attrs:{href:"https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/BuildingCocoaApps/InteractingWithObjective-CAPIs.html#//apple_ref/doc/uid/TP40014216-CH4-XID_38",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Swift with Cocoa and Objective-C"),n("OutboundLink")],1),t._v(":")]),t._v(" "),n("blockquote"),t._v(" "),n("p",[n("strong",[t._v("Requiring Dynamic Dispatch")])]),n("p",[t._v("While the "),n("code",[t._v("@objc")]),t._v(" attribute exposes your Swift API to the Objective-C\nruntime, it does not guarantee dynamic dispatch of a property, method,\nsubscript, or initializer. "),n("em",[t._v("The Swift compiler may still devirtualize\nor inline member access to optimize the performance of your code,\nbypassing the Objective-C runtime")]),t._v(". When you mark a member declaration\nwith the "),n("code",[t._v("dynamic")]),t._v(" modifier, access to that member is always dynamically\ndispatched. Because declarations marked with the "),n("code",[t._v("dynamic")]),t._v(" modifier are\ndispatched using the Objective-C runtime, they’re implicitly marked\nwith the "),n("code",[t._v("@objc")]),t._v(" attribute.")]),t._v(" "),n("p",[t._v("Requiring dynamic dispatch is rarely necessary. "),n("strong",[t._v("However, you must use\nthe "),n("code",[t._v("dynamic")]),t._v(" modifier when you know that the implementation of an API\nis replaced at runtime")]),t._v(". For example, you can use the\n"),n("code",[t._v("method_exchangeImplementations")]),t._v(" function in the Objective-C runtime to\nswap out the implementation of a method while an app is running. If\nthe Swift compiler inlined the implementation of the method or\ndevirtualized access to it, "),n("strong",[t._v("the new implementation would not be used")]),t._v(".")]),n("p"),t._v(" "),n("h3",{attrs:{id:"links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ObjCRuntimeRef/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Objective-C Runtime Reference"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/BuildingCocoaApps/InteractingWithObjective-CAPIs.html#//apple_ref/doc/uid/TP40014216-CH4-XID_38",target:"_blank",rel:"noopener noreferrer"}},[t._v("Method Swizzling on NSHipster"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);