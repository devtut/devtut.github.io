(window.webpackJsonp=window.webpackJsonp||[]).push([[2129],{2537:function(t,s,e){"use strict";e.r(s);var a=e(31),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-client"}},[t._v("#")]),t._v(" MySQL client")]),t._v(" "),e("h2",{attrs:{id:"base-login"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-login"}},[t._v("#")]),t._v(" Base login")]),t._v(" "),e("p",[t._v("To access MySQL from the command line:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("mysql "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--user=username --password=pwd --host=hostname test_db")]),t._v("\n\n")])])]),e("p",[t._v("This can be shortened to:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u username "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p password "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h hostname test_db\n\n")])])]),e("p",[t._v("By omitting the "),e("code",[t._v("password")]),t._v(" value MySQL will ask for any required password as the first input. If you specify "),e("code",[t._v("password")]),t._v(" the client will give you an 'insecure' warning:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("username "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hostname test_db\n\n")])])]),e("p",[t._v("For local connections "),e("code",[t._v("--socket")]),t._v(" can be used to point to the socket file:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("mysql "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--user=username --password=pwd --host=localhost --socket=/path/to/mysqld.sock test_db")]),t._v("\n\n")])])]),e("p",[t._v("Omitting the "),e("code",[t._v("socket")]),t._v(" parameter will cause the client to attempt to attach to a server on the local machine. The server must be running to connect to it.")]),t._v(" "),e("h2",{attrs:{id:"execute-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-commands"}},[t._v("#")]),t._v(" Execute commands")]),t._v(" "),e("p",[t._v("This set of example show how to execute commands stored in strings or script files, without the need of the interactive prompt. This is especially useful to when a shell script needs to interact with a database.")]),t._v(" "),e("h3",{attrs:{id:"execute-command-from-a-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-command-from-a-string"}},[t._v("#")]),t._v(" Execute command from a string")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("$ mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("proot test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select * from people'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----+-------+--------+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" name  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" gender "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----+-------+--------+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Kathy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" f      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" John  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" m      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----+-------+--------+")]),t._v("\n\n")])])]),e("p",[t._v("To format the output as a tab-separated grid, use the "),e("code",[t._v("--silent")]),t._v(" parameter:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("$ mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("proot test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select * from people'")]),t._v("\n\nid      name    gender\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("       Kathy   f\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("       John    m\n\n")])])]),e("p",[t._v("To omit the headers:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("$ mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("proot test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ss "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select * from people'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("       Kathy   f\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("       John    m\n\n")])])]),e("h3",{attrs:{id:"execute-from-script-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-from-script-file"}},[t._v("#")]),t._v(" Execute from script file:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("$ mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("proot test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" my_script"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sql")]),t._v("\n\n")])])]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("$ mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("proot test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source my_script.sql'")]),t._v("\n\n")])])]),e("h3",{attrs:{id:"write-the-output-on-a-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#write-the-output-on-a-file"}},[t._v("#")]),t._v(" Write the output on a file")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("$ mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("proot test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" my_script"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sql")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n\n$ mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("proot test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select * from people'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n\n")])])]),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("ul",[e("li",[t._v("mysql [OPTIONS] [database_name]")])]),t._v(" "),e("h4",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("-D")]),t._v(" "),e("code",[t._v("--database=name")])]),t._v(" "),e("td",[t._v("name of the database")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("--delimiter=str")])]),t._v(" "),e("td",[t._v("set the statement delimiter. The default one is ';'")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-e")]),t._v(" "),e("code",[t._v("--execute='command'")])]),t._v(" "),e("td",[t._v("execute command")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-h")]),t._v(" "),e("code",[t._v("--host=name")])]),t._v(" "),e("td",[t._v("hostname to connect to")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-p")]),t._v(" "),e("code",[t._v("--password=name")])]),t._v(" "),e("td",[t._v("password "),e("strong",[t._v("Note: there is no space between "),e("code",[t._v("-p")]),t._v(" and the password")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-p")]),t._v(" (without password)")]),t._v(" "),e("td",[t._v("the password will be prompted for")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-P")]),t._v(" "),e("code",[t._v("--port=#")])]),t._v(" "),e("td",[t._v("port number")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-s")]),t._v(" "),e("code",[t._v("--silent")])]),t._v(" "),e("td",[t._v("silent mode, produce less output. Use "),e("code",[t._v("\\t")]),t._v(" as column separator")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-ss")])]),t._v(" "),e("td",[t._v("like "),e("code",[t._v("-s")]),t._v(", but omit column names")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-S")]),t._v(" "),e("code",[t._v("--socket=path")])]),t._v(" "),e("td",[t._v("specify the socket (Unix) or named pipe (Windows) to use when connecting to a local instance")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("--skip-column-names")])]),t._v(" "),e("td",[t._v("omit column names")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-u")]),t._v(" "),e("code",[t._v("--user=name")])]),t._v(" "),e("td",[t._v("username")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-U")]),t._v(" "),e("code",[t._v("--safe-updates")]),t._v(" "),e("code",[t._v("--i-am-a-dummy")])]),t._v(" "),e("td",[t._v("login with the variable "),e("code",[t._v("sql_safe_updates=ON")]),t._v(". This will allow only "),e("code",[t._v("DELETE")]),t._v(" and "),e("code",[t._v("UPDATE")]),t._v(" that explicitly use keys")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-V")]),t._v(" "),e("code",[t._v("--version")])]),t._v(" "),e("td",[t._v("print the version and exit")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);