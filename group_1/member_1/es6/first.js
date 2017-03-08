let obj = {
    name: "zhufeng",
    sayName: function(){
        return setTimeout(() => console.log(this.name), 1000);
    }
};

obj.sayName();