(window.webpackJsonp=window.webpackJsonp||[]).push([[1312],{1720:function(e,t,o){"use strict";o.r(t);var a=o(31),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"app-transport-security-ats"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#app-transport-security-ats"}},[e._v("#")]),e._v(" App Transport Security (ATS)")]),e._v(" "),o("h2",{attrs:{id:"load-all-http-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#load-all-http-content"}},[e._v("#")]),e._v(" Load all HTTP content")]),e._v(" "),o("p",[e._v("Apple introduced ATS with iOS 9 as a new security feature to improve privacy and security between apps and web services. ATS by default fails all non HTTPS requests. While this can be really nice for production environments, it can be a nuisance during testing.")]),e._v(" "),o("p",[e._v("ATS is configured in the target's "),o("code",[e._v("Info.plist")]),e._v(" file with the "),o("code",[e._v("NSAppTransportSecurity")]),e._v(" dictionary ("),o("code",[e._v("App Transport Security Settings")]),e._v(" in the Xcode Info.plist editor). To allow all HTTP content, add the "),o("code",[e._v("Allow Arbitrary Loads")]),e._v(" boolean ("),o("code",[e._v("NSAllowsArbitraryLoads")]),e._v(") and set it to "),o("code",[e._v("YES")]),e._v(". This is not recommended for production apps, and if HTTP content is required, it is recommended that it be selectively enabled instead.")]),e._v(" "),o("h2",{attrs:{id:"selectively-load-http-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#selectively-load-http-content"}},[e._v("#")]),e._v(" Selectively load HTTP content")]),e._v(" "),o("p",[e._v("Similar to enabling all HTTP content, all configuration happens under the "),o("code",[e._v("App Transport Security Settings")]),e._v(". Add the "),o("code",[e._v("Exception Domains")]),e._v(" dictionary ("),o("code",[e._v("NSExceptionDomains")]),e._v(") to the top level ATS settings.")]),e._v(" "),o("p",[e._v("For every domain, add a dictionary item to the Exception Domains, where the key is the domain in question. Set "),o("code",[e._v("NSExceptionAllowsInsecureHTTPLoads")]),e._v(" to "),o("code",[e._v("YES")]),e._v(" to disable the HTTPS requirement for that domain.")]),e._v(" "),o("h2",{attrs:{id:"endpoints-require-ssl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#endpoints-require-ssl"}},[e._v("#")]),e._v(" Endpoints require SSL")]),e._v(" "),o("p",[e._v("Introduced in iOS 9, all endpoints must adhere to the HTTPS specification."),o("br"),e._v("\nAny endpoints not using SSL will fail with a warning in the console log. To your application it will appear that the internet connection failed.")]),e._v(" "),o("p",[e._v("To configure exceptions: Place the following in your Info.plist file:")]),e._v(" "),o("ol",[o("li",[e._v("Allow particular domain (testdomain.com) "),o("strong",[e._v("only")]),e._v(":")])]),e._v(" "),o("div",{staticClass:"language-swift extra-class"},[o("pre",{pre:!0,attrs:{class:"language-swift"}},[o("code",[o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),o("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NSAppTransportSecurity")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dict"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),o("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NSExceptionDomains")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dict"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("testdomain"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dict"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),o("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NSIncludesSubdomains")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/>")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),o("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NSExceptionAllowsInsecureHTTPLoads")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/>")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("dict"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("dict"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n")])])]),o("p",[e._v("The key that permits such behavior is "),o("code",[e._v("NSExceptionAllowsInsecureHTTPLoads")]),e._v(". In this case, app will allow HTTP connection to mentioned domain (testdomain.com) only and block all other HTTP connections.")]),e._v(" "),o("p",[e._v("The key "),o("code",[e._v("NSIncludesSubdomains")]),e._v(" specifies that any and all "),o("strong",[e._v("subdomains")]),e._v(" of the mentioned domain (testdomain.com) should also be allowed.")]),e._v(" "),o("ol",[o("li",[e._v("Allow any domain:")])]),e._v(" "),o("div",{staticClass:"language-swift extra-class"},[o("pre",{pre:!0,attrs:{class:"language-swift"}},[o("code",[o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),o("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NSAppTransportSecurity")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dict"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),o("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NSAllowsArbitraryLoads")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/>")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("</")]),e._v("dict"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n")])])]),o("p",[e._v("In this case, app will allow HTTP connection to "),o("strong",[e._v("any")]),e._v(" domain. As of January 1st 2017, using this flag will cause thorough App Store review and the app developers will have to explain why they need to use this exception in the first place. Possible explanations include:")]),e._v(" "),o("ul",[o("li",[e._v("An application that loads encrypted media content that contains no personalized information.")]),e._v(" "),o("li",[e._v("Connections to devices that cannot be upgraded to use secure connections.")]),e._v(" "),o("li",[e._v("Connection to a server that is managed by another entity and does not support secure connections.")])]),e._v(" "),o("h4",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter")]),e._v(" "),o("th",[e._v("Details")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("NSAppTransportSecurity")])]),e._v(" "),o("td",[e._v("Configure ATS")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSAllowsArbitraryLoads")])]),e._v(" "),o("td",[e._v("Set to "),o("code",[e._v("YES")]),e._v(" to disable ATS everywhere. In iOS 10 and later, and macOS 10.12 and later, the value of this key is ignored if any of the following keys are present in your app’s Info.plist file: NSAllowsArbitraryLoadsInMedia, NSAllowsArbitraryLoadsInWebContent, NSAllowsLocalNetworking")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSAllowsArbitraryLoadsInMedia")])]),e._v(" "),o("td",[e._v("Set to "),o("code",[e._v("YES")]),e._v(" to disable ATS for media loaded using APIs from the AV Foundation framework. "),o("strong",[o("strong",[e._v("(iOS 10+, macOS 10.12+)")])])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSAllowsArbitraryLoadsInWebContent")])]),e._v(" "),o("td",[e._v("Set to "),o("code",[e._v("YES")]),e._v(" to disable ATS in your app’s web views ("),o("code",[e._v("WKWebView")]),e._v(", "),o("code",[e._v("UIWebView")]),e._v(", "),o("code",[e._v("WebView")]),e._v(") without affecting your NSURLSession connections. "),o("strong",[o("strong",[e._v("(iOS 10+, macOS 10.12+)")])])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSAllowsLocalNetworking")])]),e._v(" "),o("td",[e._v("Set to "),o("code",[e._v("YES")]),e._v(" to disable for connections to unqualified domains and to .local domains. "),o("strong",[o("strong",[e._v("(iOS 10+, macOS 10.12+)")])])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSExceptionDomains")])]),e._v(" "),o("td",[e._v("Configure exceptions for specific domains")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSIncludesSubdomains")])]),e._v(" "),o("td",[e._v("Set to "),o("code",[e._v("YES")]),e._v(" to apply the exceptions to all subdomains of the selected domain.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSRequiresCertificateTransparency")])]),e._v(" "),o("td",[e._v("Set to "),o("code",[e._v("YES")]),e._v(" to require that valid, signed Certificate Transparency (CT) timestamps, from known CT logs, be presented for server (X.509) certificates on a domain. "),o("strong",[o("strong",[e._v("(iOS 10+, macOS 10.12+)")])])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSExceptionAllowsInsecureHTTPLoads")])]),e._v(" "),o("td",[e._v("Set to "),o("code",[e._v("YES")]),e._v(" to allow HTTP on the selected domain.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSExceptionRequiresForwardSecrecy")])]),e._v(" "),o("td",[e._v("Defaults to "),o("code",[e._v("YES")]),e._v("; Set to "),o("code",[e._v("NO")]),e._v(" to disable Forward Secrecy and accept more ciphers.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSExceptionMinimumTLSVersion")])]),e._v(" "),o("td",[e._v("Defaults to "),o("code",[e._v("TLSv1.2")]),e._v("; Possible values are: "),o("code",[e._v("TLSv1.0")]),e._v(", "),o("code",[e._v("TLSv1.1")]),e._v(", "),o("code",[e._v("TLSv1.2")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSThirdPartyExceptionAllowsInsecureHTTPLoads")])]),e._v(" "),o("td",[e._v("Similar to "),o("code",[e._v("NSExceptionAllowsInsecureHTTPLoads")]),e._v(", but for domains that you have no control over")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSThirdPartyExceptionRequiresForwardSecrecy")])]),e._v(" "),o("td",[e._v("Similar to "),o("code",[e._v("NSExceptionRequiresForwardSecrecy")]),e._v(", but for domains that you have no control over")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("NSThirdPartyExceptionMinimumTLSVersion")])]),e._v(" "),o("td",[e._v("Similar to "),o("code",[e._v("NSExceptionMinimumTLSVersion")]),e._v(", but for domains that you have no control over")])])])]),e._v(" "),o("h4",{attrs:{id:"remarks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://developer.apple.com/library/content/releasenotes/General/WhatsNewIniOS/Articles/iOS9.html#//apple_ref/doc/uid/TP40016198-SW14",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Transport Security"),o("OutboundLink")],1),e._v(" is a security feature in iOS and macOS. It prevents apps from establishing unsecured connections. By default, apps can only use secure HTTPS connections.")]),e._v(" "),o("p",[e._v("If an app needs to connect to a server via HTTP, exceptions must be defined in the "),o("code",[e._v("Info.plist")]),e._v(". (see the examples for more information about that)")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" In 2017, Apple will enforce ATS. That means, that you can no longer upload apps that have ATS-exceptions defined in the "),o("code",[e._v("Info.plist")]),e._v(". If you can provide good arguments, why you have to use HTTP, you can contact Apple and they might allow you to define exceptions. (Source: "),o("a",{attrs:{href:"https://developer.apple.com/videos/play/wwdc2016/706/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WWDC 2016 - Session 706"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("p",[e._v("More information on the App Transport Security configuration can be found in the "),o("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33",target:"_blank",rel:"noopener noreferrer"}},[e._v("CocoaKeys Documentation"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);