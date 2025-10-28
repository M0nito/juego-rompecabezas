const puzzle = document.querySelector('.puzzle');
let piezas = ['1', '2', '3', '4', '5', '6', '7', '8', ''];
piezas.sort(() => Math.random() - 0.5);

function render() {
    puzzle.innerHTML = '';
    piezas.forEach((valor, i) => {
        const div = document.createElement('div');
        div.className = 'pieza' + (valor === '' ? ' vacia' : '');
        div.textContent = valor;
        div.addEventListener('click', () => mover(i));
        puzzle.appendChild(div);
    });
}

function mover(i) {
    const vacia = piezas.indexOf('');
    const vecinos = [i - 1, i + 1, i - 3, i + 3];
    if (vecinos.includes(vacia)) {
        [piezas[i], piezas[vacia]] = [piezas[vacia], piezas[i]];
        render();
    }
}

render();
