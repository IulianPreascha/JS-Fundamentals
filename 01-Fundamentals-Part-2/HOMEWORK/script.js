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
// console.log(populations);

const percentages = [(percMoldova1).toFixed(2), (percChina1).toFixed(2), (percUSA1).toFixed(2), (percMoldova1).toFixed(2)];
// console.log(percentages);

//! Basic Array Operations (Methods)

const neighbours = ['Bulgary', 'Moldova', 'Serbia'];

neighbours.push('Utopia');
// console.log(neighbours);

neighbours.pop();
// console.log(neighbours);

if(!neighbours.includes('Germany')) {
    // console.log(`Probably not a central European country :D`);
}

neighbours[neighbours.indexOf('Moldova')] = 'Republic of Moldova';
// console.log(neighbours);

//! Coding Challene #2

const calcTip = bill => bill >= 50 && bill <= 300 ? bill *= 0.15 : bill *= 0.2;
// console.log(calcTip(300));

const bills = [125, 555, 44];
// tip1 = calcTip(bills[0]);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

//! Introduction to objects

const myCountry = {
    country: 'Moldova',
    capital: 'Chisinau',
    language: 'Romanian',
    population: 2.3,
    neighbours: ['Romania', 'Ucraine'],

    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },

    checkIsland: function() {
        return this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};


// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
// console.log(myCountry.population);

myCountry['population'] -= 2;
// console.log(myCountry.population);

//! Object Methods

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

//! CODING CHALLENGE #3

const markBMI = {
    fisrtName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const johnBMI = {
    fisrtName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// if(markBMI.calcBMI() > johnBMI.calcBMI()) {
//     console.log(`${markBMI.fisrtName}'s BMI (${(markBMI.calcBMI()).toFixed(1)}) is higher than ${johnBMI.fisrtName}'s (${(johnBMI.calcBMI()).toFixed(1)})!`);
// } else if (markBMI.calcBMI() < johnBMI.calcBMI()) {
//     console.log(`${johnBMI.fisrtName}'s BMI (${(johnBMI.calcBMI()).toFixed(1)}) is higher than ${markBMI.fisrtName}'s (${(markBMI.calcBMI()).toFixed(1)})!`);
// } else console.log(`Both have the same BMI (${(markBMI.calcBMI()).toFixed(1)})!`)

//! Loops

// for(let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }

//! Looping Arrays, Breaking and Continuing

const populations2 = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations2.length; i++) {
    const perc = (percentageOfWorld1(populations2[i])).toFixed(1);
    percentages2.push(perc);
}
// console.log(percentages2);

//! Looping Backwords and Loops in Loops

const listOfNeighbours = [
    [`Canada`, `Mexico`], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
];

// for( let i = 0; i < listOfNeighbours.length; i++) {
//     for(let y = 0; y < listOfNeighbours[i].length; y++) {
//         console.log(i, y, `Neighbour: ${listOfNeighbours[i][y]}`);
//     }
// }

for( let i = 0; i < listOfNeighbours.length; i++) {
    for( let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neigbours: ${listOfNeighbours[i][y]}`);
    }
}
