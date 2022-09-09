const enlace = document.querySelectorAll(".na")
enlace[0].textContent= "inicio"
enlace[1].textContent= "sobre mí"
enlace[2].textContent = "acádemicos "
enlace[3].textContent="experiencia y proyectos"
const  texth2 = document.querySelector(".hero-contenido-h2")
texth2.textContent="mi currículo"
console.log(texth2)

const  datos  = {
      nombre:"",
      telef:"",
      email:"",
  }
  console.log(datos)
  // eventos de formulario
  const nombre = document.querySelector("#text")
  const telef = document.querySelector("#tel")
  const email = document.querySelector("#email")
  const textarea = document.querySelector("#textarea")
  const  formulario=document.querySelector(".formulario")
 

  nombre.addEventListener("input",leerTexto)
  telef.addEventListener("input",leerTexto)
  email.addEventListener("input",leerTexto)
  textarea.addEventListener("input",leerTexto)

  function leerTexto(e){
    datos[e.target.id]= e.target.value
    } 
 
// evento submit
  formulario.addEventListener("submit",function(evtn){
   evtn.preventDefault();


   const {nombre,telef,email,textarea} =datos;
   if(nombre === ""|| telef ===""|| email ===""|| textarea===""){
      mostraAlerta("Todos los campos son oblogatorios","error")
       return;
   }
  mostraAlerta("Todo se envió perfecto",true)
  });

 

function mostraAlerta(mensaje,error= null){
  const  nuevo = document.createElement("P");
    nuevo.textContent = mensaje;
    if(error){
      nuevo.classList.add("error");
    }else{
      nuevo.classList.add("correto");
    }
    formulario.appendChild(nuevo)
    setTimeout(()=>{
      nuevo.remove();
   }, 5000);

}





   new TypeIt("#simpleUsage", {
    strings: "This is a simple string.",
    speed: 50,
    waitUntilVisible: true,
  }).go();

 
new TypeIt("#simpleUsage1", {
    strings: "This is a simple string.",
    speed: 50,
    waitUntilVisible: true,
  }).go();

    
new TypeIt("#simpleUsage2", {
    strings: "This is a simple string.",
    speed: 50,
    waitUntilVisible: true,
  }).go(); 