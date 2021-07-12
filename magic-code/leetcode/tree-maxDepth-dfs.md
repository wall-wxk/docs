
# 二叉树的最大深度

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7

```
返回它的最大深度 3 。

## 解法

深度遍历，取左右子树最深的为结果。

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
var maxDepth = function(root) {
    if(root == null){
        return 0;
    }
 
    return  Math.max(getDeep(root.left), getDeep(root.right)) + 1;
 
    function getDeep(node){
        if(node == null){
            return 0;
        }
        let leftDepth = 1;
        let rightDepth = 1;
        
        if(node.left !== null){
            leftDepth = getDeep(node.left) + 1;
        }
        if(node.right !== null){
            rightDepth = getDeep(node.right) + 1;
        }
        return Math.max(leftDepth, rightDepth);
    } 
};
```

## 优化版

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
var maxDepth = function(root) {
    if(root == null){
        return 0;
    }
 
    return  Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

