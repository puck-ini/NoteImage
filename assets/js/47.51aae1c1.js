(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{413:function(e,v,r){"use strict";r.r(v);var a=r(44),t=Object(a.a)({},(function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"zookeeper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[e._v("#")]),e._v(" Zookeeper")]),e._v(" "),r("h2",{attrs:{id:"zookeeper-介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-介绍"}},[e._v("#")]),e._v(" Zookeeper 介绍")]),e._v(" "),r("p",[e._v("ZooKeeper 是一个开源的分布式协调服务，ZooKeeper 的设计目标是将那些复杂且容易出错的分布式一致性服务封装起来，构成一个高效可靠的原语集，并以一系列简单易用的接口提供给用户使用。")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("原语：")]),e._v(" 操作系统或计算机网络用语范畴。是由若干条指令组成的，用于完成一定功能的一个过程。具有不可分割性·即原语的执行必须是连续的，在执行过程中不允许被中断。")])]),e._v(" "),r("p",[e._v("ZooKeeper 是一个典型的分布式数据一致性解决方案，分布式应用程序可以基于 ZooKeeper 实现诸如数据发布/订阅、负载均衡、命名服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。")]),e._v(" "),r("h2",{attrs:{id:"特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),r("ul",[r("li",[e._v("高可用。支持集群部署，只要半数以上节点存货，Zookeeper 就能正常服务")]),e._v(" "),r("li",[e._v("高新能。Zookeeper 适用于读操作多于写操作的场景，数据保存在内存中，保证了高吞吐量和低延迟。")])]),e._v(" "),r("h2",{attrs:{id:"节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#节点"}},[e._v("#")]),e._v(" 节点")]),e._v(" "),r("p",[e._v("节点是 Zookeeper 数据模型中的数据单元，一个节点必须以 “/” 符号开始，例如 /test/a。每个节点都有用于管理节点的属性，同时还可以保存数据内容。")]),e._v(" "),r("h3",{attrs:{id:"节点类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#节点类型"}},[e._v("#")]),e._v(" 节点类型")]),e._v(" "),r("p",[e._v("节点可以分为持久节点和临时节点两种，持久节点一旦创建会一直存在 Zookeeper 中，除非进行删除操作。临时节点的生命周期跟客户端的会话绑定，客户端一旦断开连接，该客户端创建的临时节点也会被删除。节点中还有一个特殊的节点为顺序节点，该节点会在创建时为节点的名字后面追加一串递增的整形编号，该编号又父节点维护。")]),e._v(" "),r("ul",[r("li",[e._v("持久节点（PERSISTENT）")]),e._v(" "),r("li",[e._v("持久顺序节点（PERSISTENT_SEQUENTIAL）")]),e._v(" "),r("li",[e._v("临时节点（EPHEMERAL）")]),e._v(" "),r("li",[e._v("临时顺序节点（EPHEMERAL_SEQUENTIAL）")])]),e._v(" "),r("blockquote",[r("p",[e._v("新增的：")]),e._v(" "),r("p",[e._v("container 节点：3.5.3版本新增，如果Container节点下面没有子节点，则Container节点在未来会被Zookeeper自动清除,定时任务默认60s检查一次")]),e._v(" "),r("p",[e._v("TTL 节点：有过期时间的节点，默认禁用，只能通过系统配置zookeeper.extendedTypesEnabled=true开启，不稳定")])]),e._v(" "),r("p",[e._v("持久节点：即使 zookeeper 或者客户端断线都不会删除的节点。")]),e._v(" "),r("p",[e._v("临时节点：zookeeper 断开连接或者客户端断开连接都会把临时节点删除。（只会删除断开连接的客户端创建的临时节点）")]),e._v(" "),r("p",[e._v("顺序节点：给创建的节点一个递增的编号。")]),e._v(" "),r("p",[e._v("-e 表示创建临时节点，-s 表示创建顺序节点。图中创建 /test 节点下的 /test 节点会在节点名字后带上递增的序列号。")]),e._v(" "),r("p",[r("img",{attrs:{src:"img/zookeeper/image-20210802161021883.png",alt:"image-20210802161021883"}})]),e._v(" "),r("h3",{attrs:{id:"节点属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#节点属性"}},[e._v("#")]),e._v(" 节点属性")]),e._v(" "),r("p",[e._v("节点中保存了用于管理节点的属性。")]),e._v(" "),r("p",[e._v("stat 指令可以查看节点的属性")]),e._v(" "),r("p",[r("img",{attrs:{src:"img/zookeeper/image-20210802171026206.png",alt:"image-20210802171026206"}})]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("节点属性")]),e._v(" "),r("th",[e._v("解释")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("cZxid")]),e._v(" "),r("td",[e._v("该数据节点被创建时的事务Id")])]),e._v(" "),r("tr",[r("td",[e._v("mZxid")]),e._v(" "),r("td",[e._v("该数据节点被修改时最新的事务Id")])]),e._v(" "),r("tr",[r("td",[e._v("pZxid")]),e._v(" "),r("td",[e._v("当前节点的父级节点事务Id")])]),e._v(" "),r("tr",[r("td",[e._v("ctime")]),e._v(" "),r("td",[e._v("该数据节点创建时间")])]),e._v(" "),r("tr",[r("td",[e._v("mtime")]),e._v(" "),r("td",[e._v("该数据节点最后修改时间")])]),e._v(" "),r("tr",[r("td",[e._v("cversion")]),e._v(" "),r("td",[e._v("子节点版本号（子节点修改次数，每修改一次值+1递增）")])]),e._v(" "),r("tr",[r("td",[e._v("dataVersion")]),e._v(" "),r("td",[e._v("当前节点版本号（每修改一次值+1递增）")])]),e._v(" "),r("tr",[r("td",[e._v("aclVersion")]),e._v(" "),r("td",[e._v("当前节点acl版本号（节点被修改acl权限，每修改一次值+1递增）")])]),e._v(" "),r("tr",[r("td",[e._v("dataLength")]),e._v(" "),r("td",[e._v("当前节点所存储的数据长度")])]),e._v(" "),r("tr",[r("td",[e._v("numChildren")]),e._v(" "),r("td",[e._v("当前节点下子节点的个数")])]),e._v(" "),r("tr",[r("td",[e._v("ephemeralOwner")]),e._v(" "),r("td",[e._v("临时节点标示，当前节点如果是临时节点，则存储的创建者的会话id（sessionId），如果不是，那么值=0")])])])]),e._v(" "),r("ul",[r("li",[e._v("Zxid")])]),e._v(" "),r("p",[e._v("Zxid 主要应用于 Zookeeper 集群。")]),e._v(" "),r("ul",[r("li",[e._v("版本")])]),e._v(" "),r("p",[e._v("cversion")]),e._v(" "),r("p",[e._v("dataVersion")]),e._v(" "),r("p",[e._v("aclVersion")]),e._v(" "),r("ul",[r("li",[e._v("数据内容")])]),e._v(" "),r("p",[e._v("dataLength")]),e._v(" "),r("p",[e._v("numChildren")]),e._v(" "),r("p",[e._v("ctime")]),e._v(" "),r("p",[e._v("mtime")]),e._v(" "),r("p",[e._v("ephemeralOwner")]),e._v(" "),r("h3",{attrs:{id:"节点权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#节点权限"}},[e._v("#")]),e._v(" 节点权限")]),e._v(" "),r("p",[e._v("节点通过 ACL （access control list）机制设置权限控制。需要注意的是 Zookeeper 的权限是基于节点级别的，节点之间的权限不具备继承性，即子节点不会继承父节点的权限。")]),e._v(" "),r("p",[e._v("ACL 权限格式由 <schema>:<id>:<acl> 组成")]),e._v(" "),r("p",[e._v("schema 表示授权方式：")]),e._v(" "),r("ul",[r("li",[e._v("world：表示任何人都可以访问")]),e._v(" "),r("li",[e._v("auth：只有认证用户可以访问")]),e._v(" "),r("li",[e._v("digest：使用用户名和密码的方式生成的 MD5 哈希值作为认证 ID")]),e._v(" "),r("li",[e._v("host/ip：使用客户端主机 IP 地址来进行认证")])]),e._v(" "),r("p",[e._v("id 表示权限的作用域，用来识别身份，根据 schema 选择哪种方式")]),e._v(" "),r("p",[e._v("acl 表示一个节点具有哪些权限，节点的权限有 create、delete、write、read、admin 统称cdwra")]),e._v(" "),r("h2",{attrs:{id:"watch-机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#watch-机制"}},[e._v("#")]),e._v(" watch 机制")]),e._v(" "),r("p",[e._v("watch机制：客户端可以通过 watcher 机制任意一个节点的数据变化（包含子节点的变化），一旦节点的数据变化 Zookeeper 就会通过发送事件的方式通知所有监听该节点的客户端。")]),e._v(" "),r("p",[e._v("watch 机制的实现是 Zookeeper 和客户端之间保持一个会话（Session），通过长连接实现。")]),e._v(" "),r("h3",{attrs:{id:"watch-类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#watch-类型"}},[e._v("#")]),e._v(" watch 类型")]),e._v(" "),r("p",[e._v("节点可以设置两类的 watch，一种是 DataWatches，基于节点的数据变更从而触发 watch 事件，触发条件 getData()、exists()、setData()、create()；另一种是 Child Watcher，基于节点的子节点发生变更的 watch 事件，触发条件 getChildren()、create()。")]),e._v(" "),r("p",[e._v("delete()方法删除节点是会同时触发上述的两种 watch，被删除的节点有父节点，则父节点会触发 Child Watcher。")]),e._v(" "),r("h3",{attrs:{id:"watch-特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#watch-特性"}},[e._v("#")]),e._v(" watch 特性")]),e._v(" "),r("p",[e._v("watch 机制对节点的监听事件是一次性的，客户端如果需要继续监听该节点需要对节点监听事件设置为 True。")]),e._v(" "),r("h2",{attrs:{id:"zookeeper-常用指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-常用指令"}},[e._v("#")]),e._v(" Zookeeper 常用指令")]),e._v(" "),r("h2",{attrs:{id:"zookeeper-常见使用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-常见使用场景"}},[e._v("#")]),e._v(" Zookeeper 常见使用场景")]),e._v(" "),r("h3",{attrs:{id:"注册中心"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注册中心"}},[e._v("#")]),e._v(" 注册中心")]),e._v(" "),r("p",[e._v("Dubbo 中默认使用 Zookeeper 作为注册中心")]),e._v(" "),r("h3",{attrs:{id:"分布式锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),r("h3",{attrs:{id:"分布式队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式队列"}},[e._v("#")]),e._v(" 分布式队列")]),e._v(" "),r("h3",{attrs:{id:"配置管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置管理"}},[e._v("#")]),e._v(" 配置管理")]),e._v(" "),r("p",[e._v("Zookeeper 节点可以保存数据不超过1M的数据，同时可以通过 watch 机制实现配置更新的通知。")]),e._v(" "),r("h2",{attrs:{id:"zab-协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zab-协议"}},[e._v("#")]),e._v(" Zab 协议")]),e._v(" "),r("p",[e._v("Zab协议的全称是 Zookeeper Atomic Broadcast （Zookeeper原子广播）。保证了集群中各个 server 之间的同步。Zab协议是专为Zookeeper设计的支持崩溃恢复原子消息广播算法。")]),e._v(" "),r("p",[e._v("包含两种模式：崩溃恢复和消息广播。")]),e._v(" "),r("h3",{attrs:{id:"zab-协议作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zab-协议作用"}},[e._v("#")]),e._v(" Zab 协议作用")]),e._v(" "),r("ul",[r("li",[e._v("使用单一的主进程（leader）接收并处理客户端的事务请求。")]),e._v(" "),r("li",[e._v("保证全局的事务被顺序引用，例如先创建/a 节点之后才是创建/a/b节点。")]),e._v(" "),r("li",[e._v("当主进程出现异常的时候，集群能正常工作")])]),e._v(" "),r("h3",{attrs:{id:"zookeeper-集群中的角色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-集群中的角色"}},[e._v("#")]),e._v(" Zookeeper 集群中的角色")]),e._v(" "),r("p",[e._v("Zookeeper 集群中有三类角色，包括 leader、follower以及 observer。")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("角色")]),e._v(" "),r("th",[e._v("作用")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("leader")]),e._v(" "),r("td",[e._v("负责处理读写请求，同时广播数据同步消息（写请求）。发起并维护与各 follwer 及 observer 间的心跳。")])]),e._v(" "),r("tr",[r("td",[e._v("follower")]),e._v(" "),r("td",[e._v("处理读请求，将写请求转发到客户端，同时拥有在 leader 崩溃时的投票权")])]),e._v(" "),r("tr",[r("td",[e._v("observer")]),e._v(" "),r("td",[e._v("与 follower 类似，但不具备投票权，该角色主要的作用是提高 Zookeeper 集群中的读效率。")])])])]),e._v(" "),r("p",[e._v("服务器状态：")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("状态")]),e._v(" "),r("th",[e._v("描述")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("LOOKING")]),e._v(" "),r("td",[e._v("该状态下的服务器认为当前集群中没有Leader，会发起Leader选举。")])]),e._v(" "),r("tr",[r("td",[e._v("FOLLOWING")]),e._v(" "),r("td",[e._v("表明当前服务器角色是Follower，并且它知道Leader是谁。")])]),e._v(" "),r("tr",[r("td",[e._v("LEADING")]),e._v(" "),r("td",[e._v("表明当前服务器角色是Leader，它会维护与Follower间的心跳。")])]),e._v(" "),r("tr",[r("td",[e._v("OBSERVING")]),e._v(" "),r("td",[e._v("表明当前服务器角色是Observer，与Folower唯一的不同在于不参与选举，也不参与集群写操作时的投票。")])])])]),e._v(" "),r("h3",{attrs:{id:"zab-协议下的读写操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zab-协议下的读写操作"}},[e._v("#")]),e._v(" Zab 协议下的读写操作")]),e._v(" "),r("h4",{attrs:{id:"写-leader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写-leader"}},[e._v("#")]),e._v(" 写 leader")]),e._v(" "),r("ol",[r("li",[e._v("客户端向Leader发起写请求")]),e._v(" "),r("li",[e._v("Leader将写请求以Proposal的形式发给所有Follower并等待ACK")]),e._v(" "),r("li",[e._v("Follower收到Leader的Proposal后返回ACK")]),e._v(" "),r("li",[e._v("Leader得到过半数的ACK（Leader对自己默认有一个ACK）后向所有的Follower和Observer发送Commmit")]),e._v(" "),r("li",[e._v("Leader将处理结果返回给客户端")])]),e._v(" "),r("h4",{attrs:{id:"写-follower-或者-observer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写-follower-或者-observer"}},[e._v("#")]),e._v(" 写 follower 或者 observer")]),e._v(" "),r("ol",[r("li",[e._v("客户端向 follower 或者 observer 发起写请求")]),e._v(" "),r("li",[e._v("follower 或者 observer 将写请求转发到 leader 上")]),e._v(" "),r("li",[e._v("剩下操作跟写 leader 一样")])]),e._v(" "),r("h4",{attrs:{id:"读操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读操作"}},[e._v("#")]),e._v(" 读操作")]),e._v(" "),r("p",[e._v("Leader/Follower/Observer都可直接处理读请求，从本地内存中读取数据并返回给客户端即可。")]),e._v(" "),r("h3",{attrs:{id:"zab-协议下的-leader-选举"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zab-协议下的-leader-选举"}},[e._v("#")]),e._v(" Zab 协议下的 leader 选举")]),e._v(" "),r("h3",{attrs:{id:"集群数据同步-消息广播"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集群数据同步-消息广播"}},[e._v("#")]),e._v(" 集群数据同步（消息广播）")]),e._v(" "),r("p",[e._v("消息广播类似于2PC，leader 处理完客户端的请求后，会将请求转化为 proposal（包含全局唯一的 Zxid）向所有的 follower 节点广播数据同步请求，有半数及以上的 follower 节点反馈 ack 之后 leader 向所有的 follower 服务器发送 commit 消息（2PC 是要求所有节点反馈 OK，Zab 只需要半数及以上），即将 leader 上的数据同步到 follower 节点中。")]),e._v(" "),r("p",[e._v("leader 不需要的到 observer 的 ack，因为 observer 没有投票权。")]),e._v(" "),r("h3",{attrs:{id:"崩溃恢复"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#崩溃恢复"}},[e._v("#")]),e._v(" 崩溃恢复")]),e._v(" "),r("p",[e._v("Zookeeper 集群中只有一个 leader ，一旦 leader 崩溃或者因网络原因导致 leader 与过半的 follower 失去连接就需要进行崩溃恢复阶段选举新 leader，同时服务器初始化启动时也会进行 leader 选举。")]),e._v(" "),r("p",[e._v("崩溃恢复需要满足两个要求：")]),e._v(" "),r("ul",[r("li",[e._v("确保已经被 leader 提交的 proposal 必须被所有的 follower 提交")]),e._v(" "),r("li",[e._v("确保未提交的 proposal 被丢弃")])]),e._v(" "),r("p",[e._v("选举过程：")]),e._v(" "),r("p",[e._v("3.4.10版本中默认使用 FastLeaderElection（其他算法将在后续版本中被删除）。")]),e._v(" "),r("p",[e._v("选票数据结构：")]),e._v(" "),r("p",[e._v("每个服务器在进行领导选举时，会发送如下关键信息：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("logicClock")]),e._v(" 每个服务器会维护一个自增的整数，名为logicClock，它表示这是该服务器发起的第多少轮投票")]),e._v(" "),r("li",[r("strong",[e._v("state")]),e._v(" 当前服务器的状态")]),e._v(" "),r("li",[r("strong",[e._v("self_id")]),e._v(" 当前服务器的myid")]),e._v(" "),r("li",[r("strong",[e._v("self_zxid")]),e._v(" 当前服务器上所保存的数据的最大zxid")]),e._v(" "),r("li",[r("strong",[e._v("vote_id")]),e._v(" 被推举的服务器的myid")]),e._v(" "),r("li",[r("strong",[e._v("vote_zxid")]),e._v(" 被推举的服务器上所保存的数据的最大zxid")])]),e._v(" "),r("blockquote",[r("ul",[r("li",[e._v("0 基于UDP的LeaderElection")]),e._v(" "),r("li",[e._v("1 基于UDP的FastLeaderElection")]),e._v(" "),r("li",[e._v("2 基于UDP和认证的FastLeaderElection")]),e._v(" "),r("li",[e._v("3 基于TCP的FastLeaderElection")])])]),e._v(" "),r("blockquote",[r("p",[e._v("Zab 通过巧妙的设计 zxid 来实现这一目的。一个 zxid 是64位，高 32 是纪元（epoch）编号，每经过一次 leader 选举产生一个新的 leader，新 leader 会将 epoch 号 +1。低 32 位是消息计数器，每接收到一条消息这个值 +1，新 leader 选举后这个值重置为 0。这样设计的好处是旧的 leader 挂了后重启，它不会被选举为 leader，因为此时它的 zxid 肯定小于当前的新 leader。当旧的 leader 作为 follower 接入新的 leader 后，新的 leader 会让它将所有的拥有旧的 epoch 号的未被 COMMIT 的 proposal 清除。")])]),e._v(" "),r("h3",{attrs:{id:"zookeeper-崩溃恢复客户端怎么发现新的主节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-崩溃恢复客户端怎么发现新的主节点"}},[e._v("#")]),e._v(" Zookeeper 崩溃恢复客户端怎么发现新的主节点")]),e._v(" "),r("h3",{attrs:{id:"读取还未同步的数据怎么办"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读取还未同步的数据怎么办"}},[e._v("#")]),e._v(" 读取还未同步的数据怎么办")]),e._v(" "),r("p",[e._v("Zookeeper 是允许节点之间的数据存在不同，比如说在 Zab 协议下只需要大部分的节点发送 commit 信息就可以对数据进行同步，这个时候如果有客户端对这个数据向还未同步数据的客户端发送读请求就会导致读取到的是旧数据，如果必须读取到新数据需要在读取之前调用 Zookeeper API 中的 sync() 方法。")])])}),[],!1,null,null,null);v.default=t.exports}}]);