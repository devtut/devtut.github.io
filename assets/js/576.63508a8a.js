(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{984:function(s,t,a){"use strict";a.r(t);var e=a(31),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"inline-assembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline-assembly"}},[s._v("#")]),s._v(" Inline assembly")]),s._v(" "),a("h2",{attrs:{id:"gcc-basic-asm-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc-basic-asm-support"}},[s._v("#")]),s._v(" gcc Basic asm support")]),s._v(" "),a("p",[s._v("Basic assembly support with gcc has the following syntax:")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" AssemblerInstructions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),a("p",[s._v("where "),a("code",[s._v("AssemblerInstructions")]),s._v(" is the direct assembly code for the given processor.  The volatile keyword is optional and has no effect as gcc does not optimize code within a basic asm statement.  "),a("code",[s._v("AssemblerInstructions")]),s._v(" can contain multiple assembly instructions.  A basic asm statement is used if you have an asm routine that must exist outside of a C function.  The following example is from the GCC manual:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\n/* Note that this code will not compile with -masm=intel */\n #define DebugBreak() asm("int $3")\n\n')])])]),a("p",[s._v("In this example, you could then use "),a("code",[s._v("DebugBreak()")]),s._v(" in other places in your code and it will execute the assembly instruction "),a("code",[s._v("int $3")]),s._v(".  Note that even though gcc will not modify any code in a basic asm statement, the optimizer may still move consecutive asm statements around.  If you have multiple assembly instructions that must occur in a specific order, include them in one asm statement.")]),s._v(" "),a("h2",{attrs:{id:"gcc-extended-asm-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc-extended-asm-support"}},[s._v("#")]),s._v(" gcc Extended asm support")]),s._v(" "),a("p",[s._v("Extended asm support in gcc has the following syntax:")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" AssemblerTemplate\n                  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" OutputOperands\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" InputOperands\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Clobbers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("goto")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" AssemblerTemplate\n                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" InputOperands\n                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Clobbers\n                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" GotoLabels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),a("p",[s._v("where "),a("code",[s._v("AssemblerTemplate")]),s._v(" is the template for the assembler instruction, "),a("code",[s._v("OutputOperands")]),s._v(" are any C variables that can be modified by the assembly code, "),a("code",[s._v("InputOperands")]),s._v(" are any C variables used as input parameters, "),a("code",[s._v("Clobbers")]),s._v(" are a list or registers that are modified by the assembly code, and "),a("code",[s._v("GotoLabels")]),s._v(" are any goto statement labels that may be used in the assembly code.")]),s._v(" "),a("p",[s._v("The extended format is used within C functions and is the more typical usage of inline assembly.  Below is an example from the Linux kernel for byte swapping 16-bit and 32-bit numbers for an ARM processor:")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* From arch/arm/include/asm/swab.h in Linux kernel version 4.6.4 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("__LINUX_ARM_ARCH__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")])])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inline")]),s._v(" __attribute_const__ __u32 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__arch_swahb32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__u32 x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__asm__")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rev16 %0, %1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("__arch_swahb32")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("__arch_swahb32")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("__arch_swab16")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__u16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__arch_swahb32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inline")]),s._v(" __attribute_const__ __u32 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__arch_swab32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__u32 x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__asm__")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rev %0, %1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("__arch_swab32")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("__arch_swab32")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n\n")])])]),a("p",[s._v("Each asm section uses the variable "),a("code",[s._v("x")]),s._v(" as its input and output parameter.  The C function then returns the manipulated result.")]),s._v(" "),a("p",[s._v("With the extended asm format, gcc may optimize the assembly instructions in an asm block following the same rules it uses for optimizing C code.  If you want your asm section to remain untouched, use the "),a("code",[s._v("volatile")]),s._v(" keyword for the asm section.")]),s._v(" "),a("h2",{attrs:{id:"gcc-inline-assembly-in-macros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc-inline-assembly-in-macros"}},[s._v("#")]),s._v(" gcc Inline assembly in macros")]),s._v(" "),a("p",[s._v("We can put assembly instructions inside a macro\nand use the macro like you would call a function.")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("mov")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__asm__")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"l.cmov %0,%1,%2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x0000000F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// some definition and assignment")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" sbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" sbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("///Using")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mov")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("si"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("Using inline assembly instructions embedded in C code can improve the run time\nof a program. This is very helpful in time critical situations like cryptographic algorithms such as AES. For example, for a simple shift operation that is needed in the AES algorithm, we can substitute a direct "),a("code",[s._v("Rotate Right")]),s._v(" assembly instruction with C shift operator "),a("code",[s._v(">>")]),s._v(".")]),s._v(" "),a("p",[s._v("In an implementation of 'AES256', in 'AddRoundKey()' function we have some statements like this:")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 32-bit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" subkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8-bit, 4*8 = 32 ")]),s._v("\n\nsubkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" w "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hold 8 bit, MSB, leftmost group of 8-bits ")]),s._v("\nsubkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" w "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hold 8 bit, second group of 8-bit from left    ")]),s._v("\nsubkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" w "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hold 8 bit, second group of 8-bit from right")]),s._v("\nsubkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hold 8 bit, LSB, rightmost group of 8-bits")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// subkey <- w")]),s._v("\n\n")])])]),a("p",[s._v("They simply assign the bit value of "),a("code",[s._v("w")]),s._v(" to "),a("code",[s._v("subkey")]),s._v(" array.")]),s._v(" "),a("p",[s._v("We can change three shift + assign and one assign C expression with only\none assembly "),a("code",[s._v("Rotate Right")]),s._v(" operation.")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__asm__")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"l.ror  %0,%1,%2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" subkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("The final result is exactly same.")]),s._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),a("p",[s._v("Inline assembly is the practice of adding assembly instructions in the middle of C source code.  No ISO C standard requires support of inline assembly.  Since it is not required, the syntax for inline assembly varies from compiler to compiler.  Even though it is typically supported there are very few reasons to use inline assembly and many reasons not to.")]),s._v(" "),a("h3",{attrs:{id:"pros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pros"}},[s._v("#")]),s._v(" Pros")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("Performance")]),s._v(" By writing the specific assembly instructions for an operation, you can achieve better performance than the assembly code generated by the compiler.  Note that these performance gains are rare.  In most cases you can achieve better performance gains just by rearranging your C code so the optimizer can do its job.")]),s._v(" "),a("li",[a("strong",[s._v("Hardware interface")]),s._v("  Device driver or processor startup code may need some assembly code to access the correct registers and to guarantee certain operations occur in a specific order with a specific delay between operations.")])]),s._v(" "),a("h3",{attrs:{id:"cons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cons"}},[s._v("#")]),s._v(" Cons")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("Compiler Portability")]),s._v(" Syntax for inline assembly is not guaranteed to be the same from one compiler to another.  If you are writing code with inline assembly that should be supported by different compilers, use preprocessor macros ("),a("code",[s._v("#ifdef")]),s._v(") to check which compiler is being used.  Then, write a separate inline assembly section for each supported compiler.")]),s._v(" "),a("li",[a("strong",[s._v("Processor Portability")]),s._v(" You can't write inline assembly for an x86 processor and expect it to work on an ARM processor.  Inline assembly is intended to be written for a specific processor or processor family.  If you have inline assembly that you want supported on different processors, use preprocessor macros to check which processor the code is being compiled for and to select the appropriate assembly code section.")]),s._v(" "),a("li",[a("strong",[s._v("Future Performance Changes")]),s._v(" Inline assembly may be written expecting delays based upon a certain processor clock speed.  If the program is compiled for a processor with a faster clock, the assembly code may not perform as expected.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);