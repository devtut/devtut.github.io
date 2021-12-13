(window.webpackJsonp=window.webpackJsonp||[]).push([[2763],{3171:function(t,e,a){"use strict";a.r(e);var s=a(31),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"performance-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-optimization"}},[t._v("#")]),t._v(" Performance optimization")]),t._v(" "),a("h2",{attrs:{id:"code-profiling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-profiling"}},[t._v("#")]),t._v(" Code profiling")]),t._v(" "),a("p",[t._v("First and foremost you should be able to find the bottleneck of your script and note that no optimization can compensate for a poor choice in data structure or a flaw in your algorithm design. Secondly do not try to optimize too early in your coding process at the expense of readability/design/quality. Donald Knuth made the following statement on optimization:")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v('"We should forget about small efficiencies, say about 97% of the time:\npremature optimization is the root of all evil. Yet we should not pass\nup our opportunities in that critical 3%"')]),t._v(" "),a("p",[t._v("To profile your code you have several tools: "),a("code",[t._v("cProfile")]),t._v(" (or the slower "),a("code",[t._v("profile")]),t._v(") from the standard library, "),a("code",[t._v("line_profiler")]),t._v(" and "),a("code",[t._v("timeit")]),t._v(". Each of them serve a different purpose.")]),t._v(" "),a("p",[a("code",[t._v("cProfile")]),t._v(" is a determistic profiler: function call, function return, and exception events are monitored, and precise timings are made for the intervals between these events (up to 0.001s). The library documentation ("),a("a",{attrs:{href:"https://docs.python.org/2/library/profile.html%5D%5B1%5D",target:"_blank",rel:"noopener noreferrer"}},[t._v("[https://docs.python.org/2/library/profile.html][1])"),a("OutboundLink")],1),t._v(") provides us with a simple use case")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cProfile\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"42!"')]),t._v("\ncProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f(12)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Or if you prefer to wrap parts of your existing code:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pstats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" StringIO\npr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... do something ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... long ...")]),t._v("\npr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsortby "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cumulative'")]),t._v("\nps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pstats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort_stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sortby"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print_stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getvalue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("This will create outputs looking like the table below, where you can quickly see where your program spends most of its time and identify the functions to optimize.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n        3 function calls in 0.000 seconds\n\nOrdered by: standard name\nncalls  tottime  percall  cumtime  percall filename:lineno(function)\n     1    0.000    0.000    0.000    0.000 <stdin>:1(f)\n     1    0.000    0.000    0.000    0.000 <string>:1(<module>)\n     1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}\n\n")])])]),a("p",[t._v("The module "),a("code",[t._v("line_profiler")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/rkern/line_profiler%5D%5B1%5D",target:"_blank",rel:"noopener noreferrer"}},[t._v("[https://github.com/rkern/line_profiler][1])"),a("OutboundLink")],1),t._v(") is useful to have a line by line analysis of your code. This is obviously not manageable for long scripts but is aimed at snippets. See the documentation for more details. The easiest way to get started is to use the kernprof script as explained one the package page, note that you will need to specify manually the function(s) to profile.")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("$ kernprof "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("l script_to_profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),a("p",[t._v("kernprof will create an instance of LineProfiler and insert it into the "),a("code",[t._v("__builtins__")]),t._v(" namespace with the name profile. It has been written to be used as a decorator, so in your script, you decorate the functions you want to profile with "),a("code",[t._v("@profile")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@profile")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slow_function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),a("p",[t._v("The default behavior of kernprof is to put the results into a binary file "),a("code",[t._v("script_to_profile.py.lprof")]),t._v(" . You can tell kernprof to immediately view the formatted results at the terminal with the [-v/--view] option. Otherwise, you can view the results later like so:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("$ python "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m line_profiler script_to_profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lprof\n\n")])])]),a("p",[t._v("Finally "),a("code",[t._v("timeit")]),t._v(" provides a simple way to test one liners or small expression both from the command line and the python shell. This module will answer question such as, is it faster to do a list comprehension or use the built-in "),a("code",[t._v("list()")]),t._v(" when transforming a set into a list. Look for the "),a("code",[t._v("setup")]),t._v(" keyword or "),a("code",[t._v("-s")]),t._v(" option to add setup code.")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" timeit\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" timeit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"-\".join(str(n) for n in range(100))'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8187260627746582")]),t._v("\n\n")])])]),a("p",[t._v("from a terminal")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("$ python "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m timeit "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"-\".join(str(n) for n in range(100))'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" loops"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" best of "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.3")]),t._v(" usec per loop\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("When attempting to improve the performance of a Python script, first and foremost you should be able to find the bottleneck of your script and note that no optimization can compensate for a poor choice in data structures or a flaw in your algorithm design.\nIdentifying performance bottlenecks can be done by "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/python/3818/profiling#t=201609110651538062723",target:"_blank",rel:"noopener noreferrer"}},[t._v("profiling"),a("OutboundLink")],1),t._v(" your script. Secondly do not try to optimize too early in your coding process at the expense of readability/design/quality. Donald Knuth made the following statement on optimization:")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("“We should forget about small efficiencies, say about 97% of the time:\npremature optimization is the root of all evil. Yet we should not pass\nup our opportunities in that critical 3%.”")])])}),[],!1,null,null,null);e.default=n.exports}}]);