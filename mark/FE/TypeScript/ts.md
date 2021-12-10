# 原始数据类型
1. 布尔值
2. 数值
3. 字符串
4. null 所有基础类型的子类型
5. undefined 所有基础类型的子类型
6. Symbol es6 保证属性名不重名 
7. BigInt es10
8. (*)any

# 类型推论
- 定义的时候没有赋值的情况，则推论为any
- 当定义时有赋值的情况，则推论为相应推论类型
```javascript
<!-- 所以1报错2不报错 -->
<!-- 1 -->
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

<!-- 2 -->
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```


