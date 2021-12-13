(window.webpackJsonp=window.webpackJsonp||[]).push([[3244],{3652:function(t,s,a){"use strict";a.r(s);var e=a(31),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cascading-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cascading-delete"}},[t._v("#")]),t._v(" Cascading Delete")]),t._v(" "),a("h2",{attrs:{id:"on-delete-cascade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-delete-cascade"}},[t._v("#")]),t._v(" ON DELETE CASCADE")]),t._v(" "),a("p",[t._v("Assume you have a application that administers rooms. "),a("br"),t._v("\nAssume further that your application operates on a per client basis (tenant). "),a("br"),t._v("\nYou have several clients. "),a("br"),t._v("\nSo your database will contain one table for clients, and one for rooms.")]),t._v(" "),a("p",[t._v("Now, every client has N rooms. "),a("br")]),t._v(" "),a("p",[t._v("This should mean that you have a foreign key on your room table, referencing the client table.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T_Room  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" FK_T_Room_T_Client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOREIGN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RM_CLI_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REFERENCES")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T_Client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CLI_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGO\n\n")])])]),a("p",[t._v("Assuming a client moves on to some other software, you'll have to delete his data in your software. But if you do")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" T_Client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" CLI_ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x \n\n")])])]),a("p",[t._v("Then you'll get a foreign key violation, because you can't delete the client when he still has rooms.")]),t._v(" "),a("p",[t._v("Now you'd have write code in your application that deletes the client's rooms before it deletes the client. Assume further that in the future, many more foreign key dependencies will be added in your database, because your application's functionality expands. Horrible. For every modification in your database, you'll have to adapt your application's code in N places. Possibly you'll have to adapt code in other applications as well (e.g. interfaces to other systems).")]),t._v(" "),a("p",[t._v("There is a better solution than doing it in your code."),a("br"),t._v("\nYou can just add "),a("code",[t._v("ON DELETE CASCADE")]),t._v(" to your foreign key.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T_Room  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- WITH CHECK -- SQL-Server can specify WITH CHECK/WITH NOCHECK")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" FK_T_Room_T_Client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOREIGN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RM_CLI_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REFERENCES")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T_Client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CLI_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASCADE")]),t._v(" \n\n")])])]),a("p",[t._v("Now you can say")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" T_Client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" CLI_ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x \n\n")])])]),a("p",[t._v("and the rooms are automagically deleted when the client is deleted. "),a("br"),t._v("\nProblem solved - with no application code changes.")]),t._v(" "),a("p",[t._v("One word of caution:\nIn Microsoft SQL-Server, this won't work if you have a table that references itselfs.\nSo if you try to define a delete cascade on a recursive tree structure, like this:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foreign_keys "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" object_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[dbo].[FK_T_FMS_Navigation_T_FMS_Navigation]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" parent_object_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[dbo].[T_FMS_Navigation]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T_FMS_Navigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FK_T_FMS_Navigation_T_FMS_Navigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOREIGN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NA_NA_UID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REFERENCES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T_FMS_Navigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NA_UID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASCADE")]),t._v(" \nGO\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foreign_keys "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" object_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[dbo].[FK_T_FMS_Navigation_T_FMS_Navigation]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" parent_object_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[dbo].[T_FMS_Navigation]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T_FMS_Navigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FK_T_FMS_Navigation_T_FMS_Navigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nGO\n\n")])])]),a("p",[t._v("it won't work, because Microsoft-SQL-server doesn't allow you to set a foreign key with "),a("code",[t._v("ON DELETE CASCADE")]),t._v(" on a recursive tree structure. One reason for this is, that the tree is possibly cyclic, and that would possibly lead to a deadlock.")]),t._v(" "),a("p",[t._v("PostgreSQL on the other hand can do this; "),a("br"),t._v("\nthe requirement is that the tree is non-cyclic. "),a("br"),t._v("\nIf the tree is cyclic, you'll get a runtime error. "),a("br"),t._v("\nIn that case, you'll just have to implement the delete function yourselfs.")]),t._v(" "),a("p",[a("strong",[t._v("A word of caution:")]),t._v(" "),a("br"),t._v('\nThis means you can\'t simply delete and re-insert the client table anymore, because if you do this, it will delete all entries in "T_Room"... (no non-delta updates anymore)')])])}),[],!1,null,null,null);s.default=n.exports}}]);