function dizerOi(nome, idade) {
    return `Olá, meu nome é ${nome}, e eu apezar de não parecer, tenho ${idade} anos.`
};

console.log(dizerOi("bom dia", 72));
console.log(dizerOi("Leandro", 16));

function somar(num1, num2) {
    return num1 + num2;
};

console.log(somar(2, 3));

function IMC(peso, alt) {
    imc = peso/alt**2
    if (imc < 18.5) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está abaixo do peso`
    } else if(imc < 24.9) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com o peso normal`
    } else if(imc < 29.9) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com sobrepeso`
    } else if(imc < 34.9) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com obesidade grau I`
    } else if(imc < 39.9) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com obesidade grau II`
    } else {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com obesidade grau III`
    }
}

const peso = 50.5;
const alturaEmMetros = 1.62;

console.log(IMC(peso, alturaEmMetros))

let peso = 50.5;
let altura = 1.62;
let imc = imcularIMC(peso, altura)
let classificacao = classificarIMC(imc)

function imcularIMC(peso, altura) {
    return peso / altura ** 2
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está abaixo do peso`
    } else if(imc < 24.9) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com o peso normal`
    } else if(imc < 29.9) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com sobrepeso`
    } else if(imc < 34.9) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com obesidade grau I`
    } else if(imc < 39.9) {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com obesidade grau II`
    } else {
        return `Seu IMC atual é ${imc.toFixed(1)}, isso mostra que você está com obesidade grau III`
    }
}

console.log(classificacao);

async func