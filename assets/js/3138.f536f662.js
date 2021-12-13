(window.webpackJsonp=window.webpackJsonp||[]).push([[3138],{3546:function(a,e,t){"use strict";t.r(e);var s=t(31),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"adding-an-amazon-rds-to-your-rails-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-an-amazon-rds-to-your-rails-application"}},[a._v("#")]),a._v(" Adding an Amazon RDS to your rails application")]),a._v(" "),t("p",[a._v("Steps to create an AWS RDS instance and configure your database.yml file by installing the required connectors.")]),a._v(" "),t("h2",{attrs:{id:"consider-we-are-connecting-mysql-rds-with-your-rails-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consider-we-are-connecting-mysql-rds-with-your-rails-application"}},[a._v("#")]),a._v(" Consider we are connecting MYSQL RDS with your rails application.")]),a._v(" "),t("p",[t("strong",[a._v("Steps to create MYSQL database")])]),a._v(" "),t("ol",[t("li",[a._v("Login to amazon account and select RDS service")]),a._v(" "),t("li",[a._v("Select "),t("code",[a._v("Launch DB Instance")]),a._v(" from the instance tab")]),a._v(" "),t("li",[a._v("By defaul MYSQL Community Edition will be selected, hence click the "),t("code",[a._v("select")]),a._v(" button")]),a._v(" "),t("li",[a._v("Select the database purpose, say "),t("code",[a._v("production")]),a._v(" and click "),t("code",[a._v("next step")])]),a._v(" "),t("li",[a._v("Provide the "),t("code",[a._v("mysql version, storage size, DB Instance Identifier, Master Username and Password")]),a._v(" and click "),t("code",[a._v("next step")])]),a._v(" "),t("li",[a._v("Enter "),t("code",[a._v("Database Name")]),a._v(" and click "),t("code",[a._v("Launch DB Instance")])]),a._v(" "),t("li",[a._v("Please wait until all the instance gets created. Once the instance gets created you will find an Endpoint, copy this entry point (which is referred as hostname)")])]),a._v(" "),t("p",[t("strong",[a._v("Installing connectors")])]),a._v(" "),t("p",[a._v("Add the MySQL database adapter to your project's gemfile,")]),a._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[a._v("gem "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mysql2'")]),a._v("\n\n")])])]),t("p",[a._v("Install your added gems,")]),a._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[a._v("bundle install\n\n")])])]),t("p",[a._v("Some other database adapters are,")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("gem 'pg'")]),a._v(" for PostgreSQL")]),a._v(" "),t("li",[t("code",[a._v("gem 'activerecord-oracle_enhanced-adapter'")]),a._v(" for Oracle")]),a._v(" "),t("li",[t("code",[a._v("gem 'sql_server'")]),a._v(" for SQL Server")])]),a._v(" "),t("p",[t("strong",[a._v("Configure your project's database.yml file")]),a._v("\nOpen your config/database.yml file")]),a._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[a._v("production"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  adapter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql2\n  encoding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" utf8\n  database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("%= RDS_DB_NAME %>  # Which you have entered you creating database\n  username: <%=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RDS_USERNAME")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("%> # db master username\n  password: <%= RDS_PASSWORD %>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# db master password")]),a._v("\n  host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("%= RDS_HOSTNAME %>     # db instance entrypoint\n  port: <%=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RDS_PORT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# db post. For MYSQL 3306")]),a._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);