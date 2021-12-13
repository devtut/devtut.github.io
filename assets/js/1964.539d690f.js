(window.webpackJsonp=window.webpackJsonp||[]).push([[1964],{2372:function(e,t,a){"use strict";a.r(t);var r=a(31),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pluggable-storage-engines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pluggable-storage-engines"}},[e._v("#")]),e._v(" Pluggable Storage Engines")]),e._v(" "),a("h2",{attrs:{id:"wiredtiger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiredtiger"}},[e._v("#")]),e._v(" WiredTiger")]),e._v(" "),a("p",[e._v("WiredTiger supports "),a("strong",[e._v("LSM trees to store indexes")]),e._v(". LSM trees are faster for write operations when you need to write huge workloads of random inserts.")]),e._v(" "),a("p",[e._v("In WiredTiger, there is "),a("strong",[e._v("no in-place updates")]),e._v(". If you need to update an element of a document, a new document will be inserted while the old document will be deleted.")]),e._v(" "),a("p",[e._v("WiredTiger also offers "),a("strong",[e._v("document-level concurrency")]),e._v(". It assumes that two write operations will not affect the same document, but if it does, one operation will be rewind and executed later. That's a great performance boost if rewinds are rare.")]),e._v(" "),a("p",[e._v("WiredTiger supports "),a("strong",[e._v("Snappy and zLib algorithms for compression")]),e._v(" of data and indexes in the file system. Snappy is the default. It is less CPU-intensive but have a lower compression rate than zLib.")]),e._v(" "),a("h3",{attrs:{id:"how-to-use-wiredtiger-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-wiredtiger-engine"}},[e._v("#")]),e._v(" How to use WiredTiger Engine")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("mongod "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("storageEngine wiredTiger "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("dbpath "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("newWiredTigerDBPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n")])])]),a("p",[a("strong",[e._v("Note:")])]),e._v(" "),a("ol",[a("li",[e._v("After mongodb 3.2, the default engine is WiredTiger.")]),e._v(" "),a("li",[a("code",[e._v("newWiredTigerDBPath")]),e._v(" should not contain data of another storage engine. To migrate your data, you have to dump them, and re-import them in the new storage engine.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n   mongodump --out <exportDataDestination>\n    mongod --storageEngine wiredTiger --dbpath <newWiredTigerDBPath>\n    mongorestore <exportDataDestination>\n\n")])])]),a("h2",{attrs:{id:"mmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mmap"}},[e._v("#")]),e._v(" MMAP")]),e._v(" "),a("p",[e._v("MMAP is a pluggable storage engine that was named after the "),a("code",[e._v("mmap()")]),e._v(" Linux command. It maps files to the virtual memory and optimizes read calls. If you have a large file but needs to read just a small part of it, "),a("code",[e._v("mmap()")]),e._v(" is much faster then a "),a("code",[e._v("read()")]),e._v(" call that would bring the entire file to the memory.")]),e._v(" "),a("p",[e._v("One disadvantage is that you can't have two write calls being processed in parallel for the same collection. So, MMAP has collection-level locking (and not document-level locking as WiredTiger offers). This collection-locking is necessary because one MMAP index can reference multiples documents and if those docs could be updated simultaneously, the index would be inconsistent.")]),e._v(" "),a("h2",{attrs:{id:"in-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-memory"}},[e._v("#")]),e._v(" In-memory")]),e._v(" "),a("p",[e._v("All data is stored in-memory (RAM) for faster read/access.")]),e._v(" "),a("h2",{attrs:{id:"mongo-rocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongo-rocks"}},[e._v("#")]),e._v(" mongo-rocks")]),e._v(" "),a("p",[e._v("A key-value engine created to integrate with Facebook's RocksDB.")]),e._v(" "),a("h2",{attrs:{id:"fusion-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fusion-io"}},[e._v("#")]),e._v(" Fusion-io")]),e._v(" "),a("p",[e._v("A storage engine created by SanDisk that makes it possible to bypass the OS file system layer and write directly to the storage device.")]),e._v(" "),a("h2",{attrs:{id:"tokumx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tokumx"}},[e._v("#")]),e._v(" TokuMX")]),e._v(" "),a("p",[e._v("A storage engine created by Percona that uses fractal tree indexes.")]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("In MongoDB 3.0, MMAP (default) and WiredTiger are the stable storage engines. Usually, if your app is read-heavy, use MMAP. If its write-heavy, use WiredTiger.")]),e._v(" "),a("p",[e._v("Your solution may also have a mixed replica set members where you can have one node configured with MMAP and another with WiredTiger. You can use one to insert massive data and the other to read with analytical tools.")]),e._v(" "),a("p",[e._v("After MongoDB 3.2, WiredTiger becomes the default engine.")])])}),[],!1,null,null,null);t.default=s.exports}}]);