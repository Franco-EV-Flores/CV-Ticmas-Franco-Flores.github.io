
var boton = document.getElementById("boton-mas");
var masInfo = document.getElementById("mas-info");
var mostrando = true;

boton.addEventListener("click", function(){
  if(masInfo.style.display === "none") {
    masInfo.style.display = "block";
    boton.innerHTML = "Mostrar menos información";
    mostrando = false;
  } else {
    masInfo.style.display = "none";
    boton.innerHTML = "Mas informacion:";
    mostrando = true;
  }
});

$(document).ready(function(){
    $("#boton-mas").button('dispose');
});
