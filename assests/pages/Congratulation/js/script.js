let heartElement = document.querySelector(".heart");
let colors = ["cyan","purple","crimson","yellow","blue","red"];
let buttonElement = document.querySelector("button");
let i = 0 ;

function changeColors () {
        setInterval(()=> {
            heartElement.style.color = colors[i];
            i++;
            if(i >= colors.length) {
                i = 0;
            }
        },1000);
}
window.onload = () => {
setTimeout(changeColors(),500);
}