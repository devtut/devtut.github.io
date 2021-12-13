(window.webpackJsonp=window.webpackJsonp||[]).push([[2872],{3280:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"creating-reports-with-rmarkdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-reports-with-rmarkdown"}},[t._v("#")]),t._v(" Creating reports with RMarkdown")]),t._v(" "),s("h2",{attrs:{id:"including-bibliographies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#including-bibliographies"}},[t._v("#")]),t._v(" Including bibliographies")]),t._v(" "),s("p",[t._v("A bibtex catalogue cna easily be included with the YAML option "),s("code",[t._v("bibliography:")]),t._v(". A certain style for the bibliography can be added with "),s("code",[t._v("biblio-style:")]),t._v(".\nThe references are added at the end of the document.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\ntitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Including Bibliography"')]),t._v("\nauthor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pdf_document\nbibliography"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" references.bib\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Abstract")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("R_Core_Team_2016\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# References")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/WRoNAm.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/WRoNAm.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"printing-tables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#printing-tables"}},[t._v("#")]),t._v(" Printing tables")]),t._v(" "),s("p",[t._v("There are several packages that allow the output of data structures in form of HTML or LaTeX tables. They mostly differ in flexibility.")]),t._v(" "),s("p",[t._v("Here I use the packages:")]),t._v(" "),s("ul",[s("li",[t._v("knitr")]),t._v(" "),s("li",[t._v("xtable")]),t._v(" "),s("li",[t._v("pander")])]),t._v(" "),s("p",[s("strong",[t._v("For HTML documents")])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\ntitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Printing Tables"')]),t._v("\nauthor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Martin Schmelzer"')]),t._v("\ndate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"29 Juli 2016"')]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" html_document\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nknitr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("opts_chunk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("knitr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xtable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pander"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" mtcars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n```r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print tables using `kable`")]),t._v("\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nkable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print tables using `xtable`")]),t._v("\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xtable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asis'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xtable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print tables using `pander`")]),t._v("\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pander'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\npander"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n")])])]),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/FzRA5m.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/FzRA5m.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("For PDF documents")])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\ntitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Printing Tables"')]),t._v("\nauthor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Martin Schmelzer"')]),t._v("\ndate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"29 Juli 2016"')]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pdf_document\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nknitr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("opts_chunk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("knitr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xtable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pander"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" mtcars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n```r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print tables using `kable`")]),t._v("\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nkable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print tables using `xtable`")]),t._v("\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xtable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asis'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xtable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" caption"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Table"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print tables using `pander`")]),t._v("\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pander'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\npander"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n")])])]),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/Fo8vzm.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/Fo8vzm.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("How can I stop xtable printing the comment ahead of each table?")])]),t._v(" "),s("p",[s("code",[t._v("options(xtable.comment = FALSE)")])]),t._v(" "),s("h2",{attrs:{id:"including-latex-preample-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#including-latex-preample-commands"}},[t._v("#")]),t._v(" Including LaTeX Preample Commands")]),t._v(" "),s("p",[t._v("There are two possible ways of including LaTeX preamble commands (e.g. "),s("code",[t._v("\\usepackage")]),t._v(") in a RMarkdown document.")]),t._v(" "),s("p",[s("strong",[t._v("1. Using the YAML option "),s("code",[t._v("header-includes")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\ntitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Including LaTeX Preample Commands in RMarkdown"')]),t._v("\nheader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("includes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" \\renewcommand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\\familydefault"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cmss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" \\usepackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" slantedGreek"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sfmath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" \\usepackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fontenc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pdf_document\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nknitr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("opts_chunk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" external"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Section 1")]),t._v("\n\nAs you can see"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" this text uses the Computer Moden Font"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/U4eqOm.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/U4eqOm.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("2. Including External Commands with "),s("code",[t._v("includes")]),t._v(", "),s("code",[t._v("in_header")])])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\ntitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Including LaTeX Preample Commands in RMarkdown"')]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n  pdf_document"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    includes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      in_header"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" includes.tex\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nknitr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("opts_chunk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" external"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Section 1")]),t._v("\n\nAs you can see"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" this text uses the Computer Modern Font"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n")])])]),s("p",[t._v("Here, the content of includes.tex are the same three commands we included with "),s("code",[t._v("header-includes")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Writing a whole new template")])]),t._v(" "),s("p",[t._v("A possible third option is to write your own LaTex template and include it with "),s("code",[t._v("template")]),t._v(". But this covers a lot more of the structure than only the preamble.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\ntitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Template"')]),t._v("\nauthor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Martin Schmelzer"')]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  pdf_document"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myTemplate.tex\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"basic-r-markdown-document-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-r-markdown-document-structure"}},[t._v("#")]),t._v(" Basic R-markdown document structure")]),t._v(" "),s("h3",{attrs:{id:"r-markdown-code-chunks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#r-markdown-code-chunks"}},[t._v("#")]),t._v(" R-markdown code chunks")]),t._v(" "),s("p",[t._v("R-markdown is a markdown file with embedded blocks of R code called "),s("strong",[t._v("chunks")]),t._v(". There are two types of R code chunks: "),s("strong",[t._v("inline")]),t._v(" and "),s("strong",[t._v("block")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Inline")]),t._v(" chunks are added using the following syntax:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("`r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("`\n\n")])])]),s("p",[t._v("They are evaluated and inserted their output answer in place.")]),t._v(" "),s("p",[s("strong",[t._v("Block")]),t._v(" chunks have a different syntax:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token ellipsis"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n```r`\n\n")])])]),s("p",[t._v("And they come with several possible options. Here are the main ones (but there are many others):")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("echo")]),t._v(" (boolean) controls wether the code inside chunk will be included in the document")]),t._v(" "),s("li",[s("strong",[t._v("include")]),t._v(" (boolean) controls wether the output should be included in the document")]),t._v(" "),s("li",[s("strong",[t._v("fig.width")]),t._v(" (numeric) sets the width of the output figures")]),t._v(" "),s("li",[s("strong",[t._v("fig.height")]),t._v(" (numeric) sets the height of the output figures")]),t._v(" "),s("li",[s("strong",[t._v("fig.cap")]),t._v(" (character) sets the figure captions")])]),t._v(" "),s("p",[t._v("They are written in a simple "),s("code",[t._v("tag=value")]),t._v(" format like in the example above.")]),t._v(" "),s("h3",{attrs:{id:"r-markdown-document-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#r-markdown-document-example"}},[t._v("#")]),t._v(" R-markdown document example")]),t._v(" "),s("p",[t._v("Below is a basic example of R-markdown file illustrating the way R code chunks are embedded inside r-markdown.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Title #")]),t._v("\n\nThis is "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("plain markdown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" text.\n\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Just declare variables")]),t._v("\n\nincome "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\ntaxes  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("125")]),t._v("\n\n```r\n\nMy income is"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" `r income ` dollars and I payed `r taxes ` dollars "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" taxes.\n\nBelow is the sum of money I will have left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r gain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ngain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" income"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("taxes\n\ngain\n\n```r\n\n```r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r plotOutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fig.width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fig.height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("income"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("taxes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"income"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"taxes"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n```r\n\n")])])]),s("h3",{attrs:{id:"converting-r-markdown-to-other-formats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-r-markdown-to-other-formats"}},[t._v("#")]),t._v(" Converting R-markdown to other formats")]),t._v(" "),s("p",[t._v("The R "),s("code",[t._v("knitr")]),t._v(" package can be used to evaluate R chunks inside R-markdown file and turn it into a regular markdown file.")]),t._v(" "),s("p",[t._v("The following steps are needed in order to turn R-markdown file into pdf/html:")]),t._v(" "),s("ol",[s("li",[t._v("Convert R-markdown file to markdown file using "),s("code",[t._v("knitr")]),t._v(".")]),t._v(" "),s("li",[t._v("Convert the obtained markdown file to pdf/html using specialized tools like "),s("strong",[t._v("pandoc")]),t._v(".")])]),t._v(" "),s("p",[t._v("In addition to the above "),s("code",[t._v("knitr")]),t._v(" package has wrapper functions "),s("code",[t._v("knit2html()")]),t._v(" and "),s("code",[t._v("knit2pdf()")]),t._v(" that can be used to produce the final document without the intermediate step of manually converting it to the markdown format:")]),t._v(" "),s("p",[t._v("If the above example file was saved as "),s("code",[t._v("income.Rmd")]),t._v(" it can be converted to a "),s("code",[t._v("pdf")]),t._v(" file using the following R commands:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("library"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("knitr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nknit2pdf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"income.Rmd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"income.pdf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("The final document will be similar to the one below.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/qOiyt.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/qOiyt.png",alt:"pdfexample"}}),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);