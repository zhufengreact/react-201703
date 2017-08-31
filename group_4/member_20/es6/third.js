function count(){
  for(var i = 1; i <= 10; i++){
    (function(j){
      setTimeout(function(){
        console.log(j);
      },i*1000);
    })(i)
  };
}
count();
