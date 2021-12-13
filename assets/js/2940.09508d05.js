(window.webpackJsonp=window.webpackJsonp||[]).push([[2940],{3349:function(t,a,e){"use strict";e.r(a);var s=e(31),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"reading-and-writing-strings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-and-writing-strings"}},[t._v("#")]),t._v(" Reading and writing strings")]),t._v(" "),e("h2",{attrs:{id:"printing-and-displaying-strings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#printing-and-displaying-strings"}},[t._v("#")]),t._v(" Printing and displaying strings")]),t._v(" "),e("p",[t._v("R has several built-in functions that can be used to print or display information, but "),e("code",[t._v("print")]),t._v(" and "),e("code",[t._v("cat")]),t._v(" are the most basic. As R is an "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Interpreted_language",target:"_blank",rel:"noopener noreferrer"}},[t._v("interpreted language"),e("OutboundLink")],1),t._v(", you can try these out directly in the R console:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("print"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#[1] "Hello World"')]),t._v("\ncat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Hello World")]),t._v("\n\n")])])]),e("p",[t._v("Note the difference in both input and output for the two functions. (Note: there are no quote-characters in the value of "),e("code",[t._v("x")]),t._v(" created with "),e("code",[t._v('x <- "Hello World"')]),t._v(". They are added by "),e("code",[t._v("print")]),t._v(" at the output stage.)")]),t._v(" "),e("p",[e("code",[t._v("cat")]),t._v(" takes one or more character vectors as arguments and prints them to the console. If the character vector has a length greater than 1, arguments are separated by a space (by default):")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("cat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#hello world")]),t._v("\n\n")])])]),e("p",[t._v("Without the new-line character ("),e("code",[t._v("\\n")]),t._v(") the output would be:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("cat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Hello World> ")]),t._v("\n\n")])])]),e("p",[t._v("The prompt for the next command appears immediately after the output. (Some consoles such as RStudio's may automatically append a newline to strings that do not end with a newline.)")]),t._v(" "),e("p",[e("code",[t._v("print")]),t._v(' is an example of a "generic" function, which means the class of the first argument passed is detected and a class-specific '),e("strong",[t._v("method")]),t._v(" is used to output. For a character vector like "),e("code",[t._v('"Hello World"')]),t._v(", the result is similar to the output of "),e("code",[t._v("cat")]),t._v(". However, the character string is quoted and a number "),e("code",[t._v("[1]")]),t._v(" is output to indicate the first element of a character vector (In this case, the first and only element):")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("print"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#[1] "Hello World"')]),t._v("\n\n")])])]),e("p",[t._v("This default print method is also what we see when we simply ask R to print a variable. Note how the output of typing "),e("code",[t._v("s")]),t._v(" is the same as calling "),e("code",[t._v("print(s)")]),t._v(" or "),e("code",[t._v('print("Hello World")')]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\ns\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#[1] "Hello World"')]),t._v("\n\n")])])]),e("p",[t._v("Or even without assigning it to anything:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#[1] "Hello World"')]),t._v("\n\n")])])]),e("p",[t._v("If we add another character string as a second element of the vector (using the "),e("code",[t._v("c()")]),t._v(" function to "),e("strong",[t._v("c")]),t._v("oncatenate the elements together), then the behavior of "),e("code",[t._v("print()")]),t._v(" looks quite a bit different from that of "),e("code",[t._v("cat")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("print"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here I am."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#[1] "Hello World" "Here I am."')]),t._v("\n\n")])])]),e("p",[t._v("Observe that the "),e("code",[t._v("c()")]),t._v(" function does "),e("strong",[t._v("not")]),t._v(" do string-concatenation. (One needs to use "),e("code",[t._v("paste")]),t._v(" for that purpose.) R shows that the character vector has two elements by quoting them separately. If we have a vector long enough to span multiple lines, R will print the index of the element starting each line, just as it prints "),e("code",[t._v("[1]")]),t._v(" at the start of the first line.")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here I am!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This next string is really long."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#[1] "Hello World"                      "Here I am!"                      ')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#[3] "This next string is really long."')]),t._v("\n\n")])])]),e("p",[t._v("The particular behavior of "),e("code",[t._v("print")]),t._v(" depends on the "),e("strong",[t._v("class")]),t._v(" of the object passed to the function.")]),t._v(" "),e("p",[t._v("If we call "),e("code",[t._v("print")]),t._v(' an object with a different class, such as "numeric" or "logical", the quotes are omitted from the output to indicate we are dealing with an object that is not character class:')]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("print"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[1] 1")]),t._v("\nprint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[1] TRUE")]),t._v("\n\n")])])]),e("p",[t._v("Factor objects get printed in the same fashion as character variables which often creates ambiguity when console output is used to display objects in SO question bodies.  It is rare to use "),e("code",[t._v("cat")]),t._v(" or "),e("code",[t._v("print")]),t._v(" except in an interactive context. Explicitly calling "),e("code",[t._v("print()")]),t._v(" is particularly rare (unless you wanted to suppress the appearance of the quotes or view an object that is returned as "),e("code",[t._v("invisible")]),t._v(" by a function), as entering "),e("code",[t._v("foo")]),t._v(" at the console is a shortcut for "),e("code",[t._v("print(foo)")]),t._v('. The interactive console of R is known as a REPL, a "read-eval-print-loop". The '),e("code",[t._v("cat")]),t._v(" function is best saved for special purposes (like writing output to an open file connection). Sometimes it is used inside functions (where calls to "),e("code",[t._v("print()")]),t._v(" are suppressed), however "),e("strong",[t._v("using "),e("code",[t._v("cat()")]),t._v(" inside a function to generate output to the console is bad practice")]),t._v(". The preferred method is to "),e("code",[t._v("message()")]),t._v(" or "),e("code",[t._v("warning()")]),t._v(" for intermediate messages; they behave similarly to "),e("code",[t._v("cat")]),t._v(" but can be optionally suppressed by the end user. The final result should simply returned so that the user can assign it to store it if necessary.")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#hello world")]),t._v("\nsuppressMessages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"capture-output-of-operating-system-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#capture-output-of-operating-system-command"}},[t._v("#")]),t._v(" Capture output of operating system command")]),t._v(" "),e("h3",{attrs:{id:"functions-which-return-a-character-vector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions-which-return-a-character-vector"}},[t._v("#")]),t._v(" Functions which return a character vector")]),t._v(" "),e("p",[t._v("Base "),e("code",[t._v("R")]),t._v(" has two functions for invoking a system command. Both require an additional parameter to capture the output of the system command.")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("system"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top -a -b -n 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intern "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nsystem2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-a -b -n 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("Both return a character vector.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n [1] "top - 08:52:03 up 70 days, 15:09,  0 users,  load average: 0.00, 0.00, 0.00"     \n  [2] "Tasks: 125 total,   1 running, 124 sleeping,   0 stopped,   0 zombie"            \n  [3] "Cpu(s):  0.9%us,  0.3%sy,  0.0%ni, 98.7%id,  0.1%wa,  0.0%hi,  0.0%si,  0.0%st"  \n  [4] "Mem:  12194312k total,  3613292k used,  8581020k free,   216940k buffers"        \n  [5] "Swap: 12582908k total,  2334156k used, 10248752k free,  1682340k cached"         \n  [6] ""                                                                                \n  [7] "  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND            "\n  [8] "11300 root      20   0 1278m 375m 3696 S  0.0  3.2 124:40.92 trala              "\n  [9] " 6093 user1     20   0 1817m 269m 1888 S  0.0  2.3  12:17.96 R                  "\n [10] " 4949 user2     20   0 1917m 214m 1888 S  0.0  1.8  11:16.73 R                  "\n\n')])])]),e("blockquote"),t._v(" "),e("p",[t._v("For illustration, the UNIX command "),e("code",[t._v("top -a -b -n 1")]),t._v(" is used. This is OS specific and may need to be amended to run the examples on your computer.")]),t._v(" "),e("p",[t._v("Package "),e("code",[t._v("devtools")]),t._v(" has a function to run a system command and capture the output without an additional parameter. It also returns a character vector.")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("devtools"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("system_output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-a -b -n 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n")])])]),e("h3",{attrs:{id:"functions-which-return-a-data-frame"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions-which-return-a-data-frame"}},[t._v("#")]),t._v(" Functions which return a data frame")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("fread")]),t._v(" function in package "),e("code",[t._v("data.table")]),t._v(" allows to execute a shell command and to read the output like "),e("code",[t._v("read.table")]),t._v(". It returns a "),e("code",[t._v("data.table")]),t._v(" or a "),e("code",[t._v("data.frame")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("fread"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top -a -b -n 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" check.names "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       PID     USER PR NI  VIRT  RES  SHR S X.CPU X.MEM     TIME.         COMMAND\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11300")]),t._v("     root "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1278")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("375")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3696")]),t._v(" S     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("124")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.92")]),t._v("           trala\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6093")]),t._v("    user1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1817")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("269")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1888")]),t._v(" S     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.56")]),t._v("               R\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4949")]),t._v("    user2 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1917")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("214")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1888")]),t._v(" S     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17.33")]),t._v("               R\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7922")]),t._v("    user3 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3094")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("131")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1892")]),t._v(" S     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("04.95")]),t._v("               R\n\n")])])]),e("p",[t._v("Note, that "),e("code",[t._v("fread")]),t._v(" automatically has skipped the top 6 header lines.")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("Here the parameter "),e("code",[t._v("check.names = TRUE")]),t._v(" was added to convert "),e("code",[t._v("%CPU")]),t._v(", "),e("code",[t._v("%MEN")]),t._v(", and "),e("code",[t._v("TIME+")]),t._v(" to syntactically valid column names.")]),t._v(" "),e("h2",{attrs:{id:"reading-from-or-writing-to-a-file-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-from-or-writing-to-a-file-connection"}},[t._v("#")]),t._v(" Reading from or writing to a file connection")]),t._v(" "),e("p",[t._v("Not always we have liberty to read from or write to a local system path. For example if R code streaming map-reduce must need to read and write to file connection. There can be other scenarios as well where one is going beyond local system and with advent of cloud and big data, this is becoming increasingly common. One of the way to do this is in logical sequence.")]),t._v(" "),e("p",[t._v("Establish a file connection to read with "),e("code",[t._v("file()")]),t._v(' command ("r" is for read mode):')]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("conn "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/example.data"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#when file is in local system")]),t._v("\nconn1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stdin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#when just standard input/output for files are available")]),t._v("\n\n")])])]),e("p",[t._v("As this will establish just file connection, one can read the data from these file connections as follows:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("line "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" readLines"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" warn"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("Here we are reading the data from file connection "),e("code",[t._v("conn")]),t._v(" line by line as "),e("code",[t._v("n=1")]),t._v(". one can change value of "),e("code",[t._v("n")]),t._v(" (say 10, 20 etc.) for reading data blocks for faster reading (10 or 20 lines block read in one go). To read complete file in one go set "),e("code",[t._v("n=-1")]),t._v(".")]),t._v(" "),e("p",[t._v("After data processing or say model execution; one can write the results back to file connection using many different commands like "),e("code",[t._v("writeLines(),cat()")]),t._v(" etc. which are capable of writing to a file connection. However all of these commands will leverage file connection established for writing. This could be done using "),e("code",[t._v("file()")]),t._v(" command as:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("conn2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/result.data"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#when file is in local system")]),t._v("\nconn3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stdout"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#when just standard input/output for files are available")]),t._v("\n\n")])])]),e("p",[t._v("Then write the data as follows:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("writeLines"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("conn2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sep "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("Related Docs:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://stackoverflow.com/documentation/r/5098",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get user input"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);