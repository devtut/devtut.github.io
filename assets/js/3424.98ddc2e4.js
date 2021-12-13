(window.webpackJsonp=window.webpackJsonp||[]).push([[3424],{3832:function(s,t,e){"use strict";e.r(t);var a=e(31),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"flow-control-structures"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-control-structures"}},[s._v("#")]),s._v(" Flow control structures")]),s._v(" "),e("h2",{attrs:{id:"for-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-loop"}},[s._v("#")]),s._v(" For loop")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("For")]),s._v(" loop is used to repeat the enclosed section of code a given number of times. The following simple example illustrates the basic syntax:")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Integer")]),s._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Declaration of i")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Declare how many times the loop shall be executed")]),s._v("\n    Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Print i          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'The piece of code which is repeated")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v(" i                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'The end of the loop")]),s._v("\n\n")])])]),e("p",[s._v("The code above declares an Integer "),e("code",[s._v("i")]),s._v(". The "),e("code",[s._v("For")]),s._v(" loop assigns every value between 1 and 10 to "),e("code",[s._v("i")]),s._v(" and then executes "),e("code",[s._v("Debug.Print i")]),s._v(" - i.e. the code prints the numbers 1 through 10 to the immediate window. Note that the loop variable is incremented by the "),e("code",[s._v("Next")]),s._v(" statement, that is after the enclosed code executes as opposed to before it executes.")]),s._v(" "),e("p",[s._v("By default, the counter will be incremented by 1 each time the loop executes. However, a "),e("code",[s._v("Step")]),s._v(" can be specified to change the amount of the increment as either a literal or the return value of a function. If the starting value, ending value, or "),e("code",[s._v("Step")]),s._v(" value is a floating point number, it will be rounded to the nearest integer value. "),e("code",[s._v("Step")]),s._v(" can be either a positive or negative value.")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Integer")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("To")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Step")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Print i       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Prints 1, 3, 5, 7, and 9")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n\n")])])]),e("p",[s._v("In general a "),e("code",[s._v("For")]),s._v(" loop would be used in situations where it is known before the loop starts how many times to execute the enclosed code (otherwise a "),e("code",[s._v("Do")]),s._v(" or "),e("code",[s._v("While")]),s._v(" loop may be more appropriate). This is because the exit condition is fixed after the first entry into loop, as this code demonstrates:")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Private")]),s._v(" Iterations "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Long")]),s._v("              "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Module scope")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Sub")]),s._v(" Example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Long")]),s._v("\n    Iterations "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("To")]),s._v(" Iterations\n        Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Print Iterations     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Prints 10 through 1, descending.")]),s._v("\n        Iterations "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Iterations "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Sub")]),s._v("\n\n")])])]),e("p",[s._v("A "),e("code",[s._v("For")]),s._v(" loop can be exited early with the "),e("code",[s._v("Exit For")]),s._v(" statement:")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Integer")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("To")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Then")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Exit")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v("\n    Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Print i       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Prints 1, 2, 3, 4, 5 before loop exits early.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"select-case"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-case"}},[s._v("#")]),s._v(" Select Case")]),s._v(" "),e("p",[e("code",[s._v("Select Case")]),s._v(" can be used when many different conditions are possible. The conditions are checked from top to bottom and only the first case that match will be executed.")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Sub")]),s._v(" TestCase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" MyVar "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("String")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" MyVar    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'We Select the Variable MyVar to Work with")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),s._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Now we simply check the cases we want to check")]),s._v("\n            MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This Case"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"World"')]),s._v("\n            MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Important"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"How"')]),s._v("\n            MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Stuff"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Are"')]),s._v("\n            MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I\'m running out of ideas"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You?"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Today"')]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'You can separate several conditions with a comma")]),s._v("\n            MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Uuuhm..."')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'if any is matched it will go into the case")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Else")]),s._v("             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'If none of the other cases is hit")]),s._v("\n            MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"All of the other cases failed"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Integer")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" i\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Is")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('\'"Is" can be used instead of the variable in conditions.')]),s._v("\n            MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i is greater than 2"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Case 2 < Is '\"Is\" can only be used at the beginning of the condition.")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Case Else is optional")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Sub")]),s._v("\n\n")])])]),e("p",[s._v("The logic of the "),e("code",[s._v("Select Case")]),s._v(" block can be inverted to support testing of different variables too, in this kind of scenario we can also use logical operators:")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" x "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Integer")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" y "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Integer")]),s._v("\n\nx "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\ny "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x is greater than 3"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"y is less than 2"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x is equal to 1"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Xor")]),s._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Go read about ""Xor"""')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Not")]),s._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"y is not 5"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Or")]),s._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x = 3 or 10"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("And")]),s._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x and y are less than 10"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Else")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"No match found"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v("\n\n")])])]),e("p",[s._v("Case statements can also use arithmetic operators. Where an arithmetic operator is being used against the "),e("code",[s._v("Select Case")]),s._v(" value it should be preceded with the "),e("code",[s._v("Is")]),s._v(" keyword:")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" x "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Integer")]),s._v("\n\nx "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" x\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x equals 1"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x is 2, 3 or 4"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("To")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x is between 7 and 10 (inclusive)"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Is")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x is less than one"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Is")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x is greater than or equal to 7"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Case")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Else")]),s._v("\n        MsgBox "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no match found"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"for-each-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-each-loop"}},[s._v("#")]),s._v(" For Each loop")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("For Each")]),s._v(" loop construct is ideal for iterating all elements of a collection.")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Sub")]),s._v(" IterateCollection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ByVal")]),s._v(" items "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" Collection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'For Each iterator must always be variant")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" element "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Variant")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Each")]),s._v(" element "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("In")]),s._v(" items\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'assumes element can be converted to a string")]),s._v("\n        Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Print element\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Sub")]),s._v("\n\n")])])]),e("p",[s._v("Use "),e("code",[s._v("For Each")]),s._v(" when iterating object collections:")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" sheet "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" Worksheet\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Each")]),s._v(" sheet "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("In")]),s._v(" ActiveWorkbook"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Worksheets\n    Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Print sheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n\n")])])]),e("p",[s._v("Avoid "),e("code",[s._v("For Each")]),s._v(" when iterating arrays; a "),e("code",[s._v("For")]),s._v(" loop will offer significantly better performance with arrays. Conversely, a "),e("code",[s._v("For Each")]),s._v(" loop will offer better performance when iterating a "),e("code",[s._v("Collection")]),s._v(".")]),s._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Each")]),s._v(" [item] "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("In")]),s._v(" [collection]\n    [statements]\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v(" [item]\n\n")])])]),e("p",[s._v("The "),e("code",[s._v("Next")]),s._v(" keyword may optionally be followed by the iterator variable; this can help clarify nested loops, although there are better ways to clarify nested code, such as extracting the inner loop into its own procedure.")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" book "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" Workbook\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Each")]),s._v(" book "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("In")]),s._v(" Application"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Workbooks\n\n    Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Print book"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FullName\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" sheet "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" Worksheet\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Each")]),s._v(" sheet "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("In")]),s._v(" ActiveWorkbook"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Worksheets\n        Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Print sheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Name\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v(" sheet\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v(" book\n\n")])])]),e("h2",{attrs:{id:"do-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#do-loop"}},[s._v("#")]),s._v(" Do loop")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\nPublic Sub DoLoop()\n    Dim entry As String\n    entry = ""\n    \'Equivalent to a While loop will ask for strings until "Stop" in given\n    \'Prefer using a While loop instead of this form of Do loop\n    Do While entry <> "Stop"\n        entry = InputBox("Enter a string, Stop to end")\n        Debug.Print entry\n    Loop\n\n    \'Equivalent to the above loop, but the condition is only checked AFTER the\n    \'first iteration of the loop, so it will execute even at least once even \n    \'if entry is equal to "Stop" before entering the loop (like in this case)\n    Do\n        entry = InputBox("Enter a string, Stop to end")\n        Debug.Print entry\n    Loop While entry <> "Stop"\n\n    \n    \'Equivalent to writing Do While Not entry="Stop"\n    \'\n    \'Because the Until is at the top of the loop, it will\n    \'not execute because entry is still equal to "Stop"\n    \'when evaluating the condition\n    Do Until entry = "Stop"\n        entry = InputBox("Enter a string, Stop to end")\n        Debug.Print entry\n    Loop\n\n    \'Equivalent to writing Do ... Loop While Not i >= 100\n    Do\n        entry = InputBox("Enter a string, Stop to end")\n        Debug.Print entry\n    Loop Until entry = "Stop"\nEnd Sub\n\n')])])]),e("h2",{attrs:{id:"while-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#while-loop"}},[s._v("#")]),s._v(" While loop")]),s._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("'Will return whether an element is present in the array")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Function")]),s._v(" IsInArray"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("values"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ByVal")]),s._v(" whatToFind "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Boolean")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Integer")]),s._v("\n    i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("While")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" UBound"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("values"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("And")]),s._v(" values"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" whatToFind\n        i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Wend")]),s._v("\n    \n    IsInArray "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" values"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" whatToFind\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Function")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);