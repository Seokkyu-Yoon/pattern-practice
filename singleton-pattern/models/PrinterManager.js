const logger = require('../../logger');

function isIdlePrinter(printer) {
  return !printer.running && printer.stack.length === 0;
}

class PrinterManager {
  constructor() {
    this.printers = [];
  }

  addPrinter(printer) {
    this.printers.push(printer);
  }

  print() {
    const idlePrinter = this.printers.find(isIdlePrinter) || null;
    if (idlePrinter === null) {
      logger.info('idle printer is not exists');
      return;
    }
    idlePrinter.print();
  }
}

module.exports = PrinterManager;
