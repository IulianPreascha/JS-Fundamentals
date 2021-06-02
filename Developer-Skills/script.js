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

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    value: Number(prompt('Degrees celsius:')),
  };

  console.log(measurement);
  //   console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// console.log(measureKelvin());

const calcTempAmplituteBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// const amptitudeBug = calcTempAmplituteBug([3, 5, 1], [9, 4, 5]);
// console.log(amptitudeBug);

//! Coding Challenge #1

//! My code

// const maxTemp = [17, 21, 23];

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]}ºC in ${i + 1} days`);
//   }
// };

// printForecast(maxTemp);

//! Good Code

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr1, arr2) {
  let str = '';
  const data = arr1.concat(arr2);
  for (let i = 0; i < data.length; i++) {
    str += `${data[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data1, data2);
