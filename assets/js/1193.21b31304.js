(window.webpackJsonp=window.webpackJsonp||[]).push([[1193],{1601:function(a,s,t){"use strict";t.r(s);var e=t(31),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"google-protocol-buffers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#google-protocol-buffers"}},[a._v("#")]),a._v(" Google Protocol Buffers")]),a._v(" "),t("h2",{attrs:{id:"creating-building-and-using-a-simple-proto-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-building-and-using-a-simple-proto-file"}},[a._v("#")]),a._v(" Creating, building and using a simple .proto file")]),a._v(" "),t("p",[a._v("Let us first create a simple "),t("code",[a._v(".proto")]),a._v(" file "),t("code",[a._v("person.proto")])]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("package")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Protocol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("message")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Person")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("required")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("string")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("firstName")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("required")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("string")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("lastName")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("optional")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("int32")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("age")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("p",[a._v("After saving we can now create the Haskell files which we can use in our project by running")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/.")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("local")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("hprotoc")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--proto_path=. --haskell_out=. person.proto")]),a._v("\n\n")])])]),t("p",[a._v("We should get an output similar to this:")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Loading")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("filepath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/<path-to-project>/person.proto"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("All")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("proto")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("files")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("loaded")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Haskell")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mangling")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("done")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Recursive")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("modules")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("resolved")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("./")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Protocol")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("Person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hs")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("./")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("Protocol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hs")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Processing")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("complete")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("have")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("nice")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("day")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n")])])]),t("p",[t("code",[a._v("hprotoc")]),a._v(" will create a new folder "),t("code",[a._v("Protocol")]),a._v(" in the current directory with "),t("code",[a._v("Person.hs")]),a._v(" which we can simply import into our haskell project:")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token import-statement"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Protocol")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),t("p",[a._v("As a next step, if using "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/haskell/2970/stack#t=201607261729341127981",target:"_blank",rel:"noopener noreferrer"}},[a._v("Stack"),t("OutboundLink")],1),a._v(" add")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n  protocol-buffers\n , protocol-buffers-descriptor\n\n")])])]),t("p",[a._v("to "),t("code",[a._v("build-depends:")]),a._v(" and")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Protocol")]),a._v("\n\n")])])]),t("p",[a._v("to "),t("code",[a._v("exposed-modules")]),a._v(" in your "),t("code",[a._v(".cabal")]),a._v(" file.")]),a._v(" "),t("p",[a._v("If we get now a incoming message from a stream, the message will have the type "),t("code",[a._v("ByteString")]),a._v(".")]),a._v(" "),t("p",[a._v("In order to transform the "),t("code",[a._v("ByteString")]),a._v(' (which obviously should contain encoded "Person" data) into our Haskell data type, we need to call the function '),t("code",[a._v("messageGet")]),a._v(" which we import by")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token import-statement"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ProtocolBuffers")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("messageGet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),t("p",[a._v("which enables to create a value of type "),t("code",[a._v("Person")]),a._v(" using:")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("transformRawPerson")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ByteString")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Maybe")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Person")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("transformRawPerson")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("raw")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("messageGet")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("raw")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("of")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Left")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Nothing")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Right")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Just")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("person")]),a._v("\n\n")])])]),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),t("p",[a._v("To use Protocol Buffers with Haskell you should install the "),t("code",[a._v("htprotoc")]),a._v(" package:")]),a._v(" "),t("ol",[t("li",[a._v("Clone the project from "),t("a",{attrs:{href:"https://github.com/k-bx/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[a._v("Github"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("Use "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/haskell/2970/stack#t=201607261652127336017",target:"_blank",rel:"noopener noreferrer"}},[a._v("Stack"),t("OutboundLink")],1),a._v(" to build and install")])]),a._v(" "),t("p",[a._v("You should now find the "),t("code",[a._v("hprotoc")]),a._v(" executable in "),t("code",[a._v("$HOME/.local/bin/")]),a._v(".")])])}),[],!1,null,null,null);s.default=r.exports}}]);