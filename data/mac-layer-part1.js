// data/mac-layer-part1.js
export default {
  name: "网络-MAC层：信道分配与访问协议",
  data: [
    {
      front: "什么是 <mark>MAC子层</mark>？ 🤔",
      back: `<div style="font-family: Arial, sans-serif; background-color: #ffffff; color: #2c3e50; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0; line-height: 1.6;">
              <dl>
                <dt style="color: #2980b9; font-weight: bold; font-size: 1.1em;">核心问题</dt>
                <dd>在共享介质（如广播信道）上，如何协调多个设备，决定 <mark style="background-color: #d6eaf8; border-radius: 3px; padding: 2px 4px;">谁获得信道使用权</mark>，以避免数据冲突。</dd><br>
                <dt style="color: #2980b9; font-weight: bold; font-size: 1.1em;">两种信道</dt>
                <dd><strong>点对点:</strong> 专用线路，无竞争。<br><strong>广播信道:</strong> 共享介质，是MAC层关注的重点。</dd><br>
                <dt style="color: #2980b9; font-weight: bold; font-size: 1.1em;">应用场景</dt>
                <dd>局域网（LAN），尤其是 <mark style="background-color: #d6eaf8; border-radius: 3px; padding: 2px 4px;">无线网络</mark>（WiFi）和 <mark style="background-color: #d6eaf8; border-radius: 3px; padding: 2px 4px;">经典以太网</mark>。</dd>
              </dl>
            </div>`
    },
    {
      front: "信道分配策略：<mark>静态</mark> vs <mark>动态</mark> ⚖️",
      back: `<div style="font-family: Arial, sans-serif; background-color: #ffffff; color: #2c3e50; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0; line-height: 1.6;">
              <dl>
                <dt style="color: #d35400; font-weight: bold; font-size: 1.1em;">静态分配 (Static Allocation)</dt>
                <dd><strong>方法:</strong> 预先划分资源，如FDMA（频分）。<br><strong>优点:</strong> 简单，无冲突。<br><strong>缺点:</strong> 浪费严重！不适合计算机网络的 <mark style="background-color: #fdebd0; border-radius: 3px; padding: 2px 4px;">突发性(Bursty)</mark> 流量。</dd><br>
                <dt style="color: #27ae60; font-weight: bold; font-size: 1.1em;">动态分配 (Dynamic Allocation)</dt>
                <dd><strong>方法:</strong> 按需共享资源，也称 <mark style="background-color: #d5f5e3; border-radius: 3px; padding: 2px 4px;">统计多路复用</mark>。<br><strong>核心结论 (P19):</strong> 动态共享信道性能远优于静态划分，静态划分N份会导致延迟 <mark style="background-color: #d5f5e3; border-radius: 3px; padding: 2px 4px;">增加N倍</mark>。</dd>
              </dl>
            </div>`
    },
    {
      front: "排队论核心结论 (M/M/1) 📈",
      back: `<div style="font-family: Arial, sans-serif; background-color: #ffffff; color: #2c3e50; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0; line-height: 1.6;">
              <dl>
                <dt style="color: #f39c12; font-weight: bold; font-size: 1.1em;">关键参数</dt>
                <dd><strong>ρ (利用率):</strong> 信道有多忙碌。<br><strong>T (平均延迟):</strong> 发送一帧的平均总时间。</dd><br>
                <dt style="color: #f39c12; font-weight: bold; font-size: 1.1em;">核心结论 (P17)</dt>
                <dd>当利用率 <strong>ρ 趋近于 1</strong> (100%繁忙) 时，平均延迟 <strong>T 会 <mark style="background-color: #fef9e7; border-radius: 3px; padding: 2px 4px;">急剧增加</mark></strong>，趋向无穷大。这解释了为何网络在极度拥堵时会变得非常卡顿。</dd>
              </dl>
            </div>`
    },
    {
      front: "ALOHA 协议：<mark>纯</mark> vs <mark>时隙</mark> 🏝️",
      back: `<div style="font-family: Arial, sans-serif; background-color: #ffffff; color: #2c3e50; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0; line-height: 1.6;">
              <dl>
                <dt style="color: #c0392b; font-weight: bold; font-size: 1.1em;">共同点</dt>
                <dd>思想简单：“想发就发”，冲突后随机等待重传。</dd><br>
                <dt style="color: #c0392b; font-weight: bold; font-size: 1.1em;">纯 ALOHA (Pure ALOHA)</dt>
                <dd><strong>规则:</strong> 任意时刻可发送。<br><strong>脆弱期:</strong> <mark style="background-color: #fadbd8; border-radius: 3px; padding: 2px 4px;">2t</mark> (t为帧发送时间)。<br><strong>最大效率:</strong> 仅 <mark style="background-color: #fadbd8; border-radius: 3px; padding: 2px 4px;">18.4%</mark>。</dd><br>
                <dt style="color: #c0392b; font-weight: bold; font-size: 1.1em;">时隙 ALOHA (Slotted ALOHA)</dt>
                <dd><strong>规则:</strong> 只能在时隙开始时发送。<br><strong>脆弱期:</strong> 缩短为 <mark style="background-color: #fadbd8; border-radius: 3px; padding: 2px 4px;">t</mark>。<br><strong>最大效率:</strong> 翻倍至 <mark style="background-color: #fadbd8; border-radius: 3px; padding: 2px 4px;">36.8%</mark>。</dd>
              </dl>
            </div>`
    },
    {
      front: "CSMA 协议：三种“<mark>坚持</mark>”策略 🧐",
      back: `<div style="font-family: Arial, sans-serif; background-color: #ffffff; color: #2c3e50; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0; line-height: 1.6;">
              <dl>
                <dt style="color: #8e44ad; font-weight: bold; font-size: 1.1em;">核心思想</dt>
                <dd>Carrier Sense (载波侦听) - <mark style="background-color: #e8daef; border-radius: 3px; padding: 2px 4px;">“先听再说”</mark>，极大减少冲突。</dd><br>
                <dt style="color: #8e44ad; font-weight: bold; font-size: 1.1em;">1-坚持 (1-persistent)</dt>
                <dd><strong>策略:</strong> 信道忙则一直听，一空闲就 <mark style="background-color: #e8daef; border-radius: 3px; padding: 2px 4px;">立即发送</mark>。<br><strong>特点:</strong> 贪婪，高负载时易冲突。</dd><br>
                <dt style="color: #8e44ad; font-weight: bold; font-size: 1.1em;">非坚持 (Non-persistent)</dt>
                <dd><strong>策略:</strong> 信道忙则 <mark style="background-color: #e8daef; border-radius: 3px; padding: 2px 4px;">放弃并随机等待</mark> 后再听。<br><strong>特点:</strong> 礼貌，高负载性能好，但可能浪费信道。</dd><br>
                <dt style="color: #8e44ad; font-weight: bold; font-size: 1.1em;">p-坚持 (p-persistent)</dt>
                <dd><strong>策略:</strong> 信道空闲时，以概率p发送，1-p推迟。<br><strong>特点:</strong> 1-坚持与非坚持的折中。</dd>
              </dl>
            </div>`
    },
    {
      front: "CSMA/CD：<mark>经典以太网</mark>的灵魂 📡",
      back: `<div style="font-family: Arial, sans-serif; background-color: #ffffff; color: #2c3e50; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0; line-height: 1.6;">
              <dl>
                <dt style="color: #16a085; font-weight: bold; font-size: 1.1em;">核心改进</dt>
                <dd>Collision Detection (冲突检测) - 不仅“先听再说”，还要 <mark style="background-color: #d1f2eb; border-radius: 3px; padding: 2px 4px;">“边说边听”</mark>。</dd><br>
                <dt style="color: #16a085; font-weight: bold; font-size: 1.1em;">工作原理</dt>
                <dd>一旦检测到冲突，<mark style="background-color: #d1f2eb; border-radius: 3px; padding: 2px 4px;">立即停止发送</mark>，极大减少了冲突开销。</dd><br>
                <dt style="color: #16a085; font-weight: bold; font-size: 1.1em;">关键概念 (P39)</dt>
                <dd><strong>争用期 (Contention Slot):</strong> <mark style="background-color: #d1f2eb; border-radius: 3px; padding: 2px 4px;">2τ</mark> (即一个信号往返时延 RTT)。<br><strong>作用:</strong> 一个站必须在发送了2τ时间后才能确认未发生冲突。这也是以太网 <mark style="background-color: #d1f2eb; border-radius: 3px; padding: 2px 4px;">最小帧长限制 (64B)</mark> 的根本原因。</dd>
              </dl>
            </div>`
    },
    // ... 后续部分可以继续添加 ...
  ]
};