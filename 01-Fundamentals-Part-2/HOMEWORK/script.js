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

console.log(percMoldova1, percChina1, percUSA1);

console.log(percMoldova2, percChina2, percUSA2);
