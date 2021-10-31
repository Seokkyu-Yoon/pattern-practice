/* eslint-disable class-methods-use-this */

class StrategySale {
  constructor(cost) {
    this.cost = cost;
  }

  getCost() {
    throw new Error('Not Implements Error');
  }
}

module.exports = StrategySale;
