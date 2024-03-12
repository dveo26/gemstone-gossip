import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connectio=ng to Mongodb", error.messasge);
  }
};

export default connectToMongoDB;
