(window.webpackJsonp=window.webpackJsonp||[]).push([[3553],{3961:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"toasts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toasts"}},[t._v("#")]),t._v(" Toasts")]),t._v(" "),s("h2",{attrs:{id:"basic-toast-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-toast-message"}},[t._v("#")]),t._v(" Basic Toast Message")]),t._v(" "),s("p",[t._v("First, instantiate a Toast object with one of the "),s("a",{attrs:{href:"https://developer.xamarin.com/api/member/Android.Widget.Toast.MakeText/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("MakeText()")]),s("OutboundLink")],1),t._v(" methods. This method takes three parameters: the application "),s("a",{attrs:{href:"https://developer.xamarin.com/api/property/Android.Content.ContextWrapper.ApplicationContext/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Context")]),s("OutboundLink")],1),t._v(", the text message, and the duration for the toast. It returns a properly initialized Toast object. You can display the toast notification with "),s("a",{attrs:{href:"https://developer.xamarin.com/api/member/Android.Widget.Toast.Show()/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Show()")]),s("OutboundLink")],1),t._v(", as shown in the following example:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello toast!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ToastLength")]),t._v(" duration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ToastLength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Short"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" toast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MakeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntoast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("This example demonstrates everything you need for most toast notifications. You should rarely need anything else. You may, however, want to position the toast differently or even use your own layout instead of a simple text message. The following sections describe how you can do these things.")]),t._v(" "),s("p",[t._v("You can also chain your methods, call as a one-liner and avoid holding on to the Toast object, like this:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("Toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MakeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello toast!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ToastLength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Short"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("For more information refer to the more complete "),s("a",{attrs:{href:"https://developer.android.com/guide/topics/ui/notifiers/toasts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android documentation"),s("OutboundLink")],1),t._v(" on the topic.")]),t._v(" "),s("h2",{attrs:{id:"colored-toast-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#colored-toast-messages"}},[t._v("#")]),t._v(" Colored Toast Messages")]),t._v(" "),s("p",[t._v("Sometimes we want to give extra information to our user with colors (for example red means something wrong has happened)\nWe can change toast message background color using setting a color filter to the view which our toast give us (here I use a "),s("a",{attrs:{href:"https://developer.android.com/reference/android/graphics/ColorMatrixColorFilter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ColorMatrixColorFilter"),s("OutboundLink")],1),t._v("):")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MakeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("your color"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*;\nColorMatrixColorFilter CM = new ColorMatrixColorFilter(new float[]\n    {\n        0,0,0,0,c.R,\n        0,0,0,0,c.G,\n        0,0,0,0,c.B,\n        0,0,0,1,0            \n    });\nt.View.Background.SetColorFilter(CM);\nt.Show();\n\n")])])])]),s("p",[t._v("And also we can change the text color if background is light or dark:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("View"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindViewById")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetTextColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//text color is white by default")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"change-toast-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-toast-position"}},[t._v("#")]),t._v(" Change Toast Position")]),t._v(" "),s("p",[t._v("We can change our toast using SetGravity method.\nThis method takes three parameters: first is gravity of toast on screen and two others set toast offset from the starting position (which is set by the first parameter):")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Toast at bottom left corner of screen")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MakeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetGravity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GravityFlags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bottom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" GravityFlags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Toast at a custom position on screen")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MakeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetGravity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GravityFlags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" GravityFlags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);