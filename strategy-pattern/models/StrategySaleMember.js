const StrategySale = require('./StrategySale');

class StrategySaleMember extends StrategySale {
  getCost() {
    return this.cost * 0.9;
  }
}

module.exports = StrategySaleMember;
