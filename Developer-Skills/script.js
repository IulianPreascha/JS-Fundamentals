'use strict';

//! Problem 1

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 13, 9, 5];

// const calcTempAmplitute = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amptitude = calcTempAmplitute(temperatures);
// console.log(amptitude);

//! Problem 2

// const calcTempAmplituteNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amptitudeNew = calcTempAmplituteNew([3, 5, 1], [9, 0, 5]);
// console.log(amptitudeNew);
