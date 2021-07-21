# 无重复字符的最长子串

## 题意

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。  

- 示例 1:  

输入: s = "abcabcbb"  
输出: 3  

解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。  

- 示例 2:  

输入: s = "bbbbb"  
输出: 1  

解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。  

- 示例 3:  

输入: s = "pwwkew"  
输出: 3  

解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。  
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。  

- 示例 4:  

输入: s = ""  
输出: 0  
 
提示：  

```
0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
```

## 解法

通过调整滑动窗口，并记录滑动窗口的长度值，来得到结果。  
像吞吃蛇一样，这里对应的变量是stack。  
符合条件的数字，则吞入，身体变长。  
当遇到不符合条件的数字，则将身体内部相同数字的部分排出，再吞入。  

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1){
        return s.length;
    }
    var stack = [];
    var max = 0;
 
    for(var i = 0; i < s.length; i++){
        var code = s[i];
        if(!stack.includes(code)){
            stack.push(code);
        }else{
            stack = stack.slice(stack.indexOf(code)+1);
            stack.push(code);
        }
        max = Math.max(stack.length, max);
    }
    return max;
};
```

更优的写法  

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let stack = [];
    let result = 0;
    let index = 0;
    const len = s.length;
    while(index < len){
        const seekIndex = stack.indexOf(s[index]);
        if(seekIndex !== -1){
            stack = stack.slice(seekIndex+1);
        }
        
        stack.push(s[index]);
        result = Math.max(result, stack.length);
        index++;
    }
    return result;
};
```



