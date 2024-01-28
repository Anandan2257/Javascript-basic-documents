//loops method

let a = 0;
while (a <= 50) {
  console.log(a);
  a++;
}

console.log("Do while loop");

let b = 50;
do {
  console.log(b);
  b++;
} while (b <= 50);

//for loop
let c = "Anandan";
for (let i = 0; i <= c.length; i++) {
  console.log(c.charAt(i));
}

//break and continue use in loop see ib google

//function method

function add(a, b) {
  return a + b;
}
console.log(add(1, 2));