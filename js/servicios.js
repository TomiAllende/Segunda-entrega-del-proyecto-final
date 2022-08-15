//Busco que el cliente decida que comidas consumira

ordenes = prompt ("Ingrese que productos desea consumir")
let serviciocliente= pedidos (ordenes)

function pedidos (ordenes) {
   let resultado = "Usted ha seleccionado" + ordenes
    console.log(resultado)

    return resultado
}

console.log(serviciocliente)