let suma = (a, b) => a + b;


function mostrarResultado() {
    let resultado = suma(5, 2);
    document.getElementById("resultado").textContent = "El resultado de la suma es: " + resultado;
}


document.addEventListener('DOMContentLoaded', (event) => {
    mostrarResultado();
});
