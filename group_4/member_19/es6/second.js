function Animal(name,gender,age){
		this.name=name;
		this.gender=gender;
		this.age=age;
	}
	Animal.prototype = {
		//args:["name","gender","age"];
		getInfo:function(){
			//this.args.forEach(function(){
				console.log("A "+this.age+" years old "+this.gender+" "+this.name)
			//}.bind(this));
		}
	}
	var cat =new Animal("cat","male","two");
	cat.getInfo();
