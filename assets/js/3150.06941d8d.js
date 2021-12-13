(window.webpackJsonp=window.webpackJsonp||[]).push([[3150],{3558:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"decorator-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decorator-pattern"}},[t._v("#")]),t._v(" Decorator pattern")]),t._v(" "),s("h2",{attrs:{id:"decorating-a-model-using-simpledelegator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decorating-a-model-using-simpledelegator"}},[t._v("#")]),t._v(" Decorating a Model using SimpleDelegator")]),t._v(" "),s("p",[t._v("Most Rails developers start by modifying their model information within the template itself:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('%= "'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first_name "),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last_name "),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('" %></h1>\n<h3>joined: <%=')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("created_at"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in_time_zone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timezone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%A, %d %b %Y %l:%M %p"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%></h3>")]),t._v("\n\n")])])]),s("p",[t._v("For models with a lot of data, this can quickly become cumbersome and lead to copy-pasting logic from one template to another.")]),t._v(" "),s("p",[t._v("This example uses "),s("code",[t._v("SimpleDelegator")]),t._v(" from the stdlib.")]),t._v(" "),s("p",[t._v("All requests to a "),s("code",[t._v("SimpleDelegator")]),t._v(" object are passed to the parent object by default. You can override any method with presentation logic, or you can add new methods that are specific to this view.")]),t._v(" "),s("p",[s("code",[t._v("SimpleDelegator")]),t._v(" provides two methods: "),s("code",[t._v("__setobj__")]),t._v(" to set what object is being delegated to, and "),s("code",[t._v("__getobj__")]),t._v(" to get that object.")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDecorator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SimpleDelegator")]),t._v("\n  attr_reader "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":view")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token method-definition"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    __setobj__ "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@user")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" view\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# new methods can call methods on the parent implicitly")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token method-definition"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("full_name")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v(" first_name "),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v(" last_name "),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# however, if you're overriding an existing method you need")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# to use __getobj__")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token method-definition"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("created_at")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("use_zone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timezone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n      __getobj__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("created_at"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%A, %d %b %Y %l:%M %p"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),s("p",[t._v("Some decorators rely on magic to wire-up this behavior, but you can make it more obvious where the presentation logic is coming from by initializing the object on the page.")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UserDecorator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%>\n<h1>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%= user.full_name %></h1>\n<h3>joined: <%=")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("created_at "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%></h3>")]),t._v("\n\n")])])]),s("p",[t._v("By passing a reference to the view object into the decorator, we can still access all of the rest of the view helpers while building the presentation logic without having to include it.")]),t._v(" "),s("p",[t._v("Now the view template is only concerned with inserting data into the page, and it is much more clear.")]),t._v(" "),s("h2",{attrs:{id:"decorating-a-model-using-draper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decorating-a-model-using-draper"}},[t._v("#")]),t._v(" Decorating a Model using Draper")]),t._v(" "),s("p",[t._v("Draper automatically matches up models with their decorators by convention.")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app/decorators/user_decorator.rb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDecorator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Draper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Decorator")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token method-definition"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("full_name")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first_name"),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last_name"),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token method-definition"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("created_at")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("use_zone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timezone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n      object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("created_at"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%A, %d %b %Y %l:%M %p"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),s("p",[t._v("Given a "),s("code",[t._v("@user")]),t._v(" variable containing an ActiveRecord object, you can access your decorator by calling "),s("code",[t._v("#decorate")]),t._v(" on the "),s("code",[t._v("@user")]),t._v(", or by specifying the Draper class if you want to be specific.")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decorate "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%>\x3c!-- OR --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UserDecorator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decorate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%>\n<h1>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%= user.full_name %></h1>\n<h3>joined: <%=")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("created_at "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%></h3>")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("The "),s("strong",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Decorator_pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("Decorator pattern"),s("OutboundLink")],1)]),t._v(" allows you to add or modify behavior of objects in a situational way without affecting the base object.")]),t._v(" "),s("p",[t._v("This can be achieved though plain Ruby using the stdlib, or via popular gems such as "),s("a",{attrs:{href:"https://github.com/drapergem/draper",target:"_blank",rel:"noopener noreferrer"}},[t._v("Draper"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);