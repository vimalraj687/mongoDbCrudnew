const User = require("../models/userModel");

exports.home = (req, res) => {
  res.send("hello World");
};

//
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error("name and email are required");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("Email already exists");
    }

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json({
      success: true,
      message: "User created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    });
  }
};

// get users
exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});
    //  if(!users){

    //  }
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    });
  }
};

// delete
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "user successfully deleted ",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    });
  }
};

// update user
exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User upadated succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    });
  }
};
