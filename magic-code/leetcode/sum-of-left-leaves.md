# 左叶子之和

## 题意

计算给定二叉树的所有左叶子之和。

示例：

```
    3
   / \
  9  20
    /  \
   15   7
```

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 

通过次数87,755提交次数152,018


## 解法

第一步：需要对树的节点进行遍历，这里采用层序遍历的模板进行遍历。
第二步：对需要遍历的节点用 isLeft 进行标记是否为左叶子
第三步：判断是叶子节点，而且是左叶子的，进行求和

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
var sumOfLeftLeaves = function(root) {
    if(root == null){
        return 0;
    }
 
    let sum = 0;
    const stack = [];
    stack.push({
        isLeft: false,
        node: root
    });
 
    while(stack.length > 0){
        let size = stack.length;
 
        while(size > 0){
            const current = stack.shift();
            const currentNode = current.node;
            if(currentNode.left == null && currentNode.right == null && current.isLeft){
                sum += currentNode.val;
            }else{
                currentNode.left !== null && stack.push({
                    isLeft: true,
                    node: currentNode.left,
                });
                currentNode.right !== null && stack.push({
                    isLeft: false,
                    node: currentNode.right
                });
            }
            size--;
        }
    }
    return sum;
};
```
