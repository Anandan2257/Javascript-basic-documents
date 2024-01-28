//alert(`I am Anandan`);
console.log(`Hello World`);
console.warn(`it is warning`);
console.error(`it is error`);

// var,let,const

let age = 20;
age = 21;
console.log(age);

const age1 = 20;
console.log(age1);

// Strings,Number,Bollean,null,undefined,Symbol

const name = `anandan`;
const age2 = 21;
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof age2);
console.log(typeof rating);
console.log(typeof iscool);
console.log(typeof z);
console.log("My name is " + name + " and i am " + age);

// template string

console.log(`my name is ${name} and i am ${age}`);

// type of string

const s = "hello world!";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 7));
console.log(s.split(""));

const d = "anandan, oviya, ananya";
console.log(d.split(", "));

//arrays

const letter = ["a", "b", "c"];
letter[3] = "d";
letter.push("e");
letter.unshift("f");
letter.pop(); //last array removed
console.log(letter);
console.log(Array.isArray(letter));
console.log(Array.isArray("hello"));
console.log(letter.indexOf("c"));

//object literals

const person = {
  firstName: "Anandan",
  lastName: "p",
  age: 21,
  skills: ["html", "css", "js", "github"],
  address: {
    street: "savadi street",
    city: "Namakkal",
    state: "Tamil Nadu",
  },
};
console.log(person);
console.log(person.firstName);
console.log(person.skills[2]);
console.log(person.address.state);

person.email = "123@gmail.com"; //add to a object
console.log(person);

//strings

const myVariable = "mathematics";
console.log(myVariable.length);
console.log(myVariable.charAt(1));
console.log(myVariable.indexOf("at"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.slice(1, 3));
console.log(myVariable.toUpperCase());
console.log(myVariable.includes("anandan"));
console.log(myVariable.includes("at"));
console.log(myVariable.split("e"));
console.log("Anandan b oviya".split("b"));
console.log("anandan,oviya,ananya".split(","));

//numbers

const myNumber = 42;
const myFloat = 42.01;

console.log(myNumber === myFloat);

const myVariable1 = "42";
console.log(myVariable1);
console.log(Number(myVariable1) + 3); //to change string to Number

console.log(Number(true) + 1); //true means 1 and false means 0

// number methods

console.log(Number.isInteger(42));
console.log(Number.isInteger(42.01));

const myVariable3 = "42.220060aaaa";

console.log(Number.parseFloat(myVariable3));
console.log(Number.parseInt(myVariable3));

console.log(myFloat.toString()); //to change float into string

//chaning to use code to dot method

console.log(parseFloat(myVariable3).toFixed(3).toString()); // it is a chaning

//isNaN method

console.log(Number.isNaN(42));
console.log(isNaN("anandan"));