
const gridContainer = document.getElementById('grid-container')
const gridSize = 16

for(let i = 0; i < gridSize * gridSize; i++){

    // create grid
    const square = document.createElement('div');
    square.classList.add('square');

    // hover effect
    square.addEventListener('mouseenter', () => {
    square.classList.add('hovered')
    });

    gridContainer.appendChild(square)
} 


