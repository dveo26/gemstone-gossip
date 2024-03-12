import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    ); //exclude the logged in user

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getusersforsidebar controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
