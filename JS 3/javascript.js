let num = 25;

console.log("==== Par/Impar ====")

console.log("\n   ---- Par ----");

for(let i = 1; i <= 10; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}

console.log("\n   ---- Impar ----");

for(let i = 1; i <= 10; i++) {
    if (i%2) {
        console.log(i);
    }
}

console.log("\n==== Número Primo ====");

let prim = true;

for(let i = 2; i < num; i++) {
    if (num % i == 0) {
        prim = false;
        break;
    };
};

if (prim) {
    console.log("É primo");
} else {
    console.log("Não é primo");
};

console.log("\n==== Tabuada ====");

let b;

console.log(`Tabuada do ${num}`)

for(let i = 1; i <= 10; i++) {
    b = i * num;
    console.log(`${num} x ${i} = ${b}`);
};

console.log("\n==== Tabuada  do 1 ao 10 ====");

let d;

for(let i = 1; i <= 10; i++) {
    console.log(`\n   ---- Tabuada do ${i} ----`);
    for(let k = 1; k <= 10; k++) {
        d = k * i;
        console.log(`${i} x ${k} = ${d}`);
    }
}

console.log("\n==== Raíz quadrada exata ====");

for(let i = 1; i <= num; i++) {
    if (i*i == num) {
        console.log(`É raiz quadrada, com o resultado ${i}`);
    };
};

