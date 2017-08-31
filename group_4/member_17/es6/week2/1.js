let obj = {
    name: 'zhufeng',
    sayName: function(){
       let time1 = setInterval(() => {
        console.log(this.name)

        clearInterval(time1)
        time1 = null
       }, 1000);
    }
};

obj.sayName();