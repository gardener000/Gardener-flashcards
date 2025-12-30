// data/network_ch3.js
export default {
  name: "计算机网络：Chapter 3 Data Link Layer",
  data: [
    {
      front: "数据链路层服务类型 💁‍♂️",
      back: `<dl>
        <dt>Unacknowledged Connectionless</dt>
        <dd>无确认无连接。不建立连接，不回发确认。例：<mark>Ethernet</mark> (以太网) (误码率极低)。</dd>
        <dt>Acknowledged Connectionless</dt>
        <dd>有确认无连接。不建立连接，但每帧需确认。例：<mark>802.11 WiFi</mark> (不可靠信道)。</dd>
        <dt>Acknowledged Connection-oriented</dt>
        <dd>有确认面向连接。建立连接 -> 传输 -> 释放。保证顺序和可靠性。例：长途电话、卫星链路。</dd>
      </dl>`
    },
    {
      front: "组帧技术 (<mark>Framing</mark>) 🎞️",
      back: `<dl>
        <dt>Byte Count</dt>
        <dd>帧头带长度。<strong>缺点</strong>：计数出错会导致后续帧全部错位。</dd>
        <dt>Byte Stuffing (字符填充)</dt>
        <dd>用特殊字节 <mark>FLAG</mark> 标定边界。数据中出现 FLAG 则插入 <mark>ESC</mark> 转义。</dd>
        <dt>Bit Stuffing (比特填充)</dt>
        <dd>边界标记为 <mark>01111110</mark>。发送方遇5个连续1则插入一个0；接收方去0。用于 HDLC/USB。</dd>
        <dt>Physical Coding Violation</dt>
        <dd>利用曼彻斯特编码中无效的电平组合 (如高-高) 标记边界。</dd>
      </dl>`
    },
    {
      front: "差错控制基础 & <mark>Hamming Distance</mark> 📏",
      back: `<dl>
        <dt>Hamming Distance (海明距离)</dt>
        <dd>两个码字之间不同位的个数 (异或后1的个数)。<br>码集的距离 = 任意两码字间的最小距离。</dd>
        <dt>检错 (Detecting) $d$ 位</dt>
        <dd>需要距离 $\ge d + 1$。</dd>
        <dt>纠错 (Correcting) $d$ 位</dt>
        <dd>需要距离 $\ge 2d + 1$。</dd>
        <dt>海明码 (Hamming Code)</dt>
        <dd>校验位在 $2^i$ 位置，利用奇偶校验纠正1位错误。</dd>
      </dl>`
    },
    {
      front: "循环冗余校验 (<mark>CRC</mark>) 🔄",
      back: `<dl>
        <dt>原理</dt>
        <dd>利用 <mark>Generator Polynomial</mark> (生成多项式)。收发双方约定多项式 $G(x)$。</dd>
        <dt>计算步骤</dt>
        <dd>1. 在数据后补 $r$ 个0 ($r$ 为多项式阶数)。<br>2. 进行 <mark>Modulo-2</mark> 除法 (异或运算)。<br>3. 将余数 (FCS) 附加到原数据后。</dd>
        <dt>特点</dt>
        <dd>硬件易实现，检错能力强，不能纠错。</dd>
      </dl>`
    },
    {
      front: "停等协议 (<mark>Stop-and-Wait</mark>) & ARQ ✋",
      back: `<dl>
        <dt>机制</dt>
        <dd>发一帧，等 <mark>ACK</mark> 再发下一帧。超时未收到 ACK 则重传 (Time out)。</dd>
        <dt>ARQ (自动重传请求)</dt>
        <dd>结合重传与确认机制。需 1-bit <mark>Sequence Number</mark> (0/1) 区分新旧帧 (防 ACK 丢失导致的重复接收)。</dd>
        <dt>信道利用率 (Efficiency)</dt>
        <dd>$U = \frac{1}{1 + 2a}$，其中 $a = \frac{T_{prop}}{T_{frame}}$。<br>传播时延大时效率极低。</dd>
      </dl>`
    },
    {
      front: "滑动窗口：<mark>Go-Back-N</mark> (GBN) 🔙",
      back: `<dl>
        <dt>原理</dt>
        <dd>发送方维持大小为 $N$ 的窗口，允许连续发送多个帧。接收方窗口大小为 1。</dd>
        <dt>Cumulative ACK (累计确认)</dt>
        <dd>收到 ACK $n$ 表示 $n$ 及之前所有帧都正确接收。</dd>
        <dt>出错处理</dt>
        <dd>若某帧出错/丢失，接收方丢弃后续所有帧 (无序接收)，不回 ACK。发送方超时后<strong>重传所有</strong>未确认帧。</dd>
      </dl>`
    }
  ]
};