# 图像渲染

## 题意

有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。 

给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。  

为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。  

最后返回经过上色渲染后的图像。  

示例 1:  

输入:   
image = `[[1,1,1],[1,1,0],[1,0,1]]`  
sr = 1, sc = 1, newColor = 2  

输出: `[[2,2,2],[2,2,0],[2,0,1]]`  

解析: 
在图像的正中间，(坐标(sr,sc)=(1,1)),  
在路径上所有符合条件的像素点的颜色都被更改成2。  
注意，右下角的像素没有更改为2，  
因为它不是在上下左右四个方向上与初始点相连的像素点。  

注意:  
image 和 image[0] 的长度在范围 [1, 50] 内。  
给出的初始点将满足 0 <= sr < image.length 和 0 <= sc < image[0].length。  
image[i][j] 和 newColor 表示的颜色值在范围 [0, 65535]内。  


## 解法

做这个题的关键点有两个：  
1、要有isValid方法判断当前节点是否合法，因为深度遍历的过程中有越界的可能  
2、要记录已访问的节点，避免多次访问相同的节点  

从给出的`[sr, sc]`向左右上下四个方向进行深度遍历，即可。

```js
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const rowNum = image.length;
    const colNum = image[0].length;
    const isSeek = {}; // 记录已经访问的节点
 
    const startVal = image[sr][sc]; // 开始的节点
 
    seek(sr, sc);// 开始深度遍历
 
    return image;
 
    function seek(row, col){
        if(!isValid(rowNum, colNum, row, col)){
            // 碰到非法节点则返回
            return;
        }
        const val = image[row][col];
        if(val !== startVal || isSeek[`${row}-${col}`] == 1){
            return;
        }
        // 符合条件，则向节点的四个方向进行搜索
        image[row][col] = newColor;
        isSeek[`${row}-${col}`] = 1;// 记录已访问的节点
        seek(row - 1, col);
        seek(row + 1, col);
        seek(row, col - 1);
        seek(row, col + 1);
    }
 
    // 判断当前像素点是否是合法的
    function isValid(rowNum, colNum, x, y){
        return x >= 0 && x < rowNum && y >= 0 && y < colNum;
    }
};
```
