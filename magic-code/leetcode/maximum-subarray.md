# 最小子序和

## 题意

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

- 示例 1：  

输入：`nums = [-2,1,-3,4,-1,2,1,-5,4]`  
输出：6  
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。  

- 示例 2：  

输入：`nums = [1]`  
输出：1  

- 示例 3：  

输入：`nums = [0]`  
输出：0  

- 示例 4： 

输入：`nums = [-1]`  
输出：-1  

- 示例 5：

输入：`nums = [-100000]`  
输出：-100000  

## 解法

使用动态规划法进行求解  
要点：当前index位的最大和为　`result[index - 1] + nums[index]` 或　`nums[index]`  
只要对每一位进行求最大和，然后再与要输出的结果max进行比较，即可。  

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const result = [];
    result[0] = nums[0];
    let max = result[0];
    let index = 1;
    while(index < nums.length){
        result[index] = Math.max(result[index - 1]+nums[index], nums[index]);
        max = Math.max(max, result[index]);
        index++;
    }
    return max;
};
```
