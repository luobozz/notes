# 获取字符串长度&获取数组长度
```markdown
<!-- 获取字符串长度 -->
${str}|wc -L //可以字节长度，中文*2
${#str} //获取字符长度
<!-- 获取数组长度 -->
${#arry[*]}
```

# sleep
```
<!-- 1秒 -->
sleep 1
<!-- 1毫秒 -->
sleep 0.1
```

# 循环数组
```
for arr in ${array[@]}; do
    echo arr
done
```

# shell里的return 
```
0真 1假
```