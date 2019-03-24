import validator from 'validator';

import db from '../models';

const { User } = db;

class UserController {
  /**
   * Create User Record
   * @param {object} req
   * @param {object} res
   */
  static async createUser(req, res) {
    const {
      firstname, lastname, email, password,
    } = req.body;
    const response = await User.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      password,
    });
    return res.status(201).json({
      status: 201,
      data: [{
        firstname: response.dataValues.firstname,
        lastname: response.dataValues.lastname,
        email: response.dataValues.email,
      }],
    });
  }
}

export default UserController;
