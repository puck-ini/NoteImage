(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{372:function(s,e,a){"use strict";a.r(e);var v=a(44),r=Object(v.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化"}},[s._v("#")]),s._v(" Redis 持久化")]),s._v(" "),a("p",[s._v("Redis 持久化方式有 RDB 和 AOF 两种。")]),s._v(" "),a("ul",[a("li",[s._v("RDB：RDB 是对 Redis 中数据执行周期性的持久化，相当于 Redis 某一时刻的快照。")]),s._v(" "),a("li",[s._v("AOF：AOF 机制是对每条写入命令都以追加的方式记录在日志中。")])]),s._v(" "),a("p",[s._v("这两种持久化方式都可以将 Redis 内存中的数据持久化到磁盘上。两种机制全部开启的时候，Redis 重启的时候会默认使用 AOF 去恢复数据，因为 AOF 的数据比 RDB 更完整，如果没有 AOF 的数据才会找 RDB 的数据。")]),s._v(" "),a("h2",{attrs:{id:"rdb-和-aof-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb-和-aof-对比"}},[s._v("#")]),s._v(" RDB 和 AOF 对比")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("RDB 是某一时刻的快照，AOF 是每一个写入命令的记录")])]),s._v(" "),a("li",[a("p",[s._v("RDB 默认5分钟或者更久的时间生成一次，如果下次生成 RDB 之前发生故障就会丢失这段时间的数据，AOF 可以设置最多丢失一秒的数据")])]),s._v(" "),a("li",[a("p",[s._v("RDB 恢复数据速度更快，AOF 恢复数据速度较慢但是数据更加完整")])]),s._v(" "),a("li",[a("p",[s._v("RDB 可以通过指令 fork 一个子进程去做持久化，AOF 也可以通过后台一个子进程追加写命令")])])]),s._v(" "),a("h2",{attrs:{id:"rdb-和-aof-的选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb-和-aof-的选择"}},[s._v("#")]),s._v(" RDB 和 AOF 的选择")]),s._v(" "),a("p",[s._v("Redis 4.0 开始 支持 RDB 和 AOF 一起使用（默认关闭，可以通过配置项 aof-use-rdb-preamble 开启），第一时间用 RDB 恢复，然后 AOF 做数据补全。混合持久化打开之后，AOF 重写的时候会将 RDB 的内容写在 AOF 文件的开头。这样做可以结合 RDB 和 AOF 的优点，快速恢复数据的同时避免丢失过多的数据。缺点是 AOF 里面的 RDB 部分是压缩格式不是 AOF 格式，可读性较差。因此，在 Redis 版本4.0以上可以开启这种模式，如果是4.0一下得对比 RDB 和 AOF 的有缺点以及项目中的需求再考虑。")]),s._v(" "),a("h2",{attrs:{id:"rdb-save-和-bgsave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb-save-和-bgsave"}},[s._v("#")]),s._v(" RDB save 和 bgsave")]),s._v(" "),a("p",[s._v("save 会让主进程阻塞，bgsave 会开启一个子进程执行持久化。")]),s._v(" "),a("p",[s._v("创建子进程会遇到一些问题：")]),s._v(" "),a("ul",[a("li",[s._v("创建子进程的途中，由于要复制父进程的页表等数据结构，阻塞的时间跟页表的大小有关，页表越大，阻塞的时间也越长；")]),s._v(" "),a("li",[s._v("创建完子进程后，如果子进程或者父进程修改了共享数据，就会发生写时复制，这期间会拷贝物理内存，如果内存越大，自然阻塞的时间也越长；")])]),s._v(" "),a("p",[s._v("如果用 bgsave  进行 RDB 快照的话，在创建子进程的时候，会因为复制太大的页表而导致 Redis 阻塞在 fork() 函数，主线程无法继续执行，相当于停顿了。这种时候可以使用 save，这样就阻塞主进程知道生成快照。")]),s._v(" "),a("p",[s._v("开启子进程而不是子线程的原因：")]),s._v(" "),a("p",[s._v("使用线程的话，多线程之间会共享内存，那么在修改共享内存数据的时候，需要通过加锁来保证数据的安全，而这样就会降低性能。")]),s._v(" "),a("h2",{attrs:{id:"aof-重写-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aof-重写-压缩"}},[s._v("#")]),s._v(" AOF 重写/压缩")]),s._v(" "),a("p",[s._v("AOF 对每一条写入命令都会写入文件，因此文件一般会很大，磁盘很容易占满，在磁盘空间不够的时候需要对AOF 文件进行重写/压缩。")]),s._v(" "),a("p",[s._v("重写操作是一个对磁盘文件写入的操作，因为 Redis 是单线程，如果有大量数据的写入会阻塞其他操作的执行，因此 Redis 在重写是会创建一个子进程将重写的任务交给子进程去做，这样就避免 AOF 重写造成 Redis 无法处理请求的问题。")]),s._v(" "),a("p",[s._v("AOF 重写时，Redis 还会不停的接受新的写入指令，这时候 Redis 会把新的指令放入缓存中，等待子进程 AOF 重写完成向父进程发送一个信号后，父进程将这些缓存中的指令写入新 AOF 文件中。AOF 重写完成后会覆盖掉原有的 AOF 文件。父进程在处理这两个工作会阻塞，完成之后才能处理新的请求。")]),s._v(" "),a("p",[s._v("如果在 AOF 重写时缓冲区满了，Redis 会边用边申请空间，如果申请失败会打印日志然后 Redis 进程会终止。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 重写 AOF 文件指令\nBGREWRITEAOF\n\n// redis.conf 中配置自动重写\nauto-aof-rewrite-percentage 100 #当前AOF文件大小和上一次重写时AOF文件大小的比值\nauto-aof-rewrite-min-size 64mb  #文件的最小体积\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"rdb-和-aof-相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb-和-aof-相关配置"}},[s._v("#")]),s._v(" RDB 和 AOF 相关配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# RDB\n# 表示60如果有1000个key发生变化，那么新生成一个dump.rdb文件\nsave 60 1000\n\n# AOF\nappendonly yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"rdb-相关指令和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb-相关指令和配置"}},[s._v("#")]),s._v(" RDB 相关指令和配置")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("BGSAVE命令：")]),s._v(" 客户端向Redis发送 "),a("strong",[s._v("BGSAVE命令")]),s._v(" 来创建一个快照。对于支持BGSAVE命令的平台来说（基本上所有平台支持，除了Windows平台），Redis会调用fork来创建一个子进程，然后子进程负责将快照写入硬盘，而父进程则继续处理命令请求。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("SAVE命令：")]),s._v(" 客户端还可以向Redis发送 "),a("strong",[s._v("SAVE命令")]),s._v(" 来创建一个快照，接到SAVE命令的Redis服务器在快照创建完毕之前不会再响应任何其他命令。SAVE命令不常用，我们通常只会在没有足够内存去执行BGSAVE命令的情况下，又或者即使等待持久化操作执行完毕也无所谓的情况下，才会使用这个命令。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("save选项：")]),s._v(" 如果用户设置了save选项（一般会默认设置），比如 "),a("strong",[s._v("save 60 10000")]),s._v("，那么从Redis最近一次创建快照之后开始算起，当“60秒之内有10000次写入”这个条件被满足时，Redis就会自动触发BGSAVE命令。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("SHUTDOWN命令：")]),s._v("  当Redis通过SHUTDOWN命令接收到关闭服务器的请求时，或者接收到标准TERM信号时，会执行一个SAVE命令，阻塞所有客户端，不再执行客户端发送的任何命令，并在SAVE命令执行完毕之后关闭服务器。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("一个Redis服务器连接到另一个Redis服务器：")]),s._v(" 当一个Redis服务器连接到另一个Redis服务器，并向对方发送SYNC命令来开始一次复制操作的时候，如果主服务器目前没有执行BGSAVE操作，或者主服务器并非刚刚执行完BGSAVE操作，那么主服务器就会执行BGSAVE命令")])])]),s._v(" "),a("h3",{attrs:{id:"aof-相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aof-相关配置"}},[s._v("#")]),s._v(" AOF 相关配置")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("appendfsync always ：")]),s._v("   #每次有数据修改发生时都会写入AOF文件,这样会严重降低Redis的速度。可以实现将数据丢失减到最少，不过这种方式需要对硬盘进行大量的写入而且每次只写入一个命令，十分影响Redis的速度。另外使用固态硬盘的用户谨慎使用appendfsync always选项，因为这会明显降低固态硬盘的使用寿命。")]),s._v(" "),a("li",[a("strong",[s._v("appendfsync everysec：")]),s._v("  #每秒钟同步一次，显示地将多个写命令同步到硬盘。为了兼顾数据和写入性能，用户可以考虑 "),a("strong",[s._v("appendfsync everysec选项")]),s._v(" ，让Redis每秒同步一次AOF文件，Redis性能几乎没受到任何影响。而且这样即使出现系统崩溃，用户最多只会丢失一秒之内产生的数据。当硬盘忙于执行写入操作的时候，Redis还会优雅的放慢自己的速度以便适应硬盘的最大写入速度。")]),s._v(" "),a("li",[a("strong",[s._v("appendfsync no：")]),s._v("    #让操作系统决定何时进行同步。选项一般不推荐，这种方案会使Redis丢失不定量的数据而且如果用户的硬盘处理写入操作的速度不够的话，那么当缓冲区被等待写入的数据填满时，Redis的写入操作将被阻塞，这会导致Redis的请求速度变慢。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);