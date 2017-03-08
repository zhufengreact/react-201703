/**
 * Created by dujingya on 17/3/8.
 */
function Animal(a,b,c) {
    this.name=a;
    this.gender=b;
    this.age=c;
}
Animal.prototype.getInfo=function () {
    console.log("A " + this.age + " years old " + this.gender + " " + this.name);
};
new Animal("cat","male","bull").getInfo();