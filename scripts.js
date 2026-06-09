document.addEventListener("DOMContentLoaded", function () {

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
link.addEventListener("click", function () {
console.log("Menu Clicked: " + this.innerText);
});
});

const button = document.querySelector(".btn");

if(button){
button.addEventListener("click", function () {
alert("Thank you for choosing Rural Service Centre!");
});
}

});
