/* eslint-disable class-methods-use-this */
class BandingMachineState {
  constructor(machine) {
    this.machine = machine;
  }

  insertMoney() {
    throw new Error('insertMoney method is not implements');
  }

  returnMoney() {
    throw new Error('returnMoney method is not implements');
  }

  onBtn() {
    throw new Error('onBtn method is not implements');
  }
}

module.exports = BandingMachineState;
