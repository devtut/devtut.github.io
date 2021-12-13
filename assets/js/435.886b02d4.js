(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{843:function(t,s,e){"use strict";e.r(s);var a=e(31),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"debugging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[t._v("#")]),t._v(" Debugging")]),t._v(" "),e("h2",{attrs:{id:"using-ng-inspect-chrome-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-ng-inspect-chrome-extension"}},[t._v("#")]),t._v(" Using ng-inspect chrome extension")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://chrome.google.com/webstore/detail/ng-inspect-for-angularjs/cidepfmbgngpdapgncfhpecbdhmnnemf",target:"_blank",rel:"noopener noreferrer"}},[t._v("ng-inspect"),e("OutboundLink")],1),t._v(" is a light weight Chrome extension for debugging AngularJS applications.")]),t._v(" "),e("p",[t._v("When a node is selected from the elements panel, the scope related info is displayed in the ng-inspect panel.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/BQ1xj.jpg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/BQ1xj.jpg",alt:"enter image description here"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Exposes few global variables for quick access of "),e("code",[t._v("scope/isolateScope")]),t._v(".")]),t._v(" "),e("blockquote"),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("$s      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" scope "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" the selected node\n$is     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" isolateScope "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" the selected node\n$el     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" jQuery element reference "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" the selected "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requiers jQuery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n$events "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" events present on the selected "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requires jQuery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/jn3Zo.jpg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/jn3Zo.jpg",alt:"enter image description here"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Provides easy access to Services/Factories.")]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("$get()")]),t._v(" to retrieve the instance of a service/factory by name.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/8sRj5.jpg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/8sRj5.jpg",alt:"enter image description here"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Performance of the application can be monitored by counting the no.of scopes,isolateScopes, watchers and listeners on the application.")]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("$count()")]),t._v(" to get the count of scopes, isolateScopes, watchers and listeners.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/Du8Za.jpg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/Du8Za.jpg",alt:"enter image description here"}}),e("OutboundLink")],1)]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("Note: This extension will work only when the debugInfo is enabled.")]),t._v(" "),e("p",[t._v("Download ng-inspect "),e("a",{attrs:{href:"https://chrome.google.com/webstore/detail/ng-inspect-for-angularjs/cidepfmbgngpdapgncfhpecbdhmnnemf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"basic-debugging-in-markup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-debugging-in-markup"}},[t._v("#")]),t._v(" Basic debugging in markup")]),t._v(" "),e("p",[e("strong",[t._v("Scope testing & output of model")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div ng"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demoApp"')]),t._v(" ng"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("controller"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mainController as ctrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li ng"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("repeat"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item in ctrl.items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("br"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pre"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ctrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" json "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pre"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\nangular"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demoApp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("controller")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mainController'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MainController"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MainController")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'second'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'third'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("Sometimes it can help to see if there is a new scope to fix scoping issues. "),e("code",[t._v("$scope.$id")]),t._v(" can be used in an expression everywhere in your markup to see if there is a new $scope.")]),t._v(" "),e("p",[t._v("In the example you can see that outside of the ul-tag is the same scope ($id=2) and inside the "),e("code",[t._v("ng-repeat")]),t._v(" there are new child scopes for each iteration.")]),t._v(" "),e("p",[t._v("An output of the model in a pre-tag is useful to see the current data of your model. The "),e("code",[t._v("json")]),t._v(" filter creates a nice looking formatted output.\nThe pre-tag is used because inside that tag any new-line character "),e("code",[t._v("\\n")]),t._v(" will be correctly displayed.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://jsfiddle.net/awolf2904/jc27f3c4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"getting-the-scope-of-element"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-scope-of-element"}},[t._v("#")]),t._v(" Getting the Scope of element")]),t._v(" "),e("p",[t._v("In an angular app everything goes around scope, if we could get an elements scope then it is easy to debug the angular app.\nHow to access the scope of element:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("angular"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myDomElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ne"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nangular"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yourElementId'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//accessing by ID")]),t._v("\n\n")])])]),e("p",[t._v("Getting the scope of  the controller:-")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\nangular.element('[ng-controller=ctrl]').scope()\n\n")])])]),e("p",[t._v("Another easy way to access a DOM element from the console (as jm mentioned) is to click on it in the 'elements' tab, and it automatically gets stored as $0.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("angular"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);