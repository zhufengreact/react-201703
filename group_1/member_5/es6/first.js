let obj = {
    name: 'zhufeng',
    sayName: function(){
        setTimeout(() => {
          console.log(this.name);
        }.bind(this), 1000);
    }
};

obj.sayName();
