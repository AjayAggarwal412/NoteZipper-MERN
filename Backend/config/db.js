const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/notezipper";

const connectDB = () => {
  try {
    mongoose.connect(mongoURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MonogoDB connected`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
