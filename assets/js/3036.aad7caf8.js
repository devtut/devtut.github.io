(window.webpackJsonp=window.webpackJsonp||[]).push([[3036],{3444:function(t,a,e){"use strict";e.r(a);var s=e(31),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"native-modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#native-modules"}},[t._v("#")]),t._v(" Native Modules")]),t._v(" "),e("h2",{attrs:{id:"create-your-native-module-ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-native-module-ios"}},[t._v("#")]),t._v(" Create your Native Module (IOS)")]),t._v(" "),e("h3",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("from "),e("a",{attrs:{href:"http://facebook.github.io/react-native/docs/native-modules-ios.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://facebook.github.io/react-native/docs/native-modules-ios.html"),e("OutboundLink")],1)]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("Sometimes an app needs access to platform API, and React Native doesn't have a corresponding module yet. Maybe you want to reuse some existing Objective-C, Swift or C++ code without having to reimplement it in JavaScript, or write some high performance, multi-threaded code such as for image processing, a database, or any number of advanced extensions.")]),t._v(" "),e("p",[t._v("A Native Module is simply an Objective-C Class that implements the "),e("code",[t._v("RCTBridgeModule")]),t._v(" protocol.")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("In your Xcode project create a new file and select "),e("strong",[t._v("Cocoa Touch Class")]),t._v(", in the creation wizard choose a name for your Class ("),e("strong",[t._v("e.g. NativeModule")]),t._v("), make it a "),e("strong",[t._v("Subclass of")]),t._v(": "),e("code",[t._v("NSObject")]),t._v(" and choose "),e("code",[t._v("Objective-C")]),t._v(" for the language.")]),t._v(" "),e("p",[t._v("This will create two files "),e("code",[t._v("NativeModuleEx.h")]),t._v(" and "),e("code",[t._v("NativeModuleEx.m")])]),t._v(" "),e("p",[t._v("You will need to import "),e("code",[t._v("RCTBridgeModule.h")]),t._v(" to your "),e("code",[t._v("NativeModuleEx.h")]),t._v(" file as it follows:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("#"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Foundation"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Foundation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n#"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RCTBridgeModule.h"')]),t._v("\n\n@"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NativeModuleEx")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NSObject "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RCTBridgeModule"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n@end\n\n")])])]),e("p",[t._v("In your "),e("code",[t._v("NativeModuleEx.m")]),t._v(" add the following code:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("#"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NativeModuleEx.h"')]),t._v("\n\n@implementation NativeModuleEx\n\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RCT_EXPORT_MODULE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RCT_EXPORT_METHOD")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("testModule"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"The string '%@' comes from JavaScript! \"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n@end\n\n")])])]),e("p",[e("code",[t._v("RCT_EXPORT_MODULE()")]),t._v(" will make your module accessible in JavaScript, you can pass it an optional argument to specify its name. If no name is provided it will match the Objective-C class name.")]),t._v(" "),e("p",[e("code",[t._v("RCT_EXPORT_METHOD()")]),t._v(" will expose your method to JavaScript, only the methods you export using this macro will be accessible in JavaScript.")]),t._v(" "),e("p",[t._v("Finally, in your JavaScript you can call your method as it follows:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NativeModules "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" NativeModuleEx "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NativeModules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NativeModuleEx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nNativeModuleEx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("testModule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Some String !'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);