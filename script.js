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

function createGrid(currentGridSize) {
    console.log(currentGridSize);
    // console.log(gridSize)
    grid.style.gridTemplateColumns = `repeat(${currentGridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currentGridSize}, 1fr)`;

    for (i = 0; i < currentGridSize * currentGridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', changeColor);
        pixel.addEventListener('mousedown', changeColor);
        grid.appendChild(pixel);
    }
};

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    }
    else {
        e.target.style.backgroundColor = 'gray';
    }
}

const clearButton = document.querySelector(".clearButton")
    clearButton.addEventListener("click", () => {
    clearGrid();
})

function makeGridSize() {
    let currentGridSize = prompt('Enter number for grid size (maximum: 100)');
    console.log(currentGridSize);
    if (Number(currentGridSize) > 100) {
        makeGridSize();
    }
    else {
        createGrid(currentGridSize);
    }
}

console.log(currentGridSize);

function clearGrid() {
    grid.textContent = '';
    makeGridSize();
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