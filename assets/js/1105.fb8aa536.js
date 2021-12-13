(window.webpackJsonp=window.webpackJsonp||[]).push([[1105],{1513:function(e,t,a){"use strict";a.r(t);var i=a(31),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"blaming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blaming"}},[e._v("#")]),e._v(" Blaming")]),e._v(" "),a("h2",{attrs:{id:"only-show-certain-lines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#only-show-certain-lines"}},[e._v("#")]),e._v(" Only show certain lines")]),e._v(" "),a("p",[e._v("Output can be restricted by specifying line ranges as")]),e._v(" "),a("p",[a("code",[e._v("git blame -L <start>,<end>")])]),e._v(" "),a("p",[e._v("Where "),a("code",[e._v("<start>")]),e._v(" and "),a("code",[e._v("<end>")]),e._v(" can be:")]),e._v(" "),a("li",[e._v("\nline number\n`git blame -L 10,30`\n")]),e._v(" "),a("li",[e._v("\n/regex/\n`git blame -L /void main/`, `git blame -L 46,/void foo/`\n")]),e._v(" "),a("li",[e._v("\n+offset, -offset (only for `"),a("end",[e._v("`)\n`git blame -L 108,+30`, `git blame -L 215,-15`\n")])],1),e._v(" "),a("p",[e._v("Multiple line ranges can be specified, and overlapping ranges are allowed.")]),e._v(" "),a("p",[a("code",[e._v("git blame -L 10,30 -L 12,80 -L 120,+10 -L ^/void main/,+40")])]),e._v(" "),a("h2",{attrs:{id:"show-the-commit-that-last-modified-a-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-the-commit-that-last-modified-a-line"}},[e._v("#")]),e._v(" Show the commit that last modified a line")]),e._v(" "),a("p",[a("code",[e._v("git blame <file>")])]),e._v(" "),a("p",[e._v("will show the file with each line annotated with the commit that last modified it.")]),e._v(" "),a("h2",{attrs:{id:"ignore-whitespace-only-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignore-whitespace-only-changes"}},[e._v("#")]),e._v(" Ignore whitespace-only changes")]),e._v(" "),a("p",[e._v("Sometimes repos will have commits that only adjust whitespace, for example fixing indentation or switching between tabs and spaces. This makes it difficult to find the commit where the code was actually written.")]),e._v(" "),a("p",[a("code",[e._v("git blame -w")])]),e._v(" "),a("p",[e._v("will ignore whitespace-only changes to find where the line really came from.")]),e._v(" "),a("h2",{attrs:{id:"to-find-out-who-changed-a-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-find-out-who-changed-a-file"}},[e._v("#")]),e._v(" To find out who changed a file")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("// Shows the author and commit per line of specified file\ngit blame test.c\n\n// Shows the author email and commit per line of specified\ngit blame -e test.c file\n\n// Limits the selection of lines by specified range\ngit blame -L 1,10 test.c\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ul",[a("li",[e._v("git blame [filename]")]),e._v(" "),a("li",[e._v("git blame [-f][-e][-w][filename]")]),e._v(" "),a("li",[e._v("git blame [-L range][filename]")])]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Details")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("filename")]),e._v(" "),a("td",[e._v("Name of the file for which details need to be checked")])]),e._v(" "),a("tr",[a("td",[e._v("-f")]),e._v(" "),a("td",[e._v("Show the file name in the origin commit")])]),e._v(" "),a("tr",[a("td",[e._v("-e")]),e._v(" "),a("td",[e._v("Show the author email instead of author name")])]),e._v(" "),a("tr",[a("td",[e._v("-w")]),e._v(" "),a("td",[e._v("Ignore white spaces while making a comparison between child and parent's version")])]),e._v(" "),a("tr",[a("td",[e._v("-L start,end")]),e._v(" "),a("td",[e._v("Show only the given line range Example: "),a("code",[e._v("git blame -L 1,2 [filename]")])])]),e._v(" "),a("tr",[a("td",[e._v("--show-stats")]),e._v(" "),a("td",[e._v("Shows additional statistics at end of blame output")])]),e._v(" "),a("tr",[a("td",[e._v("-l")]),e._v(" "),a("td",[e._v("Show long rev (Default: off)")])]),e._v(" "),a("tr",[a("td",[e._v("-t")]),e._v(" "),a("td",[e._v("Show raw timestamp (Default: off)")])]),e._v(" "),a("tr",[a("td",[e._v("-reverse")]),e._v(" "),a("td",[e._v("Walk history forward instead of backward")])]),e._v(" "),a("tr",[a("td",[e._v("-p, --porcelain")]),e._v(" "),a("td",[e._v("Output for machine consumption")])]),e._v(" "),a("tr",[a("td",[e._v("-M")]),e._v(" "),a("td",[e._v("Detect moved or copied lines within a file")])]),e._v(" "),a("tr",[a("td",[e._v("-C")]),e._v(" "),a("td",[e._v("In addition to -M, detect lines moved or copied from other files that were modified in the same commit")])]),e._v(" "),a("tr",[a("td",[e._v("-h")]),e._v(" "),a("td",[e._v("Show the help message")])]),e._v(" "),a("tr",[a("td",[e._v("-c")]),e._v(" "),a("td",[e._v("Use the same output mode as git-annotate (Default: off)")])]),e._v(" "),a("tr",[a("td",[e._v("-n")]),e._v(" "),a("td",[e._v("Show the line number in the original commit (Default: off)")])])])]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("The git blame command is very useful when it comes to know who has made changes to a file on a per line base.")])])}),[],!1,null,null,null);t.default=n.exports}}]);