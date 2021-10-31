const logger = require('../../logger');
const StateEnoughMoney = require('./StateEnoughMoney');
const StateNoMoney = require('./StateNoMoney');
const StateNoStock = require('./StateNoStock');
const StateNotEnoughMoney = require('./StateNotEnoughMoney');

class BandingMachine {
  constructor() {
    this.stateNoMoney = new StateNoMoney(this);
    this.stateNoStock = new StateNoStock(this);
    this.stateEnoughMoney = new StateEnoughMoney(this);
    this.stateNotEnoughMoney = new StateNotEnoughMoney(this);
    this.money = 0;
    this.stocks = 0;
    this.price = 0;
    this.state = this.stateNoStock;
  }

  setState(state) {
    this.state = state;
  }

  setStocks(stocks) {
    this.stocks = stocks;
    logger.info(`재고설정: ${stocks}`);
    if (this.stocks > 0) {
      this.setState(this.stateNoMoney);
      return;
    }
    this.setState(this.stateNoStock);
  }

  setPrice(price) {
    this.price = price;
    logger.info(`단가설정: ${price}`);
    if (this.stocks <= 0) {
      this.setState(this.stateNoStock);
      return;
    }
    if (this.money <= 0) {
      this.setState(this.stateNoMoney);
      return;
    }
    if (this.money < this.price) {
      this.setState(this.stateNotEnoughMoney);
      return;
    }
    this.setState(this.stateEnoughMoney);
  }

  insertMoney(money) {
    this.state.insertMoney(money);
  }

  returnMoney() {
    this.state.returnMoney();
  }

  onBtn() {
    this.state.onBtn();
  }
}

module.exports = BandingMachine;
