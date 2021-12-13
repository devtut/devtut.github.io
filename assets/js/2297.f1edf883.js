(window.webpackJsonp=window.webpackJsonp||[]).push([[2297],{2705:function(t,a,s){"use strict";s.r(a);var r=s(31),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nsarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nsarray"}},[t._v("#")]),t._v(" NSArray")]),t._v(" "),s("h2",{attrs:{id:"creating-nsarray-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-nsarray-instances"}},[t._v("#")]),t._v(" Creating NSArray instances")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("array1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSArray arrayWithObjects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"two"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"three"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("array2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"two"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"three"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"sorting-arrays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sorting-arrays"}},[t._v("#")]),t._v(" Sorting Arrays")]),t._v(" "),s("p",[t._v("The most flexible ways to sort an array is with the sortedArrayUsingComparator: method. This accepts an "),s("strong",[t._v("^NSComparisonResult(id obj1, id obj2) block")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nReturn Value            Description\n NSOrderedAscending      obj1 comes before obj2\n NSOrderedSame           obj1 and obj2 have no order\n NSOrderedDescending     obj1 comes after obj2\n\n")])])]),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n  NSArray *categoryArray = @[@"Apps", @"Music", @"Songs",\n                     @"iTunes", @"Books", @"Videos"];\n   \n    NSArray *sortedArray = [categoryArray sortedArrayUsingComparator:\n^NSComparisonResult(id obj1, id obj2) {\n    if ([obj1 length] < [obj2 length]) {\n        return NSOrderedAscending;\n    } else if ([obj1 length] > [obj2 length]) {\n        return NSOrderedDescending;\n    } else {\n        return NSOrderedSame;\n    }\n  }];\n\n NSLog(@"%@", sortedArray);\n\n')])])]),s("h2",{attrs:{id:"filter-nsarray-and-nsmutablearray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter-nsarray-and-nsmutablearray"}},[t._v("#")]),t._v(" Filter  NSArray and NSMutableArray")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSMutableArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableArray arrayWithObjects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Ken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Tim"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Chris"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Steve"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Charlie"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Melissa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nNSPredicate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bPredicate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSPredicate predicateWithFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("@\"SELF beginswith[c] 'c'\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("beginWithB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("array filteredArrayUsingPredicate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bPredicate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// beginWith "C" contains { @"Chris", @"Charlie" }.')]),t._v("\n\nNSPredicate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sPredicate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSPredicate predicateWithFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("@\"SELF contains[c] 'a'\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("array filterUsingPredicate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sPredicate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// array now contains { @"Charlie", @"Melissa" }')]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);