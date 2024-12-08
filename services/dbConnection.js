const MONGO_URI = process.env.MONGO_URI;
const mongoose = require("mongoose");
async function dbConnect() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected!');
    }
    catch(e) {
        console.log(e.message);
    }
}

module.exports = dbConnect;