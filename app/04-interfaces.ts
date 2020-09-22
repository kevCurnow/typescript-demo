//often associated with coding with intent

//Properties
interface Animal2 {
    name: string;
    numberOfLegs: number;
}
//you can't instantiate interfaces
// let a: Animal2 = new Animal2(); // apparently this should throw an error instantly? - because you're trying to use it as value, it's a type
// interfaces aren't used to create objects, they're used to shape them - type checking focuses on shape the values have

let lassie: Animal2 = { // if you don't implement the properties of the interface, you'll get an error
    name: 'Lassie',
    numberOfLegs: 4
}

//Methods
function sayHello(name: string) : string { //up until the curly brace is the method/function signature: function name, name parameter and it's type, and a return type of string
    var someNum = 1 + 2; //code within curly braces is the method implementation, what happens when the function is called, includes the result
    var someOtherNum = 1 + 2;
    return name;
}

//With a class, we could provide a full implementation of the method. Interfaces we just create the method signature. Then the object will provide its own implement of the method, its own logic.

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

class Apples implements Product { //implements means we are imposing the shape, it's required to hold those methods and props
    name: 'Apples';
    price: 5.50

    setTimeOfPurchase(d: Date) { // implement the method in the class, provide basic implementation by logging date to the console
        console.log("Apples purchased on ", d);
    }
}
// new instance of the class and call the method
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));