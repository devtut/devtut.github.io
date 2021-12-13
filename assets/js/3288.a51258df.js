(window.webpackJsonp=window.webpackJsonp||[]).push([[3288],{3696:function(e,s,t){"use strict";t.r(s);var a=t(31),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sequence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sequence"}},[e._v("#")]),e._v(" Sequence")]),e._v(" "),t("h2",{attrs:{id:"create-sequence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-sequence"}},[e._v("#")]),e._v(" Create Sequence")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nCREATE SEQUENCE orders_seq\n START WITH     1000\n INCREMENT BY   1;\n\n")])])]),t("p",[e._v("Creates a sequence with a starting value of 1000 which is incremented by 1.")]),e._v(" "),t("h2",{attrs:{id:"using-sequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-sequences"}},[e._v("#")]),e._v(" Using Sequences")]),e._v(" "),t("p",[e._v("a reference to "),t("strong",[e._v("seq_name")]),e._v(".NEXTVAL is used to get the next value in a sequence. A single statement can only generate a single sequence value. If there are multiple references to NEXTVAL in a statement, they use will use the same generated number.")]),e._v(" "),t("p",[e._v("NEXTVAL can be used for INSERTS")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INSERT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" Orders "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Order_UID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Customer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VALUES")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("orders_seq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("NEXTVAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1032")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),t("p",[e._v("It can be used for UPDATES")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UPDATE")]),e._v(" Orders\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" Order_UID "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" orders_seq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("NEXTVAL\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" Customer "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("581")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),t("p",[e._v("It can also be used for SELECTS")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" Order_seq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("NEXTVAL "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" dual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);