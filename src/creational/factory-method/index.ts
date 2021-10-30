// FACTORY METHOD

/*
replace direct object construction calls with calls to a spacial "factory" method
objects returned by a "factory" method are often called "products"
the class that declares the "factory" method is often called "creator"
a subclass can override that method to return their own type of "products"
the "products" should have a common base class or "interface"
that "interface" would also be the return type of the "factory" method
*/

// the "creator" class
abstract class Creator {
  // the "creator" class does not necessary has to be abstract

  /*
  the creator's primary responsibility isn't creating "products"
  it usually contains some core business logic and uses the "factory"
  method to decouple that logic from the concrete products
  */

  // the "factory" method
  abstract factoryMethod(): Product;

  someOperation(): string {
    // calling the "factory" method to create a "product"
    const product = this.factoryMethod();

    // some other logic

    // some logic that uses the "product"
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

// a concrete "creator"
class ConcreteCreator1 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

// a concrete "creator"
class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

// the "product" interface
interface Product {
  operation: () => string;
}

// a concrete "product"
class ConcreteProduct1 implements Product {
  public operation(): string {
    // some product 1 logic here
    return "[Result of the ConcreteProduct1]";
  }
}

// a concrete "product"
class ConcreteProduct2 implements Product {
  public operation(): string {
    // some product 2 logic here
    return "[Result of the ConcreteProduct2]";
  }
}

// dumb example
const clientCode = (creator: Creator) => {
  // the client code can work with any instance of a concrete "creator" that follows the "creator" interface

  console.log("Client: I'm not aware of the creator's class, but it still works");
  console.log(creator.someOperation());
};

console.log("Using ConcreteCreator1");
clientCode(new ConcreteCreator1());

console.log("");

console.log("Using ConcreteCreator2");
clientCode(new ConcreteCreator2());

// ref: https://refactoring.guru/design-patterns/factory-method
