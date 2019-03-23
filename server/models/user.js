/* eslint-disable func-names */
import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  /* istanbul ignore next */
  User.associate = function (models) {
    User.hasMany(models.Posts, {
      foreignKey: 'userId',
      as: 'Posts',
    });
  };
  User.beforeCreate((user, options) => {
    const salt = bcrypt.genSaltSync();
    // eslint-disable-next-line no-param-reassign
    user.password = bcrypt.hashSync(user.password, salt);
  });
  return User;
};
