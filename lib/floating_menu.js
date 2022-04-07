const floatingSlider = (event) => {
    const menuItem = document.getElementById(`${event.target.dataset.id}`);
    menuItem.parentElement.parentElement.style.display="block";
    menuItem.style.display= "block";
    // setTimeout(() => {
      menuItem.scrollIntoView({
        behavior: 'smooth'
      });
    // }, 1000);
};

export const floatingMenu = () => {
  const menus = document.querySelectorAll(".floating-menu li");
  menus.forEach((menuButton) => {
    menuButton.addEventListener("click", floatingSlider)
  })
}