(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{903:function(t,s,e){"use strict";e.r(s);var a=e(31),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"decoding-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decoding-url"}},[t._v("#")]),t._v(" Decoding URL")]),t._v(" "),e("h2",{attrs:{id:"simple-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-example"}},[t._v("#")]),t._v(" Simple example")]),t._v(" "),e("p",[e("strong",[t._v("Encoded URL")])]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("http%3A%2F%2Fwww.foo.com%2Findex.php%3Fid%3Dqwerty")]),t._v(" "),e("p",[e("strong",[t._v("Use this command to decode the URL")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http%3A%2F%2Fwww.foo.com%2Findex.php%3Fid%3Dqwerty"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s/%\\([0-9A-F][0-9A-F]\\)/'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("\\x"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[t._v("\\1")]),t._v('/g"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" -0 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e\n\n")])])]),e("p",[e("strong",[t._v("Decoded URL (result of command)")])]),t._v(" "),e("blockquote"),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.foo.com/index.php?id=qwerty",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.foo.com/index.php?id=qwerty"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"using-printf-to-decode-a-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-printf-to-decode-a-string"}},[t._v("#")]),t._v(" Using printf to decode a string")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!bin/bash")]),t._v("\n    \n$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Question%20-%20%22how%20do%20I%20decode%20a%20percent%20encoded%20string%3F%22%0AAnswer%20%20%20-%20Use%20printf%20%3A)'")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%b\\n'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${string"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\\\x}")]),t._v('"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the result")]),t._v("\nQuestion - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"how do I decode a percent encoded string?"')]),t._v("\nAnswer   - Use "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);