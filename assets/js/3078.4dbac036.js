(window.webpackJsonp=window.webpackJsonp||[]).push([[3078],{3486:function(e,t,a){"use strict";a.r(t);var s=a(31),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started-with-ruby-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-ruby-language"}},[e._v("#")]),e._v(" Getting started with Ruby Language")]),e._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[e._v("#")]),e._v(" Hello World")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("This example assumes Ruby is installed.")]),e._v(" "),a("p",[e._v("Place the following in a file named "),a("code",[e._v("hello.rb")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("puts "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello World'")]),e._v("\n\n")])])]),a("p",[e._v("From the command line, type the following command to execute the Ruby code from the source file:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("$ ruby hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("rb\n\n")])])]),a("p",[e._v("This should output:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Hello")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("World")]),e._v("\n\n")])])]),a("p",[e._v("The output will be immediately displayed to the console. Ruby source files don't need to be compiled before being executed. The Ruby interpreter compiles and executes the Ruby file at runtime.")]),e._v(" "),a("h2",{attrs:{id:"hello-world-as-a-self-executable-file-using-shebang-unix-like-operating-systems-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-as-a-self-executable-file-using-shebang-unix-like-operating-systems-only"}},[e._v("#")]),e._v(" Hello World as a Self-Executable File—using Shebang (Unix-like operating systems only)")]),e._v(" "),a("p",[e._v("You can add an interpreter directive (shebang) to your script.  Create a file called "),a("code",[e._v("hello_world.rb")]),e._v(" which contains:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#!/usr/bin/env ruby")]),e._v("\n\nputs "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello World!'")]),e._v("\n\n")])])]),a("p",[e._v("Give the script executable permissions.  Here's how to do that in Unix:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("$ chmod u"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("x hello_world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("rb\n\n")])])]),a("p",[e._v("Now you do not need to call the Ruby interpreter explicitly to run your script.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("hello_world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("rb\n\n")])])]),a("h2",{attrs:{id:"hello-world-from-irb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-from-irb"}},[e._v("#")]),e._v(" Hello World from IRB")]),e._v(" "),a("p",[e._v("Alternatively, you can use the "),a("a",{attrs:{href:"http://ruby-doc.org/stdlib-2.3.1/libdoc/irb/rdoc/IRB.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interactive Ruby Shell"),a("OutboundLink")],1),e._v(" (IRB) to immediately execute the Ruby statements you previously wrote in the Ruby file.")]),e._v(" "),a("p",[e._v("Start an IRB session by typing:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("$ irb\n\n")])])]),a("p",[e._v("Then enter the following command:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("puts "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World"')]),e._v("\n\n")])])]),a("p",[e._v("This results in the following console output (including newline):")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Hello")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("World")]),e._v("\n\n")])])]),a("p",[e._v("If you don't want to start a new line, you can use "),a("code",[e._v("print")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("print "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World"')]),e._v("\n\n")])])]),a("h2",{attrs:{id:"hello-world-without-source-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-without-source-files"}},[e._v("#")]),e._v(" Hello World without source files")]),e._v(" "),a("p",[e._v("Run the command below in a shell after installing Ruby.  This shows how you can execute simple Ruby programs without creating a Ruby file:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("ruby "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'puts \"Hello World\"'")]),e._v("\n\n")])])]),a("p",[e._v("You can also feed a Ruby program to the interpreter's standard input.  One way to do that is to use a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Here_document",target:"_blank",rel:"noopener noreferrer"}},[e._v("here document"),a("OutboundLink")],1),e._v(" in your shell command:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("ruby "),a("span",{pre:!0,attrs:{class:"token string heredoc-string"}},[a("span",{pre:!0,attrs:{class:"token delimiter symbol"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<<")]),e._v("END")]),e._v('\nputs "Hello World"\n'),a("span",{pre:!0,attrs:{class:"token delimiter symbol"}},[e._v("END")])]),e._v("\n\n")])])]),a("h2",{attrs:{id:"hello-world-with-tk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-with-tk"}},[e._v("#")]),e._v(" Hello World with tk")]),e._v(" "),a("p",[e._v("Tk is the standard graphical user interface (GUI) for Ruby. It provides a cross-platform GUI for Ruby programs.")]),e._v(" "),a("h3",{attrs:{id:"example-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-code"}},[e._v("#")]),e._v(" Example code:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tk"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("TkRoot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" title "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World!"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Tk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mainloop\n\n")])])]),a("p",[a("strong",[e._v("The result:")])]),e._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/Y6sLc.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/Y6sLc.png",alt:"Result of Hello World with tk"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("strong",[e._v("Step by Step explanation:")])]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tk"')]),e._v("\n\n")])])]),a("p",[e._v("Load the tk package.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("TkRoot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" title "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World!"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("p",[e._v("Define a widget with the title "),a("code",[e._v("Hello World")])]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Tk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mainloop\n\n")])])]),a("p",[e._v("Start the main loop and display the widget.")]),e._v(" "),a("h2",{attrs:{id:"my-first-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-first-method"}},[e._v("#")]),e._v(" My First Method")]),e._v(" "),a("h3",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Create a new file named "),a("code",[e._v("my_first_method.rb")])]),e._v(" "),a("p",[e._v("Place the following code inside the file:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("hello_world")])]),e._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello world!"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\nhello_world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or just 'hello_world' (without parenthesis)")]),e._v("\n\n")])])]),a("p",[e._v("Now, from a command line, execute the following:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("ruby my_first_method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("rb\n\n")])])]),a("p",[e._v("The output should be:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Hello")]),e._v(" world"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n\n")])])]),a("h3",{attrs:{id:"explanation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[e._v("#")]),e._v(" Explanation")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("def")]),e._v(" is a keyword that tells us that we're "),a("code",[e._v("def")]),e._v("-ining a method - in this case, "),a("code",[e._v("hello_world")]),e._v(" is the name of our method.")]),e._v(" "),a("li",[a("code",[e._v('puts "Hello world!"')]),e._v(" "),a("code",[e._v("puts")]),e._v(" (or pipes to the console) the string "),a("code",[e._v("Hello world!")])]),e._v(" "),a("li",[a("code",[e._v("end")]),e._v(" is a keyword that signifies we're ending our definition of the "),a("code",[e._v("hello_world")]),e._v(" method")]),e._v(" "),a("li",[e._v("as the "),a("code",[e._v("hello_world")]),e._v(" method doesn't accept any arguments, you can omit the parenthesis by invoking the method")])]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.ruby-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby"),a("OutboundLink")],1),e._v(" is a multi-platform open-source, dynamic object-oriented interpreted language, designed to be simplistic and productive. It was created by Yukihiro Matsumoto (Matz) in 1995.")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("According to its creator, Ruby was influenced by "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Perl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Perl"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Smalltalk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smalltalk"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Eiffel_(programming_language)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eiffel"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ada_(programming_language)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ada"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Lisp_(programming_language)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lisp"),a("OutboundLink")],1),e._v(". It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management.")])])}),[],!1,null,null,null);t.default=r.exports}}]);