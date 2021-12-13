(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{1027:function(t,s,e){"use strict";e.r(s);var a=e(31),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bit-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bit-fields"}},[t._v("#")]),t._v(" Bit fields")]),t._v(" "),e("p",[t._v("Bit fields tightly pack C and C++ structures to reduce size.  This appears painless: specify the number of bits for members, and compiler does the work of co-mingling bits.  The restriction is inability to take the address of a bit field member, since it is stored co-mingled.  "),e("code",[t._v("sizeof()")]),t._v(" is also disallowed.")]),t._v(" "),e("p",[t._v("The cost of bit fields is slower access, as memory must be retrieved and bitwise operations applied to extract or modify member values.  These operations also add to executable size.")]),t._v(" "),e("h2",{attrs:{id:"declaration-and-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declaration-and-usage"}},[t._v("#")]),t._v(" Declaration and Usage")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileAttributes")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ReadOnly"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Hidden"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("Here, each of these two fields will occupy 1 bit in memory. It is specified by "),e("strong",[e("code",[t._v(": 1")])]),t._v(" expression after the variable names. Base type of bit field could be any integral type (8-bit int to 64-bit int). Using "),e("code",[t._v("unsigned")]),t._v(" type is recommended, otherwise surprises may come.")]),t._v(" "),e("p",[t._v('If more bits are required, replace "1" with number of bits required. For example:')]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Year "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 2^13 = 8192, enough for "year" representation for long time')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Month"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2^4 = 16, enough to represent 1-12 month values.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Day"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 32")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("The whole structure is using just 22 bits, and with normal compiler settings, "),e("code",[t._v("sizeof")]),t._v(" this structure would be 4 bytes.")]),t._v(" "),e("p",[t._v("Usage is pretty simple. Just declare the variable, and use it like ordinary structure.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("Date d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Year "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Month "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Day "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nstd"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Year:"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Year "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("endl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Month:"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Month "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("endl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Day:"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Day "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("endl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("How expensive are the bitwise operations?  Suppose a simple non-bit field structure:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" my_var"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("In some later code:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("my_var"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("If "),e("code",[t._v("sizeof (unsigned) == 4")]),t._v(", then x is stored at the start of the structure, and y is stored 4 bytes in.  Assembly code generated may resemble:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("loada register1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("#myvar     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" get the address of the structure\nstorei register1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("#"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x05")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" put the value "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" at offset "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n")])])]),e("p",[t._v("This is straightforward because x is not co-mingled with y.  But imagine redefining the structure with bit fields:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Range 0-0x0f, or 0 through 15 */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("Both "),e("code",[t._v("x")]),t._v(" and "),e("code",[t._v("y")]),t._v(" will be allocated 4 bits, sharing a single byte.  The structure thus takes up 1 byte, instead of 8.  Consider the assembly to set "),e("code",[t._v("y")]),t._v(" now, assuming it ends up in the upper nibble:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("loada  register1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("#myvar        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" get the address of the structure\nloadb  register2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("register1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" get the byte from memory\nandb   register2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("#"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0f")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" zero out y in the byte"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" leaving x alone\norb    register2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("#"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x50")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" put the "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" into the "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),t._v(" portion of the byte\nstb    register1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("register2  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" put the modified byte back into memory\n\n")])])]),e("p",[t._v("This may be a good trade-off if we have thousands or millions of these structures, and it helps keeps memory in cache or prevents swapping—or could bloat the executable to worsen these problems and slow processing.  As with all things, use good judgement.")]),t._v(" "),e("p",[e("strong",[t._v("Device driver use:")]),t._v(" Avoid bit fields as a clever implementation strategy for device drivers.  Bit field storage layouts are not necessarily consistent between compilers, making such implementations non-portable.  The read-modify-write to set values may not do what devices expect, causing unexpected behaviors.")])])}),[],!1,null,null,null);s.default=n.exports}}]);