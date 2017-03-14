/**
 * Created by dujingya on 17/3/8.
 */
let obj={
    name:'zhufeng',
    sayName:function () {
        setTimeout(()=>{
            console.log(this.name)
        },1000);
    }
};

obj.sayName();