// Basic functions
function demoFunction(someNum) {
    return someNum;
}
demoFunction(1); //We can call the function with a number as the argument
demoFunction("stuff"); //We can call the function with a string as an argument
// demoFunction(1, "Stuff"); // We can add arguments that weren't originally declared (works in js but only returns 1)
// TypeScript provides a bit more constraint
// Type Safety in Arguments
// TS allows types for params and limits to number of args
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
addNumbers(1, 2); //Works - correct number of args and right type
// addNumbers(1, 2, 3); // Error - too many args
// addNumbers(1, 2, 3, "Foo"); // Error - too many args and strings are acceptable as args for this function
// Now we have type safety and are prevented from adding unneeded args
function concatFunction(firstName, lastName) {
    return firstName.concat(' ', lastName);
}
concatFunction("Kevin", "Curnow"); // "Kevin Curnow"
// Return Types
// JavaScript
function hello(greetingString) {
    return greetingString;
}
// hello(1); // works in JavaScript - returns 1
// TS helps us make more stringent requirements with return types
function sayHello1(name) {
    return name;
}
// first create type for param
// colon followed by type denotes return type
sayHello1("Kenn"); //argument satisfies the return type - this works
// sayHello(1); //argument doesn't satisfy return type - code breaks
// great thing is - compiler will throw an error before the code is run!
function validateUserInfo(username, password) {
    if (username === "elevenfiftyuser" && password === "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
}
console.log(validateUserInfo("elevenfiftyuser", "Letmein1234!")); // true
// Optionals
// allow for flexibility in params, can allow an arg to be left out by declaring them with a question mark after
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
// numOne and numTwo are required, but someString is optional
addNumbersWithOptional(1, 2); //someString is not required
addNumbersWithOptional(1, 2, "This is optional"); // can also call function with the optional argument provided
// type on someString is union type string | undefined - if you provide a value, it's string, if you don't, it's undefined
//KEY RULE
//Optional params must go after all required params
function concatFullName(first, last, middle) {
    if (middle === undefined) {
        return first.concat(' ', last);
    }
    else {
        return first.concat(' ', middle, ' ', last);
    }
}
//# sourceMappingURL=02-functions.js.map