(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{963:function(e,t,a){"use strict";a.r(t);var s=a(31),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compilation"}},[e._v("#")]),e._v(" Compilation")]),e._v(" "),a("p",[e._v("The C language is traditionally a compiled language (as opposed to interpreted). The C Standard defines "),a("strong",[a("strong",[e._v("translation phases")])]),e._v(", and the product of applying them is a program image (or compiled program). In "),a("a",{attrs:{href:"/questions/tagged/c11"}},[e._v("c11")]),e._v(", the phases are listed in §5.1.1.2.")]),e._v(" "),a("h2",{attrs:{id:"file-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-types"}},[e._v("#")]),e._v(" File Types")]),e._v(" "),a("p",[e._v("Compiling C programs requires you to work with five kinds of files:")]),e._v(" "),a("li",[a("p",[e._v("**Source files**: These files contain function definitions, and have names which end in `.c` by convention. Note: `.cc` and `.cpp` are C++ files; **not** C files."),a("br"),e._v("\ne.g., `foo.c`")])]),e._v(" "),a("li",[a("p",[e._v("**Header files**: These files contain function prototypes and various pre-processor statements (see below). They are used to allow source code files to access externally-defined functions. Header files end in `.h` by convention."),a("br"),e._v("\ne.g., `foo.h`")])]),e._v(" "),a("li",[a("p",[e._v("**Object files**: These files are produced as the output of the compiler. They consist of function definitions in binary form, but they are not executable by themselves. Object files end in `.o` by convention, although on some operating systems (e.g. Windows, MS-DOS), they often end in `.obj`."),a("br"),e._v("\ne.g., `foo.o` `foo.obj`")])]),e._v(" "),a("li",[a("p",[e._v('**Binary executables**: These are produced as the output of a program called a "linker". The linker links together a number of object files to produce a binary file which can be directly executed. Binary executables have no special suffix on Unix operating systems, although they generally end in `.exe` on Windows.'),a("br"),e._v("\ne.g., `foo` `foo.exe`")])]),e._v(" "),a("li",[e._v("\n**Libraries**: A library is a compiled binary but is not in itself an an executable (i.e., there is no `main()` function in a library).  A library contains functions that may be used by more than one program.   A library should ship with header files which contain prototypes for all functions in the library; these header files should be referenced (e.g; `#include "),a("library.h",[e._v("`) in any source file that uses the library.  The linker then needs to be referred to the library so the program can successfully compiled.  There are two types of libraries: static and dynamic.\n"),a("ul",[a("li",[e._v("**Static library**: A static library (`.a` files for POSIX systems and `.lib` files for Windows — not to be confused with [DLL import library files](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682592(v=vs.85).aspx), which also use the `.lib` extension) is statically built into the program .   Static libraries have the advantage that the program knows exactly which version of a library is used. On the other hand, the sizes of executables are bigger as all used library functions are included."),a("br"),e._v("\ne.g., `libfoo.a` `foo.lib`")]),e._v(" "),a("li",[e._v("**Dynamic library**: A dynamic library (`.so` files for most POSIX systems, `.dylib` for OSX and `.dll` files for Windows) is dynamically linked at runtime by the program.  These are also sometimes referred to as shared libraries because one library image can be shared by many programs. Dynamic libraries have the advantage of taking up less disk space if more than one application is using the library. Also, they allow library updates (bug fixes) without having to rebuild executables."),a("br"),e._v("\ne.g., `foo.so` `foo.dylib` `foo.dll`")])])])],1),e._v(" "),a("h2",{attrs:{id:"the-linker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-linker"}},[e._v("#")]),e._v(" The Linker")]),e._v(" "),a("p",[e._v("The job of the linker is to link together a bunch of object files ("),a("code",[e._v(".o")]),e._v(" files) into a binary executable. The process of "),a("strong",[e._v("linking")]),e._v(" mainly involves "),a("strong",[e._v("resolving symbolic addresses to numerical addresses")]),e._v(". The result of the link process is normally an executable program.")]),e._v(" "),a("p",[e._v("During the link process, the linker will pick up all the object modules specified on the command line, add some system-specific "),a("strong",[e._v("startup code")]),e._v(" in front and try to resolve all "),a("strong",[e._v("external")]),e._v(" references in the object module with "),a("strong",[e._v("external definitions")]),e._v(" in other object files (object files can be specified directly on the command line or may implicitly be added through libraries). It will then assign "),a("strong",[e._v("load addresses")]),e._v(" for the object files, that is, it specifies where the code and data will end up in the address space of the finished program. Once it's got the load addresses, it can replace all the symbolic addresses in the object code with \"real\", numerical addresses in the target's address space. The program is ready to be executed now.")]),e._v(" "),a("p",[e._v("This includes both the object files that the compiler created from your source code files as well as object files that have been pre-compiled for you and collected into library files. These files have names which end in "),a("code",[e._v(".a")]),e._v(" or "),a("code",[e._v(".so")]),e._v(", and you normally don't need to know about them, as the linker knows where most of them are located and will link them in automatically as needed.")]),e._v(" "),a("h3",{attrs:{id:"implicit-invocation-of-the-linker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implicit-invocation-of-the-linker"}},[e._v("#")]),e._v(" Implicit invocation of the linker")]),e._v(" "),a("p",[e._v("Like the pre-processor, the linker is a separate program, often called "),a("code",[e._v("ld")]),e._v(" (but Linux uses "),a("code",[e._v("collect2")]),e._v(", for example). Also like the pre-processor, the linker is invoked automatically for you when you use the compiler. Thus, the normal way of using the linker is as follows:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v(" gcc foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("o bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("o baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("o myprog\n\n")])])]),a("p",[e._v("This line tells the compiler to link together three object files ("),a("code",[e._v("foo.o")]),e._v(", "),a("code",[e._v("bar.o")]),e._v(", and "),a("code",[e._v("baz.o")]),e._v(") into a binary executable file named "),a("code",[e._v("myprog")]),e._v(". Now you have a file called "),a("code",[e._v("myprog")]),e._v(" that you can run and which will hopefully do something cool and/or useful.")]),e._v(" "),a("h3",{attrs:{id:"explicit-invocation-of-the-linker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explicit-invocation-of-the-linker"}},[e._v("#")]),e._v(" Explicit invocation of the linker")]),e._v(" "),a("p",[e._v("It is possible to invoke the linker directly, but this is seldom advisable, and is typically very platform-specific.  That is, options that work on Linux won't necessarily work on Solaris, AIX, macOS, Windows, and similarly for any other platform.  If you work with GCC, you can use "),a("code",[e._v("gcc -v")]),e._v(" to see what is executed on your behalf.")]),e._v(" "),a("h3",{attrs:{id:"options-for-the-linker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-for-the-linker"}},[e._v("#")]),e._v(" Options for the linker")]),e._v(" "),a("p",[e._v("The linker also takes some arguments to modify it's behavior. The following command would tell gcc to link "),a("code",[e._v("foo.o")]),e._v(" and "),a("code",[e._v("bar.o")]),e._v(", but also include the "),a("code",[e._v("ncurses")]),e._v(" library.")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v(" gcc foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("o bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("o foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("lncurses\n\n")])])]),a("p",[e._v("This is actually (more or less) equivalent to")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v(" gcc foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("o bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("libncurses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("so "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("o foo\n\n")])])]),a("p",[e._v("(although "),a("code",[e._v("libncurses.so")]),e._v(" could be "),a("code",[e._v("libncurses.a")]),e._v(", which is just an archive created with "),a("code",[e._v("ar")]),e._v(").  Note that you should list the libraries (either by pathname or via "),a("code",[e._v("-lname")]),e._v(" options) after the object files.  With static libraries, the order that they are specified matters; often, with shared libraries, the order doesn't matter.")]),e._v(" "),a("p",[e._v("Note that on many systems, if you are using mathematical functions (from "),a("code",[e._v("<math.h>")]),e._v("), you need to specify "),a("code",[e._v("-lm")]),e._v(" to load the mathematics library — but Mac OS X and macOS Sierra do not require this.  There are other libraries that are separate libraries on Linux and other Unix systems, but not on macOS — POSIX threads, and POSIX realtime, and networking libraries are examples.  Consequently, the linking process varies between platforms.")]),e._v(" "),a("h3",{attrs:{id:"other-compilation-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-compilation-options"}},[e._v("#")]),e._v(" Other compilation options")]),e._v(" "),a("p",[e._v("This is all you need to know to begin compiling your own C programs. Generally, we also recommend that you use the "),a("code",[e._v("-Wall")]),e._v(" command-line option:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v(" gcc "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wall "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("c foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("cc\n\n")])])]),a("p",[e._v("The "),a("code",[e._v("-Wall")]),e._v(" option causes the compiler to warn you about legal but dubious code constructs, and will help you catch a lot of bugs very early.")]),e._v(" "),a("p",[e._v("If you want the compiler to throw more warnings at you (including variables that are declared but not used, forgetting to return a value etc.), you can use this set of options, as "),a("code",[e._v("-Wall")]),e._v(", despite the name, doesn't turn "),a("strong",[e._v("all of the possible warnings")]),e._v(" on:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v(" gcc "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wall "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wextra "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wfloat"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("equal "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wundef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wcast"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("align "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wwrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("strings "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wlogical"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("op \\\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wmissing"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("declarations "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wredundant"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("decls "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wshadow …\n\n")])])]),a("p",[e._v("Note that "),a("code",[e._v("clang")]),e._v(" has an option "),a("a",{attrs:{href:"http://clang.llvm.org/docs/UsersManual.html#enabling-all-diagnostics",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("-Weverything")]),a("OutboundLink")],1),e._v(" which really does turn on all warnings in "),a("code",[e._v("clang")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"the-compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-compiler"}},[e._v("#")]),e._v(" The Compiler")]),e._v(" "),a("p",[e._v("After the C pre-processor has included all the header files and expanded all macros, the compiler can compile the program. It does this by turning the C source code into an object code file, which is a file ending in "),a("code",[e._v(".o")]),e._v(" which contains the binary version of the source code. Object code is not directly executable, though. In order to make an executable, you also have to add code for all of the library functions that were "),a("code",[e._v("#include")]),e._v("d into the file (this is not the same as including the declarations, which is what "),a("code",[e._v("#include")]),e._v(" does). This is the job of "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/c/1337/compilation/4360/the-linker#t=201609061240486686348",target:"_blank",rel:"noopener noreferrer"}},[e._v("the linker"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("In general, the exact sequence how to invoke a C compiler depends much on the system that you are using. Here we are using the GCC compiler, though it should be noted that many more compilers exist:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v(" gcc "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wall "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("c foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("c\n\n")])])]),a("p",[a("code",[e._v("%")]),e._v(" is the OS' command prompt. This tells the compiler to run the pre-processor on the file "),a("code",[e._v("foo.c")]),e._v(" and then compile it into the object code file "),a("code",[e._v("foo.o")]),e._v(". The "),a("code",[e._v("-c")]),e._v(" option means to compile the source code file into an object file but not to invoke the linker. This option "),a("code",[e._v("-c")]),e._v(" is available on POSIX systems, such as Linux or macOS; other systems may use different syntax.")]),e._v(" "),a("p",[e._v("If your entire program is in one source code file, you can instead do this:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v(" gcc "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Wall foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("o foo\n\n")])])]),a("p",[e._v("This tells the compiler to run the pre-processor on "),a("code",[e._v("foo.c")]),e._v(", compile it and then link it to create an executable called "),a("code",[e._v("foo")]),e._v(". The "),a("code",[e._v("-o")]),e._v(" option states that the next word on the line is the name of the binary executable file (program). If you don't specify the "),a("code",[e._v("-o")]),e._v(", (if you just type "),a("code",[e._v("gcc foo.c")]),e._v("), the executable will be named "),a("code",[e._v("a.out")]),e._v(" for historical reasons.")]),e._v(" "),a("p",[e._v("In general the compiler takes four steps when converting a "),a("code",[e._v(".c")]),e._v(" file into an executable:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("pre-processing")]),e._v(" - textually expands "),a("code",[e._v("#include")]),e._v(" directives and "),a("code",[e._v("#define")]),e._v(" macros in your "),a("code",[e._v(".c")]),e._v(" file")]),e._v(" "),a("li",[a("strong",[e._v("compilation")]),e._v(" - converts the program into assembly (you can stop the compiler at this step by adding the "),a("code",[e._v("-S")]),e._v(" option)")]),e._v(" "),a("li",[a("strong",[e._v("assembly")]),e._v(" - converts the assembly into machine code")]),e._v(" "),a("li",[a("strong",[e._v("linkage")]),e._v(" - links the object code to external libraries to create an executable")])]),e._v(" "),a("p",[e._v('Note also that the name of the compiler we are using is GCC, which stands for both "GNU C compiler" and "GNU compiler collection", depending on context. Other C compilers exist. For Unix-like operating systems, many of them have the name '),a("code",[e._v("cc")]),e._v(', for "C compiler", which is often a symbolic link to some other compiler. On Linux systems, '),a("code",[e._v("cc")]),e._v(" is often an alias for GCC. On macOS or OS-X, it points to clang.")]),e._v(" "),a("p",[e._v("The POSIX standards currently mandates "),a("a",{attrs:{href:"http://pubs.opengroup.org/onlinepubs/9699919799/utilities/c99.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("c99")]),a("OutboundLink")],1),e._v(" as the name of a C compiler — it supports the C99 standard by default. Earlier versions of POSIX mandated "),a("a",{attrs:{href:"http://pubs.opengroup.org/onlinepubs/7990989775/xcu/c89.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("c89")]),a("OutboundLink")],1),e._v(" as the compiler. POSIX also mandates that this compiler understands the options "),a("code",[e._v("-c")]),e._v(" and "),a("code",[e._v("-o")]),e._v(" that we used above.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" The "),a("code",[e._v("-Wall")]),e._v(" option present in both "),a("code",[e._v("gcc")]),e._v(" examples tells the compiler to print warnings about questionable constructions, which is strongly recommended. It is a also good idea to add other "),a("a",{attrs:{href:"https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("warning options"),a("OutboundLink")],1),e._v(", e.g. "),a("code",[e._v("-Wextra")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"the-preprocessor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-preprocessor"}},[e._v("#")]),e._v(" The Preprocessor")]),e._v(" "),a("p",[e._v('Before the C compiler starts compiling a source code file, the file is processed in a preprocessing phase. This phase can be done by a separate program or be completely integrated in one executable. In any case, it is invoked automatically by the compiler before compilation proper begins. The preprocessing phase converts your source code into another source code or translation unit by applying textual replacements. You can think of it as a "modified" or "expanded" source code. That expanded source may exist as a real file in the file system, or it may only be stored in memory for a short time before being processed further.')]),e._v(" "),a("p",[e._v('Preprocessor commands start with the pound sign ("#"). There are several preprocessor commands; two of the most important are:')]),e._v(" "),a("li",[e._v("\n**Defines**:\n`#define` is mainly used to define constants. For instance,\n"),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("BIGNUM")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000000")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" BIGNUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" \n\n")])])]),a("p",[e._v("becomes")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[a("code",[e._v("#define")]),e._v(" is used in this way so as to avoid having to explicitly write out some constant value in many different places in a source code file. This is important in case you need to change the constant value later on; it's much less bug-prone to change it once, in the "),a("code",[e._v("#define")]),e._v(", than to have to change it in multiple places scattered all over the code.\nBecause "),a("code",[e._v("#define")]),e._v(" just does advanced search and replace, you can also declare macros. For instance:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[e._v("ISTRUE")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("stm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("stm "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" stm "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// in the function:")]),e._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ISTRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[e._v("becomes:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// in the function:")]),e._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[e._v("At first approximation, this effect is roughly the same as with inline functions, but the preprocessor doesn't provide type checking for "),a("code",[e._v("#define")]),e._v(" macros. This is well known to be error-prone and their use necessitates great caution.\nAlso note here, that the preprocessor would also replace comments with a blanks as explained below.\n")])]),e._v(" "),a("li",[a("strong",[e._v("Includes")]),e._v(":\n"),a("code",[e._v("#include")]),e._v(" is used to access function definitions defined outside of a source code file. For instance:"),a("p"),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("include")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("<stdio.h>")]),e._v(" ")]),e._v("\n\n")])])]),a("p",[e._v("causes the preprocessor to paste the contents of "),a("code",[e._v("<stdio.h>")]),e._v(" into the source code file at the location of the "),a("code",[e._v("#include")]),e._v(" statement before it gets compiled. "),a("code",[e._v("#include")]),e._v(" is almost always used to include header files, which are files which mainly contain function declarations and "),a("code",[e._v("#define")]),e._v(" statements. In this case, we use "),a("code",[e._v("#include")]),e._v(" in order to be able to use functions such as "),a("code",[e._v("printf")]),e._v(" and "),a("code",[e._v("scanf")]),e._v(", whose declarations are located in the file "),a("code",[e._v("stdio.h")]),e._v(". C compilers do not allow you to use a function unless it has previously been declared or defined in that file; "),a("code",[e._v("#include")]),e._v(" statements are thus the way to re-use previously-written code in your C programs.\n")])]),e._v(" "),a("li",[a("strong",[e._v("Logic operations")]),e._v(":"),a("p"),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[e._v("defined A "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" defined B")])]),e._v("\nvariable "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" another_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("else")])]),e._v("\nvariable "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" another_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("endif")])]),e._v("\n\n")])])]),a("p",[e._v("will be changed to:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v("variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" another_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[e._v("if A or B were defined somewhere in the project before. If this is not the case, of course the preprocessor will do this:")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[e._v("variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" another_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[e._v("This is often used for code, that runs on different systems or compiles on different compilers. Since there are global defines, that are compiler/system specific you can test on those defines and always let the compiler just use the code he will compile for sure.\n")])]),e._v(" "),a("li",[a("strong",[e._v("Comments")]),e._v("\nThe Preprocessor replaces all comments in the source file by single spaces. Comments are indicated by "),a("code",[e._v("//")]),e._v(" up to the end of the line, or a combination of opening "),a("code",[e._v("/*")]),e._v(" and closing "),a("code",[e._v("*/")]),e._v(" comment brackets.\n")]),a("p"),e._v(" "),a("h2",{attrs:{id:"the-translation-phases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-translation-phases"}},[e._v("#")]),e._v(" The Translation Phases")]),e._v(" "),a("p",[e._v("As of the C 2011 Standard, listed in "),a("strong",[e._v("§5.1.1.2 Translation Phases")]),e._v(", the translation of source code to program image (e.g., the executable) are listed to occur in 8 ordered steps.")]),e._v(" "),a("ol",[a("li",[e._v("The source file input is mapped to the source character set (if necessary). Trigraphs are replaced in this step.")]),e._v(" "),a("li",[e._v("Continuation lines (lines that end with "),a("code",[e._v("\\")]),e._v(") are spliced with the next line.")]),e._v(" "),a("li",[e._v("The source code is parsed into whitespace and preprocessing tokens.")]),e._v(" "),a("li",[e._v("The preprocessor is applied, which executes directives, expands macros, and applies pragmas. Each source file pulled in by "),a("code",[e._v("#include")]),e._v(" undergoes translation phases 1 through 4 (recursively if necessary). All preprocessor related directives are then deleted.")]),e._v(" "),a("li",[e._v("Source character set values in character constants and string literals are mapped to the execution character set.")]),e._v(" "),a("li",[e._v("String literals adjacent to each other are concatenated.")]),e._v(" "),a("li",[e._v("The source code is parsed into tokens, which comprise the translation unit.")]),e._v(" "),a("li",[e._v("External references are resolved, and the program image is formed.")])]),e._v(" "),a("p",[e._v("An implementation of a C compiler may combine several steps together, but the resulting image must still behave as if the above steps had occurred separately in the order listed above.")]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Filename extension")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v(".c")])]),e._v(" "),a("td",[e._v("Source file. Usually contains definitions and code.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(".h")])]),e._v(" "),a("td",[e._v("Header file. Usually contains declarations.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(".o")])]),e._v(" "),a("td",[e._v("Object file. Compiled code in machine language.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(".obj")])]),e._v(" "),a("td",[e._v("Alternative extension for object files.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(".a")])]),e._v(" "),a("td",[e._v("Library file. Package of object files.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(".dll")])]),e._v(" "),a("td",[e._v("Dynamic-Link Library on Windows.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(".so")])]),e._v(" "),a("td",[e._v("Shared object (library) on many Unix-like systems.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(".dylib")])]),e._v(" "),a("td",[e._v("Dynamic-Link Library on OSX (Unix variant).")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(".exe")]),e._v(", "),a("code",[e._v(".com")])]),e._v(" "),a("td",[e._v("Windows executable file. Formed by linking object files and library files. In Unix-like systems, there is no special file name extension for executable file.")])])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("POSIX c99 compiler flags")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("-o filename")])]),e._v(" "),a("td",[e._v("Output file name eg. ("),a("code",[e._v("bin/program.exe")]),e._v(", "),a("code",[e._v("program")]),e._v(")")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-I directory")])]),e._v(" "),a("td",[e._v("search for headers in "),a("code",[e._v("direrctory")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-D name")])]),e._v(" "),a("td",[e._v("define macro "),a("code",[e._v("name")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-L directory")])]),e._v(" "),a("td",[e._v("search for libraries in "),a("code",[e._v("directory")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-l name")])]),e._v(" "),a("td",[e._v("link library "),a("code",[e._v("libname")]),e._v(".")])])])]),e._v(" "),a("p",[e._v("Compilers on POSIX platforms (Linux, mainframes, Mac) usually accept these options, even if they are not called "),a("code",[e._v("c99")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("See also "),a("a",{attrs:{href:"http://pubs.opengroup.org/onlinepubs/9699919799/utilities/c99.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("c99 - compile standard C programs"),a("OutboundLink")],1)])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("GCC (GNU Compiler Collection) Flags")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("-Wall")])]),e._v(" "),a("td",[e._v("Enables all warning messages that are commonly accepted to be useful.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-Wextra")])]),e._v(" "),a("td",[e._v("Enables more warning messages, can be too noisy.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-pedantic")])]),e._v(" "),a("td",[e._v("Force warnings where code violates the chosen standard.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-Wconversion")])]),e._v(" "),a("td",[e._v("Enable warnings on implicit conversion, use with care.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-c")])]),e._v(" "),a("td",[e._v("Compiles source files without linking.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-v")])]),e._v(" "),a("td",[e._v("Prints compilation info.")])])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("gcc")]),e._v(" accepts the POSIX flags plus a lot of others.")]),e._v(" "),a("li",[e._v("Many other compilers on POSIX platforms ("),a("code",[e._v("clang")]),e._v(", vendor specific compilers) also use the flags that are listed above.")]),e._v(" "),a("li",[e._v("See also "),a("a",{attrs:{href:"https://gcc.gnu.org/onlinedocs/gcc/index.html#toc_Invoking-GCC",target:"_blank",rel:"noopener noreferrer"}},[e._v("Invoking GCC"),a("OutboundLink")],1),e._v(" for many more options.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TCC (Tiny C Compiler) Flags")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("-Wimplicit-function-declaration")])]),e._v(" "),a("td",[e._v("Warn about implicit function declaration.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-Wunsupported")])]),e._v(" "),a("td",[e._v("Warn about unsupported GCC features that are ignored by TCC.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-Wwrite-strings")])]),e._v(" "),a("td",[e._v("Make string constants be of type const char * instead of char *.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-Werror")])]),e._v(" "),a("td",[e._v("Abort compilation if warnings are issued.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-Wall")])]),e._v(" "),a("td",[e._v("Activate all warnings, except "),a("code",[e._v("-Werror")]),e._v(", "),a("code",[e._v("-Wunusupported")]),e._v(" and "),a("code",[e._v("-Wwrite strings")]),e._v(".")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);