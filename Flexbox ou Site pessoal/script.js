let abertoEletro = false;
function openEletro() {
    const eletro = document.getElementById("eletro");
    const sinalEletro = document.getElementById("sinalEletro");
    const eletroTitle = document.getElementById("eletroTitle");
    if (abertoEletro == false) {
        eletro.style.display = "block";
        sinalEletro.textContent = "⬇"
        eletroTitle.classList.add("buttonOpened");
        abertoEletro = true;
    } else {
        eletro.style.display = "none";
        sinalEletro.textContent = "→";
        eletroTitle.classList.remove("buttonOpened");
        abertoEletro = false;
    };
};

let abertoCode = false;
function openCode() {
    const code = document.getElementById("code");
    const sinalCode = document.getElementById("sinalCode");
    const codeTitle = document.getElementById("codeTitle");
    if (abertoCode == false) {
        code.style.display = "block";
        sinalCode.textContent = "⬇"
        codeTitle.classList.add("buttonOpened");
        abertoCode = true;
    } else {
        code.style.display = "none";
        sinalCode.textContent = "→";
        codeTitle.classList.remove("buttonOpened");
        abertoCode = false;
    };
};