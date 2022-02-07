
# Q: 关于npm在环境中需求python2的情况
```
同时安装python2.7和3.10，python开发中使用3.10，环境中保证兼容使用2.7
操作是，在path中将2.7的环境前置在3.10的前面

```

# Q: 当前文件夹的python如何引入工程中上一级目录里的文件
```
深入一个python运行环境的问题。
python 执行后运行环境是系统环境加当前目录
那么这个问题就可以通过手动更改环境来解决

import os,sys
//具体要引入的环境目录
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
//这之后就可以引入了
import xxxx
```