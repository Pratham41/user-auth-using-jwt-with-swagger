const Users = require("../models/user.model");
const generateToken = require("../utils/generateToken");
const errorFunction = require("../utils/errorFunction");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const matchedUser = {
        _id: user._id,
        email: user.email,
        token: generateToken(user._id),
      };
      return res.status(200).json(errorFunction(false, "Login Successful !", matchedUser));
    } else {
      return res
        .status(401)
        .json(errorFunction(true, "Invalid email or password"));
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(errorFunction(true, "Something went wrong !"));
  }
};

const registerUser = async (req, res) => {
  try {
    const userExists = await Users.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json(errorFunction(true, "User Already Exists"));
    }

    const user = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      const newUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      };
      return res
        .status(201)
        .json(errorFunction(false, "User Created", newUser));
    } else {
      return res.status(400).json(errorFunction(true, "Error Creating User"));
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(errorFunction(true, "Error Adding User"));
  }
};

const logoutUser = async(req,res) => {
    try {
        // WE CAN REMOVE USERDATA OR TOKEN FROM CLIENT SIDE LIKE (localStorage)
        return res.status(200).json(errorFunction(false, "User logout done"));
    } catch (error) {
        console.log(error);
        return res.status(400).json(errorFunction(true, "Error Logging out"));
    }
}

const getAllUsers = async(req,res) => {
    try {
        const users = await Users.find({},{password:0})
        if(!users || !users.length){
            return res.status(400).json(errorFunction(true, "No users found!"));
        }
        return res.status(200).json(errorFunction(false, "Users list", users));
    } catch (error) {
        console.log(error);
        return res.status(400).json(errorFunction(true, "Error Geting Users"));

    }
}

module.exports = { loginUser, registerUser, logoutUser, getAllUsers }