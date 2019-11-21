module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
      rule: {
        field: 'rule',
        type: DataTypes.STRING(1000),
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
        tablename: 'member',
        timestamps: false,
      });
  
      return House;
  }
