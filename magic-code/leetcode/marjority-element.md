# 多数元素

## 题意

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

- 示例 1：

输入：[3,2,3]
输出：3

- 示例 2：

输入：[2,2,1,1,1,2,2]
输出：2

- 进阶：
  尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

## 解法

使用`投票算法`进行求解即可。  
解题思路如下：  
因为众数 m 的个数：大于 n/2，非 m 数字的个数：小于 n/2，所以众数 m 与非 m 数字配对抵消，剩下的数字，就是众数 m。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majorNum;
  let count = 0;
  const len = nums.length;
  let i = 0;

  while (i < len) {
    if (count == 0) {
      majorNum = nums[i];
    }
    if (majorNum == nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
    i++;
  }
  return majorNum;
};
```
