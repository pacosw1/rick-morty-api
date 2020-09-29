var mongoose = require("mongoose");

var { String, ObjectId } = mongoose.Schema.Types;

var requiredString = { type: String, required: true };
var required = true;

var schema = new mongoose.Schema({
  _id: requiredString,
  name: requiredString,
  type: requiredString,
  dimension: requiredString,
  residents: [{ ref: "Character", type: ObjectId, required }],
  created: { ...requiredString },
});

var Location = mongoose.model("Location", schema);

module.exports = Location;
