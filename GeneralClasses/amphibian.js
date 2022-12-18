const Vertebrate = require("../SecondaryClasses/vertebrate");

// the extends keyword enables the Amphibia class to inherit from the  Vertebrate class
module.exports = class Amphibia extends Vertebrate {
  constructor(species) {
    super();
    this.species = species;
  }

  thermoregulation = "Cold-Blooded";
  numberOfLeg = 4;
  diaphragmType = "Primitive";
  habitats = ["land", "water"];

  eat() {
    return "I am eating meat, cause I am canivorous";
  }

  breathe() {
    return "I am breathing through my skin!";
  }
};
