import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongooseDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

/*app.get("/", (req, res) => {
  //route route to localhost:5000
  res.send("Hello World!!");
});*/
app.use(cookieParser()); //access the cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
