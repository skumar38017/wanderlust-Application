import { Router } from 'express';
<<<<<<< HEAD
import {
  createPostHandler,
  deletePostByIdHandler,
  getAllPostsHandler,
  getFeaturedPostsHandler,
  getLatestPostsHandler,
  getPostByCategoryHandler,
  getPostByIdHandler,
  updatePostHandler,
} from '../controllers/posts-controller.js';
import { REDIS_KEYS } from '../utils/constants.js';
import { cacheHandler } from '../utils/middleware.js';
const router = Router();
=======
const router = Router();
import {
  createPostHandler,
  getAllPostsHandler,
  getFeaturedPostsHandler,
  getPostByCategoryHandler,
  getLatestPostsHandler,
  getPostByIdHandler,
  updatePostHandler,
  deletePostByIdHandler,
} from '../controllers/posts-controller.js';
>>>>>>> master

// Create a new post
router.post('/', createPostHandler);

// Get all posts
<<<<<<< HEAD
router.get('/', cacheHandler(REDIS_KEYS.ALL_POSTS), getAllPostsHandler);

// Route to get featured posts
router.get('/featured', cacheHandler(REDIS_KEYS.FEATURED_POSTS), getFeaturedPostsHandler);
=======
router.get('/', getAllPostsHandler);

// Route to get featured posts
router.get('/featured', getFeaturedPostsHandler);
>>>>>>> master

// Route to get posts by category
router.get('/categories/:category', getPostByCategoryHandler);

// Route for fetching the latest posts
<<<<<<< HEAD
router.get('/latest', cacheHandler(REDIS_KEYS.LATEST_POSTS), getLatestPostsHandler);
=======
router.get('/latest', getLatestPostsHandler);
>>>>>>> master
// Get a specific post by ID
router.get('/:id', getPostByIdHandler);

// Update a post by ID
router.patch('/:id', updatePostHandler);

// Delete a post by ID
router.delete('/:id', deletePostByIdHandler);

export default router;
