// the below line is used to import the Animal class from the BaseClass folder
const Animal = require("../BaseClass/animal");

module.exports = class Vertebrate extends Animal {
  hasBackbone = true;
  hasBrain = true;
  skeletonType = "Endoskeleton";
};
