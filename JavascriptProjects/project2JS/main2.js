const info = document.querySelectorAll(".count-item > h4");
const end = document.querySelector(".count-time");
console.log(info);

let time = new Date(2024, 11, 16, 19 , 0).getTime()


const countTime = () => {
    const now = new Date().getTime();

    const distance = time - now;

    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;


    let days = Math.floor(distance / day);
    let hours = Math.floor((distance % day) / hour);
    let minutes = Math.floor((distance % hour) / minute)
    let seconds = Math.floor((distance % minute) / 1000);


    const array = [days, hours, minutes, seconds];
    info.forEach((element, index) => {
        element.textContent = array[index];
        
    })

    if(distance < 0) {
        clearInterval(render);
        end.innerHTML = '<h4 style = color: "black";>Упс,Время вышло!</h4>'
    }
}

let render = setInterval(countTime, 1000);

countTime();
