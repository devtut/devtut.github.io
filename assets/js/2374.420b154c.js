(window.webpackJsonp=window.webpackJsonp||[]).push([[2374],{2782:function(t,s,a){"use strict";a.r(s);var e=a(31),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"working-with-dates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-dates"}},[t._v("#")]),t._v(" Working with Dates")]),t._v(" "),a("h2",{attrs:{id:"date-arithmetic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-arithmetic"}},[t._v("#")]),t._v(" Date Arithmetic")]),t._v(" "),a("p",[t._v("Oracle supports "),a("code",[t._v("DATE")]),t._v(" (includes time to the nearest second) and "),a("code",[t._v("TIMESTAMP")]),t._v(" (includes time to fractions of a second) datatypes, which allow arithmetic (addition and subtraction) natively. For example:")]),t._v(" "),a("p",[t._v("To get the next day:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tomorrow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("To get the previous day:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" yesterday "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("To add 5 days to the current date:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" five_days_from_now "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("To add 5 hours to the current date:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH24:MI:SS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" five_hours_from_now "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("To add 10 minutes to the current date:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH24:MI:SS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ten_mintues_from_now "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("To add 7 seconds to the current date:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH24:MI:SS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" seven_seconds_from_now "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("To select rows where "),a("code",[t._v("hire_date")]),t._v(" is 30 days ago or more:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" hire_date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("To select rows where "),a("code",[t._v("last_updated")]),t._v(" column is in the last hour:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" logfile "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" last_updated "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Oracle also provides the built-in datatype "),a("code",[t._v("INTERVAL")]),t._v(" which represents a duration of time (e.g. 1.5 days, 36 hours, 2 months, etc.). These can also be used with arithmetic with "),a("code",[t._v("DATE")]),t._v(" and "),a("code",[t._v("TIMESTAMP")]),t._v(" expressions. For example:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" logfile "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" last_updated "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interval")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"add-months-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-months-function"}},[t._v("#")]),t._v(" Add_months function")]),t._v(" "),a("p",[t._v("Syntax: "),a("code",[t._v("add_months(p_date, integer) return date;")])]),t._v(" "),a("p",[t._v("Add_months function adds amt months to p_date date.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" add_months"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2015-01-12'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("M")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2015-03-12")])])])]),t._v(" "),a("p",[t._v("You can also substract months using a negative "),a("code",[t._v("amt")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" add_months"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2015-01-12'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("M")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2014-11-12")])])])]),t._v(" "),a("p",[t._v("When the calculated month has fewer days as the given date, the last day of the calculated month will be returned.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" add_months"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2015-01-31'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("M")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2015-02-28")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);