const currencies = require("../currencies.json");

const getCurrencies = (req, res) => {
  // if (!verifyAuth(req)) return res.sendStatus(403);

  const minValue = req.query.min_value;
  if (minValue) {
    res.json(
      currencies.data.filter((c) => Number(c.min_size) === Number(minValue))
    );
  } else {
    res.json(currencies);
  }
};

const getCurrencyBySymbol = (req, res) => {
  let symbol = req.params.symbol;
  let symbolData = currencies.data.find((c) => c.id === symbol.toUpperCase());
  if (symbolData) {
    res.json(symbolData);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getCurrencies, getCurrencyBySymbol };
