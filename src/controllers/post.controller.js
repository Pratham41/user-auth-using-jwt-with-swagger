const errorFunction = require("../utils/errorFunction");

// GET SOME MESSAGE
const getAllPosts = async (req, res) => {
    try {
        return res
            .status(200)
            .json(errorFunction(false, "You can see the posts now!", "You are authorized user."));
    } catch (error) {
        return res
            .status(400)
            .json(errorFunction(true, "Something went wrong!"));
    }
}

module.exports = {
    getAllPosts
}