# CSS实用技巧

## 隐式过渡

> 两个状态之间的过渡称为隐式过渡（implicit transitions）。其可以让属性变化成为一个持续一段时间的过程，而不是立即生效的。

使用**CSS transitions**，让属性的变化更加平滑。  
比如卡片的展开和收起，可以用**transitions**直接搞定，不需要额外的动画设置。  

举个例子：  
```css
.box {
    width: 100px;
    height: 0;
    transition:width 2s, height 2s;
}
.box:hover {
    width:200px;
    height:200px;
}
```
加深理解，请点击：[使用 CSS transitions](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)