(window.webpackJsonp=window.webpackJsonp||[]).push([[1505],{1910:function(t,s,a){"use strict";a.r(s);var e=a(31),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"universal-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#universal-links"}},[t._v("#")]),t._v(" Universal Links")]),t._v(" "),a("h2",{attrs:{id:"setup-ios-application-enabling-universal-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-ios-application-enabling-universal-links"}},[t._v("#")]),t._v(" Setup iOS Application (Enabling Universal Links)")]),t._v(" "),a("p",[a("strong",[t._v("The setup on the app side requires two things:")])]),t._v(" "),a("ol",[a("li",[t._v("Configuring the app’s entitlement, and enabling the universal links by turning on the Associated Domains capability in the project.")]),t._v(" "),a("li",[t._v("Handling Incoming Links in your "),a("code",[t._v("AppDelegate")]),t._v(".")])]),t._v(" "),a("p",[a("strong",[t._v("1. Configuring the app’s entitlement, and enabling universal links.")])]),t._v(" "),a("p",[t._v("The first step in configuring your app’s entitlements is to enable it for your App ID. Do this in the Apple Developer Member Center. Click on Certificates, Identifiers & Profiles and then Identifiers. Select your App ID (create it first if required), click Edit and enable the Associated Domains entitlement.")]),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/vineetchoudhary/iOS-Universal-Links/master/MC-Domain.png",alt:""}}),t._v(" "),a("p",[t._v("Next, get the App ID prefix and suffix by clicking on the respective App ID.")]),t._v(" "),a("p",[t._v("The App ID prefix and suffix should match the one in the apple-app-site-association file.")]),t._v(" "),a("p",[t._v("Next in "),a("code",[t._v("Xcode")]),t._v(", select your App’s target, click Capabilities and toggle Associated Domains to On. Add an entry for each domain that your app supports, prefixed with "),a("strong",[t._v("app links:")])]),t._v(" "),a("p",[t._v("For example "),a("strong",[t._v("applinks:YourCustomDomainName.com")])]),t._v(" "),a("p",[t._v("Which looks like this for the sample app:")]),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/vineetchoudhary/iOS-Universal-Links/master/App-Domain.png",alt:""}}),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": Ensure you have selected the same team and entered the same Bundle ID as the registered App ID on the Member Center. Also ensure that the entitlements file is included by Xcode by selecting the file and in the File Inspector, ensure that your target is checked.")]),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/vineetchoudhary/iOS-Universal-Links/master/target.png",alt:""}}),t._v(" "),a("p",[a("strong",[t._v("2. Handling Incoming Links in your AppDelegate")])]),t._v(" "),a("p",[t._v("All redirects from Safari to the app for universal links go via the below method in the Application's AppDelegate class. You parse this URL to determine the right action in the app.")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplicationDelegate")]),t._v(" application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" continueUserActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" restorationHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"objective-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective-c"}},[t._v("#")]),t._v(" Objective-C")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOOL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application continueUserActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSUserActivity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("userActivity restorationHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSArray")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nullable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("restorationHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///Checking whether the activity was from a web page redirect to the app.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("userActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activityType isEqualToString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSUserActivityTypeBrowsingWeb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///Getting the URL from the UserActivty Object.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webpageURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIStoryboard")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("storyBoard "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIStoryboard")]),t._v(" storyboardWithName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Main"')])]),t._v(" bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token nil constant"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UINavigationController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("navigationController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UINavigationController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("_window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathComponents containsObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("navigationController pushViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("storyBoard instantiateViewControllerWithIdentifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HomeScreenId"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" animated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathComponents containsObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"about"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("navigationController pushViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("storyBoard instantiateViewControllerWithIdentifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AboutScreenId"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" animated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\n")])])]),a("h3",{attrs:{id:"swift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[t._v("#")]),t._v(" Swift :")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" continueUserActivity userActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSUserActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" restorationHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnyObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" userActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activityType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSUserActivityTypeBrowsingWeb")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webpageURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//handle url")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"ios-application-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-application-code"}},[t._v("#")]),t._v(" iOS Application Code")]),t._v(" "),a("p",[t._v("The app code can be found master branch "),a("a",{attrs:{href:"https://github.com/vineetchoudhary/iOS-Universal-Links/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"supporting-multiple-domains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supporting-multiple-domains"}},[t._v("#")]),t._v(" Supporting Multiple Domains")]),t._v(" "),a("p",[t._v("Each domain supported in the app needs to make available its own apple-app-site-association file. If the content served by each domain is different, then the contents of the file will also change to support the respective paths. Otherwise, the same file can be used, but it needs to be accessible at every supported domain.")]),t._v(" "),a("h2",{attrs:{id:"signing-the-app-site-association-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-the-app-site-association-file"}},[t._v("#")]),t._v(" Signing the App-Site-Association File")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": "),a("strong",[t._v("You can skip this part if your server uses "),a("code",[t._v("HTTPS")]),t._v(" to serve content and jump to Application Setup guide.")])]),t._v(" "),a("p",[t._v("If your app targets iOS 9 and your server uses "),a("code",[t._v("HTTPS")]),t._v(" to serve content, you don’t need to sign the file. If not (e.g. when supporting Handoff on iOS 8), it has to be signed using a "),a("code",[t._v("SSL")]),t._v(" certificate from a recognized certificate authority.")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": This is not the certificate provided by Apple to submit your app to the App Store. It should be provided by a third-party, and it’s recommended to use the same certificate you use for your "),a("code",[t._v("HTTPS")]),t._v(" server (although it’s not required).")]),t._v(" "),a("p",[t._v("To sign the file, first create and save a simple .txt version of it. Next, in the terminal, run the following command:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[t._v("cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unsigned_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" openssl smime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sign "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("inkey example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("signer example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("certfile intermediate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("noattr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("nodetach "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("outform "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" apple"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("site"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("association\n\n")])])]),a("p",[t._v("This will output the signed file in the current directory. The "),a("code",[t._v("example.com.key")]),t._v(", "),a("code",[t._v("example.com.pem")]),t._v(", and "),a("code",[t._v("intermediate.pem")]),t._v(" are the files that would made available to you by your Certifying Authority.")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": If the file is unsigned, it should have a "),a("code",[t._v("Content-Type")]),t._v(" of "),a("code",[t._v("application/json")]),t._v(". Otherwise, it should be "),a("code",[t._v("application/pkcs7-mime")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Validate your Server with Apple App search validation tool")]),a("br"),t._v("\nTest your webpage for iOS 9 Search APIs. Enter a URL and Applebot will crawl your webpage and show how you can optimize for best results\n"),a("a",{attrs:{href:"https://search.developer.apple.com/appsearch-validation-tool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://search.developer.apple.com/appsearch-validation-tool/"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"setup-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-server"}},[t._v("#")]),t._v(" Setup Server")]),t._v(" "),a("p",[t._v("You need to having a server running online. To securely associate your iOS app with a server, Apple requires that you make available a configuration file, called "),a("code",[t._v("apple-app-site-association")]),t._v(". This is a "),a("code",[t._v("JSON")]),t._v(" file which describes the domain and supported routes.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("apple-app-site-association")]),t._v(" file needs to be accessible via "),a("code",[t._v("HTTPS")]),t._v(", without any redirects, at "),a("strong",[t._v("https://{domain}/apple-app-site-association")]),t._v(".")]),t._v(" "),a("p",[t._v("The file looks like this:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"applinks"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apps"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"details"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appID"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{app_prefix}.{app_identifier}"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paths"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/content"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/other/*"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NOT /path/to/exclude"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appID"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TeamID.BundleID2"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paths"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("NOTE")]),t._v(" - "),a("strong",[t._v("Don’t append "),a("code",[t._v(".json")]),t._v(" to the "),a("code",[t._v("apple-app-site-association")]),t._v(" filename.")])]),t._v(" "),a("p",[a("strong",[t._v("The keys are as follows:")]),a("br"),t._v(" "),a("code",[t._v("apps")]),t._v(": Should have an empty array as its value, and it must be present. This is how Apple wants it."),a("br"),t._v(" "),a("code",[t._v("details")]),t._v(": Is an array of dictionaries, one for each iOS app supported by the website. Each dictionary contains information about the app, the team and bundle IDs.")]),t._v(" "),a("p",[a("strong",[t._v("There are 3 ways to define paths:")]),a("br"),t._v(" "),a("code",[t._v("Static")]),t._v(": The entire supported path is hardcoded to identify a specific link, e.g. /static/terms"),a("br"),t._v(" "),a("code",[t._v("Wildcards")]),t._v(": A * can be used to match dynamic paths, e.g. /books/* can matches the path to any author’s page. ? inside specific path components, e.g. books/1? can be used to match any books whose ID starts with 1."),a("br"),t._v(" "),a("code",[t._v("Exclusions")]),t._v(": Prepending a path with NOT excludes that path from being matched.")]),t._v(" "),a("p",[t._v("The order in which the paths are mentioned in the array is important. Earlier indices have higher priority. Once a path matches, the evaluation stops, and other paths ignored. Each path is case-sensitive.")]),t._v(" "),a("p",[t._v("#Website Code")]),t._v(" "),a("p",[t._v("The website code can be found gh-pages branch on\n"),a("a",{attrs:{href:"https://github.com/vineetchoudhary/iOS-Universal-Links/tree/gh-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vineetchoudhary/iOS-Universal-Links/tree/gh-pages"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("ol",[a("li",[t._v("When you support universal links, iOS 9 users can tap a link to your website and get seamlessly redirected to your installed app without going through Safari. If your app isn’t installed, tapping a link to your website opens your website in Safari.")]),t._v(" "),a("li",[t._v("Generally, any supported link clicked in Safari, or in instances of "),a("code",[t._v("UIWebView")]),t._v("/"),a("code",[t._v("WKWebView")]),t._v(" should open the app.")]),t._v(" "),a("li",[t._v("For iOS 9.2 and less, this will only work on a device. iOS 9.3 also supports the simulator.")]),t._v(" "),a("li",[t._v("iOS remembers the user’s choice when opening Universal Links. If they tap the top-right breadcrumb to open the link in Safari, all further clicks will take them to Safari, and not the app. They can switch back to opening the app by default by choosing Open in the app banner on the website.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);