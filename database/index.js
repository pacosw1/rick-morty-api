var mongoose = require("mongoose");

//function to connect to mongoDB
exports.ConnectDB = async (uri, options) => {
  try {
    let response = await mongoose.connect(uri, options);
    console.log("Connected to MongoDB" + response);
    return 1;
  } catch (err) {
    console.log(`Connection to DB failed with err ${err.message}`);
    return 0;
  }
};

module.exports.Location = require("./models/location");
module.exports.Episode = require("./models/episode");
module.exports.Character = require("./models/character");
