var num1 = parseInt(prompt("Ingresa un número"));
var num2 = parseInt(prompt("Ingresa un número"));
console.log("OPERACIONES BÁSICAS");
console-log("Los datos son: \n" + num1 + ', ' + num2);

//SUMA
var suma = num1 + num2;
console.log("suma: " + num1 + "+" + num2 + "=" + suma);

//RESTA
var resta = num2 - num1;
console.log("resta: " + num1 + "-" + num2 + "=" + resta);

//MULTIPLICACIÓN
var mult = num1 * num2;
console.log("multiplicación: " + num1 + "*" + num2 + "=" + mult);

//DIVISIÓN
var div = num2 / num1;
console.log("división: " + num1 + "/" + num2 + "=" + div);

//MÓDULO
var mod = num2 % num1;
console.log("módulo" + num1 + "%" + num2 + "=" + mod);