(window.webpackJsonp=window.webpackJsonp||[]).push([[984],{1392:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ado-net"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ado-net"}},[t._v("#")]),t._v(" ADO.NET")]),t._v(" "),s("p",[t._v("ADO(ActiveX Data Objects).Net is a tool provided by Microsoft which provides access to data sources such as SQL Server, Oracle, and XML through its components. .Net front-end applications can retrieve, create, and manipulate data, once they are connected to a data source through ADO.Net with appropriate privileges.")]),t._v(" "),s("p",[t._v("ADO.Net provides a connection-less architecture. It is a secure approach to interact with a database, since, the connection doesn't have to be maintained during the entire session.")]),t._v(" "),s("h2",{attrs:{id:"best-practices-executing-sql-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-executing-sql-statements"}},[t._v("#")]),t._v(" Best Practices - Executing Sql Statements")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaveNewEmployee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),t._v(" newEmployee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - wrap all database connections in a using block so they are always closed & disposed even in the event of an Exception")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - retrieve the connection string by name from the app.config or web.config (depending on the application type) (note, this requires an assembly reference to System.configuration)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlConnection")]),t._v(" con "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SqlConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Configuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConfigurationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConnectionStrings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyConnectionName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConnectionString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - use column names in your INSERT statement so you are not dependent on the sql schema column order")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - always use parameters to avoid sql injection attacks and errors if malformed text is used like including a single quote which is the sql equivalent of escaping or starting a string (varchar/nvarchar)")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - give your parameters meaningful names just like you do variables in your code")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlCommand")]),t._v(" sc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SqlCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INSERT INTO employee (FirstName, LastName, DateOfBirth /*etc*/) VALUES (@firstName, @lastName, @dateOfBirth /*etc*/)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" con"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - always specify the database data type of the column you are using")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - check for valid values in your code and/or use a database constraint, if inserting NULL then use System.DbNull.Value")]),t._v("\n            sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Parameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SqlParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@firstName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SqlDbType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VarChar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newEmployee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FirstName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DBNull"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Parameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SqlParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@lastName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SqlDbType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VarChar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newEmployee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DBNull"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - always use the correct types when specifying your parameters, Value is assigned to a DateTime instance and not a string representation of a Date")]),t._v("\n            sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Parameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SqlParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@dateOfBirth"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SqlDbType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newEmployee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DateOfBirth "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - open your connection as late as possible unless you need to verify that the database connection is valid and wont fail and the proceeding code execution takes a long time (not the case here)")]),t._v("\n            con"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteNonQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the end of the using block will close and dispose the SqlConnection")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// best practice - end the using block as soon as possible to release the database connection")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// supporting class used as parameter for example")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" FirstName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" LastName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DateTime")]),t._v(" DateOfBirth "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"best-practice-for-working-with-ado-net"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice-for-working-with-ado-net"}},[t._v("#")]),t._v(" Best practice for working with "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/h43ks021(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADO.NET"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Rule of thumb is to open connection for minimal time. Close the connection explicitly once your procedure execution is over this will return the connection object back to connection pool. Default connection pool max size = 100. As connection pooling enhances the performance of physical connection to SQL Server."),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/8xx3tyca(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Connection Pooling in SQL Server"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("Wrap all database connections in a using block so they are always closed & disposed even in the event of an Exception. See "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/yh598w02.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("using Statement (C# Reference)"),s("OutboundLink")],1),t._v(" for more information on using statements\n")])]),s("li",[t._v("Retrieve the connection strings by name from the app.config or web.config (depending on the application type)\n"),s("ul",[s("p")])]),t._v(" "),s("li",[s("p",[t._v("This requires an assembly reference to "),s("code",[t._v("System.configuration")])])]),t._v(" "),s("li",[s("p",[t._v("See "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/ms254494(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Connection Strings and Configuration Files"),s("OutboundLink")],1),t._v(" for additional information on how to structure your configuration file")])]),t._v(" "),s("li",[s("p",[t._v("Avoid "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/SQL_injection",target:"_blank",rel:"noopener noreferrer"}},[t._v("sql injection"),s("OutboundLink")],1),t._v(" attacks")])]),t._v(" "),s("li",[s("p",[t._v("Avoid errors if malformed text is used like including a single quote which is the sql equivalent of escaping or starting a string (varchar/nvarchar)")])]),t._v(" "),s("li",[s("p",[t._v("Letting the database provider reuse query plans (not supported by all database providers) which increases efficiency")])]),t._v(" "),s("li",[s("p",[t._v("Sql parameters type and size mismatch is a common cause of insert/ updated/ select failure")])]),t._v(" "),s("li",[s("p",[t._v("Give your Sql parameters meaningful names just like you do variables in your code")])]),t._v(" "),s("li",[s("p",[t._v("Specify the database data type of the column you are using, this ensures the wrong parameter types is not used which could lead to unexpected results")])]),t._v(" "),s("li",[s("p",[t._v('Validate your incoming parameters before you pass them into the command (as the saying goes, "'),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Garbage_in,_garbage_out",target:"_blank",rel:"noopener noreferrer"}},[t._v("garbage in, garbage out"),s("OutboundLink")],1),t._v('"). Validate incoming values as early as possible in the stack')])]),t._v(" "),s("li",[s("p",[t._v("Use the correct types when assigning your parameter values, example: do not assign the string value of a DateTime, instead assign an actual DateTime instance to the value of the parameter")])]),t._v(" "),s("li",[s("p",[t._v("Specify the "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlparameter.size(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("size"),s("OutboundLink")],1),t._v(" of string-type parameters. This is because SQL Server can re-use execution plans if the parameters match in type "),s("strong",[t._v("and")]),t._v(" size. Use -1 for MAX")])]),t._v(" "),s("li",[s("p",[t._v("Do not use the method "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlparametercollection.addwithvalue(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("AddWithValue"),s("OutboundLink")],1),t._v(", the main reason is it is very easy to forget to specify the parameter type or the precision/scale when needed. For additional information see "),s("a",{attrs:{href:"http://blogs.msmvps.com/jcoehoorn/blog/2014/05/12/can-we-stop-using-addwithvalue-already/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Can we stop using AddWithValue already?"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("Open the connection as late as possible and close it as soon as possible. This is a general guideline when working with any external resource\n")])]),s("li",[t._v("Never share database connection instances (example: having a singleton host a shared instance of type "),s("code",[t._v("SqlConnection")]),t._v('). Have your code always create a new database connection instance when needed and then have the calling code dispose of it and "throw it away" when it is done. The reason for this is\n'),s("ul",[s("p")])]),t._v(" "),s("li",[s("p",[t._v("Most database providers have some sort of connection pooling so creating new managed connections is cheap")])]),t._v(" "),s("li",[s("p",[t._v("It eliminates any future errors if the code starts working with multiple threads")])])]),t._v(" "),s("h2",{attrs:{id:"executing-sql-statements-as-a-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#executing-sql-statements-as-a-command"}},[t._v("#")]),t._v(" Executing SQL statements as a command")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uses Windows authentication. Replace the Trusted_Connection parameter with")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// User Id=...;Password=...; to use SQL Server authentication instead. You may")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// want to find the appropriate connection string for your server.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" connectionString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Server=myServer\\myInstance;Database=myDataBase;Trusted_Connection=True;"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" sql "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INSERT INTO myTable (myDateTimeField, myIntField) "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VALUES (@someDateTime, @someInt);"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Most ADO.NET objects are disposable and, thus, require the using keyword.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SqlConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connectionString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" command "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SqlCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use parameters instead of string concatenation to add user-supplied")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// values to avoid SQL injection and formatting issues. Explicitly supply datatype.")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// System.Data.SqlDbType is an enumeration. See Note1")]),t._v("\n    command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Parameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@someDateTime"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SqlDbType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myDateTimeVariable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Parameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@someInt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SqlDbType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myInt32Variable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Execute the SQL statement. Use ExecuteScalar and ExecuteReader instead")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for query that return results (or see the more specific examples, once")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// those have been added).")]),t._v("\n\n    connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteNonQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("strong",[s("strong",[t._v("Note 1:")])]),t._v(" Please see "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/system.data.sqldbtype(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("SqlDbType Enumeration"),s("OutboundLink")],1),t._v(" for the MSFT SQL Server-specific variation.")]),t._v(" "),s("p",[s("strong",[s("strong",[t._v("Note 2:")])]),t._v(" Please see "),s("a",{attrs:{href:"https://dev.mysql.com/doc/dev/connector-net/html/T_MySql_Data_MySqlClient_MySqlDbType.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySqlDbType Enumeration"),s("OutboundLink")],1),t._v(" for the MySQL-specific variation.")]),t._v(" "),s("h2",{attrs:{id:"using-common-interfaces-to-abstract-away-vendor-specific-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-common-interfaces-to-abstract-away-vendor-specific-classes"}},[t._v("#")]),t._v(" Using common interfaces to abstract away vendor specific classes")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" providerName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"System.Data.SqlClient"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Oracle.ManagedDataAccess.Client, IBM.Data.DB2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" connectionString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{your-connection-string}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//you will probably get the above two values in the ConnectionStringSettings object from .config file")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" factory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DbProviderFactories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providerName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//IDbConnection")]),t._v("\n    connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConnectionString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connectionString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" command "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//IDbCommand")]),t._v("\n        command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommandText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{query}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//IDataReader")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[s("strong",[t._v("A note on parameterizing SQLs with "),s("code",[t._v("Parameters.AddWithValue")]),t._v(":")]),t._v(" "),s("code",[t._v("AddWithValue")]),t._v(" is never a good starting point. That method relies on inferring the type of the data from what is passed in. With this, you might end up in a situation where the conversion prevents your query from "),s("a",{attrs:{href:"http://stackoverflow.com/q/799584/87698",target:"_blank",rel:"noopener noreferrer"}},[t._v("using an index"),s("OutboundLink")],1),t._v(". Note that some SQL Server data types, such as "),s("code",[t._v("char")]),t._v("/"),s("code",[t._v("varchar")]),t._v(' (without preceding "n") or '),s("code",[t._v("date")]),t._v(" do not have a corresponding .NET data type. In those cases, "),s("a",{attrs:{href:"http://blogs.msmvps.com/jcoehoorn/blog/2014/05/12/can-we-stop-using-addwithvalue-already/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Add")]),t._v(" with the correct data type should be used instead"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);