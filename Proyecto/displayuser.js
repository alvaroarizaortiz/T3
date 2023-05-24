document.addEventListener('DOMContentLoaded', function () {
    const userName = localStorage.getItem('userName');
    console.log('userName obtenido de localStorage:', userName); 
    const userDisplay = document.getElementById('user-display');
  
    if (userName) {
      userDisplay.textContent = `¡Hola, ${userName}!`;
    } else {
      userDisplay.textContent = 'Sin identificar';
    }
  });
  