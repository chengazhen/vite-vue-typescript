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
