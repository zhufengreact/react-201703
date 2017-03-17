/*
3.写一个方法count，执行后在N秒后打印N，如在1秒后打印1，一直到10秒后
*/
// const MAX = 10;
// function count(num=0){
//   if ( num > MAX ) return false;
//   if ( num > 0 ) console.log(num);
//   setTimeout(() => count(++num),1000); 
// }
// count();

// 改进版
function countFn(MAX=10){
  return function _count(num=0){
    if ( num > MAX ) return false;
    if ( num > 0 ) console.log(num);
    setTimeout(() => _count(++num),1000);
  }
}

const count1 = countFn();
count1(); // 1 2 3 4 5 6 7 8 9 10
const count2 = countFn(5);
count2(); // 1 2 3 4 5
