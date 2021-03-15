"use strict";
//My name
var myName = 'Jeremiah';
console.log(myName);
// Number of states
var numOfStates = 50;
console.log(numOfStates);
// Adds 4 and 5
var sum = 4 + 5;
console.log(sum);
// Alerts 'Hello World'
function sayHello() {
    alert('Hello World');
}
;
sayHello();
// Checks if age is greater than 21 to view the page
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ' you aren\'t old enough to view this page!');
    }
}
;
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
// Array of my favorite vegetables
var myFavVegs = ['Broccoli', 'Jalapeno', 'Green Beans', 'Potatoes', 'Sweet Potato'];
// Uses loop to display my favorite vegetables
for (var i = 0; i < myFavVegs.length; i++) {
    console.log(myFavVegs[i]);
}
;
// Create an object named pet
var pet = {
    name: 'Midnight', breed: 'Maine Coon'
};
console.log(pet.name, pet.breed);
// Create an array of 5 objects
var nameAge = [
    { name: 'Sally', age: 24 },
    { name: 'Mike', age: 17 },
    { name: 'Julie', age: 18 },
    { name: 'Benny', age: 21 },
    { name: 'Samson', age: 28 },
];
// Loops through array to call checkAge function
for (var i = 0; i < nameAge.length; i++) {
    checkAge(nameAge[i].name, nameAge[i].age);
}
;
// Create function that checks length of the string
function getLength(word) {
    return word.length;
}
var wordLength = getLength('Hello World');
if (wordLength % 2 === 0) {
    console.log('This world is nice and even!');
}
else {
    console.log('This world is an odd place!');
}
;
