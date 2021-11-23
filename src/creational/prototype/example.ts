// PROTOTYPE EXAMPLE

(() => {
  // base "prototype"
  abstract class Shape {
    x: number;
    y: number;
    color: string;

    // initializes a fresh object with the values of an existing object
    constructor(source?: Shape) {
      if (!source) return;

      this.x = source.x;
      this.y = source.y;
      this.color = source.color;
    }

    // returns one of the "prototype" subclasses
    abstract clone(): Shape;
  }

  // concrete "prototype"
  class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(source?: Rectangle) {
      if (!source) return;

      // a call to the parent's constructor is needed for copying private values defined in the base "prototype"
      super(source);
      this.width = source.width;
      this.height = source.height;
    }

    clone(): Rectangle {
      return new Rectangle(this);
    }
  }

  // another concrete "prototype"
  class Circle extends Shape {
    radius: number;

    constructor(source?: Circle) {
      if (!source) return;

      // a call to the parent's constructor is needed for copying private values defined in the base "prototype"
      super(source);
      this.radius = source.radius;
    }

    clone(): Circle {
      return new Circle(this);
    }
  }

  class Application {
    private shapes: Shape[];

    constructor() {
      const circle: Circle = new Circle();
      circle.x = 10;
      circle.y = 10;
      circle.radius = 20;
      this.shapes.push(circle);

      // exact copy of the first circle object
      const circleClone = circle.clone();
      this.shapes.push(circleClone);

      const rectangle: Rectangle = new Rectangle();
      rectangle.x = 15;
      rectangle.y = 15;
      rectangle.width = 30;
      rectangle.height = 10;
      this.shapes.push(rectangle);
    }

    businessLogic() {
      const shapesClones: Shape[] = [];

      this.shapes.forEach((shape) => {
        // lets you make a copy of the object without knowing anything about its type
        // you only need to know that they all have a "clone" method
        shapesClones.push(shape.clone());
      });
    }
  }
})();

// ref: https://refactoring.guru/design-patterns/prototype
