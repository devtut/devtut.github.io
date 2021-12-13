(window.webpackJsonp=window.webpackJsonp||[]).push([[2779],{3187:function(e,t,n){"use strict";n.r(t);var a=n(31),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"pyinstaller-distributing-python-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pyinstaller-distributing-python-code"}},[e._v("#")]),e._v(" PyInstaller - Distributing Python Code")]),e._v(" "),n("h2",{attrs:{id:"installation-and-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-setup"}},[e._v("#")]),e._v(" Installation and Setup")]),e._v(" "),n("p",[e._v("Pyinstaller is a normal python package. It can be installed using pip:")]),e._v(" "),n("div",{staticClass:"language-py extra-class"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[e._v("pip install pyinstaller\n\n")])])]),n("p",[n("strong",[e._v("Installation in Windows")]),n("br"),e._v("\nFor Windows, "),n("a",{attrs:{href:"http://sourceforge.net/projects/pywin32/files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pywin32"),n("OutboundLink")],1),e._v(" or "),n("a",{attrs:{href:"https://pypi.python.org/pypi/pypiwin32/219",target:"_blank",rel:"noopener noreferrer"}},[e._v("pypiwin32"),n("OutboundLink")],1),e._v(" is a prerequisite. The latter is installed automatically when pyinstaller is installed using pip.")]),e._v(" "),n("p",[n("strong",[e._v("Installation in Mac OS X")]),n("br"),e._v("\nPyInstaller works with the default Python 2.7 provided with current Mac OS X. If later versions of Python are to be used or if any major packages such as PyQT, Numpy, Matplotlib and the like are to be used, it is recommended to install them using either "),n("a",{attrs:{href:"https://www.macports.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MacPorts"),n("OutboundLink")],1),e._v(" or "),n("a",{attrs:{href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[n("strong",[e._v("Installing from the archive")]),n("br"),e._v("\nIf pip is not available, download the compressed archive from "),n("a",{attrs:{href:"https://pypi.python.org/pypi/PyInstaller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyPI"),n("OutboundLink")],1),e._v("."),n("br"),e._v("\nTo test the development version, download the compressed archive from the "),n("strong",[e._v("develop")]),e._v(" branch of "),n("a",{attrs:{href:"https://github.com/pyinstaller/pyinstaller/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyInstaller Downloads"),n("OutboundLink")],1),e._v(" page.")]),e._v(" "),n("p",[e._v("Expand the archive and find the "),n("code",[e._v("setup.py")]),e._v(" script. Execute "),n("code",[e._v("python setup.py install")]),e._v(" with administrator privilege to install or upgrade PyInstaller.")]),e._v(" "),n("p",[n("strong",[e._v("Verifying the installation")]),n("br"),e._v("\nThe command "),n("code",[e._v("pyinstaller")]),e._v(" should exist on the system path for all platforms after a successful installation."),n("br"),e._v("\nVerify it by typing "),n("code",[e._v("pyinstaller --version")]),e._v(" in the command line. This will print the current version of pyinstaller.")]),e._v(" "),n("h2",{attrs:{id:"using-pyinstaller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-pyinstaller"}},[e._v("#")]),e._v(" Using Pyinstaller")]),e._v(" "),n("p",[e._v("In the simplest use-case, just navigate to the directory your file is in, and type:")]),e._v(" "),n("p",[n("code",[e._v("pyinstaller myfile.py")])]),e._v(" "),n("p",[e._v("Pyinstaller analyzes the file and creates:")]),e._v(" "),n("ul",[n("li",[e._v("A "),n("strong",[e._v("myfile.spec")]),e._v(" file in the same directory as "),n("code",[e._v("myfile.py")])]),e._v(" "),n("li",[e._v("A "),n("strong",[e._v("build")]),e._v(" folder in the same directory as "),n("code",[e._v("myfile.py")])]),e._v(" "),n("li",[e._v("A "),n("strong",[e._v("dist")]),e._v(" folder in the same directory as "),n("code",[e._v("myfile.py")])]),e._v(" "),n("li",[e._v("Log files in the "),n("strong",[e._v("build")]),e._v(" folder")])]),e._v(" "),n("p",[e._v("The bundled app can be found in the "),n("strong",[e._v("dist")]),e._v(" folder")]),e._v(" "),n("p",[n("strong",[e._v("Options")]),n("br"),e._v("\nThere are several options that can be used with pyinstaller. A full list of the options can be found "),n("a",{attrs:{href:"https://pythonhosted.org/PyInstaller/usage.html#options",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Once bundled your app can be run by opening 'dist\\myfile\\myfile.exe'.")]),e._v(" "),n("h2",{attrs:{id:"bundling-to-one-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundling-to-one-folder"}},[e._v("#")]),e._v(" Bundling to One Folder")]),e._v(" "),n("p",[e._v("When PyInstaller is used without any options to bundle "),n("code",[e._v("myscript.py")]),e._v(" , the default output is a single folder (named "),n("code",[e._v("myscript")]),e._v(") containing an executable named "),n("code",[e._v("myscript")]),e._v(" ("),n("code",[e._v("myscript.exe")]),e._v(" in windows) along with all the necessary dependencies."),n("br"),e._v("\nThe app can be distributed by compressing the folder into a zip file.")]),e._v(" "),n("p",[e._v("One Folder mode can be explictly set using the option "),n("code",[e._v("-D")]),e._v(" or "),n("code",[e._v("--onedir")])]),e._v(" "),n("p",[n("code",[e._v("pyinstaller myscript.py -D")])]),e._v(" "),n("h3",{attrs:{id:"advantages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[e._v("#")]),e._v(" Advantages:")]),e._v(" "),n("p",[e._v("One of the major advantages of bundling to a single folder is that it is easier to debug problems. If any modules fail to import, it can be verified by inspecting the folder."),n("br"),e._v("\nAnother advantage is felt during updates. If there are a few changes in the code but the dependencies used are "),n("strong",[e._v("exactly")]),e._v("  the same, distributors can just ship the executable file (which is typically smaller than the entire folder).")]),e._v(" "),n("h3",{attrs:{id:"disadvantages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#disadvantages"}},[e._v("#")]),e._v(" Disadvantages")]),e._v(" "),n("p",[e._v("The only disadvantage of this method is that the users have to search for the executable among a large number of files."),n("br"),e._v("\nAlso users can delete/modify other files which might lead to the app not being able to work correctly.")]),e._v(" "),n("h2",{attrs:{id:"bundling-to-a-single-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundling-to-a-single-file"}},[e._v("#")]),e._v(" Bundling to a Single File")]),e._v(" "),n("p",[n("code",[e._v("pyinstaller myscript.py -F")])]),e._v(" "),n("p",[e._v("The options to generate a single file are "),n("code",[e._v("-F")]),e._v(" or "),n("code",[e._v("--onefile")]),e._v(". This bundles the program into a single "),n("code",[e._v("myscript.exe")]),e._v(" file.")]),e._v(" "),n("p",[e._v("Single file executable are slower than the one-folder bundle. They are also harder to debug.")]),e._v(" "),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),n("ul",[n("li",[e._v("pyinstaller [options] script [script ...] | specfile")])]),e._v(" "),n("h4",{attrs:{id:"remarks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),n("p",[e._v("PyInstaller is a module used to bundle python apps in a single package along with all the dependencies. The user can then run the package app without a python interpreter or any modules. It correctly bundles many major packages like numpy, Django, OpenCv and others.")]),e._v(" "),n("p",[e._v("Some important points to remember:")]),e._v(" "),n("ul",[n("li",[e._v("Pyinstaller supports Python 2.7 and Python 3.3+")]),e._v(" "),n("li",[e._v("Pyinstaller has been tested against Windows, Linux and Mac OS X.")]),e._v(" "),n("li",[e._v("It is "),n("strong",[e._v("NOT")]),e._v(" cross compiler. (A Windows app cannot be packaged in Linux. You've to run PyInstaller in Windows to bundle an app for Windows)")])]),e._v(" "),n("p",[n("a",{attrs:{href:"http://www.pyinstaller.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homepage"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://pythonhosted.org/PyInstaller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Docs"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);