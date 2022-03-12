# 生成不重复随机数组

## 题意

给定一个数组，及一个长度 n，生成长度为 n 的不重复随机数组，n 不大于数组中不重复元素个数

## 解法

采用投票算法，对数组进行逐个取数。  
将取到的数，与当前数组的末尾进行交换。  
然后，将有效数组的长度减少一位。  
按此模式，进行循环，直到取到足够的数。

```js
function randomArr(arr, n) {
  let max = arr.length;
  const result = [];

  while (result.length < n) {
    const randomNum = Math.floor(Math.random() * max); // 取[0 , max-1]之间的数
    result.push(arr[randomNum]);
    [arr[randomNum], arr[max - 1]] = [arr[max - 1], arr[randomNum]];
    max--;
  }

  return result;
}
```
