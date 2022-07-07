# 利用js设定css变量
> 可以适用到类似高宽判断等地方或者鼠标位置判断等地方，用处很大
```javascript
img.addEventListener('mousemove', (ev) => {
    img.style.setProperty('--x', ev.offsetX / ev.target.offsetWidth);
    img.style.setProperty('--y', ev.offsetY / ev.target.offsetHeight);
})
```

# Q: css画外圆角
```
这里重点在于用伪元素实现外圆角之后，然后用伪元素的阴影填充了跟当前选中一样的背景色
再某些项目中如果选中颜色跟背景色不一致那么会有阴影填选中色超出伪元素的问题，这里尝试使用子元素的方式

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .menu-list {
            padding-left: 1em;
            width: 200px;
            color: #FFF;
            background-color: #369;
        }

        .menu-list .menu {
            position: relative;
            line-height: 2em;
            text-align: center;
        }

        .menu-list .menu.active {
            color: #369;
            border-top-left-radius: 1em;
            border-bottom-left-radius: 1em;
            background-color: #FFF;
        }

        .menu-list .menu.active:before {
            content: '';
            position: absolute;
            height: 1em;
            width: 1em;
            right: 0;
            top: -1em;
            border-bottom-right-radius: 1em;
            box-shadow: 1em 1em 0 1em #FFF;
        }

        .menu-list .menu.active:after {
            content: '\\200B';
            position: absolute;
            height: 1em;
            width: 1em;
            right: 0;
            bottom: -1em;
            border-top-right-radius: 1em;
            box-shadow: 1em -1em 0 1em #FFF;
        }
    </style>
</head>

<body>
    <div class="menu-list">
        <div class="menu">应用</div>
        <div class="menu">订单</div>
        <div class="menu">设置</div>
        <div class="menu active">官网</div>
        <div class="menu">关于我们</div>
    </div>
</body>

</html>
```