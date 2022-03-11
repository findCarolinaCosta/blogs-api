module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostsCategory', {},
    {
      underscored: true,
      timestamps: false,
      tableName: 'PostsCategories',
    });

  PostCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.Categories,
      { foreignKey: 'post_id', otherKey: 'categoryId', through: PostCategory, as: 'tags' },
    );

    models.Categories.belongsToMany(
      models.BlogPosts,
      { foreignKey: 'categoryId', otherKey: 'post_id', through: PostCategory, as: 'posts' },
    );
  };

  return PostCategory;
};
