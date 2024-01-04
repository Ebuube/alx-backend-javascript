/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(val) {
    if (typeof val !== 'string' && val !== undefined) {
      throw new TypeError('range must be a string');
    }

    this._range = val;
  }

  cloneCar() {
    return new Car(undefined, undefined, undefined);
  }
}
