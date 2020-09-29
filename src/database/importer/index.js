const { Episode, Location, Character } = require("..");
const { importData } = require("../seeding/scripts/importer");

let charJSON = fs.readFileSync("./seeds/characters.json");
let locJSON = fs.readFileSync("./seeds/locations.json");
let episodeJSON = fs.readFileSync("./seeds/episodes.json");

importData(charJSON, Character);
importData(locJSON, Location);
importData(episodeJSON, Episode);
