let nombre
let apellido
const espacio = ""
nombre = prompt("Ingresa tu nombre")
apellido = prompt("Ingresa tu apellido")
console.log(typeof(apellido))
console.log(apellido)
console.log(nombre+espacio+apellido)

if((nombre != " " && nombre !=null) (apellido !=" " && apellido !=null)) {
    alert("Hola"+ nombre + espacio + apellido)
}
else if(nombre != " ") {
    alert("Hola"+ nombre)
}
else if(apellido !=" ") {
    alert("Hola"+ apellido)
}
else{
    console.log("Usted no recibe mensaje porque no ingreso nada")
}

//Armo regla de que los menores de edad no pueden realizar pedidos
let edad = 6
if (edad >= 18) {
    console.log("Podes pedir comida")
}
if (edad < 18) {
    console.log("No podes pedir comida")
}

//Armo pregunta para ver cuanto quiere pedir el cliente
let numeroPedidos = prompt("Ingrese la cantidad de pedidos que desea realizar")

for(i=0; i<8; i++) {
    console.log(numeroPedidos)
}