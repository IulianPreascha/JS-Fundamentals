const country = 'Moldova';
const continent = 'Eurasia';
let population = '2658000';

// console.log(country);
// console.log(continent);
// console.log(population);

const isIsland = false;
const language = 'Romanian';

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(population / 2);
population++;
// console.log(population);
population--;

const FinlandPopulation = 6.0e+6;
// console.log(FinlandPopulation > population);

const avarageCountryPopulation = 33.0e+6;
// console.log(population < avarageCountryPopulation);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);
// console.log(country + ' is in ' + continent + ', and its ' + population +' million people speak ' + language);

if(population > avarageCountryPopulation) {
    // console.log(`${country} population is above avarage.`)
} else {
    // console.log(`${country} population is ${avarageCountryPopulation - population} million below avarage`)
}

// const numNeighbours = +prompt('How many neighbour countries does your country have?', '');

// if(numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if(numNeighbours > 1) {
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No borders`);
// }

// if((population < 50.0e+6) && (language === "English") && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meeet your cirteria :(`);
// }

//! CODING CHALLENGE #3

// const dolphinsScore = (96 + 108 + 89)/3;
// const koalasScore = (88 + 91 + 110)/3;

// console.log((dolphinsScore).toFixed(2), (koalasScore).toFixed(2));

// if(dolphinsScore > koalasScore) {
//     console.log(`Dolphins have the bigger score (${(dolphinsScore).toFixed(2)})`);
// } else if(dolphinsScore === koalasScore) {
//     console.log(`The same score (${(dolphinsScore).toFixed(2)})`);
// } else if(dolphinsScore < koalasScore) {
//     console.log(`Koalas have the bigger score (${(koalasScore).toFixed(2)})`);
// }

// if((dolphinsScore > koalasScore) && (dolphinsScore >= 100)) {
//     console.log(`Dolphins are the WINERS !`);
// } else if((koalasScore > dolphinsScore) && (koalasScore >= 100)) {
//     console.log(`Koalas are the WINERS !`);
// } else if ((dolphinsScore === koalasScore) && (dolphinsScore >= 100)) {
//     console.log(`No winners here, teams have the same score`);
// }

// const scoreDolphins = (96 + 108 + 89)/3;
// const scoreKoalas = (88 + 91 + 110)/3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy 🏆`)
// } else if (scoreKoalas > scoreDolphins){
//     console.log(`Koalas win the trophy 🏆`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Both win the trophy! 🏆`)
// }

// BONUS 1

// const scoreDolphins = (97 + 112 + 80)/3;
// const scoreKoalas = (109 + 95 + 50)/3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win the trophy 🏆`)
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log(`Koalas win the trophy 🏆`)
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`Both win the trophy! 🏆`)
// } else {
//     console.log(`No one win the trophy 😔`)
// }

////////////////////////////////////

//! THE SWITCH STATEMENT

const yourlanguage = prompt(`What language do you speak?`, ``);

switch(yourlanguage) {
    case `chinese`:
    case `mandarian`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
         console.log(`Number 4`);
         break;
    case `arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
}