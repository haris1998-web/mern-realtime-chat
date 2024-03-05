 const express = require('express');
 const {createChat, findUserChats, findChat} = require("../Controllers/chatController");

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUserChats);
router.post("/find/:firstId/:secondId", findChat);

module.exports = router;