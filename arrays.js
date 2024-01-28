//arrays method:

const myArray = [];
//adding element
myArray[0] = "anandan";
myArray[1] = 123;
myArray[2] = true;
myArray[3] = 42.1;
console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]);
console.log(myArray[myArray.length - 1]);

//adding element
myArray.push(1234);
console.log(myArray);

//delete a last element
myArray.pop();
console.log(myArray);

//adding element in first
myArray.unshift("uma");
console.log(myArray);

//delete a first element
myArray.shift();
console.log(myArray);

//delete a element in center or any place
myArray.splice(2, 1);
console.log(myArray);

//adding a element in any place
myArray.splice(2, 0, "oviya");
console.log(myArray);

//slice a array and store another array using method
myArray.slice(2, 3);
const newArray = myArray.slice(2, 3);
console.log(newArray);

myArray.reverse(); //reverse a array
console.log(myArray);

//join is used to add a string usinf array
const newArray1 = myArray.join();
console.log(newArray1);

console.log(newArray1.split(","));

//adding two arrays

firstArray = [1, 2, 3, 4, 5];
const addingTwoArrays = myArray.concat(firstArray);
console.log(addingTwoArrays);

//adding two arrays using another method

const addingsTwoArrays = [...myArray, ...firstArray];
console.log(addingsTwoArrays);

//two dimentional arrays
const rank = ["A", "B", "C", "O"];
const studentName = ["annad", "abi", "vijay"];
const className = [1, 2, 3];

const dataOfaStudent = [rank, studentName]; //two dimention
const datasOfaStudent = [rank, studentName, className]; //three dimention
console.log(dataOfaStudent[0][3], dataOfaStudent[1][0]);
console.log(
  datasOfaStudent[0][0],
  datasOfaStudent[1][1],
  datasOfaStudent[2][0]
);
