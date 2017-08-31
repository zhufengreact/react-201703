let obj = {
    name:"zhufeng",
    sayName:function(){
        setTimeout(function(){
            console.log(this.name);
        }, 1000);
    }
}
obj.sayName();
