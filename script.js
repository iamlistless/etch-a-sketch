const defaultGridSize = 32; 
// const defaultPixelColor = 'white';
const defaultMode = 'colorMode';

let currentGridSize = defaultGridSize;
// let currentPixelColor = defaultPixelColor;
let currentMode = defaultMode;

function setCurrentMode(newMode) {
    currentMode = newMode;
}

const grid = document.getElementById('grid');
const colorButtons = document.querySelectorAll('.colorButton')
const colorButton = [...colorButtons]
const clearButton = document.querySelector('.clearButton')

let rgbColor = `rgb(229, 229, 229)`

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
        if (e.target.style.backgroundColor === '') {
            e.target.style.backgroundColor = rgbColor;
        }
        else if (e.target.style.backgroundColor === e.target.style.backgroundColor) {
            e.target.style.backgroundColor = shadeColor(e.target.style.backgroundColor);
        }
    }
    else if (currentMode === 'rainbowMode') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
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

function shadeColor(rgbColor) {
    let firstRgbIndex = rgbColor.indexOf(',');
    let R = parseInt(rgbColor.substring(4, firstRgbIndex));
    let middleRgbIndex = rgbColor.lastIndexOf(',');
    let G = parseInt(rgbColor.substring([firstRgbIndex + 2], middleRgbIndex));
    let lastRgbIndex = rgbColor.lastIndexOf(')');
    let B = parseInt(rgbColor.substring([middleRgbIndex + 2], lastRgbIndex));

    R = parseInt(R * (100 + -10) / 100);
    G = parseInt(G * (100 + -10) / 100);
    B = parseInt(B * (100 + -10) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;
    B = (B<255)?B:255;  

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    return rgbColor = `rgb(${R}, ${G}, ${B})`;
}

// function hexToRGB(hexColor) {
//     let R = parseInt(hexColor.substring(4,7));
//     let G = parseInt(hexColor.substring(9,12));
//     let B = parseInt(hexColor.substring(14,17));
// }
// function shadingTool(div) {
//     if (!(div.getAttribute('data-color') == hexColor)) {
//         console.log(div.getAttribute('data-color'));
//         console.log(hexColor);
//         div.setAttribute('data-shade', '0');
    
//         let shadeValue = parseFloat(div.getAttribute('data-shade')) + 0.1;
//         console.log(shadeValue);
//         shadeValue = parseFloat(shadeValue.toFixed(2));
//         shadeValue = Math.min(shadeValue, 1);
    
//         div.setAttribute('data-shade', shadeValue);

//         const indexOfLast = hexToRGB(hexColor).lastIndexOf(')');
//         console.log(hexToRGB(hexColor));
//         console.log(indexOfLast);
//         rgbColor = `${hexToRGB(hexColor).slice(0, indexOfLast)}, ${shadeValue})`;
//         console.log(rgbColor);
//         div.style.backgroundColor = rgbColor;
//         console.log(div.style.backgroundColor);
//         div.setAttribute('data-color', hexColor);
//         console.log(div);
//     }
// }

// function hexToRGB(hexColor) {
//     let R = parseInt(hexColor.substring(1,3), 16);
//     let G = parseInt(hexColor.substring(3,5), 16);
//     let B = parseInt(hexColor.substring(5,7), 16);


//     R = parseInt(R * (100 + -10) / 100);
//     G = parseInt(G * (100 + -10) / 100);
//     B = parseInt(B * (100 + -10) / 100);

//     R = (R<255)?R:255;  
//     G = (G<255)?G:255;
//     B = (B<255)?B:255;  

//     R = Math.round(R)
//     G = Math.round(G)
//     B = Math.round(B)

//     return `rgb(${R}, ${G}, ${B})`;
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