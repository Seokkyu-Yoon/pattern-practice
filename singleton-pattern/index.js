const logger = require('../logger');
const Printer = require('./models/Printer');
const PrinterManager = require('./models/PrinterManager');

class Singleton {
  constructor() {
    this.printerManager = null;
  }

  getPrinterManager() {
    this.printerManager = this.printerManager === null
      ? new PrinterManager()
      : this.printerManager;
    return this.printerManager;
  }
}

function main() {
  const singleton = new Singleton();
  const printerManager = singleton.getPrinterManager();
  const printer1 = new Printer();
  const printer2 = new Printer();
  const printer3 = new Printer();
  printerManager.addPrinter(printer1);
  printerManager.addPrinter(printer2);
  printerManager.addPrinter(printer3);

  for (let i = 0; i < 10; i += 1) {
    setTimeout(() => {
      printerManager.print();
    }, Math.random() * 5000);
  }
}

if (module === require.main) {
  logger.debug('singleton pattern starting...');
  main();
  logger.debug('singleton pattern done...');
}
