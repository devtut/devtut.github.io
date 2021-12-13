(window.webpackJsonp=window.webpackJsonp||[]).push([[2013],{2421:function(s,t,e){"use strict";e.r(t);var a=e(31),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"if-else"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-else"}},[s._v("#")]),s._v(" IF...ELSE")]),s._v(" "),e("h2",{attrs:{id:"single-if-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-if-statement"}},[s._v("#")]),s._v(" Single IF statement")]),s._v(" "),e("p",[s._v("Like most of the other programming languages,  T-SQL also supports IF..ELSE statements.")]),s._v(" "),e("p",[s._v("For example in the example below "),e("code",[s._v("1 = 1")]),s._v(" is the expression, which evaluates to True and the control enters the "),e("code",[s._v("BEGIN..END")]),s._v(" block and the Print statement prints the string "),e("code",[s._v("'One is equal to One'")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- Some Expression ")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'One is equal to One'")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"multiple-if-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-if-statements"}},[s._v("#")]),s._v(" Multiple IF Statements")]),s._v(" "),e("p",[s._v("We can use multiple IF statement to check multiple expressions totally independent from each other.")]),s._v(" "),e("p",[s._v("In the example below, each "),e("code",[s._v("IF")]),s._v(" statement's expression is evaluated and if it is true the code inside the "),e("code",[s._v("BEGIN...END")]),s._v(" block is executed. In this particular example, the First and Third expressions are true and only those print statements will be executed.")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- Some Expression      --<-- This is true ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'First IF is True'")]),s._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- this will be executed")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- Some Expression ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Second IF is True'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- Some Expression        --<-- This true ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thrid IF is True'")]),s._v("             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- this will be executed")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"single-if-else-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-if-else-statement"}},[s._v("#")]),s._v(" Single IF..ELSE statement")]),s._v(" "),e("p",[s._v("In a single "),e("code",[s._v("IF..ELSE")]),s._v(" statement, if the expression evaluates to True in the "),e("code",[s._v("IF")]),s._v(" statement the control enters the first "),e("code",[s._v("BEGIN..END")]),s._v(" block and only the code inside that block gets executed , Else block is simply ignored.")]),s._v(" "),e("p",[s._v("On the other hand if the expression evaluates to "),e("code",[s._v("False")]),s._v(" the "),e("code",[s._v("ELSE BEGIN..END")]),s._v(" block gets executed and the control never enters the first "),e("code",[s._v("BEGIN..END")]),s._v(" Block.")]),s._v(" "),e("p",[s._v("In the Example below the expression will evaluate to false and the Else block will be executed printing the string "),e("code",[s._v("'First expression was not true'")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- Some Expression")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'One is equal to One'")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" \n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'First expression was not true'")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"multiple-if-else-with-final-else-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-if-else-with-final-else-statements"}},[s._v("#")]),s._v(" Multiple IF... ELSE with final ELSE Statements")]),s._v(" "),e("p",[s._v("If we have Multiple "),e("code",[s._v("IF...ELSE IF")]),s._v(" statements but we also want also want to execute some piece of code if none of expressions are evaluated to True , then we can simple add a final "),e("code",[s._v("ELSE")]),s._v(" block which only gets executed if none of the "),e("code",[s._v("IF")]),s._v(" or "),e("code",[s._v("ELSE IF")]),s._v(" expressions are evaluated to true.")]),s._v(" "),e("p",[s._v("In the example below none of the "),e("code",[s._v("IF")]),s._v(" or "),e("code",[s._v("ELSE IF")]),s._v(" expression are True hence only "),e("code",[s._v("ELSE")]),s._v(" block is executed and prints "),e("code",[s._v("'No other expression is true'")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'First If Condition'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Second If Else Block'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Third If Else Block'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'No other expression is true'")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- Only this statement will be printed")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"multiple-if-else-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-if-else-statements"}},[s._v("#")]),s._v(" Multiple IF...ELSE Statements")]),s._v(" "),e("p",[s._v("More often than not we need to check multiple expressions and take specific actions based on those expressions. This situation is handled using multiple "),e("code",[s._v("IF...ELSE IF")]),s._v(" statements.")]),s._v(" "),e("p",[s._v("In this example all the expressions are evaluated from top to bottom. As soon as an expression evaluates to true, the code inside that block is executed. If no expression is evaluated to true, nothing gets executed.")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'First If Condition'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Second If Else Block'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Third If Else Block'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- This is True")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRINT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Last Else Block'")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--<-- Only this statement will be printed")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);