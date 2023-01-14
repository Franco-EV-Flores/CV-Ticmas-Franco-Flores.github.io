
var boton = document.getElementById("boton-mas");
var botonMenos = document.getElementById("boton-menos");

var masInfo1 = document.getElementById("mas-info-1");
var masInfo2 = document.getElementById("mas-info-2");
var mostrando = true;

boton.addEventListener("click", function(){
  
    masInfo1.style.display = "block";
    masInfo2.style.display = "block";
    botonMenos.style.display = "block"
    boton.style.display = "none"
    
 
   
  });

  botonMenos.addEventListener("click", function(){
    masInfo1.style.display = "none";
    masInfo2.style.display = "none";
    botonMenos.style.display = "none"
    boton.style.display = "block"
    
 
   
  });



boton.innerHTML = "Mas informacion:";
mostrando = true;

html2canvas(document.body).then(function(canvas) {
  var img = document.createElement("img");
  img.src = canvas.toDataURL();
  document.getElementById("preview").appendChild(img);
  
  var meta = document.createElement("meta");
  meta.property = "og:image";
  meta.content = img.src;
  document.getElementsByTagName("head")[0].appendChild(meta);
});

var meta = document.createElement("meta");
meta.property = "og:image";
meta.content = img.src;
document.getElementsByTagName("head")[0].appendChild(meta);
