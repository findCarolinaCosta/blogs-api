const Post = require('../services/post');

const createPost = async (req, res, next) => {
  try {
    const post = await Post.createPost({ ...req.body, decoded: req.decoded });
    
    if (post === '"categoryIds" not found') {
      return res.status(400).json({ message: post });
    }

    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const getPosts = async (_req, res, next) => {
  try {
    const posts = await Post.getPosts();

    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const post = await Post.getPostById(req.params);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const post = await Post.updatePost({ 
      ...req.body, decoded: req.decoded, id: req.params.id });

    if (post === 'Unauthorized user') {
      return res.status(401).json({ message: post });
    }

    if (post === 'Categories cannot be edited') { 
      return res.status(400).json({ message: post }); 
    }

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const destroyPost = async (req, res, next) => {
  try {
    const post = await Post.destroyPost({ id: req.params.id, decoded: req.decoded });
  
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    if (post === 'Unauthorized user') { 
      return res.status(401).json({ message: post }); 
    }

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getSearchTerm = async (req, res, next) => {
  try {
    const post = await Post.getSearchTerm(req.query.q);
    
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  destroyPost,
  getSearchTerm,
};
