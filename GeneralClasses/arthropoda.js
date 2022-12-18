const Invertebrate = require("../SecondaryClasses/invertebrate");

module.exports = class Arthropoda extends Invertebrate {
  constructor(species) {
    super();
    this.species = species;
  }

  thermoregulation = "Cold-Blooded";
  habitats = ["land", "water", "soil"];
  circulatorySystem = "Open";
  bodyShape = "Segmented";

  eat() {
    return "I am eating meat and vegetable cause I'm an omnivore";
  }

  breathe() {
    return "Breathing through my Trachae";
  }

  reproduce() {
    return "I am reproducing";
  }
};
