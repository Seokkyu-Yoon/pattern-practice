const logger = require('../../logger');

class Printer {
  constructor() {
    this.running = false;
    this.stack = [];
  }

  print() {
    if (this.running) {
      this.stack.push(this);
      logger.debug(`wait ${this.stack.length} prints...`);
      return;
    }
    this.running = true;
    const burstTime = Math.random() * 5000; // 0~5 second
    logger.debug(`job will done after ${burstTime / 1000} seconds`);
    setTimeout(() => {
      this.running = false;
      logger.debug('job done');
      if (this.stack.length > 0) {
        this.stack.shift().print();
      }
    }, burstTime);
  }
}

module.exports = Printer;
