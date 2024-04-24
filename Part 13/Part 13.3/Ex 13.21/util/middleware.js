const logger = require("./logger");
const { Blog, User } = require("../models");

const jwt = require("jsonwebtoken");
const { SECRET } = require("./config");

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

const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    try {
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
    } catch {
      return res.status(401).json({ error: "token invalid" });
    }
  } else {
    return res.status(401).json({ error: "token missing" });
  }
  next();
};

const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user.admin) {
    return res.status(401).json({ error: "operation not allowed" });
  }
  next();
};

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id);
  if (!req.blog) {
    const err = new Error(`can't find blog with id ${req.params.id}`);
    err.status = "fail";
    err.statusCode = 404;
    next(err);
  }
  next();
};

module.exports = {
  errorHandler,
  tokenExtractor,
  isAdmin,
  blogFinder,
};
