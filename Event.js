//even listeners


const view = document.querySelector(".view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
console.log(view);
console.log(div);
console.log(h2);
const view1 = document.querySelector(".view1");
view1.style.display = "none";
view.style.display = "flex";



//syntax
//addEventListeners, function, useCapture
const doSomeThing = () =>{
    alert("summmma");
};

h2.addEventListener("click",doSomeThing,false);

//h2.removeEventListener("click",doSomeThing,false);



