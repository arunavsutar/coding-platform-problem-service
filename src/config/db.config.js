const mongoose = require('mongoose');
const { NODE_ENV, ATLAS_DB_URL } = require('./server.config');


async function connectToDB() {
    try {
        if (NODE_ENV == "development") {
            await mongoose.connect(ATLAS_DB_URL);
        }
        else if (NODE_ENV == "production") {
            await mongoose.connect("Connect to some other DB.");
        }
    } catch (error) {
        console.log("Unable to connect to the DB Server.");
        console.log(error);
    }
}


module.exports = connectToDB;