//Estableciendo el array
let amigos = [];
let amigo;


function agregarAmigo(nuevoAmigo) {
 amigo = document.getElementById(amigo); //esto se conecta con la linea 24 del index
//agregar un nuevo amigo al array
if (nuevoAmigo !== "") {
    amigos.push(nuevoAmigo);
const nuevoElementoLista = document.createElement("li"); //crea la lista
nuevoElementoLista.textContent = nuevoAmigo;// agrega el nombre del amigo al listado
listaAmigos.appendChild(nuevoElementoLista);//agrega el nombre del amigo a la lista que va a mostrar
} else { //alert en caso no valido
    alert("Por favor, ingresa un nombre valido")
}
}

