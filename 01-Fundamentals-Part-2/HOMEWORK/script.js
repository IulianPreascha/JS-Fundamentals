//! Fuctions 

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descMoldova = describeCountry("Moldova", 3, "Chisinau");
const descEngalnd = describeCountry("England", 23, "London");
const descRussia = describeCountry("Russia", 31, "Moscow");

// console.log(descMoldova);
// console.log(descEngalnd);
// console.log(descRussia);

//! Functions Deckarations vs. Expressions

// function percentageOfWorld1(country, population) {
//     return `${country} has ${population} million people, so it's about ${(+population/7900*100).toFixed(1)}% of the world population`;
// }
// console.log(percentageOfWorld1(`China`, 1441));

function percentageOfWorld1 (population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percMoldova1 = percentageOfWorld1(3);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

const percMoldova2 = percentageOfWorld2(3);
const percChina2 = percentageOfWorld2(1441);
const percUSA2 = percentageOfWorld2(332);

// console.log(percMoldova1, percChina1, percUSA1);

// console.log(percMoldova2, percChina2, percUSA2);

//! Arrow functions

const percentageOfWorld3 = population => {
    return (population / 7900) * 100;
}

const percMoldova3 = percentageOfWorld3(3);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

// console.log(percMoldova3, percChina3, percUSA3);

//! Functions calling other functions

// const describePopulation = (country, population) => {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${(percentage).toFixed(2)}% of the world.`;
// }

// const descPopulationMoldova = describePopulation("Moldova", 3);
// const descPopulationEngalnd = describePopulation("England", 23);
// const descPopulationRussia = describePopulation("Russia", 31);

// console.log(descPopulationMoldova);
// console.log(descPopulationEngalnd);
// console.log(descPopulationRussia);

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${(percentage).toFixed(2)}% of the world.`;
    console.log(description);
}

// describePopulation('Portugal', 10);
// describePopulation(`China`, 1441);
// describePopulation(`USA`, 332);

//! Coding Challene #1

const calcAvarage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAvarage(44, 23, 71);
let scoreKoalas = calcAvarage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if(avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else if(avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log(`No winner today ☹`);
    }
}
// console.log(`Test 1`);
// checkWinner(scoreDolphins, scoreKoalas);

//Test 2
scoreDolphins = calcAvarage(85, 54, 41);
scoreKoalas = calcAvarage(23, 34, 27);
// console.log(`Test 2`);

// checkWinner(scoreDolphins, scoreKoalas);

// littleChanges;

//! Introducion to Arrays

const populations = [`Moldova`, `China`, `USA`, `Moldova`];
console.log(populations);

const percentages = [(percMoldova1).toFixed(2), (percChina1).toFixed(2), (percUSA1).toFixed(2), (percMoldova1).toFixed(2)];
console.log(percentages);