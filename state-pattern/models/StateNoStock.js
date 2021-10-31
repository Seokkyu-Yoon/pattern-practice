/* eslint-disable class-methods-use-this */
const logger = require('../../logger');
const BandingMachineState = require('./BandingMachineState');

class StateNoStock extends BandingMachineState {
  insertMoney(money) {
    logger.error(`음료가 매진되었습니다 / 잔돈을 반환합니다. (${money})`);
  }

  returnMoney() {
    logger.error(`잔돈을 반환합니다. (${this.machine.money})`);
  }

  onBtn() {
    logger.error('음료가 매진되었습니다');
  }
}

module.exports = StateNoStock;
