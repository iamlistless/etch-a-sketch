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
const colorButtons = document.querySelectorAll('.colorButton')
const colorButton = [...colorButtons]
const clearButton = document.querySelector('.clearButton')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

colorButtons.forEach (colorButton => {
    colorButton.addEventListener('click', () => {
    setCurrentMode(colorButton.dataset.colorMode)
    console.log(colorButton.dataset.colorMode)
    })
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
        e.target.style.backgroundColor = '#e5e5e5';
    }
    else if (currentMode === 'rainbowMode') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    // console.log(e.target.style.backgroundColor)
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


// function shadeColor(e) {
//     let R = parseInt(e.target.style.backgroundColor.substring(4,7));
//     let G = parseInt(e.target.style.backgroundColor.substring(9,12));
//     let B = parseInt(e.target.style.backgroundColor.substring(14,17));

//     R = parseInt(R * (100 + -10) / 100);
//     G = parseInt(G * (100 + -10) / 100);
//     B = parseInt(B * (100 + -10) / 100);

//     R = (R<255)?R:255;  
//     G = (G<255)?G:255;
//     B = (B<255)?B:255;  

//     R = Math.round(R)
//     G = Math.round(G)
//     B = Math.round(B)

//     e.target.style.backgroundColor = `rgb(${R}+${G}+${B})`;
// }


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