const obj ={
  name:'zhengfeng',
  sayName: function(){
    // setTimeout(function () {
    //     return console.log(_this.name);
    //   }, 1000);
    setTimeout(() => console.log(this.name),1000)
  }
}
obj.sayName();
