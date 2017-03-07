class asyncAction{
    sayHello(){
        this.hello().then(() => {
            this.world();
        });
    }
    world(){
        setTimeout(() => {
            console.log('world!');
        }, 1000);
    }
    hello(){
        return new Promise(function (res, rej) {
            setTimeout(() => {
                console.log('hello');
                res();
            },1000);
        })
    }
}

new asyncAction().sayHello();
export default asyncAction;