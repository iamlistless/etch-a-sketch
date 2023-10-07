const defaultGridSize = 32; 
const defaultPixelColor = 'white';
const defaultMode = 'colorMode';

let currentGridSize = defaultGridSize;
let currentPixelColor = defaultPixelColor;
let currentMode = defaultMode;

function setCurrentMode(newMode) {
    currentMode = newMode;
}

const grid = document.getElementById('grid');
const defaultButton = document.querySelector('.defaultButton')
const rainbowButton = document.querySelector('.rainbowButton')
const clearButton = document.querySelector('.clearButton')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

defaultButton.addEventListener('click', () => {
    setCurrentMode('colorMode')
})

rainbowButton.addEventListener('click', () => {
    setCurrentMode('rainbowMode')
    console.log(currentMode)
})

clearButton.addEventListener('click', () => {
    clearGrid()
})

// let gridStyles = getComputedStyle(grid);
// let gridSize = gridStyles.getPropertyValue('--size');

function createGrid(currentGridSize) {
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
    else if (currentMode === 'colorMode') {
        e.target.style.backgroundColor = 'gray';
    }
    else if (currentMode === 'rainbowMode') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    console.log(currentMode)
}

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

function clearGrid() {
    grid.textContent = '';
    makeGridSize();
    }

window.onload = () => {
    createGrid(defaultGridSize)
    setCurrentMode(defaultMode)
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