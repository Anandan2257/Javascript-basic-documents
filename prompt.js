//confirm

let a = confirm("do you like this")
console.log(a);

//prompt method

let yourName = prompt("Enter your name ");
if (yourName) {
  console.log(yourName ?? "you did't enter a name ");
}
else{
        console.log("you did't enter a name ");
}
console.log(yourName.trim().length); //trim used for omit the unwanted space in user enter any name or any things  
