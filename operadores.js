//operadores aritmeticos
let a = 15;
let b = 4;

suma = a + b; // Suma
console.log(`la suma de a + b es: ${suma}`);
console.log("Suma: ", a + b); // Suma
console.log("Resta: ", a - b); // Resta
console.log("Multiplicación: ", a * b); // Multiplicación
console.log("División: ", a / b); // División
console.log("Módulo: ", a % b); // Módulo


//operadores de comparación
let edad1 = 20;
let edad2 = "hola";

console.log("Comparación estricta" , edad1 === edad2); 


console.log("¿edad 1 > edad 2" , edad1 > edad2); // Mayor que
console.log("¿edad 1 < edad 2" , edad1 < edad2); // Menor que
console.log("¿edad 1 == edad 2" , edad1 == edad2); // Mayor o igual que
console.log("¿edad 1 != edad 2" , edad1 != edad2); // Menor o igual que
console.log("¿edad 1 >= edad 2" , edad1 >=edad2); // Igualdad estricta
console.log("¿edad 1 <= edad 2" , edad1 <= edad2); // Desigualdad estricta



//operadores de asignación
let puntos =0;
puntos = puntos + 10; // Suma y asigna
puntos += 10; // Suma y asigna

puntos -= 5; // Resta y asigna
puntos *= 2; // Multiplica y asigna
puntos /= 2; // Divide y asigna
puntos %= 3; // Módulo y asigna
console.log(`el puntaje final es ${puntos}`); // Imprime el valor de puntos


//operadores lógicos
let tieneTarea = false;
let estudia = true;

let puedeSalir = !tieneTarea && estudia; // OR lógico
console.log(`¿Puede salir a jugar?", ${puedeSalir}`); // Imprime el resultado de la operación lógica


//operadores ternarios
let numero = 10;
let resultado = (numero % 2 === 0) ? "Es par" : "Es impar"; // Operador ternario
console.log(`El número : ${resultado}`); // Imprime el resultado del operador ternario