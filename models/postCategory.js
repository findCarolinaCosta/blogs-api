const { DataTypes } = require('sequelize');

const Attributes = {
  postId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostsCategory',
    Attributes,
    {
      timestamps: false,
      tableName: 'PostsCategories',
    });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory, as: 'tags' },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory, as: 'posts' },
    );
  };

  return PostCategory;
};
