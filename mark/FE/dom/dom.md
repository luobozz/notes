[dom官方文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/)


# 无线滚动的非传统解决方案
> 来自文章 [https://segmentfault.com/a/1190000040942225](https://segmentfault.com/a/1190000040942225)
> 以前我在传统的滚动触底(例如无线滚动加载和图片懒加载)的方案中通常需要通过判断元素高度和滚动高度来判断是否触底
> 这样在scroll事件密集发生的情况下有性能问题
```javascript
var intersectionObserver = new IntersectionObserver(function (entries) {
  // 如果不可见，就返回
  if (entries[0].intersectionRatio <= 0) return
  loadItems(10)
  console.log('Loaded new items')
})

// 开始观察
intersectionObserver.observe(document.querySelector('.scrollerFooter'))
```

# getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置
> 获取 dom 元素相对于网页左上角定位的距离
```javascript
var positionX = this.getBoundingClientRect().left + document.documentElement.scrollLeft
var positionY = this.getBoundingClientRect().top + document.documentElement.scrollTop

```
> 判断元素是否在可视区域内
```javascript
function isElView(el) {
  var top = el.getBoundingClientRect().top // 元素顶端到可见区域顶端的距离
  var bottom = el.getBoundingClientRect().bottom // 元素底部端到可见区域顶端的距离
  var se = document.documentElement.clientHeight // 浏览器可见区域高度。
  if (top < se && bottom > 0) {
    return true
  } else if (top >= se || bottom <= 0) {
    // 不可见
  }
  return false
}
```