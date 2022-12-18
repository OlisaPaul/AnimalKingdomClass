const Animal = require("./BaseClass/animal");
const Amphibian = require("./GeneralClasses/amphibian");
const Arthropoda = require("./GeneralClasses/arthropoda");
const Aves = require("./GeneralClasses/aves");
const Fish = require("./GeneralClasses/fish");
const Mammal = require("./GeneralClasses/mammal");
const Reptiles = require("./GeneralClasses/reptiles");

// For creating new instances of the general classes
const frog = new Amphibian("frog");
const cockroach = new Arthropoda("cockroach");
const pigeon = new Aves("bird");
const titus = new Fish("titus");
const whale = new Mammal("whale");
const snake = new Reptiles("snake");

// calling the breathe method of the Amphibian
// this method is inherited from the Base (Animal) class, but it returns a diferent result due to polymorphism
console.log(frog.breathe());

// Compare the frog.breathe method with the titus.breathe method.
// We will see that both returns different result, even though they were inherited from the same Class.
console.log(titus.breathe());

// the below example illustrates inheritance.
// The eat method was created in the base class, and we can still access it in the descendant class
console.log(pigeon.eat());

// showing that properties can be inherited as well
console.log(cockroach.bodyShape);
console.log(whale.thermoregulation);
console.log(snake.reproduce());
// Test for abstraction, it will throw new error (uncomment line 22 to test);
// const animal = new Animal("species");

// Test for encapsulation, this will throw a private field error for the encapsulated method created in the Animal class
// Uncomment line 26 to test.
// console.log(titus.#activity());
