(window.webpackJsonp=window.webpackJsonp||[]).push([[2084],{2492:function(t,e,s){"use strict";s.r(e);var a=s(31),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"window-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-functions"}},[t._v("#")]),t._v(" Window functions")]),t._v(" "),s("h2",{attrs:{id:"centered-moving-average"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centered-moving-average"}},[t._v("#")]),t._v(" Centered Moving Average")]),t._v(" "),s("p",[t._v("Calculate a 6-month (126-business-day) centered moving average of a price:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TradeDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" TradeDate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROWS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("BETWEEN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("63")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRECEDING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("63")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOLLOWING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" PxMovingAverage\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" HistoricalPrices\n\n")])])]),s("p",[t._v("Note that, because it will take "),s("strong",[t._v("up to")]),t._v(" 63 rows before and after each returned row, at the beginning and end of the TradeDate range it will not be centered: When it reaches the largest TradeDate it will only be able to find 63 preceding values to include in the average.")]),t._v(" "),s("h2",{attrs:{id:"find-the-single-most-recent-item-in-a-list-of-timestamped-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find-the-single-most-recent-item-in-a-list-of-timestamped-events"}},[t._v("#")]),t._v(" Find the single most recent item in a list of timestamped events")]),t._v(" "),s("p",[t._v("In tables recording events there is often a datetime field recording the time an event happened. Finding the single most recent event can be difficult because it's always possible that two events were recorded with exactly identical timestamps. You can use row_number() over (order by ...) to make sure all records are uniquely ranked, and select the top one (where my_ranking=1)")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        row_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("over")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" crdate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" my_ranking\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sysobjects\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" g\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" my_ranking"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),s("p",[t._v("This same technique can be used to return a single row from any dataset with potentially duplicate values.")]),t._v(" "),s("h2",{attrs:{id:"moving-average-of-last-30-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#moving-average-of-last-30-items"}},[t._v("#")]),t._v(" Moving Average of last 30 Items")]),t._v(" "),s("p",[t._v("Moving Average of last 30 Items sold")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n    value_column1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value_column1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" moving_average\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Table1 T2\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Table1 T3\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" date_column1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("BETWEEN")]),t._v(" T2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date_column1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" T1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date_column1\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("BETWEEN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" MovingAvg\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Table1 T1\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);