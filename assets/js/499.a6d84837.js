(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{907:function(s,a,e){"use strict";e.r(a);var t=e(31),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[s._v("#")]),s._v(" Find")]),s._v(" "),e("p",[s._v("find is a command to recursively search a directory for files(or directories) that match a criteria, and then perform some action on the selected files.")]),s._v(" "),e("p",[s._v("find search_path selection_criteria action")]),s._v(" "),e("h2",{attrs:{id:"searching-for-a-file-by-name-or-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-a-file-by-name-or-extension"}},[s._v("#")]),s._v(" Searching for a file by name or extension")]),s._v(" "),e("p",[s._v("To find files/directories with a specific name, relative to "),e("code",[s._v("pwd")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myFile.txt"')]),s._v("\n./myFile.txt\n\n")])])]),e("p",[s._v("To find files/directories with a specific extension, use a wildcard:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v("\n./myFile.txt\n./myFile2.txt\n\n")])])]),e("p",[s._v("To find files/directories matching one of many extensions, use the "),e("code",[s._v("or")]),s._v(" flag:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" -o -name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.sh"')]),s._v("\n\n")])])]),e("p",[s._v("To find files/directories which name begin with abc and end with one alpha character following a one digit:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc[a-z][0-9]"')]),s._v("\n\n")])])]),e("p",[s._v("To find all files/directories located in a specific directory")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /opt\n\n")])])]),e("p",[s._v("To search for files only (not directories), use "),e("code",[s._v("-type f")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /opt -type f\n\n")])])]),e("p",[s._v("To search for directories only (not regular files), use "),e("code",[s._v("-type d")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /opt -type d\n\n")])])]),e("h2",{attrs:{id:"executing-commands-against-a-found-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executing-commands-against-a-found-file"}},[s._v("#")]),s._v(" Executing commands against a found file")]),s._v(" "),e("p",[s._v("Sometimes we will need to run commands against a lot of files. This can be done using "),e("code",[s._v("xargs")]),s._v(".")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type d -print "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -r "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v("\n\n")])])]),e("p",[s._v("The above command will recursively find all directories ("),e("code",[s._v("-type d")]),s._v(") relative to "),e("code",[s._v(".")]),s._v(" (which is your current working directory), and execute "),e("code",[s._v("chmod 770")]),s._v(" on them.  The "),e("code",[s._v("-r")]),s._v(" option specifies to "),e("code",[s._v("xargs")]),s._v(" to not run "),e("code",[s._v("chmod")]),s._v(" if "),e("code",[s._v("find")]),s._v(" did not find any files.")]),s._v(" "),e("p",[s._v("If your files names or directories have a space character in them, this command may choke; a solution is to use the following")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type d -print0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -r -0 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v("\n\n")])])]),e("p",[s._v("In the above example, the "),e("code",[s._v("-print0")]),s._v(" and "),e("code",[s._v("-0")]),s._v(" flags specify that the file names will be separated using a "),e("code",[s._v("null")]),s._v(" byte, and allows the use of special characters, like spaces, in the file names.  This is a GNU extension, and may not work in other versions of "),e("code",[s._v("find")]),s._v(" and "),e("code",[s._v("xargs")]),s._v(".")]),s._v(" "),e("p",[s._v("The preferred way to do this is to skip the "),e("code",[s._v("xargs")]),s._v(" command and let "),e("code",[s._v("find")]),s._v(" call the subprocess itself:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type d -exec "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),e("p",[s._v("Here, the "),e("code",[s._v("{}")]),s._v(" is a placeholder indicating that you want to use the file name at that point. "),e("code",[s._v("find")]),s._v(" will execute "),e("code",[s._v("chmod")]),s._v(" on each file individually.")]),s._v(" "),e("p",[s._v("You can alternatively pass all file names to a "),e("strong",[s._v("single")]),s._v(" call of "),e("code",[s._v("chmod")]),s._v(", by using")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type d -exec "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" +\n\n")])])]),e("p",[s._v("This is also the behaviour of the above "),e("code",[s._v("xargs")]),s._v(" snippets. (To call on each file individually, you can use "),e("code",[s._v("xargs -n1")]),s._v(").")]),s._v(" "),e("p",[s._v("A third option is to let bash loop over the list of filenames "),e("code",[s._v("find")]),s._v(" outputs:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type d "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -r d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n")])])]),e("p",[s._v("This is syntactically the most clunky, but convenient when you want to run multiple commands on each found file.  However, this is "),e("strong",[s._v("unsafe")]),s._v(" in the face of file names with odd names.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -r d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v('"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${d"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("_}")]),s._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n")])])]),e("p",[s._v("which will replace all spaces in file names with underscores."),e("sup",[s._v("(This example also won't work if there are spaces in leading "),e("strong",[s._v("directory")]),s._v(" names.)")])]),s._v(" "),e("p",[s._v("The problem with the above is that "),e("code",[s._v("while read -r")]),s._v(" expects one entry per line, but file names can contain newlines (and also, "),e("code",[s._v("read -r")]),s._v(" will lose any trailing whitespace).  You can fix this by turning things around:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type d -exec "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'for f; do mv "$f" "${f// /_}"; done\'')]),s._v(" _ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" +\n\n")])])]),e("p",[s._v("This way, the "),e("code",[s._v("-exec")]),s._v(" receives the file names in a form which is completely correct and portable; the "),e("code",[s._v("bash -c")]),s._v(" receives them as a number of arguments, which will be found in "),e("a",{attrs:{href:"/documentation/bash/4797/internal-variables/16891/%24%40"}},[e("code",[s._v("$@")])]),s._v(", correctly quoted etc.  (The script will need to handle these names correctly, of course; every variable which contains a file name needs to be in double quotes.)")]),s._v(" "),e("p",[s._v("The mysterious "),e("code",[s._v("_")]),s._v(" is necessary because the first argument to "),e("code",[s._v("bash -c 'script'")]),s._v(" is used to populate "),e("code",[s._v("$0")]),s._v(".")]),s._v(" "),e("h2",{attrs:{id:"finding-file-by-access-modification-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-file-by-access-modification-time"}},[s._v("#")]),s._v(" Finding file by access / modification time")]),s._v(" "),e("p",[s._v("On an "),e("code",[s._v("ext")]),s._v(" filesystem, each file has a stored Access, Modification, and (Status) Change time associated with it - to view this information you can use "),e("code",[s._v("stat myFile.txt")]),s._v("; using flags within "),e("strong",[s._v("find")]),s._v(", we can search for files that were modified within a certain time range.")]),s._v(" "),e("p",[s._v("To find files that "),e("strong",[s._v("have")]),s._v(" been modified within the last 2 hours:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -mmin -120\n\n")])])]),e("p",[s._v("To find files that "),e("strong",[s._v("have not")]),s._v(" been modified within the last 2 hours:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -mmin +120\n\n")])])]),e("p",[s._v("The above example are searching only on the "),e("strong",[s._v("modified")]),s._v(" time - to search on "),e("strong",[s._v("a")]),s._v("ccess times, or "),e("strong",[s._v("c")]),s._v("hanged times, use "),e("code",[s._v("a")]),s._v(", or "),e("code",[s._v("c")]),s._v(" accordingly.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -amin -120\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -cmin +120\n\n")])])]),e("p",[s._v("General format:")]),s._v(" "),e("p",[e("code",[s._v("-mmin n")]),s._v(" : File was modified "),e("strong",[s._v("n")]),s._v(" minutes ago"),e("br"),s._v(" "),e("code",[s._v("-mmin -n")]),s._v(" : File was modified less than "),e("strong",[s._v("n")]),s._v(" minutes ago"),e("br"),s._v(" "),e("code",[s._v("-mmin +n")]),s._v(" : File was modified more than "),e("strong",[s._v("n")]),s._v(" minutes ago"),e("br")]),s._v(" "),e("p",[s._v("Find files that "),e("strong",[s._v("have")]),s._v(" been modified within the last 2 days:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -mtime -2\n\n")])])]),e("p",[s._v("Find files that "),e("strong",[s._v("have not")]),s._v(" been modified within the last 2 days")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -mtime +2\n\n")])])]),e("p",[s._v("Use "),e("code",[s._v("-atime")]),s._v(" and "),e("code",[s._v("-ctime")]),s._v(" for access time and status change time respectively.")]),s._v(" "),e("p",[s._v("General format:")]),s._v(" "),e("p",[e("code",[s._v("-mtime n")]),s._v(" : File was modified "),e("strong",[s._v("nx24")]),s._v(" hours ago"),e("br"),s._v(" "),e("code",[s._v("-mtime -n")]),s._v(" : File was modified less than "),e("strong",[s._v("nx24")]),s._v(" hours ago"),e("br"),s._v(" "),e("code",[s._v("-mtime +n")]),s._v(" : File was modified more than "),e("strong",[s._v("nx24")]),s._v(" hours ago"),e("br")]),s._v(" "),e("p",[s._v("Find files modified in a "),e("strong",[e("strong",[s._v("range of dates")])]),s._v(", from 2007-06-07 to 2007-06-08:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -newermt "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2007")]),s._v("-06-07 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -newermt "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2007")]),s._v("-06-08  \n\n")])])]),e("p",[s._v("Find files accessed in a "),e("strong",[e("strong",[s._v("range of timestamps")])]),s._v(" (using files as timestamp), from 1 hour ago to 10 minutes ago:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" -t "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1 HOUR AGO'")]),s._v(" +%Y%m%d%H%M.%S"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" start_date\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" -t "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10 MINUTE AGO'")]),s._v(" +%Y%m%d%H%M.%S"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" end_date\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOCAL_FOLDER")]),s._v('"')]),s._v(" -newerat "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_date"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -newerat "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end_date"')]),s._v(" -print  \n\n")])])]),e("p",[s._v("General format:")]),s._v(" "),e("p",[e("code",[s._v("-newerXY reference")]),s._v(" : Compares the timestamp of the current file with reference. "),e("code",[s._v("XY")]),s._v(" could have one of the following values: "),e("code",[s._v("at")]),s._v(" (access time), "),e("code",[s._v("mt")]),s._v(" (modification time), "),e("code",[s._v("ct")]),s._v(" (change time) and more. "),e("code",[s._v("reference")]),s._v(" is the "),e("strong",[s._v("name of a file")]),s._v(" whe want to compare the timestamp specified (access, modification, change) or a "),e("strong",[s._v("string")]),s._v(" describing an absolute time.")]),s._v(" "),e("h2",{attrs:{id:"finding-files-according-to-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-files-according-to-size"}},[s._v("#")]),s._v(" Finding files according to size")]),s._v(" "),e("p",[e("strong",[s._v("Find files larger than 15MB:")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -type f -size +15M\n\n")])])]),e("p",[e("strong",[s._v("Find files less than 12KB:")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -type f -size -12k\n\n")])])]),e("p",[e("strong",[s._v("Find files exactly of 12KB size:")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -type f -size 12k\n\n")])])]),e("p",[s._v("Or")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -type f -size 12288c\n\n")])])]),e("p",[s._v("Or")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -type f -size 24b\n\n")])])]),e("p",[s._v("Or")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -type f -size "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\n\n")])])]),e("p",[e("strong",[s._v("General format:")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -size n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cwbkMG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])])]),e("blockquote"),s._v(" "),e("p",[s._v("Find files of n-block size, where +n means more than n-block, -n means less than n-block and n (without any sign) means exactly n-block")]),s._v(" "),e("p",[e("strong",[s._v("Block size:")])]),s._v(" "),e("ol",[e("li",[e("code",[s._v("c")]),s._v(": bytes")]),s._v(" "),e("li",[e("code",[s._v("w")]),s._v(": 2 bytes")]),s._v(" "),e("li",[e("code",[s._v("b")]),s._v(": 512 bytes (default)")]),s._v(" "),e("li",[e("code",[s._v("k")]),s._v(": 1 KB")]),s._v(" "),e("li",[e("code",[s._v("M")]),s._v(": 1 MB")]),s._v(" "),e("li",[e("code",[s._v("G")]),s._v(": 1 GB")])]),s._v(" "),e("h2",{attrs:{id:"filter-the-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-the-path"}},[s._v("#")]),s._v(" Filter the path")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("-path")]),s._v(" parameter allows to specify a pattern to match the path of the result. The pattern can match also the name itself.")]),s._v(" "),e("p",[s._v("To find only files containing "),e("code",[s._v("log")]),s._v(" anywhere in their path (folder or name):")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*log*'")]),s._v("\n\n")])])]),e("p",[s._v("To find only files within a folder called "),e("code",[s._v("log")]),s._v(" (on any level):")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/log/*'")]),s._v("\n\n")])])]),e("p",[s._v("To find only files within a folder called "),e("code",[s._v("log")]),s._v(" or "),e("code",[s._v("data")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/log/*'")]),s._v(" -o -path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/data/*'")]),s._v("\n\n")])])]),e("p",[s._v("To find all files "),e("strong",[s._v("except")]),s._v(" the ones contained in a folder called "),e("code",[s._v("bin")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -not -path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/bin/*'")]),s._v("\n\n")])])]),e("p",[s._v("To find all file all files "),e("strong",[s._v("except")]),s._v(" the ones contained in a folder called "),e("code",[s._v("bin")]),s._v(" or log files:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -not -path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*log'")]),s._v(" -not -path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/bin/*'")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"finding-files-by-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-files-by-type"}},[s._v("#")]),s._v(" Finding files by type")]),s._v(" "),e("p",[s._v("To find files, use the "),e("code",[s._v("-type f")]),s._v(" flag")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f\n\n")])])]),e("p",[s._v("To find directories, use the "),e("code",[s._v("-type d")]),s._v(" flag")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type d\n\n")])])]),e("p",[s._v("To find block devices, use the "),e("code",[s._v("-type b")]),s._v(" flag")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /dev -type b\n\n")])])]),e("p",[s._v("To find symlinks, use the "),e("code",[s._v("-type l")]),s._v(" flag")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type l\n\n")])])]),e("h2",{attrs:{id:"finding-files-by-specific-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-files-by-specific-extension"}},[s._v("#")]),s._v(" Finding files by specific extension")]),s._v(" "),e("p",[s._v("To find all the files of a certain extension within the current path you can use the following "),e("code",[s._v("find")]),s._v(" syntax. It works by making use of "),e("code",[s._v("bash's")]),s._v("  built-in "),e("a",{attrs:{href:"http://www.tldp.org/LDP/abs/html/globbingref.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("glob")]),e("OutboundLink")],1),s._v(" construct to match all the names having the "),e("code",[s._v(".extension")]),s._v(".")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /directory/to/search -maxdepth "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -type f -name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.extension"')]),s._v("\n\n")])])]),e("p",[s._v("To find all files of type "),e("code",[s._v(".txt")]),s._v(" from the current directory alone, do")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -maxdepth "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -type f -name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v("\n\n")])])]),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("ul",[e("li",[s._v("find [-H] [-L] [-P] [-D debugopts] [-Olevel] [path...] [expression]")])])])}),[],!1,null,null,null);a.default=n.exports}}]);