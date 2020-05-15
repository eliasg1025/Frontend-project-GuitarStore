let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click",abrirVentana);
}
function abrirVentana(event) {
    modal.classList.toggle('modal--open');
    let src = event.target.src;
    img.setAttribute("src", src);
}


boton.addEventListener("click",cerrarVentana);
function cerrarVentana(){
    modal.classList.toggle("modal--open");
}