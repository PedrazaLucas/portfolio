//Prueba si esta bien ejecutado JS
let hola = 'hola'
console.log(hola)

// Algoritmo con condicional

/* let persona = parseInt(prompt("ingrese su edad"))


if(persona >= 18){
    console.log("felicidades entraste al sitio")
}
else{
    console.log("No podes acceder al sitio siendo menor de edad")
    alert("Tenes que ser mayor de edad")
}

console.log(typeof(persona)) */

// Algoritmo con condicional y ciclo

/* let numero = parseInt(prompt("ingrese un numero"))

for(let i = 0 ; i <= 10; i++ ){
    numero = numero + i
    console.log(numero)
} */

// Simulador

const sumarQueso = valorProducto => valorProducto + 100

const calcularValor = valor => {
    return sumarQueso(valor)
}

console.log(calcularValor(3500))