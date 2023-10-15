/*
Esto es un comentario completo
Recordemos que usamos camel case
*/

// Hola mundo

console.log("Hola Mundo!");

// Variables

var myString = "Esto es una cadena de texto";
console.log(myString);

/*
Es muy poco usada var por el hecho de que se declara como una variable global (Scope global), de esta manera es mejor usar
let, ya que en caso de no definiría antes de su uso ella quedara como undefined
*/

let myString2 = "Esto es una cadena de texto";
myString2 = "Aquí cambio el valor de la cadena de texto";

// typeof me indica el tipo de dato de la variable
console.log(typeof myString2);

// Como no es fuertemente tipado, se puede hacer lo siguiente
// number
myString = 6;
console.log(myString2);
console.log(typeof myString2);

let myNumber = 7;
myNumber = myNumber + 4;
console.log(myNumber);
console.log(myNumber - 1);
console.log(myNumber);

console.log(myString + " " + myNumber);

let myNumber2 = 6.5;
console.log(myNumber2);
console.log(typeof myNumber2);

// Booleanos
let myBool = false;
myBool = true;
console.log(myBool);
console.log(typeof myBool);

// Constantes, usamos snake case en mayúsculas
const MY_CONST = "Mi propiedad constante";
// MY_CONST = "Otro valor" Error, es una constante no mutable.
console.log(MY_CONST);

// null
myBool = null;
console.log(myBool + myNumber2);
/*
Me imprime 6.5, debido a que el LP JS ignora el null y sigue con el number, en otros
LP eso podría ser fatal, generando un error.
*/

// Undefined
myBool = undefined; // Esto no es adecuado, definir una variable como undefined
console.log(myBool);
/*
Esto nos permite saber que podemos definir una variable donde mas adelante podemos
indicarle algún tipo de dato y valor, pero antes de todo eso, esta como undefined
*/

// Control de flujo

if (myNumber == 10 && myString == "Hola") {
  console.log("EL valor es 10");
} else if (myNumber == 11 || myString == "Hola") {
  console.log("El valor es 11");
} else {
  console.log("El valor no es 10");
}

myBool = null;
if (myBool) {
  console.log("Null"); // No se muestra en consola
}

if (myBool == null) {
  console.log("Null"); // Si se muestra en consola
}

// Ocurre lo mismo con el undefined, ya que los toma directamente en booleano como false
// Con cualquier otro dato que tenga valor, se tomara como true
myBool = "Hola";
if (myBool) {
  console.log("Null"); // No se muestra en consola
}

// Funciones

function myFunction() {
  console.log("Mi función");
}

myFunction();

function myFunction() {
  return "Mi función";
}

console.log(myFunction());
// Ambas funcionan y podrían llamar la función ya sea antes o después del código de la función

// Listas

let myList = ["Axel", "Rivero", "@axelrivero", 27]; // mutable
console.log(myList);
console.log(myList[0]); // llamar a uno de la lista por su posición inicial

console.log(typeof myList);
/*
Me indica un Object, todo lo que no sea un tipo de dato primitivo sera un Objeto
Sin embargo verlo asi sigue siendo una lista se debe colocar new Set para que sea un Set y 
De esta manera, no se repetirán los valores dentro del array
*/

// Set

let mySet = new Set(["Axel", "Rivero", "@axelrivero", 27, "Axel"]); // mutable
mySet.add("Rivero"); // Añade otro valor al set
console.log(mySet); // Aparte nos indica que cantidad poseemos en el array, aquellos que no se repintan contara

// Mapas o Diccionarios, como se conoce lo de clave -> valor

let myMap = new Map([
  ["Axel", 27],
  ["José", 23],
  ["Renee", 25],
]);
myMap.set("Mario", 500);
console.log(myMap); // Siendo un mapa de 3 claves, no permite repetir claves o key
console.log(myMap.get("Axel")); // Obtenemos el valor de la clave "Axel"

// Bucles

for (const value of myList) {
  console.log(value);
}

let myCounter = 10;

while (myCounter <= myList.length) {
  console.log(mylist[myCounter]); //Si observamos un undefined es porque no genera un error, sino sigue buscando en la lista o la estructura de datos
  myCounter++; // myCounter = myCounter + 1 / MyCounter += 1
}

// Cada uno de estos bucles se puede realizar tanto con mapas, listas o set

// Clases

class MyClass {
  //Sirve para definir algo parecido a POO, asi lo entendí jejeje se usa Upper Camel Case
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let myClass = new MyClass("Axel", 27); // añade a la función definida como class
console.log(myClass);
console.log(myClass.name); // Me imprime la clave name

// Enum, TOMA LOS VALORES FIJOS QUE TU LE DES, ES COMO UN ENUMERADOR

const MyEnum = {
  DART: "Dart",
  PYTHON: "Python",
  SWIFT: "Swift",
  JAVA: "Java",
  KOTLIN: "Kotlin",
  JAVASCRIPT: "JavaScript",
};

const myEnum = MyEnum.JAVASCRIPT;
console.log(myEnum); // Imprime javascript
