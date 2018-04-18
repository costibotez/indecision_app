
// ES5 function - v1
function square1(x) {
    return x * x;
}
console.log('ES5_v1: ' + square1(4));

// ES5 function - v2
const square2 = function(x) {
    return x * x;
}
console.log('ES5_v2: ' + square2(5));

// ES6 - arrow function (they are annonymous)
const square3 = (x) => {
    return x * x;
}
console.log('ES6_v1: ' + square3(6));

// ES6 - arrow function feature
// - when you have only one line of return, you can use this format
const square4 = (x) => x * x;
console.log('ES6_v2: ' + square4(7));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') => Mike

// 1st Method:
const getFirstName = (name) => {
    const firstName = name.split(' ')[0];
    return firstName;
}
console.log('Challenge 1: ' + getFirstName('Costin Botez'));

// 2nd Method
const getFirstName2 = (name) => name.split(' ')[0]
console.log('Challenge 2: ' + getFirstName2('Costin Botez'));
