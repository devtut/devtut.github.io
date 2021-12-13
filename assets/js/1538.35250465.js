(window.webpackJsonp=window.webpackJsonp||[]).push([[1538],{1946:function(s,a,t){"use strict";t.r(a);var e=t(31),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"classloaders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classloaders"}},[s._v("#")]),s._v(" Classloaders")]),s._v(" "),t("h2",{attrs:{id:"implementing-a-custom-classloader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementing-a-custom-classloader"}},[s._v("#")]),s._v(" Implementing a custom classLoader")]),s._v(" "),t("p",[s._v("Every custom loader must directly or indirectly extend the "),t("code",[s._v("java.lang.ClassLoader")]),s._v(" class.  The main "),t("strong",[s._v("extension points")]),s._v(" are the following methods:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("findClass(String)")]),s._v(" - overload this method if your classloader follows the standard delegation model for class loading.")]),s._v(" "),t("li",[t("code",[s._v("loadClass(String, boolean)")]),s._v(" - overload this method to implement an alternative delegation model.")]),s._v(" "),t("li",[t("code",[s._v("findResource")]),s._v(" and "),t("code",[s._v("findResources")]),s._v(" - overload these methods to customize resource loading.")])]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("defineClass")]),s._v(" methods which are responsible for actually loading the class from a byte array are "),t("code",[s._v("final")]),s._v(" to prevent overloading.  Any custom behavior needs to be performed prior to calling "),t("code",[s._v("defineClass")]),s._v(".")]),s._v(" "),t("p",[s._v("Here is a simple that loads a specific class from a byte array:")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ByteArrayClassLoader")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoader")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" classname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" classfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ByteArrayClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" classname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" classfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" classname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" classfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" classname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("classname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("classname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" classfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" classfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("classname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),t("p",[s._v("Since we have only overridden the "),t("code",[s._v("findClass")]),s._v(" method, this custom class loader is going to behave as follows when "),t("code",[s._v("loadClass")]),s._v(" is called.")]),s._v(" "),t("ol",[t("li",[s._v("The classloader's "),t("code",[s._v("loadClass")]),s._v(" method calls "),t("code",[s._v("findLoadedClass")]),s._v(" to see if a class with this name has already been loaded by this classloader.  If that succeeds, the resulting "),t("code",[s._v("Class")]),s._v(" object  is returned to the requestor.")]),s._v(" "),t("li",[s._v("The "),t("code",[s._v("loadClass")]),s._v(" method then delegates to the parent classloader by calling its "),t("code",[s._v("loadClass")]),s._v(" call.  If the parent can deal with the request, it will return a "),t("code",[s._v("Class")]),s._v(" object which is then returned to the requestor.")]),s._v(" "),t("li",[s._v("If the parent classloader cannot load the class, "),t("code",[s._v("findClass")]),s._v(" then calls our override "),t("code",[s._v("findClass")]),s._v(" method, passing the name of the class to be loaded.")]),s._v(" "),t("li",[s._v("If the requested name matches "),t("code",[s._v("this.classname")]),s._v(", we call "),t("code",[s._v("defineClass")]),s._v(" to load the actual class from the "),t("code",[s._v("this.classfile")]),s._v(" byte array.  The resulting "),t("code",[s._v("Class")]),s._v(" object is then returned.")]),s._v(" "),t("li",[s._v("If the name did not match, we throw "),t("code",[s._v("ClassNotFoundException")]),s._v(".")])]),s._v(" "),t("h2",{attrs:{id:"loading-an-external-class-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-an-external-class-file"}},[s._v("#")]),s._v(" Loading an external .class file")]),s._v(" "),t("p",[s._v("To load a class we first need to define it. The class is defined by the "),t("code",[s._v("ClassLoader")]),s._v(". There's just one problem, Oracle didn't write the "),t("code",[s._v("ClassLoader")]),s._v("'s code with this feature available. To define the class we will need to access a method named "),t("code",[s._v("defineClass()")]),s._v(" which is a private method of the "),t("code",[s._v("ClassLoader")]),s._v(".")]),s._v(" "),t("p",[s._v("To access it, what we will do is create a new class, "),t("code",[s._v("ByteClassLoader")]),s._v(", and extend it to "),t("code",[s._v("ClassLoader")]),s._v(". Now that we have extended our class to "),t("code",[s._v("ClassLoader")]),s._v(", we can access the "),t("code",[s._v("ClassLoader")]),s._v("'s private methods. To make "),t("code",[s._v("defineClass()")]),s._v(" available, we will create a new method that will act like a mirror for the private "),t("code",[s._v("defineClass()")]),s._v(" method. To call the private method we will need the class name, "),t("code",[s._v("name")]),s._v(", the class bytes, "),t("code",[s._v("classBytes")]),s._v(", the first byte's offset, which will be "),t("code",[s._v("0")]),s._v(" because "),t("code",[s._v("classBytes")]),s._v("' data starts at  "),t("code",[s._v("classBytes[0]")]),s._v(", and the last byte's offset, which will be "),t("code",[s._v("classBytes.lenght")]),s._v(" because it represents the size of the data, which will be the last offset.")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ByteClassLoader")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoader")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" classBytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" classBytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" classBytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),t("p",[s._v("Now, we have a public "),t("code",[s._v("defineClass()")]),s._v(" method. It can be called by passing the name of the class and the class bytes as arguments.")]),s._v(" "),t("p",[s._v("Let's say we have class named "),t("code",[s._v("MyClass")]),s._v(" in the package "),t("code",[s._v("stackoverflow")]),s._v("...")]),s._v(" "),t("p",[s._v("To call the method we need the class bytes so we create a "),t("code",[s._v("Path")]),s._v(" object representing our class' path by using the "),t("code",[s._v("Paths.get()")]),s._v(" method and passing the path of the binary class as an argument. Now, we can get the class bytes with "),t("code",[s._v("Files.readAllBytes(path)")]),s._v(". So we create a "),t("code",[s._v("ByteClassLoader")]),s._v(" instance and use the method we created, "),t("code",[s._v("defineClass()")]),s._v(". We already have the class bytes but to call our method we also need the class name which is given by the package name (dot) the class canonical name, in this case "),t("code",[s._v("stackoverflow.MyClass")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Path")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MyClass.class"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ByteClassLoader")]),s._v(" loader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ByteClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nloader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stackoverflow.MyClass"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Files")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readAllBytes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[t("strong",[s._v("Note")]),s._v(": The "),t("code",[s._v("defineClass()")]),s._v(" method returns a "),t("code",[s._v("Class<?>")]),s._v(" object. You can save it if you want.")]),s._v(" "),t("p",[s._v("To load the class, we just call "),t("code",[s._v("loadClass()")]),s._v(" and pass the class name. This method can throw an "),t("code",[s._v("ClassNotFoundException")]),s._v(" so we need to use a try cath block")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stackoverflow.MyClass"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printStackTrace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"instantiating-and-using-a-classloader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-and-using-a-classloader"}},[s._v("#")]),s._v(" Instantiating and using a classloader")]),s._v(" "),t("p",[s._v("This basic example shows how an application can instantiate a classloader and use it to dynamically load a class.")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("URL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" urls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" URL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:/home/me/extras.jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Classloader")]),s._v(" loader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URLClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("urls"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" myObjectClass "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" loader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.example.MyObject"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v('The classloader created in this example will have the default classloader as its parent, and will first try to find any class in the parent classloader before looking in "extra.jar".  If the requested class has already been loaded, the '),t("code",[s._v("findClass")]),s._v(" call will return the reference to the previously loaded class.")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("findClass")]),s._v(" call can fail in a variety of ways.  The most common are:")]),s._v(" "),t("ul",[t("li",[s._v("If the named class cannot be found, the call with throw "),t("code",[s._v("ClassNotFoundException")]),s._v(".")]),s._v(" "),t("li",[s._v("If the named class depends on some other class that cannot be found, the call will throw "),t("code",[s._v("NoClassDefFoundError")]),s._v(".")])]),s._v(" "),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),t("p",[s._v("A classloader is a class whose primary purpose is to mediate the location and loading of classes used by an application.  A class loader can also find and loaded "),t("strong",[s._v("resources")]),s._v(".")]),s._v(" "),t("p",[s._v("The standard classloader classes can load classes and resources from directories in the file system and from JAR and ZIP files.  They can also download and cache JAR and ZIP files from a remote server.")]),s._v(" "),t("p",[s._v("Classloaders are normally chained, so that the JVM will try to load classes from the standard class libraries in preference to application-provided sources.  Custom classloaders allow the programmer to alter this.  The also can do such things as decrypting bytecode files and bytecode modification.")])])}),[],!1,null,null,null);a.default=n.exports}}]);