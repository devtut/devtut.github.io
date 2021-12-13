(window.webpackJsonp=window.webpackJsonp||[]).push([[2143],{2551:function(s,t,a){"use strict";a.r(t);var r=a(31),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"regular-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-expressions"}},[s._v("#")]),s._v(" Regular Expressions")]),s._v(" "),a("p",[s._v("A regular expression is a powerful way of specifying a pattern for a complex search.")]),s._v(" "),a("h2",{attrs:{id:"regexp-rlike"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp-rlike"}},[s._v("#")]),s._v(" REGEXP / RLIKE")]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("REGEXP")]),s._v(" (or its synonym, "),a("code",[s._v("RLIKE")]),s._v(") operator allows pattern matching based on regular expressions.")]),s._v(" "),a("p",[s._v("Consider the following "),a("code",[s._v("employee")]),s._v(" table:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------+-------------+-------------+--------------+----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" EMPLOYEE_ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FIRST_NAME  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" LAST_NAME   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PHONE_NUMBER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SALARY   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------+-------------+-------------+--------------+----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Steven      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" King        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("515.123")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4567")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24000.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Neena       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Kochhar     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("515.123")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4568")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17000.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Lex         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" De Haan     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("515.123")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4569")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17000.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("103")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Alexander   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Hunold      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("590.423")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4567")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Bruce       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Ernst       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("590.423")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4568")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("105")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" David       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Austin      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("590.423")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4569")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4800.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("106")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Valli       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Pataballa   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("590.423")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4560")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4800.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("107")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Diana       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Lorentz     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("590.423")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".5567")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4200.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("108")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Nancy       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Greenberg   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("515.124")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4569")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12000.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("109")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Daniel      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Faviet      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("515.124")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4169")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" John        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Chen        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("515.124")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4269")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8200.00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------+-------------+-------------+--------------+----------+")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pattern"}},[s._v("#")]),s._v(" Pattern ^")]),s._v(" "),a("p",[s._v("Select all employees whose "),a("code",[s._v("FIRST_NAME")]),s._v(" starts with "),a("strong",[s._v("N")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Query")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" FIRST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^N'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Pattern start with----------------------------^")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"pattern-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pattern-2"}},[s._v("#")]),s._v(" Pattern $**")]),s._v(" "),a("p",[s._v("Select all employees whose "),a("code",[s._v("PHONE_NUMBER")]),s._v(" ends with "),a("strong",[s._v("4569")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Query")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" PHONE_NUMBER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4569$'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Pattern end with----------------------------------^")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"not-regexp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-regexp"}},[s._v("#")]),s._v(" NOT REGEXP")]),s._v(" "),a("p",[s._v("Select all employees whose "),a("code",[s._v("FIRST_NAME")]),s._v(" "),a("strong",[s._v("does not")]),s._v(" start with "),a("strong",[s._v("N")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Query")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" FIRST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^N'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Pattern does not start with---------------^")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"regex-contain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regex-contain"}},[s._v("#")]),s._v(" Regex Contain")]),s._v(" "),a("p",[s._v("Select all employees whose "),a("code",[s._v("LAST_NAME")]),s._v(" contains "),a("strong",[s._v("in")]),s._v(" and whose "),a("code",[s._v("FIRST_NAME")]),s._v(" contains "),a("code",[s._v("a")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Query")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" FIRST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" LAST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'in'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- No ^ or $, pattern can be anywhere -------------------------------------^")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"any-character-between"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#any-character-between"}},[s._v("#")]),s._v(" Any character between [ ]")]),s._v(" "),a("p",[s._v("Select all employees whose "),a("code",[s._v("FIRST_NAME")]),s._v(" starts with "),a("strong",[s._v("A")]),s._v(" or "),a("strong",[s._v("B")]),s._v(" or "),a("strong",[s._v("C")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Query")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" FIRST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[ABC]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------------------------------------------^^---^")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"pattern-or"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pattern-or"}},[s._v("#")]),s._v(" Pattern or |")]),s._v(" "),a("p",[s._v("Select all employees whose "),a("code",[s._v("FIRST_NAME")]),s._v(" starts with "),a("strong",[s._v("A")]),s._v(" or "),a("strong",[s._v("B")]),s._v(" or "),a("strong",[s._v("C")]),s._v(" and ends with "),a("strong",[s._v("r")]),s._v(", "),a("strong",[s._v("e")]),s._v(", or "),a("strong",[s._v("i")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Query")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" FIRST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[ABC]|[rei]$'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ----------------------------------------------^^---^^^---^^")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"counting-regular-expression-matches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#counting-regular-expression-matches"}},[s._v("#")]),s._v(" Counting regular expression matches")]),s._v(" "),a("p",[s._v("Consider the following query:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" FIRST_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" FIRST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^N'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" matching "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees\n\n")])])]),a("p",[a("code",[s._v("FIRST_NAME REGEXP '^N'")]),s._v(" is "),a("strong",[s._v("1")]),s._v(" or "),a("strong",[s._v("0")]),s._v(" depending on the fact that "),a("code",[s._v("FIRST_NAME")]),s._v(" matches "),a("code",[s._v("^N")]),s._v(".")]),s._v(" "),a("p",[s._v("To visualize it better:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" \nFIRST_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FIRST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^N'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'matches ^N'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'does not match ^N'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" matching \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees\n\n")])])]),a("p",[s._v("Finally, count total number of matching and non-matching rows with:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FIRST_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^N'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'matches ^N'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'does not match ^N'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" matching"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" matching\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);