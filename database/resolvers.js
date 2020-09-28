const { models } = require("mongoose");

const { Character, Location, Episode } = require("./index");

const resolvers = {
  Query: {
    // characters: (page) => {},
    character: async (id) => getCharacter(id),
    // episodes: (page) => {},
    episode: (id) => getEpisode(id),
    // locations: (page) => {},
    location: (id) => getLocation(id),
  },
};

//returns a single episode if found
const getLocation = async (id) => {
  try {
    //look for character with given id
    let location = await Location.findById(id);

    //join documents
    location.populate("residents");

    //return character
    return episode;
  } catch (err) {
    console.log(err);
    //return null as err occured
    return null;
  }
};

//returns a single episode if found
const getEpisode = async (id) => {
  try {
    //look for character with given id
    let episode = await Episode.findById(id);

    //join documents
    character.populate("character");

    //return character
    return episode;
  } catch (err) {
    console.log(err);
    //return null as err occured
    return null;
  }
};

//get character resolver
const getCharacter = async (id) => {
  try {
    //look for character with given id
    let character = await Character.findById(id);

    //join documents
    character.populate("origin");
    character.populate("location");

    //return character
    return character;
  } catch (err) {
    console.log(err);
    //return null as err occured
    return null;
  }
};

module.resolvers = resolvers;
