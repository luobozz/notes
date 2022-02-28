# Q: **SPRING的依赖注入相关内容都是什么**

>A: 以下几个方面先标注
  1. [为什么IDEA不推荐你使用@Autowired ？](https://segmentfault.com/a/1190000040914633)
     - 三大注入构造方式

# Q: **为什么普通类可以实现webMVCconfigure接口，却不用实现其所有方法呢**

>A: default 关键字
```
default methods enable you to add new functionality to the interfaces of your libraries and ensure binary compatibility with code written for older versions of those interfaces.

 意思是默认方法能够向库的接口添加新功能，并确保与为这些接口的旧版本编写的代码兼容。并且不用在其子类进行逐个实现。Enumeration有94个子类，如果逐个实现真是痛苦
```

# Q: **一个接口有多个实现的时候调用哪个**
```markdown
- 在Spring中,可以通过
  1. 在实现类上标明优先级
  2. 在注入/声明位置通过
     1.  @Autowired 和 @Qualifier 指明实现类
     2.  @Resource 指明实现类
- 不在spring内的方式暂时没有找到方法
``` 
[https://blog.csdn.net/zhanduo0118/article/details/120116160](https://blog.csdn.net/zhanduo0118/article/details/120116160)

# Q: springboot某些字段前端不反悔
```
@JsonIgnore
使用fastjson解析替换成
@JSONField(serialize = false)

适用于字段和公有get方法，具体可以深入到fastjson和jackson序列化原理
```