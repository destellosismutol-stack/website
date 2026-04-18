console.log("Hello, World!");

//Variables
//let : Cambiar - conts: No cambiar
let nombre = "Sharon";
const dni = 610012345;

let texto = "Hola";
let numero = 10;
let on = true;

// tipos de operadores: +| - | * | / | 
let suma = 2 + 5;
let igual = 5 == 5; //true
let estricto = 5 === "5"; //false

console.log(igual);
console.log(estricto);
console.log(suma);


if(numero <= 10){
    console.log("Aprobado");
}else if(numero > 20){
    console.log("Numero no admitido ");
}else{
    console.log("Desaprobado");
}

//Bucles
for(let i = 0; i<5;i++){
    console.log(i);
}

function saludar(){
    alert("Fyodor is live");
}

saludar();

let titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo Titulo";

let boton = document.getElementById("btn");


//Evento click
boton.addEventListener("click", function(){
    titulo.textContent = "Titulo cambiado";
});





