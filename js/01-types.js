var username = "instructor";
// var declaration: type declaration = var initialization
var password = "Letmein1234!";
var instructorId = 5;
// just declare var and type, no initialization
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
// implicit typing
var greeting = "Hello";
// Number 
var age = 40;
var currentYear = 2020;
//TypeScript also supports ES6 octal literals -numbers that use base-8 (0 through 7), computer number systems
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
// String
var companyName;
companyName = "Eleven Fifty";
// Single or Double quotes are still fine, just stay consistent
var appName = 'Twitter';
appName = "Instagram";
// Booleans - same syntax
var isLoggedIn = true;
var isGoldUserLevel = true;
// Arrays - two different ways
var studentList = ['Tom', 'Tracy', 'Nikaya'];
var allScores = [100, 92, 95, 96];
// studentList is the more prevalent way
// Accessing indices works the same too
console.log("Student List:", studentList[0]);
// Any - ability to toggle off forced types if type is unknown during development
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// type for the variable can change with any, just like with JavaScript variables
// Void 
// No type, not really seen in variables, more in functions with no return value
function sayHelloToAll() {
    console.log("Hello to all!");
}
// Null and Undefined
// not used much on their own, but do in things like null checks
var undefinedVariable = undefined;
var nullVariable = null;
// Tuple
// array with different types (hence tuple from multiple)
// still need fixed items, need to be different types, might use for key value pair
// Declare type
var usernameAndId;
// Initialize
usernameAndId = [1, "kennisreally40"];
// have to write them in the exact same order as you declared
//Enums
// names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
// enums start at 0, but we can assign the starting index a different number
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType); //Two?
// Union Types
// Allow more flexibility with vars, still keep the intent of declaring a specific type
var x;
var y;
// now the vars can take on more than one type
x = '1234';
x = 1234;
// you have to be explicit about what types you want, these would throw an error because you haven't allowed for bools
// x = true; // type is not assignable
// y = false;
//# sourceMappingURL=01-types.js.map