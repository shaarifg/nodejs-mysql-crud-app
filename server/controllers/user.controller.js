const { userModel } = require("../models");

const register = async (req, res) => {
  try {
    const user = userModel.build({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    await user.save();
    res
      .status(201)
      .json({ message: "user registered successfully", user: user });
  } catch (error) {
    res.status(500).send("server eror");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.status(200).json({ message: "found all users", users: users });
  } catch (error) {
    res.status(500).json("Internal error by shaarif");
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.update(
      {
        id: req.body.id,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(202).json("user updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

// method to delete the user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  register,
  getAllUsers,
  updateUser,
  deleteUser,
};
