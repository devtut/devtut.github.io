(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{711:function(t,e,a){"use strict";a.r(e);var s=a(31),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"split-screen-multi-screen-activities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#split-screen-multi-screen-activities"}},[t._v("#")]),t._v(" Split Screen / Multi-Screen Activities")]),t._v(" "),a("h2",{attrs:{id:"split-screen-introduced-in-android-nougat-implemented"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#split-screen-introduced-in-android-nougat-implemented"}},[t._v("#")]),t._v(" Split Screen introduced in Android Nougat implemented.")]),t._v(" "),a("p",[t._v("Set this attribute in your manifest's  or  element to enable or disable multi-window display:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("resizeableActivity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[t._v("If this attribute is set to true, the activity can be launched in split-screen and freeform modes. If the attribute is set to false, the activity does not support multi-window mode. If this value is false, and the user attempts to launch the activity in multi-window mode, the activity takes over the full screen.")]),t._v(" "),a("p",[t._v("If your app targets API level 24, but you do not specify a value for this attribute, the attribute's value defaults to true.")]),t._v(" "),a("p",[t._v("The following code shows how to specify an activity's default size and location, and its minimum size, when the activity is displayed in freeform mode:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("These")]),t._v(" are "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" values suggested by google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("activity android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".MyActivity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("layout android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("defaultHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500dp"')]),t._v("\n      android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("defaultWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"600dp"')]),t._v("\n      android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("gravity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top|end"')]),t._v("\n      android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("minHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"450dp"')]),t._v("\n      android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("minWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300dp"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Disabled features in multi-window mode")])]),t._v(" "),a("p",[t._v("Certain features are disabled or ignored when a device is in multi-window mode, because they don’t make sense for an activity which may be sharing the device screen with other activities or apps. Such features include:")]),t._v(" "),a("li",[t._v("\nSome System UI customization options are disabled; for example, apps cannot hide the status bar if they are not running in full-screen mode.\n")]),t._v(" "),a("li",[t._v("\nThe system ignores changes to the **android:screenOrientation** attribute.\n")]),t._v(" "),a("p",[a("strong",[t._v("If your app targets API level 23 or lower")])]),t._v(" "),a("p",[t._v("If your app targets API level 23 or lower and the user attempts to use the app in multi-window mode, the system forcibly resizes the app unless the app declares a fixed orientation.")]),t._v(" "),a("p",[t._v("If your app does not declare a fixed orientation, you should launch your app on a device running Android 7.0 or higher and attempt to put the app in split-screen mode. Verify that the user experience is acceptable when the app is forcibly resized.")]),t._v(" "),a("p",[t._v("If the app declares a fixed orientation, you should attempt to put the app in multi-window mode. Verify that when you do so, the app remains in full-screen mode.")])])}),[],!1,null,null,null);e.default=r.exports}}]);