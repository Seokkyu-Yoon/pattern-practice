const StrategySale = require('./StrategySale');

class StrategySaleBook extends StrategySale {
  getCost() {
    return this.cost * 0.8;
  }
}

module.exports = StrategySaleBook;
