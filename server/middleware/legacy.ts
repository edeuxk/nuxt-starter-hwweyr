export default (req, res, next) => {
  console.log(req.headers.host);
  next();
};
