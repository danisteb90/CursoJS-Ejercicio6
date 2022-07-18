// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compras = ["aguacate", "cepillo", "manzana", "cerveza", "cereal", "atun"]
// Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push ("aceite de girasol")
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop ()
console.log(compras);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

let peliculas = [
    {titulo: "El señor de los anillos", director: "J.R.R.Tolkien", fecha: new Date (1954, 07, 29)},
    {titulo: "Dune", director: "Denis Villeneuve", fecha: new Date (2021, 10, 22)},
    {titulo: "Morbius", director: "Daniel Espinosa", fecha: new Date (2022, 04, 01)}
]

console.log(peliculas);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const pel2010 = peliculas.filter (obj => obj.fecha > new Date (2010, 01, 01))
console.log(pel2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculas.map (valor => `${valor.director}`)
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = peliculas.map (valor => `${valor.titulo}`)
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const lista1 = directores.concat(titulos)
console.log(lista1);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const lista2 = [...directores, ...titulos]
console.log(lista2);