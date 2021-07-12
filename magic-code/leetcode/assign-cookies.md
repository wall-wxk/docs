# 分发饼干

假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

- 示例 1:

输入: `g = [1,2,3], s = [1,1]`
输出: 1
解释: 
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。
示例 2:

输入: `g = [1,2], s = [1,2,3]`
输出: 2
解释: 
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
 

提示：
```
1 <= g.length <= 3 * 104
0 <= s.length <= 3 * 104
1 <= g[i], s[j] <= 231 - 1
```


## 解法

### 一般的解法

先将两个数组排序为升序，然后依次取出小孩的胃口值childs[i]，再遍历饼干列表，找出符合条件的饼干，找到后，则＋1

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let feedNum = 0;
    let cookies = s.sort((a, b) => a - b);
    let childs = g.sort((a, b) => a - b);
 
    for(let i = 0; i < childs.length; i++){
        getCookie(childs[i]);
    }
 
    return feedNum;
 
    function getCookie(eatNum){
        for(let j = 0; j < cookies.length; j++){
            if(eatNum <= cookies[j]){
                feedNum += 1;
                return cookies.splice(j, 1);
            }
        }
    }
};
```

### 优化后的解法

因为小孩的胃口值是升序的，如果前一个小孩都满足不了的饼干，则下一个小孩也无法满足，所以可以逐渐将饼干的搜索范围缩小。

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let a = 0;
    let b = 0;
    let childs = g.sort((a, b) => a - b);
    let cookies = s.sort((a, b) => a - b);
    let feedNum = 0;
 
    while(a < childs.length && b < cookies.length){
        if(childs[a] <= cookies[b]){
            a++;
            feedNum++;
        }
        b++;
    }
 
    return feedNum;
};
```
