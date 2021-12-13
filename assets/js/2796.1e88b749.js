(window.webpackJsonp=window.webpackJsonp||[]).push([[2796],{3204:function(t,s,a){"use strict";a.r(s);var n=a(31),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"reading-and-writing-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-and-writing-csv"}},[t._v("#")]),t._v(" Reading and Writing CSV")]),t._v(" "),a("h2",{attrs:{id:"writing-a-tsv-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-tsv-file"}},[t._v("#")]),t._v(" Writing a TSV file")]),t._v(" "),a("h3",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" csv\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp/output.tsv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" out_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    tsv_writer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delimiter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\t'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tsv_writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writerow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'field'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tsv_writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writerow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dijkstra'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Computer Science'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tsv_writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writerow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Shelah'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Math'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tsv_writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writerow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Aumann'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Economic Sciences'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"output-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-file"}},[t._v("#")]),t._v(" Output file")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("$ cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tsv\n\nname    field\nDijkstra    Computer Science\nShelah    Math\nAumann    Economic Sciences\n\n")])])]),a("h2",{attrs:{id:"using-pandas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-pandas"}},[t._v("#")]),t._v(" Using pandas")]),t._v(" "),a("p",[t._v("Write a CSV file from a "),a("code",[t._v("dict")]),t._v(" or a "),a("code",[t._v("DataFrame")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pandas "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pd\n\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("303")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\npd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Read a CSV file as a "),a("code",[t._v("DataFrame")]),t._v(" and convert it to a "),a("code",[t._v("dict")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("df "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);