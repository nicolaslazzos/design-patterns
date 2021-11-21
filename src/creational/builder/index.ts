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

(() => {
  // the interface that defines the methods to create parts of products
  interface Builder {
    buildPartA: () => void;
    buildPartB: () => void;
    buildPartC: () => void;
  }

  class Product1 {
    public parts: string[] = [];

    public listParts(): void {
      console.log(`Product parts: ${this.parts.join(", ")}\n`);
    }
  }

  // a concrete builder with specific implementations of the building steps and produces a concrete product
  class ConcreteBuilder1 implements Builder {
    private product: Product1;

    constructor() {
      this.product = new Product1();
    }

    public reset(): void {
      this.product = new Product1();
    }

    public buildPartA(): void {
      this.product.parts.push("PartA1");
    }

    public buildPartB(): void {
      this.product.parts.push("PartB1");
    }

    public buildPartC(): void {
      this.product.parts.push("PartC1");
    }

    // they provide their own methods to retrieve the result because they may create different types of products (even unrelated)
    public getProduct(): Product1 {
      const result = this.product;
      this.reset();
      return result;
    }
  }

  // a "director" works with any concrete builder through the "builder" interface
  class Director {
    private builder: Builder;

    public setBuilder(builder: Builder) {
      this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
      this.builder.buildPartA();
    }

    public buildFullFeaturedProduct(): void {
      this.builder.buildPartA();
      this.builder.buildPartB();
      this.builder.buildPartC();
    }
  }

  const clientCode = (director: Director) => {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log("Basic product:");
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log("Full product:");
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    console.log("Custom product:");
    builder.buildPartA();
    builder.buildPartB();
    builder.getProduct().listParts();
  };

  const director = new Director();
  clientCode(director);
})();
