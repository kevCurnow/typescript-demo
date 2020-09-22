//often associated with coding with intent
//you can't instantiate interfaces
// let a: Animal2 = new Animal2(); // apparently this should throw an error instantly? - because you're trying to use it as value, it's a type
// interfaces aren't used to create objects, they're used to shape them - type checking focuses on shape the values have
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
//Methods
function sayHello(name) {
    var someNum = 1 + 2; //code within curly braces is the method implementation, what happens when the function is called, includes the result
    var someOtherNum = 1 + 2;
    return name;
}
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on ", d);
    };
    return Apples;
}());
// new instance of the class and call the method
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=04-interfaces.js.map