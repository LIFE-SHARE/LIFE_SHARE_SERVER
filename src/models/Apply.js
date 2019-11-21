module.exports = (sequelize, DataTypes) => {
  const Apply = sequelize.define('Apply', {
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
    join_date: {
      field: 'join_date',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }, 
  }, {
      tablename: 'apply',
      timestamps: false,
  });


  return Apply;
}