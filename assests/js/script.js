let divElement = document.querySelector("div");
let buttonElement = document.querySelector("button");

document.body.style.backgroundColor = "rgba(173, 180, 66, 0.685)";
divElement.style.cssText = "width:200px;height:200px;border-radius:50%;background-color:crimson;color:white;font-size:24px;"
divElement.innerHTML = 10 ;
let counter;
buttonElement.onclick = () => {
   counter = setInterval(countdown,1000);
   }
function countdown () {
   divElement.innerHTML -=1;

   if ( divElement.innerHTML === "0") {
      clearInterval(counter);
      setTimeout(() => {
         window.open("assests/pages/Congratulation/index.html","_self");  
      },1000);
   }
}


