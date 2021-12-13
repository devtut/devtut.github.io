(window.webpackJsonp=window.webpackJsonp||[]).push([[2008],{2416:function(t,e,a){"use strict";a.r(e);var n=a(31),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"foreign-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreign-keys"}},[t._v("#")]),t._v(" Foreign Keys")]),t._v(" "),a("h2",{attrs:{id:"foreign-key-relationship-constraint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreign-key-relationship-constraint"}},[t._v("#")]),t._v(" Foreign key relationship/constraint")]),t._v(" "),a("p",[t._v("Foreign keys enables you to define relationship between two tables. One (parent) table need to have primary key that uniquely identifies rows in the table. Other (child) table can have value of the primary key from the parent in one of the columns. FOREIGN KEY REFERENCES constraint ensures that values in child table must exist as a primary key value in the parent table.")]),t._v(" "),a("p",[t._v("In this example we have parent Company table with CompanyId primary key, and child Employee table that has id of the company where this employee works.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" Company "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   CompanyId "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   Name nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" Employee "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    EmployeeId "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Name nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CompanyId "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" Company"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("companyId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("foreign key references")]),t._v(" ensures that values inserted in Employee.CompanyId column must also exist in Company.CompanyId column. Also, nobody can delete company in company table if there is ate least one employee with a matching companyId in child table.")]),t._v(" "),a("p",[t._v('FOREIGN KEY relationship ensures that rows in two tables cannot be "unlinked".')]),t._v(" "),a("h2",{attrs:{id:"maintaining-relationship-between-parent-child-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintaining-relationship-between-parent-child-rows"}},[t._v("#")]),t._v(" Maintaining relationship between parent/child rows")]),t._v(" "),a("p",[t._v("Let's assume that we have one row in Company table with companyId 1. We can insert row in employee table that has companyId 1:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" Employee "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("However, we cannot insert employee that has non-existing CompanyId:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" Employee "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v('Msg 547, Level 16, State 0, Line 12\nThe INSERT statement conflicted with the FOREIGN KEY constraint "FK__Employee__Compan__1EE485AA". The conflict occurred in database "MyDb", table "dbo.Company", column \'CompanyId\'.\nThe statement has been terminated.')]),t._v(" "),a("p",[t._v("Also, we cannot delete parent row in company table as long as there is at least one child row in employee table that references it.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" company "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" CompanyId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),a("p",[t._v('Msg 547, Level 16, State 0, Line 14\nThe DELETE statement conflicted with the REFERENCE constraint "FK__Employee__Compan__1EE485AA". The conflict occurred in database "MyDb", table "dbo.Employee", column \'CompanyId\'.\nThe statement has been terminated.')]),t._v(" "),a("p",[t._v('Foreign key relationship ensures that Company and employee rows will not be "unlinked".')]),t._v(" "),a("h2",{attrs:{id:"adding-foreign-key-relationship-on-existing-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-foreign-key-relationship-on-existing-table"}},[t._v("#")]),t._v(" Adding foreign key relationship on existing table")]),t._v(" "),a("p",[a("strong",[t._v("FOREIGN KEY")]),t._v(" constraint can be added on existing tables that are still not in relationship. Imagine that we have Company and Employee tables where Employee table CompanyId column but don't have foreign key relationship.\nALTER TABLE statement enables you to add "),a("strong",[t._v("foreign key")]),t._v(" constraint on an existing column that references some other table and primary key in that table:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" Employee\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CompanyId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" Company"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CompanyId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"add-foreign-key-on-existing-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-foreign-key-on-existing-table"}},[t._v("#")]),t._v(" Add foreign key on existing table")]),t._v(" "),a("p",[a("strong",[t._v("FOREIGN KEY")]),t._v(" columns with constraint can be added on existing tables that are still not in relationship. Imagine that we have Company and Employee tables where Employee table don't have CompanyId column.\nALTER TABLE statement enables you to add new column with "),a("strong",[t._v("foreign key")]),t._v(" constraint that references some other table and primary key in that table:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" Employee\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" CompanyId "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" Company"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CompanyId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"getting-information-about-foreign-key-constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-information-about-foreign-key-constraints"}},[t._v("#")]),t._v(" Getting information about foreign key constraints")]),t._v(" "),a("p",[t._v("sys.foreignkeys system view returns information about all foreign key relationships in database:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n OBJECT_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("referenced_object_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n OBJECT_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent_object_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n delete_referential_action_desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n update_referential_action_desc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foreign_keys\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);