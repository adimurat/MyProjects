const btn = document.querySelector(".btn");
const Url = 'http://localhost:3000/pokemons';
const image = document.querySelector(".image");
const title = document.querySelector(".title");
const stats = document.querySelector(".info");

btn.addEventListener('click', () => {
    request();
})
const request = async () => {
    try {
        const response = await fetch(Url);
        const data = await response.json();
        const items = data[random(data)];
        title.textContent = items.name;
        image.src = items.image;
        image.style.width = '300px';
        const infos = items.baseStats;
        stats.innerHTML =
        `
                    HP: ${infos.hp}
                    Attack: ${infos.attack}
                    Defense: ${infos.defense}
                    Special Attack: ${infos.specialAttack}
                    Special Defense: ${infos.specialDefense}
                    Speed: ${infos.speed}
         `
            
    }
    catch{
        console.log('Error');
    }
}


const random = (info) => {
    return Math.floor(Math.random() * info.length);
}

/*const mm = (item) => {
    for(let i = 0; i < item.length; i++){
        return item[i].name;
    }
}*/



