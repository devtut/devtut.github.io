(window.webpackJsonp=window.webpackJsonp||[]).push([[1897],{2305:function(s,e,t){"use strict";t.r(e);var a=t(31),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ls-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ls-command"}},[s._v("#")]),s._v(" ls command")]),s._v(" "),t("h2",{attrs:{id:"options-for-ls-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options-for-ls-command"}},[s._v("#")]),s._v(" Options for ls command")]),s._v(" "),t("p",[t("strong",[s._v("Full list of options:")])]),s._v(" "),t("p",[t("code",[s._v("ls -a")]),s._v("     list all files including hidden file starting with '.'")]),s._v(" "),t("p",[t("code",[s._v("ls --color")]),s._v("     colored list [=always/never/auto]")]),s._v(" "),t("p",[t("code",[s._v("ls -d")]),s._v("     list directories - with ' */'")]),s._v(" "),t("p",[t("code",[s._v("ls -F")]),s._v("     add one char of */=>@| to enteries")]),s._v(" "),t("p",[t("code",[s._v("ls -i")]),s._v("     list file's inode index number")]),s._v(" "),t("p",[t("code",[s._v("ls -l")]),s._v("     list with long format - show permissions")]),s._v(" "),t("p",[t("code",[s._v("ls -la")]),s._v("     list long format including hidden files")]),s._v(" "),t("p",[t("code",[s._v("ls -lh")]),s._v("     list long format with readable file size")]),s._v(" "),t("p",[t("code",[s._v("ls -ls")]),s._v("     list with long format with file size")]),s._v(" "),t("p",[t("code",[s._v("ls -r")]),s._v("     list in reverse order")]),s._v(" "),t("p",[t("code",[s._v("ls -R")]),s._v("     list recursively directory tree")]),s._v(" "),t("p",[t("code",[s._v("ls -s")]),s._v("     list file size")]),s._v(" "),t("p",[t("code",[s._v("ls -S")]),s._v("     sort by file size")]),s._v(" "),t("p",[t("code",[s._v("ls -t")]),s._v("     sort by time & date")]),s._v(" "),t("p",[t("code",[s._v("ls -X")]),s._v("     sort by extension name")]),s._v(" "),t("h2",{attrs:{id:"ls-command-with-most-used-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ls-command-with-most-used-options"}},[s._v("#")]),s._v(" ls command with most used options.")]),s._v(" "),t("p",[s._v("ls shows files and directories in present working directory. (if no arguments are passed.) (It doesn't show hidden files which starts with . by default.)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("user@ubuntu14:/usr$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nbin  games  include  lib  lib32  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("  sbin  share  src\n\n")])])]),t("p",[s._v("To see all files (hidden files/folders also).\nUse "),t("code",[s._v("ls -a")]),s._v(" OR "),t("code",[s._v("ls -all")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("user@ubuntu14:/usr$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -a\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("  bin  games  include  lib  lib32  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("  sbin  share  src\n\n")])])]),t("p",[s._v("To differentiate between files and folders and symbolic links and other, use "),t("code",[s._v("ls -F")]),s._v(" OR "),t("code",[s._v("ls --classify")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("user@ubuntu14:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -F\nbash_profile_course  chat_apps/      Desktop/    Downloads/    foxitsoftware/   \nPublic/     test/    bin/    ClionProjects/  Documents/    IDE/    Music/\nPictures/  Templates/  Videos/\n\n")])])]),t("p",[s._v("Here, ending characters are used to distinguish files and folders.")]),s._v(" "),t("p",[s._v("“/” suggest directory.")]),s._v(" "),t("p",[s._v("“*”suggest executables.")]),s._v(" "),t("p",[s._v("“@” suggest symbolic links.")]),s._v(" "),t("p",[s._v("To get more details about the files and directories, use "),t("code",[s._v("ls -l")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("user@ubuntu14:~/example$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6464")]),s._v("\n\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" dave dave      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(" Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":19 Z.txt\ndrwxr-xr-x "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" user group    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":00 a_directory\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" user group       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":01 a_file\nlrwxrwxrwx "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" user group       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":04 a_link -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a_file\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" user group       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":03 a_newer_file\n-rw-r----- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" user group "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6586816")]),s._v(" Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":07 big.zip\n\n")])])]),t("p",[s._v("In this example, the total size of the contents is 6460KB.")]),s._v(" "),t("p",[s._v("Then there is an entry for each file/directory in alphabetical order with upper case before lower case.")]),s._v(" "),t("p",[s._v("The first character is the type (e.g. d - directory, l - link).")]),s._v(" "),t("p",[s._v("The next 9 characters show the permissions for the user, group and other.")]),s._v(" "),t("p",[s._v("This is followed by the number of hard links, then the owner's name and group.")]),s._v(" "),t("p",[s._v("The next field is the size in bytes.  This can be displayed in a human friendly form by adding the "),t("code",[s._v("-h")]),s._v(" option e.g. 6586816 is displayed as 6.3M")]),s._v(" "),t("p",[s._v("There then follows a timestamp (usually the modification time).")]),s._v(" "),t("p",[s._v("The final field is the name. Note: links also show the target of the link.")])])}),[],!1,null,null,null);e.default=r.exports}}]);