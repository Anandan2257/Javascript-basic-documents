const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const view = document.getElementsByClassName("view");
console.log(view);

const views = document.querySelectorAll(".view");
console.log(views);

const divs = view1.querySelectorAll("div");
console.log(divs);

const newdivs = view1.getElementsByTagName("div");
console.log(newdivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs[4].style.backgroundColor = "red";

for(i=0 ; i<evenDivs.length ; i++){
    evenDivs[i].style.backgroundColor = "red";
}

//to change text name nav h1

const navtext = document.querySelector("nav h1");
console.log(navtext);
navtext.textContent = "Anandan DOM project";

//add and remove a content 






