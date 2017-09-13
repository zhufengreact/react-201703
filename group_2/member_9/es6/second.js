function Animal() {
    this.name = arguments[0];
    this.gender = arguments[1];
    this.age = arguments[2];
}

Animal.prototype.getInfo = function() {
    console.log('A ' + this.age + ' years old ' + this.gender + ' ' + this.name);
}

new Animal('cat', 'male', 'two').getInfo(); // A two years old male cat