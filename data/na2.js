// data/na2.js
export default {
  name: "数值分析：迭代法",
  data: [
    {
      front: "为什么要用 <mark>迭代法</mark>？ 🎯",
      back: `当线性方程组 <b>Ax=b</b> 的系数矩阵 <b>A</b> <mark>非常大</mark> (如上万阶) 且 <mark>稀疏</mark> (大部分元素为0) 时：<br><br><dl><dt>直接法 (高斯消元等)</dt><dd>计算量过大 (O(n³)) 且会产生“填充”现象，破坏稀疏性，消耗巨大内存。</dd><dt>迭代法</dt><dd>每步计算快，保持矩阵稀疏性，是解决大规模稀疏问题的<mark>唯一可行</mark>方法。</dd></dl>`
    },
    {
      front: "雅可比迭代法 (Jacobi) 的 <mark>核心思想</mark> 是什么？ 🧐",
      back: `核心是 <mark>“同时更新”</mark> 或“同步更新”。<br><br><dl><dt>思想</dt><dd>在计算第 <b>k+1</b> 步的解向量 <b>x<sup>(k+1)</sup></b> 时，其所有分量都<mark>完全依赖于</mark>上一步完整的解向量 <b>x<sup>(k)</sup></b>。</dd><dt>公式</dt><dd>x<sub>i</sub><sup>(k+1)</sup> = (1/a<sub>ii</sub>) * [b<sub>i</sub> - &Sigma;<sub>j&ne;i</sub> a<sub>ij</sub> * x<sub>j</sub><sup>(k)</sup>]</dd><dt>特点</dt><dd>易于实现，且各分量的计算相互独立，<mark>非常适合并行计算</mark>。但收敛通常较慢，且需额外空间存储旧向量。</dd></dl>`
    },
    {
      front: "高斯-赛德尔法 (Gauss-Seidel) 如何<mark>改进</mark>雅可比法？ 💡",
      back: `核心是 <mark>“即时更新”</mark>，利用最新的可用信息。<br><br><dl><dt>思想</dt><dd>在第 <b>k+1</b> 步中计算分量 <b>x<sub>i</sub><sup>(k+1)</sup></b> 时，会<mark>立即使用</mark>在本轮已经计算出的新分量 x<sub>1</sub><sup>(k+1)</sup>, ..., x<sub>i-1</sub><sup>(k+1)</sup>。</dd><dt>优点</dt><dd>通常比雅可比法<mark>收敛更快</mark>。此外，由于是原地更新，它只需要<mark>一个向量的存储空间</mark>，解决了雅可比法的“浪费”问题。</dd><dt>缺点</dt><dd>计算过程是<mark>串行</mark>的，后续分量依赖于前面分量的计算结果，难以并行化。</dd></dl>`
    },
    {
      front: "迭代法 <mark>收敛</mark> 的核心条件是什么？ 🔑",
      back: `对于任何形式为 <b>x<sup>(k+1)</sup> = T * x<sup>(k)</sup> + c</b> 的迭代法：<br><br><dl><dt>充要条件</dt><dd>迭代法对任意初始向量都收敛的充分必要条件是，迭代矩阵 <b>T</b> 的 <mark>谱半径 ρ(T)</mark> 小于 1。</dd><dt>谱半径定义</dt><dd><b>ρ(T) = max{|&lambda;<sub>i</sub>|}</b>，其中 &lambda;<sub>i</sub> 是矩阵 <b>T</b> 的所有特征值。</dd><dt>收敛速度</dt><dd>谱半径不仅决定是否收敛，还决定<mark>收敛速度</mark>。<b>ρ(T)</b> 越小，收敛越快。</dd></dl>`
    },
    {
      front: "什么是<mark>对角占优</mark>矩阵，它有什么用？ 💪",
      back: `<dl><dt>定义</dt><dd>一个矩阵 <b>A</b> 是<mark>严格对角占优</mark>的，如果它的每一行中，对角线元素的绝对值都<mark>严格大于</mark>该行其他所有元素绝对值之和。<br>|a<sub>ii</sub>| > &Sigma;<sub>j&ne;i</sub> |a<sub>ij</sub>|  &forall;i</dd><dt>作用</dt><dd>这是一个非常实用的<mark>充分条件</mark>。如果矩阵 <b>A</b> 是严格对角占优的，那么<mark>雅可比法</mark>和<mark>高斯-赛德尔法</mark>都<mark>保证收敛</mark>。它提供了一个无需计算谱半径的简便判据。</dd></dl>`
    },
    {
      front: "什么是 <mark>SOR</mark> (逐次超松弛) 方法？ 🚀",
      back: `这是高斯-赛德尔法的一种<mark>加速技巧</mark>。<br><br><dl><dt>思想</dt><dd>它不是直接接受高斯-赛德尔计算出的新值，而是取旧值和新值的<mark>加权平均</mark>。通过一个 <mark>松弛因子 ω</mark> 来控制“前进”的步长。</dd><dt>公式</dt><dd>x<sub>i</sub><sup>(k+1)</sup> = (1-&omega;)x<sub>i</sub><sup>(k)</sup> + &omega; * [G-S update]</dd><dt>因子 &omega; 的作用</dt><dd><li><b>&omega; = 1</b>: 等同于高斯-赛德尔法。</li><li><b>1 < &omega; < 2</b>: <mark>超松弛</mark> (Over-Relaxation)，通常能显著加速收敛。</li><li><b>0 < &omega; < 1</b>: 低松弛 (Under-Relaxation)，可帮助某些不收敛的系统收敛。</li></dd><dt>收敛条件</dt><dd>方法收敛的一个<mark>必要条件</mark>是 <b>0 < &omega; < 2</b>。</dd></dl>`
    },
    {
      front: "矩阵的 <mark>条件数 K(A)</mark> 是什么？ 🌡️",
      back: `<dl><dt>定义</dt><dd><b>K(A) = ||A|| * ||A<sup>-1</sup>||</b>。它衡量了方程组的解 <b>x</b> 对于输入数据 <b>A</b> 或 <b>b</b> 中微小变化的<mark>敏感程度</mark>。</dd><dt>作用</dt><dd>它是一个<mark>误差放大器</mark>。解的相对误差最大可被放大 <b>K(A)</b> 倍。<br>||&delta;x||/||x|| &le; K(A) * ||&delta;b||/||b||</dd><dt>矩阵状态</dt><dd><li><b>K(A) &approx; 1</b>: <mark>良态 (Well-conditioned)</mark>，解稳定可靠。</li><li><b>K(A) >> 1</b>: <mark>病态 (Ill-conditioned)</mark>，输入的小误差会导致解的巨大偏差，计算结果不可信。</li></dd></dl>`
    },
    {
      front: "<mark>幂法</mark> (Power Method) 的目标和原理是什么？ 🥇",
      back: `<dl><dt>目标</dt><dd>寻找矩阵的<mark>主特征值</mark> (按模最大) 及其对应的特征向量。</dd><dt>迭代过程</dt><dd>从一个随机的非零向量 <b>x<sup>(0)</sup></b> 开始，反复左乘矩阵 <b>A</b>：<br><b>x<sup>(k)</sup> = A * x<sup>(k-1)</sup></b>。</dd><dt>原理</dt><dd>在迭代过程中，与主特征值 &lambda;<sub>1</sub> 对应的特征向量分量会以 &lambda;<sub>1</sub><sup>k</sup> 的速度增长，<mark>压倒性地超过</mark>其他所有分量。最终，向量 <b>x<sup>(k)</sup></b> 的方向会收敛到主特征向量的方向。</dd><dt>实际操作</dt><dd>每一步都进行<mark>归一化</mark>以防止数值溢出。用于归一化的缩放因子将收敛到主特征值的绝对值 |&lambda;<sub>1</sub>|。</dd></dl>`
    },
    {
      front: "<mark>反幂法</mark> (Inverse Power Method) 如何找到最小特征值？ 🥈",
      back: `<dl><dt>核心原理</dt><dd>矩阵 <b>A</b> 的特征值与它的逆矩阵 <b>A<sup>-1</sup></b> 的特征值互为倒数。因此，<b>A</b> 的<mark>按模最小</mark>的特征值，对应于 <b>A<sup>-1</sup></b> 的<mark>按模最大</mark> (主) 特征值。</dd><dt>算法</dt><dd>对矩阵 <b>A<sup>-1</sup></b> 使用<mark>幂法</mark>。</dd><dt>巧妙实现</dt><dd>我们不直接计算昂贵且不稳定的 <b>A<sup>-1</sup></b>。而是将迭代步骤 <b>x<sup>(k+1)</sup> = A<sup>-1</sup> * x<sup>(k)</sup></b> 转化为求解线性方程组 <mark>A * x<sup>(k+1)</sup> = x<sup>(k)</sup></mark>，这非常高效 (尤其在预先进行LU分解后)。</dd></dl>`
    },
    {
      front: "<mark>带平移的反幂法</mark> (Shifted Inverse Power Method) 有多强大？ 🛰️",
      back: `这是寻找<mark>特定位置</mark>特征值的最强有力工具之一。<br><br><dl><dt>目标</dt><dd>寻找矩阵 <b>A</b> 的所有特征值中最接近某个给定值 <b>p</b> (称为平移量) 的那个。</dd><dt>核心原理</dt><dd>构造新矩阵 <b>B = A - pI</b>。<b>B</b> 的特征值是 &lambda;<sub>i</sub> - p。<b>A</b> 中最接近 <b>p</b> 的特征值，就对应于 <b>B</b> 中<mark>按模最小</mark>的特征值。</dd><dt>算法</dt><dd>对平移后的矩阵 <b>B = A - pI</b> 使用<mark>反幂法</mark>。</dd><dt>威力</dt><dd>它允许我们像“调谐收音机”一样，通过改变 <b>p</b> 的值，<mark>精确地锁定并求解任何一个我们感兴趣的特征值</mark>。</dd></dl>`
    }
  ]
};