let obj = {
    name: 'zhufeng',
    sayName: function(){
        console.log(this.name)
    }
};

obj.sayName();