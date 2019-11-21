module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        field: 'userId',
        type: DataTypes.STRING(100),
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ageLimit: {
        field: 'ageLimit',
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

      House.getHouseAll = () => House.findAll({
        // attributes: ['id', 'name', 'userId', 'address', 'age', 'auth', 'join_date'],
      });

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
