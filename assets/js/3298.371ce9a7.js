(window.webpackJsonp=window.webpackJsonp||[]).push([[3298],{3706:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),a("h2",{attrs:{id:"simple-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-transaction"}},[t._v("#")]),t._v(" Simple Transaction")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" DeletedEmployees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EmployeeID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DateDeleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GetDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" EmployeeID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"rollback-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollback-transaction"}},[t._v("#")]),t._v(" Rollback Transaction")]),t._v(" "),a("p",[t._v("When something fails in your transaction code and you want to undo it, you can rollback your transaction:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" TRY\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Users "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" Name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Todd'")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" TRY\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" CATCH\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROLLBACK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" CATCH\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("A transaction is a logical unit of work containing one or more steps, each of which must complete successfully in order for the transaction to commit to the database. If there are errors, then all of the data modifications are erased and the database is rolled back to its initial state at the start of the transaction.")])])}),[],!1,null,null,null);s.default=e.exports}}]);