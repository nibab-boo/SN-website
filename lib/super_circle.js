const curvingThing = document.querySelector(".super-circle");

curvingThing.innerHTML = curvingThing.textContent.replace(/(\w|\s)/g,"<span>$&</span>");
const allLetters = document.querySelectorAll("span");
console.log(allLetters);
for(let i = 0; i < allLetters.length; i++) {
  allLetters[i].style.transform = "rotate("+i*12.5+"deg)";
};