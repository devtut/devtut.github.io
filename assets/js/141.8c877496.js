(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{548:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"crash-reporting-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crash-reporting-tools"}},[t._v("#")]),t._v(" Crash Reporting Tools")]),t._v(" "),s("h2",{attrs:{id:"fabric-crashlytics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fabric-crashlytics"}},[t._v("#")]),t._v(" Fabric - Crashlytics")]),t._v(" "),s("p",[s("strong",[t._v("Fabric")]),t._v(" is a modular mobile platform that provides useful kits you can mix to build your application. "),s("strong",[t._v("Crashlytics")]),t._v(" is a crash and issue reporting tool provided by Fabric that allows you to track and monitor your applications in detail.")]),t._v(" "),s("h3",{attrs:{id:"how-to-configure-fabric-crashlytics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-fabric-crashlytics"}},[t._v("#")]),t._v(" How to Configure Fabric-Crashlytics")]),t._v(" "),s("p",[s("strong",[t._v("Step 1:")]),t._v(" Change your "),s("code",[t._v("build.gradle")]),t._v(":")]),t._v(" "),s("p",[s("strong",[t._v("Add the plugin repo and the gradle plugin:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nbuildscript {\n  repositories {\n    maven { url 'https://maven.fabric.io/public' }\n  }\n\n  dependencies {\n    // The Fabric Gradle plugin uses an open ended version to react\n    // quickly to Android tooling updates\n    classpath 'io.fabric.tools:gradle:1.+'\n  }\n}\n\n")])])]),s("p",[s("strong",[t._v("Apply the plugin:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("apply plugin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.application'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Put Fabric plugin after Android plugin")]),t._v("\napply plugin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.fabric'")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Add the Fabric repo:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.fabric.io/public'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Add the Crashlyrics Kit:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.crashlytics.sdk.android:crashlytics:2.6.6@aar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transitive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Step 2:")]),t._v(" Add Your "),s("strong",[t._v("API Key")]),t._v(" and the "),s("strong",[t._v("INTERNET")]),t._v(" permission in "),s("code",[t._v("AndroidManifest.xml")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("manifest xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data\n          android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.fabric.ApiKey"')]),t._v("\n          android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"25eeca3bb31cd41577e097cabd1ab9eee9da151d"')]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.INTERNET"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("manifest"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Step 3:")]),t._v(" Init the Kit at runtime in you code, for example:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActionBarActivity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Init the KIT")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fabric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Crashlytics")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Step 4:")]),t._v(" Build project. To build and run:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/3pCgQ.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/3pCgQ.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"using-the-fabric-ide-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-fabric-ide-plugin"}},[t._v("#")]),t._v(" Using the Fabric IDE plugin")]),t._v(" "),s("p",[t._v("Kits can be installed using the Fabric IDE plugin for Android Studio or IntelliJ following "),s("a",{attrs:{href:"https://fabric.io/downloads/android",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),s("OutboundLink")],1),t._v(" link.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/OIHbI.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/OIHbI.jpg",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("After installing the plugin, "),s("strong",[t._v("restart")]),t._v(" Android Studio and "),s("strong",[t._v("login")]),t._v(" with your account using "),s("strong",[t._v("Android Studio")]),t._v(".")]),t._v(" "),s("p",[t._v("( short key > "),s("code",[t._v("CTRL + L")]),t._v(")")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/tdIPK.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/tdIPK.jpg",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Then it will show the projects that you have / the project you opened, select the one you need and click next .. next.")]),t._v(" "),s("p",[t._v("Select the kit you would like to add, for his example it is "),s("strong",[t._v("Crashlytics")]),t._v(" :")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/b7S3u.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/b7S3u.jpg",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Then hit "),s("code",[t._v("Install")]),t._v(". You don't need to add it manually this time like above "),s("strong",[t._v("gradle plugin")]),t._v(", instead it will build for you.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/HPU4G.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/HPU4G.jpg",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Done!")]),t._v(" "),s("h2",{attrs:{id:"capture-crashes-using-sherlock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capture-crashes-using-sherlock"}},[t._v("#")]),t._v(" Capture crashes using Sherlock")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ajitsing/Sherlock",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sherlock"),s("OutboundLink")],1),t._v(" captures all your crashes and reports them as a notification. When you tap on the notification, it opens up an activity with all the crash details along with Device and Application info")]),t._v(" "),s("p",[s("strong",[t._v("How to integrate Sherlock with your application?")])]),t._v(" "),s("p",[t._v("You just need to add Sherlock as a gradle dependency in your project.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.github.ajitsing:sherlock:1.0.1@aar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transitive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("After syncing your android studio, initialize Sherlock in your Application class.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("singhajit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("login")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("singhajit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sherlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sherlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleApp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sherlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Thats all you need to do. Also Sherlock does much more than just reporting a crash. To checkout all its features take a look at this "),s("a",{attrs:{href:"http://www.singhajit.com/integrating-sherlock-with-android-apps-to-get-crash-reports/",target:"_blank",rel:"noopener noreferrer"}},[t._v("article"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Demo")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/8L52G.gif",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/8L52G.gif",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"crash-reporting-with-acra"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crash-reporting-with-acra"}},[t._v("#")]),t._v(" Crash Reporting with ACRA")]),t._v(" "),s("p",[t._v("Step 1:\nAdd the dependency of latest "),s("a",{attrs:{href:"https://github.com/ACRA/acra/wiki/ChangeLog",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACRA"),s("OutboundLink")],1),t._v(" AAR to your application gradle(build.gradle).")]),t._v(" "),s("p",[t._v("Step 2:\nIn your application class(the class which extends Application; if not create it) Add a "),s("code",[t._v("@ReportsCrashes")]),t._v(" annotation and override the "),s("code",[t._v("attachBaseContext()")]),t._v(" method.")]),t._v(" "),s("p",[t._v("Step 3: Initialize the ACRA class in your application class")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ReportsCrashes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    formUri "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your choice of backend"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    reportType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("REPORT_TYPES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JSON"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("FORM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    httpMethod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HTTP_METHOD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("POST"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("PUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    formUriBasicAuthLogin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AUTH_USERNAME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    formUriBasicAuthPassword "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(' "AUTH_PASSWORD'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customReportContent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("USER_APP_START_DATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("USER_CRASH_DATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APP_VERSION_CODE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APP_VERSION_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ANDROID_VERSION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEVICE_ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BUILD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BRAND"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEVICE_FEATURES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PACKAGE_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REPORT_ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("STACK_TRACE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NOTIFICATION_TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TOAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIALOG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOTIFICATION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    resToastText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crash_text_toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApplication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachBaseContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),t._v(" base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachBaseContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialization of ACRA")]),t._v("\n                ACRA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Where AUTH_USERNAME and AUTH_PASSWORD are the credentials of your desired "),s("a",{attrs:{href:"https://github.com/ACRA/acralyzer/wiki/setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("backends"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Step 4: Define the Application class in AndroidManifest.xml")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n<application\n        android:name=".MyApplication">\n        <service></service>\n        <activity></activity>\n        <receiver></receiver>\n </application>\n\n')])])]),s("p",[t._v("Step 5: Make sure you have "),s("code",[t._v("internet")]),t._v(" permission to receive the report from crashed application")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.INTERNET"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("In case if you want to send the silent report to the backend then just use the below method to achieve it.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("ACRA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getErrorReporter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleSilentException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"force-a-test-crash-with-fabric"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#force-a-test-crash-with-fabric"}},[t._v("#")]),t._v(" Force a Test Crash With Fabric")]),t._v(" "),s("p",[t._v("Add a button you can tap to trigger a crash. Paste this code into your layout where you’d like the button to appear.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Button")]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Force Crash!"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forceCrash"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_centerVertical"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_centerHorizontal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Throw a RuntimeException")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forceCrash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a crash"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Run your app and tap the new button to cause a crash. In a minute or two you should be able to see the crash on your Crashlytics dashboard as well as you will get a mail.")]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("The best complete wiki is available here in "),s("a",{attrs:{href:"https://github.com/ACRA/acra",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);