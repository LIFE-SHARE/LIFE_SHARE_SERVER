module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('room', {
      house_id: {
        field: 'house_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peopleCnt: {
        field: 'peopleCnt',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      money: {
        field: 'money',
        type: DataTypes.STRING(100),
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

      Room.createRoom = ( money, people_count, imageData, houseId ) => Room.create({
        money: money,
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