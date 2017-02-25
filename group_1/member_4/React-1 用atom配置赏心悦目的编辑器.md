###### 0. 设置atom 左则的导航样式背景颜色及字体大小
```javascript
    // 打开方法如下：
     /*File->Settings->Open Config Folder->style.less->.tree-view{font-size:15px;}*/
```

###### 1. Ctrl+Shift+D         整行快速复制 代码块
###### 2. Ctrl+D               快速创建中括号 {}  
###### 3. Ctrl+Shift+H         编辑器实时预览 HTML 页面   插件名:atom-html-preview

###### 4. 页面中间线去掉方法   修改 Preferred Line Length   修改值为：0
###### 5  Ctrl+\               隐藏目录
###### 6  Alt+\                显示目录
###### 6  Ctrl+/               单行注释

###### 7  include 导入文件路径 atom-include-path package
###### 8 Atom编辑器配置        http://imweb.io/topic/56c12f7e5c49f9d377ed8f1e



###### --常用的插件--
```
    emmet:                  提高开发效率
    atom-ternjs:            JS代码智能提示补全
    Seti UI:                文件图标
    file-icons:             文件图标 推荐
    linter-jscs:            jscs验证插件
    linter-jscs             的配置
    atom-include-path       获取路径
    minimap                 右侧地图预览
    Docblockr               多行注释
    tool-bar                设置全屏视图切换
    tool-bar-main           设置视图内容区
    platformio-ide-terminal 命令行编辑窗口切换

    atom-beautify           js/java...插件自动格式化出来的格式

```

###### 一、GITHUB的操作
```typescript

    笔记本：https://maxiang.io/

   // 01. 如何找一些开源的框架
   /*
    jQuery
   */
```

###### 二、babel的安装
```
    // 安装
    $npm babel-cli -g                   // 全局安装
    $babel test.js --out-file output.js // 编译

    //对事件目录进行编译
    $mkdir src                          //  创建一个文件夹
    $mv test.js src                     //  把test.js文件移劝src文件夹指定的目录
    $rm -rf output.js                   //  删除output.js的文件
    $babel src --out-dir dist           //  把src的文件编译到 dist的文件夹下面
    $babel src --out-dir dist -w        //  在后面加上一个 -w是很用的，达到实时监听
```
