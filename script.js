const container = document.querySelector('.container');
// const div = document.createElement('div');
// let box = div.classList.add('box');

function grid() {
        for (let i = 0; i < 256; i++) {
                const div = document.createElement('div');
                div.classList.add('box');
                container.appendChild(div);
    };
};

grid();
