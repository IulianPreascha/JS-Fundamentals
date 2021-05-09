//! Fuctions 

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descMoldova = describeCountry("Moldova", 3, "Chisinau");
const descEngalnd = describeCountry("England", 23, "London");
const descRussia = describeCountry("Russia", 31, "Moscow");

console.log(descMoldova);
console.log(descEngalnd);
console.log(descRussia);


