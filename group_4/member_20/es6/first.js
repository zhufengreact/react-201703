let obj = {
  name: 'zhufeng',
  sayName: function(){
    var _name = this.name;
    setTimeout(function(){
      console.log(_name);
    },1000);
  }
}

obj.sayName();
