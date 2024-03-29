const initApp=()=>{
    const hamburgerBtn=document.getElementById("hamburger-button");
    const mobileMenu=document.getElementById("mobile-menu");
    
    const toggleMenu=()=>{
        mobileMenu.classList.toggle("hidden")
        mobileMenu.classList.toggle("flex")
        hamburgerBtn.classList.toggle("toggle-btn")
    }

    hamburgerBtn.addEventListener("click",toggleMenu)
    mobileMenu.addEventListener("click",toggleMenu)

}

document.addEventListener('DOMContentLoaded',initApp )

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

