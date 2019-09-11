const router = require('express').Router();
const postsController = require('../controllers/posts');

router.post('/', postsController.createPost);
router.get('/', postsController.getAllPosts);
router.get('/:postId', postsController.getPost);
router.patch('/:postId', postsController.updatePost);
router.delete('/:postId');

module.exports = router;