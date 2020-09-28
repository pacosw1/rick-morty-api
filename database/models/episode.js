var mongoose = require("mongoose");

var { String, ObjectId } = mongoose.Schema.Types;

var requiredString = { type: String, required: true };
var required = true;

var schema = new mongoose.Schema({
  _id: { required, type: ObjectId },
  name: requiredString,
  air_date: requiredString,
  episode: requiredString,
  characters: [{ id: { required, type: ObjectId, ref: "Character" } }],
  created: { ...requiredString, default: +Date.toString() },
});

var Episode = mongoose.model("Episode", schema);

module.exports = Episode;
