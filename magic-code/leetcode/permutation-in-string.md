# 字符串排列

## 题意

给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。　　
换句话说，第一个字符串的排列之一是第二个字符串的 子串 。　　

- 示例 1：　　

输入: s1 = "ab" s2 = "eidbaooo"　　
输出: True　　

解释: s2 包含 s1 的排列之一 ("ba").　　

- 示例 2：　　

输入: s1= "ab" s2 = "eidboaoo"
输出: False　　

提示：　　
```
1 <= s1.length, s2.length <= 104
s1 和 s2 仅包含小写字母
```

## 解法

从s2左侧开始，用双指针截取一段数字，称为窗口，长度等于s1的长度。　　
当窗口内的字母计数信息和s1的字母计数信息相等时，则证明是子串。　　

```js
var checkInclusion = function(s1, s2) {
    const len = s1.length - 1;
    let left = 0;
    let right = left + len;
    const source = getSeek(s1, 0, len);
 
    while((left+len) < s2.length){
        // 优化：当前第一个字母没有命中，则可以直接跳过
        if(typeof source[s2.charAt(left)] == 'undefined'){
            left++;
            right = left + len;
            continue;
        }
        // 拿到窗口内的字母信息，然后与s1进行对比
        const seek = getSeek(s2, left, right);
        if(check(source, seek)){
            return true;
        }else{
            left++;
            right = left + len;
        }
    }
 
    return false;
 
    // 获取窗口内的字母信息
    function getSeek(str, left, right){
        const result = {};
        while(left <= right){
            const num = result[str.charAt(left)];
            result[str.charAt(left)] = typeof num !== 'undefined' ? (num + 1) : 1;
            left++;
        }
        return result;
    }
 
    // 检测窗口内的字母信息是否相同
    function check(source, seek){
        let left = 0;
        let right = len;
        while(left <= right){
            if(source[s1.charAt(left)] == seek[s1.charAt(left)]){
                left++;
            }else{
                return false;
            }
        }
        return true;
    }
};
```
