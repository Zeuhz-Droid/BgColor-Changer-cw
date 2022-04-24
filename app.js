let sum = 0;  

const makeBgColor = function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    sum = r + g + b;
    return bgColor = `rgb(${r}, ${g}, ${b})`;
}

const button = document.querySelector('.btn');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    document.body.style.backgroundColor = makeBgColor();
    h1.innerText = bgColor;

    console.log(sum);
    if (sum <= 200) {
        h1.style.color = 'white';
        button.style.color = 'white';
        button.style.border = '1px solid white';
    } else {
        h1.style.color = 'black';
        button.style.color = 'black';
        button.style.border = '1px solid black';
    }
})

//DONE