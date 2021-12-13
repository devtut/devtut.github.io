(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{1040:function(t,s,a){"use strict";a.r(s);var e=a(31),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"concurrency-with-openmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrency-with-openmp"}},[t._v("#")]),t._v(" Concurrency With OpenMP")]),t._v(" "),a("p",[t._v("This topic covers the basics of concurrency in C++ using OpenMP. OpenMP is documented in more detail in the "),a("a",{attrs:{href:"https://stackoverflow.com/documentation/openmp",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenMP tag"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Parallelism or concurrency implies the execution of code at the same time.")]),t._v(" "),a("h2",{attrs:{id:"openmp-parallel-sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openmp-parallel-sections"}},[t._v("#")]),t._v(" OpenMP: Parallel Sections")]),t._v(" "),a("p",[t._v("This example illustrates the basics of executing sections of code in parallel.")]),t._v(" "),a("p",[t._v("As OpenMP is a built-in compiler feature, it works on any supported compilers without including any libraries. You may wish to include "),a("code",[t._v("omp.h")]),t._v(" if you want to use any of the openMP API features.")]),t._v(" "),a("p",[a("strong",[t._v("Sample Code")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"begin "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    This pragma statement hints the compiler that the")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    contents within the { } are to be executed in as")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    parallel sections using openMP, the compiler will")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    generate this chunk of code for parallel execution")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp parallel sections")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    This pragma statement hints the compiler that")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    this is a section that can be executed in parallel")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    with other section, a single section will be executed")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    by a single thread.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    Note that it is "section" as opposed to "sections" above')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp section")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Do something **/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp section")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Do something **/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    This line will not be executed until all the")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    sections defined above terminates")]),t._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Outputs")])]),t._v(" "),a("p",[t._v("This example produces 2 possible outputs and is dependent on the operating system and hardware. The output also illustrates a "),a("strong",[t._v("race condition")]),t._v(" problem that would occur from such an implementation.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("OUTPUT A")]),t._v(" "),a("th",[t._v("OUTPUT B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("begin hello world end")]),t._v(" "),a("td",[t._v("begin world hello end")])])])]),t._v(" "),a("h2",{attrs:{id:"openmp-parallel-sections-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openmp-parallel-sections-2"}},[t._v("#")]),t._v(" OpenMP: Parallel Sections")]),t._v(" "),a("p",[t._v("This example shows how to execute chunks of code in parallel")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"begin "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Start of parallel sections")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp parallel sections")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Execute these sections in parallel")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp section")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" something "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp section")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" something "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp section")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" something "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forever "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    end of parallel sections")]),t._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("ul",[a("li",[t._v("begin hello world forever end")]),t._v(" "),a("li",[t._v("begin world hello forever end")]),t._v(" "),a("li",[t._v("begin hello forever world end")]),t._v(" "),a("li",[t._v("begin forever hello world end")])]),t._v(" "),a("p",[t._v("As execution order is not guaranteed, you may observe any of the above output.")]),t._v(" "),a("h2",{attrs:{id:"openmp-parallel-for-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openmp-parallel-for-loop"}},[t._v("#")]),t._v(" OpenMP: Parallel For Loop")]),t._v(" "),a("p",[t._v("This example shows how to divide a loop into equal parts and execute them in parallel.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Splits element vector into element.size() / Thread Qty")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    and allocate that range for each thread.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp parallel "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size_t i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Example Allocation (100 element per thread)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Thread 1 : 0 ~ 99")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Thread 2 : 100 ~ 199")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Thread 2 : 200 ~ 299")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Continue process")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Only when all threads completed their allocated")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    loop job")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),a("p",[t._v("*Please take extra care to not modify the size of the vector used in parallel for loops as "),a("strong",[t._v("allocated range indices doesn't update automatically")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"openmp-parallel-gathering-reduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openmp-parallel-gathering-reduction"}},[t._v("#")]),t._v(" OpenMP: Parallel Gathering / Reduction")]),t._v(" "),a("p",[t._v("This example illustrates a concept to perform reduction or gathering using "),a("code",[t._v("std::vector")]),t._v(" and OpenMP.")]),t._v(" "),a("p",[t._v("Supposed we have a scenario where we want multiple threads to help us generate a bunch of stuff, "),a("code",[t._v("int")]),t._v(" is used here for simplicity and can be replaced with other data types.")]),t._v(" "),a("p",[t._v("This is particularly useful when you need to merge results from slaves to avoid segement faults or memory access violations and do not wish to use libraries or custom sync container libraries.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    The Master vector")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    We want a vector of results gathered from slave threads")]),t._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Hint the compiler to parallelize this { } of code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    with all available threads (usually the same as logical processor qty)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp parallel")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    In this area, you can write any code you want for each")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    slave thread, in this case a vector to hold each of their results")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    We don't have to worry about how many threads were spawn or if we need")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    to repeat this declaration or not.")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Tell the compiler to use all threads allocated for this parallel region")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    to perform this loop in parts. Actual load appx = 1000000 / Thread Qty")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    The nowait keyword tells the compiler that the slave threads don't")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    have to wait for all other slaves to finish this for loop job")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" nowait")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size_t i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Do something */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        Slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Slaves that finished their part of the job")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    will perform this thread by thread one at a time")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    critical section ensures that only 0 or 1 thread performs")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    the { } at any time")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("omp critical")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Merge slave into master")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    use move iterators instead, avoid copy unless")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    you want to use it for something else after this section")]),t._v("\n        Master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make_move_iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make_move_iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Have fun with Master vector")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("OpenMP does not require any special headers or libraries as it is a built-in compiler feature. However, if you use any OpenMP API functions such as "),a("code",[t._v("omp_get_thread_num()")]),t._v(", you will need to include "),a("code",[t._v("omp.h")]),t._v(" and its library.")]),t._v(" "),a("p",[t._v("OpenMP "),a("code",[t._v("pragma")]),t._v(" statements are ignored when the OpenMP option is not enabled during compilation. You may want to refer to the compiler option in your compiler's manual.")]),t._v(" "),a("ul",[a("li",[t._v("GCC uses   "),a("code",[t._v("-fopenmp")])]),t._v(" "),a("li",[t._v("Clang uses "),a("code",[t._v("-fopenmp")])]),t._v(" "),a("li",[t._v("MSVC uses  "),a("code",[t._v("/openmp")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);