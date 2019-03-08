const test = require('tape');
const {
  balance,
  calculate,
  expenses,
  revenue,
  totalExpenses,
  totalRevenue
} = require('./index');

const party = {
  status: 'open',
  products: {
    beer1: 250,
    beer2: 300,
    beer3: 350
  },
  users: {
    stepan: {
      expenses: {
        beer1: 2,
        beer2: 2
      },
      revenue: {
        beer1: 1,
        beer2: 1,
        beer3: 1
      }
    },
    bezdna: {
      expenses: {
        beer3: 2
      },
      revenue: {
        beer1: 1,
        beer2: 1,
        beer3: 1
      }
    }
  }
};

test('expenses', t => {
  const stepan = expenses(party, 'stepan');
  t.equal(stepan, 1100);

  const bezdna = expenses(party, 'bezdna');
  t.equal(bezdna, 700);

  t.end();
});

test('total', t => {
  t.equal(totalExpenses(party), 1800);
  t.end();
});

test('revenue', t => {
  const stepan = revenue(party, 'stepan');
  t.equal(stepan, 900);

  const bezdna = revenue(party, 'bezdna');
  t.equal(bezdna, 900);

  t.end();
});

test('total revenue', t => {
  t.equal(totalRevenue(party), 1800);
  t.end();
});

test('balance', t => {
  const stepan = balance(party, 'stepan');
  t.equal(stepan, -200);

  const bezdna = balance(party, 'bezdna');
  t.equal(bezdna, 200);

  t.end();
});

test.skip('calculate', t => {
  const stepan = calculate(party, 'stepan');
  t.equal(stepan, 350);

  const bezdna = calculate(party, 'bezdna');
  t.equal(bezdna, 550);

  t.end();
});
