//if statement

let number = "Anandan";
let reply;
if (number) {
  reply = `My name is ${number}`;
}
console.log(reply);

//grade mark print in if else

let gradeMark = 88;
let mark;

if (gradeMark >= 90) {
  mark = `O `;
} else if (gradeMark >= 80) {
  mark = `A `;
} else if (gradeMark >= 60) {
  mark = `B `;
} else if (gradeMark >= 50) {
  mark = `C `;
} else {
  mark = `U `;
}
console.log(mark);

//switch statement

switch (Math.floor(Math.random() * 4 + 1)) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("no match");
}