// TODO: ES6 编译---------------------------------------------------------
class Animal{
    constructor(...arge){
        [
            this.name,
            this.gender,
            this.age
         ]
    }

    getInfo(){
        console.log( `A ${this.age} years old ${this.gender} ${this.name}`);
    }
}

let getAnimalInfo = new Animal("cat", "male", "two");
getAnimalInfo.getInfo();




// TODO: ES5编译后---------------------------------------------------------
function Animal(name, gender, age){
    this.name = name;
    this.gender = gender,
    this.age = age;
}

Animal.prototype = {
    constructor: Animal,
    getInfo:function(){
        console.log("A"+ this.age +" years old " + this.gender + this.name);
    }
}
let getAnimalInfo = new Animal("cat", "male", "two");
getAnimalInfo.getInfo();
