# 岛屿数量

## 题意

给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。  

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。  

此外，你可以假设该网格的四条边均被水包围。  

- 示例 1：  

输入：  
```
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
```
输出：1  


- 示例 2：  

输入：  
```
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
```
输出：3  
 
提示：  
```
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'
```

## 解法

可以理解为是 四叉树 的深度遍历  
1、判断当前节点是否存在网格中  
2、对四叉树的子节点进行深度遍历  
3、对遍历过的节点进行标记  
4、对所有岛屿节点进行检查  

```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var result = 0;
 
    for(var i = 0; i < grid.length; i++){
        var row = grid[i];
 
        for(j = 0; j < row.length; j++){
            var node = row[j];
 
            if(node == '1'){
                result += 1;
                search(grid, i, j);
            }
        }
    }
 
    // 深度遍历当前岛屿所有的节点
    function search(grid, r, c){
        if(!isLand(grid, r, c)){
            return;
        }
        if(grid[r][c] !== '1'){
            return;
        }
        
        grid[r][c] = '2'; // 遍历过后，标记为2，避免重复
        search(grid, r-1, c); // 上
        search(grid, r, c+1); // 右
        search(grid, r+1, c); // 下
        search(grid, r, c-1); // 左
    }
    // 判断当前位置，是否在网格中
    function isLand(grid, r, c){
        return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
    }
 
    return result;
};
```
