//Estableciendo el array
let amigos = [];



function agregarAmigo(nuevoAmigo) {
let amigoSecreto = document.getElementById(nuevoAmigo);
//agregar un nuevo amigo al array
if (nuevoAmigo !== "") {
    amigos.push(nuevoAmigo);
    console.log(amigo agregado `${nuevoAmigo}`);
} else { //alert en caso no valido
    alert("Por favor, ingresa un nombre valido")
}
}

