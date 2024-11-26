const date = document.getElementById('weathers');







const getDateTime = () => {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    hour = hour % 12;
    if(minute < 10){
        minute = "0" + minute;
    }

    let newDays = days[now.getDay()];
    return `${newDays}, ${hour}:${minute}`; 
  
};

const updateDateTime = () => {
    const currentTime = getDateTime();
    date.innerHTML = currentTime;
    localStorage.setItem('lastTime', currentTime);
};


const lastTime = localStorage.getItem('lastTime');
if (lastTime) {
    date.innerHTML = lastTime;
}


setInterval(updateDateTime, 1000);

