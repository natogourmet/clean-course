(() => {

  interface IBird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
  }

  class Tucan implements IBird {

    public fly() {
      return;
    }

    public eat() {
      return;
    }

    public run() {
      return;
    }

    public swim() {
      return;
    }
    
  }

  class Humminbird implements IBird {

    public fly() {
      return;
    }

    public eat() {
      return;
    }

    public run() {
      return;
    }

    public swim() {
      return;
    }
  }

  class Ostrich implements IBird {

    public eat() {
      return;
    }

    public run() {
      return;
    }

    public fly() {
      throw new Error('Ostrich cannot fly');
    }

    public swim() {
      throw new Error('Ostrich cannot swim');
    }
  }

  class Penguin implements IBird {

    public eat() {
      return;
    }

    public run() {
      return;
    }

    public fly() {
      return;
    }

    public swim() {
      return;
    }
    
  }
  
})()