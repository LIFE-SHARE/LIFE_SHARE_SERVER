module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    id: {
      field: 'id',
      type: DataTypes.STRING(100),
      allowNull: false,
      unipue: true,
      primaryKey: true,
    },
    pw: {
      field: 'pw',
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    age: {
      field: 'age',
      type: DataTypes.INTEGER(50),
      allowNull: false,
    },
    phone_number: {
      field: 'phone_number',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    auth: {
      field: 'auth',
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    gender: {
      field: 'gender',
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    join_date: {
      field: 'join_date',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }, 
    }, {
      tablename: 'member',
      timestamps: false,
    });

    return Member;
}