(window.webpackJsonp=window.webpackJsonp||[]).push([[2624],{3032:function(s,t,a){"use strict";a.r(t);var e=a(31),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"scheduled-tasks-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-tasks-module"}},[s._v("#")]),s._v(" Scheduled tasks module")]),s._v(" "),a("p",[s._v("Examples of how to use the Scheduled Tasks module available in Windows 8/Server 2012 and on.")]),s._v(" "),a("h2",{attrs:{id:"run-powershell-script-in-scheduled-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-powershell-script-in-scheduled-task"}},[s._v("#")]),s._v(" Run PowerShell Script in Scheduled Task")]),s._v(" "),a("p",[s._v("Creates a scheduled task that executes immediately, then on start up to run "),a("code",[s._v("C:\\myscript.ps1")]),s._v(" as "),a("code",[s._v("SYSTEM")])]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskPrincipal")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-ScheduledTaskPrincipal")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("UserId "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SYSTEM"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("LogonType ServiceAccount\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskTrigger1")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-ScheduledTaskTrigger")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("AtStartup\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskTrigger2")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-ScheduledTaskTrigger")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Once "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("At $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Get-Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("RepetitionInterval "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"00:01:00"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("RepetitionDuration $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[timeSpan]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"24855.03:14:07"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskActionParams")]),s._v(" = @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Execute = "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PowerShell.exe"')]),s._v(" \n    Argument = "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-executionpolicy Bypass -NonInteractive -c C:\\myscript.ps1 -verbose >>  C:\\output.log 2>&1\"'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskAction")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-ScheduledTaskAction")]),s._v(" @ScheduledTaskActionParams\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Register-ScheduledTask")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Principal "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskPrincipal")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Trigger @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskTrigger1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskTrigger2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("TaskName "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Example Task"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Action "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ScheduledTaskAction")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);