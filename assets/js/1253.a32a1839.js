(window.webpackJsonp=window.webpackJsonp||[]).push([[1253],{1661:function(t,e,a){"use strict";a.r(e);var n=a(31),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"comments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[t._v("#")]),t._v(" Comments")]),t._v(" "),a("p",[t._v("Similar to other programming, markup, and markdown languages, comments in HTML provide other developers with development specific information without affecting the user interface. Unlike other languages however, HTML comments can be used to specify HTML elements for Internet Explorer only. This topic explains how to write HTML comments, and their functional applications.")]),t._v(" "),a("h2",{attrs:{id:"creating-comments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-comments"}},[t._v("#")]),t._v(" Creating comments")]),t._v(" "),a("p",[t._v("HTML comments can be used to leave notes to yourself or other developers about a specific point in code. They can be initiated with "),a("code",[t._v("\x3c!--")]),t._v(" and concluded with "),a("code",[t._v("--\x3e")]),t._v(", like so:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- I'm an HTML comment! --\x3e")]),t._v("\n\n")])])]),a("p",[t._v("They can be incorporated inline within other content:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This part will be displayed "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- while this will not be displayed --\x3e")]),t._v("."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("p",[t._v("They can also span multiple lines to provide more information:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- This is a multiline HTML comment.\n  Whatever is in here will not be rendered by the browser.\n  You can "comment out" entire sections of HTML code.\n--\x3e')]),t._v("\n\n")])])]),a("p",[t._v("However, they "),a("strong",[t._v("cannot")]),t._v(" appear within another HTML tag, like this:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\x3c!--")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("testAttribute")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(">This will not work"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("p",[t._v("This produces invalid HTML as the entire "),a("code",[t._v('<h1 \x3c!-- testAttribute="something" --\x3e')]),t._v(" block would be considered a single start tag "),a("code",[t._v("h1")]),t._v(" with some other invalid information contained within it, followed by a single "),a("code",[t._v(">")]),t._v(" closing bracket that does nothing.")]),t._v(" "),a("p",[t._v("For compatibility with tools that try to parse HTML as XML or SGML, the body of your comment should not contain two dashes "),a("code",[t._v("--")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"conditional-comments-for-internet-explorer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditional-comments-for-internet-explorer"}},[t._v("#")]),t._v(" Conditional comments for Internet Explorer")]),t._v(" "),a("p",[t._v('Conditional comments can be used to customize code for different versions of Microsoft Internet Explorer. For example, different HTML classes, script tags, or stylesheets can be provided. Conditional comments are supported in Internet Explorer versions 5 through 9. Older and newer Internet Explorer versions, and all non-IE browsers, are considered "downlevel" and treat conditional comments as ordinary HTML comments.')]),t._v(" "),a("h3",[t._v("Downlevel-hidden")]),t._v(" "),a("p",[t._v("Downlevel-hidden comments work by encapsulating the entire content within what appears to be a normal HTML comment. Only IE 5 through 9 will still read it as a conditional comment, and they will hide or display the content accordingly. In other browsers the content will be hidden.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--[if IE]>\n  Revealed in IE 5 through 9. Commented out and hidden in all other browsers.\n<![endif]--\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--[if lt IE 8]>\n  Revealed only in specified versions of IE 5-9 (here, IE less than 8).\n<![endif]--\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--[if !IE]>\n  Revealed in no browsers. Equivalent to a regular HTML comment.\n<![endif]--\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n  For purposes of comparison, this is a regular HTML comment.\n--\x3e")]),t._v("\n\n")])])]),a("h3",[t._v("Downlevel-revealed")]),t._v(" "),a("p",[t._v("These are slightly different than downlevel-hidden comments: only the conditional comment itself is contained within the normal comment syntax. Browsers which do not support conditional comments will simply ignore them and display the rest of the content between them.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--[if IE]>--\x3e")]),t._v("\n  The HTML inside this comment is revealed in IE 5-9, and in all other browsers.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--<![endif]--\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--[if IE 9]>--\x3e")]),t._v("\n  This is revealed in specified versions of IE 5-9, and in all other browsers.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--<![endif]--\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--[if !IE]>--\x3e")]),t._v("\n  This is not revealed in IE 5-9. It's still revealed in other browsers.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--<![endif]--\x3e")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"commenting-out-whitespace-between-inline-elements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commenting-out-whitespace-between-inline-elements"}},[t._v("#")]),t._v(" Commenting out whitespace between inline elements")]),t._v(" "),a("p",[t._v("Inline display elements, usually such as "),a("code",[t._v("span")]),t._v(" or "),a("code",[t._v("a")]),t._v(", will include up to one white-space character before and after them in the document. In order to avoid very long lines in the markup (that are hard to read) and unintentional white-space (which affects formatting), the white-space can be commented out.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Use an HTML comment to nullify the newline character below: --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I hope there will be no extra whitespace after this!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n--\x3e")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("p",[t._v("Try it without a comment between the inline elements, and there will be one space between them. Sometimes picking up the space character is desired.")]),t._v(" "),a("p",[t._v("Example code:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Use an HTML comment to nullify the newline character below: --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I hope there will be no extra whitespace after this!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n--\x3e")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Without it, you can notice a small formatting difference: --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I hope there will be no extra whitespace after this!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/LE9oM.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/LE9oM.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("\x3c!-- Comment text --\x3e")])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Anything starting with "),a("code",[t._v("\x3c!--")]),t._v(" and ending with "),a("code",[t._v("--\x3e")]),t._v(" is a comment. Comments cannot contain two adjacent dashes ("),a("code",[t._v("--")]),t._v("), and must end with exactly two dashes (i.e. "),a("code",[t._v("---\x3e")]),t._v(" is not correct).")]),t._v(" "),a("p",[t._v("Comments are not visible on a web page and cannot be styled with CSS. They can be used by the page's developer to make notes within the HTML, or to hide certain content during development.")]),t._v(" "),a("p",[t._v("For dynamic or interactive pages, hiding and showing content is done with JavaScript and CSS rather than with HTML comments.")]),t._v(" "),a("p",[t._v("JavaScript can be used to get the content of HTML comment nodes and these nodes can be dynamically created, added and removed from the document but this will not affect how the page is displayed.")]),t._v(" "),a("p",[t._v('Since HTML comments are part of the page\'s source code, they are downloaded to the browser along with the rest of the page. The source code can typically be viewed using the web browser\'s menu option to "View Source" or "View Page Source."')])])}),[],!1,null,null,null);e.default=s.exports}}]);