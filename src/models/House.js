module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
      userId: {
        field: 'userId',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      name: {
        field: 'name',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      address: {
        field: 'address',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      genderLimit: {
        field: 'genderLimit',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      ageLimit: {
        field: 'ageLimit',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxMember: {
        field: 'maxMember',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contractperiod: {
        field: 'contractperiod',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      information: {
        field: 'information',
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      imageData: {
        field: 'imageData',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      join_date: {
        field: 'join_date',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }, 
      }, {
        tablename: 'house',
        timestamps: false,
      });

      House.findHouseAddress = (keyword) => sequelize.query(
        `SELECT * FROM houses
        WHERE address LIKE '%${keyword}%';`
      );

      House.getHouseAll = () => House.findAll({});

      House.getHouse = (houseId) => House.findOne({
        where: {
          id: houseId,
        }
      });

      House.getUserHouse = (userId) => House.findAll({
        where: {
          userId: userId,
        }
      });
  
      return House;
  }
