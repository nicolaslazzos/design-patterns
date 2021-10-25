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
abstract class Dialog {
  // the "creator" class does not necessary has to be abstract

  // COMMON DIALOG LOGIC HERE

  /*
  the creator's primary responsibility isn't creating "products"
  it usually contains some core business logic and uses the "factory"
  method to decouple that logic from the concrete products
  */

  private closeDialog(): void {
    // logic to close the dialog
  }

  // the "factory" method
  abstract createButton(): Button;

  render(): void {
    // calling the "factory" method
    const button = this.createButton();

    // some logic that uses the "product"
    button.text = "Close";
    button.onPress(this.closeDialog);

    button.render();

    // some other logic
  }
}

// a concrete "creator"
class WebDialog extends Dialog {
  createButton(): Button {
    return new WebButton();
  }
}

// a concrete "creator"
class MobileDialog extends Dialog {
  createButton(): Button {
    return new MobileButton();
  }
}

// the "product" interface
interface Button {
  text: string;
  onPress: (action: () => void) => void;
  render: () => void;
}

// a concrete "product"
class WebButton implements Button {
  public text: string = "";

  public onPress(action: () => void): void {
    // some web logic here
  }

  public render(): void {
    // some logic to render a web button
  }
}

// a concrete "product"
class MobileButton implements Button {
  public text: string = "";

  public onPress(action: () => void): void {
    // some mobile logic here
  }

  public render(): void {
    // some logic to render a mobile native button
  }
}

// dumb example of application
class Application {
  dialog: Dialog;

  constructor() {
    const OS = "web"; // some logic that gets the current OS

    // pick a concrete "creator" depending on some condition

    if (OS === "web") {
      this.dialog = new WebDialog();
    } else if (OS === "mobile") {
      this.dialog = new MobileDialog();
    } else {
      throw new Error("Unknown OS");
    }
  }

  private render(): void {
    // the application uses a concrete "creator" through the "creator" base interface
    this.dialog.render();

    // some logic that uses the dialog
  }
}

// ref: https://refactoring.guru/design-patterns/factory-method
