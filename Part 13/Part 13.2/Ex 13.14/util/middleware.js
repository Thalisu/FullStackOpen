const logger = require("./logger");

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message,
  });
  logger.error(err);

  next(err);
};

module.exports = {
  errorHandler,
};
