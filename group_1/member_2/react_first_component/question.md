## 1.第一个react组件

1. 创建一个名为`List`的组件，将下面的数据渲染为图中的样子

```
[
    {
        id: 1,
        content: 'zhufeng',
        bgColor: 'red'
    },
    {
        id: 2,
        content: 'react',
        bgColor: "blue"
    },
    {
        id: 3,
        content: 'component',
        bgColor: 'green'
    }
]
```

![图3-1](3-1.png)

## 2.提升你的组件

为列表中的每一项添加一个编辑按钮，点击后该项进入编辑模式，此时可编辑组件的文本和背景颜色，点击保存按钮后返回展示模式，如下图

![图3-2](3-2.png)

## 3.实现添加删除功能(选做)

在列表外添加一个新建按钮，点击新建一个列表项；在每个列表项后面添加一个删除按钮，点击删除该项，如下图

![图3-3](3-3.png)

## 4.将你的源代码放入“个人文件夹/react_first_component/myList.js即可”(注意是源代码，不是webpack编译后的代码)