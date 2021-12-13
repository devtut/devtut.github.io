(window.webpackJsonp=window.webpackJsonp||[]).push([[2069],{2476:function(e,a,s){"use strict";s.r(a);var t=s(31),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"subqueries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subqueries"}},[e._v("#")]),e._v(" Subqueries")]),e._v(" "),s("h2",{attrs:{id:"subqueries-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subqueries-2"}},[e._v("#")]),e._v(" Subqueries")]),e._v(" "),s("p",[e._v("A subquery is a query within another SQL query. A subquery is also called inner query or inner select and the statement containing a subquery is called an outer query or outer select.")]),e._v(" "),s("p",[s("strong",[e._v("Note")])]),e._v(" "),s("ol",[s("li",[e._v("Subqueries must be enclosed within parenthesis,")]),e._v(" "),s("li",[e._v("An ORDER BY cannot be used in a subquery.")]),e._v(" "),s("li",[e._v("The image type such as BLOB, array, text datatypes are not allowed in subqueries.")])]),e._v(" "),s("p",[e._v("Subqueries can be used with select, insert, update and delete statement within where, from, select clause along with IN, comparison operators, etc.")]),e._v(" "),s("p",[e._v("We have a table named ITCompanyInNepal on which we will perform queries to show subqueries examples:")]),e._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/KcmNV.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/KcmNV.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Examples: "),s("strong",[e._v("SubQueries With Select Statement")])]),e._v(" "),s("p",[e._v("with "),s("strong",[e._v("In")]),e._v(" operator and "),s("strong",[e._v("where")]),e._v(" clause:")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" ITCompanyInNepal\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" Headquarter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("IN")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" Headquarter \n                      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" ITCompanyInNepal\n                      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" Headquarter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'USA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),s("p",[e._v("with "),s("strong",[e._v("comparison operator")]),e._v(" and "),s("strong",[e._v("where")]),e._v(" clause")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" ITCompanyInNepal\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" NumberOfEmployee "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("AVG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("NumberOfEmployee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" ITCompanyInNepal\n                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),s("p",[e._v("with "),s("strong",[e._v("select")]),e._v(" clause")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v("   CompanyName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         CompanyAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         Headquarter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Select")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("SUM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("NumberOfEmployee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" ITCompanyInNepal\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Where")]),e._v(" Headquarter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'USA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" TotalEmployeeHiredByUSAInKathmandu\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v("     ITCompanyInNepal \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v("    CompanyAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Kathmandu'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v(" Headquarter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'USA'")]),e._v("\n\n")])])]),s("p",[s("strong",[e._v("Subqueries with insert statement")])]),e._v(" "),s("p",[e._v("We have to insert data from IndianCompany table to ITCompanyInNepal. The table for IndianCompany is shown below:")]),e._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/rpGi5.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/rpGi5.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INSERT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" ITCompanyInNepal\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" IndianCompany\n\n")])])]),s("p",[s("strong",[e._v("Subqueries with update statement")])]),e._v(" "),s("p",[e._v("Suppose all the companies whose headquarter is USA decided to fire 50 employees from all US based companies of Nepal due to some change in policy of USA companies.")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UPDATE")]),e._v(" ITCompanyInNepal\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" NumberOfEmployee "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" NumberOfEmployee "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" Headquarter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("IN")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" Headquarter \n                      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" ITCompanyInNepal \n                      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" Headquarter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'USA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),s("p",[s("strong",[e._v("Subqueries with Delete Statement")])]),e._v(" "),s("p",[e._v("Suppose all the companies whose headquarter is Denmark decided to shutdown their companies from Nepal.")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DELETE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" ITCompanyInNepal\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" Headquarter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("IN")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" Headquarter \n                     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" ITCompanyInNepal\n                     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" Headquarter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Denmark'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);