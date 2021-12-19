(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{385:function(e,r,o){"use strict";o.r(r);var t=o(44),c=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"kafka"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[e._v("#")]),e._v(" Kafka")]),e._v(" "),o("p",[e._v("kafka 由 broker、provider、consumer、zookeeper 组成。")]),e._v(" "),o("ul",[o("li",[e._v("broker 负责存储消息，存储到磁盘中")]),e._v(" "),o("li",[e._v("provider 负责提供消息")]),e._v(" "),o("li",[e._v("consumer 负责消费消息")]),e._v(" "),o("li",[e._v("zookeeper 负责集群元数据的管理、控制器的选组等操作")])]),e._v(" "),o("p",[e._v("topic 和 partition ，主题和分区的关系。")]),e._v(" "),o("p",[e._v("kafka 中的消息以 topic 进行分类，provider 将消息发送到指定 topic 中，consumer 消费指定 topic 中消息。一个 topic 中有多个 partition，一个 partition 只属于一个 topic，同一 topic 下的 partition 保存的消息是不一样的，partition 在存储层面相当于一个日志文件，每一个消息在保存在分区中时会被指定一个 offset 用来表示该消息，Kafka 通过它来保证消息在分区内的顺序性，不过 offset 并不跨越分区，也就是说，Kafka 保证的是分区有序而不是主题有序。")]),e._v(" "),o("p",[e._v("partition 和 replica（副本）。")]),e._v(" "),o("p",[e._v("为了提高容灾能力，kafka 为分区提供了多副本机制。同一分区的不同副本中保存的是相同的消息（在同一时刻，副本之间并非完全一样），副本之间是“ 一主多从”的关系，其中 leader 副本负责处理读写请求 ，follower 副本只负责与 leader 副本的消息同步。副本处于不同的 broker 中，当 leader 故障会从 follower 挑选新的 leader。")]),e._v(" "),o("p",[e._v("partition 中的 replica 统称为 AR （assigned replica）。与 leader 保持一定程度同步进度的称为 ISR（In-Sync Replica），超过这个进度的称为 OSR（Out-Sync Replica）。AR = ISR + OSR。只有 ISR 才会有可能在 leader 故障时成为新 leader。")]),e._v(" "),o("p",[e._v("HW （High Watermark）和 LEO（Log end offset）。")]),e._v(" "),o("p",[e._v("HW 表示 consumer 可以读到的消息 offset，LEO 表示将要写入消息的 offset。")]),e._v(" "),o("p",[e._v("kafka 中一个消息的发送需要经过拦截器（可选）、序列化器、分区器才会到达消息队列中。")]),e._v(" "),o("p",[e._v("生产者客户端又两个线程进行协调，一个是主线程一个是 Sender 线程（发送消息线程）。主线程负责创建消息并将消息金国拦截器、序列化器、分区器之后放入消息累加器（RecordAccumulator）中，Sender 线程从消息累加器中取出消息发送。RecordAccumulator 主要用来缓存消息以便 Sender 线程可以批量发送，进而减少网络传输的资源消耗以提升性能 。")]),e._v(" "),o("p",[e._v("RecordAccumulator 默认大小为 32m，可以配置。当主线程生产消息速度大于 Sender 线程发送速度时主线程要么阻塞要么抛出异常，这个取决于 max.block.ms 配置，默认为 60000，即 60s。")]),e._v(" "),o("p",[e._v("RecordAccumulator 为每一个分区都准备了一个双端队列，主线程的发送的消息会追加到队列尾部，Sender 线程从队列头部读取数据。")]),e._v(" "),o("p",[e._v("队列中的内容为 ProducerBatch，注意 ProducerBatch 不是 ProducerRecord, ProducerBatch中可以包含一至多个ProducerRecord 。 通俗地说，ProducerRecord 是生产者中创建的消息，而Producer Batch 是指一个消息批次 ，ProducerRecord 会被包含在 ProducerBatch 中，这样可以使宇节的使用更加紧凑。与此同时，将较小的 ProducerRecord 拼凑成一个较大的 ProducerBatch，也可以减少网络请求的次数以提升整体的吞吐量 。")]),e._v(" "),o("p",[e._v("kafka 将 ByteBuffer 保存在 ByteBuffer 中进行管理，减少创建和释放消耗的资源。")]),e._v(" "),o("blockquote",[o("p",[e._v("消息在网络上都是以字节 Byte 的形式传输的，在发送之前需要创建一块内存区域来保存对应的消息 。在 Kafka 生产者客户端中，通过 java.io.ByteBuffer 实现消息内存的创建和释放。不过频繁的创建和释放是比较耗费资源的，在 RecordAccumulator 的内部还有一个 BufferPool,它主要用来实现 ByteBuffer 的复用，以实现缓存的高效利用 。不过 BufferPool 只针对特定大小的 ByteBuffer 进行管理，而其他大小的 ByteBuffer 不会缓存进 BufferPool 中，这个特定的大小由 batch.size 参数来指定，默认值为 16384B ，即 16KB 。 我们可以适当地调大 batch.s 工 ze参数 以便多缓存一些消息。")])]),e._v(" "),o("p",[e._v("当消息进入 RecordAccumulator 时，如果找不到分区对应的队列会先创建队列，之后在尾部获取一个 ProducerBatch（如果没有会新建），查看 ProducerBatch 是否还够空间放入消息，如果不够则会创建一个 ProducerBatch 将消息放入。在新建 ProducerBatch 时评估这条消息的大小是否超过 batch . size 参数 的大小，如果不超过，那么就以 batch. size 参数的大小来创建 ProducerBatch，这样在使用完这段内存区域之后，可以通过 BufferPool 的管理来进行复用；如果超过，那么就以评估的大小来创建 ProducerBatch ，这段内存区域不会被复用。")]),e._v(" "),o("blockquote",[o("p",[e._v("请求在从 Sender 线程发往 Kafka 之前还会保存到 InF lightRequests 中，InFlightRequests 保存对象的具体形式为 Map<Nodeld,Deque<R巳quest>＞，它的主要作用是缓存 了已经发出去但还没有收到响应的请求（ Nodeld 是一个String 类型，表示节点的id 编号）。")]),e._v(" "),o("p",[e._v("InFlightRequests 还提供了许多管理类 的方法，并且通过配置参数还可 以限制每个连接（也就是客户端与 Node 之间的连接）最多缓存的请求数。这个配置参数为 max. in. flight.requests.per. connection ，默认值为 5 ，即每个连接最多只能缓存 5 个未响应的请求，超过该数值之后就不能再向这个连接发送更多的请求了，除非有缓存的请求收到了响应（ Response ）。通过比较 Deque"),o("Request",[e._v("的 size 与这个参数的大小来判断对应的 Node 中是否己经堆积了很多未响应的消息，如果真是如此，那么说明这个 Node 节点负载较大或网络连接有问题，再继续 向其发送请求会增大请求超时的可能。")])],1)]),e._v(" "),o("p",[e._v("Producer 是线程安全的，Consumer 不是线程安全的，因为它保存了状态。")])])}),[],!1,null,null,null);r.default=c.exports}}]);