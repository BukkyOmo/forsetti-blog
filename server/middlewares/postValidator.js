/**
 * Validates a post object
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const postValidator = (req, res, next) => {
  const stringPattern = /([a-zA-Z])+/;
  if (!stringPattern.test(req.body.title) || !stringPattern.test(req.body.body)) {
    return res.status(400).json({ status: 400, error: 'Title and body must be a valid string' });
  }
  return next();
};

export default postValidator;
