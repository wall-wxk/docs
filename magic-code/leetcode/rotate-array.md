# 旋转数组

## 题意

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。  

进阶：  

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 
- 示例 1:  

输入: nums = [1,2,3,4,5,6,7], k = 3  
输出: [5,6,7,1,2,3,4]  

解释:  
向右旋转 1 步: [7,1,2,3,4,5,6]  
向右旋转 2 步: [6,7,1,2,3,4,5]  
向右旋转 3 步: [5,6,7,1,2,3,4]  

- 示例 2:

输入：nums = [-1,-100,3,99], k = 2  
输出：[3,99,-1,-100]  

解释:   
向右旋转 1 步: [99,-1,-100,3]  
向右旋转 2 步: [3,99,-1,-100]  
 
提示：  

1 <= nums.length <= 2 * 104  
-231 <= nums[i] <= 231 - 1  
0 <= k <= 105  


## 解法

### 一、一般的解法 

第一步：先用栈存储要翻转的数字  
第二步：将栈中的元素依次取出，添加到nums的头部，同时，删除末尾对应的数字  

不过，这个解法，超出了leetcode的时间限制。  

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
 
    const stack = [];
    let i = n - k;
 
    while(i < n){
        stack.unshift(nums[i]);
        i++;
    }
    
    for(let j = 0; j < stack.length; j++){
        nums.pop();
        nums.unshift(stack[j]);
    }
 
    return nums;
};
```

### 二、翻转数组

如图所示，分为三步即可。  
第一步：整个数组翻转  
第二、三步：依赖k，分别对[0 ~ k - 1] 和 [k ~ n - 1]进行翻转  

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
 
    return nums;
 
    function reverse(nums, start, end){
        while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
};
```


### 三、使用辅助数组

依据准则：下标index 的数，对应的新位置是 (index + k ) % n   
所以，求解分为两步。  
第一步：遍历原数组，将每个数字按新位置，存入辅助数组  
第二步：遍历辅助数组，存储到原数组  

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
 
    const result = [];
 
    let i = 0;
    while(i < n){
        result[(i+k)%n] = nums[i++];
    }
    
    let j = 0;
    while(j < n){
        nums[j] = result[j++]
    }
};
```
