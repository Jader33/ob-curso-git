document.addEventListener("DOMContentLoaded",function(){
iniciarApp();
});
function iniciarApp(){
    crearGaleria();
    scrollNav();
}

function scrollNav(){
    const enlace = document.querySelectorAll("navegacion-principal a");

    enlace.forEach(enlace=>{
enlace.addEventListener("click", function(e){
    e.preventDefault();
    const seccionScroll = e.target.attributes.href.value;
const seccion =  document.querySelector(seccionScroll);
seccion.scrollIntoView({behaviour:"smooth"});
});
    });
}


function crearGaleria(){
    const galeria=document.querySelector(".galeria-imagenes");

    for(let i= 1; i <= 12; i++){
        const imagen= document.createElement("picture");
            imagen.innerHTML =`
            <source srcset="/proyectoMusica/build/img/thumb/${i}.avif"  type="imagen/avif">
             <source srcset="/proyectoMusica/build/img/thumb/${i}.webp"  type="imagen/webp">
             <img loading="lazy" width="200" height="300" src="/proyectoMusica/build/img/thumb/${i}.jpg" alt="imagen galeria">
            `;
            imagen.onclick = function(){
               mostrarImagen(i);
            }
             galeria.appendChild(imagen);                  

    }
}

function mostrarImagen(id){
    const imagen= document.createElement("picture");
    imagen.innerHTML =`
    <source srcset="/proyectoMusica/build/img/grande/${id}.avif"  type="imagen/avif">
     <source srcset="/proyectoMusica/build/img/grande/${id}.webp"  type="imagen/webp">
     <img loading="lazy" width="200" height="300" src="/proyectoMusica/build/img/grande/${id}.jpg" alt="imagen galeria">
    `;

//crea eloverlay con alaimagen
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");
    overlay.onclick =function(){
        const body = document.querySelector("body");
        body.classList.remove("fijar-body");
        overlay.remove();
    }
//boton para cerra el modal
const cerraModal =document.createElement("P");
cerraModal.textContent ="x";
cerraModal.classList.add("btn-cerrar");
cerraModal.onclick = function(){
    overlay.remove();

    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();

}
//agregando boton al overlay
overlay.appendChild(cerraModal);

// anade al html
    const body = document.querySelector("body")
    body.appendChild(overlay);
    body.classList.add("fijar-body")
}