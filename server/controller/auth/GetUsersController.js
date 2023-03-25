const { authModel } = require("../../models/auth/auth.model");
const asyncHandler = require("express-async-handler");

const getUserController = asyncHandler(async (req, res) => {
  let { username } = req.query;
  try {
    const users = await authModel.find({
      username: { $regex: username, $options: "i" },
    });
    return res.send(users);
  } catch (error) {
    return res.status(500).send({ error: "Somthing Went Wrong!", msg: error });
  }
});

module.exports = {
  getUserController,
};
