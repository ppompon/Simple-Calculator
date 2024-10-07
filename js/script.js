// Dados
    // Botões de múltiplas classes; <{+}>
    // Botões de classes únicas; <{+}>
    // Valor do display; <{+}>

// Display
    // Captura do valor atual; <{+}>
    // Verificação de ponto; <{+}>

// Operação
    // Dados do último número digitado salvo; <{+}>
    // Reinício do display após a operação selecionada; <{+}>
    // Conversão do número em string para number; <{+}>
    // Operação do número atual com o número anterior; <{+}>

// Eventos
    // Atribuição dos eventos para botões múltiplos ou únicos; <{+}>

// REALIZAÇÃO DO PROJETO //

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let point = document.querySelector(".point");
let equal = document.querySelector(".equal");
let display = document.querySelector("input");
let cbtn = document.querySelector("#C");

var lastNumber = "";
var actualNumber = "";
var operator = "";

// Functions
function c() {
    display.value = "";
    lastNumber = "";
    actualNumber = "";
}

function lastNumberfx(event) {
    var convert = parseFloat(event);
    return convert
}
function reset(event) {
    operator = event.target.textContent;
    console.log(operator);
    var test = lastNumberfx(display.value);
    lastNumber = test;
    display.value = "";
}

function calc() {
    var convert = display.value;
    convert = parseFloat(convert);
    switch (operator) {
        case "+":
            var e = lastNumber + convert;
            display.value = e;
            break;
        case "-":
            var e = lastNumber - convert;
            display.value = e;
            break;
        case "*":
            var e = lastNumber * convert;
            display.value = e;
            break;
        case "/":
            var e = lastNumber / convert;
            display.value = e;
            break; 
    }
}
function pointDisplay() {
    if (display.value.indexOf(".") === -1) {
        console.log("Verificação");
        actualNumber = ".";
        console.log("Ponto Inserido");
        showDisplay();
    }
}
function inputCapture(event){
    actualNumber = event.target.textContent;
    showDisplay();
}
function showDisplay() {
    display.value += actualNumber;
    console.log("Display Atualizado");
}

// Events
cbtn.addEventListener("click", c);
equal.addEventListener("click", calc);
point.addEventListener("click", pointDisplay);
operators.forEach((button) => button.addEventListener("click", reset));
numbers.forEach((button) => button.addEventListener("click", inputCapture));