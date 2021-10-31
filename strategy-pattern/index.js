/* eslint-disable max-classes-per-file */
const logger = require('../logger');
const Book = require('./models/Book');
const Member = require('./models/Member');
const StrategySaleBook = require('./models/StrategySaleBook');
const StrategySaleMember = require('./models/StrategySaleMember');
const StrategySaleNone = require('./models/StrategySaleNone');

/**
 * This function get strategy sale implements class instance
 * @param {Member} member
 * @param {Book} book
 * @return {StrategySale} this function return StrategySale implements class
 */
function getStrategySale(member, book) {
  if (book.publishYear < new Date().getFullYear() - 10) {
    // 출판 후 10년 지난 책일 경우
    logger.debug('book sale selected...');
    return new StrategySaleBook(book.cost);
  }
  if (member.accCost >= 10000) {
    // 회원의 누적 빌린 금액이 10000 이상일 경우
    logger.debug('member sale selected...');
    return new StrategySaleMember(book.cost);
  }
  logger.debug('sale not selected...');
  return new StrategySaleNone(book.cost);
}

/**
 * This function is member borrow a book
 * @param {Member} member
 * @param {Book} book
 */
function borrow(member, book) {
  const strategySale = getStrategySale(member, book);
  const cost = strategySale.getCost();
  member.addCost(cost);
  logger.info(`${member.name} borrow ${book.sign} at ${cost} / accCost - ${member.accCost}`);
}

function main() {
  const book1 = new Book('sign1', new Date().getFullYear() - 1, 10000);
  const book2 = new Book('sign2', new Date().getFullYear() - 15, 10000);

  const member1 = new Member('member1');
  const member2 = new Member('member2');

  borrow(member1, book1);
  borrow(member1, book1);
  borrow(member1, book2);

  borrow(member2, book2);
  borrow(member2, book2);
  borrow(member2, book2);
}

if (module === require.main) {
  logger.debug('strategy pattern starting...');
  main();
  logger.debug('strategy pattern done...');
}
