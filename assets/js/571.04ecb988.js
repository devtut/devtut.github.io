(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{979:function(e,t,a){"use strict";a.r(t);var r=a(31),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started-with-c-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-c-language"}},[e._v("#")]),e._v(" Getting started with C Language")]),e._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[e._v("#")]),e._v(" Hello World")]),e._v(" "),a("p",[e._v("To create a simple C program which prints "),a("strong",[e._v('"Hello, World"')]),e._v(" on the screen, use a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Text_editor",target:"_blank",rel:"noopener noreferrer"}},[e._v("text editor"),a("OutboundLink")],1),e._v(" to create a new file (e.g. "),a("code",[e._v("hello.c")]),e._v(" — the file extension must be "),a("code",[e._v(".c")]),e._v(")\ncontaining the following source code:")]),e._v(" "),a("h3",{attrs:{id:"hello-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-c"}},[e._v("#")]),e._v(" hello.c")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("include")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("<stdio.h>")])]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("puts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello, World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("p",[a("a",{attrs:{href:"http://coliru.stacked-crooked.com/a/263e35298419ef1d",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live demo on Coliru"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"let-s-look-at-this-simple-program-line-by-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-look-at-this-simple-program-line-by-line"}},[e._v("#")]),e._v(" Let's look at this simple program line by line")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("include")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("<stdio.h>")])]),e._v("\n\n")])])]),a("p",[e._v("This line tells the compiler to include the contents of the standard library header file "),a("code",[e._v("stdio.h")]),e._v(" in the program. Headers are usually files containing function declarations, macros and data types, and you must include the header file before you use them. This line includes "),a("code",[e._v("stdio.h")]),e._v(" so it can call the function "),a("code",[e._v("puts()")]),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/documentation/c/6257/create-and-include-header-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("See more about headers."),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),a("p",[e._v("This line starts the definition of a function. It states the name of the function ("),a("code",[e._v("main")]),e._v("), the type and number of arguments it expects ("),a("code",[e._v("void")]),e._v(", meaning none), and the type of value that this function returns ("),a("code",[e._v("int")]),e._v(").  Program execution starts in the "),a("code",[e._v("main()")]),e._v(" function.")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    …\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("p",[e._v("The curly braces are used in pairs to indicate where a block of code begins and ends. They can be used in a lot of ways, but in this case they indicate where the function begins and ends.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n   puts("Hello, World");\n\n')])])]),a("p",[e._v("This line calls the "),a("code",[e._v("puts()")]),e._v(" function to output text to standard output (the screen, by default), followed by a newline. The string to be output is included within the parentheses.")]),e._v(" "),a("p",[a("code",[e._v('"Hello, World"')]),e._v(" is the string that will be written to the screen. In C, every string literal value must be inside the double quotes "),a("code",[e._v('"…"')]),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/documentation/c/1990/strings",target:"_blank",rel:"noopener noreferrer"}},[e._v("See more about strings."),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("In C programs, every statement needs to be terminated by a semi-colon (i.e. "),a("code",[e._v(";")]),e._v(").")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n   return 0;\n\n")])])]),a("p",[e._v("When we defined "),a("code",[e._v("main()")]),e._v(", we declared it as a function returning an "),a("code",[e._v("int")]),e._v(", meaning it needs to return an integer. In this example, we are returning the integer value 0, which is used to indicate that the program exited successfully.\nAfter the "),a("code",[e._v("return 0;")]),e._v(" statement, the execution process will terminate.")]),e._v(" "),a("h3",{attrs:{id:"editing-the-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-program"}},[e._v("#")]),e._v(" Editing the program")]),e._v(" "),a("p",[e._v("Simple text editors include "),a("a",{attrs:{href:"http://www.vim.org/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("vim")]),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://wiki.gnome.org/Apps/Gedit",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("gedit")]),a("OutboundLink")],1),e._v(" on Linux, or "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Microsoft_Notepad",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Notepad")]),a("OutboundLink")],1),e._v(" on Windows.\nCross-platform editors also include "),a("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Visual Studio Code")]),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://www.sublimetext.com/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Sublime Text")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The editor must create plain text files, not RTF or other any other format.")]),e._v(" "),a("h3",{attrs:{id:"compiling-and-running-the-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiling-and-running-the-program"}},[e._v("#")]),e._v(" Compiling and running the program")]),e._v(" "),a("p",[e._v("To run the program, this source file ("),a("code",[e._v("hello.c")]),e._v(") first needs to be compiled into an executable file (e.g. "),a("code",[e._v("hello")]),e._v(" on Unix/Linux system or "),a("code",[e._v("hello.exe")]),e._v(" on Windows). This is done using a compiler for the C language.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/documentation/c/1337/compilation",target:"_blank",rel:"noopener noreferrer"}},[e._v("See more about compiling"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"compile-using-gcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-using-gcc"}},[e._v("#")]),e._v(" Compile using GCC")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://gcc.gnu.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCC"),a("OutboundLink")],1),e._v(" (GNU Compiler Collection) is a widely used C compiler. To use it, open a terminal, use the command line to navigate to the source file's location and then run:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v("gcc hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("o hello\n\n")])])]),a("p",[e._v("If no errors are found in the the source code ("),a("code",[e._v("hello.c")]),e._v("), the compiler will create a "),a("strong",[e._v("binary file")]),e._v(", the name of which is given by the argument to the "),a("code",[e._v("-o")]),e._v(" command line option ("),a("code",[e._v("hello")]),e._v("). This is the final executable file.")]),e._v(" "),a("p",[e._v("We can also use the warning options "),a("code",[e._v("-Wall -Wextra -Werror")]),e._v(", that help to identify problems that can cause the program to fail or produce unexpected results. They are not necessary for this simple program but this is way of adding them:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v("gcc "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wall "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wextra "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Werror "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("o hello hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("c\n\n")])])]),a("h3",{attrs:{id:"using-the-clang-compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-clang-compiler"}},[e._v("#")]),e._v(" Using the clang compiler")]),e._v(" "),a("p",[e._v("To compile the program using "),a("a",{attrs:{href:"https://llvm.org/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("clang")]),a("OutboundLink")],1),e._v(" you can use:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v("clang "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wall "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wextra "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Werror "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("o hello hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("c\n\n")])])]),a("p",[e._v("By design, the "),a("code",[e._v("clang")]),e._v(" command line options are similar to those of GCC.")]),e._v(" "),a("h3",{attrs:{id:"using-the-microsoft-c-compiler-from-the-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-microsoft-c-compiler-from-the-command-line"}},[e._v("#")]),e._v(" Using the Microsoft C compiler from the command line")]),e._v(" "),a("p",[e._v("If using the Microsoft "),a("code",[e._v("cl.exe")]),e._v(" compiler on a Windows system which supports "),a("a",{attrs:{href:"https://www.visualstudio.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio"),a("OutboundLink")],1),e._v(" and if all environment variables are set, this C example may be compiled using the following command which will produce an executable "),a("code",[e._v("hello.exe")]),e._v(" within the directory the command is executed in (There are warning options such as "),a("code",[e._v("/W3")]),e._v(" for "),a("code",[e._v("cl")]),e._v(", roughly analogous to "),a("code",[e._v("-Wall")]),e._v(" etc for GCC or clang).")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v("cl hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("c\n\n")])])]),a("h3",{attrs:{id:"executing-the-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executing-the-program"}},[e._v("#")]),e._v(" Executing the program")]),e._v(" "),a("p",[e._v("Once compiled, the binary file may then be executed by typing "),a("code",[e._v("./hello")]),e._v(" in the terminal. Upon execution, the compiled program will print "),a("code",[e._v("Hello, World")]),e._v(", followed by a newline, to the command prompt.")]),e._v(" "),a("h2",{attrs:{id:"original-hello-world-in-k-r-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#original-hello-world-in-k-r-c"}},[e._v("#")]),e._v(' Original "Hello, World!" in K&R C')]),e._v(" "),a("p",[e._v('The following is the original "Hello, World!" program from the book '),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/The_C_Programming_Language",target:"_blank",rel:"noopener noreferrer"}},[e._v("The C Programming Language"),a("OutboundLink")],1),e._v(' by Brian Kernighan and Dennis Ritchie (Ritchie was the original developer of the C programming language at Bell Labs), referred to as "K&R":')]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("include")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("<stdio.h>")])]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello, world\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("p",[e._v("Notice that the C programming language was not standardized at the time of writing the first edition of this book (1978), and that this program will probably not compile on most modern compilers unless they are instructed to accept C90 code.")]),e._v(" "),a("p",[e._v("This very first example in the K&R book is now considered poor quality, in part because it lacks an explicit return type for "),a("code",[e._v("main()")]),e._v(" and in part because it lacks a "),a("code",[e._v("return")]),e._v(" statement. The 2nd edition of the book was written for the old C89 standard. In C89, the type of "),a("code",[e._v("main")]),e._v(" would default to "),a("code",[e._v("int")]),e._v(", but the K&R example does not return a defined value to the environment. In C99 and later standards, the return type is required, but it is safe to leave out the "),a("code",[e._v("return")]),e._v(" statement of "),a("code",[e._v("main")]),e._v(" (and only "),a("code",[e._v("main")]),e._v("), because of a special case introduced with C99 5.1.2.2.3 — it is equivalent to returning 0, which indicates success.")]),e._v(" "),a("p",[e._v("The recommended and most portable form of "),a("code",[e._v("main")]),e._v(" for hosted systems is "),a("code",[e._v("int main (void)")]),e._v(" when the program does not use any command line arguments, or "),a("code",[e._v("int main(int argc, char **argv)")]),e._v(" when the program does use the command line arguments.")]),e._v(" "),a("p",[e._v("C90 §5.1.2.2.3 "),a("strong",[e._v("Program termination")])]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("A return from the initial call to the "),a("code",[e._v("main")]),e._v(" function is equivalent to calling the "),a("code",[e._v("exit")]),e._v(" function with the value returned by the "),a("code",[e._v("main")]),e._v(" function as its argument. If the "),a("code",[e._v("main")]),e._v(" function executes a return that specifies no value, the termination status returned to the host environment is undefined.")]),e._v(" "),a("p",[e._v("C90 §6.6.6.4 "),a("strong",[e._v("The "),a("code",[e._v("return")]),e._v(" statement")])]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("If a `return` statement without an expression is executed, and the value of the function call\nis used by the caller, the behavior is undefined. Reaching the `}` that terminates a function is\nequivalent to executing a `return` statement without an expression.")]),e._v(" "),a("p",[e._v("C99 §5.1.2.2.3 "),a("strong",[e._v("Program termination")])]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("If the return type of the `main` function is a type compatible with `int`, a return from the\ninitial call to the `main` function is equivalent to calling the `exit` function with the value\nreturned by the `main` function as its argument; reaching the `}` that terminates the\n`main` function returns a value of 0. If the return type is not compatible with `int`, the\ntermination status returned to the host environment is unspecified.")]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations. By design, C provides constructs that map efficiently to typical machine instructions, and therefore it has found lasting use in applications that had formerly been coded in assembly language, including operating systems, as well as various application software for computers ranging from supercomputers to embedded systems.")]),e._v(" "),a("p",[e._v("Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant and portably written C program can be compiled for a very wide variety of computer platforms and operating systems with few changes to its source code. The language has become available on a very wide range of platforms, from embedded microcontrollers to supercomputers.")]),e._v(" "),a("p",[e._v("C was originally developed by Dennis Ritchie between 1969 and 1973 at Bell Labs and used to re-implement the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unix"),a("OutboundLink")],1),e._v(" operating systems. It has since become one of the most widely used programming languages of all time, with C compilers from various vendors available for the majority of existing computer architectures and operating systems.")]),e._v(" "),a("h3",{attrs:{id:"common-compilers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-compilers"}},[e._v("#")]),e._v(" Common Compilers")]),e._v(" "),a("p",[e._v("The process to compile a C program differs between compilers and operating systems. Most operating systems ship without a compiler, so you will have to install one. Some common compilers choices are:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://gcc.gnu.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCC, the GNU Compiler Collection"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://clang.llvm.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("clang: a C language family front-end for LLVM"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://landinghub.visualstudio.com/visual-cpp-build-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("MSVC, Microsoft Visual C/C++ build tools"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The following documents should give you a good overview on how to get started using a few of the most common compilers:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/bb384838.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with Microsoft Visual C"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www3.ntu.edu.sg/home/ehchua/programming/cpp/gcc_make.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with GCC"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"compiler-c-version-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-c-version-support"}},[e._v("#")]),e._v(" Compiler C version Support")]),e._v(" "),a("p",[e._v("Note that compilers have varying levels of support for standard C with many still not completely supporting C99. For example, as of the 2015 release, MSVC supports much of C99 yet still has some important exceptions for support of the language itself (e.g the preprocessing seems non-conformant) and for the C library (e.g. "),a("code",[e._v("<tgmath.h>")]),e._v('), nor do they necessarily document their "implementation dependent choices". '),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/C99#Implementations",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia has a table"),a("OutboundLink")],1),e._v(" showing support offered by some popular compilers.")]),e._v(" "),a("p",[e._v("Some compilers (notably GCC) have offered, or continue to offer, "),a("strong",[e._v("compiler extensions")]),e._v(" that implement additional features that the compiler producers deem necessary, helpful or believe may become part of a future C version, but that are not currently part of any C standard. As these extensions are compiler specific they can be considered to not be cross-compatible and compiler developers may remove or alter them in later compiler versions. The use of such extensions can generally be controlled by compiler flags.")]),e._v(" "),a("p",[e._v("Additionally, many developers have compilers that support only specific versions of C imposed by the environment or platform they are targeting.")]),e._v(" "),a("p",[e._v("If selecting a compiler, it is recommended to choose a compiler that has the best support for the latest version of C allowed for the target environment.")]),e._v(" "),a("h3",{attrs:{id:"code-style-off-topic-here"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-style-off-topic-here"}},[e._v("#")]),e._v(" Code style (off-topic here):")]),e._v(" "),a("p",[e._v("Because white space is insignificant in C (that is, it does not affect the operation of the code), programmers often use white space to make the code easier to read and comprehend, this is called the "),a("strong",[e._v("code style")]),e._v(". It is a set of rules and guidelines used when writing the source code. It covers concerns such as how lines should be indented, whether spaces or tabs should be used, how braces should be placed, how spaces should be used around operators and brackets, how variables should be named and so forth.")]),e._v(" "),a("p",[e._v("Code style is not covered by the standard and is primarily opinion based (different people find different styles easier to read), as such, it is generally considered off-topic on SO. The overriding advice on style in one's own code is that consistency is paramount - pick, or make, a style and stick to it. Suffice it to explain that there are various named styles in common usage that are often chosen by programmers rather than creating their own style.")]),e._v(" "),a("p",[e._v("Some common indent styles are: K & R style, Allman style, GNU style and so on. Some of these styles have different variants. Allman, for example, is used as either regular Allman or the popular variant, Allman-8. Information on some of the popular styles may be found on "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Indent_style",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia"),a("OutboundLink")],1),e._v(". Such style names are taken from the standards the authors or organizations often publish for use by the many people contributing to their code, so that everyone can easily read the code when they know the style, such as the "),a("a",{attrs:{href:"https://www.gnu.org/prep/standards/html_node/Writing-C.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU formatting guide"),a("OutboundLink")],1),e._v(" that makes up part of the "),a("a",{attrs:{href:"https://www.gnu.org/prep/standards/html_node/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU coding standards"),a("OutboundLink")],1),e._v(" document.")]),e._v(" "),a("p",[e._v("Some common naming conventions are: UpperCamelCase, lowerCamelCase, lower_case_with_underscore, ALL_CAPS, etc. These styles are combined in various ways for use with different objects and types (e.g., macros often use ALL_CAPS style)")]),e._v(" "),a("p",[e._v("K & R style is generally recommended for use within SO documentation, whereas the more esoteric styles, such as Pico, are discouraged.")]),e._v(" "),a("h3",{attrs:{id:"libraries-and-apis-not-covered-by-the-c-standard-and-therefore-being-off-topic-here"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#libraries-and-apis-not-covered-by-the-c-standard-and-therefore-being-off-topic-here"}},[e._v("#")]),e._v(" Libraries and APIs not covered by the C Standard (and therefore being off-topic here):")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/posix/topics",target:"_blank",rel:"noopener noreferrer"}},[e._v("POSIX"),a("OutboundLink")],1),e._v(" API (covering for example "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/posix/4508/threads#t=201607282046185855289",target:"_blank",rel:"noopener noreferrer"}},[e._v("PThreads"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/posix/4706/sockets#t=201608081932486939439",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sockets"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/posix/4532/signals#t=201607291207204211441",target:"_blank",rel:"noopener noreferrer"}},[e._v("Signals"),a("OutboundLink")],1),e._v(")")])])])}),[],!1,null,null,null);t.default=n.exports}}]);