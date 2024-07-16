const getQueryError = require("../validators/users.validators");

const validateSearchQuery = (req, res, next) => {
  const { gender, age } = req.query;

  const error = getQueryError({ gender, age });
  if (error) return res.status(422).json(error);

  next();
};

module.exports = validateSearchQuery;
