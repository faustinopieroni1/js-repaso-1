let botonAgregarItem = document.getElementById("botonAgregarItem")

let inputEntrada = document.getElementById("inputEntrada")

let lista = document.getElementById("lista")

let botonEleminarItem = document.getElementById("botonEleminarItem")

let botonEleminarLista = document.getElementById("botonEleminarLista")

//---------------------------------------------------
//Capturar el valor del input con el boton  "agregarTarea"
//Ejecutar funcion  "nuevoItem"
//Reiniciar el valor ingresado


botonAgregarItem.addEventListener("click", agregarItem)

function agregarItem() {
    let valorItem = inputEntrada.value //---> Captura valor del elemento "inputEntrada"

    nuevoItem(valorItem)//---> Ejecuto funcion que declaro abajo que tendra como PARAMETRO "valorItem"

    inputEntrada.value = "" // --> Hace que se borre lo que ya agregamos
}


//-----------------------------------------------------
//Crear  el elemento "item" (li) con el valor ya capturado
//Agregar el elemento "item"(li) a elemento "lista"(ol)

function nuevoItem(parametro) {
    let item = document.createElement("li") // ---> Crea elemento "item"

    item.innerText = parametro// ---> El texto que tendra sera el que provenga del parametro asignado mas arriba ("valorItem")

    lista.append(item)// ---> Agrega el elemento "item" al elemento "lista"

    item.addEventListener("click", marcardorItem) // ---> A cada nuevo elemento le agregamos esta funcion con un click
}

function marcardorItem() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed")
    }
    else {
        this.classList.add("completed")
    }
}


//----------------------------------------------------
//Eliminar "itemsCompletados" : Eliminara items esten dentro del elemento "lista" con la clase "completed"

botonEleminarItem.addEventListener("click", borradorItem)

function borradorItem() {
    let itemsCompletados = lista.getElementsByClassName("completed")//---> genera un array con los items de "lista" que tengan la clase "completed"

    while (itemsCompletados.length > 0) {
        itemsCompletados[0].remove();// ---> eliminara siempre que haya > 0 items en el array, el item 0 del del indice.
    }
}

//Eliminar Lista Entera:

botonEleminarLista.addEventListener("click", borradorLista)

function borradorLista() {

    /* lista.remove() */ // ---> eliminaria el elemento "ol" y ya no podriamos agregar mas "li"

    lista.innerHTML = ""  // ---> elimina los children y no el padre

}