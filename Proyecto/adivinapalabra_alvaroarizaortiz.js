// Palabra a adivinar
const words = ["Carlos", "Boni", "apruebame", "gato", "Gaspar", "palabra", "script", "argentina", "mate", "asado"];

// Palabra aleatoria seleccionada para el juego
let word = "";
let guessedLetters = [];
let attempts = 0;
const maxAttempts = 10;

// Obtener referencias a elementos del DOM
const wordContainer = document.getElementById("word-container");
const inputLetter = document.getElementById("input-letter");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");
const restartButton = document.getElementById("restart-button");

// Función para seleccionar una nueva palabra aleatoria
function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toLowerCase();
}

// Función para reiniciar el juego
function restartGame() {
  word = selectRandomWord();
  guessedLetters = [];
  attempts = 0;
  result.textContent = "";
  inputLetter.value = "";
  inputLetter.disabled = false;
  submitButton.disabled = false;
  updateWordDisplay();
}

// Función para actualizar la visualización de la palabra a adivinar
function updateWordDisplay() {
  let displayWord = "";
  for (let i = 0; i < word.length; i++) {
    if (guessedLetters.includes(word[i])) {
      displayWord += word[i];
    } else {
      displayWord += "_";
    }
  }
  wordContainer.textContent = displayWord;
}

// Función para manejar el evento de clic en el botón de envío
submitButton.addEventListener("click", function() {
  const letter = inputLetter.value.toLowerCase().trim();

  // Validar si se ingresó una letra válida
  if (letter && letter.length === 1 && letter.match(/[a-z]/i)) {
    // Verificar si la letra ya ha sido adivinada antes
    if (guessedLetters.includes(letter)) {
      result.textContent = "Ya has ingresado esa letra. Por favor usa otra";
      result.style.color = "red";
      return;
    }

    // Verificar si la letra está presente en la palabra
    if (word.includes(letter)) {
      guessedLetters.push(letter);
      updateWordDisplay();

      // Verificar si se adivinó la palabra completa
      if (guessedLetters.length === new Set(word).size) {
        result.textContent = "¡Felicidades! Adivinaste la palabra.";
        result.style.color = "green";
        inputLetter.disabled = true;
        submitButton.disabled = true;
        return;
      }
    }

    attempts++;

    // Verificar si se agotaron los intentos
    if (attempts === maxAttempts) {
      result.textContent = "¡Se acabaron los intentos! La palabra era: " + word;
      result.style.color = "red";
      inputLetter.disabled = true;
      submitButton.disabled = true;
    } else {
      result.textContent = "Intentos restantes: " + (maxAttempts - attempts);
      result.style.color = "white";
    }

    inputLetter.value = ""; // Limpiar el campo de entrada
  }
});

// Función para manejar el evento de clic en el botón de reinicio
restartButton.addEventListener("click", restartGame);

// Iniciar el juego al cargar la página
restartGame();
