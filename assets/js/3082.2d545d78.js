(window.webpackJsonp=window.webpackJsonp||[]).push([[3082],{3490:function(t,a,s){"use strict";s.r(a);var e=s(31),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("h2",{attrs:{id:"gems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gems"}},[t._v("#")]),t._v(" Gems")]),t._v(" "),s("p",[t._v("In this example we will use 'nokogiri' as an example gem. 'nokogiri' can later on be replaced by any other gem name.")]),t._v(" "),s("p",[t._v("To work with gems we use a command line tool called "),s("code",[t._v("gem")]),t._v(" followed by an option like "),s("code",[t._v("install")]),t._v(" or "),s("code",[t._v("update")]),t._v(" and then names of the gems we want to install, but that is not all.")]),t._v(" "),s("p",[t._v("Install gems:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gem install nokogiri\n\n")])])]),s("p",[t._v("But that is not the only thing we need. We can also specify version, source from which to install or search for gems. Lets start with some basic use cases (UC) and you can later on post request for an update.")]),t._v(" "),s("p",[t._v("Listing all the installed gems:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gem list\n\n")])])]),s("p",[t._v("Uninstalling gems:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gem uninstall nokogiri\n\n")])])]),s("p",[t._v("If we have more version of the nokogiri gem we will be prompted to specify which one we want to uninstall. We will get a list that is ordered and numbered and we just write the number.")]),t._v(" "),s("p",[t._v("Updating gems")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gem update nokogiri\n\n")])])]),s("p",[t._v("or if we want to update them all")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gem update\n\n")])])]),s("p",[t._v("Comman "),s("code",[t._v("gem")]),t._v(" has many more usages and options to be explored. For more please turn to the official documentation. If something is not clear post a request and I will add it.")]),t._v(" "),s("h2",{attrs:{id:"installing-ruby-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-ruby-macos"}},[t._v("#")]),t._v(" Installing Ruby macOS")]),t._v(" "),s("p",[t._v("So the good news is that Apple kindly includes a Ruby interpreter. Unfortunately, it tends not to be a recent version:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ruby "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\nruby "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("p648 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2015")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" revision "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53162")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("universal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x86_64"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("darwin16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("If you have "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Homebrew installed"),s("OutboundLink")],1),t._v(", you can get the latest Ruby with:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$ brew install ruby\n\n$ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ruby "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\nruby "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("p111 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("03")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" revision "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("58053")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x86_64"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("darwin16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("(It's likely you'll see a more recent version if you try this.)")]),t._v(" "),s("p",[t._v("In order to pick up the brewed version without using the full path, you'll want to add "),s("code",[t._v("/usr/local/bin")]),t._v(" to the start of your "),s("code",[t._v("$PATH")]),t._v(" environment variable:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("export "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PATH")]),t._v("\n\n")])])]),s("p",[t._v("Adding that line to "),s("code",[t._v("~/.bash_profile")]),t._v(" ensures that you will get this version after you restart your system:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$ type ruby\nruby is "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ruby\n\n")])])]),s("p",[t._v("Homebrew will install "),s("code",[t._v("gem")]),t._v(" for "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/ruby/8095/installation/26101/gems#t=201705160348432566101",target:"_blank",rel:"noopener noreferrer"}},[t._v("installing Gems"),s("OutboundLink")],1),t._v(". It's also possible to "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/ruby/8095/installation/26098/linux-compiling-from-source#t=201705160348432566101",target:"_blank",rel:"noopener noreferrer"}},[t._v("build from the source"),s("OutboundLink")],1),t._v(" if you need that. Homebrew also includes that option:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$ brew install ruby "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("source\n\n")])])]),s("h2",{attrs:{id:"linux-compiling-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-compiling-from-source"}},[t._v("#")]),t._v(" Linux - Compiling from source")]),t._v(" "),s("p",[t._v("`This way you will get the newest ruby but it has its downsides. Doing it like this ruby will not be managed by any application.")]),t._v(" "),s("p",[s("strong",[t._v("!! Remember to chagne the version so it coresponds with your !!")])]),t._v(" "),s("ol",[s("li",[t._v("you need to download a tarball find a link on an official website ("),s("a",{attrs:{href:"https://www.ruby-lang.org/en/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ruby-lang.org/en/downloads/)"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("li",[t._v("Extract the tarball")]),t._v(" "),s("li",[t._v("Install")])]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" wget https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ruby"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pub"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ruby"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ruby"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xvzf ruby"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cd ruby"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),t._v("\n$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("configure\n$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" make\n$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sudo make install\n\n")])])]),s("p",[t._v("This will install ruby into "),s("code",[t._v("/usr/local")]),t._v(". If you are not happy with this location you can pass an argument to the "),s("code",[t._v("./configure --prefix=DIR")]),t._v(" where "),s("code",[t._v("DIR")]),t._v(" is the directory you want to install ruby to.")]),t._v(" "),s("h2",{attrs:{id:"linux-installation-using-a-package-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-installation-using-a-package-manager"}},[t._v("#")]),t._v(" Linux—Installation using a package manager")]),t._v(" "),s("p",[t._v("Probably the easiest choice, but beware, the version is not always the newest one. Just open up terminal and type (depending on your distribution)")]),t._v(" "),s("p",[t._v("in Debian or Ubuntu using apt")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sudo apt install ruby\n\n")])])]),s("p",[t._v("in CentOS, openSUSE or Fedora")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sudo yum install ruby\n\n")])])]),s("p",[t._v("You can use the "),s("code",[t._v("-y")]),t._v(" option so you are not prompted to agree with the installation but in my opinion it is a good practice to always check what is the package manager trying to install.")]),t._v(" "),s("h2",{attrs:{id:"windows-installation-using-installer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-installation-using-installer"}},[t._v("#")]),t._v(" Windows - Installation using installer")]),t._v(" "),s("p",[t._v("Probably the easies way to set up ruby on windows is to go to "),s("a",{attrs:{href:"http://rubyinstaller.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://rubyinstaller.org/"),s("OutboundLink")],1),t._v(" and from there donwload an executable that you will install.")]),t._v(" "),s("p",[t._v("You don't have to set almost anything, but there will be one important window. It will have a check box saying "),s("strong",[t._v("Add ruby executable to your PATH")]),t._v(". Confirm that it is "),s("strong",[t._v("checked")]),t._v(", if not check it or else you won't be able to run ruby and will have to set the PATH variable on your own.")]),t._v(" "),s("p",[t._v("Then just go next until it installs and thats that.")]),t._v(" "),s("h2",{attrs:{id:"linux-troubleshooting-gem-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-troubleshooting-gem-install"}},[t._v("#")]),t._v(" Linux - troubleshooting gem install")]),t._v(" "),s("p",[t._v("First UC in the example "),s("strong",[t._v("Gems")]),t._v(" "),s("code",[t._v("$> gem install nokogiri")]),t._v(" can have a problem installing gems because we don't have the permissions for it. This can be sorted out in more then just one way.")]),t._v(" "),s("p",[t._v("First UC solution a:")]),t._v(" "),s("p",[t._v("U can use "),s("code",[t._v("sudo")]),t._v(". This will install the gem for all the users. This method should be frowned upon. This should be used only with the gem you know will be usable by all the users. Usualy in real life you don't want some user having access to "),s("code",[t._v("sudo")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sudo gem install nokogiri\n\n")])])]),s("p",[t._v("First UC solution b")]),t._v(" "),s("p",[t._v("U can use the option "),s("code",[t._v("--user-install")]),t._v(" which installs the gems into your users gem folder (usualy at "),s("code",[t._v("~/.gem")]),t._v(")")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gem install nokogiri "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("install\n\n")])])]),s("p",[t._v("First UC solution c")]),t._v(" "),s("p",[t._v("U can set GEM_HOME and GEM_PATH wich then will make command "),s("code",[t._v("gem install")]),t._v(" install all the gems to a folder which you specify. I can give you an example of that (the usual way)")]),t._v(" "),s("ul",[s("li",[t._v("First of all you need to open .bashrc. Use nano or your favorite text editor.")])]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nano "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bashrc\n\n")])])]),s("ul",[s("li",[t._v("Then at the end of this file write")])]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("export "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GEM_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gem\nexport "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GEM_PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gem\n\n")])])]),s("ul",[s("li",[t._v("Now you will need to restart terminal or write "),s("code",[t._v(". ~/.bashrc")]),t._v(" to re-load the configuration. This will enable you to use "),s("code",[t._v("gem isntall nokogiri")]),t._v(" and it will install those gems in the folder you specified.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);