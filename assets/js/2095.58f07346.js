(window.webpackJsonp=window.webpackJsonp||[]).push([[2095],{2504:function(e,a,t){"use strict";t.r(a);var s=t(31),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"configuration-and-tuning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-and-tuning"}},[e._v("#")]),e._v(" Configuration and tuning")]),e._v(" "),t("h2",{attrs:{id:"innodb-performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-performance"}},[e._v("#")]),e._v(" InnoDB performance")]),e._v(" "),t("p",[e._v("There are hundreds of settings that can be placed in my.cnf.  For the 'lite' user of MySQL, they won't matter as much.")]),e._v(" "),t("p",[e._v("Once your database becomes non-trivial, it is advisable to set the following parameters:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("innodb_buffer_pool_size\n\n")])])]),t("p",[e._v("This should be set to about 70% of "),t("strong",[e._v("available")]),e._v(" RAM (if you have at least 4GB of RAM; a smaller percentage if you have a tiny VM or antique machine).  The setting controls the amount of cache used by the InnoDB ENGINE.  Hence, it is very important for performance of InnoDB.")]),e._v(" "),t("h2",{attrs:{id:"parameter-to-allow-huge-data-to-insert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-to-allow-huge-data-to-insert"}},[e._v("#")]),e._v(" Parameter to allow huge data to insert")]),e._v(" "),t("p",[e._v("If you need to store images or videos in the column then we need to change the value as needed by your application")]),e._v(" "),t("p",[e._v("max_allowed_packet = 10M")]),e._v(" "),t("p",[e._v("M is Mb, G in Gb, K in Kb")]),e._v(" "),t("h2",{attrs:{id:"increase-the-string-limit-for-group-concat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increase-the-string-limit-for-group-concat"}},[e._v("#")]),e._v(" Increase the string limit for group_concat")]),e._v(" "),t("p",[t("code",[e._v("group_concat")]),e._v(" is used to concatenate non-null values in a "),t("code",[e._v("group")]),e._v(". The maximum length of the resulting string can be set using the "),t("code",[e._v("group_concat_max_len")]),e._v(" option:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GLOBAL")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SESSION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" group_concat_max_len "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),t("p",[e._v("Setting the "),t("code",[e._v("GLOBAL")]),e._v(" variable will ensure a permanent change, whereas setting the "),t("code",[e._v("SESSION")]),e._v(" variable will set the value for the current session.")]),e._v(" "),t("h2",{attrs:{id:"minimal-innodb-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimal-innodb-configuration"}},[e._v("#")]),e._v(" Minimal InnoDB configuration")]),e._v(" "),t("p",[e._v("This is a bare minimum setup for MySQL servers using InnoDB tables. Using InnoDB, query cache is not required. Reclaim disk space when a table or database is "),t("code",[e._v("DROP")]),e._v("ed. If you're using SSDs, flushing is a redundant operation (SDDs are not sequential).")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("default_storage_engine "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("InnoDB")]),e._v("\nquery_cache_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\ninnodb_file_per_table "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\ninnodb_flush_neighbors "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n\n")])])]),t("p",[t("strong",[e._v("Concurrency")])]),e._v(" "),t("p",[e._v("Make sure we can create more than than the default 4 threads by setting "),t("code",[e._v("innodb_thread_concurrency")]),e._v(" to infinity (0); this lets InnoDB decide based on optimal execution.")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("innodb_thread_concurrency "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\ninnodb_read_io_threads "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("\ninnodb_write_io_threads "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("\n\n")])])]),t("p",[t("strong",[e._v("Hard drive utilization")])]),e._v(" "),t("p",[e._v("Set the capacity (normal load) and capacity_max (absolute maximum) of IOPS for MySQL. The default of 200 is fine for HDDs, but these days, with SSDs capable of thousands of IOPS, you are likely to want to adjust this number. There are many tests you can run to determine IOPS. The values above should be nearly that limit "),t("strong",[e._v("if you are running a dedicated MySQL server")]),e._v(". If you are running any other services on the same machine, you should apportion as appropriate.")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("innodb_io_capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2500")]),e._v("\ninnodb_io_capacity_max "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3000")]),e._v("\n\n")])])]),t("p",[t("strong",[e._v("RAM utilization")])]),e._v(" "),t("p",[e._v("Set the RAM available to MySQL. Whilst the rule of thumb is 70-80%, this really depends on whether or not your instance is dedicated to MySQL, and how much RAM is available. Don't "),t("strong",[e._v("waste")]),e._v(" RAM (i.e. resources) if you have a lot available.")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("innodb_buffer_pool_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("G\n\n")])])]),t("h2",{attrs:{id:"secure-mysql-encryption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secure-mysql-encryption"}},[e._v("#")]),e._v(" Secure MySQL encryption")]),e._v(" "),t("p",[e._v("The default encryption "),t("code",[e._v("aes-128-ecb")]),e._v(" uses Electronic Codebook (ECB) mode, which is insecure and should never be used. Instead, add the following to your configuration file:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("block_encryption_mode "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" aes"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("256")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("cbc\n\n")])])]),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),t("p",[e._v("Configuration happens in one of 3 ways:")]),e._v(" "),t("ul",[t("li",[e._v("command line options")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("my.cnf")]),e._v(" configuration file")]),e._v(" "),t("li",[e._v("setting variables from within the server")])]),e._v(" "),t("p",[e._v("Command Line options takes the form "),t("code",[e._v("mysqld --long-parameter-name=value --another-parameter")]),e._v(". The same parameters can be placed in the "),t("code",[e._v("my.conf")]),e._v(" configuration file. "),t("strong",[e._v("Some")]),e._v(" parameters are configurable using system variables from within MySQL. Check the official documentation for a complete list of parameters.")]),e._v(" "),t("p",[e._v("Variables can have dash "),t("code",[e._v("-")]),e._v(" or underscore "),t("code",[e._v("_")]),e._v(".  Spaces may exist around the "),t("code",[e._v("=")]),e._v(".  Large numbers can be suffixed by "),t("code",[e._v("K")]),e._v(", "),t("code",[e._v("M")]),e._v(", "),t("code",[e._v("G")]),e._v(" for kilo-, mega-, and giga-.  One setting per line.")]),e._v(" "),t("p",[e._v("Flags:  Usually "),t("code",[e._v("ON")]),e._v(" and "),t("code",[e._v("1")]),e._v(" are synonymous, ditto for "),t("code",[e._v("OFF")]),e._v(" and "),t("code",[e._v("0")]),e._v(".  Some flags have nothing after them.")]),e._v(" "),t("p",[e._v("When placing the settings in "),t("code",[e._v("my.cnf")]),e._v(", all settings for the "),t("strong",[e._v("server")]),e._v(" must be in the "),t("code",[e._v("[mysqld]")]),e._v(" section, so don't blindly add settings to the end of the file.  (Note: For tools that allow multiple mysql instances to share one my.cnf, the section names may be different.)")])])}),[],!1,null,null,null);a.default=n.exports}}]);