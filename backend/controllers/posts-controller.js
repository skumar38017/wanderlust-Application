import Post from '../models/post.js';
<<<<<<< HEAD
import {
  deleteDataFromCache,
  retrieveDataFromCache,
  storeDataInCache,
} from '../utils/cache-posts.js';
import { HTTP_STATUS, REDIS_KEYS, RESPONSE_MESSAGES, validCategories } from '../utils/constants.js';
=======
import { validCategories, HTTP_STATUS, RESPONSE_MESSAGES } from '../utils/constants.js';
>>>>>>> master
export const createPostHandler = async (req, res) => {
  try {
    const {
      title,
      authorName,
      imageLink,
      categories,
      description,
      isFeaturedPost = false,
    } = req.body;

    // Validation - check if all fields are filled
    if (!title || !authorName || !imageLink || !description || !categories) {
<<<<<<< HEAD
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: RESPONSE_MESSAGES.COMMON.REQUIRED_FIELDS });
=======
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: RESPONSE_MESSAGES.COMMON.REQUIRED_FIELDS });
>>>>>>> master
    }

    // Validation - check if imageLink is a valid URL
    const imageLinkRegex = /\.(jpg|jpeg|png|webp)$/i;
    if (!imageLinkRegex.test(imageLink)) {
<<<<<<< HEAD
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: RESPONSE_MESSAGES.POSTS.INVALID_IMAGE_URL });
=======
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: RESPONSE_MESSAGES.POSTS.INVALID_IMAGE_URL });
>>>>>>> master
    }

    // Validation - check if categories array has more than 3 items
    if (categories.length > 3) {
<<<<<<< HEAD
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: RESPONSE_MESSAGES.POSTS.MAX_CATEGORIES });
=======
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: RESPONSE_MESSAGES.POSTS.MAX_CATEGORIES });
>>>>>>> master
    }

    const post = new Post({
      title,
      authorName,
      imageLink,
      description,
      categories,
      isFeaturedPost,
    });

<<<<<<< HEAD
    const [savedPost] = await Promise.all([
      post.save(), // Save the post
      deleteDataFromCache(REDIS_KEYS.ALL_POSTS), // Invalidate cache for all posts
      deleteDataFromCache(REDIS_KEYS.FEATURED_POSTS), // Invalidate cache for featured posts
      deleteDataFromCache(REDIS_KEYS.LATEST_POSTS), // Invalidate cache for latest posts
    ]);

=======
    const savedPost = await post.save();
>>>>>>> master
    res.status(HTTP_STATUS.OK).json(savedPost);
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

export const getAllPostsHandler = async (req, res) => {
  try {
<<<<<<< HEAD
    const posts = await Post.find();
    await storeDataInCache(REDIS_KEYS.ALL_POSTS, posts);
    return res.status(HTTP_STATUS.OK).json(posts);
=======
    const posts = await Post.find().sort({ timeOfPost: -1 });
    res.status(HTTP_STATUS.OK).json(posts);
>>>>>>> master
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

export const getFeaturedPostsHandler = async (req, res) => {
  try {
    const featuredPosts = await Post.find({ isFeaturedPost: true });
<<<<<<< HEAD
    await storeDataInCache(REDIS_KEYS.FEATURED_POSTS, featuredPosts);
=======
>>>>>>> master
    res.status(HTTP_STATUS.OK).json(featuredPosts);
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

export const getPostByCategoryHandler = async (req, res) => {
  const category = req.params.category;
  try {
    // Validation - check if category is valid
    if (!validCategories.includes(category)) {
<<<<<<< HEAD
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: RESPONSE_MESSAGES.POSTS.INVALID_CATEGORY });
=======
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: RESPONSE_MESSAGES.POSTS.INVALID_CATEGORY });
>>>>>>> master
    }

    const categoryPosts = await Post.find({ categories: category });
    res.status(HTTP_STATUS.OK).json(categoryPosts);
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

export const getLatestPostsHandler = async (req, res) => {
  try {
    const latestPosts = await Post.find().sort({ timeOfPost: -1 });
<<<<<<< HEAD
    await storeDataInCache(REDIS_KEYS.LATEST_POSTS, latestPosts);
=======
>>>>>>> master
    res.status(HTTP_STATUS.OK).json(latestPosts);
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

export const getPostByIdHandler = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Validation - check if post exists
    if (!post) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: RESPONSE_MESSAGES.POSTS.NOT_FOUND });
    }

    res.status(HTTP_STATUS.OK).json(post);
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

export const updatePostHandler = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Validation - check if post exists
    if (!updatedPost) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: RESPONSE_MESSAGES.POSTS.NOT_FOUND });
    }

    res.status(HTTP_STATUS.OK).json(updatedPost);
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

export const deletePostByIdHandler = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    // Validation - check if post exists
    if (!post) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: RESPONSE_MESSAGES.POSTS.NOT_FOUND });
    }

    res.status(HTTP_STATUS.OK).json({ message: RESPONSE_MESSAGES.POSTS.DELETED });
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};
