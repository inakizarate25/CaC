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
   count.innerText++;

})
disminuir.addEventListener("click", () => {
   count.innerText--;

   if (count.innerText < 0) {
      count.innerText = 0;
   }
})

import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
new Glide('.glide',
{
type: 'carousel',
startAt: 0,
perView: 3,
gap: 30,
breakpoints: {
991: {
perView: 2
},
768: {
perView: 1
}
}
}
).mount({ Autoplay });