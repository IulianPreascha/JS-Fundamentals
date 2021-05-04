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

const numNeighbours = +prompt('How many neighbour countries does your country have?', '');

if(numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if(numNeighbours > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}


