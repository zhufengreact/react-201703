let obj = {
    name: 'Wang Yujing',
    sayName: function() {
        console.log(this.name);
    }
};
obj.sayName();