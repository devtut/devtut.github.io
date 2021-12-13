(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{918:function(s,t,e){"use strict";e.r(t);var a=e(31),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"jobs-at-specific-times"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jobs-at-specific-times"}},[s._v("#")]),s._v(" Jobs at specific times")]),s._v(" "),e("h2",{attrs:{id:"execute-job-once-at-specific-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-job-once-at-specific-time"}},[s._v("#")]),s._v(" Execute job once at specific time")]),s._v(" "),e("p",[e("strong",[s._v("Note:")]),s._v(" "),e("strong",[s._v("at")]),s._v(" is not installed by default on most of modern distributions.")]),s._v(" "),e("p",[s._v("To execute a job once at some other time than now, in this example 5pm, you can use")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"somecommand &"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" at 5pm\n\n")])])]),e("p",[s._v("If you want to catch the output, you can do that in the usual way:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"somecommand > out.txt 2>err.txt &"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" at 5pm\n\n")])])]),e("p",[e("code",[s._v("at")]),s._v(" understands many time formats, so you can also say")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"somecommand &"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" at now + "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"somecommand &"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" at "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":00\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"somecommand &"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" at "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":00 Jul "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"somecommand &"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" at 4pm "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.03")]),s._v(".17\n\n")])])]),e("p",[s._v("If no year or date are given, it assumes the next time the time you specified occurs. So if you give a hour that already passed today, it will assume tomorrow, and if you give a month that already passed this year, it will assume next year.")]),s._v(" "),e("p",[s._v("This also works together with nohup like you would expect.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nohup somecommand > out.txt 2>err.txt &"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" at 5pm\n\n")])])]),e("p",[s._v("There are some more commands to control timed jobs:")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("atq")]),s._v(" lists all timed jobs ("),e("strong",[s._v("atq")]),s._v("ueue)")]),s._v(" "),e("li",[e("strong",[s._v("atrm")]),s._v(" removes  a timed job ("),e("strong",[s._v("atr")]),s._v("e"),e("strong",[s._v("m")]),s._v("ove )")]),s._v(" "),e("li",[e("strong",[s._v("batch")]),s._v(" does basically the same like at, but runs jobs only when system load is lower than 0.8")])]),s._v(" "),e("p",[s._v("All commands apply to jobs of the user logged in.\nIf logged in as root, system wide jobs are handled of course.")]),s._v(" "),e("h2",{attrs:{id:"doing-jobs-at-specified-times-repeatedly-using-systemd-timer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#doing-jobs-at-specified-times-repeatedly-using-systemd-timer"}},[s._v("#")]),s._v(" Doing jobs at specified times repeatedly using systemd.timer")]),s._v(" "),e("p",[e("strong",[s._v("systemd")]),s._v(" provides a modern implementation of "),e("strong",[s._v("cron")]),s._v(". To execute a script periodical a service and a timer file ist needed.\nThe service and timer files should be placed in /etc/systemd/{system,user}.\nThe service file:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my script or programm does the very best and this is the description\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# type is important!")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# program|script to call. Always use absolute pathes ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# and redirect STDIN and STDERR as there is no terminal while being executed ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/absolute/path/to/someCommand "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("/path/to/output "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/path/to/STDERRoutput\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#NO install section!!!! Is handled by the timer facitlities itself.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#[Install]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#WantedBy=multi-user.target")]),s._v("\n\n")])])]),e("p",[s._v("Next the timer file:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my very first systemd timer\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Timer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Syntax for date/time specifications is  Y-m-d H:M:S ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# a * means "each", and a comma separated list of items can be given too')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# *-*-* *,15,30,45:00  says every year, every month, every day, each hour,")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# at minute 15,30,45 and zero seconds")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OnCalendar")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("*-*-* *:01:00  \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# this one runs each hour at one minute zero second e.g. 13:01:00 ")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);