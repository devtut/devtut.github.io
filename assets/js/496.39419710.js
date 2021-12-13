(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{904:function(n,e,t){"use strict";t.r(e);var a=t(31),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"design-patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design-patterns"}},[n._v("#")]),n._v(" Design Patterns")]),n._v(" "),t("p",[n._v("Accomplish some common design patterns in Bash")]),n._v(" "),t("h2",{attrs:{id:"the-publish-subscribe-pub-sub-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-publish-subscribe-pub-sub-pattern"}},[n._v("#")]),n._v(" The Publish/Subscribe (Pub/Sub) Pattern")]),n._v(" "),t("p",[n._v("When a Bash project turns into a library, it can become difficult to add new functionality. Function names, variables and parameters usually need to be changed in the scripts that utilize them. In scenarios like this, it is helpful to decouple the code and use an event driven design pattern. In said pattern, an external script can subscribe to an event. When that event is triggered (published) the script can execute the code that it registered with the event.")]),n._v(" "),t("p",[t("strong",[n._v("pubsub.sh:")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\n   #!/usr/bin/env bash\n\n    #\n    # Save the path to this script\'s directory in a global env variable\n    #\n    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"\n\n    #\n    # Array that will contain all registered events\n    #\n    EVENTS=()\n\n    function action1() {\n        echo "Action #1 was performed ${2}"\n    }\n\n    function action2() {\n        echo "Action #2 was performed"\n    }\n\n    #\n    # @desc   :: Registers an event\n    # @param  :: string $1 - The name of the event. Basically an alias for a function name\n    # @param  :: string $2 - The name of the function to be called\n    # @param  :: string $3 - Full path to script that includes the function being called\n    #\n    function subscribe() {\n        EVENTS+=("${1};${2};${3}")\n    }\n\n    #\n    # @desc   :: Public an event\n    # @param  :: string $1 - The name of the event being published\n    #\n    function publish() {\n        for event in ${EVENTS[@]}; do\n            local IFS=";"\n            read -r -a event <<< "$event"\n            if [[  "${event[0]}" ==  "${1}" ]]; then\n                ${event[1]} "$@"\n            fi\n        done\n    }\n\n    #\n    # Register our events and the functions that handle them\n    #\n    subscribe "/do/work"           "action1" "${DIR}"\n    subscribe "/do/more/work"      "action2" "${DIR}"\n    subscribe "/do/even/more/work" "action1" "${DIR}"\n\n    #\n    # Execute our events\n    #\n    publish "/do/work"\n    publish "/do/more/work"\n    publish "/do/even/more/work" "again"\n\n')])])]),t("p",[t("strong",[n._v("Run:")])]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[n._v("chmod")]),n._v(" +x pubsub.sh\n./pubsub.sh\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);