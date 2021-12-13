(window.webpackJsonp=window.webpackJsonp||[]).push([[2357],{2765:function(s,t,a){"use strict";a.r(t);var e=a(31),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"limiting-the-rows-returned-by-a-query-pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limiting-the-rows-returned-by-a-query-pagination"}},[s._v("#")]),s._v(" Limiting the rows returned by a query (Pagination)")]),s._v(" "),a("h2",{attrs:{id:"get-first-n-rows-with-row-limiting-clause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-first-n-rows-with-row-limiting-clause"}},[s._v("#")]),s._v(" Get first N rows with row limiting clause")]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("FETCH")]),s._v(" clause was introduced in Oracle 12c R1:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("   val\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("     mytable\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FETCH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FIRST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROWS")]),s._v(" ONLY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("An example without FETCH that works also in earlier versions:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("   val\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("     mytable\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" ROWNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"pagination-in-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagination-in-sql"}},[s._v("#")]),s._v(" Pagination in SQL")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" val \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rownum "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" rnum\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" val\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   rownum_order_test\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" rownum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" :upper_limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  rnum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" :lower_limit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("this way we can paginate the table data , just like  web serch page")]),s._v(" "),a("h2",{attrs:{id:"get-n-numbers-of-records-from-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-n-numbers-of-records-from-table"}},[s._v("#")]),s._v(" Get N numbers of Records from table")]),s._v(" "),a("p",[s._v("We can limit no of rows from result using rownum clause")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  mytable\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n")])])]),a("p",[s._v("If we want first or last record then we want order by clause in inner query that will give result based on order.")]),s._v(" "),a("p",[a("strong",[s._v("Last Five Record :")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  mytable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n")])])]),a("p",[a("strong",[s._v("First Five Record")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  mytable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" val\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"get-row-n-through-m-from-many-rows-before-oracle-12c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-row-n-through-m-from-many-rows-before-oracle-12c"}},[s._v("#")]),s._v(" Get row N through M from many rows (before Oracle 12c)")]),s._v(" "),a("p",[s._v("Use the analytical function row_number():")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" col1\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" row_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("over")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" col1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" rn\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" col1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" N "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- N and M are both inclusive")]),s._v("\n\n")])])]),a("p",[s._v("Oracle 12c handles this more easily with "),a("code",[s._v("OFFSET")]),s._v(" and "),a("code",[s._v("FETCH")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"skipping-some-rows-then-taking-some"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skipping-some-rows-then-taking-some"}},[s._v("#")]),s._v(" Skipping some rows then taking some")]),s._v(" "),a("p",[s._v("In Oracle 12g+")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Col1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" TableName \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" Id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROWS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FETCH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NEXT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROWS")]),s._v(" ONLY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("In earlier Versions")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n   Col1\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           Col1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           row_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("over")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" RowNumber\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" TableName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" RowNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"skipping-some-rows-from-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skipping-some-rows-from-result"}},[s._v("#")]),s._v(" Skipping some rows from result")]),s._v(" "),a("p",[s._v("In Oracle 12g+")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Col1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" TableName \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" Id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROWS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("In earlier Versions")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n   Col1\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           Col1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           row_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("over")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" RowNumber\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" TableName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" RowNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);