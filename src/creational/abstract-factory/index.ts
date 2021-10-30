// ABSTRACT FACTORY

/*
when you have to create a "family" of related "products" and you also have family "variants"
we want to define an "interface" for each distinct "product" of the "family" (eg, if the family is "furniture", the products can be a sofa, a chair, a table, etc)
each variant of a "product" should implement those "interfaces"
the "abstract factory" would be an interface with a "factory method" for each distinct "product" of a "family"
the return type of each method should be the "interface" of the corresponding "product"
then we should implement a "factory" for each "family variant" based on the "abstract factory" interface
the client code works with both "factories" and "products" through their abstract interfaces
*/

// one concrete factory for each variant and one product interface for each product type

(() => {
  // the "abstract factory" class that declares "factory methods" that returns different abstract "products"
  abstract class AbstractFactory {
    // the "factory" methods
    abstract createProductA(): AbstractProductA;
    abstract createProductB(): AbstractProductB;
  }

  // concrete "factories" that creates "products" of a correspoding "family" or "variant"
  class ConcreteFactory1 extends AbstractFactory {
    createProductA(): AbstractProductA {
      return new ConcreteProductA1();
    }

    createProductB(): AbstractProductB {
      return new ConcreteProductB1();
    }
  }

  class ConcreteFactory2 extends AbstractFactory {
    createProductA(): AbstractProductA {
      return new ConcreteProductA2();
    }

    createProductB(): AbstractProductB {
      return new ConcreteProductB2();
    }
  }

  // the interface for a type of "product"
  interface AbstractProductA {
    operation: () => string;
  }

  // the concrete "products" for each "family" or "variant"
  class ConcreteProductA1 implements AbstractProductA {
    public operation(): string {
      return "The result of the Product A1";
    }
  }

  class ConcreteProductA2 implements AbstractProductA {
    public operation(): string {
      return "The result of the Product A2";
    }
  }

  // the interface for another type of "product"
  interface AbstractProductB {
    operation: () => string;
    // "products" can interact with each other but only between products of the same "family" or "variant"
    interaction: (collaborator: AbstractProductA) => string;
  }

  // the concrete "products" for each "family" or "variant"
  class ConcreteProductB1 implements AbstractProductB {
    public operation(): string {
      return "The result of the Product B1";
    }

    public interaction(collaborator: AbstractProductA): string {
      const result = collaborator.operation();

      return `The result of the Product B1 interacting with ${result}`;
    }
  }

  class ConcreteProductB2 implements AbstractProductB {
    public operation(): string {
      return "The result of the Product B2";
    }

    public interaction(collaborator: AbstractProductA): string {
      const result = collaborator.operation();

      return `The result of the Product B2 interacting with ${result}`;
    }
  }

  // dumb example of application
  const clientCode = (factory: AbstractFactory) => {
    // the client code works with any "factories" and "products" through their "abstract" factories and interfaces respectively

    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.operation());
    console.log(productB.interaction(productA));
  };

  console.log("Client: Testing client code with the ConcreteFactory1");
  clientCode(new ConcreteFactory1());

  console.log("");

  console.log("Client: Testing the same client code with the ConcreteFactory2");
  clientCode(new ConcreteFactory2());
})();

// ref: https://refactoring.guru/design-patterns/abstract-factory
