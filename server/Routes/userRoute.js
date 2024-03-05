const express = require('express');
const {registerUser, loginUser, findUser, getUsers} = require('../Controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/find/:userId", findUser);

module.exports = router;