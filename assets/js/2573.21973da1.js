(window.webpackJsonp=window.webpackJsonp||[]).push([[2573],{2981:function(a,t,s){"use strict";s.r(t);var e=s(31),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"anonymize-ip-v4-and-v6-in-text-file-with-powershell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anonymize-ip-v4-and-v6-in-text-file-with-powershell"}},[a._v("#")]),a._v(" Anonymize IP (v4 and v6) in text file with Powershell")]),a._v(" "),s("p",[a._v("Manipulating Regex for IPv4 and IPv6 and replacing by fake IP address in a readed log file")]),a._v(" "),s("h2",{attrs:{id:"anonymize-ip-address-in-text-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anonymize-ip-address-in-text-file"}},[a._v("#")]),a._v(" Anonymize IP address in text file")]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Read a text file and replace the IPv4 and IPv6 by fake IP Address")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Describe all variables ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SourceFile")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C:\\sourcefile.txt"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$IPv4File")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C:\\IPV4.txt"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$DestFile")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C:\\ANONYM.txt"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Regex_v4")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Anonym_v4")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"XXX.XXX.XXX.XXX"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Regex_v6")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((b((25[0-5])|(1d{2})|(2[0-4]d)|(d{1,2}))b).){3}(b((25[0-5])|(1d{2})|(2[0-4]d)|(d{1,2}))b))|(([0-9A-Fa-f]{1,4}:){0,5}:((b((25[0-5])|(1d{2})|(2[0-4]d)|(d{1,2}))b).){3}(b((25[0-5])|(1d{2})|(2[0-4]d)|(d{1,2}))b))|(::([0-9A-Fa-f]{1,4}:){0,5}((b((25[0-5])|(1d{2})|(2[0-4]d)|(d{1,2}))b).){3}(b((25[0-5])|(1d{2})|(2[0-4]d)|(d{1,2}))b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Anonym_v6")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YYYY:YYYY:YYYY:YYYY:YYYY:YYYY:YYYY:YYYY"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SuffixName")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-ANONYM."')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AnonymFile")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Parts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SuffixName")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Parts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Replace matching IPv4 from sourcefile and creating a temp file IPV4.txt")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get-Content")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SourceFile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Foreach-Object")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-replace")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Regex_v4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Anonym_v4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Set-Content")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$IPv4File")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Replace matching IPv6 from IPV4.txt and creating a temp file ANONYM.txt")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get-Content")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$IPv4File")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Foreach-Object")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-replace")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Regex_v6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Anonym_v6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Set-Content")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$DestFile")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Delete temp IPV4.txt file")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Remove-Item")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$IPv4File")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Rename ANONYM.txt in sourcefile-ANONYM.txt")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Parts")]),a._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SourceFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("If")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Test-Path")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AnonymFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Remove-Item")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AnonymFile")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Rename-Item")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$DestFile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("NewName "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AnonymFile")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Else")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Rename-Item")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$DestFile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("NewName "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AnonymFile")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);