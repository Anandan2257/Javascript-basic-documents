//classes implemented on 2015 to decrease a code using classes

const myPizza = {
  size: "medium",
  crust: "original",
  bake: function () {
    return console.log(`baking a ${this.size} ${this.crust} crust pizza`);
  },
};
myPizza.bake(); //these are normal method

//classes method

class Pizza {
  constructor() {
    this.size = "medium";
    this.crust = "original";
  }
  bake() {
    return console.log(`baking a ${this.size} ${this.crust} crust pizza`);
  }
}
const newPizza = new Pizza(); //using new keyword
newPizza.bake();

//another method to get a value from user class Pizza

class Pizza2 {
  constructor(typeOfSize, typeOfCrust) {
    this.size = typeOfSize;
    this.crust = typeOfCrust;
  }
  bake() {
    return console.log(`baking a ${this.size} ${this.crust} crust pizza`);
  }
}
const anotherPizza = new Pizza2("large", "various"); //using new keyword
anotherPizza.bake();

//get and set method using classes

class Pizza3 {
  constructor(typeOfSize, typeOfCrust) {
    this.size = typeOfSize;
    this.crust = typeOfCrust;
  }
  getSize() {
    return this.size;
  }
  setSize(sizeOfPizza) {
    this.size = sizeOfPizza;
  }
  bake() {
    return console.log(`baking a ${this.size} ${this.crust} crust pizza`);
  }
}
const myPizza3 = new Pizza3("small", "new");
myPizza3.setSize("small");
console.log(myPizza3.getSize());
myPizza3.bake();
console.log(myPizza3.getSize());

//parent class and child class using extends keyword and also use super keyword to connect a two classes

class Pizza4 {
  constructor(typeOfSize) {
    this.size = typeOfSize;
    this.crust = "original";
  }
  getSize() {
    return this.size;
  }
  setSize(sizeOfPizza) {
    this.size = sizeOfPizza;
  }
}

class specialPizza extends Pizza4 {
  constructor(typeOfSize) {
    super(typeOfSize);
  }
  slice() {
    console.log(`our ${this.size} ${this.crust} pizza`);
  }
}

const myspecialPizza = new specialPizza("large");
myspecialPizza.slice();

//factory function
