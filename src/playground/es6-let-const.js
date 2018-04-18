var nameVar = 'Name';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// let&const have a block scope. IF they are defined inside an if/for/while for function,
// they will only live there.
// var is ES5 whereas let&const are ES6
// usually we can use const, but if we reassign a variable that can be let.
// const is read-only

let nameLet = 'jan';
nameLet = 'yan';
const text = 'text';
console.log('nameLet', nameLet);

let name = "Costin Botez";
let firstName;

if(name) {
    firstName = name.split(' ');
    console.log(firstName);
}
console.log(firstName);