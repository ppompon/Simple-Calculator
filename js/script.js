// Dados
    // Botões de múltiplas classes;
    // Botões de classes únicas;
    // Valor do display;

// Display
    // Captura do valor atual;
    // Verificação de ponto;

// Operação
    // Dados do último número digitado salvo;
    // Reinício do display após a operação selecionada;
    // Conversão do número em string para number;
    // Operação do número atual com o número anterior;

// Eventos
    // Atribuição dos eventos para botões múltiplos ou únicos;

// REALIZAÇÃO DO PROJETO //

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let point = document.querySelector(".point");
let equal = document.querySelector(".equal");
let display = document.querySelector("input");

var actualNumber = "";

function showDisplay() {
    display.value += actualNumber;
}

function inputCapture(event){
    actualNumber = event.target.textContent;
    console.log(actualNumber);

    showDisplay();
}

numbers.forEach((button) => button.addEventListener("click", inputCapture));