# 利用js设定css变量
> 可以适用到类似高宽判断等地方或者鼠标位置判断等地方，用处很大
```javascript
img.addEventListener('mousemove', (ev) => {
    img.style.setProperty('--x', ev.offsetX / ev.target.offsetWidth);
    img.style.setProperty('--y', ev.offsetY / ev.target.offsetHeight);
})
```