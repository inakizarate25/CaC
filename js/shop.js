const productos = [
  {
    id: 1,
    codigo: "STW001001",
    nombre: "Baby yoda blueball",
    categoria: "Star Wars",
    img1: "../multimedia/star-wars/baby-yoda-1.webp",
    img2: "../multimedia/star-wars/baby-yoda-box.webp",
    precio: 1799,
  },
  {
    id: 2,
    codigo: "STW001002",
    nombre: "Boba Fett Fighter",
    categoria: "Star Wars",
    img1: "../multimedia/star-wars/bobbafeth-1.webp",
    img2: "../multimedia/star-wars/bobbafeth-box.webp",
    precio: 1799,
  },
  {
    id: 3,
    codigo: "STW001003",
    nombre: "Luke Skylwalker & Grogu",
    categoria: "Star Wars",
    img1: "../multimedia/star-wars/luke-1.webp",
    img2: "../multimedia/star-wars/luke-box.webp",
    precio: 1799,
  },
  {
    id: 4,
    codigo: "STW001004",
    nombre: "Stormtrooper Lightsaber",
    categoria: "Star Wars",
    img1: "../multimedia/star-wars/trooper-1.webp",
    img2: "../multimedia/star-wars/trooper-box.webp",
    precio: 1799,
  },
  {
    id: 5,
    codigo: "PKM001001",
    nombre: "Charmander Smiley",
    categoria: "Pokemon",
    img1: "../multimedia/pokemon/charmander-1.webp",
    img2: "../multimedia/pokemon/charmander-box.webp",
    precio: 1799,
  },
  {
    id: 6,
    codigo: "PKM001002",
    nombre: "Dragonite Hi!",
    categoria: "Pokemon",
    img1: "../multimedia/pokemon/dragonite-1.webp",
    img2: "../multimedia/pokemon/dragonite-box.webp",
    precio: 1799,
  },
  {
    id: 7,
    codigo: "PKM001003",
    nombre: "Pidgeotto Flying",
    categoria: "Pokemon",
    img1: "../multimedia/pokemon/pidgeotto-1.webp",
    img2: "../multimedia/pokemon/pidgeotto-box.webp",
    precio: 1799,
  },
  {
    id: 8,
    codigo: "PKM001004",
    nombre: "Pikachu Smiley",
    categoria: "Pokemon",
    img1: "../multimedia/pokemon/pikachu-1.webp",
    img2: "../multimedia/pokemon/pikachu-box.webp",
    precio: 1799,
  },
  {
    id: 9,
    codigo: "PKM001005",
    nombre: "Baby yoda blueball Vulpix Fancy",
    categoria: "Pokemon",
    img1: "../multimedia/pokemon/vulpix-1.webp",
    img2: "../multimedia/pokemon/vulpix-box.webp",
    precio: 1799,
  },
  {
    id: 10,
    codigo: "HPT001001",
    nombre: "Harry Potter & Hegwid",
    categoria: "Harry Potter",
    img1: "../multimedia/harry-potter/harry-1.webp",
    img2: "../multimedia/harry-potter/harry-box.webp",
    precio: 1799,
  },
  {
    id: 11,
    codigo: "HPT001002",
    nombre: "Hermione Ball Dress",
    categoria: "Harry Potter",
    img1: "../multimedia/harry-potter/hermione-1.webp",
    img2: "../multimedia/harry-potter/hermione-box.webp",
    precio: 1799,
  },
  {
    id: 12,
    codigo: "HPT001003",
    nombre: "Luna Lovegood Lion Mask",
    categoria: "Harry Potter",
    img1: "../multimedia/harry-potter/luna-1.webp",
    img2: "../multimedia/harry-potter/luna-box.webp",
    precio: 1799,
  },
  {
    id: 13,
    codigo: "HPT001004",
    nombre: "Snape Patronus",
    categoria: "Harry Potter",
    img1: "../multimedia/harry-potter/snape-patronus-1.webp",
    img2: "../multimedia/harry-potter/snape-patronus-box.webp",
    precio: 1799,
  },
];

productos.forEach((prod) => {
  const card = document.getElementById("prod_list");
  card.innerHTML += `
 <a class="card" href="./product-page.html">
 <img src="${prod.img1}" alt="${prod.nombre}" />
 <h4 class="card_cat">${prod.categoria}</h4>
 <h3 class="card_name">${prod.nombre}</h3>
 <span class="card_price">$${prod.precio}</span>
 <p class="card_cuotas">3 CUOTAS SIN INTERES</p>
 <p class="nuevo">NUEVO</p>
</a>`;
});
