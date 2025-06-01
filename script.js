const container = document.querySelector('.container');
let n = 16;
const gridSize = document.querySelector('.grid');
gridSize.addEventListener('click', (e) => {
        let size = prompt('Enter the number of squares per side (1-100): ');
        size = parseInt(size);
        if (!isNaN(size) && size > 0 && size <= 100) {
                n = size;
                container.innerHTML = '';
                grid(n) 
        
        } else {
                alert('Please enter a valid number between 1 and 100.');
        }
})



function grid() {
        for (let i = 0; i < n * n; i++) {
                const div = document.createElement('div');
                div.classList.add('box');
                div.style.width = `${500 / n}px`;
                div.style.height = `${500 / n}px`;
                container.appendChild(div);
    };
};

grid();

container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('box')) {
                e.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        };
}
);

const resetButton = document.querySelector('.clear');
resetButton.addEventListener('click', () => {
        container.innerHTML = '';
        grid(n);
})