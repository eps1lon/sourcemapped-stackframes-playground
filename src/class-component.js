class ReactComponent {
  constructor() {
    throw new Error("Boom");
  }
}

class Component extends ReactComponent {}

new Component();
