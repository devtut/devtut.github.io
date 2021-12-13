(window.webpackJsonp=window.webpackJsonp||[]).push([[2709],{3116:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"functools-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functools-module"}},[t._v("#")]),t._v(" Functools Module")]),t._v(" "),s("h2",{attrs:{id:"partial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partial"}},[t._v("#")]),t._v(" partial")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("partial")]),t._v(" function creates partial function application from another function. It is used to "),s("strong",[t._v("bind")]),t._v(" values to some of the function's arguments (or keyword arguments) and produce a "),s("strong",[t._v("callable")]),t._v(" without the already defined arguments.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" functools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" partial\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" unhex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" partial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" unhex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Convert base16 string to int'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" unhex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ca11ab1e'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3390155550")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("partial()")]),t._v(", as the name suggests, allows a partial evaluation of a function.\nLet's look at at following example:")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("In "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" functools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" partial\n\nIn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" x\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n\nIn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" partial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nIn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1112")]),t._v("\n\n")])])]),s("p",[t._v("When "),s("code",[t._v("g")]),t._v(" is created, "),s("code",[t._v("f")]),t._v(", which takes four arguments("),s("code",[t._v("a, b, c, x")]),t._v("), is also partially evaluated for the first three arguments, "),s("code",[t._v("a, b, c,")]),t._v(". Evaluation of "),s("code",[t._v("f")]),t._v(" is completed when "),s("code",[t._v("g")]),t._v(" is called, "),s("code",[t._v("g(2)")]),t._v(", which passes the fourth argument to "),s("code",[t._v("f")]),t._v(".")]),t._v(" "),s("p",[t._v("One way to think of "),s("code",[t._v("partial")]),t._v(" is a shift register; pushing in one argument at the time into some function.\n"),s("code",[t._v("partial")]),t._v(" comes handy for cases where data is coming in as stream and we cannot pass more than one argument.")]),t._v(" "),s("h2",{attrs:{id:"lru-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lru-cache"}},[t._v("#")]),t._v(" lru_cache")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("@lru_cache")]),t._v(" decorator can be used wrap an expensive, computationally-intensive function with a "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cache_algorithms#Examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Least Recently Used"),s("OutboundLink")],1),t._v(" cache. This allows function calls to be memoized, so that future calls with the same parameters can return instantly instead of having to be recomputed.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@lru_cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxsize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Boundless cache")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fibonacci")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fibonacci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fibonacci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fibonacci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("In the example above, the value of "),s("code",[t._v("fibonacci(3)")]),t._v(" is only calculated once, whereas if "),s("code",[t._v("fibonacci")]),t._v(" didn't have an LRU cache, "),s("code",[t._v("fibonacci(3)")]),t._v(" would have been computed upwards of 230 times. Hence, "),s("code",[t._v("@lru_cache")]),t._v(" is especially great for recursive functions or dynamic programming, where an expensive function could be called multiple times with the same exact parameters.")]),t._v(" "),s("p",[s("code",[t._v("@lru_cache")]),t._v(" has two arguments")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("maxsize")]),t._v(": Number of calls to save. When the number of unique calls exceeds "),s("code",[t._v("maxsize")]),t._v(", the LRU cache will remove the least recently used calls.\n")]),s("li",[s("code",[t._v("typed")]),t._v(" (added in 3.3): Flag for determining if equivalent arguments of different\ntypes belong to different cache records (i.e. if "),s("code",[t._v("3.0")]),t._v(" and\n"),s("code",[t._v("3")]),t._v(" count as different arguments)")])]),t._v(" "),s("p",[t._v("We can see cache stats too:")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCacheInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hits"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" misses"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maxsize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currsize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("NOTE")]),t._v(": Since "),s("code",[t._v("@lru_cache")]),t._v(" uses dictionaries to cache results, all parameters for the function must be hashable for the cache to work.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.python.org/3/library/functools.html#functools.lru_cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Python docs for "),s("code",[t._v("@lru_cache")]),s("OutboundLink")],1),t._v(". "),s("code",[t._v("@lru_cache")]),t._v(" was added in 3.2.")]),t._v(" "),s("h2",{attrs:{id:"cmp-to-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmp-to-key"}},[t._v("#")]),t._v(" cmp_to_key")]),t._v(" "),s("p",[t._v("Python changed it's sorting methods to accept a key function. Those functions take a value and return a key which is used to sort the arrays.")]),t._v(" "),s("p",[t._v("Old comparison functions used to take two values and return -1, 0 or +1 if the first argument is small, equal or greater than the second argument respectively. This is incompatible to the new key-function.")]),t._v(" "),s("p",[t._v("That's where "),s("code",[t._v("functools.cmp_to_key")]),t._v(" comes in:")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" functools\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" locale\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sorted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"S"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"F"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("functools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cmp_to_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strcoll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'S'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("Example taken and adapted from the "),s("a",{attrs:{href:"https://docs.python.org/3/library/functools.html#functools.cmp_to_key",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Standard Library Documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"total-ordering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#total-ordering"}},[t._v("#")]),t._v(" total_ordering")]),t._v(" "),s("p",[t._v("When we want to create an orderable class, normally we need to define the methods "),s("code",[t._v("__eq()__")]),t._v(", "),s("code",[t._v("__lt__()")]),t._v(", "),s("code",[t._v("__le__()")]),t._v(", "),s("code",[t._v("__gt__()")]),t._v(" and "),s("code",[t._v("__ge__()")]),t._v(".")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("total_ordering")]),t._v(" decorator, applied to a class, permits the definition of "),s("code",[t._v("__eq__()")]),t._v(" and only one between "),s("code",[t._v("__lt__()")]),t._v(", "),s("code",[t._v("__le__()")]),t._v(", "),s("code",[t._v("__gt__()")]),t._v(" and "),s("code",[t._v("__ge__()")]),t._v(", and still allow all the ordering operations on the class.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@total_ordering")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__eq__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__lt__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("The decorator uses a composition of the provided methods and algebraic operations to derive the other comparison methods. For example if we defined "),s("code",[t._v("__lt__()")]),t._v(" and "),s("code",[t._v("__eq()__")]),t._v(" and we want to derive "),s("code",[t._v("__gt__()")]),t._v(", we can simply check "),s("code",[t._v("not __lt__() and not __eq()__")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": The "),s("code",[t._v("total_ordering")]),t._v(" function is only available since Python 2.7.")]),t._v(" "),s("h2",{attrs:{id:"reduce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reduce"}},[t._v("#")]),t._v(" reduce")]),t._v(" "),s("p",[t._v("In Python 3.x, the "),s("code",[t._v("reduce")]),t._v(" function already explained "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/python/328/reduce#t=201607220949173843207",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" has been removed from the built-ins and must now be imported from "),s("code",[t._v("functools")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" functools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("reduce")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("factorial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);