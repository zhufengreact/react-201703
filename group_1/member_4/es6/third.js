function count() {
    let num = 0;
    let counter = setInterval(function () {
        if (num < 9) {
            console.log(++num);
        } else {
            clearInterval(counter);
        }

    }, 1000);

}

count();