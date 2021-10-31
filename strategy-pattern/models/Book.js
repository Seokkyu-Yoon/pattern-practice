const logger = require('../../logger');

class Book {
  constructor(sign, publishYear, cost) {
    this.sign = sign;
    this.publishYear = publishYear;
    this.cost = cost;
    logger.debug(`book created [sign:${this.sign}, publishYear:${this.publishYear}, cost: ${this.cost}]`);
  }
}

module.exports = Book;
