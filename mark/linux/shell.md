# 获取字符串长度&获取数组长度
```markdown
<!-- 获取字符串长度 -->
${str}|wc -L //可以字节长度，中文*2
${#str} //获取字符长度
<!-- 获取数组长度 -->
${#arry[*]}
<!-- 所以往数组内push参数就是 arr[arr_length]=x -->
arr[${#arry[*]}]=1
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
<!-- index循环 -->
for((i=0;i<${#array[*]};i++)); do
    echo ${array[$i]}
done
```

# shell里的return 
```
0真 1假
```

# shell里read中识别回车符
```
[read简介](https://www.cnblogs.com/xl-892694298/p/11017168.html)
1. -n限制字符 -N严格模式中回车符和空格能被识别出来
2. 回车符$'\x0a'
```

# [[]]和[]的主要区别
```
[ ] 实际上是bash 中 test 命令的简写。即所有的 [ expr ] 等于 test expr

对 test 命令来说， 用 -eq 要进行数字比较，而你此时传入字符串，就报错了。

[[ expr ]] 是bash中真正的条件判断语句，其语法更符合编程习惯 （比如 &&, || 的用法），虽然我认为在 [[ ]] 中 故意传字符串给 -eq 也应该像 test 一样报错，但是显然bash实现中直接把非整数的字符串直接转换成了 0 （你可以自行验证，在 [[ ]] 中的，任何需要整数，但是提供的确又是其他不能转换成整数的字符串，都变成了0）。 这应该是bash实现中的没有对 [[ ]] 中 -eq 操作符两边的内容进行检查导致的。 对于我们来说，没必要钻这些东西，我们应该保证自己代码中的需要用到整数的时候，总是提供整数。
```

# /dev/null与/dev/tty
```
/dev/null
位桶(bit bucket)或空设备，传送到此文件的数据都会被系统丢掉，也就是说，当程序将数据写到此文件时，会认为它已经成功完成写入数据的操作，但实际上什么事都没做。
cat > /dev/null 
读取/dev/null则会立即返回文件结束符号(end-of-file)


/dev/tty
当程序打开此文件时，unix会自动将它重定向到一个终端(一个实体的控制台console或窜行端口serial Port，也可能是一个通过网络与窗口登陆的伪终端pseudoterminal)再与程序结合。
这在程序必须读取人工输入时，例如密码特别有用。
printf "Enter new password: "
stty -echo      关闭自动打印输入字符的功能
read pass < /dev/tty      读取密码 
printf "Enter again: "
read pass2 < /dev/tty
stty echo        打开自动打印输入字符的功能


stty(set tty)命令用来控制终端或窗口的各种设置。
```

# shell字符串包含
```
    if [[ "${version}" == *"${VERSION}"* ]]; then
        load_success "${script}(${version})"
    else
```

# shell跨文件调用案例
```
source ${PWD}/func.sh
[https://blog.csdn.net/u010743406/article/details/108329745](https://blog.csdn.net/u010743406/article/details/108329745)
```

# 数组中包含
```
1. echo "${array[@]}" | grep -wq "$var" &&  echo "Yes" || echo "No"
2. [[ ${array[@]/${var}/} != ${array[@]} ]] && echo "Yes" || echo "No"

[https://www.cnblogs.com/thatsit/p/bash-shu-zupan-duan-mou-ge-yuan-su-shi-fou-zai-shu.html](https://www.cnblogs.com/thatsit/p/bash-shu-zupan-duan-mou-ge-yuan-su-shi-fou-zai-shu.html)
```