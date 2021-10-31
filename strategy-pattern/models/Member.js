const logger = require('../../logger');

class Member {
  constructor(name) {
    this.name = name;
    this.accCost = 0;
    logger.debug(`member created [${this.name}]`);
  }

  addCost(cost) {
    this.accCost += cost;
  }
}

module.exports = Member;
