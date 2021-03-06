let username: string = "instructor";
// var declaration: type declaration = var initialization
let password: string = "Letmein1234!";
let instructorId: number = 5;

// just declare var and type, no initialization
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

// implicit typing
let greeting = "Hello";

// Number 
let age: number = 40;
let currentYear: number = 2020;
//TypeScript also supports ES6 octal literals -numbers that use base-8 (0 through 7), computer number systems
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

// String
let companyName: string;
companyName = "Eleven Fifty"
// Single or Double quotes are still fine, just stay consistent
let appName: string = 'Twitter';
appName = "Instagram";

// Booleans - same syntax
let isLoggedIn: boolean = true;
let isGoldUserLevel: boolean = true;

// Arrays - two different ways
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
let allScores: Array<number> = [100, 92, 95, 96];
// studentList is the more prevalent way
// Accessing indices works the same too
console.log("Student List:", studentList[0]);

// Any - ability to toggle off forced types if type is unknown during development
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// type for the variable can change with any, just like with JavaScript variables

// Void 
// No type, not really seen in variables, more in functions with no return value
function sayHelloToAll() : void {
    console.log("Hello to all!")
}

// Null and Undefined
// not used much on their own, but do in things like null checks
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

// Tuple
// array with different types (hence tuple from multiple)
// still need fixed items, need to be different types, might use for key value pair
// Declare type
let usernameAndId: [number, string];
// Initialize
usernameAndId = [1, "kennisreally40"];
// have to write them in the exact same order as you declared

//Enums
// names to numeric values
enum WeaponType {Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword
// enums start at 0, but we can assign the starting index a different number
enum CardType {Ace = 1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType); //Two?

// Union Types
// Allow more flexibility with vars, still keep the intent of declaring a specific type
let x: number | string;
let y: number | null;
// now the vars can take on more than one type
x = '1234';
x = 1234;
// you have to be explicit about what types you want, these would throw an error because you haven't allowed for bools
// x = true; // type is not assignable
// y = false;