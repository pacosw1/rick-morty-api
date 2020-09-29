const fs = require("fs");

const { Episode, Location, Character } = require("..");
const { importData } = require("./scripts/import");
let p = "./src/database/importer/seeds/";
let charJSON = fs.readFileSync(`${p}characters.json`);
let locJSON = fs.readFileSync(`${p}locations.json`);
let episodeJSON = fs.readFileSync(`${p}episodes.json`);

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/rickandmorty-pacosw1",
  { useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    //if able to connect
    importData(charJSON, Character);
    importData(locJSON, Location);
    importData(episodeJSON, Episode);

    process.exit(1);
  }
);
