(window.webpackJsonp=window.webpackJsonp||[]).push([[2549],{2957:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"event-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-triggers"}},[t._v("#")]),t._v(" Event Triggers")]),t._v(" "),a("p",[t._v("Event Triggers will be fired whenever event associated with them occurs in database.")]),t._v(" "),a("h2",{attrs:{id:"logging-ddl-command-start-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-ddl-command-start-events"}},[t._v("#")]),t._v(" Logging DDL Command Start Events")]),t._v(" "),a("p",[t._v("Event Type-")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("DDL_COMMAND_START")])]),t._v(" "),a("li",[a("code",[t._v("DDL_COMMAND_END")])]),t._v(" "),a("li",[t._v("SQL_DROP")])]),t._v(" "),a("p",[t._v("This is example for creating an Event Trigger and logging "),a("code",[t._v("DDL_COMMAND_START")]),t._v(" events.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" TAB_EVENT_LOGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  DATE_TIME "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  EVENT_NAME "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  REMARKS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" FN_LOG_EVENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURNS")]),t._v(" EVENT_TRIGGER\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LANGUAGE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SQL")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" \n  $main$\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" TAB_EVENT_LOGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DATE_TIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("EVENT_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("REMARKS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NOW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TG_TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Event Logging'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  $main$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" EVENT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" TRG_LOG_EVENT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" DDL_COMMAND_START\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXECUTE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" FN_LOG_EVENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Please use below link for complete overview of Event Triggers in PostgreSQL")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.postgresql.org/docs/9.3/static/event-trigger-definition.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.postgresql.org/docs/9.3/static/event-trigger-definition.html"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);