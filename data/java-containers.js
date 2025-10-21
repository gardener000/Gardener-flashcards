// data/java-containers.js
export default {
  name: "Java 核心容器：数组与集合",
  data: [
    {
      front:"Java 数组 (Array) 核心特性 🧱",
      back:`<dl><dt>类型固定 (同质性)</dt><dd>一个数组只能存放 <mark>一种</d> 数据类型（基本类型或引用类型）。例如 <code>int[]</code> 只能放 <code>int</code>。</dd><dt>长度固定</dt><dd>创建时必须指定长度，之后 <mark>不可改变</mark>。<code>int[] a = new int[10];</code></dd><dt>静态初始化</dt><dd>可以在声明时直接赋值。<code>int[] a = {1, 2, 3};</code></dd></dl>`
    },
    {
      front:"如何获取“长度”？📏 <code>length</code> vs <code>length()</code> vs <code>size()</code>",
      back:`<p>这是常见易错点，必须区分：</p><dl><dt>数组 (Array)</dt><dd>使用 <code>.length</code> <mark>属性</mark>。<code>int[] arr = new int[5]; int len = arr.length;</code></dd><dt>字符串 (String)</dt><dd>使用 <code>.length()</code> <mark>方法</mark>。<code>String s = "hi"; int len = s.length();</code></dd><dt>集合 (Collection)</dt><dd>使用 <code>.size()</code> <mark>方法</mark>。<code>List&lt;String&gt; list = new ArrayList&lt;&gt;(); int size = list.size();</code></dd></dl>`
    },
    {
      front:"数组能存什么？默认值是什么？ 🎁",
      back:`<dl><dt>元素类型</dt><dd>数组可以存储 <mark>基本数据类型</mark> (如 <code>int</code>, <code>double</code>) 和 <mark>引用数据类型</mark> (如 <code>String</code>, 自定义对象)。</dd><dt>默认初始化</dt><dd>使用 <code>new</code> 创建数组后，元素会被赋予默认值：<br> • <code>int</code>, <code>double</code> 等数值类型 -> <mark>0</mark> 或 <mark>0.0</mark><br> • <code>boolean</code> -> <mark>false</mark><br> • <code>char</code> -> <mark>'\\u0000'</mark><br> • 所有对象/引用类型 -> <mark>null</mark></dd></dl>`
    },
    {
      front:"数组的遍历与“越界” 🚶‍♂️",
      back:`<dl><dt>安全遍历 (for-each)</dt><dd>推荐使用增强for循环遍历，简洁且不会越界。<br><code>for (int element : a) { System.out.println(element); }</code></dd><dt>越界异常</dt><dd>访问索引小于 <code>0</code> 或大于等于 <code>array.length</code> 时，会抛出 <mark>ArrayIndexOutOfBoundsException</mark>。<br>经典错误：<code>for(int i=0; i&lt;=a.length; i++)</code>，当 <code>i</code> 等于 <code>a.length</code> 时就会越界。</dd></dl>`
    },
    {
      front:"Java 核心集合接口 🗺️ <code>List</code>, <code>Set</code>, <code>Map</code>",
      back:`<dl><dt>List (列表)</dt><dd>特点：<mark>有序</mark> (按插入顺序)、<mark>允许重复</mark> 元素。<br>常用实现：<code>ArrayList</code>, <code>LinkedList</code>。</dd><dt>Set (集)</dt><dd>特点：<mark>无序</mark> (通常) 或 <mark>有序</mark> (TreeSet)、<mark>不允许重复</mark> 元素。<br>常用实现：<code>HashSet</code>, <code>TreeSet</code>。</dd><dt>Map (映射)</dt><dd>特点：存储 <mark>键值对 (Key-Value)</mark>、<mark>Key不允许重复</mark>。<br>常用实现：<code>HashMap</code>, <code>TreeMap</code>。</dd></dl>`
    },
    {
      front:"遍历时如何安全删除元素？ 🚮",
      back:`<p>在用循环遍历集合时修改集合，容易出错。</p><dl><dt>错误方式</dt><dd>使用 for-each 循环或普通 for 循环，并调用 <code>list.remove()</code> 方法，会导致 <mark>ConcurrentModificationException</mark> 或跳过元素。</dd><dt>正确方式</dt><dd>必须使用 <mark>迭代器 (Iterator)</mark> 进行遍历，并调用迭代器自身的 <mark><code>it.remove()</code></mark> 方法来删除当前元素。<br><code>while (it.hasNext()) {<br>  if (condition) { it.remove(); }<br>}</code></dd></dl>`
    },
    {
      front:"泛型 (Generics) 与类型擦除 🎭",
      back:`<dl><dt>作用</dt><dd>泛型 (如 <code>List&lt;String&gt;</code>) 提供了 <mark>编译期</mark> 的类型安全检查，避免了强制类型转换和运行时错误。</dd><dt>类型擦除</dt><dd>Java的泛型信息在 <mark>运行时</mark> 会被擦除。因此，<code>ArrayList&lt;String&gt;</code> 和 <code>ArrayList&lt;Integer&gt;</code> 在运行时的类型都是 <code>ArrayList.class</code>。<br>所以 <code>l1.getClass() == l2.getClass()</code> 的结果为 <mark>true</mark>。</dd></dl>`
    },
    {
      front:"泛型为何“不协变”？ 🤔 <code>List&lt;String&gt;</code> vs <code>List&lt;Object&gt;</code>",
      back:`<dl><dt>核心规则</dt><dd>即使 <code>String</code> 是 <code>Object</code> 的子类，<code>List&lt;String&gt;</code> <mark>不是</mark> <code>List&lt;Object&gt;</code> 的子类。这称为泛型的不协变性。</dd><dt>原因</dt><dd>为了防止“堆污染”。如果 <code>List&lt;Object&gt; lo = new ArrayList&lt;String&gt;();</code> 合法，那么就可以通过 <code>lo.add(new Integer(1));</code> 向一个只应存放字符串的列表中添加整数，破坏了类型安全。</dd><dt>解决方案</dt><dd>使用通配符，如 <code>List&lt;? extends Object&gt;</code> 来表示可以接受某个类型及其所有子类的列表。</dd></dl>`
    },
    {
      front:"总结：数组 vs. <code>ArrayList</code> ✅",
      back:`<dl><dt>大小</dt><dd><strong>数组</strong>：<mark>固定</mark>大小。<br><strong>ArrayList</strong>：<mark>动态</mark>可变大小。</dd><dt>类型</dt><dd><strong>数组</strong>：可存 <mark>基本类型</mark> 和 <mark>对象</mark>。<br><strong>ArrayList</strong>：只能存 <mark>对象</mark> (基本类型需用包装类，如 <code>Integer</code>)。</dd><dt>性能</dt><dd><strong>数组</strong>：访问速度快。<br><strong>ArrayList</strong>：增删元素更灵活，但可能涉及底层数组的复制，有性能开销。</dd><dt>API</dt><dd><strong>数组</strong>：功能有限，仅有 <code>.length</code> 属性。<br><strong>ArrayList</strong>：提供丰富的方法，如 <code>add()</code>, <code>remove()</code>, <code>size()</code> 等。</dd></dl>`
    }
  ]
};