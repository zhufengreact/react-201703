
function count() {
    var num = 10;

    if(num > 0) {
       num--;
       console.log(num);
    } else {
      console.log(num);
    }

    setInterval(count(), 1000);
}

count();
