const router = require('express').Router();
const { celebrate } = require('celebrate');
const { loginValid, createUserValid } = require('../tools/validators');
const auth = require('../middlewares/auth');
const { login, createUser, logout } = require('../controllers/users');
const { NotFoundError } = require('../errors/Not_found');

router.post('/signin', celebrate(loginValid), login);
router.post('/signup', celebrate(createUserValid), createUser);

router.use('/users', auth, require('./users'));
router.use('/movies', auth, require('./movies'));

router.patch('/signout', auth, logout);

router.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Ссылка не найдена'));
});

module.exports = router;
