const gridContainer = document.getElementById('grid-container')

function createGrid(size){ 

    // clear grid
    gridContainer.innerHTML = '';


    // create n x n grid
    for(let i = 0; i < size * size; i++){

        const square = document.createElement('div');
        square.classList.add('square');

        // ensure grid is being filled
        square.style.flex = `0 0 calc(100% / ${size})`
        square.style.aspectRatio = '1 / 1';

        // hover effect
        square.addEventListener('mouseenter', () => {
            applyColorStep(square);
        });

        // put div inside container
        gridContainer.appendChild(square)
    } 
}

function randomRGB(){
    return Math.floor(Math.random() * 256);
}


function applyColorStep(square) {
    if(!square.dataset.baseR) {
        const r = randomRGB();
        const g = randomRGB();
        const b = randomRGB();
        
        square.dataset.baseR = r;
        square.dataset.baseG = g;
        square.dataset.baseB = b;
        square.dataset.steps = '1';
        square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
        return;
    }

    const r = square.dataset.baseR;
    const g = square.dataset.baseG;
    const b = square.dataset.baseB;

    let steps = parseInt(square.dataset.steps, 10);

    if(steps < 10) { 
        steps += 1;
    }

    square.dataset.steps = steps.toString();

    const alpha = steps / 10; 
    square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// make the default grid size 16x16
createGrid(16)

const resizeBtn = document.getElementById('resize-btn');
resizeBtn.addEventListener('click', () => {
    const input = prompt('Enter n x n grid size (MAX 100)');
    const size = parseInt(input);

    if(isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    createGrid(size);
})
