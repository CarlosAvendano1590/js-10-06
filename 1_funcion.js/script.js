
function example(a, b, c) {
    return a + b + c;
}


function mostrarResultado() {
    let resultado = example(5, 2, 3);
    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}


document.addEventListener('DOMContentLoaded', (event) => {
    mostrarResultado();
});
