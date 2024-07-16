const PASSWORD = process.env.ROUTE_PASSWORD;

const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === PASSWORD) return next();
  else return res.sendStatus(403); // RESPOND TO CLIENT
};

module.exports = verifyAuth;
