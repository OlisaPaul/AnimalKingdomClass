const Vertebrate = require("../SecondaryClasses/vertebrate");

module.exports = class Mammal extends Vertebrate {
  constructor(species) {
    super();
    this.species = species;
  }

  thermoregulation = "Warm-Blooded";
  diaphramType = "Advanced";
  heartType = "Four-Chambered";
  habitat = ["land", "water"];
  hasHair = true;
  hasMamaryGland = true;

  eat() {
    return "I am eating vegetable and meat. Care to join?";
  }

  breathe() {
    return `Breathing through my lungs`;
  }

  reproduce() {
    return "I am reproducing";
  }
};
