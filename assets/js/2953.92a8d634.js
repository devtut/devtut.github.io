(window.webpackJsonp=window.webpackJsonp||[]).push([[2953],{3362:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"run-length-encoding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-length-encoding"}},[t._v("#")]),t._v(" Run-length encoding")]),t._v(" "),s("h2",{attrs:{id:"identifying-and-grouping-by-runs-in-base-r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identifying-and-grouping-by-runs-in-base-r"}},[t._v("#")]),t._v(" Identifying and grouping by runs in base R")]),t._v(" "),s("p",[t._v("One might want to group their data by the runs of a variable and perform some sort of analysis. Consider the following simple dataset:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" data.frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   x y")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 1 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2 1 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3 2 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4 2 4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5 2 5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6 1 6")]),t._v("\n\n")])])]),s("p",[t._v("The variable "),s("code",[t._v("x")]),t._v(" has three runs: a run of length 2 with value 1, a run of length 3 with value 2, and a run of length 1 with value 1. We might want to compute the mean value of variable "),s("code",[t._v("y")]),t._v(" in each of the runs of variable "),s("code",[t._v("x")]),t._v(" (these mean values are 1.5, 4, and 6).")]),t._v(" "),s("p",[t._v("In base R, we would first compute the run-length encoding of the "),s("code",[t._v("x")]),t._v(" variable using "),s("code",[t._v("rle")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run Length Encoding")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   lengths: int [1:3] 2 3 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   values : num [1:3] 1 2 1")]),t._v("\n\n")])])]),s("p",[t._v("The next step is to compute the run number of each row of our dataset. We know that the total number of runs is "),s("code",[t._v("length(r$lengths)")]),t._v(", and the length of each run is "),s("code",[t._v("r$lengths")]),t._v(", so we can compute the run number of each of our runs with "),s("code",[t._v("rep")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run.id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seq_along"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("lengths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("lengths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] 1 1 2 2 2 3")]),t._v("\n\n")])])]),s("p",[t._v("Now we can use "),s("code",[t._v("tapply")]),t._v(" to compute the mean "),s("code",[t._v("y")]),t._v(" value for each run by grouping on the run id:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("data.frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meanY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tapply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" run.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   x meanY")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 1   1.5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2 2   4.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3 1   6.0")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"run-length-encoding-with-rle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-length-encoding-with-rle"}},[t._v("#")]),t._v(" Run-length Encoding with "),s("code",[t._v("rle")])]),t._v(" "),s("p",[t._v("Run-length encoding captures the lengths of runs of consecutive elements in a vector. Consider an example vector:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("dat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("The "),s("code",[t._v("rle")]),t._v(" function extracts each run and its length:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nr\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run Length Encoding")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   lengths: int [1:6] 1 3 1 1 2 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   values : num [1:6] 1 2 3 1 4 1")]),t._v("\n\n")])])]),s("p",[t._v("The values for each run are captured in "),s("code",[t._v("r$values")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("values\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] 1 2 3 1 4 1")]),t._v("\n\n")])])]),s("p",[t._v("This captures that we first saw a run of 1's, then a run of 2's, then a run of 3's, then a run of 1's, and so on.")]),t._v(" "),s("p",[t._v("The lengths of each run are captured in "),s("code",[t._v("r$lengths")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("lengths\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] 1 3 1 1 2 2")]),t._v("\n\n")])])]),s("p",[t._v("We see that the initial run of 1's was of length 1, the run of 2's that followed was of length 3, and so on.")]),t._v(" "),s("h2",{attrs:{id:"run-length-encoding-to-compress-and-decompress-vectors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-length-encoding-to-compress-and-decompress-vectors"}},[t._v("#")]),t._v(" Run-length encoding to compress and decompress vectors")]),t._v(" "),s("p",[t._v("Long vectors with long runs of the same value can be significantly compressed by storing them in their run-length encoding (the value of each run and the number of times that value is repeated). As an example, consider a vector of length 10 million with a huge number of 1's and only a small number of 0's:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("set.seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("144")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" sample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       0       1 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     103 9999897 ")]),t._v("\n\n")])])]),s("p",[t._v("Storing 10 million entries will require significant space, but we can instead create a data frame with the run-length encoding of this vector:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("rle.df "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" with"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data.frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lengths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rle.df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] 207   2")]),t._v("\nhead"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rle.df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   values lengths")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1      1   52818")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2      0       1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3      1  219329")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4      0       1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5      1  318306")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6      0       1")]),t._v("\n\n")])])]),s("p",[t._v("From the run-length encoding, we see that the first 52,818 values in the vector are 1's, followed by a single 0, followed by 219,329 consecutive 1's, followed by a 0, and so on. The run-length encoding only has 207 entries, requiring us to store only 414 values instead of 10 million values. As "),s("code",[t._v("rle.df")]),t._v(" is a data frame, it can be stored using standard functions like "),s("code",[t._v("write.csv")]),t._v(".")]),t._v(" "),s("p",[t._v("Decompressing a vector in run-length encoding can be accomplished in two ways. The first method is to simply call "),s("code",[t._v("rep")]),t._v(", passing the "),s("code",[t._v("values")]),t._v(" element of the run-length encoding as the first argument and the "),s("code",[t._v("lengths")]),t._v(" element of the run-length encoding as the second argument:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("decompressed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rle.df"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rle.df"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("lengths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("We can confirm that our decompressed data is identical to our original data:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("identical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decompressed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] TRUE")]),t._v("\n\n")])])]),s("p",[t._v("The second method is to use R's built-in "),s("code",[t._v("inverse.rle")]),t._v(" function on the "),s("code",[t._v("rle")]),t._v(" object, for instance:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("rle.obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a rle object here")]),t._v("\nclass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rle.obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [1] "rle"')]),t._v("\n\ndat.inv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" inverse.rle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rle.obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apply the inverse.rle on the rle object")]),t._v("\n\n")])])]),s("p",[t._v("We can confirm again that this produces exactly the original "),s("code",[t._v("dat")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("identical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dat.inv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] TRUE")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"identifying-and-grouping-by-runs-in-data-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identifying-and-grouping-by-runs-in-data-table"}},[t._v("#")]),t._v(" Identifying and grouping by runs in data.table")]),t._v(" "),s("p",[t._v("The data.table package provides a convenient way to group by runs in data. Consider the following example data:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("library"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data.table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" data.table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    x y")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1: 1 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2: 1 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3: 2 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4: 2 4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5: 2 5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6: 1 6")]),t._v("\n\n")])])]),s("p",[t._v("The variable "),s("code",[t._v("x")]),t._v(" has three runs: a run of length 2 with value 1, a run of length 3 with value 2, and a run of length 1 with value 1. We might want to compute the mean value of variable "),s("code",[t._v("y")]),t._v(" in each of the runs of variable x (these mean values are 1.5, 4, and 6).")]),t._v(" "),s("p",[t._v("The data.table "),s("code",[t._v("rleid")]),t._v(" function provides an id indicating the run id of each element of a vector:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("rleid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] 1 1 2 2 2 3")]),t._v("\n\n")])])]),s("p",[t._v("One can then easily group on this run ID and summarize the "),s("code",[t._v("y")]),t._v(" data:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("DT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("by"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rleid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    x rleid  V1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1: 1     1 1.5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2: 2     2 4.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3: 1     3 6.0")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v('A run is a consecutive sequence of repeated values or observations. For repeated values, R\'s "run-length encoding" concisely describes a vector in terms of its runs. Consider:')]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("dat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("We have a length-one run of 1s; then a length-three run of 2s; then a length-one run of 3s; and so on. R's run-length encoding captures all the lengths and values of a vector's runs.")]),t._v(" "),s("h3",{attrs:{id:"extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[t._v("#")]),t._v(" Extensions")]),t._v(" "),s("p",[t._v("A run can also refer to consecutive observations in a tabular data. While R doesn't have a natural way of encoding these, they can be handled with "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/data.table/topic-requests/4117",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("rleid")]),t._v(" from the data.table package (currently a dead-end link)"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);