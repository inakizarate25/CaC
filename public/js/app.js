const navBtn = document.getElementById("nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
   navLinks.classList.toggle("show");
})

// botones + y -

const aumentar = document.querySelector(".aumentar");
const disminuir = document.querySelector(".disminuir");
const count = document.querySelector(".count");

aumentar.addEventListener("click", () => {
   if (count.innerText < 10) {
      count.innerText++;
   }
})

disminuir.addEventListener("click", () => {
   count.innerText--;

   if (count.innerText < 0) {
      count.innerText = 0;
   }
})

const add = document.querySelector(".add-to-cart");

add.addEventListener("click", () => {
   alert("Añadido al carrito");
})