# 反转字符串

## 题意

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。


示例 1：

输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

示例 2：

输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]


## 解法

### 一、不完美的解法

利用bind方法，实现参数的缓存，并在原数组基础上，进行插入节点操作。
同时，删除已经读取的原节点。
这个解法，虽然计算结果是正确的，但是，性能不高。
数组过大时，超出了时间限制。
而且，无法做到空间复杂度O(1)，需要额外的一个节点。

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let fn = reverse.bind(null, s);
    let len = s.length;
 
    while(len > 0){
        fn = fn(s[0], len);
        len--;
    }
 
    return fn();
 
    function reverse(result, char, index){
        if(typeof char !== 'undefined'){
            result.splice(index, 0, char); // 尾部逐步插入
            result.shift();
            return reverse.bind(null, result);
        }else{
            return result;
        }
    }
};
```

### 二、双指针解法

left、right 指针分别指向数组的头部和尾部，读取字符进行交换，即可做到反转。
需要注意退出的条件是`left < right`，而不能是 `left !== right`。
因为数组如果是偶数个，则`left !== right`被跳过了。

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    let tmp;
 
    while(left < right){
        tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left++;
        right--;
    }
 
    return s;
};
```

