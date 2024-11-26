const btn = document.querySelector(".btn");
const color = document.querySelector(".clr");
btn.addEventListener('click', () => {
    let colors = generatorColors();
    color.textContent = colors;
    document.body.style.backgroundColor = colors;
    
})


const random = () => {
    return Math.floor(Math.random() * hexColors.length);
}


const hexColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const generatorColors = () => {
    let hex = '#';
    for(let i = 0; i < 6; i++){
        hex += hexColors[random()];
    }
    return hex;
   
}



