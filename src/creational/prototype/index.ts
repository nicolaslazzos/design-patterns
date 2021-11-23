// PROTOTYPE

/*
when you want to creare an exact copy of an object, without having to go through each property copying their values
and without making the code dependent of the object's class.
delegates the "cloning" process to the actual objects that are being cloned.
declares a common interface for all objects that support cloning (usually contains only a "clone" method).
as the object clones its self, can copy its private fields as well.
an object that supports cloning is called "prototype".
it might serve as an alternative to subclassing, creating objects with different configurations ("prototypes") and then clonning them when you need one like that.

useful to avoid a lot of subclasses when they only differ in the way they initialize its objects with some specific configuration
*/

(() => {
  // class with cloning ability
  class Prototype {
    public primitive: any;
    public component: object;
    public reference: ComponentWithBackReference;

    public clone(): Prototype {
      const clone = Object.create(this);
      clone.component = Object.create(this.component);

      // when we have an object with a nested backreference, the nested object should point to the cloned object, instead of the original
      clone.reference = { ...this.reference, prototype: { ...this } };

      return clone;
    }
  }

  class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
      this.prototype = prototype;
    }
  }

  const clientCode = () => {
    const p1 = new Prototype();
    p1.primitive = 123;
    p1.component = new Date();
    p1.reference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();

    if (p1.primitive === p2.primitive) {
      console.log("Primitive field values have been carried over to a clone.");
    } else {
      console.log("Primitive field values have not been copied.");
    }

    if (p1.component === p2.component) {
      console.log("Simple object has not been cloned.");
    } else {
      console.log("Simple object has been cloned.");
    }

    if (p1.reference === p2.reference) {
      console.log("Component with back reference has not been cloned.");
    } else {
      console.log("Component with back reference has been cloned.");
    }

    if (p1.reference.prototype === p2.reference.prototype) {
      console.log("Component with back reference is linked to original object.");
    } else {
      console.log("Component with back reference is linked to the clone.");
    }
  };

  clientCode();
})();

// ref: https://refactoring.guru/design-patterns/prototype
