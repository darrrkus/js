"use strict";

let numberOfFilms = +prompt("How many movies have you seen?", "");
if (numberOfFilms < 10) {
    alert("Too few movies!");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("You are classic viewer!");
} else {
    alert("You are cinephil!");
}
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
for (let i = 0; i < 2; i++) {
    let lastSeenTitle = prompt(`Last seen movie #${i + 1}?`, "");
    if (!lastSeenTitle || lastSeenTitle.length > 50) {
        i--;
        continue;
    } else {
        let lastSeenRate = prompt(`Rate movie #${i + 1}?`, "");
        personalMovieDB.movies[lastSeenTitle] = lastSeenRate;
    }
}




console.log(personalMovieDB);