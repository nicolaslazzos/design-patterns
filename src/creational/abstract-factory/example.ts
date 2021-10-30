// ABSTRACT FACTORY EXAMPLE

() => {
  // the "abstract factory" class that creates "products" of the same "family"
  abstract class GUIFactory {
    // the "factory" methods
    abstract createButton(): Button;
    abstract createDialog(): Dialog;
  }

  // the "factory" for the web "family"
  class WebFactory extends GUIFactory {
    createButton(): Button {
      return new WebButton();
    }

    createDialog(): Dialog {
      return new WebDialog();
    }
  }

  // the "factory" for the mobile "family"
  class MobileFactory extends GUIFactory {
    createButton(): Button {
      return new MobileButton();
    }

    createDialog(): Dialog {
      return new MobileDialog();
    }
  }

  // the interface for the "product" button
  interface Button {
    onPress: () => void;
    render: () => void;
  }

  // the concrete "product" button of the web "family"
  class WebButton implements Button {
    public onPress(): void {
      // some web logic here
    }

    public render(): void {
      // some web logic here
    }
  }

  // the concrete "product" button of the mobile "family"
  class MobileButton implements Button {
    public onPress(): void {
      // some mobile logic here
    }

    public render(): void {
      // some mobile logic here
    }
  }

  // the interface for the "product" dialog
  interface Dialog {
    onOpen: () => void;
    onClose: () => void;
    render: () => void;
  }

  // the concrete "product" dialog of the web "family"
  class WebDialog implements Dialog {
    public onOpen(): void {
      // some web logic here
    }

    public onClose(): void {
      // some web logic here
    }

    public render(): void {
      // some web logic here
    }
  }

  // the concrete "product" dialog of the mobile "family"
  class MobileDialog implements Dialog {
    public onOpen(): void {
      // some mobile logic here
    }

    public onClose(): void {
      // some mobile logic here
    }

    public render(): void {
      // some mobile logic here
    }
  }

  // dumb example of application
  class Application {
    factory: GUIFactory;

    constructor() {
      const OS = "web"; // some logic that gets the current OS

      // pick a concrete "factory" depending on some condition (eg, the platform)

      if (OS === "web") {
        this.factory = new WebFactory();
      } else if (OS === "mobile") {
        this.factory = new MobileFactory();
      } else {
        throw new Error("Unknown OS");
      }
    }

    private render(): void {
      // the application uses a concrete "factory" through the "abstract factory" interface and the concrete "products" through the products interface
      const button = this.factory.createButton();
      const dialog = this.factory.createDialog();

      // some logic that uses the dialog and the button
      button.render();
      dialog.render();
    }
  }
};

// ref: https://refactoring.guru/design-patterns/abstract-factory
