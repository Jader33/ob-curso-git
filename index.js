


const enlace = document.querySelectorAll(".na")
enlace[0].textContent= "inicio"
enlace[1].textContent= "sobre mi"
enlace[2].textContent = "academicos "
enlace[3].textContent="experiencia laboral"
const  texth2 = document.querySelector(".hero-contenido-h2")
texth2.textContent="mi curriculo"


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


  const  datos  = {
      nombre:"",
      telef:"",
      email:"",
  }
  // eventos de formulario
  const nombre = document.querySelector("#text")
  const telef = document.querySelector("#tel")
  const email = document.querySelector("#email")
const textarea = document.querySelector("#textarea")

  const leerTexto = (e)=>{
    datos[e.target.id]= e.target.value
    console.log(datos)

}
textarea.addEventListener("input",leerTexto)
  nombre.addEventListener("input",leerTexto)
  telef.addEventListener("input",leerTexto)
  email.addEventListener("input",leerTexto)
      
const btnEnviar = document.querySelector("#booton")
btnEnviar.addEventListener("submit",evtn=>{
   evtn.preventDefault();
   const {nombre,telef,email,textarea} =datos;
   if(nombre === ""|| telef ===""|| email ===""||textarea ==="")
   alert("llena todos los campos ")

   return
   

})



