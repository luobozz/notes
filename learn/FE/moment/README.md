1. moment可以不用format来转换时间内容使用set就好
```
//这里是一个工作单位中模拟上班时间到当前时间 30分钟一个时段的伪代码
    const minNum=moment().get("m")
    // const startTime=moment(today.format("YYYY-MM-DD 09:00")),endTime=moment(today.format(`YYYY-MM-DD HH:${minNum>=30?'00':'30'}`)) //这里是以前的思路
    const startTime=moment().set({
      h:9,
      m:0
    }),endTime=moment().set({
      m:minNum>=30?0:30
    })
    console.log(startTime,endTime)
    for (let i = startTime; i.diff(endTime, 'minute') <= 0; i = i.add(30, 'minute')) {
      console.log(i.format("YYYY-MM-DD HH:mm:ss"))
    }
```