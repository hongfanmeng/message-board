const express = require("express");
const router = express.Router();
const Posts = require("./Posts.js");

router.get("/", Posts.queryPost);
router.post("/", Posts.addPost);
router.delete("/:postid", Posts.delPost);

module.exports = router;
