(window.webpackJsonp=window.webpackJsonp||[]).push([[2014],{2422:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"in-memory-oltp-hekaton"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-memory-oltp-hekaton"}},[t._v("#")]),t._v(" In-Memory OLTP (Hekaton)")]),t._v(" "),a("h2",{attrs:{id:"declare-memory-optimized-table-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declare-memory-optimized-table-variables"}},[t._v("#")]),t._v(" Declare Memory-Optimized Table Variables")]),t._v(" "),a("p",[t._v("For faster performance you can memory-optimize your table variable.\nHere is the T-SQL for a traditional table variable:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@tvp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    col1   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    Col2   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n")])])]),a("p",[t._v("To define memory-optimized variables, you must first create a memory-optimized table type and then declare a variable from it:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memTypeTable \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n    Col1  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" ix1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    Col2  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MEMORY_OPTIMIZED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n")])])]),a("p",[t._v("Then we can use the table type like this:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@tvp")]),t._v(" memTypeTable\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@tvp")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@tvp")]),t._v("\n\n")])])]),a("p",[t._v("Result:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("Col1    Col2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("         \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("         \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("         \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("        \n\n")])])]),a("h2",{attrs:{id:"create-memory-optimized-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-memory-optimized-table"}},[t._v("#")]),t._v(" Create Memory Optimized Table")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Create demo database")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" SQL2016_Demo\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SQL2016_Demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    FILENAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Dump\\SQL2016_Demo.mdf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    SIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5120")]),t._v("KB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    FILEGROWTH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("KB \n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n LOG "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" \n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SQL2016_Demo_log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    FILENAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Dump\\SQL2016_Demo_log.ldf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    SIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("KB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    FILEGROWTH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" SQL2016_Demo\ngo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Add Filegroup by MEMORY_OPTIMIZED_DATA type ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" SQL2016_Demo \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" FILEGROUP MemFG "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONTAINS")]),t._v(" MEMORY_OPTIMIZED_DATA \nGO\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--Add a file to defined filegroup")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" SQL2016_Demo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FILE")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n        NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MemFG_File1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        FILENAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Dump\\MemFG_File1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- your file path, check directory exist before executing this code")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" FILEGROUP MemFG\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--Object Explorer -- check database created")]),t._v("\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- create memory optimized table 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MemOptTable1  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n    Column1     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    Column2     NVARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    SpidFilter  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SMALLINT")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@spid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" ix_SpidFiler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NONCLUSTERED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SpidFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" ix_SpidFilter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HASH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SpidFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BUCKET_COUNT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CHK_soSessionC_SpidFilter  \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" SpidFilter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@spid")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MEMORY_OPTIMIZED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n         DURABILITY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SCHEMA_AND_DATA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--or DURABILITY = SCHEMA_ONLY")]),t._v("\ngo  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- create memory optimized table 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" MemOptTable2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NONCLUSTERED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HASH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BUCKET_COUNT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    FullName NVARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    DateAdded "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATETIME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MEMORY_OPTIMIZED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DURABILITY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SCHEMA_AND_DATA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGO\n\n")])])]),a("h2",{attrs:{id:"show-created-dll-files-and-tables-for-memory-optimized-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-created-dll-files-and-tables-for-memory-optimized-tables"}},[t._v("#")]),t._v(" Show created .dll files and tables for Memory Optimized Tables")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n    OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MemOptTable1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" MemOptTable1_ObjectID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MemOptTable2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" MemOptTable2_ObjectID\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("description \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dm_os_loaded_modules\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%XTP%'")]),t._v("\nGO\n\n")])])]),a("p",[t._v("Show all Memory Optimized Tables:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type_desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("durability_desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Is_memory_Optimized \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tables")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" Is_memory_Optimized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nGO\n\n")])])]),a("h2",{attrs:{id:"create-memory-optimized-system-versioned-temporal-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-memory-optimized-system-versioned-temporal-table"}},[t._v("#")]),t._v(" Create Memory Optimized System-Versioned Temporal Table")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MemOptimizedTemporalTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("BusinessDocNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ProductCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UnitID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PriceID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SysStartTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("datetime2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" GENERATED ALWAYS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("START")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SysEndTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("datetime2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" GENERATED ALWAYS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    PERIOD "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" SYSTEM_TIME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SysStartTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SysEndTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PK_MemOptimizedTemporalTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NONCLUSTERED")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("BusinessDocNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ProductCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    MEMORY_OPTIMIZED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DURABILITY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SCHEMA_AND_DATA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Memory Optimized Option ON")]),t._v("\n    SYSTEM_VERSIONING "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HISTORY_TABLE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MemOptimizedTemporalTable_History"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DATA_CONSISTENCY_CHECK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/mt620110.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("more informations"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"memory-optimized-table-types-and-temp-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-optimized-table-types-and-temp-tables"}},[t._v("#")]),t._v(" Memory-Optimized Table Types  and Temp tables")]),t._v(" "),a("p",[t._v("For example, this is traditional tempdb-based table type:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testTableType "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   col1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   col2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("To memory-optimize this table type simply add the option "),a("code",[t._v("memory_optimized=on")]),t._v(", and add an index if there is none on the original type:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testTableType "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   col1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   col2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MEMORY_OPTIMIZED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Global temporary table is like this:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##tempGlobalTabel ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n    Col1   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    Col2   NVARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n")])])]),a("p",[t._v("Memory-optimized global temporary table:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempGlobalTabel \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n    Col1   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" ix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NONCLUSTERED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    Col2   NVARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MEMORY_OPTIMIZED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n         DURABILITY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SCHEMA_ONLY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n")])])]),a("p",[t._v("To memory-optimize global temp tables (##temp):")]),t._v(" "),a("li",[t._v("Create a new `SCHEMA_ONLY` memory-optimized table with the same schema as the global `##temp` table\n"),a("ul",[t._v("\n1. Ensure the new table has at least one index\n")])]),t._v("\n1. Change all references to `##temp` in your Transact-SQL statements to the new memory-optimized table temp\n1. Replace the `DROP TABLE ##temp` statements in your code with `DELETE FROM temp`, to clean up the contents\n1. Remove the `CREATE TABLE ##temp` statements from your code – these are now redundant\n"),a("p",[a("a",{attrs:{href:"https://blogs.msdn.microsoft.com/sqlserverstorageengine/2016/03/21/improving-temp-table-and-table-variable-performance-using-memory-optimization/",target:"_blank",rel:"noopener noreferrer"}},[t._v("more informations"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);