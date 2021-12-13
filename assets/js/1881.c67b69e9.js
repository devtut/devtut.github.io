(window.webpackJsonp=window.webpackJsonp||[]).push([[1881],{2288:function(t,n,s){"use strict";s.r(n);var a=s(31),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tables"}},[t._v("#")]),t._v(" Tables")]),t._v(" "),s("h2",{attrs:{id:"the-tabular-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-tabular-environment"}},[t._v("#")]),t._v(" The tabular environment")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("tabular")]),t._v(" environment is the most basic way to create a table in LaTeX and doesn't require any other packages.")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("|lcr||"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  left aligned column "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" center column "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" right column "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n  text "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  text "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/BNwOp.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/BNwOp.png",alt:"Rendered result"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The parameter ("),s("code",[t._v("|lcr||")]),t._v(" in the example) is called the "),s("strong",[t._v("table specification")]),t._v(" and tells LaTeX how many columns there are and how they are supposed to be formatted. Each letter represents a single column. Possible values are:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Character")]),t._v(" "),s("th",[t._v("Meaning")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("l")]),t._v(" "),s("td",[t._v("left aligned column")])]),t._v(" "),s("tr",[s("td",[t._v("c")]),t._v(" "),s("td",[t._v("centered column")])]),t._v(" "),s("tr",[s("td",[t._v("r")]),t._v(" "),s("td",[t._v("right aligned column")])]),t._v(" "),s("tr",[s("td",[t._v("p{'width'} e.g. "),s("code",[t._v("p{5cm}")])]),t._v(" "),s("td",[t._v("paragraph column with defined width")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("(pipe character)")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("Cells are seperated by the "),s("code",[t._v("&")]),t._v(" character. A row is ended by 2 back slashes "),s("code",[t._v("\\\\")]),t._v(".")]),t._v(" "),s("p",[t._v("Horizontal lines can be inserted by using the "),s("code",[t._v("\\hline")]),t._v(" command.")]),t._v(" "),s("p",[t._v("Tables are always formatted to be wide enough to include all the content. If a table is to big, LaTeX will print "),s("code",[t._v("overfull hbox")]),t._v(" warnings. Possible solutions include using the "),s("code",[t._v("p{'width'}")]),t._v(" specifier or other packages like "),s("code",[t._v("tabularx")]),t._v(".")]),t._v(" "),s("p",[t._v("A table with column headings spanning over several columns can be created using the command "),s("code",[t._v("\\multicolumn{cols}{pos}{text}")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("|c|c|c|c|"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\multicolumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("|c|"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Income Groups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\cline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("2-4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nCity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v("Lower"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v("Middle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v("Higher"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\nCity-1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" 11 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" 21 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" 13"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\nCity-2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" 21 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" 31 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v("41"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/EEHSO.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/EEHSO.jpg",alt:"Table with multicolumn headings"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Note that the command "),s("code",[t._v("\\multicolumn")]),t._v(" has three mandatory arguments: the first argument specifies the number of columns over which the heading spans; the second argument specifies the position of the heading"),s("code",[t._v("(l,c,r)")]),t._v("; and the third argument is the text for heading. The command "),s("code",[t._v("\\cline{2-4}")]),t._v(" specifies the the starting column(here, 2) and ending column(here, 4) over which a line is to be drawn.")]),t._v(" "),s("h2",{attrs:{id:"coloring-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coloring-table"}},[t._v("#")]),t._v(" Coloring Table")]),t._v(" "),s("p",[t._v("To make the table more readable, following are the ways to color it:")]),t._v(" "),s("ol",[s("li",[t._v("Rows")]),t._v(" "),s("li",[t._v("Columns")]),t._v(" "),s("li",[t._v("Lines")]),t._v(" "),s("li",[t._v("Cells")])]),t._v(" "),s("p",[s("strong",[t._v("Coloring Rows")])]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("\\rowcolor")]),t._v(" (provided by "),s("a",{attrs:{href:"http://ctan.org/pkg/colortbl",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("colortbl")]),s("OutboundLink")],1),t._v("; also loaded by "),s("a",{attrs:{href:"http://ctan.org/pkg/xcolor",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("xcolor")]),s("OutboundLink")],1),t._v(" under the "),s("code",[t._v("[table]")]),t._v(" package option). Example:")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("xcolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" | l | l | l | "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\rowcolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  A "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" B "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" C "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\rowcolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  D "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" E "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" F "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  G "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" H "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" I "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\rowcolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  J "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" K "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" L\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/LodcX.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/LodcX.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Coloring Columns")])]),t._v(" "),s("p",[t._v("Columns can be colored using following ways:")]),t._v(" "),s("li",[t._v("\nDefining column color property outside the table tag using `\\newcolumntype`:\n"),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\newcolumntype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" >"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\columncolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),t._v(" "),s("li",[t._v("\nDefining column color property inside the table parameters\n"),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" | >"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\columncolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" c | l | l "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("xcolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\newcolumntype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\columncolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\newcolumntype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\columncolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a | >"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\columncolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("c | l | b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n  A "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" B "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" C "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" D "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  E "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" F "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" G "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" H "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/761ty.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/761ty.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Coloring Lines")])]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("\\arrayrulecolor")]),t._v(". Example:")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("xcolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\arrayrulecolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" | l | l | l | "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n  A "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" B "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" C "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n  D "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" E "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" F"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n  G "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" H "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" I "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/oiQjR.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/oiQjR.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Coloring Cells")])]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("\\cellcolor")]),t._v(". Example:")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("xcolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" | l | l | l | "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n  A "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" B "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" C "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n  D "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" E "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\cellcolor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("F "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n  G "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" H "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v(" I "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hline")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tabular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/z7zN2.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/z7zN2.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("We can define our own colors too using package "),s("code",[t._v("colortbl")]),t._v(". Following are the tags examples:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n   \\definecolor{Gray}{gray}{0.85}\n    \\columncolor[RGB]{230, 242, 255}}\n    \\columncolor[HTML]{AAACED}\n\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);