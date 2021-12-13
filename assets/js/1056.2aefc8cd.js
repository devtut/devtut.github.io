(window.webpackJsonp=window.webpackJsonp||[]).push([[1056],{1464:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started-with-entity-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-entity-framework"}},[t._v("#")]),t._v(" Getting started with Entity Framework")]),t._v(" "),s("h2",{attrs:{id:"installing-the-entity-framework-nuget-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-entity-framework-nuget-package"}},[t._v("#")]),t._v(" Installing The Entity Framework NuGet Package")]),t._v(" "),s("p",[t._v("In your Visual Studio open the "),s("strong",[t._v("Solution Explorer")]),t._v(" window then "),s("kbd",[t._v("right click")]),t._v(" on your project then choose "),s("strong",[t._v("Manage NuGet Packages")]),t._v(" from the menu:")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/Wx3Hk.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/Wx3Hk.png",alt:"Manage nuget packages"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("In the window that opens type "),s("code",[t._v("EntityFramework")]),t._v(" in the search box in the top right.")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/NgmOs.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/NgmOs.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Or if you are using Visual Studio 2015 you'll see something like this:")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/ln0Z9.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/ln0Z9.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Then click Install.")]),t._v(" "),s("p",[t._v("We can also install entity framework using the package manager console. To do you have first to open it using the "),s("strong",[t._v("Tools menu -> NuGet Package Manager -> Package Manager Console")]),t._v(" then enter this:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("Install"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Package EntityFramework\n\n")])])]),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/6iSJR.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/6iSJR.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("This will install Entity Framework and automatically add a reference to the assembly in your project.")]),t._v(" "),s("h2",{attrs:{id:"using-entity-framework-from-c-code-first"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-entity-framework-from-c-code-first"}},[t._v("#")]),t._v(" Using Entity Framework from C# (Code First)")]),t._v(" "),s("p",[t._v("Code first allows you to create your entities (classes) without using a GUI designer or a .edmx file. It is named "),s("strong",[t._v("Code first")]),t._v(", because you can create your models "),s("strong",[t._v("first")]),t._v(" and "),s("strong",[t._v("Entity framework")]),t._v(" will create database according to mappings for you automatically. Or you can also use this approach with existing database, which is called "),s("strong",[t._v("code first with existing database")]),t._v("  For example, if you want a table to hold a list of planets:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Planet")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" Name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("decimal")])]),t._v(" AverageDistanceFromSun "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Now create your context which is the bridge between your entity classes and the database. Give it one or more "),s("code",[t._v("DbSet<>")]),t._v(" properties:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlanetContext")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DbContext")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DbSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Planet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Planets "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("We can use this by doing the following:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PlanetContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" jupiter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Planet")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jupiter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        AverageDistanceFromSun "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("778.5")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Planets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jupiter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaveChanges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("In this example we create a new "),s("code",[t._v("Planet")]),t._v(" with the "),s("code",[t._v("Name")]),t._v(" property with the value of "),s("code",[t._v('"Jupiter"')]),t._v(" and the "),s("code",[t._v("AverageDistanceFromSun")]),t._v(" property with the value of "),s("code",[t._v("778.5")])]),t._v(" "),s("p",[t._v("We can then add this "),s("code",[t._v("Planet")]),t._v(" to the context by using the "),s("code",[t._v("DbSet")]),t._v("'s "),s("code",[t._v("Add()")]),t._v(" method and commit our changes to the database by using the "),s("code",[t._v("SaveChanges()")]),t._v(" method.")]),t._v(" "),s("p",[t._v("Or we can retrieve rows from the database:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PlanetContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" jupiter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Planets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Single")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jupiter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"Jupiter is ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("jupiter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AverageDistanceFromSun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(' million km from the sun."')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"what-is-entity-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-entity-framework"}},[t._v("#")]),t._v(" What is Entity Framework ?")]),t._v(" "),s("p",[t._v("Writing and managing ADO.Net code for data access is a tedious and monotonous job. Microsoft has provided an "),s("strong",[t._v('O/RM framework called "Entity Framework"')]),t._v(" to automate database related activities for your application.")]),t._v(" "),s("p",[t._v("Entity framework is an Object/Relational Mapping (O/RM) framework. It is an enhancement to ADO.NET that gives developers an automated mechanism for accessing & storing the data in the database.")]),t._v(" "),s("p",[s("strong",[t._v("What is O/RM?")])]),t._v(" "),s("p",[t._v("ORM is a tool for storing data from domain objects to the relational database like MS SQL Server, in an automated way, without much programming.\nO/RM includes three main parts:")]),t._v(" "),s("ol",[s("li",[t._v("Domain class objects")]),t._v(" "),s("li",[t._v("Relational database objects")]),t._v(" "),s("li",[t._v("Mapping information on how domain objects map to relational database objects("),s("strong",[t._v("e.x")]),t._v(" tables, views & stored procedures)")])]),t._v(" "),s("p",[t._v("ORM allows us to keep our database design separate from our domain class design. This makes the application maintainable and extendable. It also automates standard CRUD operation (Create, Read, Update & Delete) so that the developer doesn't need to write it manually.")]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Entity Framework (EF) is an object-relational mapper (ORM) that enables .NET developers to work with relational data using domain-specific objects. It eliminates the need for most of the data-access code that developers usually need to write.")]),t._v(" "),s("p",[t._v("Entity Framework allows you to create a model by writing code or using boxes and lines in the EF Designer. Both of these approaches can be used to target an existing database or create a new database.")]),t._v(" "),s("p",[t._v("Entity Framework is the main ORM that Microsoft provides for the .NET Framework and Microsoft’s recommended data access technology.")])])}),[],!1,null,null,null);a.default=n.exports}}]);