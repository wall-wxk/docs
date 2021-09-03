# 对称二叉树

## 题意

给定一个二叉树，检查它是否是镜像对称的。


例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```
    1
   / \
  2   2
   \   \
   3    3
```

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？


## 解法

### 一、递归

利用双指针，对左右子树同步进行深度遍历，并判断当前节点值是否相等。
相等，则为镜像节点。

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return seek(root, root);
 
    function seek(p, q){
        if(p == null && q == null){
            // 同为空节点
            return true;
        }
        if(p == null || q == null){
            // 有一个节点是空节点
            return false;
        }
 
        return p.val == q.val && seek(p.left, q.right) && seek(p.right, q.left);
    }
};
```

### 二、迭代

迭代与递归的不同，是递归的参数，用栈存储起来。  

所以修改成迭代的注意点：  
- 初始化栈的时候，推入双指针指向的根节点  
- 迭代的参数，按配对的方式，按顺序插入  

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const stack = [];

    stack.push(root);
    stack.push(root);
 
    while(stack.length > 0){
        if(seek(stack.pop(), stack.pop()) == false){
            return false;
        }
    }
    return true;
 
    function seek(p, q){
        if(p == null && q == null){
            return true;
        }
        if(p == null || q == null){
            return false;
        }
 
        if(p.val !== q.val){
            return false;
        }
 
        stack.push(p.left);
        stack.push(q.right);
 
        stack.push(p.right);
        stack.push(q.left);
 
    }
};
```
