(window.webpackJsonp=window.webpackJsonp||[]).push([[2435],{2842:function(e,o,t){"use strict";t.r(o);var i=t(31),n=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"compile-php-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-php-extensions"}},[e._v("#")]),e._v(" Compile PHP Extensions")]),e._v(" "),t("h2",{attrs:{id:"compiling-on-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiling-on-linux"}},[e._v("#")]),e._v(" Compiling on Linux")]),e._v(" "),t("p",[e._v("To compile a PHP extension in a typical Linux environment, there are a few pre-requisites:")]),e._v(" "),t("ul",[t("li",[e._v('Basic Unix skills (being able to operate "make" and a C compiler)')]),e._v(" "),t("li",[e._v("An ANSI C compiler")]),e._v(" "),t("li",[e._v("The source code for the PHP extension you want to compile")])]),e._v(" "),t("p",[e._v("Generally there are two ways to compile a PHP extension. You can "),t("strong",[e._v("statically")]),e._v(" compile the extension into the PHP binary, or compile it as a "),t("strong",[e._v("shared")]),e._v(" module loaded by your PHP binary at startup. Shared modules are more likely since they allow you to add or remove extensions without rebuilding the entire PHP binary. This example focuses on the shared option.")]),e._v(" "),t("p",[e._v("If you installed PHP via your package manager ("),t("code",[e._v("apt-get install")]),e._v(", "),t("code",[e._v("yum install")]),e._v(", etc..) you will need to install the "),t("code",[e._v("-dev")]),e._v(" package for PHP, which will include the necessary PHP header files and phpize script for the build environment to work. The package might be named something like "),t("code",[e._v("php5-dev")]),e._v(" or "),t("code",[e._v("php7-dev")]),e._v(", but be sure to use your package manager to search for the appropriate name using your distro's repositories. They can differ.")]),e._v(" "),t("p",[e._v("If you built PHP from source the header files most likely already exist on your system ("),t("strong",[e._v("usually")]),e._v(" in "),t("code",[e._v("/usr/include")]),e._v(" or "),t("code",[e._v("/usr/local/include")]),e._v(").")]),e._v(" "),t("h3",{attrs:{id:"steps-to-compile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-compile"}},[e._v("#")]),e._v(" Steps to compile")]),e._v(" "),t("p",[e._v("After you check to make sure you have all the prerequisites, necessary to compile, in place you can head over to "),t("a",{attrs:{href:"http://pecl.php.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("pecl.php.net"),t("OutboundLink")],1),e._v(", select an extension you wish to compile, and download the tar ball.")]),e._v(" "),t("ol",[t("li",[e._v("Unpack the tar ball (e.g. "),t("code",[e._v("tar xfvz yaml-2.0.0RC8.tgz")]),e._v(")")]),e._v(" "),t("li",[e._v("Enter the directory where the archive was unpacked and run "),t("code",[e._v("phpize")])]),e._v(" "),t("li",[e._v("You should now see a newly created "),t("code",[e._v(".configure")]),e._v(" script if all went well, run that "),t("code",[e._v("./configure")])]),e._v(" "),t("li",[e._v("Now you will need to run "),t("code",[e._v("make")]),e._v(", which will compile the extension")]),e._v(" "),t("li",[e._v("Finally, "),t("code",[e._v("make install")]),e._v(" will copy the compiled extension binary to your extension directory")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("make install")]),e._v(" step will typically provide the installation path for you where the extension was copied. This is "),t("strong",[e._v("usually")]),e._v(" in "),t("code",[e._v("/usr/lib/")]),e._v(", for example it might be something like "),t("code",[e._v("/usr/lib/php5/20131226/yaml.so")]),e._v(". But this depends on your configuration of PHP (i.e. "),t("code",[e._v("--with-prefix")]),e._v(") and specific API version. The API number is included in the path to keep extensions built for different API versions in separate locations.")]),e._v(" "),t("h3",{attrs:{id:"loading-the-extension-in-php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-the-extension-in-php"}},[e._v("#")]),e._v(" Loading the Extension in PHP")]),e._v(" "),t("p",[e._v("To load the extension in PHP, find your loaded php.ini file for the appropriate SAPI, and add the line "),t("code",[e._v("extension=yaml.so")]),e._v(" then restart PHP. Change "),t("code",[e._v("yaml.so")]),e._v(" to the name of the actual extension you installed, of course.")]),e._v(" "),t("p",[e._v("For a Zend extension you do need to provide the full path to the shared object file. However, for normal PHP extensions this path derived from the "),t("a",{attrs:{href:"http://php.net/ini.core#ini.extension-dir",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("extension_dir")]),t("OutboundLink")],1),e._v(" directive in your loaded configuration, or from the "),t("code",[e._v("$PATH")]),e._v(" environment during initial setup.")])])}),[],!1,null,null,null);o.default=n.exports}}]);