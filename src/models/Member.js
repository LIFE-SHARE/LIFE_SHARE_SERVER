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
    email: {
      field: 'email',
      type: DataTypes.STRING(100),
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


    Member.findMemberId = (id) => Member.findOne({
      where: {
        id: id,
      },

      raw: true,
    });

    Member.findMemberForLogin = (id, pw) => Member.findOne({
      attributes: ['id', 'name', 'phone_number', 'gender', 'age', 'auth', 'join_date'],

      where: {
        id: id,
        pw: pw,
      },

      raw: true,
    });

    Member.registerAccount = (id, pw, name, phone_number, auth, age, gender) => Member.create({
      id: id,
      pw: pw,
      name: name,
      phone_number: phone_number,
      auth: auth,
      gender: gender,
      age: age,
    });

    return Member;
}