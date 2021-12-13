(window.webpackJsonp=window.webpackJsonp||[]).push([[3425],{3833:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frequently-used-string-manipulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frequently-used-string-manipulation"}},[t._v("#")]),t._v(" Frequently used string manipulation")]),t._v(" "),a("p",[t._v("Quick examples for MID LEFT and RIGHT string functions using INSTR FIND and LEN.")]),t._v(" "),a("p",[t._v("How do you find the text between two search terms (Say: after a colon and before a comma)?\nHow do you get the remainder of a word (using MID or using RIGHT)? Which of these functions use Zero-based params and return codes vs One-based? What happens when things go wrong? How do they handle empty strings, unfound results and negative numbers?")]),t._v(" "),a("h2",{attrs:{id:"string-manipulation-frequently-used-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-manipulation-frequently-used-examples"}},[t._v("#")]),t._v(" String manipulation frequently used examples")]),t._v(" "),a("p",[t._v("Better MID() and other string extraction examples, currently lacking from the web. Please help me make a good example, or complete this one here. Something like this:")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DIM")]),t._v(" strEmpty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strNull "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" theText "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DIM")]),t._v(" idx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DIM")]),t._v(" letterCount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DIM")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n\nstrNull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NOTHING")]),t._v("\nstrEmpty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ntheText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234, 78910"')]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' -----------------")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' Extract the word after the comma ", "  and before "910"  result: "78" ***')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' -----------------")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Get index (place) of comma using INSTR")]),t._v("\nidx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' some explanation here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" idx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' check if no comma found in text")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' or get index of comma using FIND")]),t._v("\nidx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' some explanation here... Note: The difference is...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" idx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' check if no comma found in text")]),t._v("\n\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Retrieve remaining word after the comma")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" idx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" idx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Get word until the comma using LEFT")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LEFT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" idx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Get remaining text after the comma-and-space using RIGHT")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' What happens when things go wrong")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strNothing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' this causes ...")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strEmpty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' which causes...")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' and now...")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' no worries...")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nidx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" INSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strNothing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nidx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" INSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strNothing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nidx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" INSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strEmpty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \ni "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strEmpty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \ni "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strNothing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'...")]),t._v("\n\n")])])]),a("p",[t._v("Please feel free to edit this example and make it better. As long as it remains clear, and has in it common usage practices.")])])}),[],!1,null,null,null);s.default=e.exports}}]);