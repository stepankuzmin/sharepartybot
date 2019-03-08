const expenses = (party, userId) => {
  const user = party.users[userId];
  const expenses = Object.entries(user.expenses).reduce(
    (acc, [productID, amount]) => {
      const price = party.products[productID];
      return acc + price * amount;
    },
    0
  );

  return expenses;
};

const totalExpenses = party =>
  Object.keys(party.users)
    .map(userId => expenses(party, userId))
    .reduce((acc, expenses) => acc + expenses, 0);

const revenue = (party, userId) => {
  const user = party.users[userId];
  const revenue = Object.entries(user.revenue).reduce(
    (acc, [productID, amount]) => {
      const price = party.products[productID];
      return acc + price * amount;
    },
    0
  );

  return revenue;
};

const totalRevenue = party =>
  Object.keys(party.users)
    .map(userId => revenue(party, userId))
    .reduce((acc, expenses) => acc + expenses, 0);

const balance = (party, userId) =>
  revenue(party, userId) - expenses(party, userId);

const calculate = (party, userId) => {
  return 0;
};

module.exports = {
  calculate,
  balance,
  totalExpenses,
  totalRevenue,
  expenses,
  revenue
};
