(window.webpackJsonp=window.webpackJsonp||[]).push([[1901],{2309:function(e,t,a){"use strict";a.r(t);var s=a(31),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"network-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-configuration"}},[e._v("#")]),e._v(" Network Configuration")]),e._v(" "),a("h2",{attrs:{id:"interface-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface-details"}},[e._v("#")]),e._v(" Interface details")]),e._v(" "),a("p",[a("strong",[e._v("Ifconfig")])]),e._v(" "),a("p",[e._v("List all the interfaces available on the machine")]),e._v(" "),a("p",[a("code",[e._v("$ ifconfig -a")])]),e._v(" "),a("p",[e._v("List the details of a specific interface")]),e._v(" "),a("p",[e._v("Syntax: "),a("code",[e._v("$ ifconfig <interface>")])]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ifconfig")]),e._v(" eth0\neth0      Link encap:Ethernet  HWaddr xx:xx:xx:xx:xx:xx  \n          inet addr:x.x.x.x  Bcast:x.x.x.x  Mask:x.x.x.x\n          inet6 addr: xxxx::xxx:xxxx:xxxx:xxxx/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:4426618 errors:0 dropped:1124 overruns:0 frame:0\n          TX packets:189171 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:382611580 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("382.6")]),e._v(" MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  TX bytes:36923665 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("36.9")]),e._v(" MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n          Interrupt:16 Memory:fb5e0000-fb600000 \n\n")])])]),a("p",[a("strong",[e._v("Ethtool - query the network driver and hardware settings")])]),e._v(" "),a("p",[e._v("Syntax: "),a("code",[e._v("$ ethtool <interface>")])]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ethtool")]),e._v(" eth0\nSettings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" eth0:\n    Supported ports: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" TP "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    Supported "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" modes:   10baseT/Half 10baseT/Full \n                            100baseT/Half 100baseT/Full \n                            1000baseT/Full \n    Supported pause frame use: No\n    Supports auto-negotiation: Yes\n    Advertised "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" modes:  10baseT/Half 10baseT/Full \n                            100baseT/Half 100baseT/Full \n                            1000baseT/Full \n    Advertised pause frame use: No\n    Advertised auto-negotiation: Yes\n    Speed: 1000Mb/s\n    Duplex: Full\n    Port: Twisted Pair\n    PHYAD: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    Transceiver: internal\n    Auto-negotiation: on\n    MDI-X: on "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    Supports Wake-on: pumbg\n    Wake-on: g\n    Current message level: 0x00000007 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n                   drv probe "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n    Link detected: "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\n\n\n")])])]),a("p",[a("strong",[e._v("ip - show / manipulate routing, devices, policy routing and tunnels")])]),e._v(" "),a("p",[e._v("Syntax: "),a("code",[e._v("$ ip { link | ... | route | macsec }")]),e._v(" (please see "),a("code",[e._v("man ip")]),e._v(" for full list of objects)")]),e._v(" "),a("p",[e._v("Examples")]),e._v(" "),a("p",[e._v("List network interfaces")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" show    \n\n")])])]),a("p",[e._v("Rename interface eth0 to wan")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" dev eth0 name wan    \n\n")])])]),a("p",[e._v("Bring interface eth0 up (or down)")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" dev eth0 up    \n\n")])])]),a("p",[e._v("List addresses for interfaces")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" addr show    \n\n")])])]),a("p",[e._v("Add (or del) ip and mask (255.255.255.0)")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" addr "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),e._v(".3.4/24 brd + dev eth0 \n\n")])])]),a("h2",{attrs:{id:"adding-ip-to-an-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-ip-to-an-interface"}},[e._v("#")]),e._v(" Adding IP to an interface")]),e._v(" "),a("p",[e._v("An IP address to an interface could be obtained via DHCP or Static assignment")]),e._v(" "),a("p",[a("strong",[e._v("DHCP")]),e._v("\nIf you are connected to a network with a DHCP server running, "),a("code",[e._v("dhclient")]),e._v(" command can get an IP address for your interface")]),e._v(" "),a("p",[a("code",[e._v("$ dhclient <interface>")])]),e._v(" "),a("p",[e._v("or alternatively, you could make a change to the "),a("code",[e._v("/etc/network/interfaces")]),e._v(" file for the interface to be brought up on boot and obtain DHCP IP")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("auto eth0\niface eth0 inet dhcp\n\n")])])]),a("p",[a("strong",[e._v("Static configuration(Permanent Change) using "),a("code",[e._v("/etc/network/interfaces")]),e._v(" file")])]),e._v(" "),a("p",[e._v("If you want to statically configure the interface settings(permanent change), you could do so in the "),a("code",[e._v("/etc/network/interfaces")]),e._v(" file.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("auto eth0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Bring up the interface on boot")]),e._v("\niface eth0 inet static \n    address "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".70.10\n    netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".0.0\n    gateway "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".1.1\n    dns-nameservers "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".1.20\n    dns-nameservers "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".1.30\n\n")])])]),a("p",[e._v("These changes persist even after system reboot.")]),e._v(" "),a("p",[a("strong",[e._v("Static configuration(Temporary change) using "),a("code",[e._v("ifconfig")]),e._v(" utility")])]),e._v(" "),a("p",[e._v("A static IP address could be added to an interface using the "),a("code",[e._v("ifconfig")]),e._v(" utility as follows")]),e._v(" "),a("p",[a("code",[e._v("$ ifconfig <interface> <ip-address>/<mask> up")])]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("p",[a("code",[e._v("$ ifconfig eth0 10.10.50.100/16 up")])]),e._v(" "),a("h2",{attrs:{id:"local-dns-resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-dns-resolution"}},[e._v("#")]),e._v(" Local DNS resolution")]),e._v(" "),a("p",[e._v("File: "),a("code",[e._v("/etc/hosts")]),e._v(" contains a list of hosts that are to be resolved locally(not by DNS)")]),e._v(" "),a("p",[e._v("Sample contents of the file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1         your-node-name.your-domain.com  localhost.localdomain  localhost \nXXX.XXX.XXX.XXX   node-name\n\n")])])]),a("p",[e._v("The file format for the hosts file is specified by "),a("a",{attrs:{href:"http://www.ietf.org/rfc/rfc0952.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 952"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"configure-dns-servers-for-domain-name-resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-dns-servers-for-domain-name-resolution"}},[e._v("#")]),e._v(" Configure DNS servers for domain name resolution")]),e._v(" "),a("p",[e._v("File: "),a("code",[e._v("/etc/resolv.conf")]),e._v(" contains a list of DNS servers for domain name resolution")]),e._v(" "),a("p",[e._v("Sample contents of the file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("nameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.8")]),e._v(".8.8 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# IP address of the primary name server")]),e._v("\nnameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.8")]),e._v(".4.4 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# IP address of the secondary name server")]),e._v("\n\n")])])]),a("p",[e._v("In case internal DNS server you can validate if this server resolve DNS names properly using "),a("code",[e._v("dig")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("dig")]),e._v(" google.com @your.dns.server.com +short\n\n")])])]),a("h2",{attrs:{id:"see-and-manipulate-routes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-and-manipulate-routes"}},[e._v("#")]),e._v(" See and manipulate routes")]),e._v(" "),a("h3",{attrs:{id:"manipulate-the-ip-routing-table-using-route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manipulate-the-ip-routing-table-using-route"}},[e._v("#")]),e._v(" Manipulate the IP routing table using "),a("code",[e._v("route")])]),e._v(" "),a("p",[a("strong",[e._v("Display routing table")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ route "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Displays list or routes and also resolves host names")]),e._v("\n$ route -n "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Displays list of routes without resolving host names for faster results")]),e._v("\n\n")])])]),a("p",[a("strong",[e._v("Add/Delete route")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("add")]),e._v(" or "),a("code",[e._v("del")])]),e._v(" "),a("td",[e._v("Add or delete a route")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-host x.x.x.x")])]),e._v(" "),a("td",[e._v("Add route to a single host identified by the IP address")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-net x.x.x.x")])]),e._v(" "),a("td",[e._v("Add route to a network identified by the network address")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("gw x.x.x.x")])]),e._v(" "),a("td",[e._v("Specify the network gateway")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("netmask x.x.x.x")])]),e._v(" "),a("td",[e._v("Specify the network netmask")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("default")])]),e._v(" "),a("td",[e._v("Add a default route")])])])]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("ul",[a("li",[e._v("add route to a host "),a("code",[e._v("$ route add -host x.x.x.x eth1")])]),e._v(" "),a("li",[e._v("add route to a network "),a("code",[e._v("$ route add -net 2.2.2.0 netmask 255.255.255.0 eth0")])]),e._v(" "),a("li",[e._v("Alternatively, you could also use cidr format to add a route to network "),a("code",[e._v("route add -net 2.2.2.0/24 eth0")])]),e._v(" "),a("li",[e._v("add default gateway "),a("code",[e._v("$ route add default gw 2.2.2.1 eth0")])]),e._v(" "),a("li",[e._v("delete a route "),a("code",[e._v("$ route del -net 2.2.2.0/24")])])]),e._v(" "),a("h3",{attrs:{id:"manipulate-the-ip-routing-table-using-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manipulate-the-ip-routing-table-using-ip"}},[e._v("#")]),e._v(" Manipulate the IP routing table using "),a("code",[e._v("ip")])]),e._v(" "),a("p",[a("strong",[e._v("Display routing table")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" route show "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List routing table")]),e._v("\n\n")])])]),a("p",[a("strong",[e._v("Add/Delete route")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("add")]),e._v(" or "),a("code",[e._v("del")]),e._v(" or "),a("code",[e._v("change")]),e._v(" or "),a("code",[e._v("append")]),e._v(" or "),a("code",[e._v("replace")])]),e._v(" "),a("td",[e._v("Change a route")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("show")]),e._v(" or "),a("code",[e._v("flush")])]),e._v(" "),a("td",[e._v("the command displays the contents of the routing tables or remove it")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("restore")])]),e._v(" "),a("td",[e._v("restore routing table information from stdin")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("get")])]),e._v(" "),a("td",[e._v("this command gets a single route to a destination and prints its contents exactly as the kernel sees it")])])])]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("ul",[a("li",[e._v("Set default gateway to 1.2.3.254 "),a("code",[e._v("$ ip route add default via 1.2.3.254")])]),e._v(" "),a("li",[e._v("Adds a default route (for all addresses) via the local gateway 192.168.1.1 that can be reached on device eth0 "),a("code",[e._v("$ ip route add default via 192.168.1.1 dev eth0")])])]),e._v(" "),a("h2",{attrs:{id:"configure-a-hostname-for-some-other-system-on-your-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-a-hostname-for-some-other-system-on-your-network"}},[e._v("#")]),e._v(" Configure a hostname for some other system on your network")]),e._v(" "),a("p",[e._v("You can configure your Linux (or macOS) system in order to tie in an identifier "),a("code",[e._v("<hostname>")]),e._v(" to some other system's IP address in your network. You can configure it:")]),e._v(" "),a("li",[e._v("\nSystemwide. You should modify the **/etc/hosts** file. You just have to add to that file a new line containing:\n"),a("ol",[e._v("\n- the remote system's IP address `"),a("ip_rem",[e._v("`,\n- one or more blank spaces, and\n- the identifier `"),a("hostname",[e._v("`.\n")])],1)],1)]),e._v(" "),a("li",[e._v("\nFor a single user. You should modify the **~/.hosts** file --- you-d have to create it. It is not as simple as for systemwide. [Here](http://unix.stackexchange.com/questions/10438/can-i-create-a-user-specific-hosts-file-to-complement-etc-hosts) you can see an explanation.\n")]),e._v(" "),a("p",[e._v("For instance, you could add this line using the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cat_(Unix)",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("cat")]),a("OutboundLink")],1),e._v(" Unix tool. Suppose that you want to make a "),a("code",[e._v("ping")]),e._v(" to a PC in yout local network whose IP address is 192.168.1.44 and you want to refer to that IP address just by "),a("code",[e._v("remote_pc")]),e._v(". Then you must write on your shell:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.44 remote_pc\n\n")])])]),a("p",[e._v("Then you can make that ping just by:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ping")]),e._v(" remote_pc\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);