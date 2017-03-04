let a = 1;
const b = "hello es6";

var fn = p => p;


let fn1 = () => "无参数输入的箭头函数";


let fn3 = (a, b) => a + b;
console.log(fn3(1, 4));




var fn4 = (a, b) => {
    var m = a + 2;

    // 显示 return
    return m * b;
}


console.log(fn4(2, 5)); // 20



// 使用 ES5 的写法
var obj = {
    name:"Alan",
    courset:["react", "nodejs", "mongodb"],
    getMessage:function(){
        this.courset.forEach(function(item){
            console.log(this);
            console.log(this.name + "tech us" + item);
        }.bind(this));
    }
}

obj.getMessage();



// 使用ES6箭头函数解决
var obj = {
    name:"Alan",
    courset:["react", "nodejs", "mongodb"],
    getMessage:function(){
        this.courset.forEach((item) => {
            console.log(this.name + "tech us => " + item);
        });
    }
}

obj.getMessage();

// ######课时5：5. 类

    // 定义一个类

    // ES5 的写法
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }

        // 共用的方法
        Animal.prototype = {
            getMessage: function(){
                console.log(this.name + " is " + this.asge + " years old");
            }

        };
        // 实例化
        var cat = new Animal("cat", "1");
        cat.getMessage();
        // 打印出的结果 cat is undefined years old


    // ES6 的写法
        class Animal {
            constructor(name, age){
                this.name = name;
                this.age = age;
            }
            // 共用的方法
            getMessage(){
                console.log(this.name + " is " + this.age + " years old");
            }

            // 定义一个静态的
            static showInfo(){
                console.log("show info ~~~ !");
            }
        }



        // 实例化
        let cat = new Animal("cat", "1");
        cat.getMessage();
        // 打印出的结果 cat is 1 years old

        // 访问它的类
        console.log(cat.__proto__);

        // 通过以下方式来访问
        Animal.showInfo();*/



        // 继承一个类 为Animal
            /*
                这样就继承了 Animal 的一些东西
             */
        class Cat extends Animal {
            // 定义一个自己的构造函数
            constructor(name, age, color){
                // 使用 super 继承 Animal 的方法
                super(name, age);

                // 再定义一个自己的 color
                this.color = color;
            }

            // 再写一个自己的公用的方法
            getName(){
                console.log(this.name + ", color is " + this.color);
            }
        }

        var newCat = new Cat("猫", "5", "red");
        newCat.getName();  // 猫, color is red



// TODO ######课时6：6. 对象和继承 06:49

    // 设置一个原型
    var others = {data:"other data"}

    var obj = {
        __proto__: others,
        name:"Alan",
        // ES5
        getName:function(){
            console.log(this.name);
        }

        // ES6的写法
        getName(){
            console.log(this.name);
        }
    }

    //obj.getName();

    //console.log(obj.data); // other data

    // 简化之后
    var a = 1;
    var b = "2";
    var fn = (m, n) => console.log(m + n);

    var objAnother = {a, b ,fn}

    console.log(objAnother.fn(1, 4));


// TODO ######课时7：7. 模板字符串 08:21

    // ES5的字符串模板
        var name = "cat";
        var age = "1";
        var str = name + " is " + age + " years old.";

    // ES6的字符串模板
        var temStr = `${name} is ${age} years old.`;

        console.log(str);   // cat is 1 years old.
        console.log(temStr);// cat is 1 years old.


    // ES5 拼接一个HTML片段
        var htmlStr = '<div>' + name + '</div>'+
                      '<h1>' + age +'</h1>';
        console.log(htmlStr);

    // ES6 拼接一个HTML片段
        var htmlTemStr = `<div>
                            <div>${name}</div>
                            <h1>${age}</h1>
                        </div>`;
        console.log(htmlTemStr);
