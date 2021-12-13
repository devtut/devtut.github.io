(window.webpackJsonp=window.webpackJsonp||[]).push([[2905],{3313:function(t,a,e){"use strict";e.r(a);var s=e(31),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"input-and-output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-and-output"}},[t._v("#")]),t._v(" Input and output")]),t._v(" "),e("h2",{attrs:{id:"reading-and-writing-data-frames"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-and-writing-data-frames"}},[t._v("#")]),t._v(" Reading and writing data frames")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://stackoverflow.com/documentation/r/438/data-frames#t=201608181818154952835",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data frames"),e("OutboundLink")],1),t._v(" are R's tabular data structure. They can be written to or read from in a variety of ways.")]),t._v(" "),e("p",[t._v("This example illustrates a couple common situations. See the links at the end for other resources.")]),t._v(" "),e("h3",{attrs:{id:"writing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing"}},[t._v("#")]),t._v(" Writing")]),t._v(" "),e("p",[e("strong",[t._v("Before making the example data below, make sure you're in a folder you want to write to. Run "),e("code",[t._v("getwd()")]),t._v(" to verify the folder you're in and read "),e("code",[t._v("?setwd")]),t._v(" if you need to change folders.")])]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("set.seed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  write.table"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    data.frame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sample"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("letters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    file "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sprintf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file201%s.csv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("Now, we have three similarly-formatted CSV files on disk.")]),t._v(" "),e("h3",{attrs:{id:"reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading"}},[t._v("#")]),t._v(" Reading")]),t._v(" "),e("p",[t._v("We have three similarly-formatted files (from the last section) to read in. Since these files are related, we should store them together after reading in, in a "),e("code",[t._v("list")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("file_names "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file2011.csv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file2012.csv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file2013.csv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfile_contents "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lapply"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setNames"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_names"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file_names"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" read.table"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $file2011.csv")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   id v")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1  1 g")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2  2 j")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $file2012.csv")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   id v")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1  1 o")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2  2 w")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $file2013.csv")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   id v")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1  1 f")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2  2 w")]),t._v("\n\n")])])]),e("p",[t._v("To work with this list of files, first examine the structure with "),e("code",[t._v("str(file_contents)")]),t._v(", then read about stacking the list with "),e("code",[t._v("?rbind")]),t._v(" or iterating over the list with "),e("code",[t._v("?lapply")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"further-resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-resources"}},[t._v("#")]),t._v(" Further resources")]),t._v(" "),e("p",[t._v("Check out "),e("code",[t._v("?read.table")]),t._v(" and "),e("code",[t._v("?write.table")]),t._v(" to extend this example. Also:")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"http://stackoverflow.com/documentation/r/5540/i-o-for-rs-binary-format#t=201608181926177335259",target:"_blank",rel:"noopener noreferrer"}},[t._v("R binary formats (for tables and other objects)"),e("OutboundLink")],1)])]),e("li",[e("a",{attrs:{href:"http://stackoverflow.com/documentation/r/481/i-o-for-plain-text-tables-csv-tsv-etc#t=20160818180444087839",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plain-text table formats"),e("OutboundLink")],1),t._v(" "),e("ul",[e("p")])]),t._v(" "),e("li",[e("p",[t._v("comma-delimited CSVs")])]),t._v(" "),e("li",[e("p",[t._v("tab-delimited TSVs")])]),t._v(" "),e("li",[e("p",[t._v("Fixed-width formats")])]),t._v(" "),e("li",[e("p",[t._v("Feather")])]),t._v(" "),e("li",[e("p",[t._v("SAS")])]),t._v(" "),e("li",[e("p",[t._v("SPSS")])]),t._v(" "),e("li",[e("p",[t._v("Stata")])]),t._v(" "),e("li",[e("p",[t._v("Excel")])]),t._v(" "),e("li",[e("p",[t._v("MySQL")])]),t._v(" "),e("li",[e("p",[t._v("SQLite")])]),t._v(" "),e("li",[e("p",[t._v("PostgreSQL")])])]),t._v(" "),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("To construct file paths, for reading or writing, use "),e("code",[t._v("file.path")]),t._v(".")]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("dir")]),t._v(" to see what files are in a directory.")])])}),[],!1,null,null,null);a.default=r.exports}}]);