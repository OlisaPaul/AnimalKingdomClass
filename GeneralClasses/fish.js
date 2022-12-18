const Vertebrate = require("../SecondaryClasses/vertebrate");

module.exports = class Fish extends Vertebrate {
  constructor(species) {
    super();
    this.species = species;
  }

  thermoregulation = "Cold-Blooded";
  habitats = ["water"];
  gills = true;
  swimBladder = true;

  breathe() {
    return "I am breathing through my gills. Cool right!!";
  }
};
