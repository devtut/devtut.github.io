(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{761:function(t,e,a){"use strict";a.r(e);var s=a(31),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"angular-cli-test-coverage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angular-cli-test-coverage"}},[t._v("#")]),t._v(" angular-cli test coverage")]),t._v(" "),a("p",[t._v("test coverage is defined as a technique which determines whether our test cases are actually covering the application code and how much code is exercised when we run those test cases.")]),t._v(" "),a("p",[t._v("Angular CLI has built in code coverage feature with just a simple command "),a("code",[t._v("ng test --cc")])]),t._v(" "),a("h2",{attrs:{id:"a-simple-angular-cli-command-base-test-coverage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-angular-cli-command-base-test-coverage"}},[t._v("#")]),t._v(" A simple angular-cli command base test coverage")]),t._v(" "),a("p",[t._v("If you want to see overall test coverage statistics than of course in Angular CLI you can just type below command, and see the bottom of your command prompt window for results.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ng test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("cc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or --code-coverage")]),t._v("\n\n")])])]),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/omjN2.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/omjN2.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"detailed-individual-component-base-graphical-test-coverage-reporting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-individual-component-base-graphical-test-coverage-reporting"}},[t._v("#")]),t._v(" Detailed individual component base graphical test coverage reporting")]),t._v(" "),a("p",[t._v("if you want to see component's individual coverage of tests follow these steps.")]),t._v(" "),a("li",[t._v("\n`npm install --save-dev karma-teamcity-reporter`\n")]),t._v(" "),a("li",[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Add "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("require('karma-teamcity-reporter')")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" to list "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" plugins "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" karma"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n")])])])]),t._v(" "),a("li",[t._v("\n`ng test --code-coverage --reporters=teamcity,coverage-istanbul`\n")]),t._v(" "),a("p",[t._v("note that list of reporters is comma-separated, as we have added a new reporter, teamcity.")]),t._v(" "),a("p",[t._v("after running this command you can see the folder "),a("code",[t._v("coverage")]),t._v(" in your dir and open "),a("code",[t._v("index.html")]),t._v(" for a graphical view of test coverage.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/luaq2.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/luaq2.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("You can also set the coverage threshold that you want to achieve, in "),a("code",[t._v("karma.conf.js")]),t._v(", like this.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("coverageIstanbulReporter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      reports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lcovonly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      fixWebpackSourcePaths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      thresholds"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        statements"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lines"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        branches"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        functions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);