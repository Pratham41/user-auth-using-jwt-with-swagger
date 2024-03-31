const { getAllPosts } = require("../controllers/post.controller")
const { protect } = require("../middlewares/auth")

const router = require("express").Router()


router.route("/").get(protect, getAllPosts)   // PROTECTING ROUTE FOR AUTHORIZED USERS ONLY

module.exports = router