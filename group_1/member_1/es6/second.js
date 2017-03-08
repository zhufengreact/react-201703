function Animal(name,gender,age){
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Animal.prototype.getInfo = function () {
    console.log("A " + this.age + " years old " + this.gender + " " + this.name);
};


new Animal('cat', 'male', 'two').getInfo();