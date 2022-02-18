# 变量提升
```
解析器会先解析代码，然后把声明的变量的声明提升到最前，这就叫做变量提升。
不会输出 web

var web = 'houdunren';
console.log(web);
let while = 'hdcms'; //Uncaught SyntaxError: Unexpected token 'while'
```