(window.webpackJsonp=window.webpackJsonp||[]).push([[3254],{3662:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"data-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[t._v("#")]),t._v(" Data Types")]),t._v(" "),s("h2",{attrs:{id:"decimal-and-numeric"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decimal-and-numeric"}},[t._v("#")]),t._v(" DECIMAL and NUMERIC")]),t._v(" "),s("p",[t._v("Fixed precision and scale decimal numbers. "),s("code",[t._v("DECIMAL")]),t._v(" and "),s("code",[t._v("NUMERIC")]),t._v(" are functionally equivalent.")]),t._v(" "),s("p",[t._v("Syntax:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("precision")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NUMERIC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("precision")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Examples:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--returns 123.00")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345.12")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NUMERIC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--returns 12345.12000")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"float-and-real"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#float-and-real"}},[t._v("#")]),t._v(" FLOAT and REAL")]),t._v(" "),s("p",[t._v("Approximate-number data types for use with floating point numeric data.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" PI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FLOAT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--returns 3.14159265358979")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" PI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--returns 3.141593")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"integers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integers"}},[t._v("#")]),t._v(" Integers")]),t._v(" "),s("p",[t._v("Exact-number data types that use integer data.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Data type")]),t._v(" "),s("th",[t._v("Range")]),t._v(" "),s("th",[t._v("Storage")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("bigint")]),t._v(" "),s("td",[t._v("-2^63 (-9,223,372,036,854,775,808) to 2^63-1 (9,223,372,036,854,775,807)")]),t._v(" "),s("td",[t._v("8 Bytes")])]),t._v(" "),s("tr",[s("td",[t._v("int")]),t._v(" "),s("td",[t._v("-2^31 (-2,147,483,648) to 2^31-1 (2,147,483,647)")]),t._v(" "),s("td",[t._v("4 Bytes")])]),t._v(" "),s("tr",[s("td",[t._v("smallint")]),t._v(" "),s("td",[t._v("-2^15 (-32,768) to 2^15-1 (32,767)")]),t._v(" "),s("td",[t._v("2 Bytes")])]),t._v(" "),s("tr",[s("td",[t._v("tinyint")]),t._v(" "),s("td",[t._v("0 to 255")]),t._v(" "),s("td",[t._v("1 Byte")])])])]),t._v(" "),s("h2",{attrs:{id:"money-and-smallmoney"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#money-and-smallmoney"}},[t._v("#")]),t._v(" MONEY and SMALLMONEY")]),t._v(" "),s("p",[t._v("Data types that represent monetary or currency values.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Data type")]),t._v(" "),s("th",[t._v("Range")]),t._v(" "),s("th",[t._v("Storage")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("money")]),t._v(" "),s("td",[t._v("-922,337,203,685,477.5808 to 922,337,203,685,477.5807")]),t._v(" "),s("td",[t._v("8 bytes")])]),t._v(" "),s("tr",[s("td",[t._v("smallmoney")]),t._v(" "),s("td",[t._v("-214,748.3648 to 214,748.3647")]),t._v(" "),s("td",[t._v("4 bytes")])])])]),t._v(" "),s("h2",{attrs:{id:"binary-and-varbinary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binary-and-varbinary"}},[t._v("#")]),t._v(" BINARY and VARBINARY")]),t._v(" "),s("p",[t._v("Binary data types of either fixed length or variable length.")]),t._v(" "),s("p",[t._v("Syntax:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BINARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" n_bytes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARBINARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" n_bytes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("n_bytes")]),t._v(" can be any number from 1 to 8000 bytes. "),s("code",[t._v("max")]),t._v(" indicates that the maximum storage space is 2^31-1.")]),t._v(" "),s("p",[t._v("Examples:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BINARY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 0x00000000000000003039")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARBINARY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 0x00003039")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"char-and-varchar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#char-and-varchar"}},[t._v("#")]),t._v(" CHAR and VARCHAR")]),t._v(" "),s("p",[t._v("String data types of either fixed length or variable length.")]),t._v(" "),s("p",[t._v("Syntax:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" n_chars "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" n_chars "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("Examples:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ABC'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 'ABC       ' (padded with spaces on the right)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ABC'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 'ABC' (no padding due to variable character)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ABCDEFGHIJKLMNOPQRSTUVWXYZ'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 'ABCDEFGHIJ' (truncated to 10 characters)")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"nchar-and-nvarchar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nchar-and-nvarchar"}},[t._v("#")]),t._v(" NCHAR and NVARCHAR")]),t._v(" "),s("p",[t._v("UNICODE string data types of either fixed length or variable length.")]),t._v(" "),s("p",[t._v("Syntax:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NCHAR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" n_chars "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nNVARCHAR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" n_chars "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MAX "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("Use "),s("code",[t._v("MAX")]),t._v(" for very long strings that may exceed 8000 characters.")]),t._v(" "),s("h2",{attrs:{id:"uniqueidentifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uniqueidentifier"}},[t._v("#")]),t._v(" UNIQUEIDENTIFIER")]),t._v(" "),s("p",[t._v("A 16-byte GUID / UUID.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@GUID")]),t._v(" UNIQUEIDENTIFIER "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NEWID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@GUID")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 'E28B3BD9-9174-41A9-8508-899A78A33540'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@bad_GUID_string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E28B3BD9-9174-41A9-8508-899A78A33540_foobarbaz'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@bad_GUID_string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 'E28B3BD9-9174-41A9-8508-899A78A33540_foobarbaz'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONVERT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UNIQUEIDENTIFIER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@bad_GUID_string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 'E28B3BD9-9174-41A9-8508-899A78A33540'")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);