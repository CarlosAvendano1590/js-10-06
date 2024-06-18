// Función para cambiar el color del div al hacer click
function cambiarColor(event) {
    event.target.style.backgroundColor = 'black';
}

// Añadir eventos de click a los divs de colores
document.getElementById('div1').addEventListener('click', cambiarColor);
document.getElementById('div2').addEventListener('click', cambiarColor);
document.getElementById('div3').addEventListener('click', cambiarColor);
document.getElementById('div4').addEventListener('click', cambiarColor);

// Variable global para almacenar el color seleccionado
let colorSeleccionado = '';

// Función para manejar el evento de presionar una tecla
function manejarTecla(event) {
    const keyDiv = document.getElementById('key');
    switch (event.key) {
        case 'a':
            colorSeleccionado = 'pink';
            keyDiv.style.backgroundColor = colorSeleccionado;
            break;
        case 's':
            colorSeleccionado = 'orange';
            keyDiv.style.backgroundColor = colorSeleccionado;
            break;
        case 'd':
            colorSeleccionado = 'lightblue';
            keyDiv.style.backgroundColor = colorSeleccionado;
            break;
        case 'q':
            crearDivConColor('purple');
            break;
        case 'w':
            crearDivConColor('gray');
            break;
        case 'e':
            crearDivConColor('brown');
            break;
        default:
            break;
    }
}

// Función para crear un nuevo div con un color específico
function crearDivConColor(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '2px solid black';
    nuevoDiv.style.margin = '10px';
    document.body.appendChild(nuevoDiv);
}

// Añadir el evento de presionar una tecla a todo el documento
document.addEventListener('keydown', manejarTecla);