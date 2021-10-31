/* eslint-disable class-methods-use-this */
const logger = require('../../logger');
const BandingMachineState = require('./BandingMachineState');

class StateNoMoney extends BandingMachineState {
  insertMoney(money) {
    this.machine.money += money;
    logger.info(`남은돈: ${this.machine.money}`);
    if (this.machine.money < this.machine.price) {
      this.machine.setState(this.machine.stateNotEnoughMoney);
      return;
    }
    if (this.machine.money === 0) {
      this.machine.setState(this.machine.stateNoMoney);
      return;
    }
    this.machine.setState(this.machine.stateEnoughMoney);
  }

  returnMoney() {
    logger.error('돈이 없습니다');
  }

  onBtn() {
    logger.error('돈이 없습니다');
  }
}

module.exports = StateNoMoney;
