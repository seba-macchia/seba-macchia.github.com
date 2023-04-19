console.log("Hola mundo desde javaScript")

//DOM
// querySelector / querySelectorAll
/*
let tabla = document.querySelector("table");
console.log(tabla);
*/


// Obtener los elementos de la clase .close
let link = document.querySelectorAll(".close");

// Recorrerlos
  links.forEach(function(link){
    // Agregar un evento click a cada uno de ellos - case sensitive
    link.addEventListener("click", function(){})
    eval.preventDefault();

    // Quitarle las clases de animacion que ya tiene
    content.classList.remove("animate__fadeInUpBig");
    content.classList.remove("animate__flash");

    // Agregar clases para animar su salida faceOutUp
    content.classList.add("animate__fadeInUpBig");
    content.classList.add("animate__flash");

    setTimeout(function(){
      location.href ="/boletines";
    },600);


    return false;

    });
  


