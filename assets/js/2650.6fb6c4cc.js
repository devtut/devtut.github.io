(window.webpackJsonp=window.webpackJsonp||[]).push([[2650],{3058:function(a,t,s){"use strict";s.r(t);var e=s(31),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"arcpy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arcpy"}},[a._v("#")]),a._v(" ArcPy")]),a._v(" "),s("h2",{attrs:{id:"printing-one-field-s-value-for-all-rows-of-feature-class-in-file-geodatabase-using-search-cursor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#printing-one-field-s-value-for-all-rows-of-feature-class-in-file-geodatabase-using-search-cursor"}},[a._v("#")]),a._v(" Printing one field's value for all rows of feature class in file geodatabase using Search Cursor")]),a._v(" "),s("p",[a._v("To print a test field (TestField) from a test feature class (TestFC) in a test file geodatabase (Test.gdb) located in a temporary folder (C:\\Temp):")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("with")]),a._v(" arcpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("da"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("SearchCursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('r"C:\\Temp\\Test.gdb\\TestFC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TestField"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" row "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),a._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"createdissolvedgdb-to-create-a-file-gdb-on-the-workspace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createdissolvedgdb-to-create-a-file-gdb-on-the-workspace"}},[a._v("#")]),a._v(" createDissolvedGDB to create a file gdb on the workspace")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createDissolvedGDB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("workspace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" gdbName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    gdb_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" workspace "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" gdbName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".gdb"')]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arcpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Exists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        arcpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Delete_management"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        arcpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CreateFileGDB_management"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("workspace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" gdbName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        arcpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CreateFileGDB_management"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("workspace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" gdbName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" gdb_name\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v("This example uses a Search Cursor from the Data Access (da) module of ArcPy.")]),a._v(" "),s("p",[a._v("Do not confuse arcpy.da.SearchCursor syntax with the earlier and slower arcpy.SearchCursor().")]),a._v(" "),s("p",[a._v("The Data Access module (arcpy.da) has only been available since ArcGIS 10.1 for Desktop.")])])}),[],!1,null,null,null);t.default=n.exports}}]);