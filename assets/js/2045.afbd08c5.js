(window.webpackJsonp=window.webpackJsonp||[]).push([[2045],{2453:function(s,t,a){"use strict";a.r(t);var e=a(31),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"query-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-hints"}},[s._v("#")]),s._v(" Query Hints")]),s._v(" "),a("h2",{attrs:{id:"join-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#join-hints"}},[s._v("#")]),s._v(" JOIN Hints")]),s._v(" "),a("p",[s._v("When you join two tables, SQL Server query optimizer (QO) can choose different types of joins that will be used in query:")]),s._v(" "),a("ul",[a("li",[s._v("HASH join")]),s._v(" "),a("li",[s._v("LOOP join")]),s._v(" "),a("li",[s._v("MERGE join")])]),s._v(" "),a("p",[s._v("QO will explore plans and choose the optimal operator for joining tables. However, if you are sure that you know what would be the optimal join operator, you can specify what kind of JOIN should be used.\nInner LOOP join will force QO to choose Nested loop join while joining two tables:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("top")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Orders o \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("loop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderLines ol \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderID\n\n")])])]),a("p",[s._v("inner merge join will force MERGE join operator:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("top")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Orders o \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("merge")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderLines ol \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderID\n\n")])])]),a("p",[s._v("inner hash join will force HASH join operator:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("top")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Orders o \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderLines ol \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderID\n\n")])])]),a("h2",{attrs:{id:"group-by-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-by-hints"}},[s._v("#")]),s._v(" GROUP BY Hints")]),s._v(" "),a("p",[s._v("When you use GROUP BY clause, SQL Server query optimizer (QO) can choose different types of grouping operators:")]),s._v(" "),a("ul",[a("li",[s._v("HASH Aggregate that creates hash-map for grouping entries")]),s._v(" "),a("li",[s._v("Stream Aggregate that works well with pre-ordered inputs")])]),s._v(" "),a("p",[s._v("You can explicitly require that QO picks one or another aggregate operator if you know what would be the optimal.\nWith OPTION (ORDER GROUP), QO will always choose Stream aggregate and add Sort operator in front of Stream aggregate if input is not sorted:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" OrderID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderLines\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" OrderID\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n")])])]),a("p",[s._v("With OPTION (HASH GROUP), QO will always choose Hash aggregate :")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" OrderID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderLines\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" OrderID\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HASH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n")])])]),a("h2",{attrs:{id:"fast-rows-hint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-rows-hint"}},[s._v("#")]),s._v(" FAST rows hint")]),s._v(" "),a("p",[s._v("Specifies that the query is optimized for fast retrieval of the first number_rows. This is a nonnegative integer. After the first number_rows are returned, the query continues execution and produces its full result set.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" OrderID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderLines\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" OrderID\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FAST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n")])])]),a("h2",{attrs:{id:"union-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#union-hints"}},[s._v("#")]),s._v(" UNION hints")]),s._v(" "),a("p",[s._v("When you use UNION operator on two query results, Query optimizer (QO) can use following operators to create a union of two result sets:")]),s._v(" "),a("ul",[a("li",[s._v("Merge (Union)")]),s._v(" "),a("li",[s._v("Concat (Union)")]),s._v(" "),a("li",[s._v("Hash Match (Union)")])]),s._v(" "),a("p",[s._v("You can explicitly specify what operator should be used using OPTION() hint:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" OrderID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OrderDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ExpectedDeliveryDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Comments\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" OrderDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" DATEADD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" PurchaseOrderID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" OrderID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OrderDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ExpectedDeliveryDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Comments\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Purchasing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PurchaseOrders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" OrderDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" DATEADD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HASH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- or OPTION(CONCAT UNION)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- or OPTION(MERGE UNION)")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"maxdop-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxdop-option"}},[s._v("#")]),s._v(" MAXDOP Option")]),s._v(" "),a("p",[s._v("Specifies the max degree of parallelism for the query specifying this option.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" OrderID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderLines\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" OrderID\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MAXDOP "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("This option overrides the MAXDOP configuration option of sp_configure and Resource Governor. If MAXDOP is set to zero then the server chooses the max degree of parallelism.")]),s._v(" "),a("h2",{attrs:{id:"index-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-hints"}},[s._v("#")]),s._v(" INDEX Hints")]),s._v(" "),a("p",[s._v("Index hints are used to force a query to use a specific index, instead of allowing SQL Server's Query Optimizer to choose what it deems the best index. In some cases you may gain benefits by specifying the index a query must use. Usually SQL Server's Query Optimizer chooses the best index suited for the query, but due to missing/outdated statistics or specific needs you can force it.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mytable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ix_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" field1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" CreationDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'20170101'")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);