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
console.log(frog.breathe());
console.log(pigeon);

// Test for abstraction, it will throw new error (uncomment line 22 to test);
// const animal = new Animal("species");

// Test for encapsulation, this will throw a private field error for the encapsulated method created in the Animal class
// Uncomment line 26 to test.
// console.log(titus.#activity());
