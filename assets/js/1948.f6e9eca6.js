(window.webpackJsonp=window.webpackJsonp||[]).push([[1948],{2356:function(a,t,s){"use strict";s.r(t);var r=s(31),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"backing-up-and-restoring-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-and-restoring-data"}},[a._v("#")]),a._v(" Backing up and Restoring Data")]),a._v(" "),s("h2",{attrs:{id:"basic-mongodump-of-local-default-mongod-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-mongodump-of-local-default-mongod-instance"}},[a._v("#")]),a._v(" Basic mongodump of local default mongod instance")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("mongodump "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("db mydb "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("gzip "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("out "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mydb.dump.$(date +%F_%R)"')]),a._v("\n\n")])])]),s("p",[a._v("This command will dump a bson gzipped archive of your local mongod 'mydb' database to the 'mydb.dump.{timestamp}' directory")]),a._v(" "),s("h2",{attrs:{id:"basic-mongorestore-of-local-default-mongod-dump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-mongorestore-of-local-default-mongod-dump"}},[a._v("#")]),a._v(" Basic mongorestore of local default mongod dump")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("mongorestore "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("db mydb mydb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2016")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("08")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27_12")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("44")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mydb "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("drop "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("gzip\n\n")])])]),s("p",[a._v("This command will first drop your current 'mydb' database and then restore your gzipped bson dump from the 'mydb mydb.dump.2016-08-27_12:44/mydb' archive dump file.")])])}),[],!1,null,null,null);t.default=e.exports}}]);