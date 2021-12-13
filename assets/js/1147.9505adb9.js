(window.webpackJsonp=window.webpackJsonp||[]).push([[1147],{1555:function(t,e,s){"use strict";s.r(e);var a=s(31),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"resolving-merge-conflicts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolving-merge-conflicts"}},[t._v("#")]),t._v(" Resolving merge conflicts")]),t._v(" "),s("h2",{attrs:{id:"manual-resolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-resolution"}},[t._v("#")]),t._v(" Manual Resolution")]),t._v(" "),s("p",[t._v("While performing a "),s("code",[t._v("git merge")]),t._v(' you may find that git reports a "merge conflict" error. It will report to you which files have conflicts, and you will need to resolve the conflicts.')]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("git status")]),t._v(" at any point will help you see what still needs editing with a helpful message like")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("On branch master\nYou have unmerged paths.\n  (fix conflicts and run "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit"')]),t._v(")\n\nUnmerged paths:\n  (use "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to mark resolution)\n\n    both modified:      index.html\n\nno changes added to commit (use "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" and/or "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),t._v(")\n\n")])])]),s("p",[t._v("Git leaves markers in the files to tell you where the conflict arose:")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("<<<<<<<<< HEAD: index.html #indicates the state of your current branch\n<div id="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),t._v(">contact : email@somedomain.com</div>\n========= #indicates break between conflicts\n<div id="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),t._v(">\nplease contact us at email@somedomain.com\n</div>\n>>>>>>>>> iss2: index.html #indicates the state of the other branch (iss2)\n\n")])])]),s("p",[t._v("In order to resolve the conflicts, you must edit the area between the <<<<<< and >>>>>>> markers appropriately, remove the status lines (the <<<<<<<, >>>>>>>, and ======== lines) completely. Then "),s("code",[t._v("git add index.html")]),t._v(" to mark it resolved and "),s("code",[t._v("git commit")]),t._v(" to finish the merge.")])])}),[],!1,null,null,null);e.default=n.exports}}]);