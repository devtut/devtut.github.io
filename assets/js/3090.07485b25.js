(window.webpackJsonp=window.webpackJsonp||[]).push([[3090],{3498:function(e,t,a){"use strict";a.r(t);var s=a(31),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"loading-source-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-source-files"}},[e._v("#")]),e._v(" Loading Source Files")]),e._v(" "),a("h2",{attrs:{id:"require-files-to-be-loaded-only-once"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-files-to-be-loaded-only-once"}},[e._v("#")]),e._v(" Require files to be loaded only once")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"http://www.rubydoc.info/stdlib/core/Kernel%3Arequire",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kernel#require"),a("OutboundLink")],1),e._v(" method will load files only once (several calls to "),a("code",[e._v("require")]),e._v(" will result in the code in that file being evaluated only once). It will search your ruby "),a("code",[e._v("$LOAD_PATH")]),e._v(" to find the required file if the parameter is not an absolute path. Extensions like "),a("code",[e._v(".rb")]),e._v(", "),a("code",[e._v(".so")]),e._v(", "),a("code",[e._v(".o")]),e._v(" or "),a("code",[e._v(".dll")]),e._v(" are optional. Relative paths will be resolved to the current working directory of the process.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'awesome_print'")]),e._v("\n\n")])])]),a("p",[e._v("The "),a("a",{attrs:{href:"http://www.rubydoc.info/stdlib/core/Kernel%3Arequire_relative",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kernel#require_relative"),a("OutboundLink")],1),e._v(" allows you to load files relative to the file in which "),a("code",[e._v("require_relative")]),e._v(" is called.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# will search in directory myproj relative to current source file.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\nrequire_relative "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'myproj/version'")]),e._v("  \n\n")])])]),a("h2",{attrs:{id:"automatically-loading-source-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatically-loading-source-files"}},[e._v("#")]),e._v(" Automatically loading source files")]),e._v(" "),a("p",[e._v("The method "),a("a",{attrs:{href:"http://www.rubydoc.info/stdlib/core/Kernel%3Aautoload",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Kernel#autoload")]),a("OutboundLink")],1),e._v(" registers filename to be loaded (using "),a("code",[e._v("Kernel::require")]),e._v(") the first time that module (which may be a String or a symbol) is accessed.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("autoload "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":MyModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/usr/local/lib/modules/my_module.rb'")]),e._v(" \n\n")])])]),a("p",[e._v("The method "),a("a",{attrs:{href:"http://www.rubydoc.info/stdlib/core/Kernel%3Aautoload%253F",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kernel#autoload?"),a("OutboundLink")],1),e._v(" returns filename to be loaded if name is registered as "),a("code",[e._v("autoload")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("autoload"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":MyModule")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#=> '/usr/local/lib/modules/my_module.rb'")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"loading-optional-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-optional-files"}},[e._v("#")]),e._v(" Loading optional files")]),e._v(" "),a("p",[e._v("When files are not available, the "),a("code",[e._v("require")]),e._v(" family will throw a "),a("a",{attrs:{href:"http://www.rubydoc.info/stdlib/core/LoadError",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("LoadError")]),a("OutboundLink")],1),e._v(". This is an example which illustrates loading optional modules only if they exist.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("module")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("TidBits")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("@@unavailableModules")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'CoreExtend'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'core_extend/lib/core_extend'")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" \\\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Fs'")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'fs/lib/fs'")]),e._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" \\\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Options'")]),e._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'options/lib/options'")]),e._v("          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" \\\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Susu'")]),e._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'susu/lib/susu'")]),e._v("                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" \\\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("each")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("begin")]),e._v("\n\n        require_relative lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":file")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rescue")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("LoadError")]),e._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("@@unavailableModules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("push lib\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# module TidBits")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"loading-files-repeatedly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-files-repeatedly"}},[e._v("#")]),e._v(" Loading files repeatedly")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"http://www.rubydoc.info/stdlib/core/Kernel%3Aload",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kernel#load"),a("OutboundLink")],1),e._v(" method will evaluate the code in the given file. The search path will be constructed as with "),a("code",[e._v("require")]),e._v(". It will re-evaluate that code on every subsequent call unlike "),a("code",[e._v("require")]),e._v(". There is no "),a("code",[e._v("load_relative")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("load `somefile`\n\n")])])]),a("h2",{attrs:{id:"loading-several-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-several-files"}},[e._v("#")]),e._v(" Loading several files")]),e._v(" "),a("p",[e._v("You can use any ruby technique to dynamically create a list of files to load. Illustration of globbing for files starting with "),a("code",[e._v("test")]),e._v(", loaded in alphabetical order.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("Dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[e._v("#{")]),e._v(" __dir__ "),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[e._v("}")])]),e._v('**/test*.rb"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("each")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n\n    require_relative source\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);