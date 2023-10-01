const grid = document.querySelector('.grid');
let size = getComputedStyle(grid).getPropertyValue('--size');

for (i = 0; i < size * size; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("pixel")
    grid.appendChild(pixel)
}
    
pixel.addEventListener("mousemove", () => {
    pixel.style.backgroundColor = "gray";
    }); 
    
function clearGrid() {
    pixel.style.backgroundColor = "white";
}

const clearButton = document.querySelector(".clearButton")
clearButton.addEventListener("click", () => {
    clearGrid();
})


    // let isDrawing = false;

    // pixel.addEventListener("mousedown", () => {
    //     pixel.style.backgroundColor = "gray";
    //     isDrawing = true;
    // });
    
    // pixel.addEventListener("mousemove", () => {
    //     if (isDrawing) {
    //         pixel.style.backgroundColor = "gray";
    //     } 
    // });

    // pixel.addEventListener("mouseup", () => {
    //     if (isDrawing) {
    //         isDrawing = false;
    //     }
    // })

