var mongoose = require("mongoose");

var { String, ObjectId } = mongoose.Schema.Types;

var requiredString = { type: String, required: true };

var schema = new mongoose.Schema({
  _id: requiredString,
  name: requiredString,
  status: requiredString,
  species: requiredString,
  type: requiredString,
  gender: requiredString,
  origin: {
    type: ObjectId,
    required: true,
    ref: "Location",
  },
  location: {
    type: ObjectId,
    required: true,
    ref: "Location",
  },
  image: requiredString,
  episode: [{ ref: "Episode", required: true, type: ObjectId }],
  created: { requiredString, default: +Date.toString() },
});

var Character = mongoose.model("Character", schema);

module.exports = Character;