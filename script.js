const defaultGridSize = 32; 
const defaultPixelColor = 'white';

let currentGridSize = defaultGridSize;
let currentPixelColor = defaultPixelColor;

const grid = document.getElementById('grid');


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// let gridStyles = getComputedStyle(grid);
// let gridSize = gridStyles.getPropertyValue('--size');

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i = 0; i < gridSize * gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', changeColor);
        pixel.addEventListener('mousedown', changeColor);
        grid.appendChild(pixel); 
    }
};

function changeColor(e) {
    if ('mouseover' && mouseDown) {
    e.target.style.backgroundColor = 'gray';
    } else {
        return;
    }
}

const clearButton = document.querySelector(".clearButton")
    clearButton.addEventListener("click", () => {
    clearGrid();
})

function makeGridSize() {
    let currentGridSize = prompt();
    return currentGridSize;
}

function clearGrid() {
    grid.textContent = '';
    createGrid(makeGridSize());
}

window.onload = () => {
    createGrid(currentGridSize)
}

// function clearGrid() {
//     const grid = document.querySelector('.grid');
//     let gridStyles = getComputedStyle(grid);
//     let gridSize = gridStyles.getPropertyValue('--size');
//     for (i = 0; i < gridSize * gridSize; i++) {
//         let pixel = document.querySelector('.pixel');
//         pixel.remove();
//     }
//     let newSize = prompt();
//     grid.style.setProperty('--size', newSize);
//     createGrid();
// }


