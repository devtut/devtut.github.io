(window.webpackJsonp=window.webpackJsonp||[]).push([[1896],{2304:function(e,t,a){"use strict";a.r(t);var s=a(31),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lamp-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lamp-stack"}},[e._v("#")]),e._v(" LAMP Stack")]),e._v(" "),a("p",[e._v("LAMP ("),a("strong",[e._v("L")]),e._v("inux "),a("strong",[e._v("A")]),e._v("pache "),a("strong",[e._v("M")]),e._v("ySQL "),a("strong",[e._v("P")]),e._v("HP) consists of the Linux operating system as development environment, the Apache HTTP Server as web server, the MySQL relational database management system (RDBMS) as DB("),a("strong",[e._v("D")]),e._v("ata "),a("strong",[e._v("B")]),e._v("ase) system, and the PHP programming language as Server side (Back End) programming language.")]),e._v(" "),a("p",[e._v("LAMP is used as a Open Source stack of technologies solution to web development area. Windows version of this stack is called WAMP("),a("strong",[e._v("W")]),e._v("indows "),a("strong",[e._v("A")]),e._v("pache "),a("strong",[e._v("M")]),e._v("ySQL "),a("strong",[e._v("P")]),e._v("HP)")]),e._v(" "),a("h2",{attrs:{id:"installing-lamp-on-arch-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-lamp-on-arch-linux"}},[e._v("#")]),e._v(" Installing LAMP on Arch Linux")]),e._v(" "),a("p",[e._v("With this line we will install all the necessary packages in one step, and the last update:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("pacman -Syu apache php php-apache mariadb\n\n")])])]),a("h3",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" "),a("strong",[e._v("HTTP")])]),e._v(" "),a("p",[e._v("Edit")]),e._v(" "),a("p",[a("code",[e._v("/etc/httpd/conf/httpd.conf")])]),e._v(" "),a("p",[e._v("Change "),a("code",[e._v("ServerAdmin you@example.com")]),e._v(" as you need.")]),e._v(" "),a("p",[e._v("The folder of the WEB Pages by default is "),a("code",[e._v('ServerRoot "/etc/httpd"')]),e._v(". Directory must be set to the same folder, so change the line")]),e._v(" "),a("p",[a("code",[e._v('<Directory "/etc/httpd">')])]),e._v(" "),a("p",[e._v("This folder must have read and execution access, so")]),e._v(" "),a("p",[a("code",[e._v("chmod o+x /etc/httpd")])]),e._v(" "),a("p",[e._v("Change  "),a("code",[e._v("AllowOverride from none (default) to All")]),e._v(" so .htaccess will works.")]),e._v(" "),a("p",[e._v("Now you need the "),a("code",[e._v("~/public_html")]),e._v(" folder for each user. (to get the root page of each user as "),a("a",{attrs:{href:"http://localhost/%7Eyourusername/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost/~yourusername/"),a("OutboundLink")],1),e._v(". Unremark this line:")]),e._v(" "),a("p",[a("code",[e._v("Include conf/extra/httpd-userdir.conf")])]),e._v(" "),a("p",[e._v("Now as root you need to create the "),a("code",[e._v("~/public_html")]),e._v(" for each user and change the access to (755) of each one.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" /home\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" /home/username\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" /home/username/public_html\n\n")])])]),a("p",[e._v("You can comment out this line if you want to use SSL:")]),e._v(" "),a("p",[a("code",[e._v("LoadModule ssl_module modules/mod_ssl.so")])]),e._v(" "),a("p",[e._v("If you need to use virtual domains, uncomment the line:")]),e._v(" "),a("p",[a("code",[e._v("Include conf/extra/httpd-vhosts.conf")])]),e._v(" "),a("p",[e._v("and in "),a("code",[e._v("/etc/httpd/conf/extra/httpd-vhosts.conf")]),e._v(" you must to add all the virtual domains. (plus into "),a("code",[e._v("/etc/hosts")]),e._v(" if you want to test those virtuals domains)")]),e._v(" "),a("p",[e._v("Edit "),a("code",[e._v("/etc/httpd/conf/extra/httpd-default.conf")]),e._v(" and change "),a("strong",[e._v("ServerSignature")]),e._v(" to Off and "),a("strong",[e._v("ServerToken")]),e._v(" to Prod for hiding critical data")]),e._v(" "),a("h3",{attrs:{id:"php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[e._v("#")]),e._v(" "),a("strong",[e._v("PHP")])]),e._v(" "),a("p",[e._v("Edit: "),a("code",[e._v("/etc/httpd/conf/httpd.conf")])]),e._v(" "),a("p",[e._v("Comment out: "),a("code",[e._v("LoadModule mpm_event_module modules/mod_mpm_event.so")])]),e._v(" "),a("p",[e._v("Uncomment: "),a("code",[e._v("LoadModule mpm_prefork_module modules/mod_mpm_prefork.so")])]),e._v(" "),a("p",[e._v("As last item in the LoadModule list, add "),a("code",[e._v("LoadModule php7_module modules/libphp7.so")])]),e._v(" "),a("p",[e._v("As last item in the include list, add "),a("code",[e._v("Include conf/extra/php7_module.conf")])]),e._v(" "),a("p",[e._v("Edit "),a("code",[e._v("/etc/php/php.ini")])]),e._v(" "),a("p",[e._v("Uncomment "),a("code",[e._v("extension=mysqli.so")]),e._v(" and "),a("code",[e._v("extension=pdo_mysql.so")])]),e._v(" "),a("p",[e._v("Change the timezone as you need, for example:")]),e._v(" "),a("p",[a("code",[e._v("date.timezone = America/Argentina/Buenos_Aires, date.default_latitude = 0.0, date.default_longitude = 0.0")])]),e._v(" "),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" "),a("strong",[e._v("MySQL")])]),e._v(" "),a("p",[e._v("Run as root:")]),e._v(" "),a("p",[a("code",[e._v("mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql")])]),e._v(" "),a("p",[e._v("Now you have the root of the MySQL Server.")]),e._v(" "),a("p",[e._v("Start MySQL daemon:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" mysqld\nsystemctl start mysqld\n\n")])])]),a("p",[e._v("At last, run:")]),e._v(" "),a("p",[a("code",[e._v("sh /usr/bin/mysql_secure_installation")])]),e._v(" "),a("p",[e._v("That all to get a web server ready to be customized as you need.")]),e._v(" "),a("h2",{attrs:{id:"installing-lamp-on-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-lamp-on-ubuntu"}},[e._v("#")]),e._v(" Installing LAMP on Ubuntu")]),e._v(" "),a("p",[e._v("Install apache:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" apache2\n\n")])])]),a("p",[e._v("Install MySql:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" mysql-server\n\n")])])]),a("p",[e._v("Install PHP:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" php5 libapache2-mod-php5\n\n")])])]),a("p",[e._v("Restart system:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart apache2\n\n")])])]),a("p",[e._v("Check PHP installation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nphp -r 'echo \"\\n\\nYour PHP installation is working fine.\\n\\n\\n\";'\n\n")])])]),a("h2",{attrs:{id:"installing-lamp-stack-on-centoos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-lamp-stack-on-centoos"}},[e._v("#")]),e._v(" Installing LAMP stack on CentoOS")]),e._v(" "),a("h3",{attrs:{id:"install-apache-web-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-apache-web-server"}},[e._v("#")]),e._v(" Install Apache Web Server")]),e._v(" "),a("p",[e._v("First step is to install web server Apache.")]),e._v(" "),a("p",[a("code",[e._v("sudo yum -y install httpd")])]),e._v(" "),a("p",[e._v("Once it is installed, enable (to run on startup) and start Apache web server service.")]),e._v(" "),a("p",[a("code",[e._v("sudo systemctl enable --now httpd")])]),e._v(" "),a("p",[e._v("Point your browser to:")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://localhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("You will see the default Apache web server page.")]),e._v(" "),a("h3",{attrs:{id:"install-mariadb-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-mariadb-server"}},[e._v("#")]),e._v(" Install MariaDB Server")]),e._v(" "),a("p",[e._v("Second step is to install MariaDB:")]),e._v(" "),a("p",[a("code",[e._v("sudo yum -y install mariadb-server")])]),e._v(" "),a("p",[e._v("Then start and enable (on startup) the MariaDB server:")]),e._v(" "),a("p",[a("code",[e._v("sudo systemctl enable --now mariadb")])]),e._v(" "),a("p",[e._v("As needed, use "),a("strong",[e._v("mysql_secure_installation")]),e._v(" to secure your database.")]),e._v(" "),a("p",[e._v("This script will allow you to do the following:")]),e._v(" "),a("ul",[a("li",[e._v("Change the root user's password")]),e._v(" "),a("li",[e._v("Remove test databases")]),e._v(" "),a("li",[e._v("Disable remote access")])]),e._v(" "),a("h3",{attrs:{id:"install-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-php"}},[e._v("#")]),e._v(" Install PHP")]),e._v(" "),a("p",[a("code",[e._v("sudo yum -y install php php-common")])]),e._v(" "),a("p",[e._v("Then restart Apache's httpd service.")]),e._v(" "),a("p",[a("code",[e._v("sudo systemctl restart httpd")])]),e._v(" "),a("p",[e._v("To test PHP, create a file called "),a("strong",[e._v("index.php")]),e._v(" in "),a("strong",[e._v("/var/www/html")]),e._v(".")]),e._v(" "),a("p",[e._v("Then add the following line to the file:")]),e._v(" "),a("p",[e._v("Then point your browser to:")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://localhost/index.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost/index.php"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("You should see information related to your server. If you do not, ensure that php is for sure installed correctly by running the following command:")]),e._v(" "),a("p",[a("code",[e._v("php --version")])]),e._v(" "),a("p",[e._v("If you receive something like:")]),e._v(" "),a("p",[a("code",[e._v("PHP 5.4.16 (cli) (built: Nov 6 2016 00:29:02) Copyright (c) 1997-2013 The PHP Group")])]),e._v(" "),a("p",[e._v("Then PHP is installed correctly. If this is the case, please ensure that you've restarted your web server.")])])}),[],!1,null,null,null);t.default=n.exports}}]);