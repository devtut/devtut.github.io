(window.webpackJsonp=window.webpackJsonp||[]).push([[2635],{3043:function(s,a,t){"use strict";t.r(a);var e=t(31),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"using-existing-static-classes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-existing-static-classes"}},[s._v("#")]),s._v(" Using existing static classes")]),s._v(" "),t("p",[s._v("These classes are reference libraries of methods and properties that do not change state, in one word, immutable. You don't need to create them, you simply use them. Classes and methods such as these are called static classes because they are not created, destroyed, or changed.You can refer to a static class by surrounding the class name with square brackets.")]),s._v(" "),t("h2",{attrs:{id:"using-the-net-math-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-net-math-class"}},[s._v("#")]),s._v(" Using the .Net Math Class")]),s._v(" "),t("p",[s._v("You can use the .Net Math class to do calculations ([System.Math])")]),s._v(" "),t("p",[s._v("If you want to know which methods are available you can use:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[System.Math]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Get-Member")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Static "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("MemberType Methods\n\n")])])]),t("p",[s._v("Here are some examples how to use the Math class:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" C:\\> "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[System.Math]")]),s._v("::Floor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("42"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n9\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" C:\\> "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[System.Math]")]),s._v("::Ceiling"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("42"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n10\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" C:\\> "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[System.Math]")]),s._v("::Pow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n64\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" C:\\> "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[System.Math]")]),s._v("::Sqrt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("49"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n7\n\n")])])]),t("h2",{attrs:{id:"adding-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-types"}},[s._v("#")]),s._v(" Adding types")]),s._v(" "),t("p",[s._v("By Assembly Name, add library")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Add-Type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("AssemblyName "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System.Math"')]),s._v("\n\n")])])]),t("p",[s._v("or by file path:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Add-Type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Path "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:\\Libs\\CustomMath.dll"')]),s._v("\n\n")])])]),t("p",[s._v("To Use added type:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[CustomMath.NameSpace]")]),s._v("::Method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("param1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$variableParam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[int]")]),s._v("castMeAsIntParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"creating-new-guid-instantly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-guid-instantly"}},[s._v("#")]),s._v(" Creating new GUID instantly")]),s._v(" "),t("p",[s._v("Use existing .NET classes instantly with PowerShell by using [class]::Method(args):")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" C:\\> "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[guid]")]),s._v("::NewGuid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nGuid\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n8874a185"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("64be"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("43ed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a64c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d2fe4b6e31bc\n\n")])])]),t("p",[s._v("Similarly, in PowerShell 5+ you may use the "),t("code",[s._v("New-Guid")]),s._v(" cmdlet:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" C:\\> "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-Guid")]),s._v("\n\nGuid\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n8874a185"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("64be"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("43ed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a64c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d2fe4b6e31bc\n\n")])])]),t("p",[s._v("To get the GUID as a "),t("code",[s._v("[String]")]),s._v(" only, referenced the "),t("code",[s._v(".Guid")]),s._v(" property:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[guid]")]),s._v("::NewGuid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Guid\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);