// data/network_layer_1.js
export default {
  name: "计算机网络：网络层（下）",
  data: [
    {
      front: "互联网 <mark>网络层</mark> 的核心设计思想是什么？🤔",
      back: `<dl>
        <dt>问题背景</dt>
        <dd>如何将全球各式各样、互不兼容的物理网络（如以太网、WiFi）连接成一个统一、可互通的网络？</dd><br>
        <dt>最终方案</dt>
        <dd>在所有不同网络之上，构建一个 <mark>公共、通用</mark> 的网络层。这个思想最终演变为 <b>TCP/IP协议族</b>。</dd><br>
        <dt>IP协议的角色</dt>
        <dd>IP协议是网络层的核心，如同“普通话”。它定义了通用的数据包格式（IP数据报），屏蔽了底层网络差异，成为将全球网络粘合在一起的“胶水”。</dd>
      </dl>`
    },
    {
      front: "互联网 <mark>网络层</mark> 的三大组件是什么？🏗️",
      back: `<dl>
        <dt>1. IP协议 (The IP protocol)</dt>
        <dd>负责定义数据报格式、寻址方式和数据包的转发规则。</dd><br>
        <dt>2. 网络控制协议 (Internet control protocols)</dt>
        <dd>作为IP的“辅助兵”，用于报告错误和查询信息。<br>主要包括: <mark>ICMP</mark> (用于ping, tracert), <mark>ARP</mark> (地址解析), 和 <mark>DHCP</mark> (动态地址分配)。</dd><br>
        <dt>3. 路由协议 (Internet routing protocols)</dt>
        <dd>负责确定数据包的传输路径。<br>主要包括: <mark>OSPF</mark> (AS内部路由) 和 <mark>BGP</mark> (AS之间路由)。</dd>
      </dl>`
    },
    {
      front: "IPv4 <mark>数据报头</mark> 的关键字段有哪些？✉️",
      back: `<dl>
        <dt>版本 & 首部长</dt>
        <dd><b>版本(Version)</b>: 4 bits, 对IPv4恒为4。<br><b>首部长度(IHL)</b>: 4 bits, 单位为32位字(4字节), 标准值为5 (20字节)。</dd><br>
        <dt>总长度 (Total Length)</dt>
        <dd>16 bits, 整个数据包（头+数据）的字节数。最大65,535字节，但通常小于 <mark>1500字节</mark> 以适应以太网MTU。</dd><br>
        <dt>生存时间 (TTL)</dt>
        <dd>8 bits, 每经过一个路由器减1，为0时丢弃。防止数据包在网络中无限循环。</dd><br>
        <dt>协议 (Protocol)</dt>
        <dd>8 bits, 指明上层协议，如 <mark>TCP(6)</mark> 或 <mark>UDP(17)</mark>。</dd><br>
        <dt>分片相关字段</dt>
        <dd><b>标识(Identification)</b>, <b>标志(Flags)</b>, <b>片偏移(Fragment Offset)</b> 协同工作，用于IP数据包的拆分与重组。</dd><br>
        <dt>源/目的地址</dt>
        <dd>各32 bits，标识数据包的发送方和接收方。</dd>
      </dl>`
    },
    {
      front: "为何需要 <mark>IP分片</mark>？以及现代的替代方案是什么？🔪",
      back: `<dl>
        <dt>为何分片？</dt>
        <dd>不同的网络（如以太网、WiFi）有不同的 <mark>最大传输单元 (MTU)</mark>。当数据包从MTU大的网络进入MTU小的网络时，必须被拆分成更小的“分片”。</dd><br>
        <dt>经典分片策略</dt>
        <dd><b>分片</b>: 由中间路由器负责。<br><b>重组</b>: 由最终目的主机负责。<br>优点是减轻了中间路由器的负担。</dd><br>
        <dt>现代高效策略: 路径MTU发现 (PMTUD)</dt>
        <dd>源主机发送设置了 <mark>DF (Don't Fragment)</mark> 标志位的数据包。若某路由器MTU不足，则丢弃包并返回ICMP错误消息，告知其MTU大小。源主机据此调整后续包的大小，从源头上避免分片。</dd>
      </dl>`
    },
    {
      front: "解释 <mark>CIDR</mark>、<mark>子网划分</mark> 与 <mark>路由聚合</mark> 🔎",
      back: `<dl>
        <dt>无类域间路由 (CIDR)</dt>
        <dd>使用“IP地址/前缀长度” (如 <code>192.168.1.0/24</code>) 表示地址块，消除了传统的A/B/C类地址界限，提高了地址分配的灵活性。</dd><br>
        <dt>子网划分 (Subnetting)</dt>
        <dd><b>目的</b>: 在一个机构内部，将一个大的IP地址块划分为多个更小的逻辑网络（子网），便于管理。<br><b>原理</b>: 从主机部分“借用”几位作为“子网号”。</dd><br>
        <dt>路由聚合 (Route Aggregation)</dt>
        <dd><b>目的</b>: 减少全球互联网路由表的规模，防止“路由表爆炸”。<br><b>原理</b>: 将多个连续的小前缀合并成一个前缀更短的“超网”，向外只通告这一个聚合后的大路由。</dd>
      </dl>`
    },
    {
        front: "路由器的核心转发原则与关键技术 <mark>NAT</mark> & <mark>DHCP</mark> 📡",
        back: `<dl>
          <dt>最长前缀匹配原则 (Longest Matching Prefix)</dt>
          <dd>路由器转发决策的黄金法则。当数据包目的地址匹配路由表中多个条目时，选择 <mark>前缀最长</mark>（即最具体、最精确）的路由进行转发。</dd><br>
          <dt>网络地址转换 (NAT)</dt>
          <dd><b>背景</b>: 解决IPv4地址耗尽问题。<br><b>原理</b>: 允许机构内部使用私有IP地址。当访问外部网络时，NAT设备（路由器）将私有源IP和端口号“翻译”成一个公共IP和新端口号。</dd><br>
          <dt>动态主机配置协议 (DHCP)</dt>
          <dd><b>作用</b>: 实现网络接入的“即插即用”。<br><b>原理</b>: 客户端通过 <mark>发现(Discover)</mark>、<mark>提供(Offer)</mark>、<mark>请求(Request)</mark>、<mark>确认(ACK)</mark> 四步交互过程，自动获取IP地址、子网掩码、网关和DNS服务器等配置信息。</dd>
        </dl>`
    }
  ]
};