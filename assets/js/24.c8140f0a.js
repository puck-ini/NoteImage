(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{380:function(t,v,_){"use strict";_.r(v);var e=_(44),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"雪崩-穿透-击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#雪崩-穿透-击穿"}},[t._v("#")]),t._v(" 雪崩 穿透 击穿")]),t._v(" "),_("p",[t._v("雪崩、穿透、击穿这三个是缓存使用中在高并发下容易出现的问题，本质上都是绕过缓存层将大量请求请求直接访问到数据库中导致数据库崩溃。")]),t._v(" "),_("h2",{attrs:{id:"雪崩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#雪崩"}},[t._v("#")]),t._v(" 雪崩")]),t._v(" "),_("p",[t._v("雪崩出现的场景是缓存中有大量的 key 过期时间都设置成一样的，这是如果有大量的请求访问这些 key，因为同时失效了缓存中找不到就会直接访问数据库导致数据库崩溃。")]),t._v(" "),_("p",[t._v("同时缓存崩溃也会造成雪崩问题。")]),t._v(" "),_("p",[_("strong",[t._v("解决办法：")])]),t._v(" "),_("ul",[_("li",[t._v("key 设置不同的失效时间，防止同一时间大量的 key 失效，例如设置失效时间时加上随机值")]),t._v(" "),_("li",[t._v("为了避免单一缓存崩溃造成的雪崩问题，使用 Redis 集群部署的情况下可以将数据库分布在不同的 Redis 实例中避免单一实例崩溃导致的缓存崩溃")]),t._v(" "),_("li",[t._v("热点数据永远不失效，有更新操作时更新缓存。")]),t._v(" "),_("li",[t._v("限流机制。当流量达到一定程度之后选择不处理之后到达的缓存，这在一定程度上保证系统不会崩溃以及一部分用户的正常使用。")])]),t._v(" "),_("h2",{attrs:{id:"穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#穿透"}},[t._v("#")]),t._v(" 穿透")]),t._v(" "),_("p",[t._v("穿透问题的出现是缓存中和数据库中都没有数据，用户却发起了大量的请求访问这个没有的数据，大量的请求在判断到缓存中没数据之后访问数据库，导致数据库崩溃。例如用户 id 以正整数递增，此时用户使用负数的用户 id 去请求，如果该用户是攻击者最会发起大量的请求导致数据库崩溃。")]),t._v(" "),_("p",[_("strong",[t._v("解决办法：")])]),t._v(" "),_("ul",[_("li",[t._v("参数校验，例如使用布隆过滤器，将所有用户 id 放入过滤其中，请求过来是先经过过滤器过滤，如果请求的用户 id 不存在数据库中过滤器则会直接返回不存在。")]),t._v(" "),_("li",[t._v("把无效的 key 也保存在缓存中。例如请求的参数在缓存中查不到，数据库也查不到就把参数存到缓存中，值设置为 null，下次请求时就会直接返回 null，但是如果每次传进来的都是随机的不存在的参数这个方法就没有意义了。")])]),t._v(" "),_("h2",{attrs:{id:"击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#击穿"}},[t._v("#")]),t._v(" 击穿")]),t._v(" "),_("p",[t._v("某一个 key 非常热点，大量的请求都访问这个 key，当这个 key 失效的瞬间，大量的请求在判断到缓存中不存在的时候就会访问到数据库导致数据库崩溃。")]),t._v(" "),_("p",[_("strong",[t._v("解决办法：")])]),t._v(" "),_("ul",[_("li",[t._v("不设置热点 key 的过期时间")]),t._v(" "),_("li",[t._v("使用分布式锁。如果缓存失效了，只有拿到锁的请求才可以查询数据库，这样就能降低在同一时刻的请求量，防止数据库崩溃。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);