(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{377:function(s,a,t){"use strict";t.r(a);var e=t(44),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis-扩展数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-扩展数据类型"}},[s._v("#")]),s._v(" Redis 扩展数据类型")]),s._v(" "),t("p",[s._v("相比于 Redis 基础数据类型，扩展数据类型是 Redis 对功能的扩展，其中底层的实现部分都是基于原有的基础数据类型。")]),s._v(" "),t("h2",{attrs:{id:"bitmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmap"}},[s._v("#")]),s._v(" bitmap")]),s._v(" "),t("p",[s._v("bitmap 基于 string 实现，支持按 bit 存储信息，一个 bit 的值只有0或1。")]),s._v(" "),t("blockquote",[t("p",[s._v("8 bit = 1 b = 0.001kb")])]),s._v(" "),t("h3",{attrs:{id:"相关操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关操作"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("setbit key offset value \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("ul",[t("li",[s._v("签到功能")]),s._v(" "),t("li",[s._v("布隆过滤器")])]),s._v(" "),t("h3",{attrs:{id:"扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[s._v("#")]),s._v(" 扩展")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("布隆过滤器")])]),s._v(" "),t("p",[s._v("布隆过滤器实际上是一个二进制向量以及一组随机映射函数组成。一个值经过几个不同的哈希函数处理后映射在二进制向量中并把该位置的二进制值置为1。过滤时，一个值经过哈希函数处理之后与二进制向量对比，如果对比的二进制向量中有一个值为0则这个值必定不在过滤器中，反之则可能存在也可能不存在。")]),s._v(" "),t("p",[t("strong",[s._v("布隆过滤器缺点：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("bloom filter之所以能做到在时间和空间上的效率⽐较⾼，是因为牺牲了判断的准确率、删除的便利性")])]),s._v(" "),t("li",[t("p",[s._v("存在误判，可能要查到的元素并没有在容器中，但是hash之后得到的k个位置上值都是1。如果bloom filter中存储的是⿊名单，那么可以通过建⽴⼀个⽩名单来存储可能会误判的元素。")])]),s._v(" "),t("li",[t("p",[s._v("删除困难。⼀个放⼊容器的元素映射到bit数组的k个位置上是1，删除的时候不能简单的直接置为0，可能会影响其他元素的判断。可以采⽤Counting Bloom Filter")])])]),s._v(" "),t("p",[t("strong",[s._v("使用场景：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("cerberus 在收集监控数据的时候, 有的系统的监控项量会很⼤, 需要检查⼀个监控项的名字是否已经被记录到 db 过了, 如果没有的话就需要写⼊ db.")])]),s._v(" "),t("li",[t("p",[s._v("爬⾍过滤已抓到的url就不再抓，可⽤ bloom filter 过滤")])]),s._v(" "),t("li",[t("p",[s._v("垃圾邮件过滤。如果⽤哈希表，每存储⼀亿个 email 地址，就需要 1.6GB 的内存（⽤哈希表实现的具体办法是将每⼀个 email 地址对应成⼀个⼋字节的信息指纹，然后将这些信息指纹存⼊哈希表，由于哈希表的存储效率⼀般只有 50%，因此⼀个 email 地址需要占⽤⼗六个字节。⼀亿个地址⼤约要 1.6GB，即⼗六亿字节的内存）。因此存贮⼏⼗亿个邮件地址可能需要上百 GB 的内存。⽽ bloom filter 只需要哈希表 1/8到 1/4 的⼤⼩就能解决同样的问题。")])])])])]),s._v(" "),t("h2",{attrs:{id:"hyperloglog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog"}},[s._v("#")]),s._v(" HyperLogLog")]),s._v(" "),t("p",[s._v("HyperLogLog 是基数统计的算法，供不精确的去重计数功能，比较适合用来做大规模数据的去重统计。输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定 的、并且是很小的。会根据输入元素来计算基数，而不会储存输入元素本身。")]),s._v(" "),t("p",[t("strong",[s._v("特点：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("代码实现较难。")])]),s._v(" "),t("li",[t("p",[s._v("能够使用极少的内存来统计巨量的数据，在 "),t("code",[s._v("Redis")]),s._v(" 中实现的 "),t("code",[s._v("HyperLogLog")]),s._v("，只需要"),t("code",[s._v("12K")]),s._v("内存就能统计"),t("code",[s._v("2^64")]),s._v("个数据。")])]),s._v(" "),t("li",[t("p",[s._v("计数存在一定的误差，误差率整体较低。标准误差为 0.81% 。")])]),s._v(" "),t("li",[t("p",[s._v("误差可以被设置辅助计算因子进行降低。")])])]),s._v(" "),t("h3",{attrs:{id:"相关操作-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-2"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 添加指定值到HyperLogLog中\npfadd key value \n// 返回给定HyperLogLog的技术估算值\npfcount key \n// 将多个HyperLogLog合并为一个HyperLogLog\npfmerge destkey sourcekey \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"使用场景-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-2"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("ul",[t("li",[s._v("去重统计，例如页面的用户访问数")])]),s._v(" "),t("h2",{attrs:{id:"geo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geo"}},[s._v("#")]),s._v(" geo")]),s._v(" "),t("p",[s._v("基于 zset，保存地理位置，经纬度和名字。（redis3.2支持）")]),s._v(" "),t("p",[s._v("经纬度是经度与纬度的合称组成一个坐标系统，称为地理坐标系统，它是一种利用三度空间的球面来定义地球上的空间的球面坐标系统，能够标示地球上的任何一个位置。")]),s._v(" "),t("p",[s._v("地理坐标系：")]),s._v(" "),t("p",[s._v("经度：longitude [-180,+180]，负号表示向西，正号表示向东")]),s._v(" "),t("p",[s._v("纬度：latitude [-90,+90]，负号表示向南，正号表示向北")]),s._v(" "),t("h3",{attrs:{id:"相关操作-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-3"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 将经纬度位置名称添加到key中\ngeoadd key 经度1 纬度1 名字1 经度2 纬度2 名字2 ... \n//返回指定名字经纬度\ngeopos key 名字  \n// 返回两个位置距离m：米，默认单位 km：千米 mi：英里 ft：英尺\ngeodist key 名字1 名字2 [m|km|ft|mi] \n\nGEOADD: 将给定的位置对象（纬度、经度、名字）添加到指定的key;\nGEOPOS: 从key里面返回所有给定位置对象的位置（经度和纬度）;\nGEODIST: 返回两个给定位置之间的距离;\nGEOHASH: 返回一个或多个位置对象的Geohash表示;\nGEORADIUS: 以给定的经纬度为中心，返回目标集合中与中心的距离不超过给定最大距离的所有位置对象;\nGEORADIUSBYMEMBER: 以给定的位置对象为中心，返回与其距离不超过给定最大距离的所有位置对象。\n\n- geoadd：添加地理位置的坐标。\n  - 有效经度从-180到180度。\n  - 有效纬度从 -85.05112878 到 85.05112878 度。\n- geopos：获取地理位置的eo坐标。\n- geodist：计算两个位置之间的距离。默认单位为m（米）\n- georadius：根据用户给定的经纬度坐标来获取指定范围内的地理位置集合。\n- georadiusbymember：根据储存在位置集合里面的某个地点获取指定范围内的地理位置集合。\n- geohash：返回一个或多个位置对象的 geohash 值。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"使用场景-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-3"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("ul",[t("li",[s._v("实现查看附近的人功能")]),s._v(" "),t("li",[s._v("通过经纬度计算地图上两点的距离")])]),s._v(" "),t("h3",{attrs:{id:"扩展-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展-2"}},[s._v("#")]),s._v(" 扩展")]),s._v(" "),t("ol",[t("li",[s._v("geo 的实现")])]),s._v(" "),t("p",[s._v("Redis 使用 zset 数据类型通过 geohash 的方式实现 geo。geohash 即二分区间，区间编码。将经纬度经过 GeoHash 分别编码之后合并成一个编码作为Sort set 的权重。编码其实就是将经度或者纬度用一个N位的二进制数表示。")]),s._v(" "),t("p",[s._v("经纬度编码过程：")]),s._v(" "),t("ol",[t("li",[s._v("经度的取值范围为[-180,+180]，二分之后为[-180,0]和[0,+180]")]),s._v(" "),t("li",[s._v("查看需要编码的经度值，如果位于[-90,0]则表示0，位于[0,+90]表示1")]),s._v(" "),t("li",[s._v("根据编码的经度值位于的范围重复步骤1")])]),s._v(" "),t("p",[s._v("纬度跟经度的编码过程相同，范围不一样纬度范围为[-85,+85]")]),s._v(" "),t("p",[s._v("例子：经度15，编码之后的值为100")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("二分范围")]),s._v(" "),t("th",[s._v("位于范围")]),s._v(" "),t("th",[s._v("编码值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("[-180,0)   [0,+180]")]),s._v(" "),t("td",[s._v("[0,+180]")]),s._v(" "),t("td",[s._v("1")])]),s._v(" "),t("tr",[t("td",[s._v("[0,+90)   [+90,+180]")]),s._v(" "),t("td",[s._v("[0,+90)")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("[0,+45)   [+45,+90)")]),s._v(" "),t("td",[s._v("[0,+45)")]),s._v(" "),t("td",[s._v("0")])])])]),s._v(" "),t("p",[s._v("例子：纬度40，编码之后的值为100")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("二分范围")]),s._v(" "),t("th",[s._v("位于范围")]),s._v(" "),t("th",[s._v("编码值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("[-90,0)   [0,+90]")]),s._v(" "),t("td",[s._v("[0,+90]")]),s._v(" "),t("td",[s._v("1")])]),s._v(" "),t("tr",[t("td",[s._v("[0,+45)   [+45,+90]")]),s._v(" "),t("td",[s._v("[0,+45)")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("[0,+22.5)   [+22.5,+45]")]),s._v(" "),t("td",[s._v("[+22.5,+45]")]),s._v(" "),t("td",[s._v("1")])])])]),s._v(" "),t("p",[s._v("编码之后将经纬度组合在一起，编码值偶数为经度编码值，奇数位为纬度编码值，最终的编码值为110001。")]),s._v(" "),t("h2",{attrs:{id:"pub-sub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pub-sub"}},[s._v("#")]),s._v(" pub/sub")]),s._v(" "),t("p",[s._v("基于 list，发布订阅功能。Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。客户端订阅某个频道，之后有客户端向该频道发出消息，该频道会将消息通知所有订阅的客户端。")]),s._v(" "),t("blockquote",[t("p",[s._v("pub/sub 无法通过 rdb 和 aof 持久化保存到磁盘")])]),s._v(" "),t("h3",{attrs:{id:"相关操作-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-4"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 订阅一个或多个频道信息\nsubscribe channel1 channel2 ...\n// 订阅一个或多个符合模式的评到\npsubscribe pattern1 pattern2\n// 退订频道\nunsubscribe channel1 channel2 ...\n// 推定符合模式的频道\npunsubscribe pattern1 pattern2 ...\n// 将消息发布到频道\npublish channel message\n// 查看订阅与发布系统状态\npubsub subcommand [arg]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"使用场景-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-4"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("ul",[t("li",[s._v("消息队列")]),s._v(" "),t("li",[s._v("Redis Sentinel 之间相互通信")]),s._v(" "),t("li",[s._v("Redisson 实现的分布式锁中使用发布订阅和 java Semaphore 阻塞（未获取到锁的线程）和唤醒线程（锁被释放）")])]),s._v(" "),t("h2",{attrs:{id:"stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream"}},[s._v("#")]),s._v(" stream")]),s._v(" "),t("p",[s._v("stream 是 Redis 5.0新增的数据类型。主要用于消息队列的创建。")]),s._v(" "),t("blockquote",[t("p",[s._v("stream 的设计借鉴了 kafka")])]),s._v(" "),t("h3",{attrs:{id:"相关操作-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-5"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),t("h3",{attrs:{id:"使用场景-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-5"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("ul",[t("li",[s._v("消息队列")])]),s._v(" "),t("h2",{attrs:{id:"pipeline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pipeline"}},[s._v("#")]),s._v(" pipeline")]),s._v(" "),t("h3",{attrs:{id:"相关操作-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-6"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),t("h3",{attrs:{id:"使用场景-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-6"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("h2",{attrs:{id:"lua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lua"}},[s._v("#")]),s._v(" lua")]),s._v(" "),t("h3",{attrs:{id:"相关操作-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-7"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),t("h3",{attrs:{id:"使用场景-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-7"}},[s._v("#")]),s._v(" 使用场景")])])}),[],!1,null,null,null);a.default=r.exports}}]);