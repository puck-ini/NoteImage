(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{378:function(t,r,a){"use strict";a.r(r);var e=a(44),_=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"分布式系统相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统相关"}},[t._v("#")]),t._v(" 分布式系统相关")]),t._v(" "),a("h2",{attrs:{id:"cap、acid、base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cap、acid、base"}},[t._v("#")]),t._v(" CAP、ACID、BASE")]),t._v(" "),a("p",[t._v("CAP是分布式系统设计中的经典理论，他强调数据的强一致性，忽略网络中的延迟导致的不一致性的问题。")]),t._v(" "),a("p",[t._v("ACID是事务的基本特征。")]),t._v(" "),a("p",[t._v("BASE理论则是对CAP理论的一个延伸和平衡，实际中，网络的延迟的问题是无法避免的。他也和ACID强调的强一致性模型不同，允许数据在一段时间内的不一致，但是最终达到一致性的状态。")]),t._v(" "),a("h3",{attrs:{id:"cap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cap"}},[t._v("#")]),t._v(" CAP")]),t._v(" "),a("p",[t._v("与 ACID 以及 BASE 的关系")]),t._v(" "),a("p",[a("strong",[t._v("C一致性")]),t._v("：写操作之后的读操作，必须返回该值。")]),t._v(" "),a("p",[a("strong",[t._v("A可用性")]),t._v("：意思是只要收到用户的请求，服务器就必须给出回应。")]),t._v(" "),a("p",[a("strong",[t._v("P分区容错性")]),t._v("：大多数分布式系统都分布在多个子网络。每个子网络就叫做一个区（partition）。分区容错的意思是，区间通信可能失败。比如，一台服务器放在中国，另一台服务器放在美国，这就是两个区，它们之间可能无法通信。")]),t._v(" "),a("h3",{attrs:{id:"acid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acid"}},[t._v("#")]),t._v(" ACID")]),t._v(" "),a("p",[a("strong",[t._v("A原子性")]),t._v("：原子性很好理解，在事务的执行过程中，要么全部执行成功，要么就都不执行，如果有一个失败，其他执行成功的操作都需要回滚。")]),t._v(" "),a("p",[a("strong",[t._v("C一致性")]),t._v("：一致性的说法其实有点难以理解，他指的是事务在执行前后，不能破坏数据的完整性。一致性更多的说的是通过AID来达到目的，数据应该符合预先的定义和约束，由应用层面来保证。")]),t._v(" "),a("p",[a("strong",[t._v("I隔离性")]),t._v("：多个事务之间是互相隔离的，事务之间不能互相干扰，这也就涉及到隔离级别的问题，不过这个问题不在这篇文章的话题之内。")]),t._v(" "),a("p",[a("strong",[t._v("D持久性")]),t._v("：一旦事务提交，数据库中数据的状态就应该是永久性的。即便数据库宕机、崩溃，重启之后数据都应该恢复到之前的状态。")]),t._v(" "),a("blockquote",[a("p",[t._v("关系型数据库，例如 MySQL、Oracle、PostgreSQL")])]),t._v(" "),a("h3",{attrs:{id:"base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[t._v("#")]),t._v(" BASE")]),t._v(" "),a("p",[a("strong",[t._v("BA基本可用")]),t._v("：基本可用指的是在分布式系统出现故障时，允许损失部分可用性。")]),t._v(" "),a("p",[t._v("举个例子来说，在下单的场景，一般都会出现一些搭售的商品，如果搭售的系统出现问题，那么为了保证整个下单的核心可用，可以暂时降级掉搭售的功能。")]),t._v(" "),a("p",[t._v("又或者在双11的时候很多用户都应该体验过，流量激增的时候，为了保证系统的可用性，有一些用户被引导至一个降级的提示页面。")]),t._v(" "),a("p",[a("strong",[t._v("S软状态")]),t._v("：软状态也被称为弱状态，他指的是允许系统中数据出现中间状态，并且这种中间状态的数据不会影响整个系统的可用性。")]),t._v(" "),a("p",[t._v("中间态是什么？就是CAP中的不一致，由于节点之间数据同步延迟导致的数据不一致状态。")]),t._v(" "),a("p",[a("strong",[t._v("E最终一致性")]),t._v("：系统中的数据虽然有不一致的状态存在，但是经过一段时间后，最终，数据都会达到一致性的状态。")]),t._v(" "),a("blockquote",[a("p",[t._v("非关系型数据库：例如 Redis、Mongodb")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/07/cap.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP 定理的含义 - 阮一峰的网络日志 (ruanyifeng.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/kvFrRF4sDV6B7UQdOuWxZA",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：ACID、CAP、BASE到底有啥区别？ (qq.com)"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"paxos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paxos"}},[t._v("#")]),t._v(" Paxos")]),t._v(" "),a("p",[t._v("Paxos算法是莱斯利·兰伯特（英语：Leslie Lamport，LaTeX中的“La”）于1990年提出的一种基于消息传递且具有高度容错特性的共识（consensus）算法。")]),t._v(" "),a("p",[t._v("需要注意的是，Paxos常被误称为“一致性算法”。但是“一致性（consistency）”和“共识（consensus）”并不是同一个概念。Paxos是一个共识（consensus）算法。")]),t._v(" "),a("p",[t._v("Paxos 算法是 基于消息传递且具有高效容错特性的一致性算法，目前公认的解决分布式一致性问题最有效的算法之一。")]),t._v(" "),a("p",[t._v("Paxos 算法主要就是解决如何在一个发生如上故障的分布式系统中，快速正确的在集群内对某个值达成一致，并且保证整个系统的一致性。")]),t._v(" "),a("p",[t._v("Paxos 三种角色：")]),t._v(" "),a("ul",[a("li",[t._v("倡议者（Proposer）：倡议者可以提出提议（数值或者操作命令）以供投票表决")]),t._v(" "),a("li",[t._v("接受者（Acceptor）：接受者可以对倡议者提出的提议进行投票表决，提议有超半数的接受者投票即被选中")]),t._v(" "),a("li",[t._v("学习者（Learner）：学习者无投票权，只是从接受者那里获知哪个提议被选中")])]),t._v(" "),a("p",[t._v("在协议中，每个节点可以同时扮演以上多个角色。")]),t._v(" "),a("p",[t._v("Paxos 特点：")]),t._v(" "),a("ul",[a("li",[t._v("一个或多个节点可以提出提议")]),t._v(" "),a("li",[t._v("系统必须针对所有提案中的某个提案达成一致（超过半数的接受者选中）")]),t._v(" "),a("li",[t._v("最多只能对一个确定的提议达成一致")]),t._v(" "),a("li",[t._v("只要超半数的节点存活且可互相通信，整个系统一定能达成一致状态，即选择一个确定的提议")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Paxos%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paxos算法 - 维基百科，自由的百科全书 (wikipedia.org)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903621499289613",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式理论(五) - 一致性算法Paxos (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903445992833037",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解 Paxos 一致性协议 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"常见一致性算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见一致性算法"}},[t._v("#")]),t._v(" 常见一致性算法")]),t._v(" "),a("h3",{attrs:{id:"zab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zab"}},[t._v("#")]),t._v(" Zab")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwOTIxNDQ3OA==&mid=2247533392&idx=1&sn=8999e64a05cd06dfa63c0c3ecd3a806f&source=41#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("实例详解ZooKeeper ZAB协议、分布式锁与领导选举 (qq.com)"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"raft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raft"}},[t._v("#")]),t._v(" Raft")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6907151199141625870",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度解析 Raft 分布式一致性协议 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"分布式常见问题-npc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式常见问题-npc"}},[t._v("#")]),t._v(" 分布式常见问题 NPC")]),t._v(" "),a("ul",[a("li",[t._v("N：Network Delay，网络延迟")])]),t._v(" "),a("p",[t._v("TCP 虽然保证了传输的可靠性，但是网络延迟是无法避免的")]),t._v(" "),a("ul",[a("li",[t._v("P：Process Pause，进程暂停")])]),t._v(" "),a("p",[t._v("例如 Java 中的 GC （垃圾回收）")]),t._v(" "),a("ul",[a("li",[t._v("C：Clock Drift，时钟跳跃")])]),t._v(" "),a("p",[t._v("使用 NTP 协议将本地设备时间与专门的时间服务器对其，造成的结果是设备的本地时间突然向前或向后跳跃。")]),t._v(" "),a("h2",{attrs:{id:"脑裂问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脑裂问题"}},[t._v("#")]),t._v(" 脑裂问题")]),t._v(" "),a("p",[t._v("脑裂问题一般出现在主从模式下（读写分离）的分布式系统中，即原本的一主多从的系统变成多主多从的现象，导致这样的现象出现在主节点故障需要进行重新选主的时候。")]),t._v(" "),a("blockquote",[a("p",[t._v("主从模式下的分布式式系统一般都会有一个主节点和多个从节点，主节点负责读写操作，从节点负责读操作，同时主节点接收到的读操作都会同步到从节点中。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6990118444276383781#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统的“脑裂”到底是个什么玩意？ (juejin.cn)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=_.exports}}]);