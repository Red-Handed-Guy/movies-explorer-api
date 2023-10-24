const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  modifyUser,
  aboutUser,
} = require('../controllers/users');
const { modifyUserValid } = require('../tools/validators');

router.get('/me', aboutUser);
router.patch(
  '/me',
  celebrate(modifyUserValid),
  modifyUser,
);

module.exports = router;
