const StrategySale = require('./StrategySale');

class StrategySaleNone extends StrategySale {
  getCost() {
    return this.cost;
  }
}

module.exports = StrategySaleNone;
