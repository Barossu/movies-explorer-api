const router = require('express').Router();
const {
  getCurrentUser, patchUserInfo,
} = require('../controllers/users');
const { validationPatchUserInfo } = require('../middlewares/validators');

router.get('/me', getCurrentUser);
router.patch('/me', validationPatchUserInfo, patchUserInfo);

module.exports = router;
