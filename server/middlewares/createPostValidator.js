import validator from 'validator';

const createPostValidation = async (req, res, next) => {
  const { title, body } = req.body;

  try {
    const checkTitleField = await validator.isEmpty(title);
    if (checkTitleField) {
      return res.status(400).json({
        status: 400,
        message: 'Title Field is empty',
      });
    }

    const checkBodyField = await validator.isEmpty(body);
    if (checkBodyField) {
      return res.status(400).json({
        status: 400,
        message: 'Body Field is empty',
      });
    }

    const checkTitleInt = await validator.isNumeric(title);
    if (checkTitleInt) {
      return res.status(400).json({
        status: 400,
        message: 'Title Input is an integer',
      });
    }

    const checkBodyInt = await validator.isNumeric(body);
    if (checkBodyInt) {
      return res.status(400).json({
        status: 400,
        message: 'Body Input is an integer',
      });
    }
    return next();
  } catch (error) {
    return res.status(500).send({
      status: 500,
      error: error.message,
    });
  }
};

export default createPostValidation;
