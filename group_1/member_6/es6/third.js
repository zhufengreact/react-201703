/**
 * Created by dujingya on 17/3/8.
 */
function count() {
    let i=1;
    const print = setInterval(()=>{
        if(i<=10){
            console.log(i);
            i++;
        }else{
            clearInterval(print)
        }
    },1000)
}

count()