const idValidator = (req, res, next) => {
  const { id } = req.params;
  const uuidRegexPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!id.match(uuidRegexPattern)) {
    return res.status(400).json({ status: 400, error: 'Invalid id!' });
  }
  return next();
};

export default idValidator;
