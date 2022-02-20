# 打乱数组

## 题意

给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

实现 Solution class:

Solution(int[] nums) 使用整数数组 nums 初始化对象  
int[] reset() 重设数组到它的初始状态并返回  
int[] shuffle() 返回数组随机打乱后的结果

- 示例 1：

输入

```
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
```

输出

```
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
```

解释

```
Solution solution = new Solution([1, 2, 3]);
solution.shuffle(); // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset(); // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle(); // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
```

- 提示：

1 <= nums.length <= 200
$-10^6$ <= nums[i] <= $10^6$
nums 中的所有元素都是 唯一的
最多可以调用 5 \* 104 次 reset 和 shuffle

## 解法

解答此类题目，最重要的是要做到每一个取数，都是公平的，等概率的。  
采用“洗牌算法”，可以做到每一位数字，被选中的概率一致。  
原理是：从数组末尾开始，从[0, i]中，选出下标 n，将第 i 位与第 n 位数字对换。

举个例子：  
数组 [1, 2, 3]，取出下标 i=0， 得到数字 1  
再从[0, 2]的下标中，随机选出下标 n （下标 n 有可能是 0），比如这个时候取到 n= 2，则得到数字 3。  
得到 3 的概率是 1/3。  
将两个数字对换，得到新数组[3, 2, 1]。

接着，取出下标 i=1，得到数字 2  
再从[1, 2]的下标中，随机选出下标 n，比如，这个时候取到 n=1，则得到数字 2。得到数字 2 的概率是 2/3 \* 1/2 = 1/3。  
将两个数字对换这步，因为都是 2，所以得到新数组是[3, 2, 1]。

以这个步骤推进，则每个数字被选中的概率都是 1/3。

```js
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.real = nums;
  this.nums = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = [...this.real];
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const len = this.nums.length;
  let i = 0;
  while (i < len) {
    const randomNum = Math.floor(Math.random() * (len - i)) + i; // 从[i,len - 1]区间，随机取一个数
    const tmp = this.nums[i];
    this.nums[i] = this.nums[randomNum];
    this.nums[randomNum] = tmp;

    i++;
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```

来源：https://leetcode-cn.com/problems/shuffle-an-array
