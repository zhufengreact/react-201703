/*
2.将下面的代码翻译为es5，只要求实现功能即可，不要求翻译质量

class Animal{
    constructor(...args){
        [this.name, this.gender, this.age] = args;
    }

    getInfo(){
        console.log(`A ${this.age} years old ${this.gender} ${this.name}`);
    }
}

new Animal('cat', 'male', 'two').getInfo(); // A two years old male cat
*/

//ES5
function Animal( name, gender, age ){
  this.name = name;
  this.gender = gender;
  this.age = age;
}

//Animal getInfo function
Animal.prototype.getInfo = function(){
    console.log("A " + this.age + " years old " + this.gender + " " + this.name);
}

var animal = new Animal('cat', 'male', 'two');
animal.getInfo();
