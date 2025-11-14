// data/java-w9-hw.js

export default {
  name: "JavaW9作业：线程",
  data: [
    {
      front: "如何创建 Java 线程？ 🛠️",
      back: `<div style="background-color: #F8F9FA; color: #212529; padding: 15px; border-radius: 8px;"><dl><dt>方式一: 继承 <code>Thread</code> 类</dt><dd><code>class MyThread extends Thread { public void run() {...} }</code><br><b>优点:</b> 编码简单。<br><b>缺点:</b> Java是单继承，若类已有父类则此法不通。</dd><dt>方式二: 实现 <code>Runnable</code> 接口</dt><dd><code>class MyTask implements Runnable { public void run() {...} }</code><br><code>new Thread(new MyTask()).start();</code><br><b>优点:</b> 扩展性好，可实现多接口，是<mark>推荐</mark>的方式。</dd></dl></div>`
    },
    {
      front: "<code>start()</code> vs <code>run()</code> 有何天壤之别？ 🚀",
      back: `<div style="background-color: #F8F9FA; color: #212529; padding: 15px; border-radius: 8px;"><dl><dt><code>t.start()</code></dt><dd><b>启动新线程。</b><br>将线程置于<mark>就绪(Runnable)</mark>状态，由JVM调度执行。这才是真正的多线程。</dd><dt><code>t.run()</code></dt><dd><b>普通方法调用。</b><br>不会启动新线程，只是在<mark>当前线程</smark>中执行<code>run()</code>方法体内的代码，程序仍然是单线程执行。</dd><dt>线程生命周期</dt><dd>一旦线程进入<mark>死亡(Terminated)</mark>状态，它将无法被再次启动，不能转换到任何其他状态。</dd></dl></div>`
    },
    {
      front: "如何保证线程安全？ 🔒",
      back: `<div style="background-color: #2C3E50; color: #ECF0F1; padding: 15px; border-radius: 8px;"><dl><dt><code>synchronized</code> 关键字</dt><dd>确保任一时刻<mark>只有一个线程</mark>可以执行被保护的代码块或方法，从而避免数据竞争。</dd><dt>线程协调: <code>wait()</code>, <code>notify()</code></dt><dd>它们是 <code>java.lang.Object</code> 的方法，而非<code>Thread</code>的方法。<br>必须在<code>synchronized</code>代码块中调用，否则会抛出<code>IllegalMonitorStateException</code>。</dd></dl></div>`
    },
    {
      front: "哪些集合/字符串类是线程安全的？ ⚠️",
      back: `<div style="background-color: #2C3E50; color: #ECF0F1; padding: 15px; border-radius: 8px;"><dl><dt>✅ <mark>线程安全</mark></dt><dd><code>StringBuffer</code>: 方法被<code>synchronized</code>修饰，性能较低。</dd><dt>❌ <mark>非线程安全</mark></dt><dd><code>StringBuilder</code>: 无同步，单线程下性能更高。<br><code>ArrayList</code>: 多线程下需手动同步或使用<code>Collections.synchronizedList()</code>。<br><code>HashSet</code>: 多线程下需手动同步或使用<code>Collections.synchronizedSet()</code>。</dd></dl></div>`
    },
    {
      front: "<code>sleep()</code>, <code>join()</code>, <code>yield()</code> 的区别 🚦",
      back: `<div style="background-color: #F8F9FA; color: #212529; padding: 15px; border-radius: 8px;"><dl><dt><code>Thread.sleep(ms)</code></dt><dd>使<mark>当前</mark>线程休眠至少指定的毫秒数，进入<code>TIMED_WAITING</code>状态。它是静态方法，<code>t.sleep()</code>等同于<code>Thread.sleep()</code>。</dd><dt><code>t.join()</code></dt><dd>使<mark>当前</mark>线程等待，直到线程<code>t</code>执行完毕。用于确保线程执行顺序。</dd><dt><code>Thread.yield()</code></dt><dd>线程让步。提示调度器当前线程愿意放弃CPU，但调度器<mark>可以忽略</mark>这个提示。</dd></dl></div>`
    },
    {
      front: "什么是死锁？ 🔗💥",
      back: `<div style="background-color: #F8F9FA; color: #212529; padding: 15px; border-radius: 8px;"><dl><dt>定义</dt><dd>两个或多个线程互相持有对方所需的资源（锁），并无限期地等待对方释放，导致所有相关线程都无法继续执行。</dd><dt>经典场景</dt><dd>线程A: <code>synchronized(a){ synchronized(b){...} }</code><br>线程B: <code>synchronized(b){ synchronized(a){...} }</code><br>当A锁住a，B锁住b时，死锁就可能发生。</dd></dl></div>`
    },
    {
      front: "Java 线程常见陷阱速记 🧠",
      back: `<div style="background-color: #2C3E50; color: #ECF0F1; padding: 15px; border-radius: 8px;"><dl><dt><code>run()</code>签名</dt><dd>必须是<code>public void run()</code>，<mark>无返回值</mark>。</dd><dt>内存管理</dt><dd>由JVM自动管理，<mark>无需</mark>开发者创建线程手动分配。</dd><dt>静态与实例</dt><dd><code>static</code>方法 (如<code>main</code>) <mark>不能</mark>直接访问非静态的实例变量。</dd><dt>线程优先级</dt><dd>高优先级线程理论上会<mark>抢占</mark>低优先级线程。<code>main</code>线程默认优先级是5(<code>NORM_PRIORITY</code>)，不是最大值10。</dd></dl></div>`
    }
  ]
};