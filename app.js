//Estableciendo el array
let amigos = [];
let amigo;


function agregarAmigo(nuevoAmigo) {
 amigo = document.getElementById(amigo);
//agregar un nuevo amigo al array
if (nuevoAmigo !== "") {
    amigos.push(nuevoAmigo);
    console.log(`amigo agregado "${nuevoAmigo}"`);
} else { //alert en caso no valido
    alert("Por favor, ingresa un nombre valido")
}
}

