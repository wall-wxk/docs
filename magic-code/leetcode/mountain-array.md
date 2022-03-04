# 山峰数组的顶部

## 题意

符合下列属性的数组 arr 称为 山峰数组（山脉数组） ：

`arr.length >= 3`
存在 `i（0 < i < arr.length - 1）`使得：
`arr[0] < arr[1] < ... arr[i-1] < arr[i]`
`arr[i] > arr[i+1] > ... > arr[arr.length - 1] `

给定由整数组成的山峰数组 arr ，返回任何满足 `arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i +1] > ... > arr[arr.length - 1]` 的下标 i ，即山峰顶部。

- 示例 1：

输入：arr = [0,1,0]  
输出：1

- 示例 2：

输入：arr = [1,3,5,4,2]  
输出：2

- 示例 3：

输入：arr = [0,10,5,2]  
输出：1

- 示例 4：

输入：arr = [3,4,5,1]  
输出：2

- 示例 5：

输入：arr = [24,69,100,99,79,78,67,36,26,19]  
输出：2

提示：

```
3 <= arr.length <= 104
0 <= arr[i] <= 106
题目数据保证 arr 是一个山脉数组
```

进阶：很容易想到时间复杂度 O(n) 的解决方案，你可以设计一个 O(log(n)) 的解决方案吗？

## 解法

### 一、双指针

由于顶部在中间位置，所以数组两侧的数字，都是小于中间的数字。  
只要逐步将左右指针往中间移动，就可以向山峰趋近。  
当指针重合时，就是山峰。

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] < arr[right]) {
      left++;
    } else if (arr[left] > arr[right]) {
      right--;
    } else {
      left++;
      right--;
    }
  }

  return left;
};
```

### 二、二分法

山峰值最高只有一个，所以可以用二分法缩小范围进行求解。

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > arr[mid + 1]) {
      // 山峰在左侧，则下标mid+1不符合，排除
      right = mid;
    } else if (arr[mid] < arr[mid + 1]) {
      // 山峰在右侧，则下标mid不符合，排除
      left = mid + 1;
    } else {
      left++;
      right--;
    }
  }
  return left;
};
```

来源：https://leetcode-cn.com/problems/B1IidL
