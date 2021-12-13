(window.webpackJsonp=window.webpackJsonp||[]).push([[2333],{2741:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"constraints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[t._v("#")]),t._v(" constraints")]),t._v(" "),s("h2",{attrs:{id:"update-foreign-keys-with-new-value-in-oracle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-foreign-keys-with-new-value-in-oracle"}},[t._v("#")]),t._v(" Update foreign keys with new value in Oracle")]),t._v(" "),s("p",[t._v('Suppose you have a table and you want to change one of this table primary id. you can use the following scrpit. primary ID here is "PK_S"')]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" user_constraints a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user_cons_columns c\n             "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CONSTRAINT_TYPE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'R'")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("R_CONSTRAINT_NAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PK_S'")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("loop")]),t._v("\n  \n                     \n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("execute")]),t._v(" immediate "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' set '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=to_number(''1000'' || '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("  i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              \n                    \n                     \n \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("loop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"disable-all-related-foreign-keys-in-oracle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-all-related-foreign-keys-in-oracle"}},[t._v("#")]),t._v(" Disable all related foreign keys in oracle")]),t._v(" "),s("p",[t._v('Suppose you have the table T1 and it has relation with many tables and its primary key constraint name is "pk_t1" you want to disable these foreign keys you can use:')]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Begin")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" I "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraint_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" user_constraint t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("   r_constraint_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pk_t1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("loop")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Execute")]),t._v(" immediate "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' alter table '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" I"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' disable constraint '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("loop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ufeff\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);