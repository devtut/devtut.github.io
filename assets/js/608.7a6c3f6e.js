(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1016:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"x-macros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-macros"}},[t._v("#")]),t._v(" X-macros")]),t._v(" "),a("p",[t._v("X-macros are a preprocessor-based technique for minimizing repetitious code and maintaining data / code correspondences.  Multiple distinct macro expansions based on a common set of data are supported by representing the whole group of expansions via a single master macro, with that macro's replacement text consisting of a sequence of expansions of an inner macro, one for each datum.  The inner macro is traditionally named "),a("code",[t._v("X()")]),t._v(", hence the name of the technique.")]),t._v(" "),a("h2",{attrs:{id:"trivial-use-of-x-macros-for-printfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trivial-use-of-x-macros-for-printfs"}},[t._v("#")]),t._v(" Trivial use of X-macros for printfs")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* define a list of preprocessor tokens on which to call X */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("X_123")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* define X to use */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X(%d) made this print\\n"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\nX_123\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("undef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("X")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* good practice to undef X to facilitate reuse later on */")]),t._v("\n\n")])])]),a("p",[t._v("This example will result in the preprocessor generating the following code:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X(%d) made this print\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X(%d) made this print\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X(%d) made this print\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"extension-give-the-x-macro-as-an-argument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension-give-the-x-macro-as-an-argument"}},[t._v("#")]),t._v(" Extension: Give the X macro as an argument")]),t._v(" "),a("p",[t._v('The X-macro approach can be generalized a bit by making the name of the "X" macro an argument of the master macro.  This has the advantages of helping to avoid macro name collisions and of allowing use of a general-purpose macro as the "X" macro.')]),t._v(" "),a("p",[t._v("As always with X macros, the master macro represents a list of items whose significance is specific to that macro.  In this variation, such a macro might be defined like so:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* declare list of items */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("ITEM_LIST")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* end of list */")])]),t._v("\n\n")])])]),a("p",[t._v("One might then generate code to print the item names like so:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* define macro to apply */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("PRINTSTRING")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" #value ")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* apply macro to the list of items */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ITEM_LIST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PRINTSTRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("That expands to this code:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item3"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v('In contrast to standard X macros, where the "X" name is a built-in characteristic of the master macro, with this style it may be unnecessary or even undesirable to afterward undefine the macro used as the argument ('),a("code",[t._v("PRINTSTRING")]),t._v(" in this example).")]),t._v(" "),a("h2",{attrs:{id:"enum-value-and-identifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enum-value-and-identifier"}},[t._v("#")]),t._v(" Enum Value and Identifier")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* declare items of the enum */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("FOREACH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* end of list */")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* define the enum values */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" MyEnum_ ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEnum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FOREACH "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("undef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("X")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* convert an enum value to its identifier */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enum2string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" enumValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stringValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enumValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" MyEnum_ ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stringValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" #id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n    FOREACH\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("undef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("X")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stringValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Next you can use the enumerated value in your code and easily print its identifier using :")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enum2string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyEnum_item2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"code-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[t._v("#")]),t._v(" Code generation")]),t._v(" "),a("p",[t._v("X-Macros can be used for code generation, by writing repetitive code: iterate over a list to do some tasks, or to declare a set of constants, objects or functions.")]),t._v(" "),a("h3",{attrs:{id:"here-we-use-x-macros-to-declare-an-enum-containing-4-commands-and-a-map-of-their-names-as-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-we-use-x-macros-to-declare-an-enum-containing-4-commands-and-a-map-of-their-names-as-strings"}},[t._v("#")]),t._v(" Here we use X-macros to declare an enum containing 4 commands and a map of their names as strings")]),t._v(" "),a("p",[t._v("Then we can print the string values of the enum.")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* All our commands */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("COMMANDS")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Open"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* generate the enum Commands: {cmdOpen, cmdClose, cmdSave, cmdQuit, }; */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("ENUM_NAME")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" cmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Commands")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COMMANDS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ENUM_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("undef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("ENUM_NAME")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* generate the string table */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("COMMAND_OP")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" #name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" commandNames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COMMANDS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COMMAND_OP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("undef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("COMMAND_OP")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* the following prints "Quit\\n": */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" commandNames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cmdQuit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"similarly-we-can-generate-a-jump-table-to-call-functions-by-the-enum-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#similarly-we-can-generate-a-jump-table-to-call-functions-by-the-enum-value"}},[t._v("#")]),t._v(" Similarly, we can generate a jump table to call functions by the enum value.")]),t._v(" "),a("p",[t._v("This requires all functions to have the same signature. If they take no arguments and return an int, we would put this in a header with the enum definition:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* declare all functions as extern */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("EXTERN_FUNC")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" doCmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COMMANDS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EXTERN_FUNC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("undef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("EXTERN_FUNC")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* declare the function pointer type and the jump table  */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("CommandFunc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" CommandFunc commandJumpTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("All of the following can be in different compilation units assuming the part above is included as a header:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* generate the jump table */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("FUNC_NAME")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" doCmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])])]),t._v("\nCommandFunc commandJumpTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COMMANDS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FUNC_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("undef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("FUNC_NAME")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* call the save command like this: */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commandJumpTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cmdSave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* somewhere else, we need the implementations of the commands */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doCmdOpen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* code performing open command */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doCmdClose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* code performing close command */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doCmdSave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* code performing save command */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doCmdQuit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* code performing quit command */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("An example of this technique being used in real code is for "),a("a",{attrs:{href:"https://src.chromium.org/viewvc/chrome/trunk/src/gpu/command_buffer/common/gles2_cmd_ids_autogen.h",rel:"nofollow noreferrer"}},[t._v("GPU command\ndispatching in Chromium")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("The user of an X-macro-style master macro is expected to provide his own definition for the inner "),a("code",[t._v("X()")]),t._v(" macro, and within its scope to expand the master macro.  The master's inner macro references are thus expanded according to the user's definition of "),a("code",[t._v("X()")]),t._v(".  In this way, the amount of repetitive boilerplate code in the source file can be reduced (appearing only once, in the replacement text of "),a("code",[t._v("X()")]),t._v('), as is favored by adherents to the "Do not Repeat Yourself" (DRY) philosophy.')]),t._v(" "),a("p",[t._v("Additionally, by redefining "),a("code",[t._v("X()")]),t._v(" and expanding the master macro one or more additional times, X macros can facilitate maintaining corresponding data and code -- one expansion of the macro declares the data (as array elements or enum members, for example), and the other expansions produce corresponding code.")]),t._v(" "),a("p",[t._v('Although the "X-macro" name comes from the traditional name of the inner macro, the technique does not depend on that particular name. Any valid macro name can be used in its place.')]),t._v(" "),a("p",[t._v("Criticisms include")]),t._v(" "),a("ul",[a("li",[t._v("source files that rely on X macros are more difficult to read;")]),t._v(" "),a("li",[t._v("like all macros, X macros are strictly textual -- they do not inherently provide any type safety; and")]),t._v(" "),a("li",[t._v("X macros provide for "),a("strong",[t._v("code generation")]),t._v(".  As compared to alternatives based on calling functions, X macros effectively make the code larger.")])]),t._v(" "),a("p",[t._v("A good explanation of X macros can be found in Randy Meyers' article [X-Macros] in Dr. Dobbs ("),a("a",{attrs:{href:"http://www.drdobbs.com/the-new-c-x-macros/184401387",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.drdobbs.com/the-new-c-x-macros/184401387)"),a("OutboundLink")],1),t._v(").")])])}),[],!1,null,null,null);s.default=e.exports}}]);