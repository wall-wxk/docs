# 二分查找

## 题意

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。  

- 示例 1:  

输入: nums = [-1,0,3,5,9,12], target = 9  
输出: 4  
解释: 9 出现在 nums 中并且下标为 4  

- 示例 2:  

输入: nums = [-1,0,3,5,9,12], target = 2  
输出: -1  
解释: 2 不存在 nums 中因此返回 -1  
 

提示：  
你可以假设 nums 中的所有元素是不重复的。  
n 将在 [1, 10000]之间。  
nums 的每个元素都将在 [-9999, 9999]之间。  


## 解法

用双指针分别指向搜索范围的两端，因为是升序了数组，所以取范围内的中间位置的值与target进行比较。  
如果刚好相等，则结束查找。  
如果不相等，则可以移动指针，缩小搜索范围。  
一直以上述模式进行查找，直到left > right为止，结束查找。  

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
 
    while(left <= right){
        const middle = Math.floor((left + right) / 2);
        const current = nums[middle];
 
        if(current == target){
            return middle;
        }
        if(current < target){
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
 
    return -1;
};
```
