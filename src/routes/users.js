const router = require('express').Router();
const usersController = require('../controllers/users');

router.post('/', usersController.createUser);
router.get('/', usersController.getAllUsers);
router.get('/:userId', usersController.getUser);
router.patch('/:userId', usersController.updateUser);
router.delete('/:userId', usersController.deleteUser);

module.exports = router;