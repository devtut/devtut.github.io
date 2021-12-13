(window.webpackJsonp=window.webpackJsonp||[]).push([[1110],{1518:function(t,e,r){"use strict";r.r(e);var a=r(31),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cherry-picking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cherry-picking"}},[t._v("#")]),t._v(" Cherry Picking")]),t._v(" "),r("p",[t._v("A cherry-pick takes the patch that was introduced in a commit and tries to reapply it on the branch you’re currently on.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source: Git SCM Book"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"copying-a-commit-from-one-branch-to-another"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copying-a-commit-from-one-branch-to-another"}},[t._v("#")]),t._v(" Copying a commit from one branch to another")]),t._v(" "),r("p",[r("code",[t._v("git cherry-pick <commit-hash>")]),t._v(" will apply the changes made in an existing commit to another branch, while recording a new commit. Essentially, you can copy commits from branch to branch.")]),t._v(" "),r("p",[t._v("Given the following tree "),r("a",{attrs:{href:"https://ariejan.net/2010/06/10/cherry-picking-specific-commits-from-another-branch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("(Source)"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[t._v("dd2e86 - 946992 - 9143a9 - a6fd86 - 5a6057 [master]\n           \\\n            76cada - 62ecb3 - b886a0 [feature]\n\n")])])]),r("p",[t._v("Let's say we want to copy "),r("code",[t._v("b886a0")]),t._v(" to master (on top of "),r("code",[t._v("5a6057")]),t._v(").")]),t._v(" "),r("p",[t._v("We can run")]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[t._v("git checkout master\ngit cherry-pick b886a0\n\n")])])]),r("p",[t._v("Now our tree will look something like:")]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[t._v("dd2e86 - 946992 - 9143a9 - a6fd86 - 5a6057 - a66b23 [master]\n           \\\n            76cada - 62ecb3 - b886a0 [feature]\n\n")])])]),r("p",[t._v("Where the new commit "),r("code",[t._v("a66b23")]),t._v(" has the same content (source diff, commit message) as "),r("code",[t._v("b886a0")]),t._v(" (but a different parent). Note that cherry-picking will only pick up changes on that commit("),r("code",[t._v("b886a0")]),t._v(" in this case) not all the changes in feature branch (for this you will have to either use rebasing or merging).")]),t._v(" "),r("h2",{attrs:{id:"copying-a-range-of-commits-from-one-branch-to-another"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copying-a-range-of-commits-from-one-branch-to-another"}},[t._v("#")]),t._v(" Copying a range of commits from one branch to another")]),t._v(" "),r("p",[r("code",[t._v("git cherry-pick <commit-A>..<commit-B>")]),t._v(" will place every commit "),r("strong",[t._v("after")]),t._v(" A and up to and including B on top of the currently checked-out branch.")]),t._v(" "),r("p",[r("code",[t._v("git cherry-pick <commit-A>^..<commit-B>")]),t._v(" will place commit A and every commit up to and including B on top of the currently checked-out branch.")]),t._v(" "),r("h2",{attrs:{id:"checking-if-a-cherry-pick-is-required"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#checking-if-a-cherry-pick-is-required"}},[t._v("#")]),t._v(" Checking if a cherry-pick is required")]),t._v(" "),r("p",[t._v("Before you start the cherry-pick process, you can check if the commit you want to cherry-pick already exists in the target branch, in which case you don't have to do anything.")]),t._v(" "),r("p",[r("code",[t._v("git branch --contains <commit>")]),t._v(" lists local branches that contain the specified commit.")]),t._v(" "),r("p",[r("code",[t._v("git branch -r --contains <commit>")]),t._v(" also includes remote tracking branches in the list.")]),t._v(" "),r("h2",{attrs:{id:"find-commits-yet-to-be-applied-to-upstream"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#find-commits-yet-to-be-applied-to-upstream"}},[t._v("#")]),t._v(" Find commits yet to be applied to upstream")]),t._v(" "),r("p",[t._v("Command "),r("code",[t._v("git cherry")]),t._v(" shows the changes which haven't yet been cherry-picked.")]),t._v(" "),r("p",[t._v("Example:")]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[t._v("git checkout master\ngit cherry development\n\n")])])]),r("p",[t._v("... and see output a bit like this:")]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[r("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+ 492508acab7b454eee8b805f8ba906056eede0ff")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("- 5ceb5a9077ddb9e78b1e8f24bfc70e674c627949")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+ b4459544c000f4d51d1ec23f279d9cdb19c1d32b")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+ b6ce3b78e938644a293b2dd2a15b2fecb1b54cd9")]),t._v("\n\n")])])]),r("p",[t._v("The commits that being with "),r("code",[t._v("+")]),t._v(" will be the ones that haven't yet cherry-picked into "),r("code",[t._v("development")]),t._v(".")]),t._v(" "),r("p",[r("strong",[t._v("Syntax:")])]),t._v(" "),r("p",[r("code",[t._v("git cherry [-v] [<upstream> [<head> [<limit>]]]")])]),t._v(" "),r("p",[t._v("Options:")]),t._v(" "),r("p",[r("strong",[t._v("-v")]),t._v(" Show the commit subjects next to the SHA1s.")]),t._v(" "),r("p",[r("strong",[t._v("< upstream >")]),t._v(" Upstream branch to search for equivalent commits. Defaults to the upstream branch of HEAD.")]),t._v(" "),r("p",[r("strong",[t._v("< head >")]),t._v(" Working branch; defaults to HEAD.")]),t._v(" "),r("p",[r("strong",[t._v("< limit >")]),t._v(" Do not report commits up to (and including) limit.")]),t._v(" "),r("p",[t._v("Check "),r("a",{attrs:{href:"https://git-scm.com/docs/git-cherry",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-cherry documentation"),r("OutboundLink")],1),t._v(" for more info.")]),t._v(" "),r("h4",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),r("li",[t._v("git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]\n[-S[key-id]] commit...")]),t._v("\n- git cherry-pick --continue\n- git cherry-pick --quit\n- git cherry-pick --abort\n"),r("h4",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameters")]),t._v(" "),r("th",[t._v("Details")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("-e, --edit")]),t._v(" "),r("td",[t._v("With this option, "),r("code",[t._v("git cherry-pick")]),t._v(" will let you edit the commit message prior to committing.")])]),t._v(" "),r("tr",[r("td",[t._v("-x")]),t._v(" "),r("td",[t._v('When recording the commit, append a line that says "(cherry picked from commit …​)" to the original commit message in order to indicate which commit this change was cherry-picked from. This is done only for cherry picks without conflicts.')])]),t._v(" "),r("tr",[r("td",[t._v("--ff")]),t._v(" "),r("td",[t._v("If the current HEAD is the same as the parent of the cherry-pick’ed commit, then a fast forward to this commit will be performed.")])]),t._v(" "),r("tr",[r("td",[t._v("--continue")]),t._v(" "),r("td",[t._v("Continue the operation in progress using the information in .git/sequencer. Can be used to continue after resolving conflicts in a failed cherry-pick or revert.")])]),t._v(" "),r("tr",[r("td",[t._v("--quit")]),t._v(" "),r("td",[t._v("Forget about the current operation in progress. Can be used to clear the sequencer state after a failed cherry-pick or revert.")])]),t._v(" "),r("tr",[r("td",[t._v("--abort")]),t._v(" "),r("td",[t._v("Cancel the operation and return to the pre-sequence state.")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);