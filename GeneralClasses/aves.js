const Vertebrate = require("../SecondaryClasses/vertebrate");

module.exports = class Aves extends Vertebrate {
  constructor(species) {
    super();
    this.species = species;
  }

  thermoregulation = "Warm-Bloded";
  habitats = ["land"];
  circulatorySystem = "Closed";
  wings = true;
  feather = true;

  breathe() {
    return "Breathing through my lungs";
  }
};
