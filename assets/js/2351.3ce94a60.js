(window.webpackJsonp=window.webpackJsonp||[]).push([[2351],{2759:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hierarchical-retrieval-with-oracle-database-12c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hierarchical-retrieval-with-oracle-database-12c"}},[t._v("#")]),t._v(" Hierarchical Retrieval With Oracle Database 12C")]),t._v(" "),s("p",[t._v("You can use hierarchical queries to retrieve data based on a natural hierarchical relationship between rows in a table")]),t._v(" "),s("h2",{attrs:{id:"using-the-connect-by-caluse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-connect-by-caluse"}},[t._v("#")]),t._v(" Using the CONNECT BY Caluse")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EMPLOYEE_ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LAST_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MANAGER_ID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" HR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EMPLOYEES E\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONNECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" PRIOR E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EMPLOYEE_ID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MANAGER_ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("The "),s("code",[t._v("CONNECT BY")]),t._v(" clause to define the relationship between employees and managers.")]),t._v(" "),s("h2",{attrs:{id:"specifying-the-direction-of-the-query-from-the-top-down"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specifying-the-direction-of-the-query-from-the-top-down"}},[t._v("#")]),t._v(" Specifying the Direction of the Query From the Top Down")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LAST_NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' reports to '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\nPRIOR E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LAST_NAME "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Walk Top Down"')]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" HR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EMPLOYEES E\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("START")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MANAGER_ID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONNECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" PRIOR E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EMPLOYEE_ID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MANAGER_ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);