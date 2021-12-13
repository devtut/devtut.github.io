(window.webpackJsonp=window.webpackJsonp||[]).push([[2892],{3300:function(t,e,a){"use strict";a.r(e);var r=a(31),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started-with-r-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-r-language"}},[t._v("#")]),t._v(" Getting started with R Language")]),t._v(" "),a("h2",{attrs:{id:"installing-r"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-r"}},[t._v("#")]),t._v(" Installing R")]),t._v(" "),a("p",[t._v("You might wish to install "),a("a",{attrs:{href:"https://www.rstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RStudio"),a("OutboundLink")],1),t._v(" after you have installed R. RStudio is a development environment for R that simplifies many programming tasks.")]),t._v(" "),a("h3",{attrs:{id:"windows-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-only"}},[t._v("#")]),t._v(" Windows only:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio"),a("OutboundLink")],1),t._v(" (starting from version 2015 Update 3) now features a development environment for R called "),a("a",{attrs:{href:"https://www.visualstudio.com/vs/rtvs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("R Tools"),a("OutboundLink")],1),t._v(", that includes a live interpreter, IntelliSense, and a debugging module. If you choose this method, you won't have to install R as specified in the following section.")]),t._v(" "),a("h3",{attrs:{id:"for-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-windows"}},[t._v("#")]),t._v(" For Windows")]),t._v(" "),a("ol",[a("li",[t._v("Go to the "),a("a",{attrs:{href:"https://cran.r-project.org/bin/windows/base/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRAN"),a("OutboundLink")],1),t._v(" website, click on download R for Windows, and download the latest version of R.")]),t._v(" "),a("li",[t._v("Right-click the installer file and RUN as administrator.")]),t._v(" "),a("li",[t._v("Select the operational language for installation.")]),t._v(" "),a("li",[t._v("Follow the instructions for installation.")])]),t._v(" "),a("h3",{attrs:{id:"for-osx-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-osx-macos"}},[t._v("#")]),t._v(" For OSX / macOS")]),t._v(" "),a("h3",{attrs:{id:"alternative-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-1"}},[t._v("#")]),t._v(" Alternative 1")]),t._v(" "),a("p",[t._v("(0. Ensure "),a("a",{attrs:{href:"https://www.xquartz.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XQuartz"),a("OutboundLink")],1),t._v(" is installed )")]),t._v(" "),a("ol",[a("li",[t._v("Go to the "),a("a",{attrs:{href:"https://cran.r-project.org/bin/macosx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRAN"),a("OutboundLink")],1),t._v(" website and download the latest version of R.")]),t._v(" "),a("li",[t._v("Open the disk image and run the installer.")]),t._v(" "),a("li",[t._v("Follow the instructions for installation.")])]),t._v(" "),a("p",[t._v("This will install both R and the R-MacGUI. It will put the GUI in the /Applications/ Folder as R.app where it can either be double-clicked or dragged to the Doc. When a new version is released, the (re)-installation process will overwrite R.app but prior major versions of R will be maintained. The actual R code will be in the /Library/Frameworks/R.Framework/Versions/ directory. Using R within RStudio is also possible and would be using the same R code with a different GUI.")]),t._v(" "),a("h3",{attrs:{id:"alternative-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-2"}},[t._v("#")]),t._v(" Alternative 2")]),t._v(" "),a("ol",[a("li",[t._v("Install homebrew (the missing package manager for macOS) by following the instructions on "),a("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://brew.sh/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("brew install R")])])]),t._v(" "),a("p",[t._v("Those choosing the second method should be aware that the maintainer of the Mac fork advises against it, and will not respond to questions about difficulties on the R-SIG-Mac Mailing List.")]),t._v(" "),a("h3",{attrs:{id:"for-debian-ubuntu-and-derivatives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-debian-ubuntu-and-derivatives"}},[t._v("#")]),t._v(" For Debian, Ubuntu and derivatives")]),t._v(" "),a("p",[t._v("You can get the version of R corresponding to your distro via "),a("code",[t._v("apt-get")]),t._v('. However, this version will frequently be quite far behind the most recent version available on CRAN. You can add CRAN to your list of recognized "sources".')]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("sudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("get install r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("base\n\n")])])]),a("p",[t._v("You can get a more recent version directly from CRAN by adding CRAN to your sources list.  Follow the "),a("a",{attrs:{href:"http://cran.us.r-project.org/bin/linux/ubuntu/README.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("directions"),a("OutboundLink")],1),t._v(" from CRAN for more details. Note in particular the need to also execute this so that you can use "),a("code",[t._v("install.packages()")]),t._v(". Linux packages are usually distributed as source files and need compilation:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("sudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("get install r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n\n")])])]),a("h3",{attrs:{id:"for-red-hat-and-fedora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-red-hat-and-fedora"}},[t._v("#")]),t._v(" For Red Hat and Fedora")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("sudo dnf install R\n\n")])])]),a("h3",{attrs:{id:"for-archlinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-archlinux"}},[t._v("#")]),t._v(" For Archlinux")]),t._v(" "),a("p",[t._v("R is directly available in the "),a("code",[t._v("Extra")]),t._v(" package repo.")]),t._v(" "),a("p",[t._v("More info on using R under Archlinux can be found on the "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/R",target:"_blank",rel:"noopener noreferrer"}},[t._v("ArchWiki R page"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" Hello World!")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v("\n\n")])])]),a("p",[t._v("Also, check out "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/5541/reading-and-writing-text-strings/1221/printing-and-displaying-text#t=201608181943557669031",target:"_blank",rel:"noopener noreferrer"}},[t._v("the detailed discussion of how, when, whether and why to print a string"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"getting-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-help"}},[t._v("#")]),t._v(" Getting Help")]),t._v(" "),a("p",[t._v("You can use function "),a("code",[t._v("help()")]),t._v(" or "),a("code",[t._v("?")]),t._v(" to access documentations and search for help in R. For even more general searches, you can use "),a("code",[t._v("help.search()")]),t._v(" or "),a("code",[t._v("??")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#For help on the help function of R")]),t._v("\nhelp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#For help on the paste function")]),t._v("\nhelp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paste"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#OR")]),t._v("\nhelp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paste"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#OR")]),t._v("\n?paste         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#OR")]),t._v("\n?"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paste"')]),t._v("\n\n")])])]),a("p",[t._v("Visit "),a("a",{attrs:{href:"https://www.r-project.org/help.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.r-project.org/help.html"),a("OutboundLink")],1),t._v(" for additional information")]),t._v(" "),a("h2",{attrs:{id:"interactive-mode-and-r-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactive-mode-and-r-scripts"}},[t._v("#")]),t._v(" Interactive mode and R scripts")]),t._v(" "),a("h3",{attrs:{id:"the-interactive-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-interactive-mode"}},[t._v("#")]),t._v(" The interactive mode")]),t._v(" "),a("p",[t._v("The most basic way to use R is the "),a("strong",[t._v("interactive")]),t._v(" mode. You type commands and immediately get the result from R.")]),t._v(" "),a("h3",{attrs:{id:"using-r-as-a-calculator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-r-as-a-calculator"}},[t._v("#")]),t._v(" Using R as a calculator")]),t._v(" "),a("p",[t._v("Start R by typing "),a("code",[t._v("R")]),t._v(" at the command prompt of your operating system or by executing "),a("code",[t._v("RGui")]),t._v(" on Windows. Below you can see a screenshot of an interactive R session on Linux:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/uHqS3.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/uHqS3.png",alt:"Screenshot of a linux terminal executing R"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("This is RGui on Windows, the most basic working environment for R under Windows:\n"),a("a",{attrs:{href:"https://i.stack.imgur.com/2hsAR.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/2hsAR.png",alt:"Screenshot of a RGui terminal on Windows"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("After the "),a("code",[t._v(">")]),t._v(" sign, expressions can be typed in. Once an expression is typed, the result is shown by R. In the screenshot above, R is used as a calculator: Type")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),a("p",[t._v("to immediately see the result, "),a("code",[t._v("2")]),t._v(". The leading "),a("code",[t._v("[1]")]),t._v(" indicates that R returns a vector. In this case, the vector contains only one number (2).")]),t._v(" "),a("h3",{attrs:{id:"the-first-plot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-first-plot"}},[t._v("#")]),t._v(" The first plot")]),t._v(" "),a("p",[t._v("R can be used to generate plots. The following example uses the data set "),a("code",[t._v("PlantGrowth")]),t._v(", which comes as an example data set along with R")]),t._v(" "),a("p",[t._v("Type int the following all lines into the R prompt which do not start with "),a("code",[t._v("##")]),t._v(". Lines starting with "),a("code",[t._v("##")]),t._v(" are meant to document the result which R will return.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PlantGrowth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PlantGrowth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 'data.frame':    30 obs. of  2 variables:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## $ weight: num  4.17 5.58 5.18 6.11 4.5 4.61 5.17 4.53 5.33 5.14 ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## $ group : Factor w/ 3 levels "ctrl","trt1",..: 1 1 1 1 1 1 1 1 1 1 ...')]),t._v("\nanova"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PlantGrowth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Analysis of Variance Table")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Response: weight")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##           Df  Sum Sq Mean Sq F value  Pr(>F)  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## group      2  3.7663  1.8832  4.8461 0.01591 *")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Residuals 27 10.4921  0.3886                  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1")]),t._v("\nboxplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PlantGrowth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ylab "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dry weight"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("The following plot is created:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/fssq4.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/fssq4.png",alt:"Boxplot, created from the PlantGrowth example data set"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("data(PlantGrowth)")]),t._v(" loads the example data set "),a("code",[t._v("PlantGrowth")]),t._v(", which is records of dry masses of plants which were subject to two different treatment conditions or no treatment at all (control group). The data set is made available under the name "),a("code",[t._v("PlantGrowth")]),t._v(". Such a name is also called a "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/9013/variables#t=201703202048433892161",target:"_blank",rel:"noopener noreferrer"}},[t._v("Variable"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To load your own data, the following two documentation pages might be helpful:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/481/reading-and-writing-tabular-data-in-plain-text-files-csv-tsv-etc#t=201703202036309470083",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reading and writing tabular data in plain-text files (CSV, TSV, etc.)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/5536/i-o-for-foreign-tables-excel-sas-spss-stata#t=201703202035257131862",target:"_blank",rel:"noopener noreferrer"}},[t._v("I/O for foreign tables (Excel, SAS, SPSS, Stata)"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("str(PlantGrowth)")]),t._v(" shows information about the data set which was loaded. The output indicates that "),a("code",[t._v("PlantGrowth")]),t._v(" is a "),a("code",[t._v("data.frame")]),t._v(", which is R's name for a table. The "),a("code",[t._v("data.frame")]),t._v(" contains of two columns and 30 rows. In this case, each row corresponds to one plant. Details of the two columns are shown in the lines starting with "),a("code",[t._v("$")]),t._v(": The first column is called "),a("code",[t._v("weight")]),t._v(" and contains\nnumbers ("),a("code",[t._v("num")]),t._v(", the dry weight of the respective plant). The second column, "),a("code",[t._v("group")]),t._v(", contains the treatment that the plant was subjected to. This is categorial data, which is called "),a("code",[t._v("factor")]),t._v(" in R.\n"),a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/438/data-frames#t=201703202042442838867",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more information about data frames"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To compare the dry masses of the three different groups, a one-way ANOVA is performed using "),a("code",[t._v("anova(lm( ... ))")]),t._v(". "),a("code",[t._v("weight ~ group")]),t._v(' means "Compare the values of the column '),a("code",[t._v("weight")]),t._v(", grouping by the values of the column "),a("code",[t._v("group")]),t._v('". This is called a '),a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/1061/formula#t=201703202051107370356",target:"_blank",rel:"noopener noreferrer"}},[t._v("Formula"),a("OutboundLink")],1),t._v(" in R.\n"),a("code",[t._v("data = ...")]),t._v(" specifies the name of the table where the data can be found.")]),t._v(" "),a("p",[t._v("The result shows, among others, that there exists a significant difference (Column "),a("code",[t._v("Pr(>F)")]),t._v("), "),a("code",[t._v("p = 0.01591")]),t._v(") between some of the three groups. Post-hoc tests, like Tukey's Test, must be performed to determine which groups' means differ significantly.")]),t._v(" "),a("p",[a("code",[t._v("boxplot(...)")]),t._v(" creates a box plot of the data.  where the values to be plotted come from. "),a("code",[t._v("weight ~ group")]),t._v(' means: "Plot the values of the column weight '),a("strong",[t._v("versus")]),t._v(" the values of the column "),a("code",[t._v("group")]),t._v(". "),a("code",[t._v("ylab = ...")]),t._v(" specifies the label of the y axis. More information: "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/1377/base-plotting#t=201703202053421042418",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base plotting"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Type "),a("code",[t._v("q()")]),t._v(" or "),a("kbd",[t._v("Ctrl")]),t._v("-"),a("kbd",[t._v("D")]),t._v(" to exit from the R session.")]),t._v(" "),a("h3",{attrs:{id:"r-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-scripts"}},[t._v("#")]),t._v(" R scripts")]),t._v(" "),a("p",[t._v("To document your research, it is favourable to save the commands you use for calculation in a file. For that effect, you can create "),a("strong",[t._v("R scripts")]),t._v(". An R script is a simple text file, containing R commands.")]),t._v(" "),a("p",[t._v("Create a text file with the name "),a("code",[t._v("plants.R")]),t._v(", and fill it with the following text, where some commands are familiar from the code block above:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PlantGrowth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nanova"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PlantGrowth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plant_boxplot.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nboxplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PlantGrowth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ylab "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dry weight"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndev.off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n\n")])])]),a("p",[t._v("Execute the script by typing into your terminal (The terminal of your operating system, "),a("strong",[t._v("not")]),t._v(" an interactive R session like in the previous section!)")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("R "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("save "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("plant.R "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("plant_result.txt\n\n")])])]),a("p",[t._v("The file "),a("code",[t._v("plant_result.txt")]),t._v(" contains the results of your calculation, as if you had typed them into the interactive R prompt. Thereby, your calculations are documented.")]),t._v(" "),a("p",[t._v("The new commands "),a("code",[t._v("png")]),t._v(" and "),a("code",[t._v("dev.off")]),t._v(" are used for saving the boxplot to disk. The two commands must enclose the plotting command, as shown in the example above. "),a("code",[t._v('png("FILENAME", width = ..., height = ...)')]),t._v(" opens a new PNG file with the specified file name, width and height in pixels. "),a("code",[t._v("dev.off()")]),t._v(" will finish plotting and saves the plot to disk. No output is saved until "),a("code",[t._v("dev.off()")]),t._v(" is called.")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("h3",{attrs:{id:"editing-r-docs-on-stack-overflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing-r-docs-on-stack-overflow"}},[t._v("#")]),t._v(" Editing R Docs on Stack Overflow")]),t._v(" "),a("p",[t._v("See the "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/5410/meta-documentation-guidelines#t=201608111658158162781",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation guidelines"),a("OutboundLink")],1),t._v(" for general rules when creating documentation.")]),t._v(" "),a("h3",{attrs:{id:"a-few-features-of-r-that-immigrants-from-other-language-may-find-unusual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-few-features-of-r-that-immigrants-from-other-language-may-find-unusual"}},[t._v("#")]),t._v(" A few features of R that immigrants from other language may find unusual")]),t._v(" "),a("ul",[a("li",[t._v("Unlike other languages variables in R need not require type declaration.\n")]),a("li",[t._v("The same variable can be assigned  different data types at different\ninstances of time, if required.")]),t._v(" "),a("li",[t._v("Indexing of atomic vectors and lists starts from 1, not 0.")]),t._v(" "),a("li",[t._v("R "),a("code",[t._v("arrays")]),t._v(" (and the special case of matrices) have a "),a("code",[t._v("dim")]),t._v(' attribute that sets them apart from R\'s "atomic vectors" which have no attributes.')]),t._v(" "),a("li",[t._v("A list in R allows you to gather a variety of objects under one name (that is, the name of the list) in an ordered way. These objects can be "),a("strong",[t._v("matrices")]),t._v(", "),a("strong",[t._v("vectors")]),t._v(", "),a("strong",[t._v("data frames")]),t._v(", "),a("strong",[t._v("even other lists")]),t._v(", etc. It is not even required that these objects are related to each other in any way.")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/5649/recycling#t=201702071755160741896",target:"_blank",rel:"noopener noreferrer"}},[t._v("Recycling"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/3388",target:"_blank",rel:"noopener noreferrer"}},[t._v("Missing values"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);