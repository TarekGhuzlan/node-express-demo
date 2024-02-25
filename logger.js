function log(req, res, next) {
  //* middleware
  console.log("Logging...");
  next();
}

module.exports = log;
