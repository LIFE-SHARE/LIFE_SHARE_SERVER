module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      peopleCnt: {
        field: 'id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      information: {
        field: 'information',
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      Deposit: {
        field: 'Deposit',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Monthly: {
        field: 'Monthly',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageData: {
        field: 'imageData',
        type: DataTypes.STRING(100),
        allowNull: false,
      }}, {
        tablename: 'room',
        timestamps: false,
      });
      
      return Room;
  }