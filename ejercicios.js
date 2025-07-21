//calcula el area de un triangulo (base * altura) / 2) usando variables y operadores aritméticos

let base = 10;
let altura = 5;
let areaTriangulo = (base * altura) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}`); // Imprime el área del triángulo



//usando el operador ternario compara dos numeros e indica si el primero es mayor, menor o igual al segundo
let num1 = 15;
let num2 = 20;
let comparacion = (num1 > num2) ? "El primer número es mayor" :
                  (num1 < num2) ? "El primer número es menor" :
                  "Los números son iguales";
console.log(comparacion); // Imprime el resultado de la comparación


//usando operadores logicos verifica si un numero esta entre 10 y 20 (ambos inclusive)
let numero = 15;
let estaEntre10y20 = (numero >= 10 && numero <= 20);
console.log(`¿El número ${numero} está entre 10 y 20? ${estaEntre10y20}`); // Imprime el resultado de la verificación

// usando operadores de asignacion para incrementar un valor en 5, luego multiplicalo por 2
let valor = 10;
valor += 5; // Incrementa en 5
valor *= 2; // Multiplica por 2
console.log(`El valor final es: ${valor}`); // Imprime el valor final después de las operaciones


//compara dos valores y verifica si son iguales en valor(==) y tipo (===)
let valor1 = 10;
let valor2 = "10";
let sonIgualesValor = (valor1 == valor2); // Compara solo el valor
let sonIgualesTipo = (valor1 === valor2); // Compara valor y tipo
console.log(`¿Son iguales en valor? ${sonIgualesValor}`); // Imprime si son iguales en valor


//usa && y || para decidir si un usuario puede acceder (edad >= 18 y tiene membresia, o es administrador)
let edadUsuario = 20;
let tieneMembresia = true;
let esAdministrador = false;
let puedeAcceder = (edadUsuario >= 18 && tieneMembresia) || esAdministrador;
console.log(`¿El usuario puede acceder? ${puedeAcceder}`); // Imprime si el usuario puede acceder