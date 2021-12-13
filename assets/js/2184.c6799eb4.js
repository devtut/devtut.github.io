(window.webpackJsonp=window.webpackJsonp||[]).push([[2184],{2592:function(s,t,e){"use strict";e.r(t);var a=e(31),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"deploying-node-js-applications-in-production"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-node-js-applications-in-production"}},[s._v("#")]),s._v(" Deploying Node.js applications in production")]),s._v(" "),e("h2",{attrs:{id:"setting-node-env-production"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-node-env-production"}},[s._v("#")]),s._v(' Setting NODE_ENV="production"')]),s._v(" "),e("p",[s._v("Production deployments will vary in many ways, but a standard convention when deploying in production is to define an environment variable called "),e("code",[s._v("NODE_ENV")]),s._v(" and set its value to "),e("strong",[s._v('"production"')]),s._v(".")]),s._v(" "),e("h3",{attrs:{id:"runtime-flags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runtime-flags"}},[s._v("#")]),s._v(" Runtime flags")]),s._v(" "),e("p",[s._v("Any code running in your application (including external modules) can check the value of "),e("code",[s._v("NODE_ENV")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// We are running in production mode")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// We are running in development mode")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),e("h3",{attrs:{id:"dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[s._v("#")]),s._v(" Dependencies")]),s._v(" "),e("p",[s._v("When the "),e("code",[s._v("NODE_ENV")]),s._v(" environment variable is set to "),e("strong",[s._v("'production'")]),s._v(" all "),e("code",[s._v("devDependencies")]),s._v(" in your "),e("strong",[s._v("package.json")]),s._v(" file will be completely ignored when running "),e("code",[s._v("npm install")]),s._v(". You can also enforce this with a "),e("code",[s._v("--production")]),s._v(" flag:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("production\n\n")])])]),e("p",[s._v("For setting "),e("code",[s._v("NODE_ENV")]),s._v(" you can use any  of these methods")]),s._v(" "),e("p",[e("strong",[s._v("method 1: set NODE_ENV for all node apps")])]),s._v(" "),e("p",[s._v("Windows :")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production\n\n")])])]),e("p",[s._v("Linux or other unix based system :")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production\n\n")])])]),e("p",[s._v("This sets "),e("code",[s._v("NODE_ENV")]),s._v(" for current bash session thus any apps started after this statement will have "),e("code",[s._v("NODE_ENV")]),s._v(" set to "),e("code",[s._v("production")]),s._v(".")]),s._v(" "),e("p",[e("strong",[s._v("method 2: set NODE_ENV for current app")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production node app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n\n")])])]),e("p",[s._v("This will set "),e("code",[s._v("NODE_ENV")]),s._v(" for the current app only. This helps when we want to test our apps on different environments.")]),s._v(" "),e("p",[e("strong",[s._v("method 3: create "),e("code",[s._v(".env")]),s._v(" file and use it")])]),s._v(" "),e("p",[s._v("This uses the idea explained "),e("a",{attrs:{href:"http://stackoverflow.com/a/28821696/620039",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),e("OutboundLink")],1),s._v(". Refer this post for more detailed explanation.")]),s._v(" "),e("p",[s._v("Basically you create "),e("code",[s._v(".env")]),s._v(" file and run some bash script to set them on environment.")]),s._v(" "),e("p",[s._v("To avoid writing a bash script, the "),e("a",{attrs:{href:"https://www.npmjs.com/package/env-cmd",target:"_blank",rel:"noopener noreferrer"}},[s._v("env-cmd"),e("OutboundLink")],1),s._v(" package can be used to load the environment variables defined in the "),e("code",[s._v(".env")]),s._v(" file.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("env"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env node app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n\n")])])]),e("p",[e("strong",[s._v("method 4: Use "),e("code",[s._v("cross-env")]),s._v(" package")])]),s._v(" "),e("p",[s._v("This "),e("a",{attrs:{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer"}},[s._v("package"),e("OutboundLink")],1),s._v(" allows environment variables to be set in one way for every platform.")]),s._v(" "),e("p",[s._v("After installing it with npm, you can just add it to your deployment script in "),e("code",[s._v("package.json")]),s._v(" as follows:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:deploy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production webpack"')]),s._v("\n\n")])])]),e("h2",{attrs:{id:"manage-app-with-process-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manage-app-with-process-manager"}},[s._v("#")]),s._v(" Manage app with process manager")]),s._v(" "),e("p",[s._v("It's a good practice to run NodeJS apps controlled by process managers.\nProcess manager helps to keep application alive forever, restart on failure, reload without downtime and simplifies administrating. Most powerful of them (like "),e("a",{attrs:{href:"http://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PM2"),e("OutboundLink")],1),s._v(") have a built-in load balancer. PM2 also enables you to manage application logging, monitoring, and clustering.")]),s._v(" "),e("h3",{attrs:{id:"pm2-process-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pm2-process-manager"}},[s._v("#")]),s._v(" PM2 process manager")]),s._v(" "),e("p",[s._v("Installing PM2:")]),s._v(" "),e("p",[e("code",[s._v("npm install pm2 -g")])]),s._v(" "),e("p",[s._v("Process can be started in cluster mode involving integrated load balancer to spread load between processes:")]),s._v(" "),e("p",[e("code",[s._v('pm2 start app.js -i 0 --name "api"')]),s._v(" ("),e("strong",[s._v("-i")]),s._v(" is to specify number of processes to spawn. If it is 0, then process number will be based on CPU cores count)")]),s._v(" "),e("p",[s._v("While having multiple users in production, its must to have a single point for PM2. Therefore pm2 command must be prefixed with a location (for PM2 config) else it will spawn a new pm2 process for every user with config in respective home directory. And it will be inconsistent.")]),s._v(" "),e("p",[s._v("Usage:\n"),e("code",[s._v("PM2_HOME=/etc/.pm2 pm2 start app.js")])]),s._v(" "),e("h2",{attrs:{id:"deployment-using-process-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment-using-process-manager"}},[s._v("#")]),s._v(" Deployment using process manager")]),s._v(" "),e("p",[s._v("Process manager is generally used in production to deploy a nodejs app. The main functions of a process manager are restarting the server if it crashes, checking resource consumption, improving runtime performance, monitoring etc.")]),s._v(" "),e("p",[s._v("Some of the popular process managers made by the node community are forever, pm2, etc.")]),s._v(" "),e("h3",{attrs:{id:"forvever"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forvever"}},[s._v("#")]),s._v(" "),e("strong",[s._v("Forvever")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/foreverjs/forever",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("forever")]),e("OutboundLink")],1),s._v(" is a command-line interface tool for ensuring that a given script runs continuously. "),e("code",[s._v("forever")]),s._v("’s simple interface makes it ideal for running smaller deployments of "),e("code",[s._v("Node.js")]),s._v(" apps and scripts.")]),s._v(" "),e("p",[e("code",[s._v("forever")]),s._v(" monitors your process and restarts it if it crashes.")]),s._v(" "),e("p",[s._v("Install "),e("code",[s._v("forever")]),s._v(" globally.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("$ npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g forever\n\n")])])]),e("p",[s._v("Run application :")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("$ forever start server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n\n")])])]),e("p",[s._v("This starts the server and gives an id for the process(starts from 0).")]),s._v(" "),e("p",[s._v("Restart application :")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("$ forever restart "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n")])])]),e("p",[s._v("Here "),e("code",[s._v("0")]),s._v(" is the id of the server.")]),s._v(" "),e("p",[s._v("Stop application :")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("$ forever stop "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n")])])]),e("p",[s._v("Similar to restart, "),e("code",[s._v("0")]),s._v(" is the id the server. You can also give process id or script name in place of the id  given by the forever.")]),s._v(" "),e("p",[s._v("For more commands : "),e("a",{attrs:{href:"https://www.npmjs.com/package/forever",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/package/forever"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"deployment-using-pm2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment-using-pm2"}},[s._v("#")]),s._v(" Deployment using PM2")]),s._v(" "),e("p",[e("code",[s._v("PM2")]),s._v(" is a production process manager for "),e("code",[s._v("Node.js")]),s._v(" applications, that allows you to keep applications alive forever and reload them without downtime. PM2 also enables you to manage application logging, monitoring, and clustering.")]),s._v(" "),e("p",[s._v("Install "),e("code",[s._v("pm2")]),s._v(" globally.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g pm2\n\n")])])]),e("p",[s._v("Then, run the "),e("code",[s._v("node.js")]),s._v(" app using "),e("code",[s._v("PM2.")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("pm2 start server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-app"')]),s._v("\n\n")])])]),e("p",[e("a",{attrs:{href:"http://i.stack.imgur.com/9L2zo.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://i.stack.imgur.com/9L2zo.png",alt:"enter image description here"}}),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("Following commands are useful while working with "),e("code",[s._v("PM2")]),s._v(".")])]),s._v(" "),e("p",[s._v("List all running processes:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("pm2 list\n\n")])])]),e("p",[s._v("Stop an app:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("pm2 stop my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app\n\n")])])]),e("p",[s._v("Restart an app:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("pm2 restart my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app\n\n")])])]),e("p",[s._v("To view detailed information about an app:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("pm2 show my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app\n\n")])])]),e("p",[s._v("To remove an app from PM2’s registry:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("pm2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app\n\n")])])]),e("h2",{attrs:{id:"using-different-properties-configuration-for-different-environments-like-dev-qa-staging-etc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-different-properties-configuration-for-different-environments-like-dev-qa-staging-etc"}},[s._v("#")]),s._v(" Using different Properties/Configuration for different environments like dev, qa, staging etc.")]),s._v(" "),e("p",[s._v("Large scale applications often need different properties when running on different environments. we can achieve this by passing arguments to NodeJs application and using same argument in node process to load specific environment property file.")]),s._v(" "),e("p",[s._v("Suppose we have two property files for different environment.")]),s._v(" "),e("li",[s._v("\ndev.json\n"),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PORT"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DB"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bob"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"12345"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])])]),s._v(" "),e("li",[s._v("\nqa.json\n"),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PORT"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DB"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"where_db_is_hosted"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bob"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"54321"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])])]),s._v(" "),e("p",[s._v("Following code in application will export respective property file which we want to use.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" arg "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'env'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" env "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" arg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prop "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),e("p",[s._v("We give arguments to the application like following")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("node app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js env"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev\n\n")])])]),e("p",[s._v("if we are using process manager like "),e("strong",[s._v("forever")]),s._v(" than it as simple as")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("forever start app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js env"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev\n\n")])])]),e("h2",{attrs:{id:"taking-advantage-of-clusters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#taking-advantage-of-clusters"}},[s._v("#")]),s._v(" Taking advantage of clusters")]),s._v(" "),e("p",[s._v("A single instance of Node.js runs in a single thread. To take advantage of multi-core systems the user will sometimes want to launch a cluster of Node.js processes to handle the load.")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\nvar cluster = require('cluster');\n    \n    var numCPUs = require('os').cpus().length;\n    \n        if (cluster.isMaster) {\n          // In real life, you'd probably use more than just 2 workers,\n          // and perhaps not put the master and worker in the same file.\n          //\n          // You can also of course get a bit fancier about logging, and\n          // implement whatever custom logic you need to prevent DoS\n          // attacks and other bad behavior.\n          //\n          // See the options in the cluster documentation.\n          //\n          // The important thing is that the master does very little,\n          // increasing our resilience to unexpected errors.\n            console.log('your server is working on ' + numCPUs + ' cores');\n            \n             for (var i = 0; i < numCPUs; i++) {\n                    cluster.fork();\n                  }\n             \n          cluster.on('disconnect', function(worker) {\n            console.error('disconnect!');\n            //clearTimeout(timeout);\n            cluster.fork();\n          });\n    \n          \n        } else {\n            require('./app.js');\n        \n        }\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);