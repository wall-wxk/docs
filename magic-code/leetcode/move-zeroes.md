# 移动零

## 题意

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。  

示例:  

输入: [0,1,0,3,12]  
输出: [1,3,12,0,0]  

说明:  

必须在原数组上操作，不能拷贝额外的数组。  
尽量减少操作次数。  

## 解法

使用同向双指针的方式进行遍历数组。  
每一步：先找出第一个数字 0 的下标zeroIndex，  
然后，从zeroIndex开始，找出第一个非0数字，  
接着将两个数字进行交换。  
然后，继续上述步骤，直到到达数组尾部。  

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const n = nums.length;
    if(n < 2){
        return;
    }
 
    let zeroIndex = 0;
    let numIndex = 0;
 
    while(numIndex < n && zeroIndex < n - 1){
        // 找出第一个为零的数字
        while(nums[zeroIndex] !== 0 && zeroIndex < n){
            zeroIndex++;
        }
        numIndex = zeroIndex;
        // 从为零数字的下标开始，找出第一个非零的数字
        while(nums[numIndex] == 0 && numIndex < n){
            numIndex++;
        }
        // 将两个数字进行交换
        if(zeroIndex < n && numIndex < n){
            nums[zeroIndex] = nums[numIndex];
            nums[numIndex] = 0;
        }
    }
};
```
