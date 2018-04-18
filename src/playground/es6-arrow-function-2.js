// argument object = no longer bound with arrow functions

// ES5 - we can use arguments to check all defined paramenters
//       even if they aren'y defined in the prototype of the function
// better to stick with ES5 function format type.
const add = function(a, b) {
    // console.log(arguments);
    return a+b;
}
// console.log(add(55, 1, 100));

// ES6
//  - this keyword - no longer bound
// Wordaround 1: define a new variable (that to rebound the scope)
// Workaround 2: use arrow functions (this works)
// New tweak in ES6: 
// map vs forEach 
// => forEach ONLY loops within the array
// => map loops + can change all items within the array and 
//    and pass the list of all new elements to another array
const user = {
    name: 'Costin',
    cities: ['Constanta', 'Bucuresti', 'Londra'],
    printPlacesLived() {
        // const that = this; //(Workaround 1)
        // console.log(this.name);
        // console.log(this.cities);

        // this.cities.forEach(function(city){
        //     console.log(that.name + ' has lived in ' + city)
        // });
        // this.cities.forEach((city) => {
            // console.log(this.name + ' has lived in ' + city)
        // });

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

// Challenge

const multiplyer = {
    // numbers = array of numbers
    numbers: [1, 2, 2],
    // multiplyBy - single number
    multiplyBy: 4,
    // multiply  - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplyer.multiply());