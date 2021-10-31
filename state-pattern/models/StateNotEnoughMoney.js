/* eslint-disable class-methods-use-this */
const logger = require('../../logger');
const BandingMachineState = require('./BandingMachineState');

class StateNotEnoughMoney extends BandingMachineState {
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
    logger.info(`잔돈을 반환합니다. (${this.machine.money})`);
    this.machine.money = 0;
    this.machine.setState(this.machine.stateNoMoney);
  }

  onBtn() {
    logger.error('돈이 부족합니다');
  }
}

module.exports = StateNotEnoughMoney;
