(window.webpackJsonp=window.webpackJsonp||[]).push([[1206],{1614:function(a,s,t){"use strict";t.r(s);var n=t(31),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"monoid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monoid"}},[a._v("#")]),a._v(" Monoid")]),a._v(" "),t("h2",{attrs:{id:"an-instance-of-monoid-for-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-instance-of-monoid-for-lists"}},[a._v("#")]),a._v(" An instance of Monoid for lists")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Monoid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mempty")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mappend")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),t("p",[a._v("Checking the "),t("code",[a._v("Monoid")]),a._v(" laws for this instance:")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mempty")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<->")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- prepending an empty list is a no-op")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mempty")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<->")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- appending an empty list is a no-op")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("z")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("z")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<->")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ys")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("zs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("xs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ys")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("zs")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- appending lists is associative")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"collapsing-a-list-of-monoids-into-a-single-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collapsing-a-list-of-monoids-into-a-single-value"}},[a._v("#")]),a._v(" Collapsing a list of Monoids into a single value")]),a._v(" "),t("p",[t("code",[a._v("mconcat :: [a] -> a")]),a._v(" is another "),t("a",{attrs:{href:"http://hackage.haskell.org/package/base-4.9.0.0/docs/Data-Monoid.html#v:mconcat",target:"_blank",rel:"noopener noreferrer"}},[a._v("method of the "),t("code",[a._v("Monoid")]),a._v(" typeclass"),t("OutboundLink")],1),a._v(":")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ghci")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mconcat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("getSum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ghci")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mconcat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"concat"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"enate"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"concatenate"')]),a._v("\n\n")])])]),t("p",[a._v("Its default definition is "),t("code",[a._v("mconcat = foldr mappend mempty")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"numeric-monoids"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numeric-monoids"}},[a._v("#")]),a._v(" Numeric Monoids")]),a._v(" "),t("p",[a._v("Numbers are monoidal in two ways: "),t("strong",[a._v("addition")]),a._v(" with 0 as the unit, and "),t("strong",[a._v("multiplication")]),a._v(" with 1 as the unit. Both are equally valid and useful in different circumstances. So rather than choose a preferred instance for numbers, there are two "),t("code",[a._v("newtypes")]),a._v(", "),t("code",[a._v("Sum")]),a._v(" and "),t("code",[a._v("Product")]),a._v(" to tag them for the different functionality.")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("newtype")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("getSum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Num")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Monoid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mempty")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("newtype")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("getProduct")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Num")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Monoid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mempty")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("y")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),t("p",[a._v("This effectively allows for the developer to choose which functionality to use by wrapping the value in the appropriate "),t("code",[a._v("newtype")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Sum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Product")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"an-instance-of-monoid-for"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-instance-of-monoid-for"}},[a._v("#")]),a._v(" An instance of Monoid for ()")]),a._v(" "),t("p",[t("code",[a._v("()")]),a._v(" is a "),t("code",[a._v("Monoid")]),a._v(". Since there is only one value of type "),t("code",[a._v("()")]),a._v(", there's only one thing "),t("code",[a._v("mempty")]),a._v(" and "),t("code",[a._v("mappend")]),a._v(" could do:")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Monoid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mempty")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("`mappend`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);