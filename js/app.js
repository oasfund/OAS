document.addEventListener("DOMContentLoaded", () => {

console.log("OAS Management System Loaded");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("click", function(e){

e.preventDefault();

alert("This module is under development.");

});

});

});