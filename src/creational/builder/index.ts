// BUILDER

// lets you construct complex objects step by step
// lets you create different types or representations of an object using the same construction code
// instead of creating a base class and then a subset of classes for each combination
// or instead of creating a giant constructor with all the parameters in the base class
// the builder organizes the construction code into a set of steps in objects called "builders"
// you dont need to call all the steps, only the ones you need
// you can have many builders that implements the steps in a different way
// the objects created by the "builder" doent need to have a common interface

// also yo can extract a series of common calls to the builder steps to a separate class called "director"
// the "director" define which steps to call and in which order, and the "builder" the implementation
