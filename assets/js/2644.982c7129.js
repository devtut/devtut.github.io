(window.webpackJsonp=window.webpackJsonp||[]).push([[2644],{3052:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2to3-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2to3-tool"}},[t._v("#")]),t._v(" 2to3 tool")]),t._v(" "),s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[t._v("#")]),t._v(" Basic Usage")]),t._v(" "),s("p",[t._v("Consider the following Python2.x code. Save the file as "),s("code",[t._v("example.py")])]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, {0}!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What\'s your name?"')]),t._v("\nname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("raw_input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngreet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("In the above file, there are several incompatible lines. The "),s("code",[t._v("raw_input()")]),t._v(" method has been replaced with "),s("code",[t._v("input()")]),t._v(" in Python 3.x and "),s("code",[t._v("print")]),t._v(" is no longer a statement, but a function. This code can be converted to Python 3.x code using the 2to3 tool.")]),t._v(" "),s("h3",{attrs:{id:"unix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unix"}},[t._v("#")]),t._v(" Unix")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("$ 2to3 example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("2to3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),s("p",[t._v("Running the above code will output the differences against the original source file as shown below.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("RefactoringTool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Skipping implicit fixer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("buffer")]),t._v("\nRefactoringTool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Skipping implicit fixer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" idioms\nRefactoringTool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Skipping implicit fixer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" set_literal\nRefactoringTool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Skipping implicit fixer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ws_comma\nRefactoringTool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Refactored example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("original"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("refactored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@@ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" @@\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, {0}!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What\'s your name?"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("raw_input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, {0}!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What\'s your name?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n greet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nRefactoringTool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Files that need to be modified"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nRefactoringTool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),s("p",[t._v("The modifications can be written back to the source file using the -w flag. A backup of the original file called "),s("code",[t._v("example.py.bak")]),t._v(" is created, unless the -n flag is given.")]),t._v(" "),s("h3",{attrs:{id:"unix-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unix-2"}},[t._v("#")]),t._v(" Unix")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("$ 2to3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("w example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),s("h3",{attrs:{id:"windows-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-2"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("2to3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("w example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),s("p",[t._v("Now the "),s("code",[t._v("example.py")]),t._v(" file has been converted from Python 2.x to Python 3.x code.")]),t._v(" "),s("p",[t._v("Once finished, "),s("code",[t._v("example.py")]),t._v(" will contain the following valid Python3.x code:")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, {0}!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What\'s your name?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngreet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[t._v("$ 2to3 [-options] path/to/file.py")])]),t._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("filename / directory_name")]),t._v(" "),s("td",[t._v("2to3 accepts a list of files or directories which is to be transformed as its argument. The directories are recursively traversed for Python sources.")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Option")])]),t._v(" "),s("td",[s("strong",[t._v("Option Description")])])]),t._v(" "),s("tr",[s("td",[t._v("-f FIX, --fix=FIX")]),t._v(" "),s("td",[t._v("Specify transformations to be applied; default: all. List available transformations with "),s("code",[t._v("--list-fixes")])])]),t._v(" "),s("tr",[s("td",[t._v("-j PROCESSES, --processes=PROCESSES")]),t._v(" "),s("td",[t._v("Run 2to3 concurrently")])]),t._v(" "),s("tr",[s("td",[t._v("-x NOFIX, --nofix=NOFIX")]),t._v(" "),s("td",[t._v("Exclude a transformation")])]),t._v(" "),s("tr",[s("td",[t._v("-l, --list-fixes")]),t._v(" "),s("td",[t._v("List available transformations")])]),t._v(" "),s("tr",[s("td",[t._v("-p, --print-function")]),t._v(" "),s("td",[t._v("Change the grammar so that "),s("code",[t._v("print()")]),t._v(" is considered a function")])]),t._v(" "),s("tr",[s("td",[t._v("-v, --verbose")]),t._v(" "),s("td",[t._v("More verbose output")])]),t._v(" "),s("tr",[s("td",[t._v("--no-diffs")]),t._v(" "),s("td",[t._v("Do not output diffs of the refactoring")])]),t._v(" "),s("tr",[s("td",[t._v("-w")]),t._v(" "),s("td",[t._v("Write back modified files")])]),t._v(" "),s("tr",[s("td",[t._v("-n, --nobackups")]),t._v(" "),s("td",[t._v("Do not create backups of modified files")])]),t._v(" "),s("tr",[s("td",[t._v("-o OUTPUT_DIR, --output-dir=OUTPUT_DIR")]),t._v(" "),s("td",[t._v("Place output files in this directory instead of overwriting input files. Requires the "),s("code",[t._v("-n")]),t._v(" flag, as backup files are unnecessary when the input files are not modified.")])]),t._v(" "),s("tr",[s("td",[t._v("-W, --write-unchanged-files")]),t._v(" "),s("td",[t._v("Write output files even is no changes were required. Useful with "),s("code",[t._v("-o")]),t._v(" so that a complete source tree is translated and copied. Implies "),s("code",[t._v("-w")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("--add-suffix=ADD_SUFFIX")]),t._v(" "),s("td",[t._v("Specify a string to be appended to all output filenames. Requires "),s("code",[t._v("-n")]),t._v(" if non-empty. Ex.: "),s("code",[t._v("--add-suffix='3'")]),t._v(" will generate "),s("code",[t._v(".py3")]),t._v(" files.")])])])]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("The 2to3 tool is an python program which is used to convert the code written in Python 2.x to Python 3.x code. The tool reads Python 2.x source code and applies a series of fixers to transform it into valid Python 3.x code.")]),t._v(" "),s("p",[t._v("The 2to3 tool is available in the standard library as "),s("a",{attrs:{href:"https://docs.python.org/2/library/2to3.html#module-lib2to3",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib2to3"),s("OutboundLink")],1),t._v(" which contains a rich set of fixers that will handle almost all code. Since lib2to3 is a generic library, it is possible to write your own fixers for 2to3.")])])}),[],!1,null,null,null);a.default=n.exports}}]);