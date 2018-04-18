class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
        // console.log('test');
    }
    getGreeting() {
        //ES5
        // return 'Hi. I am ' + this.name;
        //ES6 use back quote to inject JS. Each JS has to be wrapped like ${}
        return `Hi. I am ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} year${(this.age>1) ? 's' : ''} old`;
    }
    
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
}

class Traveler extends Person {
    
    constructor(name, age, location) {
        super(name, age);

        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasLocation()) {
            description += ' I am visiting from ' + this.location;
        }
        return description;
    }

}

const me = new Person('Costin Botez');
console.log(me.getDescription());

const me2 = new Student('Theo Platica', 26, '');
console.log(me2.getDescription());
console.log(me2.hasMajor());

const me3 = new Traveler('Alex', 25);
console.log(me3.getDescription());
