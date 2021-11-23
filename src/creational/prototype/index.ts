// PROTOTYPE

/*
when you want to creare an exact copy of an object, without having to go through each property copying their values
and without making the code dependent of the object's class.
delegates the "cloning" process to the actual objects that are being cloned.
declares a common interface for all objects that support cloning (usually contains only a "clone" method).
as the object clones its self, can copy its private fields as well.
an object that supports cloning is called "prototype".
it might serve as an alternative to subclassing, creating objects with different configurations ("prototypes") and then clonning them when you need one like that.
*/

(() => {})();

// ref: https://refactoring.guru/design-patterns/prototype
