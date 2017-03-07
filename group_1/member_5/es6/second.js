// class Animal{
//     constructor(...args){
//         [this.name, this.gender, this.age] = args;
//     }
//
//     getInfo(){
//         console.log(`A ${this.age} years old ${this.gender} ${this.name}`);
//     }
// }
//
// new Animal('cat', 'male', 'two').getInfo(); // A two years old male cat

function Animal() {
  var args = arguments;
  this.name = args[0] || 'sth';
  this.gender = args[1] || 'male';
  this.age = args[2] || '1';
}

Animal.prototype = {
  getInfo: function(){
    console.log('A ' + this.age + ' years old ' + this.gender + ' ' + this.name);
  }
}
new Animal('cat', 'male', 'two').getInfo();
