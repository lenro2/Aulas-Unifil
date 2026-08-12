let abertoEletro = false;
function openEletro() {
    const eletro = document.getElementById("eletro");
    const sinalEletro = document.getElementById("sinalEletro");
    if (abertoEletro == false) {
        eletro.style.display = "block";
        sinalEletro.textContent = "⬇"
        abertoEletro = true;
    } else {
        eletro.style.display = "none";
        sinalEletro.textContent = "→";
        abertoEletro = false;
    };
};

let abertoCode = false;
function openCode() {
    const code = document.getElementById("code");
    const sinalEletro = document.getElementById("sinalCode");
    if (abertoCode == false) {
        code.style.display = "block";
        sinalCode.textContent = "⬇"
        abertoEletro = true;
    } else {
        code.style.display = "none";
        sinalCode.textContent = "→";
        abertoCode = false;
    };
};