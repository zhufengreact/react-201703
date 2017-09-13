let obj = {
  name:'zhufeng',
  sayName:function(){
    setTimeout(() => {console.log(this.name)},1000);
  }
}
obj.sayName();
