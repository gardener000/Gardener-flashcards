// data/network-layer-revised.js
export default {
  name: "计算机网络：网络层（下）",
  data: [
    {
      front: "为何需要 <mark>IPv6</mark>？ 🤔",
      back: `<dl>
              <dt>根本动机</dt><dd>IPv4的32位地址（约43亿）已耗尽，无法满足互联网爆炸式增长的需求。NAT等技术只是临时“续命”。</dd>
              <dt>核心改变</dt><dd>地址长度从32位扩展到 <mark>128位</mark> (2<sup>128</sup>)，提供了一个天文数字级别的地址空间，从根本上解决了地址短缺问题。</dd>
              <dt>核心优势</dt><dd>1. <b>地址更多</b><br>2. <b>头部简化</b> (提高路由器转发效率)<br>3. <b>更好的选项支持</b> (通过扩展头)<br>4. <b>内置安全性</b> (IPsec)<br>5. <b>支持服务质量</b> (QoS)</dd>
            </dl>`
    },
    {
      front: "IPv6 头部：<mark>“断舍离”</mark> 的艺术 🎨",
      back: `<dl>
              <dt>高效设计</dt><dd>IPv6拥有一个整洁的、固定长度为 <mark>40字节</key> 的头部，便于硬件高速处理。</dd>
              <dt>移除了什么？</dt>
              <dd><b>1. 头部校验和：</b> 现代链路层和传输层已有强大纠错能力，网络层校验和被视为冗余，移除可减轻路由器计算负担。<br>
              <b>2. 中间路由器分片：</b> IPv6要求分片在 <mark>源主机</mark> 完成，中间路由器遇到过大包只会丢弃并返回ICMPv6错误。这简化了路由器逻辑，加快了转发。<br>
              <b>3. 选项字段：</b> 灵活但导致头部长度可变的选项字段被移除，功能由更高效的 <mark>扩展头部 (Extension Headers)</mark> 实现。</dd>
             </dl>`
    },
    {
      front: "IPv4 到 IPv6 的 <mark>“迁徙”</mark> 之路 🌉",
      back: `<dl>
              <dt>双栈 (Dual-stack)</dt><dd>最基础的方式。网络节点（主机、路由器）同时拥有并运行IPv4和IPv6两套独立的协议栈。设备可以根据DNS查询结果（A记录或AAAA记录）选择使用哪个协议通信。</dd>
              <dt>隧道 (Tunneling)</dt><dd>用于连接被IPv4海洋隔开的IPv6“孤岛”。将整个 <mark>IPv6数据包</mark> 作为“数据负载”，封装在一个全新的 <mark>IPv4数据包</mark> 中进行传输。在隧道的起点封装，在终点解封装，保持了原始IPv6包的完整性。</dd>
            </dl>`
    },
    {
      front: "ICMP 协议：网络的 <mark>诊断医生</mark> 🩺",
      back: `<dl>
              <dt>核心机制</dt><dd>ICMP报文被封装在 <mark>IP数据包</mark> 中传输（IP协议号为1），它不是用来传输用户数据的，而是用于报告网络错误和提供诊断信息。</dd>
              <dt>应用：Ping</dt><dd>发送 <mark>类型8 (Echo Request)</mark> 报文到目标主机。<br>如果目标可达，它会返回一个 <mark>类型0 (Echo Reply)</mark> 报文，从而实现连通性测试和RTT测量。</dd>
              <dt>应用：Traceroute</dt><dd>利用 <mark>TTL (生存时间)</mark> 字段。程序发送TTL为1的包，第一个路由器会将其丢弃并返回 <mark>类型11 (Time Exceeded)</mark> 的ICMP报文。程序记录该路由器地址，然后发送TTL为2的包，如此循环，直到到达目的地，从而探测出完整路径。</dd>
            </dl>`
    },
    {
      front: "ARP 协议：IP 到 MAC 的 <mark>“翻译官”</mark> 🗣️",
      back: `<dl>
              <dt>解决的问题</dt><dd>在以太网等广播网络中，数据最终需要通过物理MAC地址进行寻址。ARP负责在 <mark>同一局域网内</mark>，将目标的IP地址解析为其对应的MAC地址。</dd>
              <dt>工作流程</dt>
              <dd>1. <b>查询缓存:</b> 主机A首先检查自己的ARP缓存表里是否有目标IP B的记录。</dd>
              <dd>2. <b>广播请求:</b> 若没有，主机A会在局域网内 <mark>广播</mark> 一个ARP请求包：“谁是IP地址B？请告诉我你的MAC地址。”</dd>
              <dd>3. <b>单播响应:</b> 只有主机B会识别这个请求，并向主机A <mark>单播</mark> 一个ARP响应包：“我是IP地址B，我的MAC地址是M_B。”</dd>
              <dd>4. <b>更新缓存:</b> 主机A收到响应后，将 (IP: B, MAC: M_B) 这条映射关系存入自己的ARP缓存。</dd>
            </dl>`
    },
    {
      front: "DHCP 协议：IP 地址的 <mark>自动管家</mark> 🤖",
      back: `<dl>
              <dt>核心目标</dt><dd>实现网络设备的“即插即用”，自动为客户端分配IP地址、子网掩码、默认网关、DNS服务器等网络配置信息。</dd>
              <dt>四步交互机制 (DORA)</dt>
              <dd>1. <b>Discover:</b> 客户端在网络中 <mark>广播</mark> “DHCP发现”包，寻找DHCP服务器。</dd>
              <dd>2. <b>Offer:</b> 收到发现包的DHCP服务器 <mark>广播</mark> 或 <mark>单播</mark> “DHCP提供”包，向客户端提供一个可用的IP地址及配置。</dd>
              <dd>3. <b>Request:</b> 客户端选择一个Offer，并 <mark>广播</mark> “DHCP请求”包，正式请求使用该IP地址。</dd>
              <dd>4. <b>Acknowledge:</b> 服务器 <mark>广播</mark> 或 <mark>单播</mark> “DHCP确认”包，确认租约并将最终配置信息交给客户端。</dd>
            </dl>`
    },
    {
      front: "路由协议：互联网的 <mark>“GPS”</mark> 🗺️",
      back: `<dl>
              <dt>自治系统 (AS)</dt><dd>互联网由大量相互连接的自治系统组成。一个AS是由单一机构管理的网络集合。</dd>
              <dt>域内路由 (IGP)</dt><dd>在 <mark>单个AS内部</mark> 使用，追求高效和快速收敛。常见的有 <mark>OSPF</mark> (链路状态) 和 <mark>RIP</mark> (距离向量)。</dd>
              <dt>域间路由 (EGP)</dt><dd>在 <mark>AS与AS之间</mark> 使用，核心是策略而非速度。唯一的协议是 <mark>BGP (边界网关协议)</mark>。</dd>
            </dl>`
    },
    {
      front: "OSPF 协议：AS内部的 <mark>“全知”</mark> 导航员 🗺️",
      back: `<dl>
              <dt>协议类型</dt><dd>链路状态 (Link-State) 协议，一种高效的内部网关协议 (IGP)。</dd>
              <dt>工作机制</dt>
              <dd>1. <b>建立邻居:</b> 路由器通过发送Hello包来发现直连的邻居，并建立邻接关系。</dd>
              <dd>2. <b>构建数据库:</b> 每个路由器都将自己和邻居的连接信息打包成 <mark>LSA (链路状态通告)</mark> 泛洪给区域内所有其他路由器，最终大家都有了一张完全相同的网络“地图”(<mark>LSDB</mark>)。</dd>
              <dd>3. <b>计算路径:</b> 每个路由器在自己的地图上独立运行 <mark>SPF (最短路径优先) 算法</mark>，计算出到达每个目的地的无环最短路径，并生成路由表。</dd>
            </dl>`
    },
    {
      front: "BGP 协议：互联网 AS 间的 <mark>外交官</mark> 🤝",
      back: `<dl>`
    }
  ]
};