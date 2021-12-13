(window.webpackJsonp=window.webpackJsonp||[]).push([[2560],{2968:function(t,s,e){"use strict";e.r(s);var a=e(31),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"programming-with-pl-pgsql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#programming-with-pl-pgsql"}},[t._v("#")]),t._v(" Programming with PL/pgSQL")]),t._v(" "),e("h2",{attrs:{id:"basic-pl-pgsql-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-pl-pgsql-function"}},[t._v("#")]),t._v(" Basic PL/pgSQL Function")]),t._v(" "),e("p",[t._v("A simple PL/pgSQL function:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" active_subscribers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURNS")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" $$\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- variable for the following BEGIN ... END block")]),t._v("\n    subscribers "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("integer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- SELECT must always be used with INTO")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" subscribers "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" users "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" subscribed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- function result")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" subscribers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEXCEPTION\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('-- return NULL if table "users" does not exist')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" undefined_table\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$$ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LANGUAGE")]),t._v(" plpgsql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("This could have been achieved with just the SQL statement but demonstrates the basic structure of a function.")]),t._v(" "),e("p",[t._v("To execute the function do:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" active_subscribers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"pl-pgsql-syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pl-pgsql-syntax"}},[t._v("#")]),t._v(" PL/pgSQL Syntax")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" functionName "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someParameter "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'parameterType'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURNS")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DATATYPE'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" $_block_name_$\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--declare something")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--do something")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--return something")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$_block_name_$\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LANGUAGE")]),t._v(" plpgsql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"returns-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns-block"}},[t._v("#")]),t._v(" RETURNS Block")]),t._v(" "),e("p",[t._v("Options for returning in a PL/pgSQL function:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Datatype")]),t._v(" "),e("a",{attrs:{href:"https://www.postgresql.org/docs/9.6/static/datatype.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("List of all datatypes"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("code",[t._v("Table(column_name column_type, ...)")])]),t._v(" "),e("li",[e("code",[t._v("Setof 'Datatype' or 'table_column'")])])]),t._v(" "),e("h2",{attrs:{id:"custom-exceptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-exceptions"}},[t._v("#")]),t._v(" custom exceptions")]),t._v(" "),e("p",[t._v("creating custom exception 'P2222':")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("replace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" s164"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" void "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v("\n$$\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),t._v("\nraise exception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" message "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'S 164'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" detail "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D 164'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hint "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H 164'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errcode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'P2222'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$$ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("language")]),t._v(" plpgsql\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("creating custom exception not assigning errm:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("replace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" s165"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" void "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v("\n$$\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),t._v("\nraise exception "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nothing specified'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$$ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("language")]),t._v(" plpgsql\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("calling:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# do")]),t._v("\n$$\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v("\n _t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),t._v("\n  perform s165"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  exception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" SQLSTATE "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'P0001'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" raise info "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'state P0001 caught: '")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("SQLERRM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  perform s164"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$$\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINFO:  state P0001 caught: nothing specified\nERROR:  S "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("164")]),t._v("\nDETAIL:  D "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("164")]),t._v("\nHINT:  H "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("164")]),t._v("\nCONTEXT:  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SQL")]),t._v(" statement "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT s164()"')]),t._v("\nPL"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pgSQL "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" inline_code_block line "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" at PERFORM\n\n")])])]),e("p",[t._v("here custom P0001 processed, and P2222, not, aborting the execution.")]),t._v(" "),e("p",[t._v("Also it makes huge sense to keep a table of exceptions, like here: "),e("a",{attrs:{href:"http://stackoverflow.com/a/2700312/5315974",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://stackoverflow.com/a/2700312/5315974"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("PL/pgSQL is PostgreSQL's built-in programming language for writing functions which run within the database itself, known as stored procedures in other databases. It extends SQL with loops, conditionals, and return types. Though its syntax may be strange to many developers it is much faster than anything running on the application server because the overhead of connecting to the database is eliminated, which is particularly useful when you would otherwise need to execute a query, wait for the result, and submit another query.")]),t._v(" "),e("p",[t._v("Though many other procedural languages exist for PostgreSQL, such as PL/Python, PL/Perl, and PLV8, PL/pgSQL is a common starting point for developers who want to write their first PostgreSQL function because its syntax builds on SQL. It is also similar to PL/SQL, Oracle's native procedural language, so any developer familiar with PL/SQL will find the language familiar, and any developer who intends to develop Oracle applications in the future but wants to start with a free database can transition from PL/pgSQL to PL/SQL with relative ease.")]),t._v(" "),e("p",[t._v("It should be emphasized that other procedural languages exist and PL/pgSQL is not necessarily superior to them in any way, including speed, but examples in PL/pgSQL can serve as a common reference point for other languages used for writing PostgreSQL functions. PL/pgSQL has the most tutorials and books of all the PLs and can be a springboard to learning the languages with less documentation.")]),t._v(" "),e("p",[t._v("Here are links to some free guides and books on PL/pgSQL:")]),t._v(" "),e("ul",[e("li",[t._v("The official documentation: "),e("a",{attrs:{href:"https://www.postgresql.org/docs/current/static/plpgsql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.postgresql.org/docs/current/static/plpgsql.html"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("w3resource.com tutorial: "),e("a",{attrs:{href:"http://www.w3resource.com/PostgreSQL/pl-pgsql-tutorial.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.w3resource.com/PostgreSQL/pl-pgsql-tutorial.php"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("postgres.cz tutorial: "),e("a",{attrs:{href:"http://postgres.cz/wiki/PL/pgSQL_(en)",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://postgres.cz/wiki/PL/pgSQL_(en)"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("PostgreSQL Server Programming, 2nd Edition: "),e("a",{attrs:{href:"https://www.packtpub.com/big-data-and-business-intelligence/postgresql-server-programming-second-edition",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.packtpub.com/big-data-and-business-intelligence/postgresql-server-programming-second-edition"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("PostgreSQL Developer's Guide: "),e("a",{attrs:{href:"https://www.packtpub.com/big-data-and-business-intelligence/postgresql-developers-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.packtpub.com/big-data-and-business-intelligence/postgresql-developers-guide"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);