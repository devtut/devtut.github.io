(window.webpackJsonp=window.webpackJsonp||[]).push([[1159],{1567:function(e,t,a){"use strict";a.r(t);var r=a(31),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"update-object-name-in-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-object-name-in-reference"}},[e._v("#")]),e._v(" Update Object Name in Reference")]),e._v(" "),a("h2",{attrs:{id:"update-object-name-in-reference-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-object-name-in-reference-2"}},[e._v("#")]),e._v(" Update Object Name in Reference")]),e._v(" "),a("h3",{attrs:{id:"use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Use")])]),e._v(" "),a("p",[e._v("Update the object name which is stored in reference")]),e._v(" "),a("h3",{attrs:{id:"synopsis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[e._v("#")]),e._v(" "),a("strong",[e._v("SYNOPSIS")])]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git update-ref [-m <reason>] (-d <ref> [<oldvalue>] | [--no-deref] [--create-reflog] <ref> <newvalue> [<oldvalue>] | --stdin [-z])\n\n")])])]),a("h3",{attrs:{id:"general-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-syntax"}},[e._v("#")]),e._v(" "),a("strong",[e._v("General Syntax")])]),e._v(" "),a("li",[e._v("\nDereferencing the symbolic refs, update the current branch head to the new object.\n"),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git update-ref HEAD <newvalue>\n\n")])])])]),e._v(" "),a("li",[e._v("\nStores the `newvalue` in `ref`, after verify that the current value of the `ref` matches `oldvalue`.\n"),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git update-ref refs/head/master <newvalue> <oldvalue>\n\n")])])]),a("p",[e._v("above syntax updates the master branch head to "),a("code",[e._v("newvalue")]),e._v(" only if its current value is "),a("code",[e._v("oldvalue")]),e._v(".\n")])]),a("p"),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("-d")]),e._v(" flag to deletes the named "),a("code",[e._v("<ref>")]),e._v(" after verifying it still contains "),a("code",[e._v("<oldvalue>")]),e._v(".")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("--create-reflog")]),e._v(", update-ref will create a reflog for each ref even if one would not ordinarily be created.")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("-z")]),e._v(" flag to specify in NUL-terminated format, which has values like update, create, delete, verify.")]),e._v(" "),a("p",[a("strong",[e._v("Update")])]),e._v(" "),a("p",[e._v("Set "),a("code",[e._v("<ref>")]),e._v(" to "),a("code",[e._v("<newvalue>")]),e._v(" after verifying "),a("code",[e._v("<oldvalue>")]),e._v(", if given. Specify a zero "),a("code",[e._v("<newvalue>")]),e._v(" to ensure the ref does not exist after the update and/or a zero "),a("code",[e._v("<oldvalue>")]),e._v(" to make sure the ref does not exist before the update.")]),e._v(" "),a("p",[a("strong",[e._v("Create")])]),e._v(" "),a("p",[e._v("Create "),a("code",[e._v("<ref>")]),e._v(" with "),a("code",[e._v("<newvalue>")]),e._v(" after verifying it does not exist. The given "),a("code",[e._v("<newvalue>")]),e._v(" may not be zero.")]),e._v(" "),a("p",[a("strong",[e._v("Delete")])]),e._v(" "),a("p",[e._v("Delete "),a("code",[e._v("<ref>")]),e._v(" after verifying it exists with "),a("code",[e._v("<oldvalue>")]),e._v(", if given. If given, "),a("code",[e._v("<oldvalue>")]),e._v(" may not be zero.")]),e._v(" "),a("p",[a("strong",[e._v("Verify")])]),e._v(" "),a("p",[e._v("Verify "),a("code",[e._v("<ref>")]),e._v(" against "),a("code",[e._v("<oldvalue>")]),e._v(" but do not change it. If "),a("code",[e._v("<oldvalue>")]),e._v(" zero or missing, the ref must not exist.")])])}),[],!1,null,null,null);t.default=v.exports}}]);