const casillas = document.querySelectorAll('.casilla');

let turno = 1;
let juegoTerminado = false;

const jugada = (event) => {
	if (juegoTerminado) return;
	const casilla = event.target;
	if (casilla.classList.contains('equis') || casilla.classList.contains('letrao')) return;
	if (turno % 2 === 0) {
		casilla.classList.add('letrao');
		casilla.textContent = 'O';
	} else {
		casilla.classList.add('equis');
		casilla.textContent = 'X';
	}
	turno++;
	if (comprobarGanador()) {
		juegoTerminado = true;
		alert(`¡Ha ganado ${turno % 2 === 0 ? 'X' : 'O'}! Recarga la página para volver a jugar.`);
	} else if (turno > 9) {
		juegoTerminado = true;
		alert('¡Ha sido un empate! Recarga la página para volver a jugar.');
	}
};

const comprobarGanador = () => {
	//  Comprobante del ganador en las filas del tablero.
	for (let i = 0; i < casillas.length; i += 3) {
		if (
			casillas[i].classList.contains('equis') &&
			casillas[i + 1].classList.contains('equis') &&
			casillas[i + 2].classList.contains('equis')
		) {
			return true;
		}
		if (
			casillas[i].classList.contains('letrao') &&
			casillas[i + 1].classList.contains('letrao') &&
			casillas[i + 2].classList.contains('letrao')
		) {
			return true;
		}
	}
	//  Comprobante del ganador en las columnas del tablero.
	for (let i = 0; i < 3; i++) {
		if (
			casillas[i].classList.contains('equis') &&
			casillas[i + 3].classList.contains('equis') &&
			casillas[i + 6].classList.contains('equis')
		) {
			return true;
		}
		if (
			casillas[i].classList.contains('letrao') &&
			casillas[i + 3].classList.contains('letrao') &&
			casillas[i + 6].classList.contains('letrao')
		) {
			return true;
		}
	}
	//  Comprobante del ganador en las diagonales del tablero. Hay el doble de diagonales que de columnas y filas.
	if (
		casillas[0].classList.contains('equis') &&
		casillas[4].classList.contains('equis') &&
		casillas[8].classList.contains('equis')
	) {
		return true;
	}
	if (
		casillas[0].classList.contains('letrao') &&
		casillas[4].classList.contains('letrao') &&
		casillas[8].classList.contains('letrao')
	) {
		return true;
	}
	if (
		casillas[2].classList.contains('equis') &&
		casillas[4].classList.contains('equis') &&
		casillas[6].classList.contains('equis')
	) {
		return true;
	}
	if (
		casillas[2].classList.contains('letrao') &&
		casillas[4].classList.contains('letrao') &&
		casillas[6].classList.contains('letrao')
	) {
		return true;
	}
	return false;
};

casillas.forEach((casilla) => {
	casilla.addEventListener('click', jugada);
});
