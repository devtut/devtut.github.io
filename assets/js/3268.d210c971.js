(window.webpackJsonp=window.webpackJsonp||[]).push([[3268],{3675:function(t,e,a){"use strict";a.r(e);var s=a(31),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"functions-scalar-single-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions-scalar-single-row"}},[t._v("#")]),t._v(" Functions (Scalar/Single Row)")]),t._v(" "),a("p",[t._v("SQL provides several built-in scalar functions. Each scalar function takes one value as input and returns one value as output for each row in a result set.")]),t._v(" "),a("p",[t._v("You use scalar functions wherever an expression is allowed within a T-SQL statement.")]),t._v(" "),a("h2",{attrs:{id:"character-modifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#character-modifications"}},[t._v("#")]),t._v(" Character modifications")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/sql/1120/string-functions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Character modifying functions"),a("OutboundLink")],1),t._v(" include converting characters to upper or lower case characters, converting numbers to formatted numbers, performing character manipulation, etc.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("lower(char)")]),t._v(" function converts the given character parameter to be lower-cased characters.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" customer_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("customer_last_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v('would return the customer\'s last name changed from "SMITH" to "smith".')]),t._v(" "),a("h2",{attrs:{id:"date-and-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-and-time"}},[t._v("#")]),t._v(" Date And Time")]),t._v(" "),a("p",[t._v("In SQL, you use date and time data types to store calendar information. These data types include the time, date, smalldatetime, datetime, datetime2, and datetimeoffset. Each data type has a specific format.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Data type")]),t._v(" "),a("th",[t._v("Format")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("time")]),t._v(" "),a("td",[t._v("hh:mm:ss[.nnnnnnn]")])]),t._v(" "),a("tr",[a("td",[t._v("date")]),t._v(" "),a("td",[t._v("YYYY-MM-DD")])]),t._v(" "),a("tr",[a("td",[t._v("smalldatetime")]),t._v(" "),a("td",[t._v("YYYY-MM-DD hh:mm:ss")])]),t._v(" "),a("tr",[a("td",[t._v("datetime")]),t._v(" "),a("td",[t._v("YYYY-MM-DD hh:mm:ss[.nnn]")])]),t._v(" "),a("tr",[a("td",[t._v("datetime2")]),t._v(" "),a("td",[t._v("YYYY-MM-DD hh:mm:ss[.nnnnnnn]")])]),t._v(" "),a("tr",[a("td",[t._v("datetimeoffset")]),t._v(" "),a("td",[t._v("YYYY-MM-DD hh:mm:ss[.nnnnnnn] [+/-]hh:mm")])])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("DATENAME")]),t._v(" function returns the name or value of a specific part of the date.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" DATENAME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weekday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-01-14'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Datename\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Datename")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Saturday")])])])]),t._v(" "),a("p",[t._v("You use the "),a("code",[t._v("GETDATE")]),t._v(" function to determine the current date and time of the computer running the current SQL instance. This function doesn't include the time zone difference.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" GETDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Systemdate \n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Systemdate")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2017-01-14 11:11:47.7230728")])])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("DATEDIFF")]),t._v(" function returns the difference between two dates.")]),t._v(" "),a("p",[t._v("In the syntax, datepart is the parameter that specifies which part of the date you want to use to calculate difference. The datepart can be year, month, week, day, hour, minute, second, or millisecond. You then specify the start date in the startdate parameter and the end date in the enddate parameter for which you want to find the difference.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" SalesOrderID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DATEDIFF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("day")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OrderDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ShipDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Processing time'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SalesOrderHeader\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("SalesOrderID")]),t._v(" "),a("th",[t._v("Processing time")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("43659")]),t._v(" "),a("td",[t._v("7")])]),t._v(" "),a("tr",[a("td",[t._v("43660")]),t._v(" "),a("td",[t._v("7")])]),t._v(" "),a("tr",[a("td",[t._v("43661")]),t._v(" "),a("td",[t._v("7")])]),t._v(" "),a("tr",[a("td",[t._v("43662")]),t._v(" "),a("td",[t._v("7")])])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("DATEADD")]),t._v(" function enables you to add an interval to part of a specific date.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" DATEADD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("day")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-01-14'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" Added20MoreDays\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Added20MoreDays")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2017-02-03 00:00:00.000")])])])]),t._v(" "),a("h2",{attrs:{id:"configuration-and-conversion-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-and-conversion-function"}},[t._v("#")]),t._v(" Configuration and Conversion Function")]),t._v(" "),a("p",[t._v("An example of a configuration function in SQL is the "),a("code",[t._v("@@SERVERNAME")]),t._v(" function. This function provides the name of the local server that's running SQL.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@SERVERNAME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server'")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Server")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("SQL064")])])])]),t._v(" "),a("p",[t._v("In SQL, most data conversions occur implicitly, without any user intervention.")]),t._v(" "),a("p",[t._v("To perform any conversions that can't be completed implicitly, you can use the "),a("code",[t._v("CAST")]),t._v(" or "),a("code",[t._v("CONVERT")]),t._v(" functions.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CAST")]),t._v(" function syntax is simpler than the "),a("code",[t._v("CONVERT")]),t._v(" function syntax, but is limited in what it can do.")]),t._v(" "),a("p",[t._v("In here, we use both the "),a("code",[t._v("CAST")]),t._v(" and "),a("code",[t._v("CONVERT")]),t._v(" functions to convert the datetime data type to the "),a("code",[t._v("varchar")]),t._v(" data type.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CAST")]),t._v(" function always uses the default style setting. For example, it will represent dates and times using the format YYYY-MM-DD.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CONVERT")]),t._v(" function uses the date and time style you specify. In this case, 3 specifies the date format dd/mm/yy.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" AdventureWorks2012\nGO\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" FirstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" LastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' was hired on '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n       CAST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HireDate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cast'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       FirstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" LastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' was hired on '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONVERT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HireDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Convert'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" p\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" HumanResources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Employee "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" e\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BusinessEntityID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BusinessEntityID\nGO\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Cast")]),t._v(" "),a("th",[t._v("Convert")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("David Hamiltion was hired on 2003-02-04")]),t._v(" "),a("td",[t._v("David Hamiltion was hired on 04/02/03")])])])]),t._v(" "),a("p",[t._v("Another example of a conversion function is the "),a("code",[t._v("PARSE")]),t._v(" function. This function converts a string to a specified data type.")]),t._v(" "),a("p",[t._v("In the syntax for the function, you specify the string that must be converted, the "),a("code",[t._v("AS")]),t._v(" keyword, and then the required data type. Optionally, you can also specify the culture in which the string value should be formatted. If you don't specify this, the language for the session is used.")]),t._v(" "),a("p",[t._v("If the string value can't be converted to a numeric, date, or time format, it will result in an error. You'll then need to use "),a("code",[t._v("CAST")]),t._v(" or "),a("code",[t._v("CONVERT")]),t._v(" for the conversion.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" PARSE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Monday, 13 August 2012'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" datetime2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en-US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Date in English'")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Date in English")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2012-08-13 00:00:00.0000000")])])])]),t._v(" "),a("h2",{attrs:{id:"logical-and-mathmetical-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logical-and-mathmetical-function"}},[t._v("#")]),t._v(" Logical and Mathmetical Function")]),t._v(" "),a("h3",{attrs:{id:"sql-has-two-logical-functions-choose-and-iif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-has-two-logical-functions-choose-and-iif"}},[t._v("#")]),t._v(" SQL has two logical functions – "),a("code",[t._v("CHOOSE")]),t._v(" and "),a("code",[t._v("IIF")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CHOOSE")]),t._v(" function returns an item from a list of values, based on its position in the list. This position is specified by the index.")]),t._v(" "),a("p",[t._v("In the syntax, the index parameter specifies the item and is a whole number, or integer. The val_1 … val_n parameter identifies the list of values.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CHOOSE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Human Resources'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sales'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Marketing'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" Result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Result")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Sales")])])])]),t._v(" "),a("p",[t._v("In this example, you use the "),a("code",[t._v("CHOOSE")]),t._v(" function to return the second entry in a list of departments.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("IIF")]),t._v(" function returns one of two values, based on a particular condition. If the condition is true, it will return true value. Otherwise it will return a false value.")]),t._v(" "),a("p",[t._v("In the syntax, the boolean_expression parameter specifies the Boolean expression. The true_value parameter specifies the value that should be returned if the boolean_expression evaluates to true and the false_value parameter specifies the value that should be returned if the boolean_expression evaluates to false.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" BusinessEntityID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SalesYTD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n       IIF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SalesYTD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bonus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'No Bonus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bonus?'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SalesPerson\nGO\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("BusinessEntityID")]),t._v(" "),a("th",[t._v("SalesYTD")]),t._v(" "),a("th",[t._v("Bonus?")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("274")]),t._v(" "),a("td",[t._v("559697.5639")]),t._v(" "),a("td",[t._v("Bonus")])]),t._v(" "),a("tr",[a("td",[t._v("275")]),t._v(" "),a("td",[t._v("3763178.1787")]),t._v(" "),a("td",[t._v("Bonus")])]),t._v(" "),a("tr",[a("td",[t._v("285")]),t._v(" "),a("td",[t._v("172524.4512")]),t._v(" "),a("td",[t._v("No Bonus")])])])]),t._v(" "),a("p",[t._v("In this example, you use the IIF function to return one of two values. If a sales person's year-to-date sales are above 200,000, this person will be eligible for a bonus. Values below 200,000 mean that employees don't qualify for bonuses.")]),t._v(" "),a("h3",{attrs:{id:"sql-includes-several-mathematical-functions-that-you-can-use-to-perform-calculations-on-input-values-and-return-numeric-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-includes-several-mathematical-functions-that-you-can-use-to-perform-calculations-on-input-values-and-return-numeric-results"}},[t._v("#")]),t._v(" SQL includes several mathematical functions that you can use to perform calculations on input values and return numeric results.")]),t._v(" "),a("p",[t._v("One example is the "),a("code",[t._v("SIGN")]),t._v(" function, which returns a value indicating the sign of an expression. The value of -1 indicates a negative expression, the value of +1 indicates a positive expression, and 0 indicates zero.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" SIGN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sign'")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Sign")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-1")])])])]),t._v(" "),a("p",[t._v("In the example, the input is a negative number, so the Results pane lists the result -1.")]),t._v(" "),a("p",[t._v("Another mathematical function is the "),a("code",[t._v("POWER")]),t._v(" function. This function provides the value of an expression raised to a specified power.")]),t._v(" "),a("p",[t._v("In the syntax, the float_expression parameter specifies the expression, and the y parameter specifies the power to which you want to raise the expression.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" POWER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" Result\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Result")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("125000")])])])]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("CAST ( expression AS data_type [ ( length ) ] )")]),t._v(" "),a("li",[t._v("CONVERT ( data_type [ ( length ) ] , expression [ , style ] )")]),t._v(" "),a("li",[t._v("PARSE ( string_value AS data_type [ USING culture ] )")]),t._v(" "),a("li",[t._v("DATENAME ( datepart , date )")]),t._v(" "),a("li",[t._v("GETDATE ( )")]),t._v(" "),a("li",[t._v("DATEDIFF ( datepart , startdate , enddate )")]),t._v(" "),a("li",[t._v("DATEADD (datepart , number , date )")]),t._v(" "),a("li",[t._v("CHOOSE ( index, val_1, val_2 [, val_n ] )")]),t._v(" "),a("li",[t._v("IIF ( boolean_expression, true_value, false_value )")]),t._v(" "),a("li",[t._v("SIGN ( numeric_expression )")]),t._v(" "),a("li",[t._v("POWER ( float_expression , y )")])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Scalar or Single-Row functions are used to operate each row of data in the result set, as opposed to "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/sql/1002/aggregate-functions",target:"_blank",rel:"noopener noreferrer"}},[t._v("aggregate functions"),a("OutboundLink")],1),t._v(" which operate on the entire result set.")]),t._v(" "),a("p",[t._v("There are ten types of scalar functions.")]),t._v(" "),a("ol",[a("li",[t._v("Configuration functions provide information about the configuration of the current SQL instance.")]),t._v(" "),a("li",[t._v("Conversion functions convert data into the correct data type for a given operation. For example, these types of functions can reformat information by converting a string to a date or number to allow two different types to be compared.")]),t._v(" "),a("li",[t._v("Date and time functions manipulate fields containing date and time values. They can return numeric, date, or string values. For example, you can use a function to retrieve the current day of the week or year or to retrieve only the year from the date.")])]),t._v(" "),a("p",[t._v("The values returned by date and time functions depend on the date and time set for the operating system of the computer running the SQL instance.")]),t._v(" "),a("ol",[a("li",[t._v("Logical function that performs operations using logical operators. It evaluates a set of conditions and returns a single result.")]),t._v(" "),a("li",[t._v("Mathematical functions perform mathematical operations, or calculations, on numeric expressions. This type of function returns a single numeric value.")]),t._v(" "),a("li",[t._v("Metadata functions retrieve information about a specified database, such as its name and database objects.")]),t._v(" "),a("li",[t._v("Security functions provide information that you can use to manage the security of a database, such as information about database users and roles.")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/sql/1120/string-functions#t=20170114195327226045",target:"_blank",rel:"noopener noreferrer"}},[t._v("String functions"),a("OutboundLink")],1),t._v(" perform operations on string values and return either numeric or string values.")])]),t._v(" "),a("p",[t._v("Using string functions, you can, for example, combine data, extract a substring, compare strings, or convert a string to all uppercase or lowercase characters.")]),t._v(" "),a("ol",[a("li",[t._v("System functions perform operations and return information about values, objects, and settings for the current SQL instance")]),t._v(" "),a("li",[t._v("System statistical functions provide various statistics about the current SQL instance – for example, so that you can monitor the system's current performance levels.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);