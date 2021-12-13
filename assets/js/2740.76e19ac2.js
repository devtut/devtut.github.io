(window.webpackJsonp=window.webpackJsonp||[]).push([[2740],{3149:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),a("h2",{attrs:{id:"introduction-to-python-logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-python-logging"}},[t._v("#")]),t._v(" Introduction to Python Logging")]),t._v(" "),a("p",[t._v("This module defines functions and classes which implement a flexible event logging system for applications and libraries.")]),t._v(" "),a("p",[t._v("The key benefit of having the logging API provided by a standard library module is that all Python modules can participate in logging, so your application log can include your own messages integrated with messages from third-party modules.")]),t._v(" "),a("p",[t._v("So, lets start:")]),t._v(" "),a("p",[a("strong",[t._v("Example Configuration Directly in Code")])]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logging\n\nlogger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getLogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StreamHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformatter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Formatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%(asctime)s %(name)-12s %(levelname)-8s %(message)s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setFormatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is a %s test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Output example:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("07")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("332")]),t._v(" root         DEBUG    this "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" a debug test\n\n")])])]),a("p",[a("strong",[t._v("Example Configuration via an INI File")])]),t._v(" "),a("p",[t._v("Assuming the file is named logging_config.ini. More details for the file format are in the "),a("a",{attrs:{href:"https://docs.python.org/3/howto/logging.html#configuring-logging",target:"_blank",rel:"noopener noreferrer"}},[t._v("logging configuration"),a("OutboundLink")],1),t._v(" section of the "),a("a",{attrs:{href:"https://docs.python.org/3/howto/logging.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("logging tutorial"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("loggers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nkeys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nkeys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stream_handler\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("formatters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nkeys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("formatter\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("logger_root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nlevel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DEBUG\nhandlers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stream_handler\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("handler_stream_handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("StreamHandler\nlevel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DEBUG\nformatter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("formatter\nargs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("formatter_formatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asctime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("12s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("levelname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("8s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("s\n\n")])])]),a("p",[t._v("Then use "),a("code",[t._v("logging.config.fileConfig()")]),t._v(" in the code:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logging\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fileConfig\n\nfileConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging_config.ini'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlogger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getLogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'often makes a very good meal of %s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'visiting tourists'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Example Configuration via a Dictionary")])]),t._v(" "),a("p",[t._v("As of Python 2.7, you can use a dictionary with configuration details. "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0391/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP 391"),a("OutboundLink")],1),t._v(" contains a list of the mandatory and optional elements in the configuration dictionary.")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logging\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dictConfig\n\nlogging_config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    formatters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'format'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%(asctime)s %(name)-12s %(levelname)-8s %(message)s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    handlers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging.StreamHandler'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'formatter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'level'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handlers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'level'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndictConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logging_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nlogger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getLogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'often makes a very good meal of %s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'visiting tourists'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"logging-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-exceptions"}},[t._v("#")]),t._v(" Logging exceptions")]),t._v(" "),a("p",[t._v("If you want to log exceptions you can and should make use of the "),a("code",[t._v("logging.exception(msg)")]),t._v(" method:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logging\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basicConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bar\nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<stdin>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n\n")])])]),a("p",[a("strong",[t._v("Do not pass the exception as argument:")])]),t._v(" "),a("p",[t._v("As "),a("code",[t._v("logging.exception(msg)")]),t._v(" expects a "),a("code",[t._v("msg")]),t._v(" arg, it is a common pitfall to pass the exception into the logging call like this:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("foo\nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<stdin>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n\n")])])]),a("p",[t._v("While it might look as if this is the right thing to do at first, it is actually problematic due to the reason how exceptions and various encoding work together in the logging module:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'föö'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/.../python2.7/logging/__init__.py"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("861")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" emit\n    msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/.../python2.7/logging/__init__.py"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("734")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/.../python2.7/logging/__init__.py"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("469")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),t._v("\n    s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_fmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dict__\nUnicodeEncodeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ascii'")]),t._v(" codec can't encode characters "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" position "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ordinal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nLogged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("stdin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\n")])])]),a("p",[t._v("Trying to log an exception that contains unicode chars, this way will "),a("a",{attrs:{href:"http://stackoverflow.com/questions/31137568/properly-logging-unicode-utf-8-exceptions-in-python-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("fail miserably"),a("OutboundLink")],1),t._v(". It will hide the stacktrace of the original exception by overriding it with a new one that is raised during formatting of your "),a("code",[t._v("logging.exception(e)")]),t._v(" call.")]),t._v(" "),a("p",[t._v("Obviously, in your own code, you might be aware of the encoding in exceptions. However, 3rd party libs might handle this in a different way.")]),t._v(" "),a("p",[a("strong",[t._v("Correct Usage:")])]),t._v(" "),a("p",[t._v("If instead of the exception you just pass a message and let python do its magic, it will work:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'föö'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bar\nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<stdin>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" f\\xf6\\xf6\n\n")])])]),a("p",[t._v("As you can see we don't actually use "),a("code",[t._v("e")]),t._v(" in that case, the call to "),a("code",[t._v("logging.exception(...)")]),t._v(" magically formats the most recent exception.")]),t._v(" "),a("p",[a("strong",[t._v("Logging exceptions with non ERROR log levels")])]),t._v(" "),a("p",[t._v("If you want to log an exception with another log level than ERROR, you can use the the "),a("code",[t._v("exc_info")]),t._v(" argument of the default loggers:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exception occurred'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc_info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlogging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exception occurred'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc_info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlogging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exception occurred'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc_info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Accessing the exception's message")])]),t._v(" "),a("p",[t._v("Be aware that libraries out there might throw exceptions with messages as any of unicode or (utf-8 if you're lucky) byte-strings. If you really need to access an exception's text, the only reliable way, that will always work, is to use "),a("code",[t._v("repr(e)")]),t._v(" or the "),a("code",[t._v("%r")]),t._v(" string formatting:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'föö'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'received this exception: %r'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("received this exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'f\\xf6\\xf6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<stdin>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" f\\xf6\\xf6\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);