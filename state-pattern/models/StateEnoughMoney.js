/* eslint-disable class-methods-use-this */
const logger = require('../../logger');
const BandingMachineState = require('./BandingMachineState');

class StateEnoughMoney extends BandingMachineState {
  insertMoney(money) {
    this.machine.money += money;
    logger.info(`남은돈: ${this.machine.money}`);
  }

  returnMoney() {
    logger.info(`잔돈을 반환합니다. (${this.machine.money})`);
    this.machine.money = 0;
    this.machine.setState(this.machine.stateNoMoney);
  }

  onBtn() {
    this.machine.stocks -= 1;
    this.machine.money -= this.machine.price;
    logger.info(`음료를 드렸습니다 / 남은돈: ${this.machine.money}`);
    if (this.machine.stocks === 0) {
      this.machine.setState(this.machine.stateNoStock);
      return;
    }
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
}

module.exports = StateEnoughMoney;
