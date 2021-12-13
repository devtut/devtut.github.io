(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{581:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fastlane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fastlane"}},[t._v("#")]),t._v(" fastlane")]),t._v(" "),s("h2",{attrs:{id:"fastfile-lane-to-build-and-install-all-flavors-for-given-build-type-to-a-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fastfile-lane-to-build-and-install-all-flavors-for-given-build-type-to-a-device"}},[t._v("#")]),t._v(" Fastfile lane to build and install all flavors for given build type to a device")]),t._v(" "),s("p",[t._v("Add this lane to your "),s("strong",[t._v("Fastfile")]),t._v(" and run "),s("code",[t._v("fastlane installAll type:{BUILD_TYPE}")]),t._v(" in command line. Replace "),s("code",[t._v("BUILD_TYPE")]),t._v(" with the build type you want to build.")]),t._v(" "),s("p",[t._v("For example: "),s("code",[t._v("fastlane installAll type:Debug")])]),t._v(" "),s("p",[t._v("This command will build all flavors of given type and install it to your device. Currently, it doesn't work if you have more than one device attached. Make sure you have only one. In the future I'm planning to add option to select target device.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("lane "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("installAll "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gradle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gradle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assemble"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       build_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    lane_context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedValues")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("GRADLE_ALL_APK_OUTPUT_PATHS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("each "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" apk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n        puts "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Uploading APK to Device: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" apk\n\n        begin\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("adb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                command"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install -r #{apk}"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rescue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ex\n            puts ex\n        end\n    end\nend\n\n")])])]),s("h2",{attrs:{id:"fastfile-to-build-and-upload-multiple-flavors-to-beta-by-crashlytics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fastfile-to-build-and-upload-multiple-flavors-to-beta-by-crashlytics"}},[t._v("#")]),t._v(" Fastfile to build and upload multiple flavors to Beta by Crashlytics")]),t._v(" "),s("p",[t._v("This is a sample "),s("strong",[t._v("Fastfile")]),t._v(" setup for a multi-flavor app. It gives you an option to build and deploy all flavors or a single flavor. After the deployment, it reports to "),s("strong",[t._v("Slack")]),t._v(" the status of the deployment, and sends a notification to testers in Beta by Crashlytics testers group.")]),t._v(" "),s("p",[t._v("To build and deploy all flavors use:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("fastlane android beta\n\n")])])]),s("p",[t._v("To build a single APK and deploy use:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("fastlane android beta app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("flavorName\n\n")])])]),s("p",[t._v("Using a single Fastlane file, you can manage iOS, Android, and Mac apps. If you are using this file just for one app "),s("code",[t._v("platform")]),t._v(" is not required.")]),t._v(" "),s("p",[s("strong",[t._v("How It Works")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("android")]),t._v(" argument tells fastlane that we will use "),s("code",[t._v(":android")]),t._v(" platform.")]),t._v(" "),s("li",[t._v("Inside "),s("code",[t._v(":android")]),t._v(" platform you can have multiple lanes. Currently, I have only "),s("code",[t._v(":beta")]),t._v(" lane. The second argument from the command above specifies the lane we want to use.")]),t._v(" "),s("li",[s("code",[t._v("options[:app]")])]),t._v(" "),s("li",[t._v("There are two "),s("strong",[t._v("Gradle")]),t._v(" tasks. First, it runs "),s("code",[t._v("gradle clean")]),t._v(". If you provided a flavor with "),s("code",[t._v("app")]),t._v(" key, fastfile runs "),s("code",[t._v("gradle assembleReleaseFlavor")]),t._v(". Otherwise, it runs "),s("code",[t._v("gradle assembleRelease")]),t._v(" to build all build flavors.")]),t._v(" "),s("li",[t._v("If we are building for all flavors, an array of generated APK file names is stored inside "),s("code",[t._v("SharedValues::GRADLE_ALL_APK_OUTPUT_PATHS")]),t._v(". We use this to loop through generated files and deploy them to "),s("strong",[t._v("Beta by Crashlytics")]),t._v(". "),s("code",[t._v("notifications")]),t._v(" and "),s("code",[t._v("groups")]),t._v(" fields are optional. They are used to notify testers registered for the app on "),s("strong",[t._v("Beta by Crashlytics")]),t._v(".")]),t._v(" "),s("li",[t._v("If you are familiar with Crashlytics, you might know that to activate an app in the portal, you have to run it on a device and use it first. Otherwise, Crashlytics will assume the app inactive and throw an error. In this scenario, I capture it and report to "),s("strong",[t._v("Slack")]),t._v(" as a failure, so you will know which app is inactive.")]),t._v(" "),s("li",[t._v("If deployment is successful, "),s("strong",[t._v("fastlane")]),t._v(" will send a success message to "),s("strong",[t._v("Slack")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("#{/([^\\/]*)$/.match(apk)}")]),t._v(" this regex is used to get flavor name from APK path. You can remove it if it does not work for you.")]),t._v(" "),s("li",[s("code",[t._v("get_version_name")]),t._v(" and "),s("code",[t._v("get_version_code")]),t._v(" are two "),s("strong",[t._v("Fastlane")]),t._v(" plugins to retrieve app version name and code. You have to install these gems if you want to use, or you can remove them. Read more about Plugins here.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("else")]),t._v(" statement will be executed if you are building and deploying a single APK. We don't have to provide "),s("code",[t._v("apk_path")]),t._v(" to Crashlytics since we have only one app.")]),t._v(" "),s("li",[s("code",[t._v("error do")]),t._v(" block at the end is used to get notified if anything else goes wrong during execution.")])]),t._v(" "),s("p",[s("strong",[t._v("Note")])]),t._v(" "),s("p",[t._v("Don't forget to replace "),s("code",[t._v("SLACK_URL")]),t._v(", "),s("code",[t._v("API_TOKEN")]),t._v(", "),s("code",[t._v("GROUP_NAME")]),t._v(" and "),s("code",[t._v("BUILD_SECRET")]),t._v(" with your own credentials.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("fastlane_version "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.46.1"')]),t._v("\n\ndefault_platform "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android\n\nplatform "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n\n    before_all "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        ENV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SLACK_URL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://hooks.slack.com/servic...."')]),t._v("\n    end\n    \n    lane "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("beta "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        # "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Clean")]),t._v(" and build the "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Release")]),t._v(" version of the app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        # "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Usage")]),t._v(" `fastlane android beta app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("flavorName`\n    \n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gradle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gradle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assemble"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               build_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Release"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               flavor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n        # "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("If")]),t._v(" user calls `fastlane android beta` command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" it will build all projects and push them "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Crashlytics")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nil"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n            lane_context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedValues")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("GRADLE_ALL_APK_OUTPUT_PATHS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("each "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" apk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    \n                puts "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Uploading APK to Crashlytics: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" apk\n    \n                begin\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("crashlytics")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                      api_token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[API_TOKEN]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      build_secret"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[BUILD_SECRET]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      groups"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[GROUP_NAME]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      apk_path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" apk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      notifications"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                      message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Successfully deployed new build for #{/([^\\/]*)$/.match(apk)} #{get_version_name} - #{get_version_code}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      success"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      default_payloads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("git_branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("test_result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                rescue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ex\n                    # "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("If")]),t._v(" the app is inactive in "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Crashlytics")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deployment will "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("fail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v(" Handle")]),t._v(" it here and report "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("slack")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                        message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error uploading => #{/([^\\/]*)$/.match(apk)} #{get_version_name} - #{get_version_code}: #{ex}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        success"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        default_payloads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("git_branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("test_result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                end\n            end\n    \n            after_all "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("lane"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n                # "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("This")]),t._v(" block is called"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" only "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the executed lane was successful\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Operation completed for #{lane_context[SharedValues::GRADLE_ALL_APK_OUTPUT_PATHS].size} app(s) for #{get_version_name} - #{get_version_code}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    default_payloads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("git_branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("test_result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    success"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            end\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            # "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Single")]),t._v(" APK upload "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Beta")]),t._v(" by "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Crashlytics")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("crashlytics")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                api_token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[API_TOKEN]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                build_secret"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[BUILD_SECRET]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                groups"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[GROUP_NAME]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                notifications"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n            after_all "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("lane"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n                # "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("This")]),t._v(" block is called"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" only "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the executed lane was successful\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Successfully deployed new build for #{options[:app]} #{get_version_name} - #{get_version_code}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    default_payloads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("git_branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("test_result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    success"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            end\n        end\n    \n        error "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                success"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                default_payloads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("git_branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("test_result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        end\n    end\nend\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[s("strong",[t._v("fastlane")]),t._v(" is a tool for iOS, Mac, and Android developers to automate tedious tasks like generating screenshots, dealing with provisioning profiles, and releasing your application.")]),t._v(" "),s("p",[s("strong",[t._v("Docs:")]),t._v(" "),s("a",{attrs:{href:"https://docs.fastlane.tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.fastlane.tools/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Source Code:")]),t._v(" "),s("a",{attrs:{href:"https://github.com/fastlane/fastlane",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/fastlane/fastlane"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);