function Animal() {
    "use strict";

    var ags = [].slice.call(arguments);

    this.name = ags[0] || 'cat';
    this.gender = ags[1] || 'male';
    this.age = ags[2] || 'one';
}

Animal.prototype.getInfo = function() {
    console.log('A '+ this.age + ' years old '+ this.gender +' '+ this.name)
}

new Animal('cat', 'male', 'two').getInfo();
