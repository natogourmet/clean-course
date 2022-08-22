import { Tesla, Audi, Toyota, Honda } from './liskov-b';
import { Car } from './liskov-b';

(() => {
  const printCarSeats = (cars: Car[]) => {
    for (const car of cars) {
      if (car instanceof Tesla) {
        console.log('Tesla', car.getSeatsNumber());
        continue;
      }
      if (car instanceof Audi) {
        console.log('Audi', car.getSeatsNumber());
        continue;
      }
      if (car instanceof Toyota) {
        console.log('Toyota', car.getSeatsNumber());
        continue;
      }
      if (car instanceof Honda) {
        console.log('Honda', car.getSeatsNumber());
        continue;
      }
    }
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
