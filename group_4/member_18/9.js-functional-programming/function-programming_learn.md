###### 课时1 什么是函数式编程
```
  ## 1. 什么时函数式编程
        > 什么是函数式编程，就是把函数本身上长到一等公民的地位，进行编程构建

  ## 2. 什么是函数
        定义：一般的，在一个变化过程中，有两个变变量 x、y, 如果给定一个x值，相应的就确定唯一的一个y, 那么就称y是x的函数，其中x是自变量，y是因变量，x的取值范围叫做这个函数的定义域，相应y的取值范围叫做函数的值域。

        - 数学中的函数：函数就是从A到B的关系映射->`y = f(x)`
        - js中的函数：多条语句组成的程序块->`var y = function (x) {}`


  ## 3. 面向函数编程
        - 面向过程编程：以过程为中心的编程思想，想到什么写什么

        - 面向对象编程：从数据结构的角度出发
            01.具有相同特性(数据元素) 和 行为 (功能) 的对象的抽象就是类
            02.对象的抽象是类，类的实例是对象
            03.类实际上就是一种数据类型

        - 面向函数编程：从算法角度出发，也就是从行为的角度出发，体现的一些编程原则
            01.不要重复自己 (don't repeat yourself)
            02.高内聚低耦合 (loose counling high cohesion)
            03.最小间外原则 (Principles of least surprise)
            04.单一责任 (single responsibility)

```




###### 课时2 函数式编程的好处
```
    ## 1.为什么要学习函数式编程
         -为了更好的模块化
            00.模块化使得开发更快、维护更容易
            01.模块可以重用
            02.模块化便于单元测试和debug

         -掌握函数式编程有助于更好的理解和使用Rxjs、Redux等一些前端类库和框架

```

###### 课时3 函数是一等公民
```
    -函数式编程的基本理念是以函数为核心来组织代码，很自然的。它首先将函数的地位提高，视其为"第一等公民"(first class)。

    -所谓一等公民，是指函数和其它数据类型拥有平等的地位，比如：
        01.函数可以赋值给变量
        02.函数可以被作为实参传递
        03.函数可以被另一个函数返回
        04.函数可以作为形参

```
```javascript

    // 定义一个函数
        var a = function (x) {
            return x + 1;
        }


    // 赋值
        var res = a (1);


    // 实参传递
        var b = function (a) {
            return a(1) + 1;
        }


    // 返回另一个函数
        var c = function (a, cb) {
            return function (c) {
                cb();

                return c + 2;
            }
        }

        function cb () {

        }

```



###### 课时4 纯函数的作用
```
    >纯函数：一个没有任何副作用，并且返回值只由输入决定的函数


    ### 两个例子
        - slice & splice ：slice 是一个纯函数，splice是非函数
        -add

    > 副作用：如果一个函数，除了返回值之外，还会修改某些其它状态，或者与外部函数等有可观测的交互

```
```javascript

    ### 两个例子
        - slice & splice ：slice 是一个纯函数，splice是非函数
        -add     

    // 01 slice(start, end) 截取从0到2的位置，输入的值不变，返回的值也不变
        var arr = [1,2,3,4,5,6];
        //var getSlice = arr.slice(0, 2); // 截取从0到2的位置
        console.log(arr.slice(0, 2));          // 返回出来的结果: [1, 2]
        // 说明, 只要我们 arr.slice(0, 2)它返回的给我们始终都是1和2的值，不会改变

    // 02 调用数组的 splice(0, 2); 输入的值不变，返回的值会变
        //var arrSplice = arr.splice(0, 2);

        // 第一次返回的结果：
        console.log(arr.splice(0, 2))
        ·> 1 [1, 2]

        // 第二次返回的结果：
        console.log(arr.splice(0, 2))
        ·> 2 [3, 4]

        // 第三次返回的结果：
        console.log(arr.splice(0, 2))
        ·> 3 [5, 6]

        // 第四次返回的结果：
        console.log(arr.splice(0, 2))
        ·> 4 []


    // 03.定义一个变量
        var x = 5;
        function add (x) {
            return y + x;
        }
        // 运行
        console.log(add (1));

        // x 改变为 10
        x = 10;
        console.log(add ());
        ·> 11 返回出来的结果就是 11

    // 04. add 的非纯函数定义
        var x = 5;
        function add (y) {
            return y + x;
        }    
        // 如何定义一个纯函数
        function addPure(x){
            return function (y){
                return y + x;
            }
        }

        //每次去调用一次
        var a = addPure(5)(1);
        console.log(a) // 6


```
