let obj = {
    name: 'zhufeng',
    sayName: function(){
        "use strict";

        setTimeout(() => {
          console.log(this.name);
        }, 1000);
    }
};

obj.sayName();
