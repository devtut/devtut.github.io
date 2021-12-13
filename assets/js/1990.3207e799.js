(window.webpackJsonp=window.webpackJsonp||[]).push([[1990],{2398:function(t,s,a){"use strict";a.r(s);var r=a(31),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cursors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cursors"}},[t._v("#")]),t._v(" Cursors")]),t._v(" "),a("h2",{attrs:{id:"basic-forward-only-cursor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-forward-only-cursor"}},[t._v("#")]),t._v(" Basic Forward Only Cursor")]),t._v(" "),a("p",[t._v("Normally you would want to avoid using cursors as they can have negative impacts on performance. However in some special cases you may need to loop through your data record by record and perform some action.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@orderId")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- here we are creating our cursor, as a local cursor and only allowing ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- forward operations")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" rowCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURSOR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCAL")]),t._v(" FAST_FORWARD "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- this is the query that we want to loop through record by record")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OrderId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- first we need to open the cursor")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OPEN")]),t._v(" rowCursor\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- now we will initialize the cursor by pulling the first row of data, in this example the [OrderId] column,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- and storing the value into a variable called @orderId")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FETCH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NEXT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" rowCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@orderId")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- start our loop and keep going until we have no more records to loop through")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHILE")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@FETCH_STATUS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRINT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@orderId")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- this is important, as it tells SQL Server to get the next record and store the [OrderId] column value into the @orderId variable")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FETCH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NEXT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" rowCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@orderId")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- this will release any memory used by the cursor")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CLOSE")]),t._v(" rowCursor\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEALLOCATE")]),t._v(" rowCursor\n\n")])])]),a("h2",{attrs:{id:"rudimentary-cursor-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rudimentary-cursor-syntax"}},[t._v("#")]),t._v(" Rudimentary cursor syntax")]),t._v(" "),a("p",[t._v("A simple cursor syntax, operating on a few example test rows:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Prepare test data */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@test_table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    Id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@test_table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Baz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Test data prepared */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Iterator variable @myId, for example sake */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@myId")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Cursor to iterate rows and assign values to variables */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" myCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURSOR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" Id\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@test_table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Start iterating rows */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OPEN")]),t._v(" myCursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FETCH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NEXT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" myCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@myId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* @@FETCH_STATUS global variable will be 1 / true until there are no more rows to fetch */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHILE")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@FETCH_STATUS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Write operations to perform in a loop here. Simple SELECT used for example */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Val\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@test_table")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" Id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@myId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Set variable(s) to the next value returned from iterator; this is needed otherwise the cursor will loop infinitely. */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FETCH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NEXT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" myCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@myId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* After all is done, clean up */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CLOSE")]),t._v(" myCursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEALLOCATE")]),t._v(" myCursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Results from SSMS. Note that these are all separate queries, they are in no way unified. Notice how the query engine processes each iteration one by one instead of as a set.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("Val")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("Foo")])]),t._v(" "),a("tr",[a("td",[t._v("(1 row(s) affected)")]),t._v(" "),a("td")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("Val")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Bar")])]),t._v(" "),a("tr",[a("td",[t._v("(1 row(s) affected)")]),t._v(" "),a("td")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("Val")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Baz")])]),t._v(" "),a("tr",[a("td",[t._v("(1 row(s) affected)")]),t._v(" "),a("td")])])]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("li",[t._v("DECLARE cursor_name CURSOR [ LOCAL | GLOBAL ]\n"),a("ul",[a("li",[t._v("[ FORWARD_ONLY | SCROLL ]"),a("br"),t._v("\n[ STATIC | KEYSET | DYNAMIC | FAST_FORWARD ]"),a("br"),t._v("\n[ READ_ONLY | SCROLL_LOCKS | OPTIMISTIC ]"),a("br"),t._v("\n[ TYPE_WARNING ]")]),t._v("\n- FOR select_statement\n- [ FOR UPDATE [ OF column_name [ ,...n ] ] ]\n"),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Normally you would want to avoid using cursors as they can have negative impacts on performance. However in some special cases you may need to loop through your data record by record and perform some action.")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);