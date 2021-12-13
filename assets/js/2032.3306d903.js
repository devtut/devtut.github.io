(window.webpackJsonp=window.webpackJsonp||[]).push([[2032],{2439:function(s,e,a){"use strict";a.r(e);var t=a(31),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nulls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nulls"}},[s._v("#")]),s._v(" NULLs")]),s._v(" "),a("p",[s._v("In SQL Server, "),a("code",[s._v("NULL")]),s._v(" represents data that is missing, or unknown.  This means that "),a("code",[s._v("NULL")]),s._v(" is not really a value; it's better described as a placeholder for a value. This is also the reason why you can't compare "),a("code",[s._v("NULL")]),s._v(" with any value, and not even with another "),a("code",[s._v("NULL")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"coalesce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coalesce"}},[s._v("#")]),s._v(" COALESCE ()")]),s._v(" "),a("p",[a("code",[s._v("COALESCE ()")]),s._v(" Evaluates the arguments in order and returns the current value of the first expression that initially does not evaluate to "),a("code",[s._v("NULL")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- variable is null until it is set with value.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- variable is null until it is set with value.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- variable is null until it is set with value.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt3")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COALESCE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Returns 3 : value of @MyInt3.")]),s._v("\n\n")])])]),a("p",[s._v("Although ISNULL() operates similarly to COALESCE(), the ISNULL() function only accepts two parameters - one to check, and one to use if the first parameter is NULL.\nSee also "),a("code",[s._v("ISNULL")]),s._v(", below")]),s._v(" "),a("h2",{attrs:{id:"null-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-comparison"}},[s._v("#")]),s._v(" NULL comparison")]),s._v(" "),a("p",[a("code",[s._v("NULL")]),s._v(" is a special case when it comes to comparisons.")]),s._v(" "),a("p",[s._v("Assume the following data.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("id someVal\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n")])])]),a("p",[s._v("With a query:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nSELECT id\n FROM table\n WHERE someVal = 1\n\n")])])]),a("p",[s._v("would return id "),a("code",[s._v("1")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nSELECT id\n FROM table\n WHERE someVal <> 1\n\n")])])]),a("p",[s._v("would return id "),a("code",[s._v("2")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nSELECT id\n FROM table\n WHERE someVal IS NULL\n\n")])])]),a("p",[s._v("would return id "),a("code",[s._v("0")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nSELECT id\n FROM table\n WHERE someVal IS NOT NULL\n\n")])])]),a("p",[s._v("would return both ids "),a("code",[s._v("1")]),s._v(" and "),a("code",[s._v("2")]),s._v(".")]),s._v(" "),a("p",[s._v('If you wanted NULLs to be "counted" as values in a '),a("code",[s._v("=")]),s._v(", "),a("code",[s._v("<>")]),s._v(" comparison, it must first be converted to a countable data type:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nSELECT id\n FROM table\n WHERE ISNULL(someVal, -1) <> 1\n\n")])])]),a("p",[s._v("OR")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nSELECT id\n FROM table\n WHERE someVal IS NULL OR someVal <> 1\n\n")])])]),a("p",[s._v("returns "),a("code",[s._v("0")]),s._v(" and "),a("code",[s._v("2")])]),s._v(" "),a("p",[s._v("Or you can change your "),a("a",{attrs:{href:"http://stackoverflow.com/a/411868/2312877",target:"_blank",rel:"noopener noreferrer"}},[s._v("ANSI Null"),a("OutboundLink")],1),s._v(" setting.")]),s._v(" "),a("h2",{attrs:{id:"ansi-nulls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansi-nulls"}},[s._v("#")]),s._v(" ANSI NULLS")]),s._v(" "),a("p",[s._v("From "),a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/ms188048.aspx",target:"_blank",rel:"noopener noreferrer"}},[s._v("MSDN"),a("OutboundLink")],1)]),s._v(" "),a("blockquote"),s._v(" "),a("p",[s._v("In a future version of SQL Server, ANSI_NULLS will always be ON and any applications that explicitly set the option to OFF will generate an error. Avoid using this feature in new development work, and plan to modify applications that currently use this feature.")]),s._v(" "),a("p",[a("code",[s._v("ANSI NULLS")]),s._v(" being set to off allows for a "),a("code",[s._v("=")]),s._v("/"),a("code",[s._v("<>")]),s._v(" comparison of null values.")]),s._v(" "),a("p",[s._v("Given the following data:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("id someVal\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n")])])]),a("p",[s._v("And with ANSI NULLS on, this query:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nSELECT id\n FROM table\n WHERE someVal = NULL\n\n")])])]),a("p",[s._v("would produce no results.  However the same query, with ANSI NULLS off:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nset ansi_nulls off\n\n SELECT id\n FROM table\n WHERE someVal = NULL\n\n")])])]),a("p",[s._v("Would return id "),a("code",[s._v("0")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"isnull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isnull"}},[s._v("#")]),s._v(" ISNULL()")]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("IsNull()")]),s._v(" function accepts two parameters, and returns the second parameter if the first one is "),a("code",[s._v("null")]),s._v(".")]),s._v(" "),a("p",[s._v("Parameters:")]),s._v(" "),a("ol",[a("li",[s._v("check expression. Any expression of any data type.")]),s._v(" "),a("li",[s._v("replacement value. This is the value that would be returned if the check expression is null. The replacement value must be of a data type that can be implicitly converted to the data type of the check expression.")])]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("IsNull()")]),s._v(" function returns the same data type as the check expression.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- All variables are null until they are set with values.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ISNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@MyInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Returns 3.")]),s._v("\n\n")])])]),a("p",[s._v("See also "),a("code",[s._v("COALESCE")]),s._v(", above")]),s._v(" "),a("h2",{attrs:{id:"is-null-is-not-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-null-is-not-null"}},[s._v("#")]),s._v(" Is null / Is not null")]),s._v(" "),a("p",[s._v("Since null is not a value, you can't use comparison operators with nulls."),a("br"),s._v("\nTo check if a column or variable holds null, you need to use "),a("code",[s._v("is null")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2016-08-03'")]),s._v("\n\n")])])]),a("p",[s._v("The following statement will select the value "),a("code",[s._v("6")]),s._v(", since all comparisons with null values evaluates to false or unknown:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\n")])])]),a("p",[s._v("Setting the content of the @Date variable to "),a("code",[s._v("null")]),s._v(" and try again, the following statement will return "),a("code",[s._v("5")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Note that the '=' here is an assignment operator!")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"null-with-not-in-subquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-with-not-in-subquery"}},[s._v("#")]),s._v(" NULL with NOT IN SubQuery")]),s._v(" "),a("p",[s._v("While handling not in sub-query with null in the sub-query we need to eliminate NULLS to get your expected results")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#outertable (i int)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#innertable (i int)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#outertable (i) values (1), (2),(3),(4), (5)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#innertable (i) values (2), (3), (null)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#outertable where i in (select i from #innertable)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--So far so good")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#outertable where i not in (select i from #innertable)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Expectation here is to get 1,4,5 but it is not. It will get empty results because of the NULL it executes as {select * from #outertable where i not in (null)}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--To fix this ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#outertable where i not in (select i from #innertable where i is not null)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--you will get expected results")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--5")]),s._v("\n\n")])])]),a("p",[s._v("While handling not in sub-query with null be cautious with your expected output")]),s._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),a("p",[s._v("SQL Server provides other methods to handle nulls, such as "),a("code",[s._v("IS NULL")]),s._v(", "),a("code",[s._v("IS NOT NULL")]),s._v(", "),a("code",[s._v("ISNULL()")]),s._v(", "),a("code",[s._v("COALESCE()")]),s._v(" and others.")])])}),[],!1,null,null,null);e.default=n.exports}}]);