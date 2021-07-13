# 反转链表

## 题意

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。


示例:

输入: `1->2->3->4->5->NULL`
输出: `5->4->3->2->1->NULL`
 

限制：
0 <= 节点个数 <= 5000


## 解法

从head开始，逐个调转next指针的指向。
调转前，先要缓存好旧的next指向即可。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var pre = null;
    var now = head;
    while(now !== null){
        next = now.next;
        now.next = pre;
        pre = now;
        now = next;
    }
    return pre;
};
```
