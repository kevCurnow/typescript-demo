// With ES6, we can make custom types in conjunction with TypeScript while also simulating OOP. In traditional JavaScript, there are no types or classes. The 'classes' added with ES6 are just syntactic sugar.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Properties
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var phil = new Person(); // instantiate the class by setting type to Person, and calling the new keyword
phil.firstName = "Phil";
phil.lastName = "Donahue"; // setting the properties
// let someVariableName(variable declaration): Person(custom type) = new(instantiate new instance) Person()(call class with parens to invoke constructor function)
// Methods
var AnotherPerson = /** @class */ (function () {
    function AnotherPerson() {
    }
    AnotherPerson.prototype.sayHello = function () {
        console.log("Hello", this.firstName); //this.firstName refers to the firstName of the specific instance
    };
    //practice method
    AnotherPerson.prototype.sayHelloToFullname = function () {
        console.log("Hello", this.firstName + ' ' + this.lastName);
    };
    return AnotherPerson;
}());
var kenn = new AnotherPerson(); //instantiation
kenn.firstName = "Kenn"; // set firstName
kenn.sayHello(); // prints "Hello Kenn"
var sheriffHoller = new AnotherPerson();
sheriffHoller.firstName = "Sheriff";
sheriffHoller.lastName = "Holler";
sheriffHoller.sayHelloToFullname();
// KeyRule
// with methods, you don't have to use the function keyword
//Constructors
//Allow us to easily and effectively create an instance by allowing us to instantiate and set props at the same time
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name; // set value of gameName equal to value of constructor's arg
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro'); //instantiate and pass in values that satisfy the constructor
// without a constructor, you have to set each property one at a time on separate lines
// Inheritance
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false; //isSelfDriving is prop only accessible to subclass Automobile
myCar.topSpeed = 200;
myCar.make = "Volvo";
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animal));
var pooh = new Bear();
pooh.likesHoney = true;
pooh.species = "bear";
var tony = new Tiger();
tony.thoughtsOnFrostedFlakes = "They're great!";
tony.legs = 4;
//Parameter properties
// allow even more streamlined classes, declare property types and accessors in constructor params
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
var RefactoredStore = /** @class */ (function () {
    function RefactoredStore(name, city) {
        this.name = name;
        this.city = city;
    } //public accessor is required, don't have to bind props, TS infers there is a prop called name
    return RefactoredStore;
}());
var ikeaStore = new RefactoredStore('Ikea', 'Fishers');
//Note
// This type of constructor is used in almost every Angular component
//Accessors
//JavaScript has private and public accessors that are taken care of in the constructor.
//TS has more explicit private and public keywords
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
// newEmployee._salary = 0; // breaks, we can't access private properties outside of their class
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
//# sourceMappingURL=03-classes.js.map