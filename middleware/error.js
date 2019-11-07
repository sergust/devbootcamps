const errorHandler = (err, req, res, next) => {
  // Log to conslole for developer
  console.log(err.stack.red);

  res.status(500).json({
    success: false,
    error: err.message
  });
};

module.exports = errorHandler;
