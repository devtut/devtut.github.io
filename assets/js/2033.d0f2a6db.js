(window.webpackJsonp=window.webpackJsonp||[]).push([[2033],{2441:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"openjson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openjson"}},[t._v("#")]),t._v(" OPENJSON")]),t._v(" "),s("h2",{attrs:{id:"get-key-value-pairs-from-json-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-key-value-pairs-from-json-text"}},[t._v("#")]),t._v(" Get key:value pairs from JSON text")]),t._v(" "),s("p",[t._v("OPENJSON function parse JSON text and returns all key:value pairs at the first level of JSON:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),t._v(" NVARCHAR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"Name":"Joe","age":27,"skills":["C#","SQL"]}\'')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" OPENJSON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("key")]),t._v(" "),s("th",[t._v("value")]),t._v(" "),s("th",[t._v("type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Name")]),t._v(" "),s("td",[t._v("Joe")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("age")]),t._v(" "),s("td",[t._v("27")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("skills")]),t._v(" "),s("td",[t._v('["C#","SQL"]')]),t._v(" "),s("td",[t._v("4")])])])]),t._v(" "),s("p",[t._v("Column type describe the type of value, i.e. null(0), string(1), number(2), boolean(3), array(4), and object(5).")]),t._v(" "),s("h2",{attrs:{id:"transform-json-array-into-set-of-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transform-json-array-into-set-of-rows"}},[t._v("#")]),t._v(" Transform JSON array into set of rows")]),t._v(" "),s("p",[t._v("OPENJSON function parses collection of JSON objects and returns values from JSON text as set of rows.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),t._v(" nvarchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[\n  {"Number":"SO43659","Date":"2011-05-31T00:00:00","Customer": "MSFT","Price":59.99,"Quantity":1},\n  {"Number":"SO43661","Date":"2011-06-01T00:00:00","Customer":"Nokia","Price":24.99,"Quantity":3}\n]\'')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" OPENJSON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          Number   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Customer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Quantity "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("In the WITH clause is specified return schema of OPENJSON function. Keys in the JSON objects are fetched by column names. If some key in JSON is not specified in the WITH clause (e.g. Price in this example) it will be ignored. Values are automatically converted into specified types.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Number")]),t._v(" "),s("th",[t._v("Date")]),t._v(" "),s("th",[t._v("Customer")]),t._v(" "),s("th",[t._v("Quantity")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("SO43659")]),t._v(" "),s("td",[t._v("2011-05-31T00:00:00")]),t._v(" "),s("td",[t._v("MSFT")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("SO43661")]),t._v(" "),s("td",[t._v("2011-06-01T00:00:00")]),t._v(" "),s("td",[t._v("Nokia")]),t._v(" "),s("td",[t._v("3")])])])]),t._v(" "),s("h2",{attrs:{id:"transform-nested-json-fields-into-set-of-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transform-nested-json-fields-into-set-of-rows"}},[t._v("#")]),t._v(" Transform nested JSON fields into set of rows")]),t._v(" "),s("p",[t._v("OPENJSON function parses collection of JSON objects and returns values from JSON text as set of rows. If the values in input object are nested, additional mapping parameter can be specified in each column in WITH clause:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),t._v(" nvarchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[\n  {"data":{"num":"SO43659","date":"2011-05-31T00:00:00"},"info":{"customer":"MSFT","Price":59.99,"qty":1}},\n  {"data":{"number":"SO43661","date":"2011-06-01T00:00:00"},"info":{"customer":"Nokia","Price":24.99,"qty":3}}\n]\'')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" OPENJSON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          Number   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.data.num'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.data.date'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Customer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.info.customer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Quantity "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.info.qty'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("In the WITH clause is specified return schema of OPENJSON function. After the type is specified path to the JSON nodes where returned value should be found. Keys in the JSON objects are fetched by these paths. Values are automatically converted into specified types.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Number")]),t._v(" "),s("th",[t._v("Date")]),t._v(" "),s("th",[t._v("Customer")]),t._v(" "),s("th",[t._v("Quantity")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("SO43659")]),t._v(" "),s("td",[t._v("2011-05-31T00:00:00")]),t._v(" "),s("td",[t._v("MSFT")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("SO43661")]),t._v(" "),s("td",[t._v("2011-06-01T00:00:00")]),t._v(" "),s("td",[t._v("Nokia")]),t._v(" "),s("td",[t._v("3")])])])]),t._v(" "),s("h2",{attrs:{id:"extracting-inner-json-sub-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extracting-inner-json-sub-objects"}},[t._v("#")]),t._v(" Extracting inner JSON sub-objects")]),t._v(" "),s("p",[t._v("OPENJSON can extract fragments of JSON objects inside the JSON text. In the column definition that references JSON sub-object set the type nvarchar(max) and AS JSON option:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),t._v(" nvarchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[\n  {"Number":"SO43659","Date":"2011-05-31T00:00:00","info":{"customer":"MSFT","Price":59.99,"qty":1}},\n  {"Number":"SO43661","Date":"2011-06-01T00:00:00","info":{"customer":"Nokia","Price":24.99,"qty":3}}\n]\'')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" OPENJSON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          Number   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Info nvarchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.info'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" JSON\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v('Info column will be mapped to "Info" object. Results will be:')]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Number")]),t._v(" "),s("th",[t._v("Date")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("SO43659")]),t._v(" "),s("td",[t._v("2011-05-31T00:00:00")]),t._v(" "),s("td",[t._v('{"customer":"MSFT","Price":59.99,"qty":1}')])]),t._v(" "),s("tr",[s("td",[t._v("SO43661")]),t._v(" "),s("td",[t._v("2011-06-01T00:00:00")]),t._v(" "),s("td",[t._v('{"customer":"Nokia","Price":24.99,"qty":3}')])])])]),t._v(" "),s("h2",{attrs:{id:"working-with-nested-json-sub-arrays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-nested-json-sub-arrays"}},[t._v("#")]),t._v(" Working with nested JSON sub-arrays")]),t._v(" "),s("p",[t._v("JSON may have complex structure with inner arrays. In this example, we have array of orders with nested sub array of OrderItems.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),t._v(" nvarchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[\n  {"Number":"SO43659","Date":"2011-05-31T00:00:00",\n    "Items":[{"Price":11.99,"Quantity":1},{"Price":12.99,"Quantity":5}]},\n  {"Number":"SO43661","Date":"2011-06-01T00:00:00",\n    "Items":[{"Price":21.99,"Quantity":3},{"Price":22.99,"Quantity":2},{"Price":23.99,"Quantity":2}]}\n]\'')]),t._v("\n\n")])])]),s("p",[t._v('We can parse root level properties using OPENJSON that will return Items array AS JSON fragment. Then we can apply OPENJSON again on Items array and open inner JSON table. First level table and inner table will be "joined" like in the JOIN between standard tables:')]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n    OPENJSON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  Number "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Items nvarchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" JSON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CROSS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("APPLY")]),t._v(" \n            OPENJSON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Price "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Quantity "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Results:")]),t._v(" "),s("p",[t._v('|Number|Date|Items|Price|Quantity\n|---|---|---|---\n|SO43659|2011-05-31 00:00:00.000|[{"Price":11.99,"Quantity":1},{"Price":12.99,"Quantity":5}]|11.99|1\n|SO43659|2011-05-31 00:00:00.000|[{"Price":11.99,"Quantity":1},{"Price":12.99,"Quantity":5}]|12.99|5\n|SO43661|2011-06-01 00:00:00.000|[{"Price":21.99,"Quantity":3},{"Price":22.99,"Quantity":2},{"Price":23.99,"Quantity":2}]|21.99|3\n|SO43661|2011-06-01 00:00:00.000|[{"Price":21.99,"Quantity":3},{"Price":22.99,"Quantity":2},{"Price":23.99,"Quantity":2}]|22.99|2\n|SO43661|2011-06-01 00:00:00.000|[{"Price":21.99,"Quantity":3},{"Price":22.99,"Quantity":2},{"Price":23.99,"Quantity":2}]|23.99|2')])])}),[],!1,null,null,null);a.default=n.exports}}]);