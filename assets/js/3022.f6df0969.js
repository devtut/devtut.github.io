(window.webpackJsonp=window.webpackJsonp||[]).push([[3022],{3430:function(a,t,e){"use strict";e.r(t);var s=e(31),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"create-a-shareable-apk-for-android"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-shareable-apk-for-android"}},[a._v("#")]),a._v(" Create a shareable APK for android")]),a._v(" "),e("p",[a._v("Steps to create an APK (signed and unsigned) which you can install on a device using CLI and share as well:")]),a._v(" "),e("p",[e("strong",[a._v("Problem statement:")]),a._v(" I've built my app, I can run it on my local emulator (and also on my android device by changing debug server).\nBut, I want to build an apk that I can send to someone without access to development server and I want them to be able to test application.")]),a._v(" "),e("h2",{attrs:{id:"create-a-key-to-sign-the-apk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-key-to-sign-the-apk"}},[a._v("#")]),a._v(" Create a key to sign the APK")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("keytool "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("genkey "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("v "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keystore my"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("keystore "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("alias my"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("alias "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keyalg "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RSA")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keysize "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("validity "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v("\n\n")])])]),e("p",[a._v("Use a password when prompted")]),a._v(" "),e("h2",{attrs:{id:"once-the-key-is-generated-use-it-to-generate-the-installable-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#once-the-key-is-generated-use-it-to-generate-the-installable-build"}},[a._v("#")]),a._v(" Once the key is generated, use it to generate the installable build:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("react"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("native bundle "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("platform android "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("dev "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("entry"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("file index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("js \\\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("bundle"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("output android"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("src"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("main"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("assets"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bundle \\\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("assets"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dest android"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("src"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("main"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("res"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n\n")])])]),e("h2",{attrs:{id:"generate-the-build-using-gradle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-the-build-using-gradle"}},[a._v("#")]),a._v(" Generate the build using gradle")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("cd android "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("gradlew assembleRelease\n\n")])])]),e("h2",{attrs:{id:"upload-or-share-the-generated-apk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-or-share-the-generated-apk"}},[a._v("#")]),a._v(" Upload or share the generated APK")]),a._v(" "),e("p",[a._v("Upload the APK to your phone. The -r flag will replace the existing app (if it exists)")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("adb install "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("r "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("build"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("outputs"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("apk"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("release"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("unsigned"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("apk\n\n")])])]),e("p",[a._v("The shareable signed APK is located at:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("build"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("outputs"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("apk"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("apk\n\n")])])]),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),e("p",[a._v("A more detailed description is also mentioned here: "),e("a",{attrs:{href:"https://facebook.github.io/react-native/docs/signed-apk-android.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://facebook.github.io/react-native/docs/signed-apk-android.html"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);