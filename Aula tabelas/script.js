const table = document.getElementById("table");
let angulo = 0;
let girando = 0;

function girar() {
    setInterval(() => {
        if (girando == 0) {
            angulo = angulo + 1;
            table.style.transform = `rotate(${angulo}deg)`;
        }, )0001;
};

function parar() {
    getElementById
    girando = 1;
};