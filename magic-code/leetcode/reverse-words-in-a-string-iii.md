# 反转字符串中的单词 III

## 题意

给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。


示例：  

输入："Let's take LeetCode contest"  
输出："s'teL ekat edoCteeL tsetnoc"  
 

提示：  

在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。  


## 解法

用双指针的方式，对单词进行逐个读取。  
接着，对每个单词从右到左进行读取，存入result中。  
这样，就可以得到每个单词的反向顺序。  

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let left = 0;
    let right = 0;
    let result = [];
 
    while(right <= s.length -1){
        // 找出单词左边界
        while(s[left] == ' '){
            result.push(' '); // 第一步，先装入空格
            left++;
        }
        // 找出单词右边界
        while(s[right] !== ' ' && right <= s.length){
            right++;
        }
        // 第二步，装入单词
        swap(result, s, left, right-1);
        left = right;
        right++;
    }
 
    return result.join('');
 
    function swap(result, arr, left, right){
        while(left <= right){
            result.push(arr[right]);
            right--;
        }
    }
};
```
