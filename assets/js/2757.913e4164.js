(window.webpackJsonp=window.webpackJsonp||[]).push([[2757],{3165:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"os-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-path"}},[t._v("#")]),t._v(" os.path")]),t._v(" "),a("p",[t._v("This module implements some useful functions on pathnames. The path parameters can be passed as either strings, or bytes. Applications are encouraged to represent file names as (Unicode) character strings.")]),t._v(" "),a("h2",{attrs:{id:"join-paths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#join-paths"}},[t._v("#")]),t._v(" Join Paths")]),t._v(" "),a("p",[t._v("To join two or more path components together, firstly import os module of python and then use following:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("The advantage of using os.path is that it allows code to remain compatible over all operating systems, as this uses the separator appropriate for the platform it's running on.")]),t._v(" "),a("p",[t._v("For example, the result of this command on Windows will be:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a\\b\\c'")]),t._v("\n\n")])])]),a("p",[t._v("In an Unix OS:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a/b/c'")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"path-component-manipulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-component-manipulation"}},[t._v("#")]),t._v(" Path Component Manipulation")]),t._v(" "),a("p",[t._v("To split one component off of the path:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/csaftoiu/tmp/foo.txt'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/csaftoiu/tmp'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.txt'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/csaftoiu/tmp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("splitext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"absolute-path-from-relative-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#absolute-path-from-relative-path"}},[t._v("#")]),t._v(" Absolute Path from Relative Path")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("os.path.abspath")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/csaftoiu/tmp'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/csaftoiu/tmp/foo'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/csaftoiu/foo'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"get-the-parent-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-parent-directory"}},[t._v("#")]),t._v(" Get the parent directory")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PATH_TO_GET_THE_PARENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pardir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"if-the-given-path-exists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-the-given-path-exists"}},[t._v("#")]),t._v(" If the given path exists.")]),t._v(" "),a("p",[t._v("to check if the given path exists")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/john/temp'")]),t._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#this returns false if path doesn't exist or if the path is a broken symbolic link")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"check-if-the-given-path-is-a-directory-file-symbolic-link-mount-point-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-if-the-given-path-is-a-directory-file-symbolic-link-mount-point-etc"}},[t._v("#")]),t._v(" check if the given path is a directory, file, symbolic link, mount point etc.")]),t._v(" "),a("p",[t._v("to check if the given path is a directory")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/john/python'")]),t._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("to check if the given path is a file")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main.py'")]),t._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("to check if the given path is "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Symbolic_link",target:"_blank",rel:"noopener noreferrer"}},[t._v("symbolic link"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("symlink "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some_sym_link'")]),t._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("islink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("symlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("to check if the given path is a "),a("a",{attrs:{href:"http://www.linuxtopia.org/online_books/introduction_to_linux/linux_Mount_points.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mount point"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("mount_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),t._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ismount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mount_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("os.path.join(a, *p)")]),t._v(" "),a("li",[t._v("os.path.basename(p)")]),t._v(" "),a("li",[t._v("os.path.dirname(p)")]),t._v(" "),a("li",[t._v("os.path.split(p)")]),t._v(" "),a("li",[t._v("os.path.splitext(p)")])])])}),[],!1,null,null,null);s.default=e.exports}}]);