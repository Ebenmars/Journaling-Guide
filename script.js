"use strict";

const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnsOpenModel = document.querySelectorAll(".show-model");
console.log(btnsOpenModel);

for(let i = 0; i < btnsOpenModel.length; i++){
    console.log(btnsOpenModel[i].textContent);
    btnsOpenModel[i].addEventListener("click",function(){
        console.log("Button clicked");
        model.classList.remove('hidden');
        overlay.classList.remove("hidden");
    });
}