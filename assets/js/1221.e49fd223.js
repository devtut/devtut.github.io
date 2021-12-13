(window.webpackJsonp=window.webpackJsonp||[]).push([[1221],{1629:function(t,s,a){"use strict";a.r(s);var e=a(31),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rewrite-rules-ghc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewrite-rules-ghc"}},[t._v("#")]),t._v(" Rewrite rules (GHC)")]),t._v(" "),a("h2",{attrs:{id:"using-rewrite-rules-on-overloaded-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-rewrite-rules-on-overloaded-functions"}},[t._v("#")]),t._v(" Using rewrite rules on overloaded functions")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://stackoverflow.com/q/32130011/477476",target:"_blank",rel:"noopener noreferrer"}},[t._v("In this question"),a("OutboundLink")],1),t._v(", @Viclib asked about using rewrite rules to exploit typeclass laws to eliminate some overloaded function calls:")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("Mind the following class:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ListIsomorphic")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("toList")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("fromList")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v("\n\n")])])]),a("p",[t._v("I also demand that "),a("code",[t._v("toList . fromList == id")]),t._v(". How do I write rewrite rules to tell GHC to make that substitution?")]),t._v(" "),a("p",[t._v("This is a somewhat tricky use case for GHC's rewrite rules mechanism, because "),a("a",{attrs:{href:"http://stackoverflow.com/a/9815210/477476",target:"_blank",rel:"noopener noreferrer"}},[t._v("overloaded functions are rewritten into their specific instance methods"),a("OutboundLink")],1),t._v(" by rules that are implicitly created behind the scenes by GHC (so something like "),a("code",[t._v("fromList :: Seq a -> [a]")]),t._v(" would be rewritten into "),a("code",[t._v("Seq$fromList")]),t._v(" etc.).")]),t._v(" "),a("p",[t._v("However, by first rewriting "),a("code",[t._v("toList")]),t._v(" and "),a("code",[t._v("fromList")]),t._v(" into non-inlined non-typeclass methods, "),a("a",{attrs:{href:"http://stackoverflow.com/a/32133083/477476",target:"_blank",rel:"noopener noreferrer"}},[t._v("we can protect them from premature rewriting"),a("OutboundLink")],1),t._v(", and preserve them until the rule for the composition can fire:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('{-# RULES\n  "protect toList"   toList = toList\';\n  "protect fromList" fromList = fromList\';\n  "fromList/toList"  forall x . fromList\' (toList\' x) = x; #-}')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{-# NOINLINE [0] fromList' #-}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("fromList'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ListIsomorphic")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("fromList'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("fromList")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{-# NOINLINE [0] toList' #-}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("toList'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ListIsomorphic")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("toList'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("toList")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);