# 长度最小的子数组

## 题意

给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

- 示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]  
输出：2  
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

- 示例 2：

输入：target = 4, nums = [1,4,4]  
输出：1

- 示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]  
输出：0

```
提示：
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
```

进阶：  
如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。

## 解法

使用“滑动窗口”的方式  
用队列存储数组，并缓存对应的 sum。  
当有新的数字进入队列的时候，需要判断新的 sum 是否>=target  
如果刚好等于 target，则更新最小长度的取值 min  
如果大于 target，则要检查队头是否要出列

```js
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  const stack = [];
  let min = nums.length + 1; // min 取比nums长度大，用于判断是否有>=target的情况
  let i = 0;
  while (i < nums.length) {
    stack.push(nums[i]);
    sum += nums[i];

    if (sum == target) {
      min = Math.min(stack.length, min);
    } else if (sum > target) {
      // 需要对队列底部进行判断，要不要出队列
      const shiftNum = stack[0];
      if (shiftNum <= nums[i] && sum - stack[0] >= target) {
        sum -= stack.shift();
        // 继续检查
        while (sum - stack[0] >= target) {
          sum -= stack.shift();
        }
      }
      min = Math.min(stack.length, min);
    }
    i++;
  }

  return min > nums.length ? 0 : min;
};
```

来源：https://leetcode-cn.com/problems/minimum-size-subarray-sum
