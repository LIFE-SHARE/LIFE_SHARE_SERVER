module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        allowNull: false,
        unipue: true,
        primaryKey: true,
      },
      imageData: {
        field: 'imageData',
        type: DataTypes.STRING(100),
        allowNull: false
      }
    }, {
        tablename: 'image',
        timestamps: false,
      });
      return Image;
  }