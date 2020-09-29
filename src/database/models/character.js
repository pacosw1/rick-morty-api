var mongoose = require("mongoose");

var { String, ObjectId } = mongoose.Schema.Types;

var requiredString = { type: String, required: true };

var schema = new mongoose.Schema({
  _id: requiredString,
  name: requiredString,
  status: requiredString,
  species: requiredString,
  type: { type: String, default: "" },
  gender: requiredString,
  origin: {
    type: ObjectId,
    default: "Unknown",
    ref: "Location",
  },
  location: {
    type: ObjectId,
    default: "Unknown",
    ref: "Location",
  },
  image: requiredString,
  episode: [{ ref: "Episode", required: true, type: ObjectId }],
  created: requiredString,
});

var Character = mongoose.model("Character", schema);

module.exports = Character;
