var _ = require('lodash');

var nerds = [
  { 'name': 'Gates', 'age': 67 },
  { 'name': 'Mark',   'age': 26 },
  { 'name': 'Jobs',   'age': 75 }
];

//1. _.pluck

var pluckedNerd = _.pluck(nerds, 'name');
console.log(pluckedNerd);

//>> [ 'Gates', 'Mark' ]

//2. _.find
var foundNerd = _.find(nerds, function(nerd) {
  return nerd.age < 40;
});
console.log(foundNerd);

//>> { name: 'Mark', age: 26 }

//3. _.forEach
_(nerds).forEach(function(nerd) {
  console.log(nerd);
}).value();
/*
>> { name: 'Gates', age: 67 }
>> { name: 'Mark', age: 26 }
>> { name: 'Jobs', age: 75 }
*/
_.forEach(foundNerd, function(nerd, key) {
  console.log(nerd, key);
});
/*
>> Mark name
>> 26 'age'
*/

//4. _.shuffle
var shuffledNumbers = _.shuffle(nerds);
console.log(shuffledNumbers)
//>> [ { name: 'Gates', age: 67 },  { name: 'Jobs', age: 75 },  { name: 'Mark', age: 26 } ]

//5. _.random
console.log(_.random(0, 7));
// Integer between 0 and 7
console.log(_.random(7));
// Integer between 0 and 7 too
console.log(_.random(7, true));
// Floating between 0 and 7
console.log(_.random(2.4, 9.2));
// Floating between 2.4 and 9.2

//6. _trunc
var truncated = _.trunc('I am a proud nerd, are you?', 10);
console.log(truncated);

//7. _.snakeCase
var snaked = _.snakeCase('Bill Gates');
console.log(snaked);
//>> bill_gates

//8. _.pad
var padded = _.pad('steve', 8, '_');
console.log(padded);
//> _steve__

//9. _.flatten
var flatten = _.flatten([1, [2, 3, [4]]]);
var deeplyFlattend = _.flatten([1, [2, 3, [4]]], true);
console.log(flatten, deeplyFlattend);
//>> [ 1, 2, 3, [ 4 ] ] [ 1, 2, 3, 4 ]

//10. _.take / _.takeRight
var takeOne = _.take([1, 2, 3]);
var takeTwo = _.take([1, 2, 3], 2);
console.log(takeOne, takeTwo);
//>> [ 1 ] [ 1, 2 ]


var takeOneFromRight = _.takeRight([1, 2, 3]);
var takeTwoFromRight = _.takeRight([1, 2, 3], 2);
console.log(takeOneFromRight, takeTwoFromRight);
//>> [ 3 ] [ 2, 3 ]
