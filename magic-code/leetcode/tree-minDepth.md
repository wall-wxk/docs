# 二叉树的最小深度

## 题意

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。


示例 1：

```
    3
   / \
  9  20
    /  \
   15   7

```

输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 

提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000

## 解法

对二叉树进行层序遍历，一层一层遍历，当遇到第一个叶子节点时，就是最小深度。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    const stack = [];
    if(root == null){
        return 0;
    }
    stack.push(root);
    let flag = true; // 标识是否要继续查找
    let deepNum = 0;
 
    while(stack.length > 0 && flag){
        let size = stack.length;
 
        while(size > 0 && flag){
            const current = stack.shift();
 
            if(current.left == null && current.right == null){
                // 找到叶子节点
                flag = false;
                break;
            }else{
                current.left !== null && stack.push(current.left);
                current.right !== null && stack.push(current.right);
            }
 
            size--;
        }
 
        deepNum++;
    }
 
    return deepNum;
};
```
