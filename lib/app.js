import { makingCircle } from "./super_circle";
// import './../css/style.css
/* Set the width of the side navigation to 250px */
const openClose =document.getElementById("open-close");
const openNav = () => {
  document.getElementById("mySidenav").classList.toggle("working");
  // document.querySelector(".menu").display="none";
  document.querySelector(".menu").style.display = "none";
  document.querySelectorAll(".menu-item").forEach((item) =>{
    item.style.display= "none";
  });
  // adding class name to links+++
  const movements = document.querySelectorAll(".movement");
  // console.log(movements);
  for(let i = 0; i < movements.length; i++)
  {
    movements.item(i).classList.toggle("nav-link");
  }
  // close and open button with rotation
  document.querySelector('.flip-card-inner').classList.toggle("flip-card-inner-clicked");

  //toggling class on icons
  const icons = document.querySelectorAll(".icons li");
  icons.forEach((icon) => {
    icon.classList.toggle("x-move");
  })
  // image-overshadow width control
  const imageOverShadow = document.querySelector('.image-over-shadow');
  console.log(typeof(imageOverShadow.style.width));
  if (imageOverShadow.style.width == "0px") {
    console.log(imageOverShadow.style.width);
    imageOverShadow.style.width = "100%";
    imageOverShadow.style.transition = "none";
  } else {
    console.log(imageOverShadow.style.width);
      imageOverShadow.style.width = "0";
      imageOverShadow.style.transition = "width 0.6s 0.8s ease-in-out";
  }
}

openClose.addEventListener("click", openNav);
// document.addEventListener("DOMContentLoaded", makingCircle);
makingCircle();

document.querySelector(".nav-button").addEventListener("click", (event)=>{
  event.preventDefault();
  openNav();
  const menuItem = document.getElementById(`${event.target.dataset.id}`);
  menuItem.parentElement.parentElement.style.display="block";
  menuItem.style.display= "block";
  setTimeout(() => {
    menuItem.scrollIntoView({
      behavior: 'smooth'
    });
  }, 1000);
}, false);

document.querySelector(".nav-button").addEventListener("mouseover", (event)=>{
  document.querySelector(".main-image").src = event.target.dataset.url;
});