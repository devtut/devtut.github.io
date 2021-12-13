(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{1419:function(a,e,t){"use strict";t.r(e);var r=t(31),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"nuget-packaging-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nuget-packaging-system"}},[a._v("#")]),a._v(" NuGet packaging system")]),a._v(" "),t("h2",{attrs:{id:"uninstalling-a-package-from-one-project-in-a-solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-a-package-from-one-project-in-a-solution"}},[a._v("#")]),a._v(" Uninstalling a package from one project in a solution")]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("PM"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Uninstall"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Package "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ProjectName MyProjectB EntityFramework\n\n")])])]),t("h2",{attrs:{id:"installing-a-specific-version-of-a-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-specific-version-of-a-package"}},[a._v("#")]),a._v(" Installing a specific version of a package")]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("PM"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Install"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Package EntityFramework "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Version "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.1")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".2")]),a._v("  \n\n")])])]),t("h2",{attrs:{id:"installing-the-nuget-package-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-nuget-package-manager"}},[a._v("#")]),a._v(" Installing the NuGet Package Manager")]),a._v(" "),t("p",[a._v("In order to be able to manage your projects' packages, you need the NuGet Package Manager. This is a Visual Studio Extension, explained in the official docs: "),t("a",{attrs:{href:"https://docs.nuget.org/consume/installing-nuget",target:"_blank",rel:"noopener noreferrer"}},[a._v("Installing and Updating NuGet Client"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Starting with Visual Studio 2012, NuGet is included in every edition, and can be used from: Tools -> NuGet Package Manager -> Package Manager Console.")]),a._v(" "),t("p",[a._v("You do so through the Tools menu of Visual Studio, clicking Extensions and Updates:")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://i.stack.imgur.com/zTzgp.png",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"http://i.stack.imgur.com/zTzgp.png",alt:"enter image description here"}}),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("This installs both the GUI:")]),a._v(" "),t("ul",[t("li",[a._v('Available through clicking "Manage NuGet Packages..." on a project or its References folder')])]),a._v(" "),t("p",[a._v("And the Package Manager Console:")]),a._v(" "),t("ul",[t("li",[a._v("Tools -> NuGet Package Manager -> Package Manager Console.")])]),a._v(" "),t("h2",{attrs:{id:"adding-a-package-source-feed-myget-klondike-ect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-package-source-feed-myget-klondike-ect"}},[a._v("#")]),a._v(" Adding a package source feed (MyGet, Klondike, ect)")]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("nuget sources "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("name feedname "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("source")]),a._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("sourcefeedurl\n\n")])])]),t("h2",{attrs:{id:"managing-packages-through-the-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-packages-through-the-ui"}},[a._v("#")]),a._v(" Managing Packages through the UI")]),a._v(" "),t("p",[a._v('When you right-click a project (or its References folder), you can click the "Manage NuGet Packages..." option. This shows the '),t("a",{attrs:{href:"https://docs.nuget.org/consume/package-manager-dialog",target:"_blank",rel:"noopener noreferrer"}},[a._v("Package Manager Dialog"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://i.stack.imgur.com/Fi0Uq.png",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"http://i.stack.imgur.com/Fi0Uq.png",alt:"enter image description here"}}),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"managing-packages-through-the-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-packages-through-the-console"}},[a._v("#")]),a._v(" Managing Packages through the console")]),a._v(" "),t("p",[a._v("Click the menus Tools -> NuGet Package Manager -> Package Manager Console to show the console in your IDE. "),t("a",{attrs:{href:"https://docs.nuget.org/consume/package-manager-console-powershell-reference",target:"_blank",rel:"noopener noreferrer"}},[a._v("Official documentation here"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Here you can issue, amongst others, "),t("code",[a._v("install-package")]),a._v(' commands which installs the entered package into the currently selected "Default project":')]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("Install"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Package Elmah\n\n")])])]),t("p",[a._v('You can also provide the project to install the package to, overriding the selected project in the "Default project" dropdown:')]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("Install"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Package Elmah "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ProjectName MyFirstWebsite\n\n")])])]),t("h2",{attrs:{id:"updating-a-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-package"}},[a._v("#")]),a._v(" Updating a package")]),a._v(" "),t("p",[a._v("To update a package use the following command:")]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("PM"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Update"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Package EntityFramework\n\n")])])]),t("p",[a._v("where EntityFramework is the name of the package to be updated. Note that update will run for all projects, and so is different from "),t("code",[a._v("Install-Package EntityFramework")]),a._v(' which would install to "Default project" only.')]),a._v(" "),t("p",[a._v("You can also specify a single project explicitly:")]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("PM"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Update"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Package EntityFramework "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ProjectName MyFirstWebsite\n\n")])])]),t("h2",{attrs:{id:"uninstalling-a-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-a-package"}},[a._v("#")]),a._v(" Uninstalling a package")]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("PM"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Uninstall"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Package EntityFramework  \n\n")])])]),t("h2",{attrs:{id:"uninstall-a-specific-version-of-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-a-specific-version-of-package"}},[a._v("#")]),a._v(" uninstall a specific version of package")]),a._v(" "),t("div",{staticClass:"language-dotnet extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dotnet"}},[t("code",[a._v("PM"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" uninstall"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Package EntityFramework "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Version "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.1")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".2")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"using-different-local-nuget-package-sources-using-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-different-local-nuget-package-sources-using-ui"}},[a._v("#")]),a._v(" Using different (local) Nuget package sources using UI")]),a._v(" "),t("p",[a._v("It is common for company to set up it's own nuget server for distribution of packages across different teams.")]),a._v(" "),t("ol",[t("li",[a._v("Go to Solution Explorer and click "),t("kbd",[a._v("Right Mouse")]),a._v(" button then choose "),t("code",[a._v("Manage NuGet Packages for Solution")])])]),a._v(" "),t("p",[t("a",{attrs:{href:"http://i.stack.imgur.com/PhB3d.png",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"http://i.stack.imgur.com/PhB3d.png",alt:"enter image description here"}}),t("OutboundLink")],1)]),a._v(" "),t("ol",[t("li",[a._v("In window that opens click on "),t("code",[a._v("Settings")])])]),a._v(" "),t("p",[t("a",{attrs:{href:"http://i.stack.imgur.com/8vKM6.png",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"http://i.stack.imgur.com/8vKM6.png",alt:"enter image description here"}}),t("OutboundLink")],1)]),a._v(" "),t("ol",[t("li",[a._v("Click on "),t("code",[a._v("+")]),a._v(" in top right corner then add name and url that points to your local nuget server.")])]),a._v(" "),t("p",[t("a",{attrs:{href:"http://i.stack.imgur.com/h85QG.png",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"http://i.stack.imgur.com/h85QG.png",alt:"enter image description here"}}),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.nuget.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("NuGet.org"),t("OutboundLink")],1),a._v(":")]),a._v(" "),t("blockquote"),a._v(" "),t("p",[a._v("NuGet is the package manager for the Microsoft development platform including .NET. The NuGet client tools provide the ability to produce and consume packages. The NuGet Gallery is the central package repository used by all package authors and consumers.")]),a._v(" "),t("p",[a._v("Images in examples courtesy of "),t("a",{attrs:{href:"https://www.nuget.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("NuGet.org"),t("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);