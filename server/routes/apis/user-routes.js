const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    //createDog,
    //saveDog,
    //deleteDog,
    login,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, saveDog);

//router.route('/').post(createDog).put(authMiddleware, saveDog);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

//router.route('/dogs/:dogId').delete(authMiddleware, deleteDog);

module.exports = router;
