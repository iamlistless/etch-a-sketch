const gridContainer = document.querySelector(".gridContainer")

for (i = 0; i < 256; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("pixel")
    gridContainer.appendChild(pixel)
}
    

