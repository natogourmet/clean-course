export abstract class Car {
  // getSeatsNumber(): number {
  //   throw new Error('Method not implemented.');
  // }

  abstract getSeatsNumber(): number;
}

export class Tesla extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getSeatsNumber() {
    return this.numberOfSeats;
  }
}

export class Audi extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getSeatsNumber() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getSeatsNumber() {
    return this.numberOfSeats;
  }
}

export class Honda extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getSeatsNumber() {
    return this.numberOfSeats;
  }
}
