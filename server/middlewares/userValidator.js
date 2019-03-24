import validator from 'validator';

import db from '../models';

const { User } = db;

/* istanbul ignore next */
const userValidation = async (req, res, next) => {
  const { email } = req.body;
  const checkuser = await User.findOne({
    where: {
      email,
    },
  });
  if (checkuser) {
    return res.status(409).json({
      status: 409,
      message: `User with email: ${email} already exist!`,
    });
  }
  const checkemail = await validator.isEmail(email);
  if (!checkemail) {
    return res.status(400).json({
      status: 400,
      message: `Email value ${email} is invalid!`,
    });
  }
  return next();
};

export default userValidation;
