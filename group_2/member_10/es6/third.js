function count() {
    for(var i = 1; i <= 10; i++) {
        (function(index) {
            setTimeout(function() {
                console.log(index + ' ');
            }, index * 1000);
        })(i);
    }
}
count();