// SINGLETON

/*
lets you ensure that a class has only one instance and always returns it
useful to control the access to some shared resource, like a database
lets you access the object from anywehere and also protects the instance from being overwritten by another code
implements a static creation method that calls a private constructor to create an object and saves it in a static field
all the following calls to that static method returns the cached object
as you see, solve two problems at the same time, so it violates the Single Responsibility Problem
*/

(() => {})();

// ref: https://refactoring.guru/design-patterns/singleton
