(window.webpackJsonp=window.webpackJsonp||[]).push([[3026],{3435:function(t,a,e){"use strict";e.r(a);var s=e(31),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"getting-started-with-react-native"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-react-native"}},[t._v("#")]),t._v(" Getting started with react-native")]),t._v(" "),e("h2",{attrs:{id:"setup-for-mac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-for-mac"}},[t._v("#")]),t._v(" Setup for Mac")]),t._v(" "),e("p",[e("strong",[t._v("Installing package manager Homebrew "),e("code",[t._v("brew")])])]),t._v(" "),e("p",[t._v("Paste that at a Terminal prompt.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ruby "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("Installing Xcode IDE")])]),t._v(" "),e("p",[t._v("Download it using link below or find it on Mac App Store")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.apple.com/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.apple.com/download/"),e("OutboundLink")],1)]),t._v(" "),e("blockquote"),t._v(" "),e("p",[e("strong",[t._v("NOTE:")]),t._v(" If you have "),e("strong",[t._v("Xcode-beta.app")]),t._v(" installed along with production version of "),e("strong",[t._v("Xcode.app")]),t._v(", make sure you are using production version of "),e("code",[t._v("xcodebuild")]),t._v(" tool. You can set it with:\n"),e("code",[t._v("sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer/")])]),t._v(" "),e("p",[e("strong",[t._v("Installing Android environment")])]),t._v(" "),e("li",[t._v("\nGit **`git`**\n*If you have installed XCode, Git is already installed, otherwise run the following\n"),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("brew install git \n\n")])])])]),t._v(" "),e("li",[t._v("\n[Latest JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)\n")]),t._v(" "),e("li",[t._v("\n[Android Studio](http://developer.android.com/sdk/index.html)\nChoose a Custom installation\n["),e("img",{attrs:{src:"https://i.stack.imgur.com/WklQv.png",alt:"Choose a Custom installation"}}),t._v("](https://i.stack.imgur.com/WklQv.png)\nChoose both Performance and Android Virtual Device\n["),e("img",{attrs:{src:"https://i.stack.imgur.com/UiNxG.png",alt:"Choose both Performance and Android Virtual Device"}}),t._v("](https://i.stack.imgur.com/UiNxG.png)\nAfter installation, choose Configure -> SDK Manager from the Android Studio welcome window.\n["),e("img",{attrs:{src:"https://i.stack.imgur.com/JYSu6.png",alt:"choose Configure -> SDK Manager"}}),t._v("](https://i.stack.imgur.com/JYSu6.png)\nIn the SDK Platforms window, choose Show Package Details and under Android 6.0 (Marshmallow), make sure that Google APIs, Intel x86 Atom System Image, Intel x86 Atom_64 System Image, and Google APIs Intel x86 Atom_64 System Image are checked.\n["),e("img",{attrs:{src:"https://i.stack.imgur.com/wBiuq.png",alt:"SDK Platforms window"}}),t._v("](https://i.stack.imgur.com/wBiuq.png)\nIn the SDK Tools window, choose Show Package Details and under Android SDK Build Tools, make sure that Android SDK Build-Tools 23.0.1 is selected.\n["),e("img",{attrs:{src:"https://i.stack.imgur.com/9ZsjC.png",alt:"SDK Tools window"}}),t._v("](https://i.stack.imgur.com/9ZsjC.png)\n")]),t._v(" "),e("li",[t._v("\nEnvironment Variable `ANDROID_HOME`\nEnsure the ANDROID_HOME environment variable points to your existing Android SDK. To do that, add this to your ~/.bashrc, ~/.bash_profile (or whatever your shell uses) and re-open your terminal:\n"),e("p",[t._v("If you installed the SDK without Android Studio, then it may be something like:\n/usr/local/opt/android-sdk")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Library"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Android"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sdk\n\n")])])])]),t._v(" "),e("p",[e("strong",[t._v("Dependencies for Mac")])]),t._v(" "),e("p",[t._v("You will need Xcode for iOS and Android Studio for android, node.js, the React Native command line tools, and Watchman.")]),t._v(" "),e("p",[t._v("We recommend installing node and watchman via Homebrew.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("brew install node\nbrew install watchman\n\n")])])]),e("blockquote"),t._v(" "),e("p",[e("a",{attrs:{href:"https://facebook.github.io/watchman",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watchman"),e("OutboundLink")],1),t._v(" is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance. It is optional.")]),t._v(" "),e("p",[t._v("Node comes with npm, which lets you install the React Native command line interface.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g react"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli\n\n")])])]),e("p",[t._v("If you get a permission error, try with sudo:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("sudo npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g react"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),e("p",[t._v("For iOS the easiest way to install Xcode is via the Mac App Store.\nAnd for android download and install Android Studio.")]),t._v(" "),e("p",[t._v("If you plan to make changes in Java code, we recommend Gradle Daemon which speeds up the build.")]),t._v(" "),e("p",[e("strong",[t._v("Testing your React Native Installation")])]),t._v(" "),e("p",[t._v('Use the React Native command line tools to generate a new React Native project called "AwesomeProject", then run react-native run-ios inside the newly created folder.')]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("react"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native init AwesomeProject\ncd AwesomeProject\nreact"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native run"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ios\n\n")])])]),e("p",[t._v("You should see your new app running in the iOS Simulator shortly. react-native run-ios is just one way to run your app - you can also run it directly from within Xcode or Nuclide.")]),t._v(" "),e("p",[e("strong",[t._v("Modifying your app")])]),t._v(" "),e("p",[t._v("Now that you have successfully run the app, let's modify it.")]),t._v(" "),e("ul",[e("li",[t._v("Open index.ios.js or index.android.js in your text editor of choice and edit some lines.\n")]),e("li",[t._v("Hit Command⌘ + R in your iOS Simulator to reload the app and see your\nchange! That's it!")])]),t._v(" "),e("p",[t._v("Congratulations! You've successfully run and modified your first React Native app.")]),t._v(" "),e("p",[e("sub",[t._v("source: "),e("a",{attrs:{href:"http://facebook.github.io/react-native/docs/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started - React-Native"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"setup-for-linux-ubuntu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-for-linux-ubuntu"}},[t._v("#")]),t._v(" Setup for Linux (Ubuntu)")]),t._v(" "),e("p",[e("strong",[t._v("1) Setup Node.JS")])]),t._v(" "),e("h3",{attrs:{id:"start-the-terminal-and-run-the-following-commands-to-install-nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-the-terminal-and-run-the-following-commands-to-install-nodejs"}},[t._v("#")]),t._v(" Start the terminal and run the following commands to install nodeJS:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("curl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sL https"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("deb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodesource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("setup_5"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sudo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),t._v(" bash "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\nsudo apt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" install nodejs\n\n")])])]),e("h3",{attrs:{id:"if-node-command-is-unavailable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-node-command-is-unavailable"}},[t._v("#")]),t._v(" If node command is unavailable")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("sudo ln "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nodejs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node\n\n")])])]),e("h3",{attrs:{id:"alternatives-nodejs-instalations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alternatives-nodejs-instalations"}},[t._v("#")]),t._v(" Alternatives NodeJS instalations:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("curl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sL https"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("deb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodesource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("setup_6"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sudo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),t._v(" bash "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nsudo apt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" install "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y nodejs\n\n")])])]),e("p",[t._v("or")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("curl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sL https"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("deb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodesource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("setup_7"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sudo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),t._v(" bash "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nsudo apt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" install "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y nodejs\n\n")])])]),e("h3",{attrs:{id:"check-if-you-have-the-current-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-if-you-have-the-current-version"}},[t._v("#")]),t._v(" check if you have the current version")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("node "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v \n\n")])])]),e("h3",{attrs:{id:"run-the-npm-to-install-the-react-native"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-the-npm-to-install-the-react-native"}},[t._v("#")]),t._v(" Run the npm to install the react-native")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("sudo npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g react"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli\n\n")])])]),e("p",[e("strong",[t._v("2) Setup Java")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("sudo apt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" install lib32stdc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" lib32z1 openjdk"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jdk\n\n")])])]),e("p",[e("strong",[t._v("3) Setup Android Studio:")])]),t._v(" "),e("h3",{attrs:{id:"android-sdk-or-android-studio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-sdk-or-android-studio"}},[t._v("#")]),t._v(" Android SDK or Android Studio")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("developer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sdk"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n\n")])])]),e("h3",{attrs:{id:"android-sdk-e-env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-sdk-e-env"}},[t._v("#")]),t._v(" Android SDK e ENV")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOCAL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SDK")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("$"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("$"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tools"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("$"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("platform"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tools\n\n")])])]),e("p",[e("strong",[t._v("4) Setup emulator:")])]),t._v(" "),e("p",[t._v("On the terminal run the command")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("android\n\n")])])]),e("p",[t._v('Select "SDK Platforms" from within the SDK Manager and you should see a blue checkmark next to "Android 7.0 (Nougat)". In case it is not, click on the checkbox and then "Apply".')]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/ZrSya.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/ZrSya.png",alt:"enter image description here"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("5) Start a project")])]),t._v(" "),e("h3",{attrs:{id:"example-app-init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-app-init"}},[t._v("#")]),t._v(" Example app init")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("react"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native init ReactNativeDemo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cd ReactNativeDemo\n\n")])])]),e("h3",{attrs:{id:"obs-always-check-if-the-version-on-android-app-build-gradle-is-the-same-as-the-build-tools-downloaded-on-your-android-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obs-always-check-if-the-version-on-android-app-build-gradle-is-the-same-as-the-build-tools-downloaded-on-your-android-sdk"}},[t._v("#")]),t._v(" Obs: Always check if the version on "),e("code",[t._v("android/app/build.gradle")]),t._v(" is the same as the Build Tools downloaded on your android SDK")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("android "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    compileSdkVersion "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XX")]),t._v("\n    buildToolsVersion "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XX.X.X"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("6) Run the project")])]),t._v(" "),e("h3",{attrs:{id:"open-android-avd-to-set-up-a-virtual-android-execute-the-command-line"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-android-avd-to-set-up-a-virtual-android-execute-the-command-line"}},[t._v("#")]),t._v(" Open Android AVD to set up a virtual android. Execute the command line:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("android avd\n\n")])])]),e("p",[t._v("Follow the instructions to create a virtual device and start it")]),t._v(" "),e("p",[t._v("Open another terminal and run the command lines:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("react"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native run"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("android\nreact"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native start\n\n")])])]),e("h2",{attrs:{id:"setup-for-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-for-windows"}},[t._v("#")]),t._v(" Setup for Windows")]),t._v(" "),e("p",[t._v("Note: You cannot develop react-native apps for iOS on Windows, only react-native android apps.")]),t._v(" "),e("p",[t._v("The official setup docs for react-native on windows can be "),e("a",{attrs:{href:"https://facebook.github.io/react-native/docs/getting-started.html#dependencies-for-windows-android",target:"_blank",rel:"noopener noreferrer"}},[t._v("found here"),e("OutboundLink")],1),t._v(". If you need more details there is a "),e("a",{attrs:{href:"http://bitvbit.blogspot.com/2016/07/react-native-android-apps-on-windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("granular guide here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Tools/Environment")])]),t._v(" "),e("ul",[e("li",[t._v("Windows 10")]),t._v(" "),e("li",[t._v("command line tool (eg Powershell or windows command line)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chocolatey"),e("OutboundLink")],1),t._v(" ("),e("a",{attrs:{href:"http://bitvbit.blogspot.com/2016/07/react-native-android-apps-on-windows.html#setup-choco",target:"_blank",rel:"noopener noreferrer"}},[t._v("steps to setup via PowerShell"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[t._v("The JDK (version 8)")]),t._v(" "),e("li",[t._v("Android Studio")]),t._v(" "),e("li",[t._v("An Intel machine with Virtualization technology enabled for HAXM (optional, only needed if you want to use an emulator)")])]),t._v(" "),e("p",[e("strong",[t._v("1) Setup your machine for react native development")])]),t._v(" "),e("p",[t._v("Start the command line as an administrator run the following commands:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("choco install nodejs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install\nchoco install python2\n\n")])])]),e("p",[t._v("Restart command line as an administrator so you can run npm")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g react"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli\n\n")])])]),e("p",[t._v("After running the last command copy the directory that react-native was installed in. You will need this for Step 4. I tried this on two computers in one case it was: "),e("code",[t._v("C:\\Program Files (x86)\\Nodist\\v-x64\\6.2.2")]),t._v(". In the other it was: "),e("code",[t._v("C:\\Users\\admin\\AppData\\Roaming\\npm")])]),t._v(" "),e("p",[e("strong",[t._v("2) Set your Environment Variables")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://bitvbit.blogspot.com/2016/07/react-native-android-apps-on-windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Step by Step guide with images can be found here for this section."),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Open the Environment Variables window by navigating to:")]),t._v(" "),e("p",[t._v('[Right click] "Start" menu -> System -> Advanced System Settings -> Environment Variables')]),t._v(" "),e("p",[t._v('In the bottom section find the "Path" System Variable and add the location that react-native was installed to in step 1.')]),t._v(" "),e("p",[t._v('If you haven\'t added an ANDROID_HOME environment variable you will have to do that here too. While still in the "Environment Variables" window, add a new System Variable with the name "ANDROID_HOME" and value as the path to your android sdk.')]),t._v(" "),e("p",[t._v("Then restart the command line as an admin so you can run react-native commands in it.")]),t._v(" "),e("p",[e("strong",[t._v("3) Create your project")]),t._v("\nIn command line, navigate to the folder you want to place your project and run the following command:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("react"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native init ProjectName\n\n")])])]),e("p",[e("strong",[t._v("4) Run your project")]),t._v("\nStart an emulator from android studio\nNavigate to the root directory of your project in command line and run it:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("cd ProjectName\nreact"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("native run"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("android\n\n")])])]),e("p",[t._v("You may run into dependency issues. For example, there may be an error that you do not have the correct build tools version. To fix this you will have to open "),e("a",{attrs:{href:"https://developer.android.com/studio/intro/update.html#sdk-manager",target:"_blank",rel:"noopener noreferrer"}},[t._v("the sdk manager in Android Studio"),e("OutboundLink")],1),t._v(" and download the build tools from there.")]),t._v(" "),e("p",[e("strong",[t._v("Congrats!")])]),t._v(" "),e("p",[t._v("To refresh the ui you can press the "),e("code",[t._v("r")]),t._v(" key twice while in the emulator and running the app. To see developer options you can press "),e("code",[t._v("ctrl + m")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.")]),t._v(" "),e("p",[t._v("With React Native, you don't build a “mobile web app”, an “HTML5 app”, or a “hybrid app”. You build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.")]),t._v(" "),e("p",[t._v("It is open-source and maintained by Facebook.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://facebook.github.io/react-native/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Website"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://facebook.github.io/react-native/docs/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/facebook/react-native",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Repository"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("sub",[t._v("Source: "),e("a",{attrs:{href:"https://facebook.github.io/react-native/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native website"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);