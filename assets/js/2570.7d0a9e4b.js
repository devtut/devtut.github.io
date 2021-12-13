(window.webpackJsonp=window.webpackJsonp||[]).push([[2570],{2978:function(t,s,a){"use strict";a.r(s);var e=a(31),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases"}},[t._v("#")]),t._v(" Aliases")]),t._v(" "),a("h2",{attrs:{id:"get-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-alias"}},[t._v("#")]),t._v(" Get-Alias")]),t._v(" "),a("p",[t._v("To list all aliases and their functions:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Alias")]),t._v("\n\n")])])]),a("p",[t._v("To get all aliases for specific cmdlet:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get-alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Definition "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v("\n\nCommandType     Name                                               Version    Source\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                                               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nAlias           "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v("\nAlias           "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gci")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v("\nAlias           "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v("\n\n")])])]),a("p",[t._v("To find aliases by matching:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get-alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\nCommandType     Name                                               Version    Source\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                                               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nAlias           "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("popd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pop-Location")]),t._v("\nAlias           proc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Process")]),t._v("\nAlias           "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Process")]),t._v("\nAlias           "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Push-Location")]),t._v("\nAlias           "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pwd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Location")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"set-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-alias"}},[t._v("#")]),t._v(" Set-Alias")]),t._v(" "),a("p",[t._v("This cmdlet allows you to create new alternate names for exiting cmdlets")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-Alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name proc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Value "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Process")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> proc\n\nHandles  NPM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("K"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    PM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("K"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      WS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("K"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" VM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   CPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     Id  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SI")]),t._v(" ProcessName\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n    292      17    13052      20444 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("19     7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("94    620   1 ApplicationFrameHost\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),a("p",[t._v("Keep in mind that any alias you create will be persisted only in current session. When you start new session you need to create your aliases again. Powershell Profiles (see [topic not yet created]) are great for these purposes.")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Powershell naming system has quite strict rules of naming cmdlets (Verb-Noun template; see [topic not yet created] for more information). But it is not really convenient to write "),a("code",[t._v("Get-ChildItems")]),t._v(" every time you want to list files in directory interactively."),a("br"),t._v("\nTherefore Powershell enables using shortcuts - aliases - instead of cmdlet names.")]),t._v(" "),a("p",[t._v("You can write "),a("code",[t._v("ls")]),t._v(", "),a("code",[t._v("dir")]),t._v(" or "),a("code",[t._v("gci")]),t._v(" instead of "),a("code",[t._v("Get-ChildItem")]),t._v(" and get the same result. Alias is equivalent to its cmdlet.")]),t._v(" "),a("p",[t._v("Some of the common aliases are:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("alias")]),t._v(" "),a("th",[t._v("cmdlet")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("%, foreach")]),t._v(" "),a("td",[t._v("For-EachObject")])]),t._v(" "),a("tr",[a("td",[t._v("?, where")]),t._v(" "),a("td",[t._v("Where-Object")])]),t._v(" "),a("tr",[a("td",[t._v("cat, gc, type")]),t._v(" "),a("td",[t._v("Get-Content")])]),t._v(" "),a("tr",[a("td",[t._v("cd, chdir, sl")]),t._v(" "),a("td",[t._v("Set-Location")])]),t._v(" "),a("tr",[a("td",[t._v("cls, clear")]),t._v(" "),a("td",[t._v("Clear-Host")])]),t._v(" "),a("tr",[a("td",[t._v("cp, copy, cpi")]),t._v(" "),a("td",[t._v("Copy-Item")])]),t._v(" "),a("tr",[a("td",[t._v("dir/ls/gci")]),t._v(" "),a("td",[t._v("Get-ChildItem")])]),t._v(" "),a("tr",[a("td",[t._v("echo, write")]),t._v(" "),a("td",[t._v("Write-Output")])]),t._v(" "),a("tr",[a("td",[t._v("fl")]),t._v(" "),a("td",[t._v("Format-List")])]),t._v(" "),a("tr",[a("td",[t._v("ft")]),t._v(" "),a("td",[t._v("Format-Table")])]),t._v(" "),a("tr",[a("td",[t._v("fw")]),t._v(" "),a("td",[t._v("Format-Wide")])]),t._v(" "),a("tr",[a("td",[t._v("gc, pwd")]),t._v(" "),a("td",[t._v("Get-Location")])]),t._v(" "),a("tr",[a("td",[t._v("gm")]),t._v(" "),a("td",[t._v("Get-Member")])]),t._v(" "),a("tr",[a("td",[t._v("iex")]),t._v(" "),a("td",[t._v("Invoke-Expression")])]),t._v(" "),a("tr",[a("td",[t._v("ii")]),t._v(" "),a("td",[t._v("Invoke-Item")])]),t._v(" "),a("tr",[a("td",[t._v("mv, move")]),t._v(" "),a("td",[t._v("Move-Item")])]),t._v(" "),a("tr",[a("td",[t._v("rm, rmdir, del, erase, rd, ri")]),t._v(" "),a("td",[t._v("Remove-Item")])]),t._v(" "),a("tr",[a("td",[t._v("sleep")]),t._v(" "),a("td",[t._v("Start-Sleep")])]),t._v(" "),a("tr",[a("td",[t._v("start, saps")]),t._v(" "),a("td",[t._v("Start-Process")])])])]),t._v(" "),a("p",[t._v("In the table above, you can see how aliases enabled simulating commands known from other environments (cmd, bash), hence increased discoverability.")])])}),[],!1,null,null,null);s.default=r.exports}}]);