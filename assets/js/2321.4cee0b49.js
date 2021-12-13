(window.webpackJsonp=window.webpackJsonp||[]).push([[2321],{2729:function(e,t,a){"use strict";a.r(t);var n=a(31),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"random-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random-integer"}},[e._v("#")]),e._v(" Random Integer")]),e._v(" "),a("h2",{attrs:{id:"basic-random-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-random-integer"}},[e._v("#")]),e._v(" Basic Random Integer")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("arc4random_uniform()")]),e._v(" function is the simplest way to get high-quality random integers. As per the manual:")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("arc4random_uniform(upper_bound) will return a uniformly distributed random number less than upper_bound.\narc4random_uniform() is recommended over constructions like ''arc4random() % upper_bound'' as it avoids \"modulo bias\" when the upper bound is not a power of two.")]),e._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[e._v("uint32_t randomInteger "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("arc4random_uniform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// A random integer between 0 and 4")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"random-integer-within-a-range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random-integer-within-a-range"}},[e._v("#")]),e._v(" Random Integer within a Range")]),e._v(" "),a("p",[e._v("The following code demonstrates usage of "),a("code",[e._v("arc4random_uniform()")]),e._v(" to generate a random integer between 3 and 12:")]),e._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[e._v("uint32_t randomIntegerWithinRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("arc4random_uniform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// A random integer between 3 and 12")]),e._v("\n\n")])])]),a("p",[e._v("This works to create a range because "),a("code",[e._v("arc4random_uniform(10)")]),e._v(" returns an integer between 0 and 9. Adding 3 to this random integer produces a range between "),a("code",[e._v("0 + 3")]),e._v(" and "),a("code",[e._v("9 + 3")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);