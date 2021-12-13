(window.webpackJsonp=window.webpackJsonp||[]).push([[2692],{3100:function(a,t,e){"use strict";e.r(t);var s=e(31),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[a._v("#")]),a._v(" Deployment")]),a._v(" "),e("h2",{attrs:{id:"uploading-a-conda-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uploading-a-conda-package"}},[a._v("#")]),a._v(" Uploading a Conda Package")]),a._v(" "),e("p",[a._v("Before starting you must have:")]),a._v(" "),e("p",[a._v("Anaconda installed on your system Account on Binstar If you are not using "),e("a",{attrs:{href:"https://docs.continuum.io/anaconda/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("Anaconda"),e("OutboundLink")],1),a._v(" 1.6+ install the "),e("a",{attrs:{href:"https://conda.anaconda.org/binstar",target:"_blank",rel:"noopener noreferrer"}},[a._v("binstar"),e("OutboundLink")],1),a._v(" command line client:")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("$ conda install binstar\n$ conda update binstar\n\n")])])]),e("p",[a._v("If you are not using Anaconda the Binstar is also available on pypi:")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("$ pip install binstar\n\n")])])]),e("p",[a._v("Now we can login:")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("$ binstar login\n\n")])])]),e("p",[a._v("Test your login with the whoami command:")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("$ binstar whoami\n\n")])])]),e("p",[a._v("We are going to be uploading a package with a simple ‘hello world’ function. To follow along start by getting my demonstration package repo from Github:")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("$ git clone https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("//")]),a._v("github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("NAME"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Package"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),e("p",[a._v("This a small directory that looks like this:")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("package"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n        setup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("py\n        test_package"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n           __init__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("py\n           hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("py\n           bld"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bat\n           build"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sh\n           meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("yaml\n\n")])])]),e("p",[e("code",[a._v("Setup.py")]),a._v(" is the standard python build file and "),e("code",[a._v("hello.py")]),a._v(" has our single hello_world() function.")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("bld.bat")]),a._v(", "),e("code",[a._v("build.sh")]),a._v(", and "),e("code",[a._v("meta.yaml")]),a._v(" are scripts and metadata for the "),e("code",[a._v("Conda")]),a._v(" package. You can read the "),e("a",{attrs:{href:"http://conda.pydata.org/docs/building/build.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Conda build"),e("OutboundLink")],1),a._v(" page for more info on those three files and their purpose.")]),a._v(" "),e("p",[a._v("Now we create the package by running:")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("$ conda build test_package"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n\n")])])]),e("p",[a._v("That is all it takes to create a Conda package.")]),a._v(" "),e("p",[a._v("The final step is uploading to binstar by copying and pasting the last line of the print out after running the conda build test_package/ command. On my system the command is:")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("$ binstar upload "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("home"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("xavier"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("anaconda"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("conda"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("bld"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("linux"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("test_package"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v(".0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("py27_0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bz2\n\n")])])]),e("p",[a._v("Since it is your first time creating a package and release you will be prompted to fill out some text fields which could alternatively be done through the web app.")]),a._v(" "),e("p",[a._v("You will see a "),e("strong",[e("code",[a._v("done")])]),a._v(" printed out to confirm you have successfully uploaded your Conda package to Binstar.")])])}),[],!1,null,null,null);t.default=n.exports}}]);