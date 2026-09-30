// ===TextoBasico===

let nome = "Leandro";
let idade = 16;
let idadeEmDias = idade * 365;
let idadeEmMeses = idade * 12;
let cidade = "Londrina";

console.log(`Olá, ${nome}, espero que esteja bem, você tem ${idade} anos ou ${idadeEmDias} dias de vida e moro em ${cidade}`)

// ===/TextoBasico/===

// ===Testando===

let edit = false;

// ------

const h2 = document.getElementById("h2");
const h2i = document.getElementById("h2i");

const p = document.getElementById("p");
const pi = document.getElementById("pi");

// ------

function editar() {
    if (edit) {
        h2i.classList.remove("edit");
        h2.textContent = "Seu Nome"
        pi.classList.remove("edit");
        p.textContent = "Sua idade";
        edit = false;
    } else {
        const textoh2 = h2i.value;
        h2.textContent = `${textoh2}`;
        h2i.classList.add("edit");
        const textop = pi.value;
        p.textContent = `${textop}`
        pi.classList.add("edit");
        edit = true;
    }
}

// ===/Testando/===

// ===Calculadora===

a = 25;
b = 10;

let c = a + b;

console.log(c);

// ===Calculadora/===
const preco = 7;
const quantidade = 10;
const subtotal = preco * quantidade;
const valorMinimo = 50;
const temDesconto = subtotal > valorMinimo;

const cidadeLoja = a;
const cidadeCliente = a;

const temFrete = temDesconto && cidadeCliente == cidadeLoja

const mensagem = `
Preço: R$ ${preco},
Quantidade: ${quantidade}
Subtotal: ${subtotal}
Valor mínimo para desconto: ${valorMinimo}
Desconto aplicado? ${temFrete ? "Sim" : "Não"}
`

console.log(mensagem);