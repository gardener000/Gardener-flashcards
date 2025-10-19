// data/threads.js
export default {
  name: "操作系统：线程",
  data: [
    {front:"为什么需要 <mark>线程</mark>？ 🧭",back:`<dl><dt>单线程问题</dt><dd>程序一次只能做一件事，例如当 <mark>RetrieveData()</mark> 下载图片时浏览器会卡死。</dd><dt>轮询不足</dt><dd>任务拆小仍然串行，网络慢时依旧阻塞。</dd><dt>解决方案</dt><dd>操作系统通过 <mark>线程</mark> 实现并发：阻塞时切换其他线程运行。</dd></dl>`},
    {front:"线程 与 进程 的区别 ⚙️",back:`<dl><dt>共享与独享</dt><dd>线程共享进程的 <mark>代码</mark>、<mark>数据</mark>、<mark>文件</mark>；但各自有 <mark>寄存器</mark> 与 <mark>栈</mark>。</dd><dt>通信与开销</dt><dd>线程通信简单、开销小；进程隔离、通信复杂。</dd><dt>结论</dt><dd>线程提升 <mark>响应性</mark>、<mark>并发能力</mark>。</dd></dl>`},
    {front:"用户线程 vs 内核线程 🧩",back:`<dl><dt>用户线程</dt><dd>由 <mark>线程库</mark> 管理；优：快、可移植。缺：阻塞会影响全部。</dd><dt>内核线程</dt><dd>由内核管理；优：多核并行、阻塞隔离。缺：开销较大。</dd></dl>`},
    {front:"多线程模型（M:N 等） 🧭",back:`<dl><dt>多对一</dt><dd>多用户线程映射到一个内核线程；高效但阻塞问题严重。</dd><dt>一对一</dt><dd>每用户线程对应一个内核线程；并行强但开销大。</dd><dt>多对多</dt><dd>多个用户线程映射多个内核线程；灵活折中。</dd><dt>两级模型</dt><dd>多对多变体，可绑定关键线程。</dd></dl>`},
    {front:"线程问题速记 🧠",back:`<dl><dt>fork()/exec()</dt><dd>fork() 可复制调用线程；exec() 替换整个进程。</dd><dt>线程取消</dt><dd>异步取消危险；延迟取消安全。</dd><dt>信号处理</dt><dd>可传给单线程、全部、部分或专用线程。</dd><dt>线程池</dt><dd>预创建复用线程，提升效率。</dd><dt>线程特有数据 (TLS)</dt><dd>为每线程提供独立数据副本。</dd><dt>LWP 与调度器激活</dt><dd>LWP 连接用户与内核线程，upcall 通知事件。</dd></dl>`},
    {front:"小结 ✅",back:`<dl><dt>核心</dt><dd>线程是进程内部执行流，共享资源，独立栈寄存器。</dd><dt>好处</dt><dd>响应性、共享、经济性、并行。</dd><dt>实践</dt><dd>主流采用 <mark>一对一模型</mark>。</dd></dl>`}
    // ... 其他所有线程相关的卡片 ...
  ]
};
const cardsData=[];
