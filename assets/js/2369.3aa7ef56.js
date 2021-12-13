(window.webpackJsonp=window.webpackJsonp||[]).push([[2369],{2777:function(s,a,t){"use strict";t.r(a);var e=t(31),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"string-manipulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string-manipulation"}},[s._v("#")]),s._v(" String Manipulation")]),s._v(" "),t("h2",{attrs:{id:"initcap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initcap"}},[s._v("#")]),s._v(" INITCAP")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("INITCAP")]),s._v(" function converts the case of a string so that each word starts with a capital letter and all subsequent letters are in lowercase.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" INITCAP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HELLO mr macdonald!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" NEW "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" dual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Output")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("NEW\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------------")]),s._v("\nHello Mr Macdonald"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"concatenation-operator-or-concat-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concatenation-operator-or-concat-function"}},[s._v("#")]),s._v(" Concatenation: Operator || or concat() function")]),s._v(" "),t("p",[s._v("The Oracle SQL and PL/SQL "),t("code",[s._v("||")]),s._v(" operator allows you to concatenate 2 or more strings together.")]),s._v(" "),t("p",[t("strong",[s._v("Example:")])]),s._v(" "),t("p",[s._v("Assuming the following "),t("code",[s._v("customers")]),s._v(" table:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nid  firstname    lastname\n---  -----------  ----------\n  1  Thomas       Woody\n\n")])])]),t("p",[s._v("Query:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nSELECT firstname || ' ' || lastname || ' is in my database.' as \"My Sentence\" \n   FROM customers;\n\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("My Sentence\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------------")]),s._v("\nThomas Woody "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" my "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])])]),t("p",[s._v("Oracle also supports the standard SQL "),t("code",[s._v("CONCAT(str1, str2)")]),s._v(" function:")]),s._v(" "),t("p",[t("strong",[s._v("Example:")])]),s._v(" "),t("p",[s._v("Query:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nSELECT CONCAT(firstname, ' is in my database.') from customers;\n\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("Expr1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------------")]),s._v("\nThomas "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" my "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"upper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upper"}},[s._v("#")]),s._v(" UPPER")]),s._v(" "),t("p",[s._v("The UPPER function allows you to convert all lowercase letters in a string to uppercase.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" UPPER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'My text 123!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" dual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("RESULT    \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------")]),s._v("\nMY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEXT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"lower"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lower"}},[s._v("#")]),s._v(" LOWER")]),s._v(" "),t("p",[s._v("LOWER converts all uppercase letters in a string to lowercase.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" LOWER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HELLO World123!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" dual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Outputs:")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("text")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("hello world123!")])])])]),s._v(" "),t("h2",{attrs:{id:"regular-expression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regular-expression"}},[s._v("#")]),s._v(" Regular expression")]),s._v(" "),t("p",[s._v("Let's say we want to replace only numbers with 2 digits: regular expression will find them with "),t("code",[s._v("(\\d\\d)")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" REGEXP_REPLACE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2, 5, and 10 are numbers in this example'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(\\d\\d)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" dual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Results in:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2, 5, and # are numbers in this example'")]),s._v("\n\n")])])]),t("p",[s._v("If I want to swap parts of the text, I use "),t("code",[s._v("\\1")]),s._v(", "),t("code",[s._v("\\2")]),s._v(", "),t("code",[s._v("\\3")]),s._v(" to call for the matched strings:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nSELECT REGEXP_REPLACE ('swap around 10 in that one ', '(.*)(\\d\\d )(.*)', '\\3\\2\\1\\3')\n FROM dual;\n\n")])])]),t("h2",{attrs:{id:"substr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#substr"}},[s._v("#")]),s._v(" SUBSTR")]),s._v(" "),t("p",[t("code",[s._v("SUBSTR")]),s._v(" retrieves part of a string by indicating the starting position and the number of characters to extract")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SUBSTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abcdefg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" DUAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("returns:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("bcd\n\n")])])]),t("p",[s._v("To count from the end of the string, "),t("code",[s._v("SUBSTR")]),s._v(" accepts a negative number as the second parameter, e.g.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SUBSTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abcdefg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" DUAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("returns:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("de\n\n")])])]),t("p",[s._v("To get the last character in a string: "),t("code",[s._v("SUBSTR(mystring,-1,1)")])]),s._v(" "),t("h2",{attrs:{id:"ltrim-rtrim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ltrim-rtrim"}},[s._v("#")]),s._v(" LTRIM / RTRIM")]),s._v(" "),t("p",[t("code",[s._v("LTRIM")]),s._v(" and "),t("code",[s._v("RTRIM")]),s._v(" remove characters from the beginning or the end (respectively) of a string. A set of one or more characters may be supplied (default is a space) to remove.")]),s._v(" "),t("p",[s._v("For example,")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" LTRIM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<===>HELLO<===>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'=<>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("RTRIM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<===>HELLO<===>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'=<>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Returns:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("HELLO"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("HELLO\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);