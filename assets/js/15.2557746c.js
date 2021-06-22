(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(s,e,a){"use strict";a.r(e);var n=a(44),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-基础数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-基础数据类型"}},[s._v("#")]),s._v(" Redis 基础数据类型")]),s._v(" "),a("p",[s._v("Redis 基础数据类型有 sring、list、hash、set、zset 五种，实现这五种数据类型分别使用了简单动态字符串、双向链表、压缩列表、哈希表、跳表和整数数组这六种数据结构。")]),s._v(" "),a("h2",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[s._v("#")]),s._v(" string")]),s._v(" "),a("p",[s._v("string 底层通过简单动态字符串（SDS，Simple Dynamic String）实现。SDS 中有 int、embstr 和 raw 三种编码方式。int 保存8个字节的长整型，字符串值是整型是用 long 表示；embstr 保存<= 39 字节的字符串。raw 保存大于39个字节的字符串。")]),s._v(" "),a("p",[s._v("SDS 包含三个属性：len、free、buf。buf 是一个字节数组，用来保存字符串，len 表示 SDS 中保存的字符串的长度，free 用来记录 buf 数组中未使用的字节的数量。")]),s._v(" "),a("h3",{attrs:{id:"相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关操作"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 设置一个 key 的值\nset key value \n// 只有在 key 不存在时设置 key 的值\nsetnx key value\n//将值 value 关联到 key ，并将 key 的过期时间设为 seconds (以秒为单位)\nsetex key seconds value \n// 设置多个键值\nmset key1 value1 key2 value2 ...\n// 获取一个 key 的值\nget key\n// 将给定 key 的值设为 value ，并返回 key 的旧值\ngetset key value\n// 获取所有(一个或多个)给定 key 的值\nmget key1 key2 ...\n// 字符串长度\nstrlen key\n// 将 key 对应的 value 自增1\nincr key\n// key 对应的 value 加上增量值（increment）\nincrby key increment\n// key 对应的 value 加上浮点数增量值（increment）\nincrbyfloat key increment\n// 自减1\ndecr key\n// 减去减量值\ndecrby key decrement\n// key 已存在并且是字符串， APPEND 命令将指定的 value 追加到该 key 原来值（value）的末尾\nappend key value\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("ol",[a("li",[s._v("讲对象转成 JSONString 方式存储，取出时进行反序列化获取对象。")]),s._v(" "),a("li",[s._v("计数器")]),s._v(" "),a("li",[s._v("共享用户 Session")])]),s._v(" "),a("h3",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[s._v("#")]),s._v(" 扩展")]),s._v(" "),a("p",[a("strong",[s._v("C 语言字符串与 SDS 的区别：")])]),s._v(" "),a("ul",[a("li",[s._v("C 字符串无法保存空字符串（\\0）。因为 C 字符串是以空字符串来表示字符串的结束，如果保存空字符串会导致被程序误认为是字符串结束。SDS 也是以空字符串表示结束，但是因为 SDS 记录了保存的字符串的长度（len属性），因此保存空字符串不会被误认为是字符串结束。")]),s._v(" "),a("li",[s._v("C 字符串不会记录自身的长度，获取长度需要遍历整个字符串，时间复杂度为O(n)，SDS 保存了字符串的长度，获取长度时间复杂度为O(1)")]),s._v(" "),a("li",[s._v('C 字符串可能会出现缓冲区溢出问题。该问题主要出现在 strcat 这个字符串拼接方法上，当内存中存在紧邻的两个字符串 s1 = "Redis" 和 s2 = "MongoDB"，如果对 s1 执行 strcat(s1, " Cluster") 方法而没有在之前对 s1 分配足够的空间就会导致 s2 的内容被意外的修改。SDS 中对拼接操作的方法进行了优化，会在拼接前判断是否有足够的空间，如果不够会先进行分配，因此不会产生溢出问题。')]),s._v(" "),a("li",[s._v("SDS 可以减少修改字符串时带来的内存重分配次数。C 字符串每次修改字符串（增长或缩短）都需要重分配内存空间。例如增长需要扩容，不然可能会发生缓冲区溢出，而缩短在缩短字符串之后需要释放字符串不需要的内存空间，不然可能会发生内存泄露。SDS 会预分配空间，这部本空间如果未被使用会，未使用的长度会记录在 free 属性中。同时 SDS 还在用了惰性空间释放策略，即在缩短字符串时不会立即释放空间，而是将多出来的字节记录在 free 属性中，留着以后增长的时候使用。")])]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("字符串的修改不频繁时，每次修改都分配内存是可以接受的，但是 Redis 中的数据是会用在经常被修改的场合，每次修改都会占用一部分时间，这不符合 Redis 对速度的要求。")]),s._v(" "),a("li",[s._v("预分配空间的做法在很多地方都有使用，用来提高程序运行的效率。例如 jvm 在启动一个 java 程序时会预分配内存空间，这样不用在需要用到内存的时候频繁从内存中获取。")])])]),s._v(" "),a("ul",[a("li",[s._v("SDS 保存二进制数据安全，因此 SDS 不仅可以保存文本数据也可以保存任意格式的二进制数据。因为 C 字符串无法保存空字符串，所以对于图片、音频、视频、压缩文件等二进制数据无法进行保存。SDS 中的 API 都是二进制安全的，因为都会以处理二进制的方式来处理保存在 SDS 中的数据。")]),s._v(" "),a("li",[s._v("SDS 兼容部分 C 字符串函数。通过遵循 C 字符串以空字符结尾的方式，SDS 可以在有需要时重用部分 C 字符串函数（<string.h>库函数），避免了不必要的代码重复。")])]),s._v(" "),a("p",[a("strong",[s._v("embstr 和 raw 区别")])]),s._v(" "),a("ul",[a("li",[s._v("embstr 保存小于等于39字节的字符串，raw 保存大于39字节的字符串。")]),s._v(" "),a("li",[s._v("embstr 使用时只分配一次内存空间，raw 需要分配两次内存空间。")])]),s._v(" "),a("h2",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[s._v("#")]),s._v(" list")]),s._v(" "),a("p",[s._v("链表底层实现有压缩列表和双端链表两种方式。")]),s._v(" "),a("h3",{attrs:{id:"相关操作-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-2"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 将一个或多个值插入列表头部\nlpush key value1 value2 ... \n// 将一个或多个值插入列表尾部\nrpush key value1 value2 ... \n// 移除并获取列表第一个值\nlpop key \n// 移除并获取列表最后一个值\nrpop key \n// 移除并获取列表第一个值，如果列表没有元素会阻塞列表知道等待超时或发现值为止\nblpop key1 timeout \n// 移除并获取列表最后一个值，如果列表没有元素会阻塞列表知道等待超时或发现值为止\nbrpop key1 timeout \n//通过索引获取列表中的值\nlindex key index \n// 列表长度\nllen key \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"使用场景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-2"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("ol",[a("li",[s._v("消息队列，通过左进右出的指令组成队列的设计（lpush 插入数据，brpop 阻塞获取列表数据）。")]),s._v(" "),a("li",[s._v("粉丝列表、文章列表等，需要分页展示时，列表有序并且支持按照范围内获取元素，解决分页的同时提高查询效率。")])]),s._v(" "),a("h3",{attrs:{id:"扩展-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-2"}},[s._v("#")]),s._v(" 扩展")]),s._v(" "),a("p",[a("strong",[s._v("压缩列表")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("压缩列表是 Redis 为了节约内存而使用的一种数据结构，由一系列特殊编码的连续内存块组成的顺序型(sequential)数据结构。当存储的数据较少时，并且每个列表项都是小正数组或者长度较小的字符串，Redis 会优先使用压缩列表存储数据。当list中数据项增加到64后会将压缩列表转换成双向链表（可在配置文件中设置大小）。")])]),s._v(" "),a("li",[a("p",[s._v("压缩列表有四个字段分别是zlbytes、zltail、zllen和zlend。zlbytes、zltail、zllen依次保存在表头，分别表示列表长度、列表尾的偏移量、列表中 entry（元素）个数；zlend保存在表尾，表示表结束。")])]),s._v(" "),a("li",[a("p",[s._v("一个 entry 中包含previous_entry_length、encoding 和 content 属性，可以保存一个字节数据或者一个整数值。previous_entry_length 表示前一个 entry 的长度，content 保存数据，encoding 记录 content 属性所保存的数据的类型和长度。")])])]),s._v(" "),a("h2",{attrs:{id:"hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[s._v("#")]),s._v(" hash")]),s._v(" "),a("p",[s._v("类似于 Java 中 Map 的结构，一般用于存储对象。底层有压缩列表和哈希表两种实现。")]),s._v(" "),a("h3",{attrs:{id:"相关操作-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-3"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 为一个key设置多个值\nhset key field1 value1 field2 value2 ... \n// 只有字段 field 不存在才会设置值\nhsetnx key field value\n// 获取key中一个field的值\nhget key field \n// 迭代哈希表中的键值对，每次只获取一部分键值对，cursor 表示游标，每次迭代都会返回游标用做下一次迭代，初始使用可以使用0，迭代游标返回0表示结束，match 表示返回匹配的数据（如果只有少量数据匹配可能这次迭代不会返回数据，得多迭代几次），count 表示一次迭代返回的数据量\nhscan key cursor [match pattern] [count count]\n// 获取所有的值包括字段和值\nhgetall key  \n// 获取所有字段\nhkeys key\n// 获取所有值\nhvals key\n// 删除一个或多个哈希表字段\nhdel key field1 field2 ...\n// 判断字段是否存在\nhexists kye field\n// 为哈希表 key 中的指定字段的整数值加上增量 increment\nhincrby key field increment\n// 为哈希表 key 中的指定字段的浮点数值加上增量 increment\nhincrbyfloat key field increment\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"使用场景-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-3"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("p",[s._v("使用场景单一，对象中包含对象时不好存储。")]),s._v(" "),a("h3",{attrs:{id:"扩展-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-3"}},[s._v("#")]),s._v(" 扩展")]),s._v(" "),a("p",[s._v("hash 跟 list 一样，在数据量少时会优先采用压缩列表的实现，hash 中的元素增加到一定数量后会转为哈希表实现。")]),s._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[s._v("#")]),s._v(" set")]),s._v(" "),a("p",[s._v("set 是一个无序不重复的集合。底层使用哈希表和整数数组实现。")]),s._v(" "),a("h3",{attrs:{id:"相关操作-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-4"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 向集合添加一个或多个值\nsadd key member1 member2 ... \n// 移除集合中一个或多个值\nsrem key member1 member2 ... \n// 移除并返回集合中一个随机值\nspop key \n// 返回集合中所有成员\nsmembers key \n// 返回第一个集合与其他集合之间的差异\nsdiff key1 key2 ...\n// 返回给定所有集合交集\nsinter key1 key2 ... \n// 返回给定所有集合并集\nsunion key1 key2 ... \n// 返回所有集合的差集并保存在集合 destination 中\nsdiffstore destination key1 key2 ...\n// 返回给定所有集合的交集并保存在集合 destination 中\nsinter destination key1 key2 ...\n// 返回给定所有集合的并集并保存在集合 destination 中\nsunionstore destination key1 key2 ...\n// 迭代集合中的元素（参数同 hash 的 hscan）\nsscan key cursor [match pattern] [count count]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"使用场景-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-4"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("ol",[a("li",[s._v("多客户端的情况下去重的数据，单机可以使用 Java 中的 HashSet")]),s._v(" "),a("li",[s._v("交集并集差集等")])]),s._v(" "),a("h3",{attrs:{id:"扩展-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-4"}},[s._v("#")]),s._v(" 扩展")]),s._v(" "),a("p",[s._v("在元素少时会使用整数数组构建 set，可以在配置文件中配置大小。")]),s._v(" "),a("h2",{attrs:{id:"zset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zset"}},[s._v("#")]),s._v(" zset")]),s._v(" "),a("p",[s._v("有序 set。相比与 set 多了一个分数属性，集合自动按照分数进行排序。底层使用压缩列表和跳表实现。")]),s._v(" "),a("h3",{attrs:{id:"相关操作-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关操作-5"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//添加一个或多个值，或者更新已有成员分数\nzadd key score1 member1 score2 member2 ... \n// 获取集合成员数\nzcard key \n// 返回集合中成员的分数\nzscore key member\n// 返回集合中成员的索引（从小到大排序）\nzrank key menber\n// 返回集合中成员的索引（从大到小排序）\nzrevrrank key member\n// 计算指定区间分数的成员数\nzcount key min max\n// 返回区间内有序集合成员（升序），withsores 表示是否返回分数\nzrange key start stop [withscores]\n// 返回区间内有序集合成员（降序），withsores 表示是否返回分数\nzrevrange key satrt stop [withscores]\n// 移除集合中一个或多个成员\nzrem key member1 member2 ...\n// 移除给定排名区间的所有成员\nzremrangebyrank key start stop\n// 移除集合中给定分数区间的所有成员\nzremrangebyscore key min max\n// 差集、并集、交集跟 set 类似，但是指令不一样\n...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"使用场景-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-5"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("ol",[a("li",[s._v("排行榜：例如视频网站上的排行版，榜单可能是参考多方面的因素，例如时间、播放量、点赞数等。")]),s._v(" "),a("li",[s._v("带权重队列：例如微博热搜榜后面是热度值，前面是名称")])]),s._v(" "),a("h3",{attrs:{id:"扩展-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-5"}},[s._v("#")]),s._v(" 扩展")]),s._v(" "),a("p",[a("strong",[s._v("跳表")])]),s._v(" "),a("p",[s._v("跳表是一种包含了多级索引的列表。通过多级索引实现数据的快速定位，跳变的查找的时间复杂度为O(N)。")]),s._v(" "),a("p",[a("strong",[s._v("压缩列表")])]),s._v(" "),a("p",[s._v("Redis 在数据量小时优先使用压缩列表创建 zset，数据量大时会转换成跳表，可以在配置中设置转换大小。")]),s._v(" "),a("h2",{attrs:{id:"数据结构时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构时间复杂度"}},[s._v("#")]),s._v(" 数据结构时间复杂度")]),s._v(" "),a("p",[s._v("查找元素时间复杂度")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("时间复杂度")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("双向链表")]),s._v(" "),a("td",[s._v("O(N)")])]),s._v(" "),a("tr",[a("td",[s._v("压缩列表")]),s._v(" "),a("td",[s._v("O(N)")])]),s._v(" "),a("tr",[a("td",[s._v("哈希表")]),s._v(" "),a("td",[s._v("O(1)")])]),s._v(" "),a("tr",[a("td",[s._v("跳表")]),s._v(" "),a("td",[s._v("O(logN)")])]),s._v(" "),a("tr",[a("td",[s._v("整数数组")]),s._v(" "),a("td",[s._v("O(N)")])])])]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.runoob.com/redis/redis-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis 教程 | 菜鸟教程 (runoob.com)"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/71880195",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis压缩列表原理与应用分析 - 知乎 (zhihu.com)"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("《Redis 设计与实现》")])])}),[],!1,null,null,null);e.default=t.exports}}]);