# 有效的括号

## 题意

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。　　

有效字符串需满足：　　

左括号必须用相同类型的右括号闭合。　　
左括号必须以正确的顺序闭合。　　

- 示例 1：

输入：s = "()"  
输出：true  

- 示例 2：

输入：s = "()[]{}"  
输出：true  

- 示例 3：

输入：s = "(]"  
输出：false  

- 示例 4：

输入：s = "([)]"  
输出：false  

- 示例 5：

输入：s = "{[]}"  
输出：true  


提示：  
```
1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
```

## 解法

使用栈进行信息存储，当字符符合要求，就进行合并抵消。
跟俄罗斯方块的效果差不多。

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map();
    const stack = [];
 
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
 
    let i = 0;
    while(i < s.length){
        const current = s[i++];
        if(stack.length < 1){
          stack.push(current);
        }else{
            if(map.get(stack[stack.length - 1]) === current){
                stack.pop();
            }else if(isEndChar(current)){
                return false;
            }else{
                stack.push(current);
            }
        }
    }
    return stack.length == 0;
 
    function isEndChar(c){
        return ['}', ')', ']'].includes(c);
    }
};
```

