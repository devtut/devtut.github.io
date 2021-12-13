(window.webpackJsonp=window.webpackJsonp||[]).push([[2153],{2561:function(a,t,s){"use strict";s.r(t);var e=s(31),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"temporary-tables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#temporary-tables"}},[a._v("#")]),a._v(" Temporary Tables")]),a._v(" "),s("h2",{attrs:{id:"create-temporary-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-temporary-table"}},[a._v("#")]),a._v(" Create Temporary Table")]),a._v(" "),s("p",[a._v("Temporary tables could be very useful to keep temporary data. Temporary tables option is available in MySQL version 3.23 and above.")]),a._v(" "),s("p",[a._v("Temporary table will be automatically destroyed when the session ends or connection is closed. The user can also drop temporary table.")]),a._v(" "),s("p",[a._v("Same temporary table name can be used in many connections at the same time, because the temporary table is only available and accessible by the client who creates that table.")]),a._v(" "),s("p",[a._v("The temporary table can be created in the following types")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("---\x3eBasic temporary table creation")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEMPORARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" tempTable1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n       id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AUTO_INCREMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n       title "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("---\x3eTemporary table creation from select query")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEMPORARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" tempTable1\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" ColumnName1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ColumnName2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[a._v("You can add indexes as you build the table:")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEMPORARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" tempTable1\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ColumnName2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" ColumnName1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ColumnName2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[s("code",[a._v("IF NOT EXISTS")]),a._v(" key word can be used as mentioned below to avoid "),s("strong",[a._v("'table already exists'")]),a._v(" error. But in that case table will not be created, if the table name which you are using already exists in your current session.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEMPORARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" tempTable1\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" ColumnName1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ColumnName2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"drop-temporary-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drop-temporary-table"}},[a._v("#")]),a._v(" Drop Temporary Table")]),a._v(" "),s("p",[a._v("Drop Temporary Table is used to delete the temporary table which you are created in your current session.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEMPORARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" tempTable1\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEMPORARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" tempTable1\n\n")])])]),s("p",[a._v("Use "),s("code",[a._v("IF EXISTS")]),a._v(" to prevent an error occurring for tables that may not exist")])])}),[],!1,null,null,null);t.default=r.exports}}]);