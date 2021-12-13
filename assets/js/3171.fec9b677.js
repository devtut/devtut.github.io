(window.webpackJsonp=window.webpackJsonp||[]).push([[3171],{3578:function(a,e,t){"use strict";t.r(e);var s=t(31),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"rails-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rails-api"}},[a._v("#")]),a._v(" Rails API")]),a._v(" "),t("h2",{attrs:{id:"creating-an-api-only-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-api-only-application"}},[a._v("#")]),a._v(" Creating an API-only application")]),a._v(" "),t("p",[a._v("To build a Rails application that will be an API server, you can start with a more limited subset of Rails in Rails 5.")]),a._v(" "),t("p",[a._v("To generate a new Rails API app:")]),a._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[a._v("rails "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" my_api "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("api\n\n")])])]),t("p",[a._v("What "),t("code",[a._v("--api")]),a._v(" does is to remove functionality that is not needed when building an API. This includes sessions, cookies, assets, and anything that makes Rails work on a browser.")]),a._v(" "),t("p",[a._v("It will also configure the generators so that they don't generate views, helpers, and assets when generating a new resource.")]),a._v(" "),t("p",[a._v("When you compare the "),t("code",[a._v("ApplicationController")]),a._v(" on a web app versus an API app, you will see that the web version extends from "),t("code",[a._v("ActionController::Base")]),a._v(", whereas the API version extends from "),t("code",[a._v("ActionController::API")]),a._v(", which includes a much smaller subset of functionality.")])])}),[],!1,null,null,null);e.default=n.exports}}]);