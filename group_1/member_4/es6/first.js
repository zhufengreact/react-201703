let obj = {
    name: 'zhufeng',
    sayName: function () {
        let that = this;
        setTimeout(function () {
            console.log(that.name);
        }, 1000);
    }
};

obj.sayName();