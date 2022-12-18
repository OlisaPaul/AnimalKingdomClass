This app shows the classes of Animals

The app is broken down into modules, which are saved in three folders namely:
1 - BaseClass - for storing the Abstract class (Animal) where other classes comes from
2 - SecondaryClasses - here we have the vetebrate and invertebrate, which inherits from the Animal class
3 - GeneralClasses - it stores all the different classes e.g. mammals, aves, etc. They either inherit from the invetebrate or Vertebrate class

All the laws of Object Oriented Programing (OOP) were implemented on this app
1 - Abstraction can be found in the Base (Animal) class
2 - Polymorphism is implemented in all the general classes (amphibia, aves, fish, etc.)
3 - Inheritance: all descendants (secondary classes and General clases) inherited from the Base class
4 - Encapsulation - Implemented in the Base (Animal) class

I created new species from the GeneralClasses in index.js file.

The main functionalities of the app can be seen by running:
node index.js
The above can only be done in a terminal with node app installed
