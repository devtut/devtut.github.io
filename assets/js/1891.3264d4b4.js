(window.webpackJsonp=window.webpackJsonp||[]).push([[1891],{2299:function(a,t,e){"use strict";e.r(t);var s=e(31),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"file-compression-with-tar-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file-compression-with-tar-command"}},[a._v("#")]),a._v(" File Compression with 'tar' command")]),a._v(" "),e("h2",{attrs:{id:"compress-a-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compress-a-folder"}},[a._v("#")]),a._v(" Compress a folder")]),a._v(" "),e("p",[a._v("This creates a simple archive of a folder :")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cf ./my-archive.tar ./my-folder/\n\n")])])]),e("p",[a._v("Verbose output shows which files and directories are added to the archive, use the -v option:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cvf ./my-archive.tar ./my-folder/\n\n")])])]),e("p",[a._v("For archiving a folder compressed 'gzip', you have to use the -z option :")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -czf ./my-archive.tar.gz ./my-folder/\n\n")])])]),e("p",[a._v("You can instead compress the archive with 'bzip2', by using the -j option:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cjf  ./my-archive.tar.bz2 ./my-folder/\n\n")])])]),e("p",[a._v("Or compress with 'xz', by using the -J option:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cJf  ./my-archive.tar.xz ./my-folder/\n\n")])])]),e("h2",{attrs:{id:"extract-a-folder-from-an-archive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extract-a-folder-from-an-archive"}},[a._v("#")]),a._v(" Extract a folder from an archive")]),a._v(" "),e("p",[a._v("There is an example for extract a folder from an archive in the current location :")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xf archive-name.tar\n\n")])])]),e("p",[a._v("If you want to extract a folder from an archive to a specfic destination :")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xf archive-name.tar -C ./directory/destination\n\n")])])]),e("h2",{attrs:{id:"list-archive-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-archive-content"}},[a._v("#")]),a._v(" List archive content")]),a._v(" "),e("p",[a._v("There is an example of listing content :")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -tvf archive.tar\n\n")])])]),e("p",[a._v("The option "),e("code",[a._v("-t")]),a._v(" is used for the listing. For listing the content of a tar.gz archive, you have to use the "),e("code",[a._v("-z")]),a._v(" option anymore :")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -tzvf archive.tar.gz\n\n")])])]),e("h2",{attrs:{id:"compress-and-exclude-one-or-multiple-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compress-and-exclude-one-or-multiple-folder"}},[a._v("#")]),a._v(" Compress and exclude one or multiple folder")]),a._v(" "),e("p",[a._v("If you want to extract a folder, but you want to exclude one or several folders during the extraction, you can use the "),e("code",[a._v("--exclude")]),a._v(" option.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cf archive.tar ./my-folder/ --exclude"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-folder/sub1"')]),a._v(" --exclude"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-folder/sub3"')]),a._v("\n\n")])])]),e("p",[a._v("With this folder tree :")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("my-folder/\n   sub1/\n   sub2/\n   sub3/\n\n")])])]),e("p",[a._v("The result will be :")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./archive.tar\n   my-folder/\n      sub2/\n\n")])])]),e("h2",{attrs:{id:"strip-leading-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strip-leading-components"}},[a._v("#")]),a._v(" Strip leading components")]),a._v(" "),e("p",[a._v("To strip any number of leading components, use the --strip-components option:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n--strip-components=NUMBER\n   strip NUMBER leading components from file names on extraction\n\n")])])]),e("p",[a._v("For example to strip the leading folder, use:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xf --strip-components"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" archive-name.tar\n\n")])])]),e("h2",{attrs:{id:"list-contents-of-an-archive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-contents-of-an-archive"}},[a._v("#")]),a._v(" List contents of an archive")]),a._v(" "),e("p",[a._v("List the contents of an archive file without extracting it:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -tf archive.tar.gz\nFolder-In-Archive/\nFolder-In-Archive/file1\nFolder-In-Archive/Another-Folder/\nFolder-In-Archive/Another-Folder/file2\n\n")])])]),e("h4",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Common Options")]),a._v(" "),e("th",[a._v("-")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("-c --create")]),a._v(" "),e("td",[a._v("Create a new archive.")])]),a._v(" "),e("tr",[e("td",[a._v("-x --extract")]),a._v(" "),e("td",[a._v("Extract files from an archive.")])]),a._v(" "),e("tr",[e("td",[a._v("-t --list")]),a._v(" "),e("td",[a._v("List the contents of an archive.")])]),a._v(" "),e("tr",[e("td",[a._v("-f --file="),e("strong",[a._v("ARCHIVE")])]),a._v(" "),e("td",[a._v("Use archive file or dir "),e("strong",[a._v("ARCHIVE")]),a._v(".")])]),a._v(" "),e("tr",[e("td",[a._v("-v --verbose")]),a._v(" "),e("td",[a._v("Verbosely list files processed.")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Compression Options")])]),a._v(" "),e("td",[a._v("-")])]),a._v(" "),e("tr",[e("td",[a._v("-a --auto-compress")]),a._v(" "),e("td",[a._v("Use archive suffix to determine the compression program.")])]),a._v(" "),e("tr",[e("td",[a._v("-j --bzip2")]),a._v(" "),e("td",[a._v("Filter the archive through bzip2.")])]),a._v(" "),e("tr",[e("td",[a._v("-J --xz --lzma")]),a._v(" "),e("td",[a._v("Filter the archive through xz.")])]),a._v(" "),e("tr",[e("td",[a._v("-z --gzip")]),a._v(" "),e("td",[a._v("Filter the archive through gzip.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);