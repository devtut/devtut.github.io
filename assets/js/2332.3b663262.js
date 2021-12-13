(window.webpackJsonp=window.webpackJsonp||[]).push([[2332],{2740:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"collections-and-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections-and-records"}},[t._v("#")]),t._v(" Collections and Records")]),t._v(" "),a("h2",{attrs:{id:"use-a-collection-as-a-return-type-for-a-split-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-a-collection-as-a-return-type-for-a-split-function"}},[t._v("#")]),t._v(" Use a collection as a return type for a split function")]),t._v(" "),a("p",[t._v("It's necessary to declare the type; here "),a("code",[t._v("t_my_list")]),t._v("; a collection is a "),a("code",[t._v("TABLE OF")]),t._v(" "),a("strong",[a("code",[t._v("something")])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" t_my_list "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Here's the function. Notice the "),a("code",[t._v("()")]),t._v(" used as a kind of constructor, and the "),a("code",[t._v("COUNT")]),t._v(" and "),a("code",[t._v("EXTEND")]),t._v(" keywords that help you create and grow your collection;")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" cto_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p_sep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" Varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" t_my_list\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--- this function takes a string list, element being separated by p_sep")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--                                                         as separator")]),t._v("\n  l_string VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" p_sep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  l_sep_index PLS_INTEGER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  l_index PLS_INTEGER :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  l_tab t_my_list     :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t_my_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n    l_sep_index :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" INSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p_sep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXIT")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" l_sep_index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    l_tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EXTEND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    l_tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l_tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COUNT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TRIM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SUBSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l_sep_index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" l_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    l_index            :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l_sep_index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" l_tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" cto_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n\n")])])]),a("p",[t._v("Then you can see the content of the collection with the "),a("code",[t._v("TABLE()")]),t._v(" function from SQL; it can be used as a list inside a SQL "),a("code",[t._v("IN ( ..)")]),t._v(" statement:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" A_TABLE \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" A_COLUMN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cto_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'|'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a|b|c|d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--- gives the records where A_COLUMN in ('a', 'b', 'c', 'd') --")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);