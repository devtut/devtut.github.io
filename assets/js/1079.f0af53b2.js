(window.webpackJsonp=window.webpackJsonp||[]).push([[1079],{1487:function(t,e,s){"use strict";s.r(e);var a=s(31),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"debugging-and-troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-and-troubleshooting"}},[t._v("#")]),t._v(" Debugging and Troubleshooting")]),t._v(" "),s("h2",{attrs:{id:"immediate-window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immediate-window"}},[t._v("#")]),t._v(" Immediate Window")]),t._v(" "),s("p",[t._v("If you would like to test a line of macro code without needing to run an entire sub, you can type commands directly into the Immediate Window and hit "),s("code",[t._v("ENTER")]),t._v(" to run the line.")]),t._v(" "),s("p",[t._v("For testing the output of a line, you can precede it with a question mark "),s("code",[t._v("?")]),t._v(" to print directly to the Immediate Window.  Alternatively, you can also use the "),s("code",[t._v("print")]),t._v(" command to have the output printed.")]),t._v(" "),s("p",[t._v("While in the Visual Basic Editor, press "),s("code",[t._v("CTRL + G")]),t._v(' to open the Immediate Window. To rename your currently selected sheet to "ExampleSheet", type the following in the Immediate Window and hit '),s("code",[t._v("ENTER")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n  ActiveSheet.Name = "ExampleSheet"\n\n')])])]),s("p",[t._v("To print the currently selected sheet's name directly in the Immediate Window")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v(" ActiveSheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name\nExampleSheet\n\n")])])]),s("p",[t._v("This method can be very useful to test the functionality of built in or user defined functions before implementing them in code.  The example below demonstrates how the Immediate Window can be used to test the output of a function or series of functions to confirm an expected.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'In this example, the Immediate Window was used to confirm that a series of Left and Right ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'string methods would return the desired string")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'expected output: "value"')]),t._v("\nprint Left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1111value1111"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' <---- written code here, ENTER pressed")]),t._v("\nvalue                                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' <---- output")]),t._v("\n\n")])])]),s("p",[t._v("The Immediate Window can also be used to set or reset Application, Workbook, or other needed properties.  This can be useful if you have "),s("code",[t._v("Application.EnableEvents = False")]),t._v(" in a subroutine that unexpectedly throws an error, causing it to close without resetting the value to "),s("code",[t._v("True")]),t._v(" (which can cause frustrating and unexpected functionality.  In that case, the commands can be typed directly into the Immediate Window and run:")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnableEvents       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' <---- Testing the current state of "EnableEvents"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("                            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' <---- Output")]),t._v("\nApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnableEvents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' <---- Resetting the property value to True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnableEvents       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' <---- Testing the current state of "EnableEvents"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' <---- Output")]),t._v("\n\n")])])]),s("p",[t._v("For more advanced debugging techniques, a colon "),s("code",[t._v(":")]),t._v(" can be used as a line separator. This can be used for multi-line expressions such as looping in the example below.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a,b,c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LBound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" UBound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'<----Input this and press enter")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'<----Output")]),t._v("\nb "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'<----Output")]),t._v("\nc "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'<----Output")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"debug-print"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-print"}},[t._v("#")]),t._v(" Debug.Print")]),t._v(" "),s("p",[t._v("To print a listing of the Error Code descriptions to the Immediate Window, pass it to the "),s("code",[t._v("Debug.Print")]),t._v(" function:")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" ListErrCodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"List Error Code Descriptions"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65535")]),t._v("\n        e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Application-defined or object-defined error"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v(" Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('": "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" e\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" i\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),s("p",[t._v("You can show the Immediate Window by:")]),t._v(" "),s("ul",[s("li",[t._v("Selecting "),s("strong",[t._v("V")]),t._v("iew | "),s("strong",[t._v("I")]),t._v("mmediate Window from the menu bar")]),t._v(" "),s("li",[t._v("Using the keyboard shortcut "),s("strong",[t._v("Ctrl-G")])])]),t._v(" "),s("h2",{attrs:{id:"use-timer-to-find-bottlenecks-in-performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-timer-to-find-bottlenecks-in-performance"}},[t._v("#")]),t._v(" Use Timer to Find Bottlenecks in Performance")]),t._v(" "),s("p",[t._v("The first step in optimizing for speed is finding the slowest sections of code. The "),s("code",[t._v("Timer")]),t._v(" VBA function returns the number of seconds elapsed since midnight with a precision of 1/256th of a second (3.90625 milliseconds) on Windows based PCs. The VBA functions "),s("code",[t._v("Now")]),t._v(" and "),s("code",[t._v("Time")]),t._v(" are only accurate to a second.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Double")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Timer returns Single, but converting to Double to avoid ")]),t._v("\nstart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Timer             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' scientific notation like 3.90625E-03 in the Immediate window")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' ... part of the code")]),t._v("\nDebug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print Timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start; "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"seconds in part 1"')]),t._v(" \n\nstart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Timer\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' ... another part of the code")]),t._v("\nDebug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print Timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start; "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"seconds in part 2"')]),t._v("\n\n")])])]),s("h2",{attrs:{id:"debugger-locals-window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugger-locals-window"}},[t._v("#")]),t._v(" Debugger Locals Window")]),t._v(" "),s("p",[t._v("The Locals window provides easy access to the current value of variables and objects within the scope of the function or subroutine you are running. It is an essential tool to debugging your code and stepping through changes in order to find issues. It also allows you to explore properties you might not have known existed.")]),t._v(" "),s("p",[t._v("Take the following example,")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Option")]),t._v(" Explicit\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" LocalsWindowExample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" findMeInLocals "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" findMEInLocals2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range\n    \n    findMeInLocals "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" findMEInLocals2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ActiveWorkbook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sheets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),s("p",[t._v("In the VBA Editor, click View  --\x3e Locals Window")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/rT6Wf.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/rT6Wf.png",alt:"Where locals menu is at on the window"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Then by stepping through the code using F8 after clicking inside the subroutine, we have stopped before getting to assigning findMeinLocals. Below you can see the value is 0 --- and this is what would be used if you never assigned it a value. The range object is 'Nothing'.")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/B8vZt.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/B8vZt.png",alt:"At this step the variables are nothing..."}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/8smT0.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/8smT0.png",alt:"Showing the variables are nothing."}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("If we stop right before the subroutine ends, we can see the final values of the variables.")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/VE12u.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/VE12u.png",alt:"Set a debug point... if you want"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("We can see findMeInLocals with a value of 1 and type of Integer, and FindMeInLocals2 with a type of Range/Range. If we click the + sign we can expand the object and see its properties, such as count or column.")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/m7Rdu.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/m7Rdu.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"stop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" Stop")]),t._v(" "),s("p",[t._v("The Stop command will pause the execution when called. From there, the process can be resumed or be executed step by step.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" Test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" TestVar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    TestVar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Stop")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Sub will be executed to this point and then wait for the user")]),t._v("\n    MsgBox TestVar\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"adding-a-breakpoint-to-your-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-breakpoint-to-your-code"}},[t._v("#")]),t._v(" Adding a Breakpoint to your code")]),t._v(" "),s("p",[t._v("You can easily add a breakpoint to your code by clicking on the grey column to the left of the line of your VBA code where you want execution to stop. A red dot appears in the column and the breakpoint code is also highlighted in red.")]),t._v(" "),s("p",[t._v('You can add multiple breakpoints throughout your code and resuming execution is achieved by pressing the "play" icon in your menu bar.  Not all code can be a breakpoint as variable definition lines, the first or last line of a procedure and comment lines cannot be selected as a breakpoint.')]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/AJUpD.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/AJUpD.jpg",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[t._v("Debug.Print(string)")]),t._v(" "),s("li",[t._v("Stop() / Stop")])])])}),[],!1,null,null,null);e.default=n.exports}}]);