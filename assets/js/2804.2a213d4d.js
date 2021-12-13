(window.webpackJsonp=window.webpackJsonp||[]).push([[2804],{3212:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"setup-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-py"}},[t._v("#")]),t._v(" setup.py")]),t._v(" "),a("h2",{attrs:{id:"using-source-control-metadata-in-setup-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-source-control-metadata-in-setup-py"}},[t._v("#")]),t._v(" Using source control metadata in setup.py")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pypi.python.org/pypi/setuptools_scm",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setuptools_scm")]),a("OutboundLink")],1),t._v(" is an officially-blessed package that can use Git or Mercurial metadata to determine the version number of your package, and find Python packages and package data to include in it.")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" setuptools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" find_packages\n\nsetup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    setup_requires"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setuptools_scm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use_scm_version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    packages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("find_packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    include_package_data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("This example uses both features; to only use SCM metadata for the version, replace the call to "),a("code",[t._v("find_packages()")]),t._v(" with your manual package list, or to only use the package finder, remove "),a("code",[t._v("use_scm_version=True")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"purpose-of-setup-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose-of-setup-py"}},[t._v("#")]),t._v(" Purpose of setup.py")]),t._v(" "),a("p",[t._v("The setup script is the centre of all activity in building, distributing, and installing modules using the Distutils. It's purpose is the correct installation of the software.")]),t._v(" "),a("p",[t._v("If all you want to do is distribute a module called foo, contained in a file foo.py, then your setup script can be as simple as this:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" distutils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" setup\n\nsetup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      py_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("To create a source distribution for this module, you would create a setup script, setup.py, containing the above code, and run this command from a terminal:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py sdist\n\n")])])]),a("p",[t._v("sdist will create an archive file (e.g., tarball on Unix, ZIP file on Windows) containing your setup script setup.py, and your module foo.py. The archive file will be named foo-1.0.tar.gz (or .zip), and will unpack into a directory foo-1.0.")]),t._v(" "),a("p",[t._v("If an end-user wishes to install your foo module, all she has to do is download foo-1.0.tar.gz (or .zip), unpack it, and—from the foo-1.0 directory—run")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py install\n\n")])])]),a("h2",{attrs:{id:"adding-command-line-scripts-to-your-python-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-command-line-scripts-to-your-python-package"}},[t._v("#")]),t._v(" Adding command line scripts to your python package")]),t._v(" "),a("p",[t._v("Command line scripts inside python packages are common.  You can organise your package in such a way that when a user installs the package, the script will be available on their path.")]),t._v(" "),a("p",[t._v("If you had the "),a("code",[t._v("greetings")]),t._v(" package which had the command line script "),a("code",[t._v("hello_world.py")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("greetings"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n   greetings"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n      __init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n      hello_world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),a("p",[t._v("You could run that script by running:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python greetings"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("greetings"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hello_world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),a("p",[t._v("However if you would like to run it like so:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("hello_world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n")])])]),a("p",[t._v("You can achieve this by adding "),a("code",[t._v("scripts")]),t._v(" to your "),a("code",[t._v("setup()")]),t._v(" in "),a("code",[t._v("setup.py")]),t._v(" like this:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" setuptools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" setup\nsetup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'greetings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  scripts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello_world.py'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("When you install the greetings package now, "),a("code",[t._v("hello_world.py")]),t._v(" will be added to your path.")]),t._v(" "),a("p",[t._v("Another possibility would be to add an entry point:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("entry_points"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console_scripts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'greetings=greetings.hello_world:main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("This way you just have to run it like:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("greetings\n\n")])])]),a("h2",{attrs:{id:"adding-installation-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-installation-options"}},[t._v("#")]),t._v(" Adding installation options")]),t._v(" "),a("p",[t._v("As seen in previous examples, basic use of this script is:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py install\n\n")])])]),a("p",[t._v("But there is even more options, like installing the package and have the possibility to change the code and test it without having to re-install it. This is done using:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py develop\n\n")])])]),a("p",[t._v("If you want to perform specific actions like compiling a "),a("strong",[t._v("Sphinx")]),t._v(" documentation or building "),a("strong",[t._v("fortran")]),t._v(" code, you can create your own option like this:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("cmdclasses "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildSphinx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Build Sphinx documentation."""')]),t._v("\n\n    description "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Build Sphinx documentation'")]),t._v("\n    user_options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize_options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalize_options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sphinx\n        sphinx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build_main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setup.py'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./doc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./doc/_build/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        sphinx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build_main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setup.py'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'man'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./doc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./doc/_build/man'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncmdclasses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build_sphinx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BuildSphinx\n\nsetup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ncmdclass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cmdclasses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("initialize_options")]),t._v(" and "),a("code",[t._v("finalize_options")]),t._v(" will be executed before and after the "),a("code",[t._v("run")]),t._v(" function as their names suggests it.")]),t._v(" "),a("p",[t._v("After that, you will be able to call your option:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py build_sphinx\n\n")])])]),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Usage")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("name")])]),t._v(" "),a("td",[t._v("Name of your distribution.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("version")])]),t._v(" "),a("td",[t._v("Version string of your distribution.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("packages")])]),t._v(" "),a("td",[t._v("List of Python packages (that is, directories containing modules) to include. This can be specified manually, but a call to "),a("code",[t._v("setuptools.find_packages()")]),t._v(" is typically used instead.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("py_modules")])]),t._v(" "),a("td",[t._v("List of top-level Python modules (that is, single "),a("code",[t._v(".py")]),t._v(" files) to include.")])])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("For further information on python packaging see:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/python/1381/creating-python-packages/4500/introduction#t=201607281303534267585",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("For writing official packages there is a "),a("a",{attrs:{href:"https://packaging.python.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("packaging user guide"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);