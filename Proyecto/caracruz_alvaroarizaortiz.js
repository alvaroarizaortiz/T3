// Obtener referencia al botón y al elemento de resultado
const btnLanzar = document.getElementById("btn-lanzar");
const resultado = document.getElementById("resultado");

btnLanzar.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 2);

  resultado.classList.remove("coin");

  void resultado.offsetWidth; // Reiniciar animación
  resultado.classList.add("coin");


  setTimeout(function () {
    if (random === 0) {
      resultado.textContent = "Cara";
    } else {
      resultado.textContent = "Cruz";
    }
  }, 1000);


});
