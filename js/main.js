const ROW = document.querySelector('.carousel-container');
const MOVIES = document.querySelectorAll('.movie');
const LEFT_ARROW = document.getElementById('left-arrow');
const RIGHT_ARROW = document.getElementById('right-arrow');

RIGHT_ARROW.addEventListener('click', () => {

    ROW.scrollLeft += ROW.offsetWidth;
    
    const indicatorActive = document.querySelector('.carousel-button--active');

    if ( indicatorActive.nextElementSibling ){
        indicatorActive.nextSibling.classList.add('carousel-button--active');
        indicatorActive.classList.remove('carousel-button--active');
    }

});

LEFT_ARROW.addEventListener('click', () => {

    ROW.scrollLeft -= ROW.offsetWidth;
    
    const indicatorActive = document.querySelector('.carousel-button--active');

    if ( indicatorActive.previousSibling ){
        indicatorActive.previousSibling.classList.add('carousel-button--active');
        indicatorActive.classList.remove('carousel-button--active');
    }

});

// number of movies shown on desktop screen
const VISIBLE_MOVIES = 5;

const NUMBER_PAGES = Math.ceil(MOVIES.length / VISIBLE_MOVIES);

for ( let i = 0; i < NUMBER_PAGES; i++ ){

    const indicator = document.createElement('button');

    document.querySelector('.recommended-movies__controls').appendChild(indicator).setAttribute('class', 'carousel-button');

    if ( i === 0 ){
        indicator.classList.add('carousel-button--active');
    }
    
    indicator.addEventListener('click', (e) => {

        ROW.scrollLeft = i * ROW.offsetWidth;

        document.querySelector('.carousel-button--active').classList.remove('carousel-button--active');

        e.target.classList.add('carousel-button--active');

    });

}

MOVIES.forEach((movie) =>{
    movie.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            MOVIES.forEach(MOVIES => movie.classList.remove('movie--hover'));
            element.classList.add('movie--hover');
        }, 300);
    });
});

ROW.addEventListener('mouseleave', () => {
    MOVIES.forEach(movie => movie.classList.remove('movie--hover'));
});