
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
    // Verificar si se está en modo día o modo noche
    if (document.body.classList.contains('dark-mode')) {
        // Cambiar a modo día
        document.body.classList.remove('dark-mode');
        // Guardar preferencia en localStorage
        localStorage.setItem('modo', 'dia');
    } else {
        // Cambiar a modo noche
        document.body.classList.add('dark-mode');
        // Guardar preferencia en localStorage
        localStorage.setItem('modo', 'noche');
    }
});


window.addEventListener('load', function() {
    const modoPreferido = localStorage.getItem('modo'); 
    if (modoPreferido === 'noche') {
        document.body.classList.add('dark-mode');
    }
});
