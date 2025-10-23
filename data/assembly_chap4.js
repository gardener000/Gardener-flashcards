// data/assembly_chap4.js
// Corrected version: Ensured all assembly mnemonics are properly quoted within template literals to prevent SyntaxErrors.
export default {
  name: "汇编语言：数据移动与编码 (Ch 4)",
  data: [
    {
      front: "数据移动指令的核心特性是什么？ 🤔",
      back: `<dl><dt>核心功能</dt><dd>在 <mark>寄存器</mark> 与 <mark>内存</mark> 之间“搬运”数据，是程序运行的基础。</dd><dt>关键指令</dt><dd>包括 <mark>MOV</mark>, <mark>PUSH</mark>, <mark>POP</mark>, <mark>LEA</mark> 等。</dd><dt>最重要的特性</dt><dd>数据移动指令 <mark>不影响标志位</mark> (Flags)。这保证了数据传送不会干扰后续的逻辑判断（如条件跳转）。</dd></dl>`
    },
    {
      front: "什么是 <mark>机器语言</mark>？CPU 如何解读它？ ⚙️",
      back: `<dl><dt>定义</dt><dd>CPU 的“母语”，是一串二进制指令码。汇编指令最终会被翻译成机器码。</dd><dt>CPU 操作模式</dt><dd>决定指令的默认行为。主要有 <mark>16-bit</mark> (实模式), <mark>32-bit</mark> (保护模式), 和 <mark>64-bit</mark> (长模式)。</dd><dt>默认值</dt><dd>模式决定了默认的 <mark>地址大小</mark> 和 <mark>操作数大小</mark>。例如，32位模式下默认处理32位数据和32位地址。</dd></dl>`
    },
    {
      front: "如何在32位模式下执行16位操作？ 🔄",
      back: `<dl><dt>处理器指令</dt><dd>使用 <mark>.386</mark> 或 <mark>.286</mark> 等伪操作告诉汇编器（MASM）目标CPU架构，设定默认规则。</dd><dt>覆盖机制 (Override)</dt><dd>当指令与当前默认模式不符时，汇编器会自动添加 <mark>前缀字节</mark> (Prefix)。</dd><dt>实例</dt><dd>在32位模式下执行 MOV WORD PTR [BX], 5 (16位操作和寻址)：<br>汇编器会加上 <mark>67H</mark> (地址大小覆盖前缀) 和 <mark>66H</mark> (操作数大小覆盖前缀)。</dd></dl>`
    },
    {
      front: "指令编码：Opcode 字节里有什么秘密？(D/W 位) 🧐",
      back: `<dl><dt>Opcode</dt><dd>操作码，定义指令的基本操作，如 <mark>100010</mark> 代表 MOV。</dd><dt>D 位 (Direction)</dt><dd>决定数据流向。<br><mark>D=1</mark>: 数据流向 <mark>REG</mark> 字段 (REG 为目标)。<br><mark>D=0</mark>: 数据流向 <mark>R/M</mark> 字段 (R/M 为目标)。</dd><dt>W 位 (Width)</dt><dd>决定操作数宽度。<br><mark>W=1</mark>: 字/双字操作 (16/32-bit)。<br><mark>W=0</mark>: 字节操作 (8-bit)。</dd></dl>`
    },
    {
      front: "什么是 <mark>ModR/M</mark> 字节？它是如何工作的？ 🔩",
      back: `<dl><dt>构成</dt><dd>一个8位字节，分为三个字段：<mark>MOD</mark> (2位), <mark>REG</mark> (3位), <mark>R/M</mark> (3位)。</dd><dt>MOD 字段</dt><dd>定义寻址模式。<br><mark>MOD=11</mark>: 寄存器寻址 (R/M字段也是寄存器)。<br><mark>MOD!=11</mark>: 内存寻址，MOD值决定位移(displacement)长度。</dd><dt>REG & R/M 字段</dt><dd><mark>REG</mark> 通常指定一个寄存器操作数。<mark>R/M</mark> 指定另一个操作数，可以是寄存器或内存地址的一部分。</dd></dl>`
    },
    {
      front: "32位模式下，如何实现 `[base + index*scale]` 复杂寻址？ 🕸️",
      back: `<dl><dt>触发条件</dt><dd>在32位寻址中，当 <mark>ModR/M</mark> 字节的 R/M 字段为 <mark>100</mark> 时，表示需要一个额外的 <mark>SIB</mark> 字节。</dd><dt>SIB 字节构成</dt><dd>分为 <mark>Scale</mark> (比例因子, *1, *2, *4, *8), <mark>Index</mark> (变址寄存器), 和 <mark>Base</mark> (基址寄存器)。</dd><dt>用途</dt><dd>极大增强了内存寻址的灵活性，尤其适合 <mark>数组</mark> 等数据结构的处理。</dd></dl>`
    },
    {
      front: "64位模式如何访问新增寄存器和64位数据？ 🚀",
      back: `<dl><dt>解决方案</dt><dd>引入新的 <mark>REX 前缀</mark> (范围 40H-4FH)。</dd><dt>REX 字节构成</dt><dd>包含4个1-bit字段：<mark>W, R, X, B</mark>。<br><mark>W=1</mark>: 启用64位操作数。<br><mark>R, X, B</mark>: 作为寄存器编码的“第4位”，用于扩展 <mark>REG</mark>, <mark>SIB-Index</mark>, 和 <mark>ModR/M-R/M</mark> 字段，从而访问全部16个通用寄存器 (如R8-R15)。</dd></dl>`
    },
    {
      front: "除了REX，x86还有哪些“传统”前缀？ 🏛️",
      back: `<dl><dt>Group 1: 锁/重复</dt><dd><mark>LOCK (F0H)</mark>: 保证指令原子性，用于多核同步。<br><mark>REP (F3H)</mark>: 重复字符串指令。</dd><dt>Group 2: 段覆盖</dt><dd><mark>CS, DS, ES...</mark> (2EH, 3EH...): 临时改变访问内存所用的默认段寄存器。</dd><dt>Group 3 & 4: 大小覆盖</dt><dd><mark>66H</mark>: 操作数大小覆盖 (Operand-size)。<br><mark>67H</mark>: 地址大小覆盖 (Address-size)。</dd></dl>`
    },
    {
      front: "一条指令最终的大小由什么决定？ ⚖️",
      back: `<dl><dt>操作数大小</dt><dd>1. <mark>Opcode W-bit</mark> (区分8位和非8位)。<br>2. <mark>66H 前缀</mark> (在16/32位间切换)。<br>3. <mark>REX.W bit</mark> (在64位模式下提升至64位，优先级最高)。</dd><dt>地址大小</dt><dd>1. 当前 <mark>CPU 操作模式</mark> 的默认值 (16, 32, 或 64-bit)。<br>2. <mark>67H 前缀</mark> (在16/32位间或32/64位间切换)。</dd></dl>`
    },
    {
      front: "x86指令集如何突破单字节256条的限制？ 🤯",
      back: `<dl><dt>机制</dt><dd>使用“逃逸操作码”(Escape Opcode)。将某个字节值（如 <mark>0FH</mark>）保留，不作为独立指令。</dd><dt>工作方式</dt><dd>当CPU读到 <mark>0FH</mark> 时，它知道真正的操作码在 <mark>下一个字节</mark>。这就构成了双字节操作码。</dd><dt>扩展</dt><dd>此机制极大扩展了指令空间，后续还引入了三字节操作码（如 <mark>0F 38 XX</mark>），以容纳 AVX 等新指令集。</dd></dl>`
    }
  ]
};