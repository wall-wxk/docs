# 有序数组的平方

## 题意

给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。


- 示例 1：  

输入：nums = [-4,-1,0,3,10]  
输出：[0,1,9,16,100]  
解释：平方后，数组变为 [16,1,0,9,100]  
排序后，数组变为 [0,1,9,16,100]  

- 示例 2：  

输入：nums = [-7,-3,2,3,11]  
输出：[4,9,9,49,121]  
 
提示：  

1 <= nums.length <= 104  
-104 <= nums[i] <= 104  
nums 已按 非递减顺序 排序  
  
进阶：  
请你设计时间复杂度为 O(n) 的算法解决本问题  


## 解法

### 一、普通的解法

第一步，先拿到正整数区间[0 ~ n]，存入新的数组resultNums，并记录第一位正整数的下标goodIndex  
第二步，依次取出下标[0 ~ goodIndex]区间的负整数，然后插入resultNums中  
第三步，对排好序的resultNums进行遍历，取平方和  

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let goodIndex = 0; // 第一个正值的下标
    while(nums[goodIndex] < 0){
        goodIndex++;
    }
    let resultNums = [...nums];
 
    // 排序
    if(goodIndex !== 0){
        resultNums = resultNums.slice(goodIndex); // 拿到最新的数组
        let left = 0;
        while(left < goodIndex){
            const current = Math.abs(nums[left]);
            let insertIndex = 0;
            for(let seekNum = 0; seekNum < resultNums.length; seekNum++){
                if(resultNums[seekNum] == current){
                    insertIndex = seekNum + 1;
                    break;
                }else if(resultNums[seekNum] > current){
                    insertIndex = seekNum;
                    break;
                }else{
                    insertIndex = seekNum+1;
                }
            }
            resultNums.splice(insertIndex, 0, current);
            left++;
        }
    }
 
    // 算出平方的结果
    for(let index = 0; index < resultNums.length; index++){
        const current = resultNums[index];
        resultNums[index] = current * current;
    }
 
    return resultNums;
 
};
```


### 二、更优的解法

使用双指针，分别指向数组的头尾。   
向中间进行遍历，详细见代码注释。  

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
 
    while(left <= right){
        const leftValue = Math.abs(nums[left]);
        const rightValue = Math.abs(nums[right]);
 
        if(leftValue > rightValue){
            // 左指针的值 > 右指针的值，因为数组是有序的，所以在右指针的右侧插入
            // 之后，左指针已处理，右移一位
            nums.splice(right+1, 0, leftValue * leftValue);
            left++;
        }else if(leftValue == rightValue){
            // 左指针的值 = 右指针的值，则左指针的值可以插入右指针的右侧
            // 之后，左指针已处理，右移一位
            // 因为右指针的值也是相同的，所以同时处理，然后左移一位
            nums[right] = leftValue * leftValue;
            nums.splice(right+1, 0, leftValue * leftValue);
            left++;
            right--;
        }else{
            // 当左指针小的值 < 右指针，则证明右指针的值是最大的，直接处理右指针
            // 左指针不处理，等待和下一位比较
            // 之后，右指针左移一位
            nums[right] = rightValue * rightValue;
            right--;
        }
    }
    
    // 因为是在原数组上存储，所以需要把左侧已处理好的负数去掉，这里使用slice进行截取最终结果
    return nums.slice(left);
};
```
