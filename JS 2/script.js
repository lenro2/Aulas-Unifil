console.log("Escola uma matéria:\n1 - Matemática;\n2 - Geografia;\n3 - Português;\n4 - Química;\n5 - Educação Física;");

const materia = 1;

switch(materia){
    case 1:
        console.log("Top");
        break;
    case 2:
        console.log("mais ou menos");
        break;
    case 3:
        console.log("pessimo");
        break;
    case 4:
        console.log("hard");
        break;
    case 5:
        console.log("legal");
        break;
    default:
        console.log("materia indisponivel");
}

// ------------------------------------------

const idade = -10;

if (idade >= 150) {
    console.log("Múmia");
} else if (idade >= 60) {
    console.log("Idoso");
} else if (idade >= 18) {
    console.log("Adulto");
} else if (idade >= 12) {
    console.log("Adoslescente");
} else if (idade >= 0) {
    console.log("Criança");
} else if (idade >= -0.75) {
    console.log("Feto");
} else {
    console.log("Inexistente");
}

// ------------------------------------------

const pontos = 1100;
const tempo = 1;


if (pontos < 0) {
    console.log("Erro: Dado inválido, entre em contato com nosso suporte")
} else if (pontos <= 99) {
    console.log("Cliente Bronze")
} else if (pontos <= 499) {
    console.log("Cliente Prata")
} else if (pontos <= 999) {
    console.log("Cliente Ouro")
} else if (pontos >= 1000 && tempo == 1) {
    console.log("Cliente Diamante")
} else {
    console.log("Cliente Ouro")
}
