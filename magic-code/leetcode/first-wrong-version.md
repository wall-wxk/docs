# 第一个错误的版本

## 题意

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。  

假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。  

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。  

 
示例 1：

输入：n = 5, bad = 4  
输出：4  
解释：  
调用 isBadVersion(3) -> false   
调用 isBadVersion(5) -> true   
调用 isBadVersion(4) -> true  
所以，4 是第一个错误的版本。    

示例 2：

输入：n = 1, bad = 1  
输出：1  
 

提示：  

1 <= bad <= n <= 231 - 1


## 解法

版本号[1，2，3，4，… 10, 11]组成一个区间段，用左右指针指向要查找范围的两端。  
用二分法对查找范围进行缩小。  
如果中间值nums[middle]是错误版本，则第一个错误版本包含在[left ～ middle]中。  
如果中间值nums[middle]是正确版本，则第一个错误版本包含在[middle+1 ~ right]中。  
这样不断缩小范围查找，当left == right时，就找到第一个错误版本了。  

```js
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
 
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0;
        let right = n;
 
        while(left < right){
            const middle = Math.floor( (left + right) / 2 );
            if(isBadVersion(middle)){
                right = middle;
            }else{
                left = middle + 1;
            }
        }
 
        return left;
    };
};
```
