module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false,
      autoIncrement: true, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'Categories',
  });
  return Category;
};