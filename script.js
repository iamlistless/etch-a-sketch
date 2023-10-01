const defaultGridSize = 32; 

let currentGridSize = defaultGridSize;

const grid = document.getElementById('grid');

// let gridStyles = getComputedStyle(grid);
// let gridSize = gridStyles.getPropertyValue('--size');

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i = 0; i < gridSize * gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        grid.appendChild(pixel); 

        // pixel.addEventListener("mousemove", () => {
        //     pixel.style.backgroundColor = 'gray';
        // }); 
    }
};

window.onload = () => {
    createGrid(defaultGridSize)
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
// const clearButton = document.querySelector(".clearButton")
//     clearButton.addEventListener("click", () => {
//     clearGrid();
// })

// function makeGridSize() {
//     let inputSize = prompt();
//     return inputSize;
// }

