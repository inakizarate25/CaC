const productos = [
  {
    id: 1,
    codigo: "STW001001",
    nombre: "Baby yoda blueball",
    categoria: "Star Wars",
    img1: "./multimedia/star-wars/baby-yoda-1.webp",
    img2: "./multimedia/star-wars/baby-yoda-box.webp",
  },
  {
    id: 2,
    codigo: "STW001002",
    nombre: "Boba Fett Fighter",
    categoria: "Star Wars",
    img1: "./multimedia/star-wars/bobbafeth-1.webp",
    img2: "./multimedia/star-wars/bobbafeth-box.webp",
  },
  {
    id: 3,
    codigo: "STW001003",
    nombre: "Luke Skylwalker & Grogu",
    categoria: "Star Wars",
    img1: "./multimedia/star-wars/luke-1.webp",
    img2: "./multimedia/star-wars/luke-box.webp",
  },
  {
    id: 4,
    codigo: "STW001004",
    nombre: "Stormtrooper Lightsaber",
    categoria: "Star Wars",
    img1: "./multimedia/star-wars/trooper-1.webp",
    img2: "./multimedia/star-wars/trooper-box.webp",
  },
  {
    id: 5,
    codigo: "PKM001001",
    nombre: "Charmander Smiley",
    categoria: "Pokemon",
    img1: "./multimedia/pokemon/charmander-1.webp",
    img2: "./multimedia/pokemon/charmander-box.webp",
  },
  {
    id: 6,
    codigo: "PKM001002",
    nombre: "Dragonite Hi!",
    categoria: "Pokemon",
    img1: "./multimedia/pokemon/dragonite-1.webp",
    img2: "./multimedia/pokemon/dragonite-box.webp",
  },
  {
    id: 7,
    codigo: "PKM001003",
    nombre: "Pidgeotto Flying",
    categoria: "Pokemon",
    img1: "./multimedia/pokemon/pidgeotto-1.webp",
    img2: "./multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    id: 8,
    codigo: "PKM001004",
    nombre: "Pikachu Smiley",
    categoria: "Pokemon",
    img1: "./multimedia/pokemon/pikachu-1.webp",
    img2: "./multimedia/pokemon/pikachu-box.webp",
  },
  {
    id: 9,
    codigo: "PKM001005",
    nombre: "Baby yoda blueball Vulpix Fancy",
    categoria: "Pokemon",
    img1: "./multimedia/pokemon/vulpix-1.webp",
    img2: "./multimedia/pokemon/vulpix-box.webp",
  },
  {
    id: 10,
    codigo: "HPT001001",
    nombre: "Harry Potter & Hegwid",
    categoria: "Harry Potter",
    img1: "./multimedia/harry-potter/harry-1.webp",
    img2: "./multimedia/harry-potter/harry-box.webp",
  },
  {
    id: 11,
    codigo: "HPT001002",
    nombre: "Hermione Ball Dress",
    categoria: "Harry Potter",
    img1: "./multimedia/harry-potter/hermione-1.webp",
    img2: "./multimedia/harry-potter/hermione-box.webp",
  },
  {
    id: 12,
    codigo: "HPT001003",
    nombre: "Luna Lovegood Lion Mask",
    categoria: "Harry Potter",
    img1: "./multimedia/harry-potter/luna-1.webp",
    img2: "./multimedia/harry-potter/luna-box.webp",
  },
  {
    id: 13,
    codigo: "HPT001004",
    nombre: "Snape Patronus",
    categoria: "Harry Potter",
    img1: "./multimedia/harry-potter/snape-patronus-1.webp",
    img2: "./multimedia/harry-potter/snape-patronus-box.webp",
  },
];
// Obtén el campo de entrada y el contenedor de resultados del DOM
const inputNombre = document.getElementById("search");
const resultadosContainer = document.getElementById("table-body");

// Función para mostrar productos basados en el filtro
function mostrarProductosFiltrados() {
  const valorInput = inputNombre.value.trim().toLowerCase(); // Trim elimina los espacios en blanco al principio y al final del texto
  const productosFiltrados = filtrarProductos(productos, valorInput);

  // Limpia los resultados anteriores
  resultadosContainer.innerHTML = "";

  // Muestra los productos filtrados en el contenedor de resultados
  productosFiltrados.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td class="text-left">${producto.id}</td>
            <td class="text-left">${producto.codigo}</td>
            <td class="text-left">${producto.nombre}</td>
            <td class="text-left">${producto.categoria}</td>
            <td class="text-left">
                <button><img src="../multimedia/icons/edit_pencil.svg" alt="edit"></button>
                <button><img src="../multimedia/icons/delete_trash.svg" alt="delete"></button>
            </td>
        `;
    resultadosContainer.appendChild(row);
  });
}

// Mostrar todos los productos al cargar la página
mostrarProductosFiltrados();

// Agrega un evento de entrada al campo de texto para que se ejecute la función de filtrado cuando el usuario escriba algo
inputNombre.addEventListener("input", mostrarProductosFiltrados);

// Función para filtrar productos por nombre, código o categoría
function filtrarProductos(productos, filtro) {
  return productos.filter((producto) => {
    const nombreEnMinuscula = producto.nombre.toLowerCase();
    const codigoEnMinuscula = producto.codigo.toLowerCase();
    const categoriaEnMinuscula = producto.categoria.toLowerCase();
    return (
      nombreEnMinuscula.includes(filtro) ||
      codigoEnMinuscula.includes(filtro) ||
      categoriaEnMinuscula.includes(filtro)
    );
  });
}
