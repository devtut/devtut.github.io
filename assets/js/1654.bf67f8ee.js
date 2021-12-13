(window.webpackJsonp=window.webpackJsonp||[]).push([[1654],{2062:function(e,t,a){"use strict";a.r(t);var s=a(31),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"reference-data-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-data-types"}},[e._v("#")]),e._v(" Reference Data Types")]),e._v(" "),a("h2",{attrs:{id:"instantiating-a-reference-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-a-reference-type"}},[e._v("#")]),e._v(" Instantiating a reference type")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Object")]),e._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Note the 'new' keyword")]),e._v("\n\n")])])]),a("p",[e._v("Where:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Object")]),e._v(" is a reference type.")]),e._v(" "),a("li",[a("code",[e._v("obj")]),e._v(" is the variable in which to store the new reference.")]),e._v(" "),a("li",[a("code",[e._v("Object()")]),e._v(" is the call to a constructor of "),a("code",[e._v("Object")]),e._v(".")])]),e._v(" "),a("p",[e._v("What happens:")]),e._v(" "),a("ul",[a("li",[e._v("Space in memory is allocated for the object.")]),e._v(" "),a("li",[e._v("The constructor "),a("code",[e._v("Object()")]),e._v(" is called to initialize that memory space.")]),e._v(" "),a("li",[e._v("The memory address is stored in "),a("code",[e._v("obj")]),e._v(", so that it "),a("strong",[e._v("references")]),e._v(" the newly created object.")])]),e._v(" "),a("p",[e._v("This is different from primitives:")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[e._v("Where the actual value "),a("code",[e._v("10")]),e._v(" is stored in "),a("code",[e._v("i")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"dereferencing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dereferencing"}},[e._v("#")]),e._v(" Dereferencing")]),e._v(" "),a("p",[e._v("Dereferencing happens with the "),a("code",[e._v(".")]),e._v(" operator:")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Object")]),e._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 'obj' is dereferenced.")]),e._v("\n\n")])])]),a("p",[e._v("Dereferencing "),a("strong",[e._v("follows")]),e._v(" the memory address stored in a reference, to the place in memory where the actual object resides. When an object has been found, the requested method is called ("),a("code",[e._v("toString")]),e._v(" in this case).")]),e._v(" "),a("p",[e._v("When a reference has the value "),a("code",[e._v("null")]),e._v(", dereferencing results in a "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/java/1003/nullpointerexception",target:"_blank",rel:"noopener noreferrer"}},[e._v("NullPointerException"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Object")]),e._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Throws a NullpointerException when this statement is executed.")]),e._v("\n\n")])])]),a("p",[a("code",[e._v("null")]),e._v(" indicates the absence of a value, i.e. "),a("strong",[e._v("following")]),e._v(" the memory address leads nowhere. So there is no object on which the requested method can be called.")])])}),[],!1,null,null,null);t.default=n.exports}}]);