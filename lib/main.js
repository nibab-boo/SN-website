/* Set the width of the side navigation to 250px */
const openNav = () => {
  document.getElementById("mySidenav").classList.toggle("working");

  // adding class name to links
  const movements = document.getElementsByClassName("movement");
  for(let i = 0; i < movements.length; i++)
  {
    movements.item(i).classList.toggle("nav-link");
  }
  // close and open button with rotation
  const openClose =document.getElementById("open-close");
  document.querySelector('.flip-card-inner').classList.toggle("flip-card-inner-clicked");

  // image-overshadow width control
  const imageOverShadow = document.querySelector('.image-over-shadow');
  if (imageOverShadow.style.width === "100%") {
    imageOverShadow.style.width = "0";
    imageOverShadow.style.transition = "width 0.6s 0.8s ease-in-out";
  } else {
    imageOverShadow.style.width = "100%";
    imageOverShadow.style.transition = "none";
  }
}