'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
