// const country = 'Moldova';
// const continent = 'Eurasia';
// let population = '2658000';

// // console.log(country);
// // console.log(continent);
// // console.log(population);

// const isIsland = false;
// const language = 'Romanian';

// // console.log(typeof isIsland);
// // console.log(typeof population);
// // console.log(typeof country);
// // console.log(typeof language);

// // console.log(population / 2);
// population++;
// // console.log(population);
// population--;

// const FinlandPopulation = 6.0e+6;
// // console.log(FinlandPopulation > population);

// const avarageCountryPopulation = 33.0e+6;
// // console.log(population < avarageCountryPopulation);

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// // console.log(description);
// // console.log(country + ' is in ' + continent + ', and its ' + population +' million people speak ' + language);

// if(population > avarageCountryPopulation) {
//     // console.log(`${country} population is above avarage.`)
// } else {
//     // console.log(`${country} population is ${avarageCountryPopulation - population} million below avarage`)
// }

// // const numNeighbours = +prompt('How many neighbour countries does your country have?', '');

// // if(numNeighbours === 1) {
// //     console.log(`Only 1 border!`);
// // } else if(numNeighbours > 1) {
// //     console.log(`More than 1 border`);
// // } else {
// //     console.log(`No borders`);
// // }

// // if((population < 50.0e+6) && (language === "English") && !isIsland) {
// //     console.log(`You should live in ${country} :)`);
// // } else {
// //     console.log(`${country} does not meeet your cirteria :(`);
// // }

// //! CODING CHALLENGE #3

// // const dolphinsScore = (96 + 108 + 89)/3;
// // const koalasScore = (88 + 91 + 110)/3;

// // console.log((dolphinsScore).toFixed(2), (koalasScore).toFixed(2));

// // if(dolphinsScore > koalasScore) {
// //     console.log(`Dolphins have the bigger score (${(dolphinsScore).toFixed(2)})`);
// // } else if(dolphinsScore === koalasScore) {
// //     console.log(`The same score (${(dolphinsScore).toFixed(2)})`);
// // } else if(dolphinsScore < koalasScore) {
// //     console.log(`Koalas have the bigger score (${(koalasScore).toFixed(2)})`);
// // }

// // if((dolphinsScore > koalasScore) && (dolphinsScore >= 100)) {
// //     console.log(`Dolphins are the WINERS !`);
// // } else if((koalasScore > dolphinsScore) && (koalasScore >= 100)) {
// //     console.log(`Koalas are the WINERS !`);
// // } else if ((dolphinsScore === koalasScore) && (dolphinsScore >= 100)) {
// //     console.log(`No winners here, teams have the same score`);
// // }

// // const scoreDolphins = (96 + 108 + 89)/3;
// // const scoreKoalas = (88 + 91 + 110)/3;
// // console.log(scoreDolphins, scoreKoalas);

// // if (scoreDolphins > scoreKoalas) {
// //     console.log(`Dolphins win the trophy 🏆`)
// // } else if (scoreKoalas > scoreDolphins){
// //     console.log(`Koalas win the trophy 🏆`)
// // } else if (scoreDolphins === scoreKoalas) {
// //     console.log(`Both win the trophy! 🏆`)
// // }

// // BONUS 1

// // const scoreDolphins = (97 + 112 + 80)/3;
// // const scoreKoalas = (109 + 95 + 50)/3;
// // console.log(scoreDolphins, scoreKoalas);

// // if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
// //     console.log(`Dolphins win the trophy 🏆`)
// // } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
// //     console.log(`Koalas win the trophy 🏆`)
// // } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
// //     console.log(`Both win the trophy! 🏆`)
// // } else {
// //     console.log(`No one win the trophy 😔`)
// // }

// ////////////////////////////////////

// //! THE SWITCH STATEMENT

// // const yourlanguage = prompt(`What language do you speak?`, ``);

// // switch(yourlanguage) {
// //     case `chinese`:
// //     case `mandarian`:
// //         console.log(`MOST number of native speakers!`);
// //         break;
// //     case `spanish`:
// //         console.log(`2nd place in number of native speakers`);
// //         break;
// //     case `english`:
// //         console.log(`3rd place`);
// //         break;
// //     case `hindi`:
// //          console.log(`Number 4`);
// //          break;
// //     case `arabic`:
// //         console.log(`5th most spoken language`);
// //         break;
// //     default:
// //         console.log(`Great language too :D`);
// // }

// //! THE CONDITIOAL (TERNARY) OPERATOR

// // console.log(`${country} population is ${population > 33.0e+6 ? `above` : `below`} avarage.`);

// //! CODING CHALLENGE #4

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//! Coding Challenge #1, #2

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const calcBMI = function (mass, height) {
  return mass / height ** 2;
};

const markBMI = calcBMI(markMass, markHeight).toFixed(1);
const johnBMI = calcBMI(johnMass, johnHeight).toFixed(1);

const biggestBMI = function (markBMI, johnBMI) {
  if (markBMI > johnBMI) {
    return `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`;
  } else if (markBMI < johnBMI) {
    return `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`;
  } else {
    return `Both have the same ${markBMI}`;
  }
};

// console.log(markBMI, johnBMI);
// console.log(biggestBMI(markBMI, johnBMI));

//! Coding Challenge #3

const dolphinsScore = [97, 112, 101];
const koalasScore = [109, 95, 123];

const avarageScore = function (score) {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  return sum / 3;
};

const dolphins = +avarageScore(dolphinsScore).toFixed(1);
const koalas = +avarageScore(koalasScore).toFixed(1);

const winner = function (dolphinsAvarageScore, koalasAvarageScore) {
  if (
    dolphinsAvarageScore > koalasAvarageScore &&
    dolphinsAvarageScore >= 100
  ) {
    return `Dolphins are the winner's 🏋️‍♀️`;
  } else if (
    dolphinsAvarageScore < koalasAvarageScore &&
    koalasAvarageScore >= 100
  ) {
    return `Koalas are the winner's 🏋️‍♀️`;
  } else if (
    dolphinsAvarageScore === koalasAvarageScore &&
    dolphinsAvarageScore >= 100
  )
    return `No winner today, both have the same score :(`;
};

// console.log(winner(dolphins, koalas));

//! Coding Challenge #4

const bill = [275, 40, 430];
const tip = [];

const calcTip = function (bill) {
  for (let i = 0; i < bill.length; i++) {
    const tips =
      bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2;
    tip.push(tips);
  }
};

calcTip(bill);
// console.log(tip);

// console.log(
//   `The bill was ${bill[0]}, the tip was ${tip[0]}, and the total value ${
//     bill[0] + tip[0]
//   }`
// );

const log = function (bill, tip) {
  for (let i = 0; i < bill.length; i++) {
    console.log(
      `The ${i + 1} bill was ${bill[i]}, the tip was ${
        tip[i]
      }, and the total value ${bill[i] + tip[i]}.`
    );
  }
};
// console.log(log(bill, tip));

//! Coding Challenge #1

const scoreA = [44, 23, 71];
const scoreB = [65, 54, 49];

const calcAvarage = score => {
  let sum = 0;
  for (i = 0; i < score.length; i++) {
    sum += score[i];
  }
  return sum / 3;
};

const avgScoreA = calcAvarage(scoreA);
const avgScoreB = calcAvarage(scoreB);

const chechWinner = function (avgA, avgB) {
  if (avgA > avgB) {
    return `Dolphins win (${avgA} vs ${avgB})`;
  } else if (avgA < avgB) {
    return `Koalas win (${avgB} vs ${avgA})`;
  } else return `No winner today`;
};

const winners = chechWinner(avgScoreA, avgScoreB);

console.log(winners);
