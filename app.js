//Estableciendo el array
/*let amigos = [];
let amigo;
let intentos = 0;

/*function agregarAmigo(nuevoAmigo) {
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
intentos++;
limpiarCaja();

}*/


let listaAmigos = [];
let intentos = 0;
let amigoSorteado = sortearAmigo ();

function agregarAmigo(nuevoAmigo) {
    if (nuevoAmigo !== ""){
        listaAmigos.push(nuevoAmigo);
    const nuevoElementoLista= document.createElement("li");
    nuevoElementoLista.textContent= nuevoAmigo; //crea el elemento li
    
    const listaAmigosElement= document.getElementById('listaAmigos'); //obtiene referencia al elemento ul
    listaAmigosElement.appendChild(nuevoElementoLista);
    } else { //en caso no valido
        alert('Porfavor, inserte un nombre');
    }
    intentos++;
    limpiarCaja();
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
} 

/*function sortearAmigo() {
    if (listaAmigos.length > 0) {
    return[Math.floor(Math.random()*listaAmigos.length)];
    if (listaAmigos.includes(listaAmigosElement))
    alert('Tienes un amigo duplicado'); }
} 

 