(window.webpackJsonp=window.webpackJsonp||[]).push([[2597],{3004:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-download-latest-artifact-from-artifactory-using-powershell-script-v2-0-or-below"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-download-latest-artifact-from-artifactory-using-powershell-script-v2-0-or-below"}},[t._v("#")]),t._v(" How to download latest artifact from Artifactory using Powershell script (v2.0 or below)?")]),t._v(" "),s("p",[t._v("This documentation explains and provides steps to download latest artifact from a JFrog Artifactory repository using Powershell Script (v2.0 or below).")]),t._v(" "),s("h2",{attrs:{id:"powershell-script-for-downloading-the-latest-artifcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell-script-for-downloading-the-latest-artifcat"}},[t._v("#")]),t._v(" Powershell Script for downloading the latest artifcat")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$username")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),t._v("= "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DESTINATION")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:\\test\\latest.tar.gz"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebClient\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Credentials = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new-object")]),t._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NetworkCredential"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lastModifiedResponse")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://domain.org.com/artifactory/api/storage/FOLDER/repo/?lastModified'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Reflection.Assembly]")]),t._v("::LoadWithPartialName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"System.Web.Extensions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$serializer")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Serialization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JavaScriptSerializer\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$getLatestModifiedResponse")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$serializer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DeserializeObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lastModifiedResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$downloaUriResponse")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$getLatestModifiedResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uri\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uri\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$latestArtifcatUrlResponse")]),t._v("="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$downloaUriResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Reflection.Assembly]")]),t._v("::LoadWithPartialName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"System.Web.Extensions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$serializer")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Serialization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JavaScriptSerializer\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$getLatestArtifact")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$serializer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DeserializeObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$latestArtifcatUrlResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$getLatestArtifact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("downloadUri\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SOURCE")]),t._v("="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$getLatestArtifact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("downloadUri\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SOURCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DESTINATION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);