(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{390:function(s,e,a){"use strict";a.r(e);var t=a(44),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-内存模型"}},[s._v("#")]),s._v(" Redis 内存模型")]),s._v(" "),a("h2",{attrs:{id:"redis-内存模型-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-内存模型-2"}},[s._v("#")]),s._v(" Redis 内存模型")]),s._v(" "),a("h3",{attrs:{id:"内存统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存统计"}},[s._v("#")]),s._v(" 内存统计")]),s._v(" "),a("p",[s._v("查看内存使用情况")]),s._v(" "),a("p",[s._v("info memory")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("127.0.0.1:6379> info memory\n# Memory\nused_memory:700400\nused_memory_human:683.98K\nused_memory_rss:663456\nused_memory_peak:700400\nused_memory_peak_human:683.98K\nused_memory_lua:36864\nmem_fragmentation_ratio:0.95\nmem_allocator:jemalloc-3.6.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("参数说明")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("**used_memory：**Redis分配器分配的内存总量（单位是字节），包括使用的虚拟内存（即swap）")])]),s._v(" "),a("li",[a("p",[s._v("**used_memory_rss：**Redis进程占据操作系统的内存（单位是字节），与top及ps命令看到的值是一致的")])]),s._v(" "),a("li",[a("p",[s._v("**mem_fragmentation_ratio：**内存碎片比率，该值是used_memory_rss / used_memory的比值。")])]),s._v(" "),a("li",[a("p",[s._v("**mem_allocator：**Redis使用的内存分配器，在编译时指定；")])])]),s._v(" "),a("h3",{attrs:{id:"内存划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存划分"}},[s._v("#")]),s._v(" 内存划分")]),s._v(" "),a("p",[s._v("Redis 内存占用只要分为以下部分")]),s._v(" "),a("h4",{attrs:{id:"数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[s._v("#")]),s._v(" 数据")]),s._v(" "),a("h4",{attrs:{id:"进程本身运行需要的内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程本身运行需要的内存"}},[s._v("#")]),s._v(" 进程本身运行需要的内存")]),s._v(" "),a("h4",{attrs:{id:"缓冲内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲内存"}},[s._v("#")]),s._v(" 缓冲内存")]),s._v(" "),a("h4",{attrs:{id:"内存碎片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存碎片"}},[s._v("#")]),s._v(" 内存碎片")]),s._v(" "),a("h3",{attrs:{id:"redis-数据存储细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据存储细节"}},[s._v("#")]),s._v(" Redis 数据存储细节")]),s._v(" "),a("p",[s._v("内存分配器（如jemalloc）、简单动态字符串（SDS）、5种对象类型及内部编码、redisObject。")]),s._v(" "),a("p",[s._v("执行set hello world涉及到的数据模型：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/2441834/1614389654389-18cb04d9-d057-4fcd-aac3-0501caf6d392.png",alt:"img"}})]),s._v(" "),a("h4",{attrs:{id:"jemalloc-内存分配器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jemalloc-内存分配器"}},[s._v("#")]),s._v(" jemalloc（内存分配器）")]),s._v(" "),a("p",[s._v("Redis 在编译时便会指定内存分配器；内存分配器可以是 libc 、jemalloc 或者 tcmalloc，默认是 jemalloc。")]),s._v(" "),a("p",[s._v("特点")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("jemalloc作为Redis的默认内存分配器，在减小内存碎片方面做的相对比较好。")])]),s._v(" "),a("li",[a("p",[s._v("jemalloc在64位系统中，将内存空间划分为小、大、巨大三个范围；")])]),s._v(" "),a("li",[a("p",[s._v("每个范围内又划分了许多小的内存块单位；")])]),s._v(" "),a("li",[a("p",[s._v("当Redis存储数据时，会选择大小最合适的内存块进行存储。")])])]),s._v(" "),a("p",[s._v("例如，如果需要存储大小为130字节的对象，jemalloc会将其放入160字节的内存单元中。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/2441834/1614389727623-32a779c4-5326-4c87-9d76-c0e7e1f396c4.png",alt:"img"}})]),s._v(" "),a("h4",{attrs:{id:"redisobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redisobject"}},[s._v("#")]),s._v(" redisObject")]),s._v(" "),a("p",[s._v("Redis 中的对象存储在redisObject 中。")]),s._v(" "),a("p",[s._v("redisObject 的结构与对象类型、编码、内存回收、共享对象都有关系；一个redisObject 对象的大小为16字节：")]),s._v(" "),a("p",[s._v("4bit+4bit+24bit+4Byte+8Byte=16Byte。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct redisObject {\n　　unsigned type:4;\n　　unsigned encoding:4;\n　　unsigned lru:REDIS_LRU_BITS; /* lru time (relative to server.lruclock) */\n　　int refcount;\n　　void *ptr;\n} robj;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("type")])]),s._v(" "),a("p",[s._v("type字段表示对象的类型，占4个比特；包含五个基础数据类型")]),s._v(" "),a("ul",[a("li",[s._v("encoding")])]),s._v(" "),a("p",[s._v("encoding表示对象的内部编码，占4个比特")]),s._v(" "),a("p",[s._v("关于Redis内部编码的转换，都符合以下规律："),a("strong",[s._v("编码转换在Redis写入数据时完成，且转换过程不可逆，只能从小内存编码向大内存编码转换")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/2441834/1614389843487-57aa7709-f004-4cc9-ae02-1cacc9c3ee0e.png",alt:"img"}})]),s._v(" "),a("ul",[a("li",[s._v("lru")])]),s._v(" "),a("p",[s._v("lru记录的是对象最后一次被命令程序访问的时间，占据的比特数不同的版本有所不同（如4.0版本占24比特，2.6版本占22比特）。")]),s._v(" "),a("ul",[a("li",[s._v("refcount")])]),s._v(" "),a("p",[s._v("refcount记录的是该对象被引用的次数，类型为整型。")]),s._v(" "),a("p",[s._v("refcount的作用，主要在于对象的引用计数和内存回收。当创建新对象时，refcount初始化为1；当有新程序使用该对象时，refcount加1；当对象不再被一个新程序使用时，refcount减1；当refcount变为0时，对象占用的内存会被释放。")]),s._v(" "),a("ul",[a("li",[s._v("ptr")])]),s._v(" "),a("p",[s._v("ptr指针指向具体的数据，如前面的例子中，set hello world，ptr指向包含字符串world的SDS。")]),s._v(" "),a("h4",{attrs:{id:"sds-simple-dynamic-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sds-simple-dynamic-string"}},[s._v("#")]),s._v(" SDS(Simple Dynamic String)")]),s._v(" "),a("p",[s._v("Redis 没有直接使用C 字符串(即以空字符’\\0’结尾的字符数组)作为默认的字符串表示，而是使用了SDS。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct sdshdr {\n    int len;\n    int free;\n    char buf[];\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("buf表示字节数组，用来存储字符串；len表示buf已使用的长度，free表示buf未使用的长度。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/2441834/1614389991218-0789fb43-2a86-4490-a09d-5a3e24100733.png",alt:"img"}})]),s._v(" "),a("h4",{attrs:{id:"估算-redis-内存使用量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#估算-redis-内存使用量"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"http://www.redis.cn/redis_memory/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("估算 Redis 内存使用量")]),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("https://www.cnblogs.com/kismetv/p/8654978.html")])])}),[],!1,null,null,null);e.default=r.exports}}]);