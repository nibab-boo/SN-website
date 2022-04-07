const makingCircle = () => {
  const curvingThing = document.querySelector(".text");
  curvingThing.innerHTML = curvingThing.textContent.replace(/(\w|\s)/g,"<span class='super-circle-letters'>$&</span>");
  const allLetters = document.querySelectorAll(".super-circle-letters");
  console.log(allLetters);
  for(let i = 0; i < allLetters.length; i++) {
    allLetters[i].style.transform = "rotate("+i*12.5+"deg)";
  };
}

export { makingCircle };
