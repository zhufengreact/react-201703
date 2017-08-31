/*
3.写一个方法count，执行后在N秒后打印N，如在1秒后打印1，一直到10秒后
*/

const MAX = 10;
const MIN = 0;

function count(num = 0){

  if (num > MAX) {
    return false
  } else if (num > 0){
    console.log(num)
  }

  //print number from 1 to 10 every one sec
  setTimeout(()=> count(++num),1000)

}

count();
