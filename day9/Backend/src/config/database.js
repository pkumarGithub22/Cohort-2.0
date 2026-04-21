// const mongoose = require("mongoose")
require('dotenv').config()


// function connectToDB() {
//     mongoose.connect(process.env.MONGO_URI)
//         .then(() => {
//             console.log("Connected to DB")
//         })
// }

// module.exports = connectToDB


const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("✅ Connected to DB");
  } catch (error) {
    console.error("❌ DB Connection Error:");
    console.error(error.message);
  }
}

module.exports = connectToDB;