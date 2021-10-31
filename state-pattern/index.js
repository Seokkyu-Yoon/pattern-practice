const BandingMachine = require('./models/BandingMachine');

function main() {
  const bandingMachine = new BandingMachine();
  bandingMachine.insertMoney(1000);
  bandingMachine.returnMoney();
  bandingMachine.onBtn();
  bandingMachine.setPrice(500);
  bandingMachine.setStocks(5);
  bandingMachine.returnMoney();
  bandingMachine.onBtn();
  bandingMachine.insertMoney(200);
  bandingMachine.returnMoney();
  bandingMachine.insertMoney(400);
  bandingMachine.onBtn();
  bandingMachine.insertMoney(5000);
  bandingMachine.onBtn();
  bandingMachine.onBtn();
  bandingMachine.onBtn();
  bandingMachine.onBtn();
  bandingMachine.onBtn();
  bandingMachine.onBtn();
  bandingMachine.returnMoney();
}

if (module === require.main) {
  main();
}
