(window.webpackJsonp=window.webpackJsonp||[]).push([[2852],{3261:function(t,e,s){"use strict";s.r(e);var a=s(31),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"analyze-tweets-with-r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analyze-tweets-with-r"}},[t._v("#")]),t._v(" Analyze tweets with R")]),t._v(" "),s("p",[t._v("(Optional) Every topic has a focus. Tell the readers what they will find here and let future contributors know what belongs.")]),t._v(" "),s("h2",{attrs:{id:"download-tweets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-tweets"}},[t._v("#")]),t._v(" Download Tweets")]),t._v(" "),s("p",[t._v("The first think you need to do is to download tweets. You need to Setup your tweeter account. Much Information can be found in Internet on how to do it. The following two links were useful for my Setup (last checked in May 2017)")]),t._v(" "),s("p",[t._v("In particular I found the following two links useful (last checked in May 2017):")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.credera.com/blog/business-intelligence/twitter-analytics-using-r-part-1-extract-tweets/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link 1"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://thinktostart.com/twitter-authentification-with-r/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link 2"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"r-libraries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#r-libraries"}},[t._v("#")]),t._v(" R Libraries")]),t._v(" "),s("p",[t._v("You will need the following R packages")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("library"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"devtools"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"twitteR"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROAuth"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Supposing you have your keys You have to run the following code")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("api_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" XXXXXXXXXXXXXXXXXXXXXX\napi_secret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" XXXXXXXXXXXXXXXXXXXXXX\naccess_token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" XXXXXXXXXXXXXXXXXXXXXX\naccess_token_secret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" XXXXXXXXXXXXXXXXXXXXXX\n\n\nsetup_twitter_oauth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("api_secret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Change "),s("code",[t._v("XXXXXXXXXXXXXXXXXXXXXX")]),t._v(" to your keys (if you have Setup your tweeter account you know which keys I mean).")]),t._v(" "),s("p",[t._v("Let's now suppose we want to download tweets on coffee. The following code will do it")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("search.string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#coffee"')]),t._v("\nno.of.tweets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n\nc_tweets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" searchTwitter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("search.string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("no.of.tweets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n")])])]),s("p",[t._v('You will get 1000 tweets on "coffee".')]),t._v(" "),s("h2",{attrs:{id:"get-text-of-tweets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-text-of-tweets"}},[t._v("#")]),t._v(" Get text of tweets")]),t._v(" "),s("p",[t._v("Now we need to access the text of the tweets. So we do it in this way (we also need to clean up the tweets from special characters that for now we don't need, like emoticons with the  sapply  function.)")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("coffee_tweets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sapply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c_tweets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("getText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncoffee_tweets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" sapply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coffee_tweets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" iconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latin1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ASCII"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sub"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("and you can check your tweets with the "),s("code",[t._v("head")]),t._v(" function.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coffee_tweets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);