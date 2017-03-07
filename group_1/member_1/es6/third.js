//let count = (n,t) => {
//    let N = 1;
//    let interval = setInterval(()=> N <= n && console.log(N++), t);
//    N > n && clearInterval(interval);
//};
//
//count(10,1000);


//let count = (n, t)=> {
//    let N = 1;
//    const interval = (n)=>{
//        setTimeout(()=> {
//            if (N <= n) {
//                console.log(N++);
//                interval(n);
//            }
//        }, t)
//    };
//    interval(n);
//}


let count = (n,t)=>{
    let N = 1;

    const iterator = {
        [Symbol.iterator]: function () {return this},
        next: function () {
            if(N <= n){
                return {done: false, value: N++};
            }else{
                return {done:true,value:undefined};
            }
        }
    }

    for(let i of iterator){
        console.log(i);
    }
}

//promise ? async ? ...

//写一个方法count，执行后在N秒后打印N，如在1秒后打印1，一直到10秒后