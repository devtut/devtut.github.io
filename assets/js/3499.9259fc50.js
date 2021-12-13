(window.webpackJsonp=window.webpackJsonp||[]).push([[3499],{3907:function(t,s,a){"use strict";a.r(s);var e=a(31),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"winforms-spellcheckbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#winforms-spellcheckbox"}},[t._v("#")]),t._v(" WinForms SpellCheckBox")]),t._v(" "),a("p",[t._v("Example on how to add a spell check box to a WindowsForms application.  This example DOES NOT require Word to be installed nor does it use Word in any way.")]),t._v(" "),a("p",[t._v("It uses WPF Interop using the ElementHost control to create a WPF UserControl from a WPF TextBox.  WPF TextBox has a built in function for spell check.  We are going to leverage this built in function rather than relying on an external program.")]),t._v(" "),a("h2",{attrs:{id:"elementhost-wpf-textbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elementhost-wpf-textbox"}},[t._v("#")]),t._v(" ElementHost WPF TextBox")]),t._v(" "),a("p",[t._v("This example is was modeled after an example that I found on the internet.  I can't find the link or I would give the author credit.  I took the sample that I found and modified it to work for my application.")]),t._v(" "),a("ol",[a("li",[t._v("Add the following references:")])]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("System.Xaml, PresentationCore, PresentationFramework, WindowsBase, and WindowsFormsIntegration")]),t._v(" "),a("li",[t._v("\nCreate a new Class and past this code\n"),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" System\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ComponentModel\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ComponentModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Design"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Serialization\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controls\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Forms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Integration    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Forms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Design\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Designer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GetType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ControlDesigner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v(" SpellCheckBox\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Inherits")]),t._v(" ElementHost\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" box "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" TextBox\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" TextBox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MyBase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" box\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AddHandler")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextChanged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AddressOf")]),t._v(" box_TextChanged\n    box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpellCheck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsEnabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VerticalScrollBarVisibility "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ScrollBarVisibility"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Auto\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Drawing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" box_TextChanged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" sender "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" EventArgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    OnTextChanged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EventArgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DefaultValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Overrides")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Return")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DefaultValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" MultiLine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Return")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AcceptsReturn\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AcceptsReturn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DefaultValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" WordWrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Return")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextWrapping "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" TextWrapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wrap\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n            box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextWrapping "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TextWrapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wrap\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n            box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextWrapping "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TextWrapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NoWrap\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DesignerSerializationVisibility"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DesignerSerializationVisibility"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Shadows")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" Child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UIElement\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MyBase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Child\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UIElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'' Do nothing to solve a problem with the serializer !!")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v("\n\n")])])])]),t._v(" "),a("li",[t._v("\nRebuild the solution.\n")]),t._v(" "),a("li",[t._v("\nAdd a new form.\n")]),t._v(" "),a("li",[t._v("\nSearch the toolbox for your Class name.  This example is \"SpellCheck\".  It should be listed under 'YourSoulutionName' Components.\n")]),t._v(" "),a("li",[t._v("\nDrag the new control to your form\n")]),t._v(" "),a("li",[t._v("\nSet any of the mapped properties in the forms load event\n")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" form1_Load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sender "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" EventArgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Handles")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Load\n    spellcheckbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WordWrap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    spellcheckbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MultiLin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Add any other property modifiers here...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),a("ol",[a("li",[t._v("The last thing that you need to do is to change the DPI Awareness of your application.  This is because you are using WinForms application.  By default all WinForms applications are DPI UNAWARE.  Once you execute a control that has an element host (WPF Interop), the application will now become DPI AWARE.  This may or may not mess with your UI Elements.  The solution to this is to FORCE the application to become DPI UNAWARE.  There are 2 ways to do this.  The first is through the manifest file and the second is to hard code it in to your program.  If you are using OneClick to deploy your application, you must hard code it, not use the manifest file or errors will be inevitable.")])]),t._v(" "),a("p",[t._v("Both of the following examples can be found at the following: "),a("a",{attrs:{href:"http://www.telerik.com/blogs/winforms-scaling-at-large-dpi-settings-is-it-even-possible-",target:"_blank",rel:"noopener noreferrer"}},[t._v("WinForms Scaling at Large DPI Settings - Is It Even Possible?"),a("OutboundLink")],1),t._v("  Thanks to Telerik.com for the great explanation on DPI.")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v('Hard coded DPI Aware code example.  This MUST be executed before the first form is initialized.  I always place this in the ApplicationEvents.vb file.  You can get to this file by right clicking on your project name in the solution explorer and choosing "Open".  Then choose the application tab on the left and then click on "View Application Events" on the lower right next to the splash screen drop down.')]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Namespace")]),t._v(" My\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' The following events are available for MyApplication:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Startup: Raised when the application starts, before the startup form is created.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Shutdown: Raised after all application forms are closed.  This event is not raised if the application terminates abnormally.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' UnhandledException: Raised if the application encounters an unhandled exception.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' StartupNextInstance: Raised when launching a single-instance application and the application is already active. ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' NetworkAvailabilityChanged: Raised when the network connection is connected or disconnected.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Partial")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Friend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v(" MyApplication\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Enum")]),t._v(" PROCESS_DPI_AWARENESS\n        Process_DPI_Unaware "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        Process_System_DPI_Aware "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        Process_Per_Monitor_DPI_Aware "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Enum")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" SetProcessDpiAwareness "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Lib")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shcore.dll"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" Value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" PROCESS_DPI_AWARENESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Long")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" SetDPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Results from SetProcessDPIAwareness")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Const S_OK = &H0&")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Const E_INVALIDARG = &H80070057")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Const E_ACCESSDENIED = &H80070005")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" lngResult "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Long")]),t._v("\n\n        lngResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SetProcessDpiAwareness"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PROCESS_DPI_AWARENESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Process_DPI_Unaware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" MyApplication_Startup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sender "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" ApplicationServices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StartupEventArgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Handles")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Startup\n        SetDPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Namespace")]),t._v("\n\n")])])]),a("blockquote"),t._v(" "),a("p",[t._v("Manifest Example")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("assembly xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"urn:schemas-microsoft-com:asm.v1"')]),t._v(" manifestVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" xmlns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("asmv3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"urn:schemas-microsoft-com:asm.v3"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("asmv3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("asmv3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("windowsSettings xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.microsoft.com/SMI/2005/WindowsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dpiAware"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dpiAware"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("asmv3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("windowsSettings"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("asmv3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("assembly"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);