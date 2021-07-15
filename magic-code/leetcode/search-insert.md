# 搜索插入位置

## 题意

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0


## 解法

采用二分法进行查找，用左右指针记录搜索的段落，然后不断缩小范围。
当找到目标值时，则直接返回下标。
当找不到值时，left和right的平均值，刚好指向要插入位置的前一位。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0; // 左指针
    let right = nums.length - 1;// 右指针
 
    while(left <= right){
        let middle = Math.floor((left+right)/2); // 取出中位数
        let current = nums[middle];
        // 当与目标数相等时，直接返回
        if(current == target){
            return middle;
        }
        if(current < target){
            // 当前数小于目标数，证明[left ~ middle]段不在查找范围内，所以修改left值
            left = middle + 1;
        }else{
            // right同理,不在[middle ~ right]段内
            right = middle - 1;
        }
    }
 
    // 跳出循环后，left和right指针的平均值，刚好是指向插入位置的左侧
 
    return Math.floor((left+right)/2)+1;
 
};
```
