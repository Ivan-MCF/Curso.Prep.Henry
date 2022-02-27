// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 22;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;        
}
devolverString();

function suma(x, y){
  var sumar = x + y;
  return x + y;

}function resta(x, y){
  return x - y;  
}

function multiplica(x, y){
  return x * y;  
}

function divide(x, y){
  return x / y;  
}

function sonIguales(x, y) {
  return x == y;
}
console.log(sonIguales(5,5))

function tienenMismaLongitud(str1, str2) {
    
  if(str1.length === str2.length){
      return true;
  }else{
      return false;
  }
}
console.log(tienenMismaLongitud('javascript', 'bumfuzzled'));

function menosQueNoventa(num) {
  if(num < 90){
      return true;
  }else{
      return false
  }
}
console.log(menosQueNoventa(98));

function mayorQueCincuenta(num) {
  if(num > 50){
      return true;
  }else{
      return false
  }
}
console.log(mayorQueCincuenta(76));

function obtenerResto(x, y) {

  return x % y;   
  
}
console.log(obtenerResto(28, 5));

function esPar(num) {
  if(num % 2 == 0){
    return true;
  }else{
    return false;
  }
}
esPar(7);

function esImpar(num) {
  if(num % 2 != 0){
    return true;
  }else{
    return false;
  }
}
esImpar(7);

function elevarAlCuadrado(num) {  
  var base = num * num;  
     return base;  
}
elevarAlCuadrado(-5);

function elevarAlCubo(num) {
  var base = num * num * num;
  return base;
}
elevarAlCubo(-5);

function elevar(num, exponent) {
  let resultado = 1;
     for(let i=0; i<exponent; i++) {
       resultado *= num;
     }
     return resultado;
 }
 elevar(2,3);

 function redondearNumero(num) {  
  var redondear = Math.round(num)
  return redondear;
}
redondearNumero(1.5);

function redondearHaciaArriba(num) {
  var redondear = Math.ceil(num)
  return redondear;  
}
redondearHaciaArriba(1.5);

function numeroRandom() {
  let num = Math.random()
  return num; 
}
numeroRandom();

function esPositivo(numero) {
  if(numero > 0){
    return "Es positivo";
  }else if(numero < 0){
    return "Es negativo";
  }else{
      return false;
      return numero;
  }
}
esPositivo(7);

function agregarSimboloExclamacion(str) {
  var frase = str + '!';
  return (frase);
}
console.log(agregarSimboloExclamacion("Soy henry"));

function combinarNombres(nombre, apellido) {
  return (nombre + " " + apellido);
}
combinarNombres("Soy", "Henry");

function obtenerSaludo(nombre) {
  var hola = 'Hola' +" "+ nombre + '!';
  return (hola);        
}
console.log(obtenerSaludo("Ivan"));


function obtenerAreaRectangulo(alto, ancho) {
  var area = alto * ancho;
  return area;  
}
console.log(obtenerAreaRectangulo(20,50));

function retornarPerimetro(lado){
  var perimetro = lado * 4;
  return perimetro;
}
console.log(retornarPerimetro(6))

function areaDelTriangulo(base, altura){
  var area = (base * altura)/2;
  return area;
}
console.log(areaDelTriangulo(80, 30));


function deEuroAdolar( cant, euro){
  var dolar = 1.20;
  var total = cant * dolar;
  return (total);
}
console.log(deEuroAdolar(100));

function esVocal(letra) {
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
  return 'Es vocal'
 } else if (letra.length !== 1) {
 return('Dato incorrecto')
 }else{
   return 'Dato incorrecto';
 }
}
console.log(esVocal("a"));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
