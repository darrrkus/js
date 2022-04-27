"use strict";

let numberOfFilms = +prompt("How many movies have you seen?","");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
let lastSeenTitle1 = prompt("Last seen movie #1?","");
let lastSeenRate1 = prompt("Rate #1?","");

let lastSeenTitle2 = prompt("Last seen movie #2?","");
let lastSeenRate2 = prompt("Rate #2?","");

console.log(personalMovieDB);

personalMovieDB.movies[lastSeenTitle1] = lastSeenRate1;
personalMovieDB.movies[lastSeenTitle2] = lastSeenRate2;
