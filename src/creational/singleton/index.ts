// SINGLETON

/*
lets you ensure that a class has only one instance and always returns it
useful to control the access to some shared resource, like a database
lets you access the object from anywehere and also protects the instance from being overwritten by another code
implements a static creation method that calls a private constructor to create an object and saves it in a static field
all the following calls to that static method returns the cached object
as you see, solve two problems at the same time, so it violates the Single Responsibility Problem
*/

(() => {
  class Singleton {
    private static instance: Singleton;

    private constructor() {
      // make the constructor private to prevent direct calls from outside
    }

    // controls the access to the singleton instance
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }

      return Singleton.instance;
    }

    public someBusinessLogic() {
      // the singletons should define some business logic that can be executed on its instance
    }
  }

  const clientCode = () => {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
      console.log("Singleton works, both variables contain the same instance.");
    } else {
      console.log("Singleton failed, variables contain different instances.");
    }
  };

  clientCode();
})();

// ref: https://refactoring.guru/design-patterns/singleton
