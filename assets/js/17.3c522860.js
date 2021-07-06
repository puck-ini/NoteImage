(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{371:function(v,_,P){"use strict";P.r(_);var T=P(44),p=Object(T.a)({},(function(){var v=this,_=v.$createElement,P=v._self._c||_;return P("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[P("h1",{attrs:{id:"tcp"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" TCP")]),v._v(" "),P("p",[v._v("TCP，Transmission Control Protocol，传输控制协议。")]),v._v(" "),P("p",[v._v("TCP 是运输层的重要协议，也是 TCP/IP 体系中一种重要协议（UDP，也是该体系中重要的协议之一）。")]),v._v(" "),P("p",[v._v("运输层向应用层提供通信服务。")]),v._v(" "),P("p",[v._v("两个主机之间的通信严格说应该是两个主机中的应用进程之间的通信。")]),v._v(" "),P("p",[v._v("运输层向高层用户屏蔽了下面网络核心的细节（如网络拓扑、所采用的路由协议等），它使应用进程之间像是有一条端到端的逻辑通信信道。")]),v._v(" "),P("p",[v._v("TCP 是一种面向连接的协议，在传输数据前需要建立连接，数据传输后需要释放连接，不提供广播或多播服务。")]),v._v(" "),P("p",[v._v("TCP 提供可靠、面向连接的运输服务，因此会额外增加许多的开销，如确认、流量控制、计时器以及连接管理等。这不仅使协议数据单元的首部增大很多，还会占用许多的处理及资源。")]),v._v(" "),P("p",[v._v("使用 TCP 实现的应用层协议：SMTP（电子邮件）、TELNET（远程终端接入）、HTTP（万维网）、FTP（文件传送）")]),v._v(" "),P("p",[v._v("协议端口号，简称端口，端口的出现是为了让不同操作系统的计算机的应用进程能够相互通信，同时解决不同操作系统之间的进程标识符不一致的问题。通过端口，我们只需要把传送的数据教导目的主机的某一个合适的目的端口，剩下的工作就可以交由 TCP 完成，即将数据交付给目的进程。这种协议栈层间的抽象的协议端口是软件端口，和路由器或交换机上的硬件端口是完全不同的概念。")]),v._v(" "),P("p",[v._v("TCP 有源端口和目的端口两个重要字段。")]),v._v(" "),P("p",[v._v("TCP 的主要特点：")]),v._v(" "),P("ul",[P("li",[v._v("TCP 是面像连接的运输层协议。在传输数据前需要建立连接，数据传输后需要释放连接")]),v._v(" "),P("li",[v._v("每一条 TCP 连接只有两个端点，每一条 TCP 连接只能是点对点的（一对一）")]),v._v(" "),P("li",[v._v("TCP 提供可靠交付的服务。通过 TCP 连接传送的数据，无差错、不丢失、不重复、并且按序到达。")]),v._v(" "),P("li",[v._v("TCP 提供全双工通信。即通信的双方既能发送数据也能接收数据。TCP 连接的两端都设有发送缓存和接收缓存，用来临时存放双向通信的数据。在发送时，应用程序把数据传送到 TCP 的缓存后就可以做自己的事情了，而 TCP 在何使的时候把数据发送出去。在接收时，TCP 把收到的数据放入缓存，上层的应用进程在合适的时候读取缓存中的数据。")]),v._v(" "),P("li",[v._v("面向字节流。TCP 中的流（stream）指的是流入到进程或从进程流出的字节序列。")])]),v._v(" "),P("p",[v._v("TCP 的连接")]),v._v(" "),P("p",[v._v("TCP 把连接作为最基本的抽象。TCP 的许多特性都与 TCP 是面向连接的这个基本特性有关。")]),v._v(" "),P("p",[v._v("每一条 TCP 连接都有两个端点，这个端点叫做套接字（socket）或插口。根据 RFC 793 的定义：端口号拼接到 IP 地址即构成套接字。例如 127.0.0.1:8080。")]),v._v(" "),P("p",[v._v("套接字 socket = (IP 地址:端口号)")]),v._v(" "),P("p",[v._v("TCP 可靠传输的工作原理")]),v._v(" "),P("p",[v._v("TCP 发送的报文段是交给 IP 层传输的。但是 IP 层只能提供尽最大努力服务，即 TCP 下面的网络所提供的是不可靠的传输，因此，TCP 必须采取适当的措施才能使得两个运输层之间的通信变得可靠。")]),v._v(" "),P("p",[v._v("停止等待协议")]),v._v(" "),P("p",[v._v("停止等待的意思是每发送完一个分组就停止发送，等待接收方的确认信息，在收到确认信息后再发送下一个分组。当出现差错时，发送端没有收到确认消息，过一定时间后会重新发送出差错的分组。重传时间需要经过精确的计算，太长会导致通讯效率低，太短会造成不必要的重传浪费网络资源。")]),v._v(" "),P("p",[v._v("停止等待协议简单，但是信道利用率太低，因为停止等待协议每次发送一个分组就得等到确认信息之后才能发送下一个分组，在确认信息到来前还可能发生分组丢失或者确认信息丢失问题。")]),v._v(" "),P("p",[v._v("因此，为了提高效率，发送方可以不适用低效率的停止等待协议，而是采用流水线传输，流水线传输需要使用到连续 ARQ 协议和滑动窗口协议。")]),v._v(" "),P("p",[v._v("连续 ARQ 协议")]),v._v(" "),P("p",[v._v("发送方维持一个发送窗口，发送窗口可以设置多个分组，这些分组可以连续发送出去，而不需要等待接收方确认，发送方每收到一个确认就将窗口向前移动一格分组的位置。")]),v._v(" "),P("p",[v._v("接收方一般采用累积确认的方式，即接收方不必对收到的分组逐个发送确认，而是可以在收到几个分组之后对按序导大的最后一个分组发送确认，这样就表示到这个分组的所有分组都已正确收到了。")]),v._v(" "),P("p",[v._v("累积确认容易实现，即使确认丢失了也不必重传。缺点时不能向发送方反映接收方已经正确收到的所有分组信息。")]),v._v(" "),P("p",[v._v("TCP 报文段的首部格式")])])}),[],!1,null,null,null);_.default=p.exports}}]);