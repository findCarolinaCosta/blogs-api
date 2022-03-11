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
      { foreignKey: 'post_id', otherKey: 'category_id', through: PostCategory, as: 'tags' },
    );

    models.Categories.belongsToMany(
      models.BlogPosts,
      { foreignKey: 'category_id', otherKey: 'post_id', through: PostCategory, as: 'posts' },
    );
  };

  return PostCategory;
};
