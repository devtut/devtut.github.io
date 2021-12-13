(window.webpackJsonp=window.webpackJsonp||[]).push([[1977],{2385:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"basic-ddl-operations-in-ms-sql-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-ddl-operations-in-ms-sql-server"}},[t._v("#")]),t._v(" Basic DDL Operations in MS SQL Server")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("p",[t._v("This section describes some basic "),s("strong",[t._v("DDL")]),t._v(' (="'),s("strong",[t._v("D")]),t._v("ata "),s("strong",[t._v("D")]),t._v("efinition "),s("strong",[t._v("L")]),t._v('anguage") commands to create a database, a table within a database, a view and finally a stored procedure.')]),t._v(" "),s("h3",{attrs:{id:"create-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-database"}},[t._v("#")]),t._v(" Create Database")]),t._v(" "),s("p",[t._v("The following SQL command creates a new database "),s("code",[t._v("Northwind")]),t._v(" on the current server, using path"),s("code",[t._v("C:\\Program Files\\Microsoft SQL Server\\MSSQL11.INSTSQL2012\\MSSQL\\DATA\\")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nGO\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Northwind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n CONTAINMENT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NONE\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n  NAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Northwind'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  FILENAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Program Files\\Microsoft SQL Server\\MSSQL11.INSTSQL2012\\MSSQL\\DATA\\Northwind.mdf'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SIZE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5120")]),t._v("KB "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MAXSIZE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UNLIMITED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FILEGROWTH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("KB \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n LOG "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n  NAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Northwind_log'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  FILENAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Program Files\\Microsoft SQL Server\\MSSQL11.INSTSQL2012\\MSSQL\\DATA\\Northwind_log.ldf'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SIZE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1536")]),t._v("KB "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MAXSIZE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("GB "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FILEGROWTH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGO\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Northwind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" COMPATIBILITY_LEVEL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("110")]),t._v("\nGO\n\n")])])]),s("p",[s("strong",[t._v("Note:")]),t._v(" A T-SQL database consists of two files, the database file "),s("code",[t._v("*.mdf")]),t._v(", and its transaction log "),s("code",[t._v("*.ldf")]),t._v(". Both need to be specified when a new database is created.")]),t._v(" "),s("h3",{attrs:{id:"create-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[t._v("#")]),t._v(" Create Table")]),t._v(" "),s("p",[t._v("The following SQL command creates a new table "),s("code",[t._v("Categories")]),t._v(" in the current database, using schema "),s("code",[t._v("dbo")]),t._v(" (you can switch database context with "),s("code",[t._v("Use <DatabaseName>")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" dbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Categories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    CategoryID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IDENTITY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CategoryName nvarchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Description ntext "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Picture image "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" PK_Categories "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CLUSTERED")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n         CategoryID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PAD_INDEX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" STATISTICS_NORECOMPUTE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IGNORE_DUP_KEY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            ALLOW_ROW_LOCKS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ALLOW_PAGE_LOCKS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" TEXTIMAGE_ON "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"create-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-view"}},[t._v("#")]),t._v(" Create View")]),t._v(" "),s("p",[t._v("The following SQL command creates a new view "),s("code",[t._v("Summary_of_Sales_by_Year")]),t._v(" in the current database, using schema "),s("code",[t._v("dbo")]),t._v(" (you can switch database context with "),s("code",[t._v("Use <DatabaseName>")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VIEW")]),t._v(" dbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Summary_of_Sales_by_Year "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ShippedDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrderID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ordSub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subtotal\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Orders ord\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Order")]),t._v(" Subtotals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ordSub "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" ord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrderID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ordSub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrderID\n\n")])])]),s("p",[t._v("This will join tables "),s("code",[t._v("Orders")]),t._v(" and "),s("code",[t._v("[Order Subtotals]")]),t._v(" to display the columns "),s("code",[t._v("ShippedDate")]),t._v(", "),s("code",[t._v("OrderID")]),t._v(" and "),s("code",[t._v("Subtotal")]),t._v(". Because table "),s("code",[t._v("[Order Subtotals]")]),t._v(" has a blank in its name in the Northwind database, it needs to be enclosed in square brackets.")]),t._v(" "),s("h3",{attrs:{id:"create-procedure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-procedure"}},[t._v("#")]),t._v(" Create Procedure")]),t._v(" "),s("p",[t._v("The following SQL command creates a new stored procedure "),s("code",[t._v("CustOrdersDetail")]),t._v(" in the current database, using schema "),s("code",[t._v("dbo")]),t._v(" (you can switch database context with "),s("code",[t._v("Use <DatabaseName>")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" dbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MyCustOrdersDetail "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@OrderID")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@MinQuantity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ProductName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    UnitPrice"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ROUND")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Od"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UnitPrice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Quantity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Discount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONVERT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Discount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    ExtendedPrice"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ROUND")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONVERT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("money"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Quantity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Discount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Od"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UnitPrice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Products P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Order")]),t._v(" Details"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Od\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" Od"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProductID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProductID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" Od"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrderID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@OrderID")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" Od"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Quantity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@MinQuantity")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n\n")])])]),s("p",[t._v("This stored procedure, after it has been created, can be invoked as follows:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exec")]),t._v(" dbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MyCustOrdersDetail "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10248")]),t._v("\n\n")])])]),s("p",[t._v("which will return all order details with @OrderId=10248 (and quantity >=0 as default).\nOr you can specify the optional parameter")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exec")]),t._v(" dbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MyCustOrdersDetail "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10248")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n")])])]),s("p",[t._v("which will return only orders with a minimum quantity of 10 (or more).")])])}),[],!1,null,null,null);a.default=n.exports}}]);