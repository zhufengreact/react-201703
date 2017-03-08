// 写一个方法count，执行后在N秒后打印N，如在1秒后打印1，一直到10秒后
let count = (n) => {
    let N = 1;
    let timer = setInterval(()=>{
        if(N <= n){
            console.log(N++);
        }else{
            clearInterval(timer);
    }
    }, 1000)
};
count(10);

