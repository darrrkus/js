"use strict";

let numberOfFilms;
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

start();
detectPersonalLevel();
rememberMyMovie();
for(let i=0;i<3;i++){
    writeYourGenres();
}
showMyDB(personalMovieDB.privat);



function start() {
    do {
        numberOfFilms = +prompt("How many movies have you seen?", "");
    }
    while (!numberOfFilms || isNaN(numberOfFilms));
    personalMovieDB.count = numberOfFilms;
}
function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert("Too few movies!");
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        alert("You are classic viewer!");
    } else {
        alert("You are cinephil!");
    }
}

function rememberMyMovie() {
    let lastSeenTitle;
    do {
        lastSeenTitle = prompt(`Last seen movie`, "");
    } while (!lastSeenTitle || lastSeenTitle.length > 50);

    let lastSeenRate;
    do {
        lastSeenRate = +prompt(`Rate movie:`, "");

    } while (!lastSeenRate || isNaN(lastSeenRate));
    personalMovieDB.movies[lastSeenTitle] = lastSeenRate;

}

function writeYourGenres(){
    let genre;
    do {
        genre = prompt("Your favourite genre:","");
    } while(!genre);
    let genresCount = personalMovieDB.genres.length;
    personalMovieDB.genres[genresCount] = genre;
}

function showMyDB(isPrivate){
    if(!isPrivate){
        console.log(personalMovieDB);
    }
}


