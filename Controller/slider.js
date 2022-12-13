const slider = document.querySelector('#slider');
const price = document.querySelector('#price');
// const slider_progress = document.querySelector('#slider:before')

// console.log(progress);

slider.addEventListener('input',(e)=>{
    const valor = parseFloat(e.target.value)
    const perc = parseInt(e.target.value)

    const color =  `linear-gradient(90deg, hsl(174, 86%, 45%) ${0.01+0.01}%, hsl(224, 65%, 95%) ${perc-15}%)`;

    slider.style.cursor = "grabbing"
    price.textContent = valor.toFixed(2)
    slider.style.background = color;


})