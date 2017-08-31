function Animal(name,gender,age){
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Animal.prototype.getInfo = function(){
  console.log("A " + this.age + " years old " + this.gender + " "+this.name);
}

var cat = new Animal('cat','male','two');
cat.getInfo();
