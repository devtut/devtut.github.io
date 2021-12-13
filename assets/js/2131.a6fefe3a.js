(window.webpackJsonp=window.webpackJsonp||[]).push([[2131],{2539:function(e,t,o){"use strict";o.r(t);var n=o(31),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"mysql-performance-tips"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mysql-performance-tips"}},[e._v("#")]),e._v(" Mysql Performance Tips")]),e._v(" "),o("h2",{attrs:{id:"optimizing-storage-layout-for-innodb-tables"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-storage-layout-for-innodb-tables"}},[e._v("#")]),e._v(" Optimizing Storage Layout for InnoDB Tables")]),e._v(" "),o("li",[e._v("In InnoDB, having a long PRIMARY KEY (either a single column with a\nlengthy value, or several columns that form a long composite value)\nwastes a lot of disk space. The primary key value for a row is duplicated in all the secondary index records that point to the same\nrow. Create an AUTO_INCREMENT column as the primary key if your\nprimary key is long.")]),e._v(" "),o("li",[e._v("Use the VARCHAR data type instead of CHAR to store variable-length\nstrings or for columns with many NULL values. A CHAR(N) column\nalways takes N characters to store data, even if the string is\nshorter or its value is NULL. Smaller tables fit better in the\nbuffer pool and reduce disk I/O.")]),e._v(" "),o("blockquote"),e._v(" "),o("p",[e._v("When using COMPACT row format (the default InnoDB format) and\nvariable-length character sets, such as utf8 or sjis, CHAR(N) columns\noccupy a variable amount of space, but still at least N bytes.")]),e._v(" "),o("li",[e._v("For tables that are big, or contain lots of repetitive text or\nnumeric data, consider using COMPRESSED row format. Less disk I/O is\nrequired to bring data into the buffer pool, or to perform full\ntable scans. Before making a permanent decision, measure the amount\nof compression you can achieve by using COMPRESSED versus COMPACT\nrow format.  **Caveat:**  Benchmarks rarely show better than 2:1 compression\nand there is a lot of overhead in the buffer_pool for COMPRESSED.")]),e._v(" "),o("li",[e._v("Once your data reaches a stable size, or a growing table has\nincreased by tens or some hundreds of megabytes, consider using the\nOPTIMIZE TABLE statement to reorganize the table and compact any\nwasted space. The reorganized tables require less disk I/O to\nperform full table scans. This is a straightforward technique that\ncan improve performance when other techniques such as improving\nindex usage or tuning application code are not practical.\n**Caveat**:  Regardless of table size, OPTIMIZE TABLE should only rarely be performed.\nThis is because it is costly, and rarely improves the table enough to be worth it.\nInnoDB is reasonably good at keeping its B+Trees free of a lot of wasted space.")]),e._v(" "),o("blockquote"),e._v(" "),o("p",[e._v("OPTIMIZE TABLE copies the data part of the table and rebuilds the\nindexes. The benefits come from improved packing of data within\nindexes, and reduced fragmentation within the tablespaces and on disk.\nThe benefits vary depending on the data in each table. You may find\nthat there are significant gains for some and not for others, or that\nthe gains decrease over time until you next optimize the table. This\noperation can be slow if the table is large or if the indexes being\nrebuilt do not fit into the buffer pool. The first run after adding a\nlot of data to a table is often much slower than later runs.")]),e._v(" "),o("h2",{attrs:{id:"building-a-composite-index"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-a-composite-index"}},[e._v("#")]),e._v(" Building a composite index")]),e._v(" "),o("p",[e._v("In many situations, a composite index performs better than an index with a single column.  To build an optimal composite index, populate it with columns in this order.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("=")]),e._v(" column(s) from the "),o("code",[e._v("WHERE")]),e._v(" clause first.  (eg, "),o("code",[e._v("INDEX(a,b,...)")]),e._v(" for "),o("code",[e._v("WHERE a=12 AND b='xyz' ...")]),e._v(")")]),e._v(" "),o("li",[o("code",[e._v("IN")]),e._v(" column(s); the optimizer may be able to leapfrog through the index.")]),e._v(" "),o("li",[e._v('One "range"  (eg '),o("code",[e._v("x BETWEEN 3 AND 9")]),e._v(", "),o("code",[e._v("name LIKE 'J%'")]),e._v(") It won't use anything past the first range column.")]),e._v(" "),o("li",[e._v("All the columns in "),o("code",[e._v("GROUP BY")]),e._v(", in order")]),e._v(" "),o("li",[e._v("All the columns in "),o("code",[e._v("ORDER BY")]),e._v(", in order.  Works only if all are "),o("code",[e._v("ASC")]),e._v(" or all are "),o("code",[e._v("DESC")]),e._v(" or you are using 8.0.")])]),e._v(" "),o("p",[e._v("Notes and exceptions:")]),e._v(" "),o("ul",[o("li",[e._v("Don't duplicate any columns.")]),e._v(" "),o("li",[e._v("Skip over any cases that don't apply.")]),e._v(" "),o("li",[e._v("If you don't use all the columns of "),o("code",[e._v("WHERE")]),e._v(", there is no need to go on to "),o("code",[e._v("GROUP BY")]),e._v(", etc.")]),e._v(" "),o("li",[e._v("There are cases where it is useful to index only the "),o("code",[e._v("ORDER BY")]),e._v(" column(s), ignoring "),o("code",[e._v("WHERE")]),e._v(".")]),e._v(" "),o("li",[e._v('Don\'t "hide" a column in a function (eg '),o("code",[e._v("DATE(x) = ...")]),e._v(" cannot use "),o("code",[e._v("x")]),e._v(" in the index.)")]),e._v(" "),o("li",[e._v("'Prefix' indexing (eg, "),o("code",[e._v("text_col(99)")]),e._v(") is unlikely to be helpful; may hurt.")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://mariadb.com/kb/en/mariadb/compound-composite-indexes/",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[e._v("More details and tips")]),o("OutboundLink")],1),e._v(" .")]),e._v(" "),o("h2",{attrs:{id:"select-statement-optimization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#select-statement-optimization"}},[e._v("#")]),e._v(" Select Statement Optimization")]),e._v(" "),o("p",[e._v("Below are some tips to remember while we are writing a select query in MySQL that can help us and reduce our query time:-")]),e._v(" "),o("li",[o("p",[e._v("Whenever we use where in a large table we should make sure the column in where clause are index or not.\nEx:- Select * from employee where user_id > 2000.\nuser_id if indexed then will speed up the evaluation of the query atlot. Indexes are also very important during joins and foreign keys.")])]),e._v(" "),o("li",[o("p",[e._v("When you need the smaller section of content rather then fetching whole data from table, try to use limit.\nRather then writing\nEx:- Select * from employee.\nIf you need just first 20 employee from lakhs then just use limit\nEx:- Select * from employee LIMIT 20.")])]),e._v(" "),o("li",[o("p",[e._v("You can also optimize your query by providing the column name which you want in resultset.\nRather then writing\nEx:- Select * from employee.\nJust mention column name from which you need data if you table has lots of column and you want to have data for few of them.\nEx:- Select id, name from employee.")])]),e._v(" "),o("li",[o("p",[e._v("Index column if you are using to verify for NULL in where clause.\nIf you have some statement as SELECT * FROM tbl_name WHERE key_col IS NULL;\nthen if key_col is indexed then query will be evaluated faster.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);