# 项目中遇到的问题

## 2022/3/2

当扩展路由 route 的 meta 属性时, typescript 无法推导出来属性的类型, 这里会报错 unkonw 无法赋值给 string 类型

```js
const name = ref < string > ''

route.meta.name = name.value

{
  meta: {
    name: 'sdfsdf'
  }
}
```

在这里 router 里面的类型声明, 意思就是 meta 是一个索引是 string, number, symbol 的对象, 每一个属性的值都是 unknown

```js
  meta?: RouteMeta;

  export declare interface RouteMeta extends Record<string | number | symbol, unknown> {
}
```

解决:

可以通过扩展 RouteMeta 接口来输入 meta 字段：

```js
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean
    // 每个路由都必须声明
    requiresAuth: boolean
  }
}
```

本质就是通过扩展 module vue-router, 达到扩展 RouteMeta 的目的
[module 扩展](https://blog.csdn.net/cukw6666/article/details/107983336)
[vue-router 文档](https://router.vuejs.org/zh/guide/advanced/meta.html)

## 2022/3/3

1. 使用 defineProps 设置默认值

```js
// 定义props 类型
interface propsType {
    pageSize?: number,
    total?: number,
    currentPage?: number,
}
// 设置默认值
const props = withDefaults(defineProps<propsType>(), {
    pageSize: 20,
    total: 40,
    currentPage: 1
})
```

2. 关于 vue ref 里面出现 `never` 类型

如果不加断言会提示 `number` 类型赋值给 `never` 类型

```js
const option = ref({
    title: {
        text: "Traffic Sources",
        left: "center"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
    },
    series: [
        {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [] as { name: string, value: number }[],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
});


option.value.series[0]['data'] = [{ value: 335, name: "Direct" },
{ value: 310, name: "Email" },
{ value: 234, name: "Ad Networks" },
{ value: 135, name: "Video Ads" },
{ value: 1548, name: "Search Engines" }]

```

3. 关于 typeof , 作用就是把变量或者对象的类型取出来

```js
const ojb = {
    name: 'sfdsdf',
    friend: ['sdfdsf']
}

type o = typeof ojb // 这里面 o 相当于 下面的c

type c = {
    name: string
    friend: string[]
}
```
