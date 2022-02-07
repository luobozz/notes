# Q: bat静默运行，通过vbs去执行
```
Set shell = Wscript.createobject("wscript.shell")
a = shell.run ("d:\fuck.bat",0)
```
# Q: bat中文乱码
```
保存编码改成ANSI
```