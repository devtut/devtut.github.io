(window.webpackJsonp=window.webpackJsonp||[]).push([[2831],{3239:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"type-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-hints"}},[t._v("#")]),t._v(" Type Hints")]),t._v(" "),a("h2",{attrs:{id:"adding-types-to-a-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-types-to-a-function"}},[t._v("#")]),t._v(" Adding types to a function")]),t._v(" "),a("p",[t._v("Let's take an example of a function which receives two arguments and returns a value indicating their sum:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("two_sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n\n")])])]),a("p",[t._v("By looking at this code, one can not safely and without doubt indicate the type of the arguments for function "),a("code",[t._v("two_sum")]),t._v(". It works both when supplied with "),a("code",[t._v("int")]),t._v(" values:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("two_sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# result: 3")]),t._v("\n\n")])])]),a("p",[t._v("and with strings:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("two_sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# result: "ab"')]),t._v("\n\n")])])]),a("p",[t._v("and with other values, such as "),a("code",[t._v("list")]),t._v("s, "),a("code",[t._v("tuple")]),t._v("s et cetera.")]),t._v(" "),a("p",[t._v("Due to this dynamic nature of python types, where many are applicable for a given operation, any type checker would not be able to reasonably assert whether a call for this function should be allowed or not.")]),t._v(" "),a("p",[t._v("To assist our type checker we can now provide type hints for it in the Function definition indicating the type that we allow.")]),t._v(" "),a("p",[t._v("To indicate that we only want to allow "),a("code",[t._v("int")]),t._v(" types we can change our function definition to look like:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("two_sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n\n")])])]),a("p",[t._v("Annotations follow the argument name and are separated by a "),a("code",[t._v(":")]),t._v(" character.")]),t._v(" "),a("p",[t._v("Similarly, to indicate only "),a("code",[t._v("str")]),t._v(" types are allowed, we'd change our function to specify it:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("two_sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n\n")])])]),a("p",[t._v("Apart from specifying the type of the arguments, one could also indicate the return value of a function call. This is done by adding the "),a("code",[t._v("->")]),t._v(" character followed by the type after the closing parenthesis in the argument list "),a("strong",[t._v("but")]),t._v(" before the "),a("code",[t._v(":")]),t._v(" at the end of the function declaration:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("two_sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n\n")])])]),a("p",[t._v("Now we've indicated that the return value when calling "),a("code",[t._v("two_sum")]),t._v(" should be of type "),a("code",[t._v("int")]),t._v(". Similarly we can define appropriate values for "),a("code",[t._v("str")]),t._v(", "),a("code",[t._v("float")]),t._v(", "),a("code",[t._v("list")]),t._v(", "),a("code",[t._v("set")]),t._v(" and others.")]),t._v(" "),a("p",[t._v("Although type hints are mostly used by type checkers and IDEs, sometimes you may need to retrieve them. This can be done using the "),a("code",[t._v("__annotations__")]),t._v(" special attribute:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("two_sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__annotations__\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {'a': <class 'int'>, 'b': <class 'int'>, 'return': <class 'int'>}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"generic-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generic-types"}},[t._v("#")]),t._v(" Generic Types")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://docs.python.org/3/library/typing.html#typing.TypeVar",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("typing.TypeVar")]),a("OutboundLink")],1),t._v(" is a generic type factory. It's primary goal is to serve as a parameter/placeholder for generic function/class/method annotations:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" typing\n\nT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" typing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TypeVar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_first_element")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" typing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sequence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Gets the first element of a sequence."""')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"namedtuple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namedtuple"}},[t._v("#")]),t._v(" NamedTuple")]),t._v(" "),a("p",[t._v("Creating a namedtuple with type hints is done using the function NamedTuple from the "),a("code",[t._v("typing")]),t._v(" module:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" typing\nPoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" typing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NamedTuple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Point'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Note that the name of the resulting type is the first argument to the function, but it should be assigned to a variable with the same name to ease the work of type checkers.")]),t._v(" "),a("h2",{attrs:{id:"variables-and-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables-and-attributes"}},[t._v("#")]),t._v(" Variables and Attributes")]),t._v(" "),a("p",[t._v("Variables are annotated using comments:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type: int")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" negate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a type-checker might catch this error'")]),t._v("\n\n")])])]),a("p",[t._v("Starting from Python 3.6, there is also "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0526/",target:"_blank",rel:"noopener noreferrer"}},[t._v("new syntax for variable annotations"),a("OutboundLink")],1),t._v(". The code above might use the form")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n")])])]),a("p",[t._v("Unlike with comments, it is also possible to just add a type hint to a variable that was not previously declared, without setting a value to it:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n")])])]),a("p",[t._v("Additionally if these are used in the module or the class level, the type hints can be retrieved using "),a("code",[t._v("typing.get_type_hints(class_or_module)")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("typing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_type_hints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ChainMap({'x': <class 'int'>, 'y': <class 'str'>}, {})")]),t._v("\n\n")])])]),a("p",[t._v("Alternatively, they can be accessed by using the "),a("code",[t._v("__annotations__")]),t._v(" special variable or attribute:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__annotations__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {'x': <class 'int'>}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__annotations__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {'s': <class 'str'>}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"class-members-and-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-members-and-methods"}},[t._v("#")]),t._v(" Class Members and Methods")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type: float")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        self should not be annotated\n        init should be annotated to return None\n        """')]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n    \n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@classmethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        cls should not be annotated\n        Use forward reference to refer to current class with string literal \'A\'\n        """')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Forward reference of the current class is needed since annotations are evaluated when the function is defined. Forward references can also be used when referring to a class that would cause a circular import if imported.")]),t._v(" "),a("h2",{attrs:{id:"type-hints-for-keyword-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-hints-for-keyword-arguments"}},[t._v("#")]),t._v(" Type hints for keyword arguments")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Note the spaces around the equal sign as opposed to how keyword arguments are usually styled.")]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("typing.Callable[[int, str], None] -> def func(a: int, b: str) -> None")]),t._v(" "),a("li",[t._v('typing.Mapping[str, int] -> {"a": 1, "b": 2, "c": 3}')]),t._v(" "),a("li",[t._v("typing.List[int] -> [1, 2, 3]")]),t._v(" "),a("li",[t._v("typing.Set[int] -> {1, 2, 3}")]),t._v(" "),a("li",[t._v("typing.Optional[int] -> None or int")]),t._v(" "),a("li",[t._v("typing.Sequence[int] -> [1, 2, 3] or (1, 2, 3)")]),t._v(" "),a("li",[t._v("typing.Any -> Any type")]),t._v(" "),a("li",[t._v('typing.Union[int, str] -> 1 or "1"')]),t._v(" "),a("li",[t._v("T = typing.TypeVar('T') -> Generic type")])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Type Hinting, as specified in "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0484",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("PEP 484")]),a("OutboundLink")],1),t._v(", is a formalized solution to statically indicate the type of a value for Python Code. By appearing alongside the "),a("code",[t._v("typing")]),t._v(" module, type-hints offer Python users the capability to annotate their code thereby assisting type checkers while, indirectly, documenting their code with more information.")])])}),[],!1,null,null,null);s.default=e.exports}}]);