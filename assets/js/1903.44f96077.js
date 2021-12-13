(window.webpackJsonp=window.webpackJsonp||[]).push([[1903],{2311:function(e,t,s){"use strict";s.r(t);var a=s(31),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"scp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[e._v("#")]),e._v(" SCP")]),e._v(" "),s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[e._v("#")]),e._v(" Basic Usage")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Copy remote file to local dir")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" user@remotehost.com:/remote/path/to/foobar.md /local/dest\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Copy local file to remote dir")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" foobar.md user@remotehost.com:/remote/dest\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Key files can be used (just like ssh)")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i my_key.pem foobar.md user@remotehost.com:/remote/dest\n\n")])])]),s("h2",{attrs:{id:"secure-copy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secure-copy"}},[e._v("#")]),e._v(" Secure Copy")]),e._v(" "),s("p",[e._v("scp command is used to  securely copy a file to or from a remote destination. If the file is in current working directly only filename is sufficient else full path is required which included the remote hostname e.g. remote_user@some_server.org:/path/to/file")]),e._v(" "),s("h3",{attrs:{id:"copy-local-file-in-your-cwd-to-new-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-local-file-in-your-cwd-to-new-directory"}},[e._v("#")]),e._v(" Copy local file in your CWD to new directory")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" localfile.txt /home/friend/share/\n\n")])])]),s("h3",{attrs:{id:"copy-remote-file-to-you-current-working-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-remote-file-to-you-current-working-directory"}},[e._v("#")]),e._v(" Copy remote file to you current working directory")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" rocky@arena51.net:/home/rocky/game/data.txt ./\n\n")])])]),s("h3",{attrs:{id:"copy-file-from-one-remote-location-to-another-remote-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-file-from-one-remote-location-to-another-remote-location"}},[e._v("#")]),e._v(" Copy file from one remote location to another remote location")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" mars@universe.org:/beacon/light/bitmap.conf jupiter@universe.org:/beacon/night/\n\n")])])]),s("h3",{attrs:{id:"to-copy-directory-and-sub-directories-use-r-recursive-option-to-scp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-copy-directory-and-sub-directories-use-r-recursive-option-to-scp"}},[e._v("#")]),e._v(" To copy directory and sub-directories use '-r' recursive option to scp")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -r user@192.168.0.4:~/project/* ./workspace/\n\n")])])]),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),s("ul",[s("li",[e._v("scp [-rv] [-i identity_file] [[user@]host1:]file1 ... [[user@]host2:]file2")])])])}),[],!1,null,null,null);t.default=r.exports}}]);