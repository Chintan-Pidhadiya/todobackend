const { userModel } = require("../model");

const handleAddUserData = (body) => {
  const user = userModel.create(body);
  try {
    if (!user) {
      throw new Error("User not created");
    }
  } catch (error) {
    throw new Error("No user found");
  }
};

const handleGetUserData = () => {
  const users = userModel.find({});
  try {
    if (!users) {
      throw new Error("No users found");
    }
    return users;
  } catch (error) {
    throw new Error("Error retrieving users");
  }
};

module.exports = {
  handleAddUserData,
  handleGetUserData,
};
