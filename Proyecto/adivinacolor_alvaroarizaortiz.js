const opciones = document.querySelectorAll('.opcion');
const resultado = document.getElementById('resultado');
const historial = document.getElementById('historial');
const btnVolverJugar = document.getElementById('btn-volver-jugar');

const colores = {
  red: 'Rojo',
  blue: 'Azul',
  green: 'Verde',
  yellow: 'Amarillo',
  orange: 'Naranja',
  purple: 'Morado'
};

let colorCorrecto;
let intentos = [];

opciones.forEach((opcion) => {
  opcion.addEventListener('click', () => {
    const colorSeleccionado = opcion.dataset.color;

    if (colorSeleccionado === colorCorrecto) {
      resultado.textContent = '¡Correcto!';
      resultado.style.color = 'green';
      guardarIntento(colorSeleccionado, true);
    } else {
      resultado.textContent = '¡Incorrecto!';
      resultado.style.color = 'red';
      guardarIntento(colorSeleccionado, false);
    }
  });
});

btnVolverJugar.addEventListener('click', () => {
  iniciarJuego();
});

function iniciarJuego() {
  resultado.textContent = 'Selecciona el color correcto.';
  resultado.style.color = 'initial';
  intentos = [];
  actualizarHistorial();
  asignarColorCorrecto();
}

function asignarColorCorrecto() {
  const indice = Math.floor(Math.random() * opciones.length);
  colorCorrecto = opciones[indice].dataset.color;
}

function guardarIntento(color, acierto) {
  const intento = {
    color: color,
    acierto: acierto
  };
  intentos.push(intento);
  actualizarHistorial();
}

function actualizarHistorial() {
  historial.innerHTML = '';
  intentos.forEach((intento) => {
    const item = document.createElement('li');
    const colorItem = document.createElement('div');
    colorItem.classList.add('color-item');
    colorItem.style.backgroundColor = intento.color;
    item.appendChild(colorItem);
    historial.appendChild(item);
  });
}

// Iniciar el juego al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  iniciarJuego();
});
