const router = require('express').Router();
const movieRouter = require('./movies');
const userRouter = require('./users');
const { login, createUser } = require('../controllers/users');
const { validationCreateUser, validationLogin } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

router.post('/signin', validationLogin, login);
router.post('/signup', validationCreateUser, createUser);
router.use(auth);
router.use('/movies', movieRouter);
router.use('/users', userRouter);

module.exports = router;
