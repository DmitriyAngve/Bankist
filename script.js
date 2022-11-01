'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////////////////////////
/////////////////////PROJECT: "BANKIST" APP/////////////////////////
////////////////////////////////////////////////////////////////////

/*
// Example. This is bank account. Positive values - deposits, negative values - withdraws
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// #1 WAY for of
console.log('-----------FOROF------------');
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: ${Math.abs(movement)}`);
  }
}

// #2 WAY forEach
console.log('-----------FOREACH------------');
// .forEach() - its high-order function which requires a callback function!
// callback function will receive the current element of the array (movement)
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: ${Math.abs(mov)}`);
  }
});
//0: function(200)
//1: function(450)
//2: function(400)
// movements.forEach(function (mov, i, arr): first argument - current paramater; second - currentIndex; third - entire array
*/

////////////////////////////////////////////////////////////////////
/////////////////////FOREACH WITH MAPS AND SETS/////////////////////
////////////////////////////////////////////////////////////////////

/*
// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); // 'USD' - KEY; 'United States dollar' - VALUE

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`); // USD: USD... - because argument "key" makes no sense (second argument ommited)
});
// "_" - argument completely unnecessary

*/
////////////////////////////////////////////////////////////////////
/////////////////////PROJECT: "BANKIST" APP/////////////////////////
////////////////////////////////////////////////////////////////////
