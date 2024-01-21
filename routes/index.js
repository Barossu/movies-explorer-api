const router = require('express').Router();
const movieRouter = require('./movies');
const userRouter = require('./users');
const { login, createUser, signout } = require('../controllers/users');
const { validationCreateUser, validationLogin } = require('../middlewares/validators');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', validationLogin, login);
router.post('/signup', validationCreateUser, createUser);
router.use(auth);
router.use('/movies', movieRouter);
router.use('/users', userRouter);
router.post('/signout', signout);
router.use((req, res, next) => {
  next(new NotFoundError());
});

module.exports = router;
