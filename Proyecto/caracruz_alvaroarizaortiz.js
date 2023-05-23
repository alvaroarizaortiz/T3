// Obtener referencia al botón y al elemento de resultado
const btnLanzar = document.getElementById("btn-lanzar");
const resultado = document.getElementById("resultado");

btnLanzar.addEventListener("click", function () {
    const random = Math.floor(Math.random() * 2);
    
    // Remover clase 'coin' previa (si existe)
    resultado.classList.remove("coin");
    
    // Agregar clase 'coin' para activar animación
    void resultado.offsetWidth; // Reiniciar animación
    resultado.classList.add("coin");
    
    // Mostrar el resultado según el número generado después de un tiempo
    setTimeout(function() {
      if (random === 0) {
        resultado.textContent = "Cara";
      } else {
        resultado.textContent = "Cruz";
      }
    }, 1000); // Ajusta el tiempo según la duración de la animación CSS
  });
  