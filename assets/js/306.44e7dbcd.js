(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{712:function(t,s,a){"use strict";a.r(s);var e=a(31),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"strict-mode-policy-a-tool-to-catch-the-bug-in-the-compile-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strict-mode-policy-a-tool-to-catch-the-bug-in-the-compile-time"}},[t._v("#")]),t._v(" Strict Mode Policy : A tool to catch the bug in the Compile Time.")]),t._v(" "),a("p",[t._v("Strict Mode is a special class introduced in Android 2.3 for debugging. This developer tools detect things done accidentally and bring them to our attention so that we can fix them. It is most commonly used to catch the accidental disk or network access on the applications’ main thread, where UI operations are received and animations takes place.\nStrictMode is basically a tool to catch the bug in the Compile Time mode.")]),t._v(" "),a("h2",{attrs:{id:"the-below-code-snippet-is-to-setup-the-strictmode-for-thread-policies-this-code-is-to-be-set-at-the-entry-points-to-our-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-below-code-snippet-is-to-setup-the-strictmode-for-thread-policies-this-code-is-to-be-set-at-the-entry-points-to-our-application"}},[t._v("#")]),t._v(" The below Code Snippet is to setup the StrictMode for Thread Policies. This Code is to be set at the entry points to our application.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrictMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setThreadPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrictMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ThreadPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectDiskWrites")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("penaltyLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Logs a message to LogCat  ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"the-below-code-deals-with-leaks-of-memory-like-it-detects-when-in-sqllite-finalize-is-called-or-not"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-below-code-deals-with-leaks-of-memory-like-it-detects-when-in-sqllite-finalize-is-called-or-not"}},[t._v("#")]),t._v(" The below code deals with leaks of memory, like it detects when in SQLLite finalize is called or not.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrictMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVmPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrictMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VmPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectActivityLeaks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectLeakedClosableObjects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("penaltyLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("StrictMode is basically a tool to catch the bug in the Compile Time mode. Using this we can avoid the memory leaks in our applications.")])])}),[],!1,null,null,null);s.default=n.exports}}]);