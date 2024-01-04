/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val !== 'number') {
      throw new TypeError('size must be a number');
    }

    this._size = val;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._location = val;
  }

  toString() {
    // Magic method String(instance)
    return `${this._location}`;
  }

  valueOf() {
    // Magic method Number(instance)
    return this._size;
  }
}
