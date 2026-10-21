let tentativas = 3;

console.log("\n   ==== While ====");

while (tentativas > 0) {
    console.log(`Você tem ${tentativas} tentativas restantes`);
    tentativas--;
};

console.log("\n   ==== Do while ====");

do {
    console.log(`Você tem ${tentativas} tentativas restantes`);
    tentativas--;
} while (tentativas < 0);