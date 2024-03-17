/* eslint-disable no-underscore-dangle */

export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string') {
      this._brand = brand;
    }
    if (typeof motor === 'string') {
      this._motor = motor;
    }
    if (typeof color === 'string') {
      this._color = color;
    }
  }

  cloneCar() {
    const hasSpecies = this.constructor[Symbol.species];
    const objClone = hasSpecies ? new this.constructor[Symbol.species]() : new this.constructor();
    return objClone;
  }
}
