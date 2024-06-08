import User from "../models/user-model.js";

const getallUsers = async (req, res) => {
  try {
    const alluser = await User.find();
    res.status(200).json({
      alluser,
    });
  } catch (err) {
    res.status(404).json({
      msg: "page not found",
    });
  }
};

const createuser = async (req, res) => {
  try {
    const newuser = await User.create(req.body);
    res.status(201).json({
      newuser,
    });
  } catch (err) {
    res.status(404).json({
      msg: err,
    });
  }
};
const getuserbyid = async (req, res) => {
  try {
    const userbyid = await User.findById(req.params.id);
    res.status(200).json({
      userbyid,
    });
  } catch (err) {
    res.status(404).json({
      msg: "page not found",
    });
  }
};
const updateuser = async (req, res) => {
  try {
    const update_user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      update_user,
    });
  } catch (err) {
    res.status(404).json({
      msg: "page not found",
    });
  }
};
const deleteuser = async (req, res) => {
  try {
    const delete_user = await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      delete_user,
    });
  } catch (err) {
    res.status(404).json({
      msg: "page not found",
    });
  }
};

export { getallUsers, createuser, updateuser, getuserbyid, deleteuser };
