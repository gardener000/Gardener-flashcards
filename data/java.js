// data/stringBuilder.js
export default {
  name: "Java 核心类：StringBuilder",
  data: [
    {
      front: "为什么需要 <mark>StringBuilder</mark>？ 🤔",
      back: '<dl><dt>String 的“不可变性”</dt><dd>在Java中，<code>String</code> 对象一旦创建，其内容就不能被改变。每次对字符串进行拼接操作（如使用 <code>+</code>），实际上都会创建一个<mark>新的</mark> String 对象，并将旧对象的引用指向新对象。</dd><dt>循环拼接的性能问题</dt><dd>在循环中用 <code>+</code> 拼接字符串会产生大量的临时对象，造成严重的内存和性能开销。例如：<br><code>String s = ""; for(int i=0; i<1000; i++) { s += i; }</code><br>这段代码会创建约1000个中间String对象！</dd><dt>解决方案</dt><dd><code>StringBuilder</code> 是一个<mark>可变的</mark>字符序列，它允许在同一个对象上进行高效的修改和追加，避免了不必要的对象创建。</dd></dl>'
    },
    {
      front: "<code>StringBuilder</code> 是什么 & 如何创建？ 🛠️",
      back: '<dl><dt>定义</dt><dd><code>StringBuilder</code> 是一个可变的字符序列，它提供了一套方法来修改其内容。它不保证线程安全。</dd><dt>常用构造方法</dt><dd><ol><li><b>无参构造：</b>创建一个空的 StringBuilder，默认容量为16。<br><code>StringBuilder sb1 = new StringBuilder();</code></li><li><b>指定容量：</b>创建一个空的 StringBuilder，并指定初始容量。<br><code>StringBuilder sb2 = new StringBuilder(32);</code></li><li><b>从字符串创建：</b>用一个现有的 String 对象来初始化。<br><code>StringBuilder sb3 = new StringBuilder("Hello");</code></li></ol></dd></dl>'
    },
    {
      front: "核心操作 (1): 添加与插入 ➕<br>(<code>append</code>, <code>insert</code>)",
      back: '<p>这些方法都会返回 <code>StringBuilder</code> 对象自身，因此可以<mark>链式调用</mark>。</p><dl><dt><code>.append()</code></dt><dd>在字符串末尾追加内容。可以接受任何类型的数据（int, boolean, String 等）。</dd><dt><code>.insert(offset, data)</code></dt><dd>在指定索引 <code>offset</code> 位置插入内容。</dd></dl><pre><code class="language-java">// 示例\nStringBuilder sb = new StringBuilder("Hello");\n\nsb.append(" World")  // 追加字符串\n  .append(2023)       // 追加整数\n  .insert(5, ", Java"); // 在索引5处插入\n\n// 结果: "Hello, Java World2023"\nSystem.out.println(sb.toString());</code></pre>'
    },
    {
      front: "核心操作 (2): 修改与删除 ✏️<br>(<code>replace</code>, <code>delete</code>, <code>reverse</code>)",
      back: '<dl><dt><code>.replace(start, end, str)</code></dt><dd>用 <code>str</code> 替换从索引 <code>start</code> 到 <code>end-1</code> 的内容。</dd><dt><code>.delete(start, end)</code></dt><dd>删除从索引 <code>start</code> 到 <code>end-1</code> 的字符。</dd><dt><code>.reverse()</code></dt><dd>将序列反转。</dd></dl><pre><code class="language-java">// 示例\nStringBuilder sb = new StringBuilder("0123456789");\n\nsb.delete(0, 5)        // 删除 "01234" -> "56789"\n  .replace(0, 2, "AB") // 替换 "56" -> "AB789"\n  .reverse();           // 反转 -> "987BA"\n\n// 结果: "987BA"\nSystem.out.println(sb.toString());</code></pre>'
    },
    {
      front: "核心操作 (3): 获取信息 & 转换 ℹ️<br>(<code>length</code>, <code>capacity</code>, <code>toString</code>)",
      back: '<dl><dt><code>.length()</code></dt><dd>返回字符串的<mark>实际长度</mark>（字符数量）。</dd><dt><code>.capacity()</code></dt><dd>返回当前已分配的<mark>内部存储容量</mark>。当长度超过容量时会自动扩容。</dd><dt><code>.toString()</code></dt><dd><b>最重要的转换方法！</b> 将 <code>StringBuilder</code> 对象转换为一个不可变的 <code>String</code> 对象。这是获取最终结果的标准方式。</dd></dl><pre><code class="language-java">StringBuilder sb = new StringBuilder("Java");\nSystem.out.println(sb.length());    // 输出: 4\nSystem.out.println(sb.capacity());  // 输出: 20 (初始"Java" + 默认16)\n\nString finalString = sb.toString(); // 转换为 String</code></pre>'
    },
    {
      front: "性能对决: <mark>StringBuilder</mark> vs. <mark>String</mark> ⚡",
      back: '<dl><dt>String (使用 <code>+</code>)</dt><dd><b>原理：</b>不可变。每次拼接都创建新对象。</dd><dd><b>场景：</b>适合少量、固定的字符串连接，代码简洁。</dd><dd><b>警告：</b><mark>绝对避免</mark>在循环中使用 <code>+</code> 进行大量拼接。</dd><dt>StringBuilder</dt><dd><b>原理：</b>可变。在原有的字符数组上修改，必要时才扩容。</dd><dd><b>场景：</b><mark>强烈推荐</mark>在循环中或需要频繁修改字符串的场景下使用。</dd><dd><b>性能：</b>在大量拼接时，性能远超 String。</dd></dl>'
    },
    {
      front: "兄弟之争: <mark>StringBuilder</mark> vs. <mark>StringBuffer</mark> 🔒",
      back: '<p><code>StringBuffer</code> 是 <code>StringBuilder</code> 的一个早期版本，它们的功能几乎完全相同，唯一的关键区别在于<mark>线程安全</mark>。</p><dl><dt>StringBuilder</dt><dd><b>线程安全：</b><mark>否</mark>（非线程安全）。</dd><dd><b>性能：</b><mark>高</mark>。因为它不需要处理同步锁。</dd><dd><b>使用场景：</b>单线程环境，或在方法内部作为局部变量使用（不会被多线程共享）。这是<mark>绝大多数情况下的首选</mark>。</dd><dt>StringBuffer</dt><dd><b>线程安全：</b><mark>是</mark>。它的方法都由 <code>synchronized</code> 关键字修饰。</dd><dd><b>性能：</b><mark>低</mark>。因为同步操作会带来额外的开销。</dd><dd><b>使用场景：</b>多线程环境下，需要共享一个可变字符串的场景（非常罕见）。</dd></dl>'
    },
    {
      front: "小结与最佳实践 ✅",
      back: '<dl><dt>核心原则</dt><dd>在需要<mark>循环拼接</mark>或<mark>频繁修改</mark>字符串时，请使用 <code>StringBuilder</code>。</dd><dt>标准流程</dt><dd>创建 <code>StringBuilder</code> -> 通过 <code>append</code>/<code>insert</code> 等方法构建字符串 -> 最后调用 <code>toString()</code> 得到结果。</dd><dt>版本选择</dt><dd>优先使用 <code>StringBuilder</code>，除非你明确知道需要在多个线程间共享和修改同一个字符串对象，那时才考虑 <code>StringBuffer</code>。</dd><dt>面试考点</dt><dd><code>String</code>、<code>StringBuilder</code>、<code>StringBuffer</code> 三者的区别是 Java 面试中的高频考点，务必掌握。</dd></dl>'
    }
  ]
};
