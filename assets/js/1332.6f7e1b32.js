(window.webpackJsonp=window.webpackJsonp||[]).push([[1332],{1740:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"categories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#categories"}},[t._v("#")]),t._v(" Categories")]),t._v(" "),s("h2",{attrs:{id:"create-a-category"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-category"}},[t._v("#")]),t._v(" Create a Category")]),t._v(" "),s("p",[t._v("Categories provide the ability to add some extra functionality to an object without subclassing or changing the actual object.")]),t._v(" "),s("p",[t._v("For example we want to set some custom fonts.\nLets create a category that add functionality to "),s("code",[t._v("UIFont")]),t._v(' class. Open your Xcode project, click on File -> New -> File and choose Objective-C file , click Next enter your category name say "CustomFont" choose file type as Category and Class as UIFont then Click "Next" followed by "Create."')]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/4bC0S.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/4bC0S.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/6mGC1.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/6mGC1.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Declare the Category Method :-")])]),t._v(" "),s("p",[t._v('Click "UIFont+CustomFonts.h" to view the new category\'s header file. Add the following code to the interface to declare the method.')]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIFont")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomFonts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIFont")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("productSansRegularFontWithSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CGFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@end")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Now Implement the Category Method:-")])]),t._v(" "),s("p",[t._v('Click "UIFont+CustomFonts.m" to view the category\'s implementation file. Add the following code to create a method that will set ProductSansRegular Font.')]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIFont")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("productSansRegularFontWithSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CGFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIFont")]),t._v(" fontWithName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ProductSans-Regular"')])]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Import your category")])]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UIFont+CustomFonts.h"')])]),t._v("\n\n")])])]),s("p",[t._v("Now set the Label font")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label setFont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIFont")]),t._v(" productSansRegularFontWithSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Categories can be used to override methods of a class. Even if the method is actually private. The overridden method cannot be accessed from the category or anywhere else. So it's important to make sure when adding methods to an existing class, that those methods don't exist already.")])])}),[],!1,null,null,null);a.default=n.exports}}]);