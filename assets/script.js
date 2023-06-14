// Dada una variable superheroes que sea un array con algunos heroes dentro.
var superheroes = ['Spiderman', 'Hulk']

// Crea ahora una función empujarHeroe que reciba un argumento arrayHeroes (será un array) y otro argumento nuevoHeroe (será un string) 
// y empuje dentro de arrayHeroes el argumento nuevoHeroe.

function empujarHeroe(arrayHeroes, nuevoHeroe) {
    arrayHeroes.push(nuevoHeroe)   
}


// Invoca a la función empujarHeroe enviando el array superheroes y el string "Thor".

empujarHeroe(superheroes, "Thor")



// Invoca a la función empujarHeroe enviando el array superheroes y el string "Iron-Man".
empujarHeroe(superheroes, "Iron-Man")

// Crea ahora una función sacarHeroe que reciba un argumento arrayHeroes (será un array) y saque de este array el último elemento (¡recuerda la sección de arrays del prework!).
function sacarHeroe(arrayHeroes) {
    arrayHeroes.pop()
    
}

// Invoca a la función sacarHeroe enviando el array superheroes
sacarHeroe(superheroes)

console.log(superheroes)

