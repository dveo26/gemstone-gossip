import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "unauthorized-no token found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "unauthorized-token verification failed" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "unauthorized-no user found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protected route middleware :", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export default protectRoute;
