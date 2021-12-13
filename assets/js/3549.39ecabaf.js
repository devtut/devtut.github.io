(window.webpackJsonp=window.webpackJsonp||[]).push([[3549],{3958:function(t,s,n){"use strict";n.r(s);var a=n(31),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"push-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#push-notifications"}},[t._v("#")]),t._v(" Push Notifications")]),t._v(" "),n("h2",{attrs:{id:"ios-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-example"}},[t._v("#")]),t._v(" iOS Example")]),t._v(" "),n("ol",[n("li",[t._v("You will need a development device")]),t._v(" "),n("li",[t._v("Go to your Apple Developer Account and create a provisioning profile with Push Notifications enabled")]),t._v(" "),n("li",[t._v("You will need some sort of way to notify your phone (AWS, Azure..etc) "),n("strong",[t._v("We will use AWS here")])])]),t._v(" "),n("div",{staticClass:"language-cs extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cs"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FinishedLaunching")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSDictionary")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Xamarin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Forms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Forms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//after typical Xamarin.Forms Init Stuff")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//variable to set-up the style of notifications you want, iOS supports 3 types")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" pushSettings "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIUserNotificationSettings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSettingsForTypes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              UIUserNotificationType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Alert "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n              UIUserNotificationType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Badge "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n              UIUserNotificationType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sound"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n       \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//both of these methods are in iOS, we have to override them and set them up")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//to allow push notifications")]),t._v("\n\n        app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterUserNotificationSettings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pushSettings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//pass the supported push notifications settings to register app in settings page")]),t._v("\n\n     \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisteredForRemoteNotifications")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" application"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSData")]),t._v(" token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AmazonSimpleNotificationServiceClient")]),t._v(" snsClient "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("AmazonSimpleNotificationServiceClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your AWS credentials here"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This contains the registered push notification token stored on the phone. ")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" deviceToken "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('">"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsNullOrEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//register with SNS to create an endpoint ARN, this means AWS can message your phone")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" snsClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreatePlatformEndpointAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CreatePlatformEndpointRequest")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                Token "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deviceToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                PlatformApplicationArn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourARNwouldgohere"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* insert your platform application ARN here */")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" endpoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EndpointArn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//AWS lets you create topics, so use subscribe your app to a topic, so you can easily send out one push notification to all of your users")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" subscribeResponse "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" snsClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SubscribeAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SubscribeRequest")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                TopicArn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourTopicARN here"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                Endpoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" endpoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                Protocol "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application"')]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h4",{attrs:{id:"remarks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),n("h3",{attrs:{id:"aws-simple-notification-service-lingo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aws-simple-notification-service-lingo"}},[t._v("#")]),t._v(" AWS Simple Notification Service Lingo:")]),t._v(" "),n("p",[n("strong",[t._v("Endpoint")]),t._v(" - The endpoint can be a phone, email address or whatever, it's what AWS SNS can hit back with a notification")]),t._v(" "),n("p",[n("strong",[t._v("Topic")]),t._v(" - Essentially a group that contains all of your endpoints")]),t._v(" "),n("p",[n("strong",[t._v("Subscribe")]),t._v(" - You sign up your phone/client to receive notifcations")]),t._v(" "),n("h3",{attrs:{id:"generic-push-notification-lingo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generic-push-notification-lingo"}},[t._v("#")]),t._v(" Generic Push Notification Lingo:")]),t._v(" "),n("p",[n("strong",[t._v("APNS")]),t._v(" - Apple Push Notification Service. Apple is the only one who can send push notifications. This is why we provision our app with the proper certificate. We provide AWS SNS the certificate that Apple provides us to authorize SNS to send a notification to APNS on our behalf.")]),t._v(" "),n("p",[n("strong",[t._v("GCM")]),t._v(" - Google Cloud Messaging is very similar to APNS. Google is the only one who can directly send push notifications. So we first register our App in GCM and hand over our token to AWS SNS. SNS handles all the complex stuff dealing with GCM and sending over the data.")])])}),[],!1,null,null,null);s.default=e.exports}}]);