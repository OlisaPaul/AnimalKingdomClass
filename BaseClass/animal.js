module.exports = class Animal {
  constructor(species) {
    // we use the below line to create abstraction, so that the class can not be instantiated, but can only be inherited
    if (this.constructor === Animal)
      throw new Error("This is an abstract class");

    this.species = species;
  }

  // Here we have the idea of implementing polimorphism, because descendants will have diferent values for them
  thermoregulation = "";
  skeletonType = "";
  habitats = ["land", "water", "soil"];

  // This is the same for all animals
  canMove = true;

  // here we applying the encapsulation rule, by using the # keyword.
  // So only this (Animal) class have access to the activity method
  #activity(activity) {
    return `I am ${activity}`;
  }

  reproduce() {
    return this.#activity("reproducing");
  }

  eat() {
    return this.#activity("eating");
  }

  breathe() {
    return this.#activity("breathing");
  }
};
