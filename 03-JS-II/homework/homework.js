// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  var x;
  var y;
  if(x >= y){
    return (x);
  }
    return (y);
  }
obtenerMayor(10,5);

function mayoriaDeEdad(edad) {
  if(edad >= 18){
    return ("Allowed" );
  }
    return("Not allowed");
  }
mayoriaDeEdad(17);
  
function conection(status) {
  if(status == 2){
    return ("Away");
  }else if(status == 1){
    return ("Online")
  }else{
    return("Offline")
  }
}
conection(1);

function saludo(idioma) {
  var aleman = "Guten Tag!";
  var mandarin = "Ni Hao!";
  var ingles = "Hello!";
  if(idioma == "aleman"){
    return ("Guten Tag!");
  }else if(idioma == "mandarin"){
    return ("Ni Hao!")
  }else if(idioma == "ingles"){
    return ("Hello!")
  }else{
    return ("Hola!");
  }
}
saludo("frances");

function colors(color) {
  var blue = "This is blue";
  var red = "This is red";
  var green = "This is green";
  var orange = "This is orange";
  if(color == "blue"){
    return ("This is blue");
  }else if(color == "red"){
    return ("This is red")
  }else if(color == "green"){
    return ("This is green")
  }else if(color == "orange"){
    return ("This is orange");
  }else{
    return ("Color not found");
  }
}
colors("verde");

function esDiezOCinco(numero) {
  if(numero == 5 || numero == 10){
    return (true)
  }
    return (false);
  }
esDiezOCinco(2);

function estaEnRango(numero) {
  if(numero > 20 && numero < 50){
    return (true);
  }
    return (false);
  }
estaEnRango(40);

function esEntero(numero) {
  if(numero % 1 == 0){
    return (true);
  }
    return (false);
  }
esEntero(0.8);

function fizzBuzz(numero) {
  if(numero % 3 === 0 && numero % 5 == 0 ){
      return "fizzbuzz";
  }else if(numero % 5 === 0){
     return "buzz";
  }else if(numero % 3 === 0){
     return "fizz";
  }else{
      return numero;
  }
}
fizzBuzz(45);

function operadoresLogicos(num1, num2, num3) {

  if(num1 < 0 || num2 < 0 || num3 < 0) {
      return "Hay negativos";
    }
    else if(num1 === 0 || num2 === 0 || num3 === 0) {
      return "Error";
    }
    else if(num1 > 0 && num1 > num2 && num1 > num3) {
      return "Número 1 es mayor y positivo";
    }
    else if(num3 > num1 && num3 > num2) {
      return num3 + 1;
    }
    else {
      return false;
    }
  }
operadoresLogicos(10, 30, 6);


function esPrimo(numero) {
  if (numero < 2) return false;
  if(numero === 2) return true;
  for (var i = 2; i < numero; i++) {
    if(numero % i === 0){  
  return false;
    }
  }
return true;
}
function esVerdadero(valor){  
  if(valor === true){
    return ("Soy verdadero")
  }
    return ("Soy falso")
  }


function tablaDelSeis(){
  let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++) {
        arrayTablaDel6.push(6 * i)
}
return arrayTablaDel6
}
tablaDelSeis();

function tieneTresDigitos(numero){
  if(numero > 99 && numero < 1000){
    return true
  }
    return false
  }  
function doWhile(numero) {
  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  }
  while(i < 8);
  
  return a;
  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
