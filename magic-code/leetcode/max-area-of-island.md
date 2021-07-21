# 岛屿的最大面积

## 题意

给定一个包含了一些 0 和 1 的非空二维数组 grid 。  

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。  

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)  

 

- 示例 1:

```
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
```
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。  

- 示例 2:

```
[[0,0,0,0,0,0,0,0]]
```

对于上面这个给定的矩阵, 返回 0。  


注意: 给定的矩阵grid 的长度和宽度都不超过 50。  

## 解法

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const rowNum = grid.length;
    const colNum = grid[0].length;
    let result = 0;// 存储结果
 
    // 遍历每一个点
    for(let row = 0; row < rowNum; row++){
        for(let col = 0; col < colNum; col++){
            const sum = seek(row, col);
            result = Math.max(result, sum);
        }
    }
 
    return result;
 
    function seek(row, col){
        if(!isLand(row, col) || grid[row][col] !== 1){
            return 0;
        }
        let sum = 1;
        grid[row][col] = 2; // 将当前陆地标记为已遍历
        // 用于岛屿遍历记数
        sum += seek(row - 1, col);
        sum += seek(row + 1, col);
        sum += seek(row, col - 1);
        sum += seek(row, col + 1);
 
        return sum;
    }
 
    // 判断是否为陆地
    function isLand(x, y){
        return x >= 0 && x < rowNum && y >= 0 && y < colNum;
    }
};
```
