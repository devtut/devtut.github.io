(window.webpackJsonp=window.webpackJsonp||[]).push([[3415],{3823:function(t,e,a){"use strict";a.r(e);var s=a(31),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-custom-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-class"}},[t._v("#")]),t._v(" Creating a Custom Class")]),t._v(" "),a("h2",{attrs:{id:"adding-a-property-to-a-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-property-to-a-class"}},[t._v("#")]),t._v(" Adding a Property to a Class")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("Property")]),t._v(" procedure is a series of statement that retrieves or modifies a custom property on a module.")]),t._v(" "),a("p",[t._v("There are three types of property accessors:")]),t._v(" "),a("ol",[a("li",[t._v("A "),a("code",[t._v("Get")]),t._v(" procedure that returns the value of a property.")]),t._v(" "),a("li",[t._v("A "),a("code",[t._v("Let")]),t._v(" procedure that assigns a (non-"),a("code",[t._v("Object")]),t._v(") value to an object.")]),t._v(" "),a("li",[t._v("A "),a("code",[t._v("Set")]),t._v(" procedure that assigns an "),a("code",[t._v("Object")]),t._v(" reference.")])]),t._v(" "),a("p",[t._v("Property accessors are often defined in pairs, using both a "),a("code",[t._v("Get")]),t._v(" and "),a("code",[t._v("Let")]),t._v("/"),a("code",[t._v("Set")]),t._v(" for each property. A property with only a "),a("code",[t._v("Get")]),t._v(" procedure would be read-only, while a property with only a "),a("code",[t._v("Let")]),t._v("/"),a("code",[t._v("Set")]),t._v(" procedure would be write-only.")]),t._v(" "),a("p",[t._v("In the following example, four property accessors are defined for the "),a("code",[t._v("DateRange")]),t._v(" class:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("StartDate")]),t._v(" ("),a("strong",[t._v("read/write")]),t._v("). Date value representing the earlier date in a range. Each procedure uses the value of the module variable, "),a("code",[t._v("mStartDate")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("EndDate")]),t._v(" ("),a("strong",[t._v("read/write")]),t._v("). Date value representing the later date in a range. Each procedure uses the value of the module variable, "),a("code",[t._v("mEndDate")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("DaysBetween")]),t._v(" ("),a("strong",[t._v("read-only")]),t._v("). Calculated Integer value representing the number of days between the two dates. Because there is only a "),a("code",[t._v("Get")]),t._v(" procedure, this property cannot be modified directly.")]),t._v(" "),a("li",[a("code",[t._v("RangeToCopy")]),t._v(" ("),a("strong",[t._v("write-only")]),t._v("). A "),a("code",[t._v("Set")]),t._v(" procedure used to copy the values of an existing "),a("code",[t._v("DateRange")]),t._v(" object.")])]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" mStartDate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Module variable to hold the starting date")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" mEndDate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Module variable to hold the ending date")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Return the current value of the starting date")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v(" StartDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("\n    StartDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mStartDate\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Set the starting date value. Note that two methods have the name StartDate")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Let")]),t._v(" StartDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" NewValue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    mStartDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NewValue\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Same thing, but for the ending date")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v(" EndDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("\n    EndDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mEndDate\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Let")]),t._v(" EndDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" NewValue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    mEndDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NewValue\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Read-only property that returns the number of days between the two dates")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Get")]),t._v(" DaysBetween"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n    DaysBetween "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DateDiff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mStartDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mEndDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Write-only property that passes an object reference of a range to clone")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" RangeToCopy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByRef")]),t._v(" ExistingRange "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" DateRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StartDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ExistingRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StartDate\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EndDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ExistingRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EndDate\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"adding-functionality-to-a-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-functionality-to-a-class"}},[t._v("#")]),t._v(" Adding Functionality to a Class")]),t._v(" "),a("p",[t._v("Any public "),a("code",[t._v("Sub")]),t._v(", "),a("code",[t._v("Function")]),t._v(", or "),a("code",[t._v("Property")]),t._v(" inside a class module can be called by preceding the call with an object reference:")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Procedure\n\n")])])]),a("p",[t._v("In a "),a("code",[t._v("DateRange")]),t._v(" class, a "),a("code",[t._v("Sub")]),t._v(" could be used to add a number of days to the end date:")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" AddDays"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" NoDays "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    mEndDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mEndDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" NoDays\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),a("p",[t._v("A "),a("code",[t._v("Function")]),t._v(" could return the last day of the next month-end (note that "),a("code",[t._v("GetFirstDayOfMonth")]),t._v(" would not be visible outside the class because it is private):")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" GetNextMonthEndDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("\n    GetNextMonthEndDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DateAdd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GetFirstDayOfMonth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" GetFirstDayOfMonth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("\n    GetFirstDayOfMonth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DateAdd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("DatePart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mEndDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mEndDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n")])])]),a("p",[t._v("Procedures can accept arguments of any type, including references to objects of the class being defined.")]),t._v(" "),a("p",[t._v("The following example tests whether the current "),a("code",[t._v("DateRange")]),t._v(" object has a starting date and ending date that includes the starting and ending date of another "),a("code",[t._v("DateRange")]),t._v(" object.")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" ContainsRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByRef")]),t._v(" TheRange "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" DateRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),t._v("\n    ContainsRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TheRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StartDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StartDate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("And")]),t._v(" TheRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EndDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EndDate\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n")])])]),a("p",[t._v("Note the use of the "),a("code",[t._v("Me")]),t._v(" notation as a way to access the value of the object running the code.")]),t._v(" "),a("h2",{attrs:{id:"class-module-scope-instancing-and-re-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-module-scope-instancing-and-re-use"}},[t._v("#")]),t._v(" Class module scope, instancing and re-use")]),t._v(" "),a("p",[t._v("By default, a new class module is a Private class, so it is "),a("strong",[t._v("only")]),t._v(" available for instantiation and use within the VBProject in which it is defined. You can declare, instantiate and use the class anywhere in the "),a("strong",[t._v("same")]),t._v(" project:")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Class List has Instancing set to Private")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'In any other module in the SAME project, you can use:")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" items "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" List\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" items "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" List\n\n")])])]),a("p",[t._v("But often you'll write classes that you'd like to use in other projects "),a("strong",[t._v("without")]),t._v(" copying the module between projects. If you define a class called "),a("code",[t._v("List")]),t._v(" in "),a("code",[t._v("ProjectA")]),t._v(", and want to use that class in "),a("code",[t._v("ProjectB")]),t._v(", then you'll need to perform 4 actions:")]),t._v(" "),a("li",[t._v("\nChange the instancing property of the `List` class in `ProjectA` in the Properties window, from `Private` to `PublicNotCreatable`\n")]),t._v(" "),a("li",[t._v('\nCreate a public "factory" function in `ProjectA` that creates and returns an instance of a `List` class. Typically the factory function would include arguments for the initialization of the class instance. The factory function is required because the class can be used by `ProjectB` but `ProjectB` cannot directly create an instance of `ProjectA`\'s class.\n'),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" CreateList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ParamArray")]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Variant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" List\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" tempList "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" List\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" itemCounter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Long")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" tempList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" List\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" itemCounter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n         tempList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("itemCounter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" itemCounter\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" CreateList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tempList\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n")])])])]),t._v(" "),a("li",[t._v("\nIn `ProjectB` add a reference to `ProjectA` using the `Tools..References...` menu.\n")]),t._v(" "),a("li",[t._v("\nIn `ProjectB`, declare a variable and assign it an instance of `List` using the factory function from `ProjectA`\n"),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" items "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" ProjectA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" items "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ProjectA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CreateList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Use the items list methods and properties")]),t._v("\n items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fizz"')]),t._v("\n Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Destroy the items object")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" items "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("Nothing")]),t._v("\n\n")])])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("This article will show how to create a complete custom class in VBA. It uses the example of a "),a("code",[t._v("DateRange")]),t._v(" object, because a starting and ending date are often passed together to functions.")])])}),[],!1,null,null,null);e.default=n.exports}}]);