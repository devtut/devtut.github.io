(window.webpackJsonp=window.webpackJsonp||[]).push([[2204],{2612:function(s,t,a){"use strict";a.r(t);var e=a(31),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"installing-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js"}},[s._v("#")]),s._v(" Installing Node.js")]),s._v(" "),a("h2",{attrs:{id:"using-node-version-manager-nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-node-version-manager-nvm"}},[s._v("#")]),s._v(" Using Node Version Manager (nvm)")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node Version Manager"),a("OutboundLink")],1),s._v(", otherwise known as nvm, is a bash script that simplifies the management of multiple Node.js versions.")]),s._v(" "),a("p",[s._v("To install nvm, use the provided install script:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("githubusercontent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("creationix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nvm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31.3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" bash\n\n")])])]),a("p",[s._v("For windows there is a nvm-windows package with an installer. This "),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[s._v("GithHub"),a("OutboundLink")],1),s._v(" page has the details for installing and using the nvm-windows package.")]),s._v(" "),a("p",[s._v('After installing nvm, run "nvm on" from command line. This enables nvm to control the node versions.')]),s._v(" "),a("p",[a("strong",[s._v("Note: You may need to restart your terminal for it to recognize the newly installed "),a("code",[s._v("nvm")]),s._v(" command.")])]),s._v(" "),a("p",[s._v("Then install the latest Node version:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ nvm install node\n\n")])])]),a("p",[s._v("You can also install a specific Node version, by passing the major, minor, and/or patch versions:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ nvm install "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n$ nvm install "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),s._v("\n\n")])])]),a("p",[s._v("To list the versions available for install:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ nvm ls"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("remote\n\n")])])]),a("p",[s._v("You can then switch versions by passing the version the same way you do when installing:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ nvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n")])])]),a("p",[s._v("You can set a specific version of Node that you installed to be the "),a("strong",[s._v("default version")]),s._v(" by entering:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ nvm alias "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),s._v("\n\n")])])]),a("p",[s._v("To display a list of Node versions that are installed on your machine, enter:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ nvm ls\n\n")])])]),a("p",[s._v("To use project-specific node versions, you can save the version in .nvmrc file. This way, starting to work with another project will be less error-prone after fetching it from its repository.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4.2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nvmrc\n$ nvm use\nFound "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/path/to/project/.nvmrc'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nNow using node v4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("npm v3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),a("p",[s._v("When Node is installed via nvm we don't have to use "),a("code",[s._v("sudo")]),s._v(" to install global packages since they are installed in home folder. Thus "),a("code",[s._v("npm i -g http-server")]),s._v(" works without any permission errors.")]),s._v(" "),a("h2",{attrs:{id:"installing-node-js-on-mac-using-package-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-on-mac-using-package-manager"}},[s._v("#")]),s._v(" Installing Node.js on Mac using package manager")]),s._v(" "),a("h3",{attrs:{id:"homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[s._v("#")]),s._v(" Homebrew")]),s._v(" "),a("p",[s._v("You can install Node.js using the "),a("a",{attrs:{href:"http://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew"),a("OutboundLink")],1),s._v(" package manager.")]),s._v(" "),a("p",[s._v("Start by updating brew:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("brew update\n\n")])])]),a("p",[s._v("You may need to change permissions or paths. It's best to run this before proceeding:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("brew doctor\n\n")])])]),a("p",[s._v("Next you can install Node.js by running:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("brew install node\n\n")])])]),a("p",[s._v("Once Node.js is installed, you can validate the version installed by running:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v\n\n")])])]),a("h3",{attrs:{id:"macports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macports"}},[s._v("#")]),s._v(" Macports")]),s._v(" "),a("p",[s._v("You can also install node.js through "),a("a",{attrs:{href:"https://www.macports.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Macports"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[s._v("First update it to make sure the lastest packages are referenced:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo port selfupdate\n\n")])])]),a("p",[s._v("Then install nodejs and npm")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo port install nodejs npm\n\n")])])]),a("p",[s._v("You can now run node through CLI directly by invoking "),a("code",[s._v("node")]),s._v(". Also, you can check your current node version with")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v\n\n")])])]),a("h2",{attrs:{id:"installing-node-js-on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-on-windows"}},[s._v("#")]),s._v(" Installing Node.js on Windows")]),s._v(" "),a("p",[a("strong",[s._v("Standard installation")])]),s._v(" "),a("p",[s._v("All Node.js binaries, installers, and source files can be downloaded "),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[s._v("You can download just the "),a("code",[s._v("node.exe")]),s._v(" runtime or use the Windows installer ("),a("code",[s._v(".msi")]),s._v("), which will also install "),a("code",[s._v("npm")]),s._v(", the recommended package manager for Node.js, and configure paths.")]),s._v(" "),a("p",[a("strong",[s._v("Installation by package manager")])]),s._v(" "),a("p",[s._v("You can also install by package manager "),a("a",{attrs:{href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("Chocolatey")]),a("OutboundLink")],1),s._v(" (Software Management Automation).")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("# choco install nodejs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("install\n\n")])])]),a("p",[s._v("More information about current version, you can find in the choco repository "),a("a",{attrs:{href:"https://chocolatey.org/packages/nodejs.install",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"install-node-js-on-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-node-js-on-ubuntu"}},[s._v("#")]),s._v(" Install Node.js on Ubuntu")]),s._v(" "),a("h3",{attrs:{id:"using-the-apt-package-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-apt-package-manager"}},[s._v("#")]),s._v(" Using the apt package manager")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" update    \nsudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install nodejs\nsudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install npm\nsudo ln "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nodejs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node\n\n# the node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" npm versions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" apt are outdated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" This is how you can update them"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nsudo npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g npm\nsudo npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g n\nsudo n stable # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("or lts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" or a specific version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"using-the-latest-of-specific-version-e-g-lts-6-x-directly-from-nodesource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-latest-of-specific-version-e-g-lts-6-x-directly-from-nodesource"}},[s._v("#")]),s._v(" Using the latest of specific version (e.g. LTS 6.x) directly from nodesource")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sL https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("deb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nodesource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("setup_6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sudo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("E")]),s._v(" bash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\napt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y nodejs\n\n")])])]),a("p",[s._v("Also, for the right way to install global npm modules, set the personal directory for them (eliminates the need for sudo and avoids EACCES errors):")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("mkdir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("global\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH=~/.npm-global/bin:$PATH"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("profile\nsource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("profile\nnpm config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" prefix "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~/.npm-global'")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"installing-node-js-with-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-with-n"}},[s._v("#")]),s._v(" Installing Node.js with n")]),s._v(" "),a("p",[s._v("First, there is a really nice wrapper for setting up "),a("code",[s._v("n")]),s._v(" on your system. Just run:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("L")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" bash\n\n")])])]),a("p",[s._v("to install "),a("code",[s._v("n")]),s._v(". Then install binaries in a variety of ways:")]),s._v(" "),a("p",[a("strong",[s._v("latest")])]),s._v(" "),a("p",[a("code",[s._v("n latest")])]),s._v(" "),a("p",[a("strong",[s._v("stable")])]),s._v(" "),a("p",[a("code",[s._v("n stable")])]),s._v(" "),a("p",[a("strong",[s._v("lts")])]),s._v(" "),a("p",[a("code",[s._v("n lts")])]),s._v(" "),a("p",[a("strong",[s._v("Any other version")])]),s._v(" "),a("p",[a("code",[s._v("n <version>")])]),s._v(" "),a("p",[s._v("e.g. "),a("code",[s._v("n 4.4.7")])]),s._v(" "),a("p",[s._v("If this version is already installed, this command will activate that version.")]),s._v(" "),a("p",[a("strong",[s._v("Switching versions")])]),s._v(" "),a("p",[a("code",[s._v("n")]),s._v(" by itself will produce a selection list of installed binaries. Use up and down to find the one you want and Enter to activate it.")]),s._v(" "),a("h2",{attrs:{id:"install-node-js-from-source-with-apt-package-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-node-js-from-source-with-apt-package-manager"}},[s._v("#")]),s._v(" Install Node.js From Source with APT package manager")]),s._v(" "),a("p",[a("strong",[s._v("Prerequisites")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("essential\nsudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install python\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install git\n\n")])])]),a("p",[a("strong",[s._v("Get source and build")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v("\ngit clone https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nodejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\n\n")])])]),a("p",[a("strong",[s._v("OR")]),s._v("\nFor the latest LTS Node.js version 6.10.2")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v("\nwget https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nodejs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\ntar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("xzvf node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\n\n")])])]),a("p",[s._v("Change to the source directory such as in "),a("code",[s._v("cd ~/node-v6.10.2")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("configure\nmake\nsudo make install\n\n")])])]),a("h2",{attrs:{id:"installing-node-js-on-raspberry-pi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-on-raspberry-pi"}},[s._v("#")]),s._v(" Installing Node.js on Raspberry PI")]),s._v(" "),a("p",[s._v("To install v6.x update the packages")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sL https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("deb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nodesource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("setup_6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sudo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("E")]),s._v(" bash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n\n")])])]),a("p",[s._v("Using the apt package manager")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y nodejs\n\n")])])]),a("h2",{attrs:{id:"installing-with-node-version-manager-under-fish-shell-with-oh-my-fish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-with-node-version-manager-under-fish-shell-with-oh-my-fish"}},[s._v("#")]),s._v(" Installing with Node Version Manager under Fish Shell with Oh My Fish!")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node Version Manager"),a("OutboundLink")],1),s._v(" ("),a("code",[s._v("nvm")]),s._v(") greatly simplifies the management of Node.js versions, their installation, and removes the need for "),a("code",[s._v("sudo")]),s._v(" when dealing with packages (e.g. "),a("code",[s._v("npm install ...")]),s._v("). "),a("a",{attrs:{href:"https://fishshell.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Fish Shell"),a("OutboundLink")],1),s._v(" ("),a("code",[s._v("fish")]),s._v(') "'),a("em",[s._v("is a smart and user-friendly command line\nshell for OS X, Linux, and the rest of the family")]),s._v('" that is a popular alternative among programmers to common shells such as '),a("code",[s._v("bash")]),s._v(". Lastly, "),a("a",{attrs:{href:"https://github.com/oh-my-fish/oh-my-fish",target:"_blank",rel:"noopener noreferrer"}},[s._v("Oh My Fish"),a("OutboundLink")],1),s._v(" ("),a("code",[s._v("omf")]),s._v(") allows for customizing and installing packages within Fish shell.")]),s._v(" "),a("p",[a("strong",[s._v("This guide assumes you are already using Fish as your shell")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Install nvm")])]),s._v(" "),a("p",[a("code",[s._v("curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash")])]),s._v(" "),a("p",[a("strong",[s._v("Install Oh My Fish")])]),s._v(" "),a("p",[a("code",[s._v("curl -L https://github.com/oh-my-fish/oh-my-fish/raw/master/bin/install | fish")])]),s._v(" "),a("p",[s._v("(Note: You will be prompted to restart your terminal at this point. Go ahead and do so now.)")]),s._v(" "),a("p",[a("strong",[s._v("Install plugin-nvm for Oh My Fish")])]),s._v(" "),a("p",[s._v("We will install "),a("a",{attrs:{href:"https://github.com/derekstavis/plugin-nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("plugin-nvm"),a("OutboundLink")],1),s._v(" via Oh My Fish to expose "),a("code",[s._v("nvm")]),s._v(" capabilities within the Fish shell:")]),s._v(" "),a("p",[a("code",[s._v("omf install nvm")])]),s._v(" "),a("p",[a("strong",[s._v("Install Node.js with Node Version Manager")])]),s._v(" "),a("p",[s._v("You are now ready to use "),a("code",[s._v("nvm")]),s._v(". You may install and use the version of Node.js of your liking. Some examples:")]),s._v(" "),a("ul",[a("li",[s._v("Install the most recent Node version: "),a("code",[s._v("nvm install node")])]),s._v(" "),a("li",[s._v("Install 6.3.1 specifically: "),a("code",[s._v("nvm install 6.3.1")])]),s._v(" "),a("li",[s._v("List installed verisons: "),a("code",[s._v("nvm ls")])]),s._v(" "),a("li",[s._v("Switch to a previously installed 4.3.1: "),a("code",[s._v("nvm use 4.3.1")])])]),s._v(" "),a("p",[a("strong",[s._v("Final Notes")])]),s._v(" "),a("p",[s._v("Remember again, that we no longer need "),a("code",[s._v("sudo")]),s._v(" when dealing with Node.js using this method! Node versions, packages, and so on are installed in your home directory.")]),s._v(" "),a("h2",{attrs:{id:"install-node-js-from-source-on-centos-rhel-and-fedora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-node-js-from-source-on-centos-rhel-and-fedora"}},[s._v("#")]),s._v(" Install Node.js from source on Centos, RHEL and Fedora")]),s._v(" "),a("p",[a("strong",[s._v("Prerequisites")])]),s._v(" "),a("ul",[a("li",[s._v("git")]),s._v(" "),a("li",[a("code",[s._v("clang")]),s._v(" and "),a("code",[s._v("clang++")]),s._v(" 3.4^ or "),a("code",[s._v("gcc")]),s._v(" and "),a("code",[s._v("g++")]),s._v(" 4.8^")]),s._v(" "),a("li",[s._v("Python 2.6 or 2.7")]),s._v(" "),a("li",[s._v("GNU Make 3.81^")])]),s._v(" "),a("p",[a("strong",[s._v("Get source")])]),s._v(" "),a("p",[a("strong",[s._v("Node.js v6.x LTS")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b v6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nodejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\n\n")])])]),a("p",[a("strong",[s._v("Node.js v7.x")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b v7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nodejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\n\n")])])]),a("p",[a("strong",[s._v("Build")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cd node\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("configure\nmake "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("jX\nsu "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c make install\n\n")])])]),a("p",[a("strong",[s._v("X - the number of processor cores, greatly speeds up the build")])]),s._v(" "),a("p",[a("strong",[s._v("Cleanup [Optional]")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cd \nrm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rf node\n\n")])])]),a("h2",{attrs:{id:"installing-using-macos-x-installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-using-macos-x-installer"}},[s._v("#")]),s._v(" Installing using MacOS X Installer")]),s._v(" "),a("p",[s._v("You can find the installers on "),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js download page"),a("OutboundLink")],1),s._v(". Normally, Node.js recommends two versions of Node, the LTS version (long term support) and the current version (latest release). If you are new to Node, just go for the LTS and then click the "),a("code",[s._v("Macintosh Installer")]),s._v(" button to download the package.")]),s._v(" "),a("p",[s._v("If you want to find other NodeJS releases, go "),a("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),a("OutboundLink")],1),s._v(", choose your release then click download. From the download page, look for a file with extension "),a("code",[s._v(".pkg")]),s._v(".")]),s._v(" "),a("p",[s._v("Once you downloaded the file (with extension "),a("code",[s._v(".pkg")]),s._v(" ofcourse), double click it to install. The installer packed with "),a("code",[s._v("Node.js")]),s._v(" and "),a("code",[s._v("npm")]),s._v(", by default, the package will install both but you can customize which one to install by clicking the "),a("code",[s._v("customize")]),s._v(" button in the "),a("code",[s._v("Installation Type")]),s._v(" step. Other than that, just follow the installation instructions, it's pretty straightforward.")]),s._v(" "),a("h3",{attrs:{id:"check-if-node-is-installed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-if-node-is-installed"}},[s._v("#")]),s._v(" Check if Node is installed")]),s._v(" "),a("p",[s._v("Open "),a("code",[s._v("terminal")]),s._v(" (if you don't know how to open your terminal, look at this "),a("a",{attrs:{href:"http://www.wikihow.com/Get-to-the-Command-Line-on-a-Mac",target:"_blank",rel:"noopener noreferrer"}},[s._v("wikihow"),a("OutboundLink")],1),s._v("). In the terminal type "),a("code",[s._v("node --version")]),s._v(" then enter. Your terminal will look like this if Node is installed:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("version\nv7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v("\n\n")])])]),a("p",[s._v("The "),a("code",[s._v("v7.2.1")]),s._v(" is your Node.js version, if you receive the message "),a("code",[s._v("command not found: node")]),s._v(" instead of that, then it's mean there is a problem with your installation.")])])}),[],!1,null,null,null);t.default=n.exports}}]);