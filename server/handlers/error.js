function errorHandler(err, req, res, next) {
  return res.status(err.status || 500).json({
    error: {
      message:
        err.message || "Doah!!  Something went way wrong, contact server admin"
    }
  });
}

module.exports = errorHandler;
