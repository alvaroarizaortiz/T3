document.addEventListener('DOMContentLoaded', function () {
  const userName = localStorage.getItem('userName');
  const userDisplay = document.getElementById('user-display');

  if (userName) {
    userDisplay.textContent = `¡Hola, ${userName}!`;
  } else {
    userDisplay.textContent = 'Sin identificar';
  }
});

function saveUserName() {
  const userNameInput = document.getElementById('user-name-input');
  const userName = userNameInput.value;
  console.log('userName ingresado:', userName); 
  localStorage.setItem('userName', userName);

  const userDisplay = document.getElementById('user-display');
  userDisplay.textContent = `¡Hola, ${userName}!`;
}


