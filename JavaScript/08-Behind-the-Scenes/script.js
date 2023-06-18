'use strict';

function calc(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and I'm a millenial!`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Sami';
console.log(calc(1992));
