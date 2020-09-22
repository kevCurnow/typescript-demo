// With ES6, we can make custom types in conjunction with TypeScript while also simulating OOP. In traditional JavaScript, there are no types or classes. The 'classes' added with ES6 are just syntactic sugar.

// Properties
class Person { //the class keyword here is part of ES6
    firstName: string;
    lastName: string; //TS allows us to set types of our properties as you would do in C#.
}
let phil: Person = new Person(); // instantiate the class by setting type to Person, and calling the new keyword

phil.firstName = "Phil";
phil.lastName = "Donahue"; // setting the properties

// let someVariableName(variable declaration): Person(custom type) = new(instantiate new instance) Person()(call class with parens to invoke constructor function)

// Methods
class AnotherPerson {
    firstName: string;
    lastName: string; // variables should be above methods

    sayHello(){ //our method - a function that prints "Hello" and then a name to the console
        console.log("Hello", this.firstName); //this.firstName refers to the firstName of the specific instance
    }

    //practice method
    sayHelloToFullname(){
        console.log("Hello", this.firstName + ' ' + this.lastName);
    }
}

let kenn: AnotherPerson = new AnotherPerson(); //instantiation
kenn.firstName = "Kenn"; // set firstName
kenn.sayHello(); // prints "Hello Kenn"
let sheriffHoller: AnotherPerson = new AnotherPerson();
sheriffHoller.firstName = "Sheriff";
sheriffHoller.lastName = "Holler";
sheriffHoller.sayHelloToFullname();

// KeyRule
// with methods, you don't have to use the function keyword

//Constructors
//Allow us to easily and effectively create an instance by allowing us to instantiate and set props at the same time
class Game { //new class Game
    constructor(name: string, maker: string){ //create constructor that accepts two params of type string
        this.gameName = name; // set value of gameName equal to value of constructor's arg
        this.gameMaker = maker;
    }
    gameName: string; // set up property called gameName
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro') //instantiate and pass in values that satisfy the constructor
// without a constructor, you have to set each property one at a time on separate lines


// Inheritance
class Vehicle { // Parent class that holds the universal props
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle { // extends keyword declares it as a subclass that will inherit props/methods
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false; //isSelfDriving is prop only accessible to subclass Automobile
myCar.topSpeed = 200;
myCar.make = "Volvo";

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

class Animal {
    species: string;
    legs: number;
    isNice: boolean;
}

class Bear extends Animal {
    likesHoney: boolean;
}

class Tiger extends Animal {
    thoughtsOnFrostedFlakes: string;
}

let pooh: Bear = new Bear();
pooh.likesHoney = true;
pooh.species = "bear";

let tony: Tiger = new Tiger();
tony.thoughtsOnFrostedFlakes = "They're great!";
tony.legs = 4;

//Parameter properties
// allow even more streamlined classes, declare property types and accessors in constructor params
class Store {
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}

let ikea: Store = new Store('Ikea', 'Fishers');

class RefactoredStore {
    constructor(public name: string, public city: string){} //public accessor is required, don't have to bind props, TS infers there is a prop called name
}

let ikeaStore: RefactoredStore = new RefactoredStore('Ikea', 'Fishers');

//Note
// This type of constructor is used in almost every Angular component

//Accessors
//JavaScript has private and public accessors that are taken care of in the constructor.
//TS has more explicit private and public keywords

class Employee extends Person{
    private _salary: number; //private keyword for private prop, common to see them start with underscore

    getSalary(): string { // convert salary to string
        return this._salary.toString();
    }

    setSalary(newSalary: number){ // sets a new salary
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
// newEmployee._salary = 0; // breaks, we can't access private properties outside of their class
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);