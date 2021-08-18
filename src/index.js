import "./styles/main.scss";

const bootstrap = require("bootstrap");

let virus = document.getElementById("virus");
let virus2 = document.getElementById("virus-2");
let virus3 = document.getElementById("virus-3");
let virus4 = document.getElementById("virus-3");
let girlHeader = document.getElementById("girl-header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  virus.style.width = value * 10 + "px";
  virus2.style.opacity = value * 1 + "%";
  virus.style.opacity = value + 1 + "%";
});
