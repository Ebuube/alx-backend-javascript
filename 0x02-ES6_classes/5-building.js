/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      // Ensure that any Child class implements the method evacuationWarningMessage
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // Declaration of properties
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = val;
  }
}
