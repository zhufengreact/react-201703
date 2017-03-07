let count = () => {
  let n = 0;
var setCount = setInterval(() => {
    if(n < 10) {
      console.log(++n);
    }else{
      clearInterval(setCount);
    }
  }, 1000);
}
count();
