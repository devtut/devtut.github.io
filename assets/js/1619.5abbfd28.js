(window.webpackJsonp=window.webpackJsonp||[]).push([[1619],{2026:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"list-vs-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-vs-set"}},[t._v("#")]),t._v(" List vs SET")]),t._v(" "),a("p",[t._v("What are differences between List and Set collection at the top level and How to choose when to use List in java and when to use Set in Java")]),t._v(" "),a("h2",{attrs:{id:"list-vs-set-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-vs-set-2"}},[t._v("#")]),t._v(" List vs Set")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("import java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;")]),t._v(" "),a("p",[t._v('public class SetAndListExample\n{\npublic static void main( String[] args )\n{\nSystem.out.println("List example .....");\nList list = new ArrayList();\nlist.add("1");\nlist.add("2");\nlist.add("3");\nlist.add("4");\nlist.add("1");')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n   for (String temp : list){\n        System.out.println(temp);\n    }\n\n    System.out.println("Set example .....");\n    Set<String> set = new HashSet<String>();\n    set.add("1");\n    set.add("2");\n    set.add("3");\n    set.add("4");\n    set.add("1");\n    set.add("2");\n    set.add("5");\n\n    for (String temp : set){\n        System.out.println(temp);\n    }\n}\n\n')])])]),a("p",[t._v("}")]),t._v(" "),a("p",[t._v("Output\nList example .....\n1\n2\n3\n4\n1\nSet example .....\n3\n2\n10\n5\n4")])])}),[],!1,null,null,null);s.default=e.exports}}]);