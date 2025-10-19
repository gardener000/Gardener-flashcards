// data/java-inheritance-polymorphism.js
export default {
  name: "Java：继承与多态核心",
  data: [
    {front:"Java 继承的基本规则 🏛️",back:`<dl><dt>单继承</dt><dd>一个类最多只能 <mark>extends</mark> 一个父类，以避免“菱形问题”。</dd><dt>多实现</dt><dd>一个类可以 <mark>implements</mark> 多个接口，这是实现类似多重继承功能的方式。</dd><dt>万物之源</dt><dd>如果一个类没有显式继承任何类，它会默认继承自 <mark>Object</mark> 类。</dd></dl>`},
    {front:"重写 (Override) vs 重载 (Overload) 🔀",back:`<dl><dt>重写 (Override)</dt><dd>子类重新实现父类的方法。要求方法签名（名称、返回类型、参数列表）<mark>完全相同</mark>。这是多态的基础。</dd><dt>重载 (Overload)</dt><dd>在<mark>同一个类</mark>中，方法名相同，但<mark>参数列表不同</mark>（参数的数量、类型或顺序）。</dd></dl>`},
    {front:"构造方法的调用链 ⛓️",back:`<dl><dt><code>super()</code></dt><dd>用于调用<mark>父类</mark>的构造方法。必须是子类构造方法中的<mark>第一行</code >。</dd><dt><code>this()</code></dt><dd>用于调用<mark>本类</mark>的另一个构造方法。也必须是构造方法中的<mark>第一行</code >。</dd><dt>隐式调用</dt><dd>若不显式调用，编译器会自动插入无参的 <mark>super()</mark>。如果父类没有无参构造方法，则会导致<mark>编译失败</mark>。</dd></dl>`},
    {front:"多态与对象初始化顺序 🥚",back:`<code>new B()</code> (当B extends A) 的过程：<dl><dt>1. 父类A初始化</dt><dd>初始化成员变量时，若调用了方法 (如 <mark>baz()</code >)，会触发<mark>多态</mark>，执行子类B中重写后的版本。</dd><dt>2. 父类A构造执行</dt><dd>执行父类构造函数体内的代码。</dd><dt>3. 子类B初始化</dt><dd>初始化子类自己的成员变量，同样可能触发多态。</dd><dt>4. 子类B构造执行</dt><dd>执行子类构造函数体内的代码。</dd></dl>`},
    {front:"`instanceof` 与向上转型 🔍",back:`<dl><dt>作用</dt><dd><code>instanceof</code > 用于检查一个对象的<mark>实际运行时类型</mark>，而不是引用的声明类型。</dd><dt>示例</dt><dd><code>Person p = new Teacher();</code> 中，<code>p instanceof Teacher</code > 的结果为 <mark>true</code >，因为p指向的实际对象是一个Teacher。</dd></dl>`},
    {front:"关键字: `protected` & `abstract` 🔑",back:`<dl><dt><code>protected</code ></dt><dd>成员可以被<mark>同一个包</mark>内的类，或<mark>不同包中的子类</mark>访问。</dd><dt><code>abstract class</code ></dt><dd>抽象类<mark>不能被实例化</mark>，它可以同时包含抽象方法和具体方法。</dd><dt><code>abstract method</code ></dt><dd>抽象方法只有声明没有实现，继承它的非抽象子类<mark>必须重写</mark>它。</dd></dl>`},
    {front:"Java 核心特性速记 📝",back:`<dl><dt>泛型编程</dt><dd>Java支持泛型，提供编译时类型安全，如 <mark>ArrayList&lt;String&gt;</code >。</dd><dt>无操作符重载</dt><dd>为保持语言简洁，Java不允许用户自定义操作符重载。</dd><dt><code>toString()</code ></dt><dd>覆盖此方法可自定义对象的<mark>字符串表示形式</mark>，常用于调试和日志输出。</dd><dt>动态数组</dt><dd>Java中的所有数组都是对象，在堆内存中<mark>动态创建</mark>。</dd></dl>`}
  ]
};
const cardsData=[];