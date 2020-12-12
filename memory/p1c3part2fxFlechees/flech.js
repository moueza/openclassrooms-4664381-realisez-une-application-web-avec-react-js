"use strict";
/**vanilla*/
const adults = [],
  minors = [];
const people = [];
people.forEach(function (person) {
  if (person.age >= 18) {
    adults.push(person);
  } else {
    minors.push(person);
  }
});

people.map(function (person) {
  return person.firstName;
});

/*modern*/
{
  const adults = [],
    minors = [];
  people.forEach((person) => {
    if (person.age >= 18) {
      adults.push(person);
    } else {
      minors.push(person);
    }
  });

  people.map((person) => person.firstName);
}

class Pers {
  constructor(firstnamm) {
    var firstName = firstnamm;
  }
}
//people.push(1);
//people.push(2);
var p1 = new Pers('Jean');
people.push(p1);
console.log(people.map((person) => person.firstName));
console.log(people);
