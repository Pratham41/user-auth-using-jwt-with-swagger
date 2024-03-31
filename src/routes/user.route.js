const router = require("express").Router()
const { loginUser, registerUser, logoutUser, getAllUsers } = require("../controllers/user.controller")
const { userRegisterValidation, userLoginValidation } = require("../validators/user.validator")
const { protect } = require("../middlewares/auth")


router.route("/").get(protect, getAllUsers) // PROTECTED ROUTE FOR AUTHORIZES USER
router.route("/login").post(userLoginValidation, loginUser)
router.route("/logout").post(logoutUser)
router.route("/register").post(userRegisterValidation, registerUser)


module.exports = router