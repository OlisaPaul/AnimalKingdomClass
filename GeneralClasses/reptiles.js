const Vertebrate = require("../SecondaryClasses/vertebrate");

module.exports = class Reptiles extends Vertebrate {
  constructor(species) {
    super();
    this.species = species;
  }

  thermoregulation = "Cold-Blooded";
  scales = true;
  limbs = false;
  habitats = ["land", "water"];
};
