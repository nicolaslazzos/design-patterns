// BUILDER EXAMPLE

// example of building a car and its manual
interface Builder {
  reset: () => void;
  setBody: (params?: any) => void;
  setChassis: (params?: any) => void;
  setSeats: (params?: any) => void;
  setEngine: (params?: any) => void;
  setComputer: (params?: any) => void;
  getResult: () => void;
}

// a car has many parts
class Car {}

// the manual describe each part of the car
class Manual {}

// concrete "builder" to build a car, follows the "builder" interface
class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  reset() {
    this.car = new Car();
  }

  setBody(params?: any) {
    // some logic here to build the body
  }

  setChassis(params?: any) {
    // some logic here to build the chassis
  }

  setSeats(params?: any) {
    // some logic here to set the seats
  }

  setEngine(params?: any) {
    // some logic here to install de engine
  }

  setComputer(params?: any) {
    // some logic here to setup the computer
  }

  getResult() {
    return this.car;
  }
}

// concrete "builder" to build a car manual, follows the "builder" interface
class ManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.manual = new Manual();
  }

  reset() {
    this.manual = new Manual();
  }

  setBody(params?: any) {
    // add body pictures and describe it
  }

  setChassis(params?: any) {
    // describe the car chassis
  }

  setSeats(params?: any) {
    // describe the car features
  }

  setEngine(params?: any) {
    // describe engine specifications
  }

  setComputer(params?: any) {
    // set instructions for operating the compunter
  }

  getResult() {
    const product = this.manual;
    // reset so after returning the product, is ready to build another one
    this.reset();
    return product;
  }
}

// the "director" works with any "builder" through the base builder interface
class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  constructSportCar() {
    this.builder.reset();
    this.builder.setBody("coupe");
    this.builder.setChassis("sport");
    this.builder.setSeats(2);
    this.builder.setEngine("v12");
    this.builder.setComputer("sport");
  }

  constructSUV() {
    this.builder.reset();
    this.builder.setBody("SUV");
    this.builder.setChassis("SUV");
    this.builder.setSeats(5);
    this.builder.setEngine("2.0");
    this.builder.setComputer("default");
  }
}

// the client code creates a "director" and then passes it "concrete builders" to build different products
class Application {
  buildCar() {
    const carBuilder = new CarBuilder();

    const director = new Director(carBuilder);
    director.constructSportCar();

    const car: Car = carBuilder.getResult();

    const manualBuilder = new ManualBuilder();

    director.setBuilder(manualBuilder);
    director.constructSportCar();

    const manual: Manual = manualBuilder.getResult();
  }
}

// ref: https://refactoring.guru/design-patterns/builder
