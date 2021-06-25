(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{368:function(t,v,_){"use strict";_.r(v);var s=_(44),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"哨兵机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哨兵机制"}},[t._v("#")]),t._v(" 哨兵机制")]),t._v(" "),_("p",[t._v("哨兵是为了保证主从模式在主库故障时还能继续处理客户端请求而设计的一种机制。主从模式下如果从库发生故障，客户端可以向主库和其他从库发送请求，但是如果主库故障了，对于客户端的写要求就无法处理，从库也无法同步到主库的数据。")]),t._v(" "),_("h2",{attrs:{id:"哨兵机制-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哨兵机制-2"}},[t._v("#")]),t._v(" 哨兵机制")]),t._v(" "),_("p",[t._v("哨兵是一个运行在特殊模式下的 Redis 进程，主要负责监控、选主和通知。")]),t._v(" "),_("ul",[_("li",[t._v("监控")])]),t._v(" "),_("p",[t._v("监控是指哨兵进程在运行时，周期性地给所有的主从库发送 PING 命令（心跳机制），检测它们是否仍然在线运行。主从库没有响应被标记为“下线状态”，主库下线则开始自动切换主库流程。")]),t._v(" "),_("blockquote",[_("p",[t._v("心跳机制是长连接的实现方法")])]),t._v(" "),_("ul",[_("li",[t._v("选主")])]),t._v(" "),_("p",[t._v("主库挂了之后按照一定的规则选取一个从库实例作为新主库。")]),t._v(" "),_("ul",[_("li",[t._v("通知")])]),t._v(" "),_("p",[t._v("哨兵会把新主库的连接信息发给其他从库，让它们执行 replicaof 命令，和新主库建立连接，并进行数据复制。同时，哨兵会把新主库的连接信息通知给客户端，让它们把请求操作发到新主库上。")]),t._v(" "),_("blockquote",[_("p",[t._v("Redis 4 之前，主从切换后会进行全量复制。4 之后只需要进行增量复制。（psync2）")])]),t._v(" "),_("p",[t._v("当主库故障时，哨兵发送 PING 指令到主库没有响应就会认为主库故障了，但是会有一个问题，就是误判。如果因为主从库之间网络压力较大、网络拥塞造成主库无法响应时就会导致误判。为了防止误判的问题，哨兵机制一般会采取集群部署的方式。只有大多数哨兵（N/2+1）认为主库故障了才会真的认为需要选主，这样可以减少误判的概率，避免误判带来的主从库切换。")]),t._v(" "),_("p",[t._v("如果主库真的故障了，这时候就需要选出新主库，哨兵集群中会按照筛选加打分的形式选取主库。筛选的条件是检查从库当前网络连接状态。如果从库总是和主库断连并超过了一定次数，这个从库就会被筛掉（down-after-milliseconds 主从库超时时间，在哨兵配置文件中，如果超过十次就认为该从库不适合做主库）。打分有三个规则，分别是从库优先级、从库复制进度以及从库 ID 号。从库的优先级可以通过 slave-priority 配置项设置；从库复制进度是跟旧主库的同步程度最接近的得分高，即从库之间比较 slave_repl_offset 进度；每一个 Redis 实例都有一个 ID，如果前两项有从库的得分一致，这时候就会选择 ID 号削得作为主库。")]),t._v(" "),_("h2",{attrs:{id:"由哪个哨兵执行主从切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#由哪个哨兵执行主从切换"}},[t._v("#")]),t._v(" 由哪个哨兵执行主从切换")]),t._v(" "),_("p",[t._v("一旦有哨兵发现主库故障了就会向其他哨兵发送 is-master-down-by-addr 命令询问其他哨兵与主库的连接情况，Y 表示主库故障，N 则相反。一旦 Y 的数量超过或等于哨兵配置文件中配置的 quorum 数量，就会认为主库故障需要进行主从切换。此时该哨兵就会向其他哨兵发送命令表明希望由自己进行主从切换，其他哨兵负责投票。哨兵要半数的票是并且该票数大于等于配置的 quorum 值，这样哨兵才会被选择进行主从切换。")]),t._v(" "),_("blockquote",[_("p",[t._v("需要注意的是，如果哨兵集群只有 2 个实例，此时，一个哨兵要想成为 Leader，必须获得 2 票，而不是 1 票。所以，如果有个哨兵挂掉了，那么，此时的集群是无法进行主从库切换的。因此，通常我们至少会配置 3 个哨兵实例。这一点很重要，你在实际应用时可不能忽略了。")])]),t._v(" "),_("h2",{attrs:{id:"哨兵挂了怎么办"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哨兵挂了怎么办"}},[t._v("#")]),t._v(" 哨兵挂了怎么办")]),t._v(" "),_("p",[t._v("在哨兵集群中，即使有哨兵实例出现故障，其他哨兵还是可以进行主从库切换的工作。")]),t._v(" "),_("h2",{attrs:{id:"哨兵之间如何通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哨兵之间如何通信"}},[t._v("#")]),t._v(" 哨兵之间如何通信")]),t._v(" "),_("p",[t._v('哨兵在配置时只配置了需要监控的主库的 ip 和端口信息，并没有其他哨兵的连接信息。这时候为了让哨兵之间互相发现，Redis 提供了发布订阅机制（pub/sub），所有哨兵都默认订阅一个名为"_'),_("em",[t._v("sentinel")]),t._v('_:hello"的频道，这样哨兵就可以在频道上发送自己的 ip 和端口让其他哨兵知道自己的连接信息。')]),t._v(" "),_("p",[t._v("哨兵不仅要跟其他哨兵建立连接，还需要跟其他从库建立连接，这让才能持续的监控其他从库。这时候就需要哨兵向主库发送 info 命令，主库接收到这个命令之后会把从库连接信息列表返回给哨兵，这样哨兵就能和其他从库建立连接了。")]),t._v(" "),_("h2",{attrs:{id:"客户端如何感知主从库切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端如何感知主从库切换"}},[t._v("#")]),t._v(" 客户端如何感知主从库切换")]),t._v(" "),_("p",[t._v("哨兵选出一个从库为新主库后，哨兵会把新主库的地址写入自己的实例 pub/sub（+switch-master）中。客户端需要订阅这个 pub/sub，当pub/sub 有数据时就能感知到发生了主从切换，同时可以拿到新的主库地址，然后将缓存中的写请求写入新主库中。")]),t._v(" "),_("p",[t._v("如果客户端无法获取哨兵的通知，客户端也需要支持主动去获取最新的主从地址进行访问，通过 sentinel get-master-addr-by-name 命令，这样需要客户端不能写死主库地址。")]),t._v(" "),_("p",[t._v("哨兵除了提供 switch-master 频道外，还会提供其他频道供客户端获取主从库的信息。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("频道")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("+sdown")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("-sdown")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("+odown")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("-odown")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("+slave-reconf-sent")]),t._v(" "),_("td",[t._v("哨兵发送 slaveof 命令重新配置从库")])]),t._v(" "),_("tr",[_("td",[t._v("+slave-reconf-inprog")]),t._v(" "),_("td",[t._v("从库配置了新主库，但尚未进行同步")])]),t._v(" "),_("tr",[_("td",[t._v("+slave-reconf-done")]),t._v(" "),_("td",[t._v("从库配置了新主库，且和主库完成同步")])]),t._v(" "),_("tr",[_("td",[t._v("+switch-master")]),t._v(" "),_("td",[t._v("主库地址发生变化")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);