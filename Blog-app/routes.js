const express = require("express");

// express.router digunakan untuk mengelola router pada aplikasi express js
const router = express.Router();

const {
	addArticle,
	getAllArticle,
	updateArticle,
	deleteArticle,
} = require("./handler/articleHandler");

const {
	addComment,
	getAllComment,
	updateComment,
	deleteComment,
} = require("./handler/commentHandler");

router.post("/article", addArticle);
router.get("/articles", getAllArticle);
router.put("/article/:id", updateArticle);
router.delete("/article/:id", deleteArticle);

router.post("/comment", addComment);
router.get("/comments", getAllComment);
router.put("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

module.exports = router;
