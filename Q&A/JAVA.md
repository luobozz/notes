# Q: **SPRING的依赖注入相关内容都是什么**

>A: 以下几个方面先标注
  1. [为什么IDEA不推荐你使用@Autowired ？](https://segmentfault.com/a/1190000040914633)
     - 三大注入构造方式
# Q: **为什么普通类可以实现webMVCconfigure接口，却不用实现其所有方法呢**

>A: default
```
default methods enable you to add new functionality to the interfaces of your libraries and ensure binary compatibility with code written for older versions of those interfaces.

 意思是默认方法能够向库的接口添加新功能，并确保与为这些接口的旧版本编写的代码兼容。并且不用在其子类进行逐个实现。Enumeration有94个子类，如果逐个实现真是痛苦
————————————————
版权声明：本文为CSDN博主「阿云_」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xcy1193068639/article/details/80249380
```