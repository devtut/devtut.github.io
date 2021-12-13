(window.webpackJsonp=window.webpackJsonp||[]).push([[1923],{2331:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"image-processing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-processing"}},[t._v("#")]),t._v(" Image processing")]),t._v(" "),s("h2",{attrs:{id:"basic-image-i-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-image-i-o"}},[t._v("#")]),t._v(" Basic image I/O")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'football.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Use "),s("a",{attrs:{href:"http://www.mathworks.com/help/matlab/ref/imread.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("imread")]),s("OutboundLink")],1),t._v(" to read image files into a matrix in MATLAB."),s("br"),t._v("\nOnce you "),s("code",[t._v("imread")]),t._v(" an image, it is stored as an ND-array in memory:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n")])])]),s("p",[t._v("The image "),s("code",[t._v("'football.jpg'")]),t._v(" has 256 rows and 320 columns and it has 3 color channels: Red, Green and Blue.")]),t._v(" "),s("p",[t._v("You can now mirror it:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mirrored "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("img")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%// like mirroring any ND-array in Matlab")]),t._v("\n\n")])])]),s("p",[t._v("And finally, write it back as an image using "),s("a",{attrs:{href:"http://www.mathworks.com/help/matlab/ref/imwrite.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("imwrite")]),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imwrite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mirrored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mirrored_football.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"retrieve-images-from-the-internet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-images-from-the-internet"}},[t._v("#")]),t._v(" Retrieve Images from the Internet")]),t._v(" "),s("p",[t._v("As long as you have an internet connection, you can read images from an hyperlink")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"filtering-using-a-2d-fft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filtering-using-a-2d-fft"}},[t._v("#")]),t._v(" Filtering Using a 2D FFT")]),t._v(" "),s("p",[t._v("Like for 1D signals, it's possible to filter images by applying a Fourier transformation, multiplying with a filter in the frequency domain, and transforming back into the space domain. Here is how you can apply high- or low-pass filters to an image with Matlab:")]),t._v(" "),s("p",[t._v("Let "),s("code",[t._v("image")]),t._v(" be the original, unfiltered image, here's how to compute its 2D FFT:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("ft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fftshift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fft2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Now to exclude a part of the spectrum, one need to set its pixel values to 0. The spatial frequency contained in the original image is mapped from the center to the edges (after using "),s("code",[t._v("fftshift")]),t._v("). To exclude the low frequencies, we will set the central circular area to 0.")]),t._v(" "),s("p",[t._v("Here's how to generate a disc-shaped binary mask with radius "),s("code",[t._v("D")]),t._v(" using built-in function:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nD "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fspecial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imresize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("padarray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'both'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Masking the frequency domain image can be done by multiplying the FFT point-wise with the binary mask obtained above:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("masked_ft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".*")]),t._v(" mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Now, let's compute the inverse FFT:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("filtered_image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifft2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifftshift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("masked_ft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symmetric'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("The high frequencies in an image are the sharp edges, so this high-pass filter can be used to sharpen images.")]),t._v(" "),s("h2",{attrs:{id:"image-filtering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-filtering"}},[t._v("#")]),t._v(" Image Filtering")]),t._v(" "),s("p",[t._v("Let's say you have an image "),s("code",[t._v("rgbImg")]),t._v(", e.g., read in using "),s("code",[t._v("imread")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" rgbImg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pears.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgbImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Original Image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/Qf9Zo.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/Qf9Zo.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Use "),s("a",{attrs:{href:"http://mathworks.com/help/images/ref/fspecial.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("fspecial")]),s("OutboundLink")],1),t._v(" to create a 2D filter:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fspecial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Filter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/5xoxY.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/5xoxY.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Use "),s("a",{attrs:{href:"http://mathworks.com/help/images/ref/imfilter.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("imfilter")]),s("OutboundLink")],1),t._v(" to apply the filter on the image:")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" filteredRgbImg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imfilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgbImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filteredRgbImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Filtered Image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/BYBMM.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/BYBMM.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"measuring-properties-of-connected-regions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#measuring-properties-of-connected-regions"}},[t._v("#")]),t._v(" Measuring Properties of Connected Regions")]),t._v(" "),s("p",[t._v("Starting with a binary image, "),s("code",[t._v("bwImg")]),t._v(", which contains a number of connected objects.")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bwImg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blobs.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bwImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Binary Image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/HGUk8.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/HGUk8.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("To measure properties (e.g., area, centroid, etc) of every object in the image, use "),s("a",{attrs:{href:"http://uk.mathworks.com/help/images/ref/regionprops.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("regionprops")]),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" stats "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("regionprops")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bwImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Area'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Centroid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("stats")]),t._v(" is a struct array which contains a struct for every object in the image. Accessing a measured property of an object is simple. For example, to display the area of the first object, simply,")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stats")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Area\n\nans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("35")]),t._v("\n\n")])])]),s("p",[t._v("Visualize the object centroids by overlaying them on the original image.")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bwImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Binary Image With Centroids Overlaid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hold on\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stats")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Centroid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stats")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Centroid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/ajWes.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/ajWes.png",alt:"enter image description here"}}),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);