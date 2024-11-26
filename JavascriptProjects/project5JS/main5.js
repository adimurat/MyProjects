const Url = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1";


const getMovies = async () => {
    try{
        const response = await fetch(Url, {
            headers: {
                'X-API-KEY': 'c95ce71f-0213-4747-934e-0e6ac8a65da3',
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        render(data);
        search(data);
    }
    catch{
        console.log("error");
    }
}


const render = (info) => {
    const movie = document.querySelector(".movies-grid");
    movie.innerHTML = '';
    info.items.forEach(element => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie-card")
        movieEl.innerHTML = 
        `
            
                <div class="movie-poster">
                    <img src= "${element.posterUrl}" alt="" class="img">
                </div>
                <div class="info">
                    <div class="movie-title">${element.nameRu}</div>
                    <div class="movie-info">${element.genres.map((item) => {
                       return `${item.genre}`;
                    })}</div>
                    <div class="movie-rating">${element.ratingKinopoisk}</div>
                </div>
            
        `
        movie.appendChild(movieEl);
    });
    
}


const addSearchHandler = (movies) => {
    const input = document.querySelector(".inpt");
    const btn = document.querySelector(".btn");

    btn.addEventListener('click', () => {
        search(movies, input.value.trim().toLowerCase());
    });
};


const search = (movies, query) => {
    
    const movie = document.querySelector(".movies-grid");
    
    if(query) {
        const filterMovies = movies.items.filter(movie => movie.nameRu.toLowerCase().includes(query));
        if (filterMovies.length > 0) {
            render(filterMovies); // Отображение результатов
        } else {
            movieContainer.innerHTML = `<p>Ничего не найдено.</p>`;
        }
    } else {
        movieContainer.innerHTML = `<p>Введите название фильма для поиска.</p>`;
    }
    
    
}

getMovies();