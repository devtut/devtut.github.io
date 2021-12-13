(window.webpackJsonp=window.webpackJsonp||[]).push([[3471],{3879:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gdi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gdi"}},[t._v("#")]),t._v(" GDI+")]),t._v(" "),s("h2",{attrs:{id:"create-graphic-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-graphic-object"}},[t._v("#")]),t._v(" Create Graphic Object")]),t._v(" "),s("p",[t._v("There are three ways to create a graphics object")]),t._v(" "),s("ol",[s("li",[t._v("From the "),s("strong",[t._v("Paint Event")])])]),t._v(" "),s("p",[t._v("Every time the control is redrawn (resized, refreshed...) this event is called, use this way if you want the control to consistently draw on the control")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n  'this will work on any object's paint event, not just the form\n   Private Sub Form1_Paint(sender as Object, e as PaintEventArgs) Handles Me.Paint\n     Dim gra as Graphics\n     gra = e.Graphics\n   End Sub\n\n")])])]),s("ol",[s("li",[s("strong",[t._v("Create Graphic")])])]),t._v(" "),s("p",[t._v("This is most often used when you want to create a one time graphic on the control, or you don't want the control to repaint itself")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n  Dim btn as New Button\n   Dim g As Graphics = btn.CreateGraphics\n\n")])])]),s("ol",[s("li",[t._v("From an "),s("strong",[t._v("Existing Graphic")])])]),t._v(" "),s("p",[t._v("Use this method when you want to draw and change an existing graphic")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n  \'The existing image can be from a filename, stream or Drawing.Graphic\n   Dim image = New Bitmap("C:\\TempBit.bmp")\n   Dim gr As Graphics = Graphics.FromImage(image)\n\n')])])]),s("h2",{attrs:{id:"draw-shapes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#draw-shapes"}},[t._v("#")]),t._v(" Draw Shapes")]),t._v(" "),s("p",[t._v("To start drawing a shape you need to define a pen object\nThe "),s("code",[t._v("Pen")]),t._v(" accepts two parameters:")]),t._v(" "),s("ol",[s("li",[t._v("Pen Color or Brush")]),t._v(" "),s("li",[t._v("Pen Width")])]),t._v(" "),s("p",[t._v("The Pen Object is used to create an "),s("strong",[t._v("outline")]),t._v(" of the object you want to draw")]),t._v(" "),s("p",[t._v("After Defining the Pen you can set specific Pen Properties")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n  Dim pens As New Pen(Color.Purple)\n   pens.DashStyle = DashStyle.Dash 'pen will draw with a dashed line\n   pens.EndCap = LineCap.ArrowAnchor 'the line will end in an arrow\n   pens.StartCap = LineCap.Round 'The line draw will start rounded\n   '*Notice* - the Start and End Caps will not show if you draw a closed shape\n\n")])])]),s("p",[t._v("Then use the graphics object you created to draw the shape")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n Private Sub GraphicForm_Paint(sender As Object, e As PaintEventArgs) Handles MyBase.Paint\n    Dim pen As New Pen(Color.Blue, 15) 'Use a blue pen with a width of 15\n    Dim point1 As New Point(5, 15) 'starting point of the line\n    Dim point2 As New Point(30, 100) 'ending point of the line\n    e.Graphics.DrawLine(pen, point1, point2)\n\n    e.Graphics.DrawRectangle(pen, 60, 90, 200, 300) 'draw an outline of the rectangle\n\n")])])]),s("p",[t._v("By default, the pen's width is equal to 1")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n   Dim pen2 as New Pen(Color.Orange) 'Use an orange pen with width of 1\n    Dim origRect As New Rectangle(90, 30, 50, 60) 'Define bounds of arc\n    e.Graphics.DrawArc(pen2, origRect, 20, 180) 'Draw arc in the rectangle bounds\n\nEnd Sub\n\n")])])]),s("h2",{attrs:{id:"fill-shapes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fill-shapes"}},[t._v("#")]),t._v(" Fill Shapes")]),t._v(" "),s("p",[t._v("Graphics.FillShapes draws a shape and fills it in with the color given. Fill Shapes can use")]),t._v(" "),s("li",[t._v("\n`Brush` Tool - to fill shape with a solid color\n"),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" rect "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FillRectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Brushes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'draws a rectangle that is filled with green")]),t._v("\n\ne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FillPie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Brushes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Silver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'draws a half circle that is filled with silver")]),t._v("\n\n")])])])]),t._v(" "),s("li",[t._v("\n`HatchBrush` Tool - to fill shape with a pattern\n")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" hBrush "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" HatchBrush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HatchStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ZigZag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SkyBlue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Gray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'creates a HatchBrush Tool with a background color of blue, foreground color of gray, ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'and will fill with a zigzag pattern")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" rectan "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FillRectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hBrush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rectan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("li",[t._v("\n`LinearGradientBrush` - to fill shape with a gradient\n"),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" lBrush "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" LinearGradientBrush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" point2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MediumVioletRed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaleGreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" rect "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FillRectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lBrush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])]),t._v(" "),s("li",[t._v("\n`TextureBrush` - to fill shape with a picture\n")]),t._v(" "),s("p",[t._v("You can choose a picture from resources, an already defined Bitmap, or from a file name")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n  Dim textBrush As New TextureBrush(New Bitmap("C:\\ColorPic.jpg"))\n    Dim rect As New Rectangle(400, 400, 100, 100)\n    e.Graphics.FillPie(textBrush, rect, 0, 360)\n\n')])])]),s("p",[t._v("Both the "),s("code",[t._v("Hatch Brush Tool")]),t._v(" and "),s("code",[t._v("LinearGradientBrush")]),t._v(" import the following statement : "),s("strong",[t._v("Imports System.Drawing.Drawing2D")])]),t._v(" "),s("h2",{attrs:{id:"text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[t._v("#")]),t._v(" Text")]),t._v(" "),s("p",[t._v("To draw text onto the form use the "),s("code",[t._v("DrawString")]),t._v(" Method")]),t._v(" "),s("p",[t._v("When you draw a string you can use any of the 4 brushes listed above")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" lBrush "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" LinearGradientBrush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" point2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MediumVioletRed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaleGreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DrawString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HELLO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Impact"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lBrush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Point"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'this will draw the word "Hello" at the given point, with a linearGradient Brush')]),t._v("\n\n")])])]),s("p",[t._v("Since you can't define the width or height of the text use "),s("code",[t._v("Measure Text")]),t._v(" to check text size")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" lBrush "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" LinearGradientBrush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" point2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MediumVioletRed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaleGreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" TextSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeasureString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HELLO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Impact"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lBrush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Use the TextSize to determine where to place the string, or if the font needs to be smaller")]),t._v("\n\n")])])]),s("blockquote"),t._v(" "),s("p",[t._v('Ex: You need to draw the word "Test" on top of the form. The form\'s width is 120.\nUse this loop to decrease the font size till it will fit into the forms width')]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" FontSize "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" TextSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measeString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Impact"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("FontSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Brush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" TextSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v("\nFontSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FontSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nTextSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measeString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Impact"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("FontSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Brush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Loop")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);