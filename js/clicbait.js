var parte1 = ["24 hechos ", "10 revelaciones inesperadas ", "13 secretos ", "56 consejos ", "36 verdades incomodas"];
var parte2 = ["de x famoso ", "para ligar ", "sobre tu marca de móviles favorita ", "de cerveza "];
var parte3 = ["que nunca hubieras imaginado! ", "que ni podras creer! ", "que te resultarán inesperadas! ", "que te sorprenderan! "];

function obtenerNumeroAlAzar(minimo, maximo){
return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}
function obtenerTiTular(){
  var p1 = parte1[obtenerNumeroAlAzar(0, parte1.length)];
  var p2 = parte2[obtenerNumeroAlAzar(0, parte2.length)];
  var p3 = parte3[obtenerNumeroAlAzar(0, parte3.length)];
  return p1 + p2 + p3;
}

function generarClickbait(cantidadClickbait){
  if(cantidadClickbait < 1){
    throw "Demasiado poco";
  }

  var contenidoHTML = "";
  for (var i = 0; i < cantidadClickbait; i++){
    var imagenRandom = obtenerNumeroAlAzar(1,7);

    contenidoHTML += '<div class="col-12 col-sm-6 col-md-4 col-lg-3">';
    contenidoHTML += '<img src="img/'+ imagenRandom +'.jpg " alt="imagen ilustrativa" class="img-fuid">';
    contenidoHTML += '<br><br>';
    contenidoHTML += '<h3><a href="#">' + obtenerTiTular() + '</a></h3>';
    contenidoHTML += '<br>';
    contenidoHTML += '</div>';
      }
      document.getElementById('noticias').innerHTML = contenidoHTML;
}
    document.addEventListener('DOMContentLoaded', function(){
      generarClickbait(10);
    }, false);
