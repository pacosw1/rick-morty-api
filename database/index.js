var mongoose = require("mongoose");

//function to connect to mongoDB
mongoose.connect(
  process.env.URI,
  {
    dbName: "rickandmorty-pacosw1",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to " + "MongoDB database")
);

module.exports.Location = require("./models/location");
module.exports.Episode = require("./models/episode");
module.exports.Character = require("./models/character");
