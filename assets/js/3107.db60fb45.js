(window.webpackJsonp=window.webpackJsonp||[]).push([[3107],{3515:function(s,t,a){"use strict";a.r(t);var e=a(31),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"refinements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refinements"}},[s._v("#")]),s._v(" Refinements")]),s._v(" "),a("h2",{attrs:{id:"monkey-patching-with-limited-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monkey-patching-with-limited-scope"}},[s._v("#")]),s._v(" Monkey patching with limited scope")]),s._v(" "),a("p",[s._v("Monkey patching's main issue is that it pollutes the global scope. Your code working is at the mercy of all the modules you use not stepping on each others toes. The Ruby solution to this is refinements, which are basically monkey patches in a limited scope.")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patches")]),s._v("\n  refine "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Fixnum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plus_one")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plus")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" num\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("concat_one")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to_s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RefinementTest")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# has access to our patches")]),s._v("\n  using "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patches")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initialize")])]),s._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("plus_one\n    puts "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("concat_one\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Main scope doesn't have changes")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("plus_one\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => undefined method `plus_one' for 1:Fixnum (NoMethodError)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RefinementTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => '31'")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"dual-purpose-modules-refinements-or-global-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dual-purpose-modules-refinements-or-global-patches"}},[s._v("#")]),s._v(" Dual-purpose modules (refinements or global patches)")]),s._v(" "),a("p",[s._v("It's a good practice to scope patches using Refinements, but sometimes it's nice to load it globally (for example in development, or testing).")]),s._v(" "),a("p",[s._v("Say for example you want to start a console, require your library, and then have the patched methods available in the global scope. You couldn't do this with refinements because "),a("code",[s._v("using")]),s._v(" needs to be called in a class/module definition. But it's possible to write the code in such a way that it's dual purpose:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("patched")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  refine "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# globally")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("patched"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# refinement")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LoadPatch")]),s._v("\n  using "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("patched"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"dynamic-refinements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-refinements"}},[s._v("#")]),s._v(" Dynamic refinements")]),s._v(" "),a("p",[s._v("Refinements have special limitations.")]),s._v(" "),a("p",[a("code",[s._v("refine")]),s._v(" can only be used in a module scope, but can be programmed using "),a("code",[s._v("send :refine")]),s._v(".")]),s._v(" "),a("p",[a("code",[s._v("using")]),s._v(" is more limited. It can only be called in a class/module definition. Still, it can accept a variable pointing to a module, and can be invoked in a loop.")]),s._v(" "),a("p",[s._v("An example showing these concepts:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("patched")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":refine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\npatch_classes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Patched")]),s._v("\n  patch_classes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("klass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" using klass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("patched"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])]),a("p",[s._v("Since "),a("code",[s._v("using")]),s._v(" is so static, there can be issued with load order if the refinement files are not loaded first. A way to address this is to wrap the patched class/module definition in a proc. For example:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),s._v("\n  refine "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("patched")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a proc since methods can't contain class definitions")]),s._v("\ncreate_patched_class "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Proc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("class_exec "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bar")]),s._v("\n      using "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Patch")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("patched")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("patched "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\ncreate_patched_class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("call\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("patched"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => true")]),s._v("\n\n")])])]),a("p",[s._v("Calling the proc creates the patched class "),a("code",[s._v("Foo::Bar")]),s._v(". This can be delayed until after all the code has loaded.")]),s._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),a("p",[s._v("Refinements are scope lexically, meaning they're in effect from the time they're activated (with the "),a("code",[s._v("using")]),s._v(" keyword) until control shifts. Usually control is changed by the end of a module, class, or file.")])])}),[],!1,null,null,null);t.default=n.exports}}]);