//JSON Javascript Object Notation
//text format
//to send and receive data in many programming languages

const myData1 = {
  name: "Anandan",
  age: 20,
  address: ["india", "tamilnadu", "namakkal", 637002],
  study: function () {
    return console.log("i am student");
  },
};
console.log(myData1.age);
console.log(myData1.address[3]);
myData1.study();

//to change object to JSON

const toChangeJSON = JSON.stringify(myData1);
console.log(toChangeJSON);

//to change JSON to object file

const toChangeObj = JSON.parse(toChangeJSON);
console.log(toChangeObj);

