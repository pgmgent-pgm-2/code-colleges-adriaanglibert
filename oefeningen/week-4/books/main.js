
const rawBooks = require('./books.json');
const rawMembers = require('./members.json');
const rawLoans = require('./loans.json');
const { addItems } = require('./data');

const books = addItems(rawBooks);
const members = addItems(rawMembers, 100);
const loans = addItems(rawLoans, 0, 'bookId');

console.log(books, members, loans);