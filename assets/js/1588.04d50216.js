(window.webpackJsonp=window.webpackJsonp||[]).push([[1588],{1996:function(a,e,t){"use strict";t.r(e);var s=t(31),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-deployment"}},[a._v("#")]),a._v(" Java deployment")]),a._v(" "),t("p",[a._v('There are a variety of technologies for "packaging" Java applications, webapps and so forth, for deployment to the platform on which they will run.  They range from simple library or executable '),t("code",[a._v("JAR")]),a._v(" files, "),t("code",[a._v("WAR")]),a._v(" and "),t("code",[a._v("EAR")]),a._v(" files, through to installers and self-contained executables.")]),a._v(" "),t("h2",{attrs:{id:"making-an-executable-jar-from-the-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#making-an-executable-jar-from-the-command-line"}},[a._v("#")]),a._v(" Making an executable JAR from the command line")]),a._v(" "),t("p",[a._v("To make a jar, you need one or more class files. This should have a main method if it is to be run by a double click.")]),a._v(" "),t("p",[a._v("For this example, we will use:")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("javax"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("swing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("awt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Container")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JFrame")]),a._v(" f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JFrame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, World"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JLabel")]),a._v(" label "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JLabel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, World"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Container")]),a._v(" cont "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getContentPane")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        cont"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("label"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setVisible")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setDefaultCloseOperation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JFrame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("EXIT_ON_CLOSE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("p",[a._v("It has been named HelloWorld.java")]),a._v(" "),t("p",[a._v("Next, we want to compile this program.")]),a._v(" "),t("p",[a._v("You may use any program you want to do this. To run from the command line,\nsee the documentation "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/java/84/compile-and-run-your-first-java-program#t=201608051426147769964",target:"_blank",rel:"noopener noreferrer"}},[a._v("on compiling and running your first java program."),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("Once you have HelloWorld.class, make a new folder and call it whatever you want.")]),a._v(" "),t("p",[a._v("Make another file called manifest.txt and paste into it")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Main")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar\n\n")])])]),t("p",[a._v("Put it in the same folder with HelloWorld.class "),t("br"),a._v("\nUse the command line to make your current directory ("),t("code",[a._v("cd C:\\Your\\Folder\\Path\\Here")]),a._v(" on windows) your folder.")]),a._v(" "),t("p",[a._v("Use Terminal and change directory to the directory ("),t("code",[a._v("cd /Users/user/Documents/Java/jarfolder")]),a._v(" on Mac) your folder")]),a._v(" "),t("p",[a._v("When that is done, type in "),t("code",[a._v("jar -cvfm HelloWorld.jar manifest.txt HelloWorld.class")]),a._v(" and press enter. This makes a jar file (in the folder with your manifest and HelloWorld.class) using the .class files specified and named HelloWorld.jar. See the Syntax section for information about the options (like -m and -v). "),t("br"),a._v("\nAfter these steps, go to your directory with the manifest file and you should find HelloWorld.jar "),t("br"),a._v("\nClicking on it should display "),t("code",[a._v("Hello, World")]),a._v(" in a text box.")]),a._v(" "),t("h2",{attrs:{id:"creating-jar-war-and-ear-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-jar-war-and-ear-files"}},[a._v("#")]),a._v(" Creating JAR, WAR and EAR files")]),a._v(" "),t("p",[a._v('The JAR, WAR and EAR files types are fundamentally ZIP files with a "manifest" file and (for WAR and EAR files) a particular internal directory / file structure.')]),a._v(" "),t("p",[a._v('The recommended way to create these files is to use a Java-specific build tool which "understands" the requirements for the respective file types.  If you don\'t use a build tool, then IDE "export" is the next option to try.')]),a._v(" "),t("p",[a._v("("),t("strong",[a._v("Editorial note: the descriptions of how to create these files are best placed in the documentation for the respective tools.  Put them there.  Please show some self-restraint and DON'T shoe-horn them into this example!")]),a._v(")")]),a._v(" "),t("h3",{attrs:{id:"creating-jar-and-war-files-using-maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-jar-and-war-files-using-maven"}},[a._v("#")]),a._v(" Creating JAR and WAR files using Maven")]),a._v(" "),t("p",[a._v("Creating a JAR or WAR using Maven is simply a matter of putting the correct "),t("code",[a._v("<packaging>")]),a._v(" element into the POM file; e,g,")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("packaging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("packaging"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),t("p",[a._v("or")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("packaging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("war"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("packaging"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),t("p",[a._v('For more details.  Maven can be configured to create "executable" JAR files by adding the requisite information about the entry-point class and external dependencies as plugin properties for the maven jar plugin.  There is even a plugin for creating "uberJAR" files that combine an application and its dependencies into a single JAR file.')]),a._v(" "),t("p",[a._v("Please refer to the Maven documentation ( "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/maven/topics",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://stackoverflow.com/documentation/maven/topics"),t("OutboundLink")],1),a._v(" )for more information.")]),a._v(" "),t("h3",{attrs:{id:"creating-jar-war-and-ear-files-using-ant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-jar-war-and-ear-files-using-ant"}},[a._v("#")]),a._v(" Creating JAR, WAR and EAR files using Ant")]),a._v(" "),t("p",[a._v('The Ant build tool has separate "tasks" for building JAR, WAR and EAR.  Please refer to the Ant documentation ( '),t("a",{attrs:{href:"http://stackoverflow.com/documentation/ant/topics",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://stackoverflow.com/documentation/ant/topics"),t("OutboundLink")],1),a._v(" ) for more information.")]),a._v(" "),t("h3",{attrs:{id:"creating-jar-war-and-ear-files-using-an-ide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-jar-war-and-ear-files-using-an-ide"}},[a._v("#")]),a._v(" Creating JAR, WAR and EAR files using an IDE")]),a._v(" "),t("p",[a._v('The three most popular Java IDEs all have built-in support for creating deployment files.  The functionality is often described as "exporting".')]),a._v(" "),t("ul",[t("li",[a._v("Eclipse - "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/eclipse/topics",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://stackoverflow.com/documentation/eclipse/topics"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("NetBeans - "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/netbeans/topics",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://stackoverflow.com/documentation/netbeans/topics"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("Intellij-IDEA - "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/intellij-idea/4807/exporting",target:"_blank",rel:"noopener noreferrer"}},[a._v("Exporting"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"creating-jar-war-and-ear-files-using-the-jar-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-jar-war-and-ear-files-using-the-jar-command"}},[a._v("#")]),a._v(" Creating JAR, WAR and EAR files using the "),t("code",[a._v("jar")]),a._v(" command.")]),a._v(" "),t("p",[a._v('It is also possible to create these files "by hand" using the '),t("code",[a._v("jar")]),a._v(" command.  It is simply a matter of assembling a file tree with the correct component files in the correct place, creating a manifest file, and running "),t("code",[a._v("jar")]),a._v(" to create the JAR file.")]),a._v(" "),t("p",[a._v("Please refer to the "),t("code",[a._v("jar")]),a._v(" command Topic ( "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/java/5247/creating-and-modifying-jar-files",target:"_blank",rel:"noopener noreferrer"}},[a._v("Creating and modifying JAR files"),t("OutboundLink")],1),a._v(" ) for more information")]),a._v(" "),t("h2",{attrs:{id:"introduction-to-java-web-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-java-web-start"}},[a._v("#")]),a._v(" Introduction to Java Web Start")]),a._v(" "),t("p",[a._v("The Oracle Java Tutorials summarize "),t("a",{attrs:{href:"https://docs.oracle.com/javase/tutorial/deployment/webstart/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Web Start"),t("OutboundLink")],1),a._v(" as follows:")]),a._v(" "),t("blockquote"),a._v(" "),t("p",[a._v("Java Web Start software provides the power to launch full-featured applications with a single click. Users can download and launch applications, such as a complete spreadsheet program or an Internet chat client, without going through lengthy installation procedures.")]),a._v(" "),t("p",[a._v("Other advantages of Java Web Start are support for signed code and explicit declaration of platform dependencies, and support for code caching and deployment of application updates.")]),a._v(" "),t("p",[a._v("Java Web Start is also referred to as JavaWS and JAWS.  The primary sources of information are:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/tutorial/deployment/webstart/",target:"_blank",rel:"noopener noreferrer"}},[a._v("The Java Tutorials - Lesson: Java Web Start"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/javawebstart/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java Web Start Guide"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/javawebstart/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java Web Start FAQ"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/javawebstart/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JNLP Specification"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/javawebstart/index.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("javax.jnlp")]),a._v(" API Documentation"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/javawebstart/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java Web Start Developers Site"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[a._v("#")]),a._v(" Prerequisites")]),a._v(" "),t("p",[a._v("At a high level, Web Start works by distributing Java applications packed as JAR files from a remote webserver.  The prerequisites are:")]),a._v(" "),t("li",[a._v("\nA pre-existing Java installation (JRE or JDK) on the target machine where the application is to run.  Java 1.2.2 or higher is required:\n"),t("ul",[a._v("\n- From Java 5.0 onwards, Web Start support is included in the JRE / JDK.\n- For earlier releases, Web Start support is installed separately.\n- The Web Start infrastructure includes some Javascript that can be included in a web page to assist the user to install the necessary software.\n"),t("p",[a._v("The webserver that hosts the software must be accessible to the target machine.")]),a._v(" "),t("p",[a._v("If the user is going to launch a Web Start application using a link in a web page, then:")]),a._v(" "),t("ul",[t("li",[a._v("they need a compatible web browser, and")]),a._v(" "),t("li",[a._v("for modern (secure) browsers, they need to be told how to tell the browser to allow Java to run ... without compromising web browser security.")])]),a._v(" "),t("h3",{attrs:{id:"an-example-jnlp-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-example-jnlp-file"}},[a._v("#")]),a._v(" An example JNLP file")]),a._v(" "),t("p",[a._v("The following example is intended to illustrate the basic functionality of JNLP.")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("xml version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0"')]),a._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"UTF-8"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("jnlp spec"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0+"')]),a._v(" codebase"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://www.example.com/demo"')]),a._v(" \n    href"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"demo_webstart.jnlp"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("information"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Demo")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("vendor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("The")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Example")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Team")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("vendor"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("information"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Application")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Resources")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("j2se version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.7+"')]),a._v(" href"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://java.sun.com/products/autodl/j2se"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("jar href"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Demo.jar"')]),a._v(" main"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("resources"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("application"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("desc\n         name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Demo Application"')]),a._v("\n         main"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"com.example.jwsdemo.Main"')]),a._v("\n         width"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"300"')]),a._v("\n         height"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"300"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("application"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("desc"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("update check"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"background"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("jnlp"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("    \n\n")])])]),t("p",[a._v("As you can see, a JNLP file XML-based, and the information is all contained in the "),t("code",[a._v("<jnlp>")]),a._v(" element.")]),a._v(" "),t("ul",[t("li",[a._v("The "),t("code",[a._v("spec")]),a._v(" attribute gives the version of the JNPL spec that this file conforms to.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("codebase")]),a._v(" attribute gives the base URL for resolving relative "),t("code",[a._v("href")]),a._v(" URLs in the rest of the file.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("href")]),a._v(" attribute gives the definitive URL for this JNLP file.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("<information>")]),a._v(" element contains metadata the application including its title, authors, description and help website.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("<resources>")]),a._v(" element describes the dependencies for the application including the required Java version, OS platform and JAR files.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("<application-desc>")]),a._v(" (or "),t("code",[a._v("<applet-desc>")]),a._v(") element provides information needed to launch the application.")])]),a._v(" "),t("h3",{attrs:{id:"setting-up-the-web-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-web-server"}},[a._v("#")]),a._v(" Setting up the web server")]),a._v(" "),t("p",[a._v("The webserver must be configured to use "),t("code",[a._v("application/x-java-jnlp-file")]),a._v(" as the MIMEtype for "),t("code",[a._v(".jnlp")]),a._v(" files.")]),a._v(" "),t("p",[a._v("The JNLP file and the application's JAR files must be installed on the webserver so that they are available using the URLs indicated by the JNLP file.")]),a._v(" "),t("h3",{attrs:{id:"enabling-launch-via-a-web-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-launch-via-a-web-page"}},[a._v("#")]),a._v(" Enabling launch via a web page")]),a._v(" "),t("p",[a._v("If the application is to be launched via a web link, the page that contains the link must be created on the webserver.")]),a._v(" "),t("li",[a._v("\nIf you can assume that Java Web Start is already installed on the user's machine, then the web page simply needs to contain a link for launching the application. For example.\n"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("a href"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://www.example.com/demo_webstart.jnlp"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Launch")]),a._v(" the application"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])])]),a._v(" "),t("li",[a._v("\nOtherwise, the page should also include some scripting to detect the kind of browser the user is using and request to download and install the required version of Java.\n")]),a._v(" "),t("p",[t("strong",[a._v("NOTE:")]),a._v(" It is a bad idea to encourage users to encourage to install Java this way, or even to enable Java in their web browsers so that JNLP web page launch will work.")]),a._v(" "),t("h3",{attrs:{id:"launching-web-start-applications-from-the-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launching-web-start-applications-from-the-command-line"}},[a._v("#")]),a._v(" Launching Web Start applications from the command line")]),a._v(" "),t("p",[a._v("The instructions for launching an Web Start application from the command line are simple. Assuming that the user has a Java 5.0 JRE or JDK installed, the simply need to run this:")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("$ javaws "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n")])])]),t("p",[a._v("where "),t("code",[a._v("<url>")]),a._v(" is the URL for the JNLP file on the remote server.")]),a._v(" "),t("h2",{attrs:{id:"creating-an-uberjar-for-an-application-and-its-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-uberjar-for-an-application-and-its-dependencies"}},[a._v("#")]),a._v(" Creating an UberJAR for an application and its dependencies")]),a._v(" "),t("p",[a._v("A common requirement for a Java application is that can be deployed by copying a single file.  For simple applications that depend only on the standard Java SE class libraries, this requirement is satisfied by creating a JAR file containing all of the (compiled) application classes.")]),a._v(" "),t("p",[a._v("Things are not so straightforward if the application depends on third-party libraries.  If you simply put dependency JAR files inside an application JAR, the standard Java class loader will not be able to find the library classes, and your application will not start.  Instead, you need to create a single JAR file that contains the application classes and associated resources together with the dependency classes and resources.  These need to be organized as a single namespace for the classloader to search.")]),a._v(" "),t("p",[a._v("The such a JAR file is often referred to as an UberJAR.")]),a._v(" "),t("h3",{attrs:{id:"creating-an-uberjar-using-the-jar-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-uberjar-using-the-jar-command"}},[a._v("#")]),a._v(' Creating an UberJAR using the "jar" command')]),a._v(" "),t("p",[a._v("The procedure for creating an UberJAR is straight-forward.  (I will use Linux commands for simplicity.  The commands should be identical for Mac OS, and similar for Windows.)")]),a._v(" "),t("li",[a._v("\nCreate a temporary directory, and change directory to it.\n"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("$ mkdir tempDir\n$ cd tempDir\n\n")])])])]),a._v(" "),t("li",[a._v("\nFor each dependent JAR file, **in the reverse order** that they need to appear on the application's classpath, used the `jar` command to unpack the JAR into the temporary directory.\n"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("$ jar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("xf "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),t("p",[a._v("Doing this for multiple JAR files will "),t("strong",[a._v("overlay")]),a._v(" contents of the JARs.\n")])]),a._v(" "),t("li",[a._v("\nCopy the application classes from the build tree into the temporary directory"),t("p"),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("$ cp "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("r path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("classes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n")])])])]),a._v(" "),t("li",[a._v("\nCreate the UberJAR from the contents of the temporary directory:\n"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("$ jar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("/myApplication"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar\n\n")])])]),t("p",[a._v("If you are creating an executable JAR file, include an appropriate MANIFEST.MF as described here.\n")])]),t("p"),a._v(" "),t("h3",{attrs:{id:"creating-an-uberjar-using-maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-uberjar-using-maven"}},[a._v("#")]),a._v(" Creating an UberJAR using Maven")]),a._v(" "),t("p",[a._v('If your project is built using Maven, you can get it to create an UberJAR using either the "maven-assembly" or "maven-shade" plugins.  See the '),t("a",{attrs:{href:"http://stackoverflow.com/documentation/maven/2308/maven-assembly-plugin#t=201701150039251624937",target:"_blank",rel:"noopener noreferrer"}},[a._v("Maven Assembly"),t("OutboundLink")],1),a._v(" topic (in the "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/maven/topics",target:"_blank",rel:"noopener noreferrer"}},[a._v("Maven"),t("OutboundLink")],1),a._v(" documentation) for details.")]),a._v(" "),t("h3",{attrs:{id:"the-advantages-and-drawbacks-of-uberjars"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-advantages-and-drawbacks-of-uberjars"}},[a._v("#")]),a._v(" The advantages and drawbacks of UberJARs")]),a._v(" "),t("p",[a._v("Some of advantages of UberJARs are self-evident:")]),a._v(" "),t("ul",[t("li",[a._v("An UberJAR is easy to distribute.")]),a._v(" "),t("li",[a._v("You cannot break the library dependencies for an UberJAR, since the libraries are self-contained.")])]),a._v(" "),t("p",[a._v("In addition, if you use an appropriate tooling to create the UberJAR, you will have the option of excluding library classes that are not used from the JAR file.  However, that this is typically done by static analysis of the classes.  If your application uses reflection, annotation processing and similar techniques, you need to be careful that classes are not excluded incorrectly.")]),a._v(" "),t("p",[a._v("UberJARs also have some disadvantages:")]),a._v(" "),t("ul",[t("li",[a._v("If you have lots of UberJARs with the same dependencies, then each one will contain a copy of the dependencies.")]),a._v(" "),t("li",[a._v("Some open source libraries have licenses which "),t("strong",[a._v("may")]),a._v(" preclude "),t("sup",[a._v("1")]),a._v(" their use in an UberJAR.")])]),a._v(" "),t("p",[t("sup",[a._v("1 - Some open source library licenses allow you to use the library only of the end-user is able to replace one version of the library with another.  UberJARs can make replacement of version dependencies difficult.")])]),a._v(" "),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),t("p",[a._v('At the most fundamental level, a Java program can be deployed by copying a compiled class (i.e. a ".class" file) or a directory tree containing compiled classes.  However Java is normally deployed in one of the following ways:')]),a._v(" "),t("li",[a._v("\nBy copying a JAR file or collection of JAR files to the system where they will be executed; e.g. using `javac`.\n")]),a._v(" "),t("li",[a._v('\nBy copying or uploading a WAR, EAR or similar file to a "servlet container" or "application server".\n')]),a._v(" "),t("li",[a._v("\nBy running some kind of application installer that automates the above.  The installer might also install an embedded JRE.\n")]),a._v(" "),t("li",[a._v("\nBy putting the JAR files for the application onto a web server to allow them to be launched using Java WebStart.\n")]),a._v(" "),t("p",[a._v("The Creating JAR, WAR and EAR files example summarizes the different ways to create these files.")]),a._v(" "),t("p",[a._v('There are numerous open source and commercial "installer generator" and\n"EXE generator" tools for Java.  Similarly, there are tools for obfuscating Java class files (to make reverse engineering harder) and for adding runtime license checking.  These are all out of scope for the "Java Programming Language" documentation.')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);