(() => {
  interface IBird {
    eat(): void;
  }

  interface IFlyingBird {
    fly(): void;
  }

  interface IRuningBird {
    run(): void;
  }

  interface ISwimmingBird {
    swim(): void;
  }

  class Tucan implements IBird, IFlyingBird {
    public fly() {
      return;
    }

    public eat() {
      return;
    }
  }

  class Humminbird implements IBird, IFlyingBird {
    public fly() {
      return;
    }

    public eat() {
      return;
    }
  }

  class Ostrich implements IBird, IRuningBird {
    public eat() {
      return;
    }

    public run() {
      return;
    }
  }

  class Penguin implements IBird, ISwimmingBird {
    public eat() {
      return;
    }

    public swim() {
      return;
    }
  }
})();
