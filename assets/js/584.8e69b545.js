(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{991:function(t,a,s){"use strict";s.r(a);var e=s(31),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multi-character-character-sequence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-character-character-sequence"}},[t._v("#")]),t._v(" Multi-Character Character Sequence")]),t._v(" "),s("h2",{attrs:{id:"trigraphs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trigraphs"}},[t._v("#")]),t._v(" Trigraphs")]),t._v(" "),s("p",[t._v("The symbols  "),s("code",[t._v("[ ] { } ^ \\ | ~ #")]),t._v(" are frequently used in C programs, but in the late 1980s, there were code sets in use (ISO 646 variants, for example, in Scandinavian countries) where the ASCII character positions for these were used for national language variant characters (e.g. "),s("code",[t._v("£")]),t._v(" for "),s("code",[t._v("#")]),t._v(" in the UK; "),s("code",[t._v("Æ Å æ å ø Ø")]),t._v(" for "),s("code",[t._v("{ } { } | \\")]),t._v(" in Denmark; there was no "),s("code",[t._v("~")]),t._v(" in EBCDIC).  This meant that it was hard to write C code on machines that used these sets.")]),t._v(" "),s("p",[t._v("To solve this problem, the C standard suggested the use of combinations of three characters to produce a single character called a trigraph. A trigraph is a sequence of three characters, the first two of which are question marks.")]),t._v(" "),s("p",[t._v("The following is a simple example that uses trigraph sequences instead of "),s("code",[t._v("#")]),t._v(", "),s("code",[t._v("{")]),t._v(" and "),s("code",[t._v("}")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("include "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("stdio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("This will be changed by the C preprocessor by replacing the trigraphs with their single-character equivalents as if the code had been written:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Trigraph")]),t._v(" "),s("th",[t._v("Equivalent")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("??=")]),t._v(" "),s("td",[t._v("#")])]),t._v(" "),s("tr",[s("td",[t._v("??/")]),t._v(" "),s("td",[t._v("\\")])]),t._v(" "),s("tr",[s("td",[t._v("??'")]),t._v(" "),s("td",[t._v("^")])]),t._v(" "),s("tr",[s("td",[t._v("??(")]),t._v(" "),s("td",[t._v("[")])]),t._v(" "),s("tr",[s("td",[t._v("??)")]),t._v(" "),s("td",[t._v("]")])]),t._v(" "),s("tr",[s("td",[t._v("??!")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("??<")]),t._v(" "),s("td",[t._v("{")])]),t._v(" "),s("tr",[s("td",[t._v("??>")]),t._v(" "),s("td",[t._v("}")])]),t._v(" "),s("tr",[s("td",[t._v("??-")]),t._v(" "),s("td",[t._v("~")])])])]),t._v(" "),s("p",[t._v("Note that trigraphs are problematic because, for example, "),s("code",[t._v("??/")]),t._v(" is a backslash and can affect the meaning of continuation lines in comments, and have to be recognized inside strings and character literals (e.g. "),s("code",[t._v("'??/??/'")]),t._v(" is a single character, a backslash).")]),t._v(" "),s("h2",{attrs:{id:"digraphs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#digraphs"}},[t._v("#")]),t._v(" Digraphs")]),t._v(" "),s("p",[t._v("In 1994 more readable alternatives to five of the trigraphs were supplied. These use only two characters and are known as digraphs. Unlike trigraphs, digraphs are tokens. If a digraph occurs in another token (e.g. string literals or character constants) then it will not be treated as a digraph, but remain as it is.")]),t._v(" "),s("p",[t._v("The following shows the difference before and after processing the digraphs sequence.")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello %> World!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Note that the string contains a digraph */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("Which will be treated the same as:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello %> World!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Note the unchanged digraph within the string. */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Digraph")]),t._v(" "),s("th",[t._v("Equivalent")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("<:")]),t._v(" "),s("td",[t._v("[")])]),t._v(" "),s("tr",[s("td",[t._v(":>")]),t._v(" "),s("td",[t._v("]")])]),t._v(" "),s("tr",[s("td",[t._v("<%")]),t._v(" "),s("td",[t._v("{")])]),t._v(" "),s("tr",[s("td",[t._v("%>")]),t._v(" "),s("td",[t._v("}")])]),t._v(" "),s("tr",[s("td",[t._v("%:")]),t._v(" "),s("td",[t._v("#")])])])]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Not all preprocessors support trigraph sequence processing. Some compilers give an extra option or switch for processing them. Others use a separate program to convert trigraphs.")]),t._v(" "),s("p",[t._v("The GCC compiler does not recognize them unless you explicitly request it to do so (use "),s("code",[t._v("-trigraphs")]),t._v(" to enable them; use "),s("code",[t._v("-Wtrigraphs")]),t._v(", part of "),s("code",[t._v("-Wall")]),t._v(", to get warnings about trigraphs).")]),t._v(" "),s("p",[t._v("As most platforms in use today support the full range of single characters used in C, digraphs are preferred over trigraphs  but the use of any multi-character character sequences is generally discouraged.")]),t._v(" "),s("p",[t._v("Also, beware of accidental trigraph use ("),s("code",[t._v('puts("What happened??!!");')]),t._v(", for example).")])])}),[],!1,null,null,null);a.default=r.exports}}]);