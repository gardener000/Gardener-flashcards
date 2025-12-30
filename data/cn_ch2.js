// data/cn_ch2.js
export default {
  name: "计算机网络：Chapter 2 Physical Layer",
  data: [
    {
      front: "传输介质：<mark>Twisted Pair</mark> & <mark>Fiber</mark> 🧵",
      back: `<dl>
        <dt><mark>Twisted Pair</mark> (双绞线)</dt>
        <dd>两条绝缘铜线绞合以减少干扰。分为 <mark>UTP</mark> (无屏蔽) 和 <mark>STP</mark> (屏蔽)。<br><strong>Cat 5</strong>: 100Mbps/1Gbps; <strong>Cat 6/7</strong>: 10Gbps。</dd>
        <dt><mark>Multi-mode Fiber</mark> (多模光纤)</dt>
        <dd>光源为 LED，芯径大，光线反射传输。用于短距离，会有<strong>模态色散</strong> (脉冲展宽)。</dd>
        <dt><mark>Single-mode Fiber</mark> (单模光纤)</dt>
        <dd>光源为激光，芯径细 (波长级)，光线沿轴直线传播。衰减小，适合长距离，价格高。</dd>
      </dl>`
    },
    {
      front: "核心指标：<mark>Baud Rate</mark> vs <mark>Bit Rate</mark> 📉",
      back: `<dl>
        <dt><mark>Bandwidth</mark> (带宽)</dt>
        <dd>信道允许通过的频率范围 (Hz)。</dd>
        <dt><mark>Baud Rate</mark> (波特率)</dt>
        <dd>每秒信号变化的次数 (Symbol rate / 码元率)。单位 Hz。</dd>
        <dt><mark>Bit Rate</mark> (比特率)</dt>
        <dd>每秒传输的比特数 (bps)。<br><strong>公式</strong>：$Bit Rate = Baud Rate \times \text{bits per symbol}$</dd>
      </dl>`
    },
    {
      front: "理论极限：<mark>Nyquist</mark> vs <mark>Shannon</mark> 🧠",
      back: `<dl>
        <dt><mark>Nyquist Theorem</mark> (无噪声)</dt>
        <dd>适用于有限带宽的理想低通信道。<br>Max Rate = $2B \log_2 V$ (bps)<br><small>B=带宽, V=信号离散等级数</small></dd>
        <dt><mark>Shannon's Theorem</mark> (有噪声)</dt>
        <dd>适用于随机噪声信道。<br>Max Rate = $B \log_2 (1 + S/N)$ (bps)<br><small><strong>注意</strong>: $S/N$ 是比值不是 dB。若给出 $dB = 10 \log_{10}(S/N)$，需先换算。</small></dd>
        <dt>结论</dt>
        <dd>两者同时计算时，取<strong>较小值</strong>。</dd>
      </dl>`
    },
    {
      front: "数字编码 (<mark>Baseband</mark>)：NRZ vs Manchester 〽️",
      back: `<dl>
        <dt><mark>NRZ</mark> (不归零)</dt>
        <dd>高电平1，低电平0。<strong>缺点</strong>：长串0或1会导致接收端时钟同步丢失 (No clock sync)。</dd>
        <dt><mark>Manchester</mark> (曼彻斯特)</dt>
        <dd>位中间跳变：低→高为0 (或1)，高→低为1 (或0)。<br><strong>优点</strong>：自带时钟信号 (Self-clocking)。<br><strong>缺点</strong>：带宽需求翻倍 (50%效率)，用于 Ethernet。</dd>
        <dt><mark>4B/5B</mark></dt>
        <dd>将4位数据映射为5位码组，打破长连0，效率80%。</dd>
      </dl>`
    },
    {
      front: "带通调制 (<mark>Passband</mark>) & 星座图 🌌",
      back: `<dl>
        <dt>基本调制</dt>
        <dd><mark>ASK</mark> (幅移), <mark>FSK</mark> (频移), <mark>PSK</mark> (相移)。</dd>
        <dt><mark>QPSK</mark> (Quadrature PSK)</dt>
        <dd>4个相位，每码元携带 2 bits。</dd>
        <dt><mark>QAM</mark> (Quadrature Amplitude Modulation)</dt>
        <dd>结合幅度和相位调制。例如 QAM-16 (16个点，每码元 4 bits)。<br><strong>Constellation Diagram</strong>：点越密集，对抗噪声能力越弱。</dd>
      </dl>`
    },
    {
      front: "信道复用：<mark>FDM</mark>, <mark>TDM</mark>, <mark>WDM</mark> 🚥",
      back: `<dl>
        <dt><mark>FDM</mark> (频分复用)</dt>
        <dd>不同信号占用不同频率带宽。需 <mark>Guard Band</mark> (保护带) 防止干扰。</dd>
        <dt><mark>OFDM</mark> (正交频分复用)</dt>
        <dd>子载波正交，频谱重叠但不干扰，无需保护带。用于 WiFi, 4G/5G。</dd>
        <dt><mark>TDM</mark> (时分复用)</dt>
        <dd>用户轮流占用整个带宽传输数据 (Time slots)。适用于数字信号。</dd>
        <dt><mark>WDM</mark> (波分复用)</dt>
        <dd>光纤上的 FDM，利用不同波长的光传输。</dd>
      </dl>`
    },
    {
      front: "码分多址：<mark>CDMA</mark> 🧩",
      back: `<dl>
        <dt>原理</dt>
        <dd>每个站点分配唯一的 <mark>Chip Sequence</mark> (码片序列)。所有站点在同一时间、同一频率发送。</dd>
        <dt>正交性 (Orthogonality)</dt>
        <dd>码片序列必须两两正交 (内积为0)。<br>发送1发原序列，发送0发反码。</dd>
        <dt>运算</dt>
        <dd>接收方用发送方的码片与接收到的混合信号做<strong>内积</strong>，恢复原始数据。</dd>
      </dl>`
    },
    {
      front: "电话系统：<mark>PCM</mark> & <mark>Trunks</mark> ☎️",
      back: `<dl>
        <dt><mark>Local Loop</mark> (本地回路)</dt>
        <dd>连接用户到端局的最后几公里，通常是模拟信号。</dd>
        <dt><mark>PCM</mark> (脉冲编码调制)</dt>
        <dd>将模拟语音数字化。<strong>采样率 8000 Hz</strong> (奈奎斯特：2x4kHz)，每样本 8 bits。<br><strong>标准速率</strong>：$8000 \times 8 = 64 \text{ kbps}$ (DS0)。</dd>
        <dt><mark>Modem</mark></dt>
        <dd>调制解调器，实现数字/模拟信号转换。</dd>
      </dl>`
    },
    {
      front: "数字载波标准：<mark>T-Carrier</mark> vs <mark>E-Carrier</mark> 🚆",
      back: `<dl>
        <dt><mark>T1 Carrier</mark> (北美/日本)</dt>
        <dd>复用 <strong>24</strong> 个语音通道。<br>速率：$1.544 \text{ Mbps}$。<br>(24 ch * 8 bits + 1 framing bit) * 8000 Hz。</dd>
        <dt><mark>E1 Carrier</mark> (欧洲/中国)</dt>
        <dd>复用 <strong>32</strong> 个语音通道 (30数据 + 2控制)。<br>速率：$2.048 \text{ Mbps}$。</dd>
        <dt><mark>SONET/SDH</mark></dt>
        <dd>同步光纤网络标准，用于骨干网传输。</dd>
      </dl>`
    },
    {
      front: "交换技术：<mark>Switching</mark> Types 🔀",
      back: `<dl>
        <dt><mark>Circuit Switching</mark> (电路交换)</dt>
        <dd>建立专用物理通路 (Setup -> Transfer -> Teardown)。资源独占，无拥塞，有建立延迟。例：传统电话。</dd>
        <dt><mark>Packet Switching</mark> (分组交换)</dt>
        <dd>数据拆分为 Packet，存储转发。资源共享，无建立延迟，但有排队延迟 (Queuing delay)。例：Internet。</dd>
        <dt><mark>Message Switching</mark></dt>
        <dd>完整报文存储转发 (Store-and-forward)。需大缓存。</dd>
      </dl>`
    }
  ]
};