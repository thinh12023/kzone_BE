const express = require("express");
const router = express.Router();
const { imageController } = require("../controllers");
const { upload, checkValidToken } = require("../middlewares");

//upload single images
router.post("/upload", checkValidToken, upload.single("file"), imageController.upload);

module.exports = router;