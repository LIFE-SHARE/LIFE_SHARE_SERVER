module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('room', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      house_id: {
        field: 'house_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peopleCnt: {
        field: 'id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deposit: {
        field: 'Deposit',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      monthly: {
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

      Room.createRoom = ( deposit, monthly, people_count, imageData, houseId ) => Room.create({
        deposit: deposit,
        monthly: monthly,
        peopleCnt: people_count,
        imageData: imageData,
        house_id: houseId,
      });

      Room.getRoomList = (houseId) => Room.findAll({
        where: {
          house_id: houseId,
        }
      });
      
      return Room;
  }