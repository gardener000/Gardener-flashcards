// data/cn_ch1.js
export default {
  name: "计算机网络：Chapter 1 Introduction",
  data: [
    {
      front: "OSI 七层模型 (1-3层：底层) 🏗️",
      back: `<dl>
        <dt><mark>Physical Layer</mark> (物理层)</dt>
        <dd>传输原始 <mark>bit</mark> (比特) 流。涉及信号形式、电压、接口标准。</dd>
        <dt><mark>Data Link Layer</mark> (数据链路层)</dt>
        <dd>将比特组装成 <mark>Frame</mark> (帧)。负责节点间传输、<mark>Flow Control</mark> (流量控制) 和错误检测。</dd>
        <dt><mark>Network Layer</mark> (网络层)</dt>
        <dd>负责 <mark>Packet</mark> (包) 的 <mark>Routing</mark> (路由) 和转发。处理拥塞控制，允许异构网络互联。</dd>
      </dl>`
    },
    {
      front: "OSI 七层模型 (4-7层：高层) 🚀",
      back: `<dl>
        <dt><mark>Transport Layer</mark> (传输层)</dt>
        <dd>真正的 <mark>End-to-end</mark> (端到端) 通信。将数据分割并传输，确保可靠性 (如 TCP)。</dd>
        <dt><mark>Session Layer</mark> (会话层)</dt>
        <dd>管理 <mark>Dialog control</mark> (会话控制) 和同步 (Synchronization)。</dd>
        <dt><mark>Presentation Layer</mark> (表示层)</dt>
        <dd>处理数据的 <mark>Syntax</mark> (语法) 和 <mark>Semantics</mark> (语义)，如加密、压缩、格式转换。</dd>
        <dt><mark>Application Layer</mark> (应用层)</dt>
        <dd>提供用户与网络交互的接口 (如 HTTP, FTP)。</dd>
      </dl>`
    },
    {
      front: "<mark>TCP/IP</mark> vs <mark>Hybrid Model</mark> ⚖️",
      back: `<dl>
        <dt>TCP/IP 模型</dt>
        <dd>源自 Linux/Unix，实际互联网标准。没有表示层和会话层 (视为应用层一部分)。<br>特点：开放、简单。</dd>
        <dt>Hybrid Model (五层模型)</dt>
        <dd>教学常用模型。结合了 OSI 和 TCP/IP 的优点。<br>结构：Physical, Data Link, Network, Transport, Application。</dd>
      </dl>`
    },
    {
      front: "数据传输与封装 (<mark>Encapsulation</mark>) 📦",
      back: `<dl>
        <dt>发送端 (Source)</dt>
        <dd>数据自顶向下传输，每一层给数据包添加 <mark>Header</mark> (头部)。</dd>
        <dt>接收端 (Destination)</dt>
        <dd>数据自底向上传输，逐层剥离 Header 并合并数据。</dd>
        <dt>注意</dt>
        <dd>数据过大时会拆分，但 Header 不会拆分。</dd>
      </dl>`
    },
    {
      front: "服务类型：<mark>Connection-oriented</mark> (面向连接) 📞",
      back: `<dl>
        <dt>特点</dt>
        <dd>建立连接 -> 传输数据 -> 释放连接。类似于打电话。</dd>
        <dt>Reliable message stream</dt>
        <dd>可靠信息流。例：页面序列。</dd>
        <dt>Reliable byte stream</dt>
        <dd>可靠字节流。例：<mark>Remote Login</mark> (远程登录), TCP/IP 默认服务。</dd>
        <dt>Unreliable connection</dt>
        <dd>不可靠连接。例：<mark>Digitized voice</mark> (数字化语音，允许丢包但要求实时)。</dd>
      </dl>`
    },
    {
      front: "服务类型：<mark>Connection-less</mark> (无连接) 📮",
      back: `<dl>
        <dt>特点</dt>
        <dd>每个数据包独立路由，无需建立连接。类似于寄信。</dd>
        <dt>Unreliable datagram</dt>
        <dd>不可靠数据报。例：垃圾邮件，UDP。</dd>
        <dt>Acknowledged datagram</dt>
        <dd>有确认的数据报。例：挂号信 (Registered mail)。</dd>
        <dt>Request-reply</dt>
        <dd>请求-回复模式。例：<mark>Database Query</mark> (数据库查询)。</dd>
      </dl>`
    },
    {
      front: "网络架构模式 (C/S vs P2P) 🏛️",
      back: `<dl>
        <dt><mark>Client-Server</mark> (C/S)</dt>
        <dd>客户端主动请求，服务端被动响应。瓶颈在服务器。例：Web 应用、手机 App。</dd>
        <dt><mark>Browser-Server</mark> (B/S)</dt>
        <dd>C/S 的变体，客户端只需浏览器，升级维护方便。</dd>
        <dt><mark>Peer-to-Peer</mark> (P2P)</dt>
        <dd>对等网络。每个节点既是客户端也是服务端。例：BitTorrent。</dd>
      </dl>`
    },
    {
      front: "网络传输方式 (<mark>Transmission Links</mark>) 📡",
      back: `<dl>
        <dt>Broadcast (广播)</dt>
        <dd>类似总线结构，发出的信息所有人都能收到。例：无线电、早期以太网。</dd>
        <dt>Point-to-point (点对点)</dt>
        <dd>复杂的网状拓扑，一次只发给特定的一台机器。</dd>
        <dt>Multicasting (多播/组播)</dt>
        <dd>发给特定的一组计算机 (Group)。通常需软件支持。</dd>
      </dl>`
    },
    {
      front: "网络类型 (按规模划分) 📏",
      back: `<dl>
        <dt><mark>PAN</mark> (Personal Area Network)</dt>
        <dd>个人区域网。范围：人周围 (如 Bluetooth 连接鼠标)。</dd>
        <dt><mark>LAN</mark> (Local Area Network)</dt>
        <dd>局域网。范围：建筑内。技术：WiFi (802.11), Ethernet (802.3)。</dd>
        <dt><mark>MAN</mark> (Metropolitan Area Network)</dt>
        <dd>城域网。范围：城市。例：有线电视网 (Cable TV)。</dd>
        <dt><mark>WAN</mark> (Wide Area Network)</dt>
        <dd>广域网。包含大量 <mark>Router</mark> (路由器) 和子网。最大的是 Internet。</dd>
      </dl>`
    },
    {
      front: "核心基础设施术语 🌐",
      back: `<dl>
        <dt><mark>ISP</mark></dt>
        <dd>Internet Service Provider，互联网服务提供商。</dd>
        <dt><mark>Backbone Network</mark></dt>
        <dd>骨干网 (Transit network)，承载端到端的大流量。</dd>
        <dt><mark>CDN</mark></dt>
        <dd>Content Delivery Network，内容分发网络。服务器地理分布，使用户就近获取内容。</dd>
        <dt><mark>VPN</mark></dt>
        <dd>Virtual Private Network，虚拟专用网。在公网上建立逻辑私有网络。</dd>
      </dl>`
    },
    {
      front: "网络交换与设计目标 🎯",
      back: `<dl>
        <dt><mark>Store-and-forward</mark></dt>
        <dd>存储转发：中间节点接收完整数据包后再转发。</dd>
        <dt><mark>Cut-through</mark></dt>
        <dd>直通交换：节点一旦收到目标地址就开始转发，不等待完整包。</dd>
        <dt><mark>Flow Control</mark></dt>
        <dd>流量控制：防止发送方太快淹没接收方。</dd>
        <dt><mark>Congestion</mark></dt>
        <dd>拥塞：网络负载过大导致性能下降。</dd>
        <dt><mark>QoS</mark></dt>
        <dd>服务质量：平衡不同需求 (如实时视频 vs 文件下载)。</dd>
      </dl>`
    },
    {
      front: "协议与分层概念 📚",
      back: `<dl>
        <dt><mark>Protocol</mark> (协议)</dt>
        <dd>通信双方关于“如何通信”的约定/规则。</dd>
        <dt><mark>Interface</mark> (接口)</dt>
        <dd>定义下层向上层提供的原语 (Primitives) 和服务。</dd>
        <dt><mark>Peers</mark> (对等体)</dt>
        <dd>不同机器上同一层的实体，通过协议通信。</dd>
        <dt><mark>Service Primitives</mark></dt>
        <dd>操作指令，如 LISTEN, CONNECT, SEND, RECEIVE, DISCONNECT。</dd>
      </dl>`
    },
    {
      front: "网络安全三要素 🔒",
      back: `<dl>
        <dt><mark>Confidentiality</mark> (机密性)</dt>
        <dd>防止窃听 (Eavesdropping)。</dd>
        <dt><mark>Authentication</mark> (认证)</dt>
        <dd>防止假冒他人身份 (Impersonating)。</dd>
        <dt><mark>Integrity</mark> (完整性)</dt>
        <dd>防止数据被篡改。</dd>
      </dl>`
    }
  ]
};