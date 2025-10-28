function logger(req, res, next) {
  console.log(
    `${new Date().toISOString()}: ${req.method} request on ${req.url}\n`
  );
  next();
}

export { logger };
