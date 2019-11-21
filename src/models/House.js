module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      information: {
        field: 'information',
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      maxDeposit: {
        field: 'maxDeposit',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxMonthly: {
        field: 'maxMonthly',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageData: {
        field: 'imageData',
        type: DataTypes.STRING(100),
        allowNull: false,
      }}, {
        tablename: 'house',
        timestamps: false,
      });


      House.findHouseAddress = (keyword) => sequelize.query(
        `SELECT * FROM houses
        WHERE address LIKE '%${keyword}%';`
      );
  
      return House;
  }
