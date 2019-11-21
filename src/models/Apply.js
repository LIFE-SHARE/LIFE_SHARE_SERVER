module.exports = (sequelize, DataTypes) => {
  const Apply = sequelize.define('Apply', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      unipue: true,
      primaryKey: true,
    },
    userName: {
      field: 'user_name',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userAge: {
      field: 'user_age',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gender: {
      field: 'gender',
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
  }, {
      tablename: 'apply',
      timestamps: false,
  });


  return Apply;
}