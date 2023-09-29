const gridContainer = document.querySelector(".gridContainer");

for (i = 0; i < 256; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("pixel")
    gridContainer.appendChild(pixel)
    
    pixel.addEventListener("mousemove", () => {
        pixel.style.backgroundColor = "gray";
        }); 

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
}

