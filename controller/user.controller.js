const { userService } = require("../service");

const addUser = async (req, res) => {
  const user = req.body;
  try {
    const result = await userService.handleAddUserData(user);
    res
      .status(201)
      .json({ massage: "User fetched successfully.", data: result });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data.", error });
  }
};

const getUser = async (req, res) => {
  try {
    const result = await userService.handleGetUserData();
    res
      .status(200)
      .json({ message: "User fetched successfully.", data: result });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data.", error });
  }
};

module.exports = {
  addUser,
  getUser,
};
