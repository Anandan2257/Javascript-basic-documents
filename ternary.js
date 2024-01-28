//ternary operator

let yourAge = 25;
let eligibleOrNot = yourAge >= 18 ? "you are eligible" : "you are not eligible";
console.log(eligibleOrNot);

//score using ternary operator

let testscre = 50;
let grade =
  testscre >= 90 ? "O" : testscre >= 80 ? "A" : testscre >= 70 ? "B" : "c";
console.log(grade);

//rock, scissors , paper game

let player = "rock";
let computer = "scissors";
let result =
  player === computer
    ? "tie"
    : player === "rock" && computer === "paper"
    ? "computer wins"
    : player === "paper" && computer === "scissors"
    ? "computer wins"
    : player === "scissors" && computer === "rock"
    ? "computer wins"
    : "player wins";
console.log(result);
