const Animal = require("../BaseClass/animal");

// module.exports is used to export the class so that other classes can  have access to it.
module.exports = class Invertebrate extends Animal {
  hasBackbone = false;
  skeletonType = "Exo-Skeleton";
};
