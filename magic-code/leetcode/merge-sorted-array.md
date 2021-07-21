# 合并两个有序数组

## 题意

给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。  

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。  


- 示例 1：  

```
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
```

- 示例 2：

```
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
```
 

提示：  
```
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
```


## 解法

使用双指针，分别指向需要处理的数组nums1和nums2。通过遍历比较当前指针指向的数字大小。  
当需要替换nums1中的值时，需要将旧的值mValue，暂存到stack中。  
下一次比较的时候，则需要3个值 mValue, nValue和tmpValue进行比较，选取最小值插入当前节点。  

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let mIndex = 0;
    let nIndex = 0;
    const stack = []; // 缓存nums1暂时弹出的数
 
    // 特殊情况，不用处理
    if(n == 0){
        return;
    }
 
    while(mIndex < m || nIndex < n){
        const mValue = mIndex < m ? nums1[mIndex] : 201; // 题意规定m,n < 200，所以这里的默认值设置为201
        const nValue = nIndex < n ? nums2[nIndex] : 201;
        const tmpValue = typeof stack[0] !== 'undefined' ? stack[0] : 201;
        
        if(tmpValue !== 201 && tmpValue < mValue && tmpValue < nValue){
            // 暂存数组有值，则优先比较暂存数组的值，如果tmpValue最小，则优先插入tmpValue
            nums1[mIndex] = tmpValue;
            if(mIndex < m){
                stack.push(mValue);
            }
            stack.shift();
            mIndex++;
        }else if(mValue <= nValue){
            // 如果mValue最小，则不需要插入
            mIndex++;
        }else{
            // nValue最小的情况
            if(mIndex < m){
                // 如果nums1还没有遍历完，则需要暂存mValue
                stack.push(mValue);
            }
            nums1[mIndex] = nValue;
            mIndex++;
            nIndex++;
        }
    }
 
    // 遍历结束后，需要检查stack中是否还有值，有的话，则遍历填写到nums1
    while(stack.length > 0){
        nums1[mIndex++] = stack.shift();
    }
};
```
